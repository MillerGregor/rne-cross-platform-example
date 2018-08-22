const fs = require("fs");
const path = require("path");

const ALLOW_PUSH = ".allowPush";

console.log(process.env.GIT_PARAMS);

if (!fs.existsSync(path.resolve(__dirname, ALLOW_PUSH))) {
  throw new Error(`*** ${ALLOW_PUSH} file not found. push aborted ***`);
}
