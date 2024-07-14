const generateMemeButton = document.querySelector(".generate-meme-button");

const memeImage = document.querySelector(".meme-generator img");

const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerText = title;
  memeAuthor.innerText = `Meme by: ${author}`;
};
const generateMeme = () => {
  fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};
generateMemeButton.addEventListener("Click", generateMeme());
