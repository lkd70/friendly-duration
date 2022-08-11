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

// friendlyDuration(MS, AddCommas?, AddAnd?)
console.log(friendlyDuration(1000)); // 1 second
console.log(friendlyDuration(86400000 + 10000)); // 1 day and 10 seconds
console.log(friendlyDuration(86400000 + 3600000 + 10000)); // 1 day, 1 hour and 10 seconds
console.log(friendlyDuration(86400000 + 3600000 + 10000, false, false)); // 1 day 1 hour 10 seconds
```

## Author

👤 **LKD70**

* Twitter: [@lkdornan70](https://twitter.com/lkdornan70)
* Github: [@LKD70](https://github.com/LKD70)

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [LKD70](https://github.com/LKD70).<br />
This project is [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) licensed.
