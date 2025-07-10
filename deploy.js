//node deploy.js
const BRANCH_NAME = 'main';
const COMMIT_MESSAGE_TEXT = "Updated site";

const { execSync } = require("child_process");
const path = require("path");

execSync(`node "${path.join(__dirname, 'minify.js')}"`, { stdio: 'inherit' });

execSync('git add .');
execSync(`git commit -m "${COMMIT_MESSAGE_TEXT}"`);
execSync(`git push origin ${BRANCH_NAME}`);