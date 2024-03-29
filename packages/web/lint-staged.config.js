module.exports = {
  '*.{ts,tsx}': [
    'eslint --cache --fix -c ./packages/web/.eslintrc.json',
    () => 'tsc --skipLibCheck --noEmit --project ./packages/web/tsconfig.json',
  ],
  '*.css': ['stylelint --di --config ./packages/web/.stylelintrc.json'],
  '*.{json,md,js,jsx,ts,tsx,css}': ['prettier --write'],
};
