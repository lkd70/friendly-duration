/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const friendlyDuration = require("./").default;

test("friendlyDuration(1000)", () => {
    expect(friendlyDuration(1000))
        .toBe("1 second");
});

test("friendlyDuration(100000)", () => {
    expect(friendlyDuration(100000))
        .toBe("1 minute and 40 seconds");
});

test("Test a value with hours, minutes, and seconds as a result", () => {
    expect(friendlyDuration(10000000))
        .toBe("2 hours, 46 minutes, and 40 seconds");
});

test("Test disabling addCommas and addAnd", () => {
    expect(friendlyDuration(1000000000, { addAnd: false, addCommas: false }))
        .toBe("11 days 13 hours 46 minutes 40 seconds");
});

test("friendlyDuration(100, { allowMs: true })", () => {
    expect(friendlyDuration(100, { allowMs: true }))
        .toBe("100 milliseconds");
});

test("friendlyDuration(100, { allowMs: false })", () => {
    expect(friendlyDuration(100, { allowMs: false }))
        .toBe("0 seconds");
});

test("friendlyDuration(1000000000000, { commaSeporateThousands: false })", () => {
    expect(friendlyDuration(1000000000000, { commaSeporateThousands: false }))
        .toBe("11574 days, 1 hour, 46 minutes, and 40 seconds");
});

test("", () => {
    expect(friendlyDuration(1000000000000, {
        strings: {
            day: "%d",
            hour: "%h",
            minute: "%m",
            second: "%s",
            millisecond: "%ms",
        },
        pluralize: false,
        commaSeporateThousands: false,
        addAnd: false,
        addCommas: false,

    }))
        .toBe("11574d 1h 46m 40s");
});
