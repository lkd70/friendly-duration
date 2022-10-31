<h1 align="center">Welcome to friendly-duration 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.gnu.org/licenses/agpl-3.0.en.html" target="_blank">
    <img alt="License: AGPL--3.0" src="https://img.shields.io/badge/License-AGPL--3.0-yellow.svg" />
  </a>
  <a href="https://twitter.com/lkdornan70" target="_blank">
    <img alt="Twitter: lkdornan70" src="https://img.shields.io/twitter/follow/lkdornan70.svg?style=social" />
  </a>
</p>

> Converts the given millisecond value in to a human readable format.

### [GitHub](https://github.com/lkd70/friendly-duration)
### [NPM](https://www.npmjs.com/package/friendly-duration)

## Install

```sh
yarn add friendly-duration
```
Or

```sh
npm install friendly-duration
```

## Usage

```javascript
import friendlyDuration from "friendly-duration";

// OR in CommonJS:
// const friendlyDuration = require("friendlyDuration").default;

// friendlyDuration(milliseconds, { OPTIONS })
console.log(friendlyDuration(1000));
// 1 second
console.log(friendlyDuration(86400000 + 10000));
// 1 day and 10 seconds
console.log(friendlyDuration(86400000 + 3600000 + 10000));
// 1 day, 1 hour, and 10 seconds
console.log(friendlyDuration(86400000 + 3600000 + 10000, { addCommas: false }));
// 1 day 1 hour and 10 seconds
```

## Parameters



| Parameter                      | Required | Default         | Type    | Description                                                                                                        |
|--------------------------------|----------|-----------------|---------|--------------------------------------------------------------------------------------------------------------------|
| ms                             | True     | N/a             | Number  | Milliseconds to convert                                                                                            |
| options                        | False    | {}              | Object  | An optional object of the following options                                                                        |
| options.addCommas              | False    | True            | Boolean | Add commas in between values?                                                                                      |
| options.oxfordComma            | False    | True            | Boolean | Add an oxford comma? (a comma before an "and" in lists greater than two items)                                     |
| options.addAnd                 | False    | True            | Boolean | Add an "and" before the last value                                                                                 |
| options.allowMs                | False    | True            | Boolean | If the entire value is less than 1 second, show milliseconds instead (otherwise "0 seconds")                       |
| options.commaSeporateThousands | False    | True            | Boolean | If the days value exceeds 999, add a comma to separate the thousands unit (1,000 instead of 1000)                  |
| options.pluralize              | False    | True            | Boolean | Add an "s" to the end of the value string if the value is greater than 1 (5 seconds instead of 5 second)           |
| options.strings                | False    | {}              | Object  | An optional object of the following strings in with "%" represents the value passed in to the string               |
| options.strings.day            | False    | "% day"         | string  | A string to define the output format of the days value. % will be replaced with the number of days                 |
| options.strings.hour           | False    | "% hour"        | string  | A string to define the output format of the hours value. % will be replaced with the number of hours               |
| options.strings.minute         | False    | "% minute"      | string  | A string to define the output format of the minutes value. % will be replaced with the number of minutes           |
| options.strings.second         | False    | "% second"      | string  | A string to define the output format of the seconds value. % will be replaced with the number of seconds           |
| options.strings.millisecond    | False    | "% millisecond" | string  | A string to define the output format of the milliseconds value. % will be replaced with the number of milliseconds |
## Author

👤 **LKD70**

* Twitter: [@lkdornan70](https://twitter.com/lkdornan70)
* Github: [@LKD70](https://github.com/LKD70)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [LKD70](https://github.com/LKD70).<br />
This project is [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) licensed.
