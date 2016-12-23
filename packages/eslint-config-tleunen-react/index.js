'use strict';

module.exports = {
    extends: [
        'eslint-config-tleunen',
    ].map(require.resolve),
    "env": {
        browser: true
    },
    rules: {
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4]
    },
};
