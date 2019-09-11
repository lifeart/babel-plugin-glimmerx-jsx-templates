const { extractComponentFromClassMethod } = require('ember-meta-explorer');

module.exports = function(babel) {
  const { types: t } = babel;
  return {
    name: 'babel-plugin-glimmerx-jsx-templates',
    manipulateOptions({ parserOpts }) {
      parserOpts.plugins.push(['classProperties']);
    },
    visitor: {
      Program(programPath) {
        programPath.traverse({
          ClassMethod(path) {
            if (!path.node.static || path.node.key.name !== 'template') {
              return;
            }
            const text = extractComponentFromClassMethod(path);
            const prop = t.classProperty(path.node.key, t.taggedTemplateExpression(
                t.identifier('hbs'), t.templateLiteral([t.templateElement({ raw: text, cooked: text})], [])
            ));
            prop.static = true;
            prop.computed = false;
            prop.loc = path.node.loc;
            path.replaceWith(prop);
          }
        });
      },
    },
  };
};
