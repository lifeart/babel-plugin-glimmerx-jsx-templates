# babel-plugin-glimmerx-jsx-templates

This is plugin for `glimmer-x` project, allow to work with `.jsx/tsx` templates in components.

How to use it? 

1.) Install plugin `yarn add babel-plugin-glimmerx-jsx-templates --dev`

2.) Install `jsx` syntax plugin `yarn add @babel/plugin-syntax-jsx --dev`


### .babelrc
```
{
    "plugins": ["@babel/plugin-syntax-jsx", "babel-plugin-glimmerx-jsx-templates"]
}
```


### Component

```jsx
class MyJSXComponent extends Component {
    firstName = "Bob"
    static template({ lastName }) {
        return <div>{this.firstName} { lastName }</div>;
    }
}

```

### Will be compiled to

```jsx
class Class1Declaration extends Component {
  firstName = "Bob";
  static template = hbs`<div>{{this.firstName}} {{@lastName}}</div>`;
}
```

for more jsx compilation information take alook at 

[lifeart/ember-cli-jsx-templates](https://github.com/lifeart/ember-cli-jsx-templates)
[lifeart/ember-meta-explorer](https://github.com/lifeart/ember-meta-explorer)
