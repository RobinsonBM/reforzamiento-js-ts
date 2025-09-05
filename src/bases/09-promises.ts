const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //! Yo quiero mi dinero!!!
    resolve(100);
    // reject("No hay dinero");
  }, 2000); // 2 segundos
});

myPromise
  .then((myMoney) => {
    console.log(`Tengo mis ${myMoney} USD`);
  })
  .catch((reason) => {
    console.warn(reason);
  })
  .finally(() => {
    console.log("A seguir con mi vida");
  });
