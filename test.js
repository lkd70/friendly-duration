/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const friendlyDuration = require("./").default;

test("friendlyDuration(1000)", () => {
    expect(friendlyDuration(1000))
        .toBe("1 second");
});

test("friendlyDuration(10000)", () => {
    expect(friendlyDuration(10000))
        .toBe("10 seconds");
});

test("friendlyDuration(3600000  + 10000)", () => {
    expect(friendlyDuration(3600000  + 10000))
        .toBe("1 hour and 10 seconds");
});


test("friendlyDuration(3600000  + 10000 + 60000)", () => {
    expect(friendlyDuration(3600000  + 10000 + 60000))
        .toBe("1 hour, 1 minute and 10 seconds");
});

test("friendlyDuration(3600000  + 10000 + 60000, false, false)", () => {
    expect(friendlyDuration(3600000  + 10000 + 60000, false, false))
        .toBe("1 hour 1 minute 10 seconds");
});
