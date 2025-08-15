const ironman = {
    firstName: "Tony",
    lastName: "Stark",
    age: 45,
    address: {
        street: "10880 Malibu Point",
        city: "Malibu",
        state: "California"
    }
}

// const spiderman = {...ironman}; // rompe la diferencia de referencia a primer nivel

const spiderman = structuredClone(ironman); // permite clonar a profundidad (depthClone) 

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 28;
spiderman.address.city = "New York";

console.log(ironman, spiderman);



