const person = {
  name: "Tony Stark",
  age: 45,
  key: "Iron Man",
};

const { age, name, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ age, key, name, rank = "Sin rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  rank,
  keyName,
  user,
  //   user: { name: userName },
} = useContext(person);
const { name: userName } = user;

console.log({ rank, keyName, userName });
