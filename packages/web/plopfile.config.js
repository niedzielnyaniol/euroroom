const path = require('path');

const ITEM_NAME = 'itemName';
const COMPONENT_PARENT = 'componentParent';
const HAS_STORIES = 'hasStories';

const UI_ROOT_PATH = path.join(__dirname, './');
const COMPONENT_TEMPLATE_PATH = path.join(UI_ROOT_PATH, '.templates');

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateFiles(destination, data) {
  return [
    {
      type: 'add',
      templateFile: path.join(COMPONENT_TEMPLATE_PATH, '/index.hbs'),
      path: path.join(destination, '/index.ts'),
    },
    {
      type: 'add',
      templateFile: path.join(COMPONENT_TEMPLATE_PATH, '/component.hbs'),
      path: path.join(destination, `/{{pascalCase ${ITEM_NAME}}}.tsx`),
    },
    data[HAS_STORIES] && {
      type: 'add',
      templateFile: path.join(COMPONENT_TEMPLATE_PATH, '/stories.hbs'),
      path: path.join(destination, `/{{pascalCase ${ITEM_NAME}}}.stories.ts`),
    },
  ].filter(Boolean);
}

module.exports = (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator('component', {
    description: 'UI component',
    prompts: [
      {
        type: 'input',
        name: ITEM_NAME,
        message: 'Add component name',
      },
      {
        type: 'input',
        name: COMPONENT_PARENT,
        message: 'Add to parent component (optional)',
      },
      {
        type: 'confirm',
        name: HAS_STORIES,
        message: 'Should it be in storybook? (.stories.ts)',
        default: true,
      },
    ],
    actions: (data) => {
      const destination = path.join(
        UI_ROOT_PATH,
        'components',
        data[COMPONENT_PARENT],
        capitalizeFirstLetter(data[ITEM_NAME]),
      );

      return generateFiles(destination, data);
    },
  });
};
