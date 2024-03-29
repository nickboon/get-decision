const Application = require('spectron').Application;
const test = require('tape');
// pass the path to the built application from the command line
const path = process.argv[2];

module.exports = (description, fn) => {
    const app = new Application({ path: path });

    test(description, t => {
        app.start()
            .then(() => {
                fn(t);
                t.end();
            });
    });
    test('Teardown', t => {
        app.client.window()
            .then(() => app.stop())
            .finally(() => t.end());
    });
}
