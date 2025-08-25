const caracterName = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = caracterName;

console.log({ trunks });

const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log({ letters, numbers });

/*
*------------------------------- TAREA ------------------------------------------
TODO
La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:
    Recibe un string.
    Imprime ese string en consola.

*No olvidar usar as const para decir que siempre regresará una estructura predefinida el arreglo.
*/

const useState = (value: string) => {
  return [value, console.log] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Vegeta");
