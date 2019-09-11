class Class1Declaration extends Component {
  firstName = "Bob";
  static template = hbs`<div>{{this.firstName}} {{@lastName}}</div>`;
}