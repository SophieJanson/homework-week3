class Bmi{
  constructor(props) {
    this.age = props.age;
    this.height = props.height / 100;
    this.weight = props.weight;
    this.gender = props.gender;
    this.exerciseLevel = props._exerciseLevel;
  };
  calcBmi() {
    return this.weight / (this.height * this.height);
  };

}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('submit').addEventListener('click', function() {
    console.log("clicked");
    let props = {};
    let fields = document.getElementsByClassName('field');
    console.log(fields.length);
    for (var i = 0; i < fields.length; i++) {
      console.log(i);
      props[fields[i].name] = fields[i].value;
    };
    let data = new Bmi(props);
    console.log(data.calcBmi());
  })
});
