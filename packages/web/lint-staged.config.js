module.exports = {
  '*.{ts,tsx}': ['eslint --cache --fix', () => 'tsc --skipLibCheck --noEmit'],
  '*.css': ['stylelint'],
  '*.{json,md,js,jsx,ts,tsx,css}': ['prettier --write'],
};
