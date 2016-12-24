'use strict';

module.exports = {
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
