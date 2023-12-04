
// array elenco persone
let employee = [];




// elenco persone
employee.push(add_person("Wayne", "Barnet", "ceo"));
employee.push(add_person("Angela", "Caroll", "Chief Editor"));
employee.push(add_person("Walter", "Gordon", "Office Manager"));
employee.push(add_person("Angela", "lopez", "Social Media Manager"));
employee.push(add_person("Scott", "Estrada", "Developer"));
employee.push(add_person("Barbara", "Ramos", "Graphic Designer"));


// numero totale di persone
console.log(`Ho trovato ${employee.length} persone in database`);

// visualizza l'intero array
console.log(employee);




let empName = document.querySelector(".nome");
let lastName = document.querySelector(".cognome");
let role = document.querySelector(".ruolo");




function add_person(name, lastName, role) {
    let person = {
        'nome' : name,
        'cognome' : lastName,
        'ruolo' : role,
    };
    return person
}
