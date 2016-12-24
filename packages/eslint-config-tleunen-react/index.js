module.exports = {
    extends: [
        'eslint-config-airbnb',
        'eslint-config-tleunen/rules/override',
    ].map(require.resolve),
    env: {
        browser: true,
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    },
};
