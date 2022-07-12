module.exports = {
  '*.{ts,tsx}': [
    'eslint --cache --fix -c ./packages/web/.eslintrc.json',
    () => 'tsc --skipLibCheck --noEmit --project ./packages/web/tsconfig.json',
  ],
  '*.css': ['stylelint'],
  '*.{json,md,js,jsx,ts,tsx,css}': ['prettier --write'],
};
