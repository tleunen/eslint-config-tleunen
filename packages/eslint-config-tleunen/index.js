'use strict';

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    parserOptions: {
        sourceType: 'script',
    },
    rules: {
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'max-len': ['error', 120, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
    },
};
