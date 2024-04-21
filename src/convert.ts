import fs from 'fs';
import readline from 'readline';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer'; 

export function processCSSFile(filePath: string): void {
    fs.readFile(filePath, 'utf8', (err, css) => {
        if (err) {
            console.error('Error reading CSS file:', err);
            return;
        }

        // Initialize PostCSS with plugins like autoprefixer
        const processor = postcss([autoprefixer]);

        // Process the CSS
        processor.process(css, { from: filePath, to: filePath })
            .then(result => {
                fs.writeFile(filePath, result.css, err => {
                    if (err) {
                        console.error('Error writing processed CSS to file:', err);
                        return;
                    }
                    if (result.map) {
                        fs.writeFile(filePath + '.map', result.map.toString(), () => {});
                    }
                    console.log('CSS processed and saved successfully.');
                });
            })
            .catch(processError => {
                console.error('Error processing CSS:', processError);
            });
    });
}
// Create readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt user to enter the path to the CSS file
rl.question('Enter the path to the CSS file: ', (answer) => {
    const cssFilePath = answer.trim();
    if (fs.existsSync(cssFilePath)) {
        // Create a PostCSS processor instance, assuming some plugins might be used here
        const postcssProcessor = postcss(); // Initialize PostCSS with possible plugins
        processCSSFile(cssFilePath);
    } else {
        console.error('Invalid file path. Please enter a valid path.');
    }
    rl.close();
});

// Handle the close event of readline interface
rl.on('close', () => {
    console.log('Exiting program.');
    process.exit(0);
});
