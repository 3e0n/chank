/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
/**
 * @param {{
 *      destDir: string;
 *      paths: string[];
 * }} config
 */
export function copyFilesSync(config) {
    const df = path.resolve(config.destDir);
    if (!fs.existsSync(df)) {
        fs.mkdirSync(df, { recursive: true });
    }
    for (const pathFile of config.paths) {
        const pf = path.resolve(pathFile);
        const fileName = path.basename(pf);
        const destFilePath = path.resolve(df, fileName);
        fs.copyFileSync(pf, destFilePath);
    }
}
