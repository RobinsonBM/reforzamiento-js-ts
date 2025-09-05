import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = "dr6TG1Y8aoGhaTIZjr5QiDy6NAaWgHqs";

const createImgInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;

  document.body.append(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImgInsideDOM);
