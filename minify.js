//in root folder:
//npm init
//npm install rimraf html-minifier clean-css-cli terser
//node minify.js

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function walk(directory, extension, fileList) {
    fs.readdirSync(directory).forEach(fileOrDir => {
        const fullPath = path.join(directory, fileOrDir);
        if (fs.statSync(fullPath).isDirectory()) {
            walk(fullPath, extension, fileList);
        } else if (fileOrDir.endsWith(extension)) {
            fileList.push(fullPath);
        }
    });
}

const sourceDir = path.join(process.cwd(), 'source');
const outputDir = path.join(process.cwd(), 'site');

if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
}

fs.cpSync(sourceDir, outputDir, { recursive: true });

const htmls = [];
walk(outputDir, ".html", htmls);
htmls.forEach(htmlFile => {
    execSync('npx html-minifier --collapse-whitespace --remove-comments --remove-redundant-attributes --remove-empty-attributes --minify-css true --minify-js true -o "' + htmlFile + '" "' + htmlFile + '"');
});

const csses = [];
walk(outputDir, ".css", csses);
csses.forEach(cssFile => {
    execSync('npx cleancss -o "' + cssFile + '" "' + cssFile + '"');
});

const jses = [];
walk(outputDir, ".js", jses);
jses.forEach(jsFile => {
    execSync('npx terser "' + jsFile + '" -o "' + jsFile + '"');
});