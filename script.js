const root = document.getElementById('root');
const header = document.createElement('header');
header.classList.add('header');
const h1 = document.createElement('h1');
h1.append(document.createTextNode('Company'));
header.append(h1);
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.classList.add('div');
div2.classList.add('div');
div3.classList.add('div2');
const input1 = document.createElement('input');
input1.setAttribute('type', 'text');
input1.setAttribute('placeholder', 'Enter id');
input1.setAttribute('autofocus', 'true');
const input2 = document.createElement('input');
input2.setAttribute('type', 'text');
input2.setAttribute('placeholder', 'Enter first name');
const input3 = document.createElement('input');
input3.setAttribute('type', 'text');
input3.setAttribute('placeholder', 'Enter last name');
const input4 = document.createElement('input');
input4.setAttribute('type', 'text');
input4.setAttribute('placeholder', 'Enter age');
const input5 = document.createElement('input');
input5.setAttribute('type', 'text');
input5.setAttribute('placeholder', 'Enter salary');
input1.classList.add('input');
input2.classList.add('input');
input3.classList.add('input');
input4.classList.add('input');
input5.classList.add('input');
root.append(header, div1, div2, div3);
div1.append(input1, input2, input3, input4, input5);
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');
btn1.classList.add('btn');
btn2.classList.add('btn');
btn3.classList.add('btn');
btn1.append(document.createTextNode('Add Employee'));
btn2.append(document.createTextNode('Show Company'));
btn3.append(document.createTextNode('Get Stats'));
div2.append(btn1, btn2, btn3);
const h2_1 = document.createElement('h2');
h2_1.append(document.createTextNode('Employees list:'));
const h2_2 = document.createElement('h2');
h2_2.append(document.createTextNode('Stats:'));
const ol = document.createElement('ol');
const ul = document.createElement('ul');
div3.append(h2_1, ol, h2_2, ul);


class Employee {
    constructor(id, firstName, lastName, age, salary) {
        this._firstName = +firstName;
        this._id = +id;
        this._lastName = +lastName;
        this._age = +age;
        this._salary = +salary;
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    fullInformation() {
        return `ID: ${this._id}, Name: ${this._firstName} 
        ${this._lastName}, Age: ${this._age}, Salary ${this._salary}`;
    }
}

const map = new Map();
btn1.onclick = function () {
    console.log(input2)
    if ((input1.value && input2.value && input3.value && input4.value && input5.value) != ''){
        let person = new Employee(input1.value, input2.value, input3.value,
            input4.value, input5.value);
        map.set(input1.value, person);
        input1.value = '';
        input2.value = '';
        input3.value = '';
        input4.value = '';
        input5.value = '';
    } else {
        alert('fill all field');
    }
    console.log(map);
};
btn2.onclick = function () {
    while(ol.firstChild){
        ol.removeChild(ol.firstChild);
    }
    for (let [key, value] of map) {
        let li = document.createElement('li');
        li.append(document.createTextNode(value.fullInformation()));
        ol.append(li);
    }
}

btn3.onclick = function () {
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');
    let li4 = document.createElement('li');
    let li5 = document.createElement('li');
    let li6 = document.createElement('li');
    let tSalary = 0;
    let averageAge = 0;
    let min;
    let max;
    for (let [key, value] of map) {
        if((min && max) === undefined){
            min = value.age;
            max = value.age;
        }
        if (value.age < min) {
            min = value.age
        }
        if (value.age > max) {
            max = value.age;
        }
        tSalary += +value.salary;
        averageAge += +value.age;
    }
    li1.append(document.createTextNode('Total salary: ' + tSalary));
    li2.append(document.createTextNode('Average salary: ' + tSalary / map.size));
    li3.append(document.createTextNode('Quantity of Employees: ' + map.size));
    li4.append(document.createTextNode('Min age: ' + min));
    li5.append(document.createTextNode('Max age: ' + max));
    li6.append(document.createTextNode('Average age: ' + averageAge / map.size));
    ul.append(li1, li2, li3, li4, li5, li6);
}
