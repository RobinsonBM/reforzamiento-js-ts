import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "dr6TG1Y8aoGhaTIZjr5QiDy6NAaWgHqs";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

const createImgInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const { url } = data.images.original;
    createImgInsideDOM(url);
  })
  .catch((err) => console.error(err))
  .finally();
