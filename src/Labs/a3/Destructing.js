function Destructuring() {
    const person = { name: 'John', age: 25 };
    const { name, age } = person;
    const numbers = ["one", "two", "three"];
    const [first, second, third] = numbers;
    return (
        <div>
            <h2>Destructuring</h2>
            <h3>Object Destructuring</h3>
            const &#123;name, age&#125; = &#123;name: 'John', age: 25&#125;<br /><br />
            name = {name}<br />
            age = {age}<br />
            <h3>Array Destructuring</h3>
            const [first, second, third] = ["one", "two", "three"]<br /><br />
            first = {first}<br />
            second = {second}<br />
            third = {third}
        </div>
    )
}

export default Destructuring;