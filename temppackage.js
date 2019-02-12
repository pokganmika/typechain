const package = {
  "name": "typechain",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/pokganmika/typechain.git",
  "author": "calmgust <calmgust@gmail.com>",
  "license": "MIT",
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc",
    "start": "tsc-watch --onSuccess \" node ./dist/index.js \" "
  },
  "devDependencies": {
    "tsc-watch": "^2.1.0"
  }
}
