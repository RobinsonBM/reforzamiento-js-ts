const API_KEY = "dr6TG1Y8aoGhaTIZjr5QiDy6NAaWgHqs";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

myRequest
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);

    const imgElement = document.createElement("img");
    imgElement.src = url

    document.body.append(imgElement)

  })
  .catch((err) => console.error(err))
  .finally();
