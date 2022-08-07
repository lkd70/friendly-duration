const pluralize = (num, word) => (num > 1 ? word + "s" : word);

const onlyOne = (inputs) => inputs.filter((input) => input >= 1).length === 1;

const moreThanOne = (inputs) => inputs.filter((input) => input >= 1).length > 1;

/**
 * @param  {number} ms - Milliseconds to parse
 * @param  {boolean} addCommas=true - Add commas if there"s multiple following values
 * @param  {boolean} addAnd=true - Add "and" if there"s a following value and it"s the last value
 * @returns {string} - Parsed time
 * @example friendlyDuration(1000) // 1 second
 * @example friendlyDuration(172800000 + 1000 + 7200000) // 2 days, 2 hours, and 1 second
 */
export default (ms, addCommas = true, addAnd = true) => {
    const s = Math.floor((ms / 1000) % 60);
    const m = Math.floor((ms / (1000 * 60)) % 60);
    const h = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const d = Math.floor(ms / (1000 * 60 * 60 * 24));

    let string = "";
    string +=
        d > 0
            ? `${d} ${pluralize(d, "day")}` +
              `${moreThanOne([h, m, s]) && addCommas ? "," : ""}` +
              `${addAnd && onlyOne([h, m, s]) ? " and" : ""} `
            : "";

    string +=
        h > 0
            ? `${h} ${pluralize(h, "hour")}` +
              `${moreThanOne([m, s]) && addCommas ? "," : ""}` +
              `${addAnd && onlyOne([m, s]) ? " and" : ""} `
            : "";

    string +=
        m > 0
            ? `${m} ${pluralize(m, "minute")}` +
              `${moreThanOne([s]) && addCommas ? "," : ""}` +
              `${addAnd && onlyOne([s]) ? " and" : ""} `
            : "";

    string += s > 0 ? `${s} ${pluralize(s, "second")}` : "";
    return string;
};
