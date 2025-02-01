let willSmithImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%E3%83%AF%E3%82%AD%E3%83%B320120701.JPG/1200px-%E3%83%AF%E3%82%AD%E3%83%B320120701.JPG",
    "https://www.thesprucepets.com/thmb/Ak_GGLe5X0Ng012VY9M1yzKtH34=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-523276509-3eaa888544a94e21a0edf8c348747b00.jpg",
    "https://cdn.britannica.com/12/117212-050-3267CED6/Goldfish-behaviour-water-temperature.jpg",
    "https://www.thesprucepets.com/thmb/wG_TRuYzYTm6HzKGH4Gc-XMV088=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1225367815-b3f1bf886bdc48be903292aa9b93fd94.jpg",
    "https://stock.adobe.com/ca/images/png-goldfish-animal-white-background-pomacentridae/857042111",
    "https://science4fun.info/wp-content/uploads/2020/02/goldfish-in-ocean.jpg",
    "https://www.thesprucepets.com/thmb/81ho_ZljAHlR1awkBbRbIZGFdV0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1357746199-3cece2e5724b4a3e848ce983a3be6557.jpg",
];

//changing all the src to our saved random images

const imgs = document.getElementsByTagName("img")

for (let i=0;i<imgs.length;i++){

    //Generating a random value based on the array length
    const randomImg = Math.floor(Math.random() * willSmithImages.length)

    //All the source images will be displayed along with the images from my array
    imgs[i].src = willSmithImages[randomImg]
}



const headers = document.getElementsByTagName("h1")

for (let i=0;i<headers.length;i++){

    //Generating a random value based on the array length
    headers[i].innerText = "Gold Fish!"

}
