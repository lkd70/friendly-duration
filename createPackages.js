const fs = require("fs");

const common_package = {
    "type": "commonjs"
};

const module_package = {
    "type": "module"
};


fs.writeFileSync("./dist/cjs/package.json", JSON.stringify(common_package));
fs.writeFileSync("./dist/mjs/package.json", JSON.stringify(module_package));
