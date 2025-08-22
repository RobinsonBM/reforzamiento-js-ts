// const ironman = {
//     firstName: "Tony",
//     lastName: "Stark",
//     age: 45,
//     address: {
//         street: "10880 Malibu Point",
//         city: "Malibu",
//         state: "California"
//     }
// }

// // const spiderman = {...ironman}; // rompe la diferencia de referencia a primer nivel

// const spiderman = structuredClone(ironman); // permite clonar a profundidad (depthClone)

// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.age = 28;
// spiderman.address.city = "New York";

// console.log(ironman, spiderman);

// ----------------------------

interface Person {
  address?: Address;
  age: number;
  firstName: string;
  lastName: string;
}

interface Address {
  city: string;
  postalCode: string;
  state: string;
  street: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    city: "Malibu",
    postalCode: "90265",
    state: "California",
    street: "10880 Malibu Point",
  },
};

console.log(ironman);
