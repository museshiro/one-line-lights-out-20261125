const fs = require('node:fs');

fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', 'The download is at 99%. ' + 'I was going to tell you when it finished.');
