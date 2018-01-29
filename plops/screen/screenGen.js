module.exports = {
  description: 'Creates a folder inside components for the screen and updates Navigatior.js',
  prompts: [
    {
      type: 'input',
      name: 'screenName',
      message: 'What is your screen name for the navigator? (eg. HistoryDetail)'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your screen component name? (eg. HistoryDetail)'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.js',
      templateFile: 'plops/screen/Screen.js.txt'
    },
    {
      type: 'add',
      path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.js',
      templateFile: 'plops/screen/Screen.styles.js.txt'
    },
    {
      type: 'modify',
      path: './src/Navigator.js',
      pattern: '// NOTE: plop Screen imports new screen here',
      template: [
        "import {{pascalCase name}} from './components/{{pascalCase name}}/{{pascalCase name}}'",
        '// NOTE: plop Screen imports new screen here'
      ].join('\n')
    },
    {
      type: 'modify',
      path: './src/Navigator.js',
      pattern: '  // NOTE: plop Screen inserts screen here',
      template: [
        '  },',
        '  {{pascalCase screenName}}: {',
        '    screen: {{pascalCase screenName}},',
        '    headerMode: \'screen\'',
        '  // NOTE: plop Screen inserts screen here'
      ].join('\n')
    }
  ]
}
