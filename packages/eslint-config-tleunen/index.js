module.exports = {
    extends: [
        'eslint-config-airbnb-base',
        './rules/override',
    ].map(require.resolve),
};
