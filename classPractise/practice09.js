const { Actions } = require("../classPractise/Actions.js")

function test1() {
    Actions.visitUrl("www.example.com")
    .then(() => Actions.login('TechGlobal', 'Test1234'))
    .then(() => Actions.validateTitle('AnyTitle'))
    .catch(err => console.log(err));

}

test1();


async function test2() {
    try {
        await Actions.visitUrl("www.example.com");
        await Actions.login('TechGlobal', 'Test1234');
        await Actions.validateTitle('AnyTitle');
    } catch(err) {
        console.log(err);
    }
}
test2();