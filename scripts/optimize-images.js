import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
    console.error(`Public directory not found at: ${publicDir}`);
    process.exit(1);
}

fs.readdir(publicDir, (err, files) => {
    if (err) {
        console.error('Error reading public directory:', err);
        return;
    }

    files.forEach(file => {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

            if (!fs.existsSync(outputPath)) {
                console.log(`Converting: ${file} -> ${path.basename(outputPath)}`);
                sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath)
                    .then(() => console.log(`Success: ${path.basename(outputPath)}`))
                    .catch(err => console.error(`Error converting ${file}:`, err));
            } else {
                console.log(`Skipping (already exists): ${path.basename(outputPath)}`);
            }
        }
    });
});
