

let employee = [];



function add_person(name, lastName, role) {
    let person = {
        'nome' : name,
        'cognome' : lastName,
        'ruolo' : role,
    };
    return person
}


employee.push(add_person("Wayne", "Barnet", "ceo"));
employee.push(add_person("Angela", "Caroll", "Chief Editor"));
employee.push(add_person("Walter", "Gordon", "Office Manager"));
employee.push(add_person("Angela", "lopez", "Social Media Manager"));
employee.push(add_person("Scott", "Estrada", "Developer"));
employee.push(add_person("Barbara", "Ramos", "Graphic Designer"));





console.log(`Ho trovato ${employee.length} persone in database`);


console.log(employee);


