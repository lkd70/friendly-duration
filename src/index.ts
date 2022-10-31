const onlyOne = (inputs: number[]) =>
    inputs.filter((input: number) => input >= 1).length === 1;

const moreThanOne = (inputs: number[]) =>
    inputs.filter((input: number) => input >= 1).length > 1;

const moreThanTwo = (inputs: number[]) =>
    inputs.filter((input: number) => input >= 1).length > 2;

const formatValue = (
    value: number,
    string: string,
    plural: boolean,
    thousands = false,
) =>
    string.replace("%", thousands ? value.toLocaleString() : value.toString()) +
    (plural && value > 1 ? "s" : "");

interface options {
    addCommas?: boolean;
    oxfordComma?: boolean;
    addAnd?: boolean;
    allowMs?: boolean;
    commaSeporateThousands?: boolean;
    pluralize?: boolean;
    strings?: {
        day?: string;
        hour?: string;
        minute?: string;
        second?: string;
        millisecond?: string;
    };
}

export default (
    ms: number,
    options: options = {
        addCommas: true,
        oxfordComma: true,
        addAnd: true,
        allowMs: true,
        commaSeporateThousands: true,
        pluralize: true,
        strings: {
            day: "% day",
            hour: "% hour",
            minute: "% minute",
            second: "% second",
            millisecond: "% millisecond",
        },
    },
) => {
    if (typeof options !== "object") {
        options = {};
    }
    if (options?.addCommas === undefined) {
        options.addCommas = true;
    }
    if (options?.oxfordComma === undefined) {
        options.oxfordComma = true;
    }
    if (options?.addAnd === undefined) {
        options.addAnd = true;
    }
    if (options?.allowMs === undefined) {
        options.allowMs = true;
    }
    if (options?.commaSeporateThousands === undefined) {
        options.commaSeporateThousands = true;
    }
    if (options?.pluralize === undefined) {
        options.pluralize = true;
    }
    if (options?.strings === undefined) {
        options.strings = {};
    }
    if (options?.strings?.day === undefined) {
        options.strings.day = "% day";
    }
    if (options?.strings?.hour === undefined) {
        options.strings.hour = "% hour";
    }
    if (options?.strings?.minute === undefined) {
        options.strings.minute = "% minute";
    }
    if (options?.strings?.second === undefined) {
        options.strings.second = "% second";
    }
    if (options?.strings?.millisecond === undefined) {
        options.strings.millisecond = "% millisecond";
    }

    const s = Math.floor((ms / 1000) % 60);
    const m = Math.floor((ms / (1000 * 60)) % 60);
    const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const d = Math.floor(ms / (1000 * 60 * 60 * 24));

    let string = "";

    string +=
        d > 0
            ? `${formatValue(
                d,
                options.strings.day,
                options.pluralize,
                options.commaSeporateThousands,
            )}` +
            `${moreThanOne([h, m, s]) && options.addCommas ? "," : ""}` +
            `${options.addAnd && onlyOne([h, m, s])
                ? (options.oxfordComma &&
                    options.addCommas &&
                    moreThanTwo([d, h, m, s])
                    ? ","
                    : "") + " and"
                : ""
            } `
            : "";

    string +=
        h > 0
            ? `${formatValue(h, options.strings.hour, options.pluralize)}` +
            `${moreThanOne([m, s]) && options.addCommas ? "," : ""}` +
            `${options.addAnd && onlyOne([m, s])
                ? (options.oxfordComma &&
                    options.addCommas &&
                    moreThanTwo([d, h, m, s])
                    ? ","
                    : "") + " and"
                : ""
            } `
            : "";

    string +=
        m > 0
            ? `${formatValue(m, options.strings.minute, options.pluralize)}` +
            `${moreThanOne([s]) && options.addCommas ? "," : ""}` +
            `${options.addAnd && onlyOne([s])
                ? (options.oxfordComma &&
                    options.addCommas &&
                    moreThanTwo([d, h, m, s])
                    ? ","
                    : "") + " and"
                : ""
            } `
            : "";

    string +=
        s > 0
            ? `${formatValue(s, options.strings.second, options.pluralize)}`
            : d + h + m + s == 0
                ? options.allowMs
                    ? `${formatValue(
                        ms,
                        options.strings.millisecond,
                        options.pluralize,
                    )}`
                    : "0 seconds"
                : "";
    return string;
};
