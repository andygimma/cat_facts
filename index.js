const url = "https://cat-fact.herokuapp.com/facts";
const text = document.querySelector('#text')
const button = document.querySelector('#button')
const container = document.querySelector('#facts');

let facts = []

function displayFacts(facts) {
    // Remember, you can display facts any way you want.
    // You can even display facts the same way you did for the to do list
    // Below you can see my method, but yours works just as well.
    facts.forEach(fact => {
        container.innerHTML += `<div>${fact.text}</div>`;
    });
}


async function getFacts() {
    const res = await axios.get(url);
    facts = res.data
    displayFacts(facts)
}

getFacts()