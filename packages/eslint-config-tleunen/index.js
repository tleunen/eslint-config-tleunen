'use strict';

module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/override',
    ].map(require.resolve),
    parserOptions: {
        sourceType: 'script',
    },
};
