const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img"); //html에 element 생성하기

image.src = `img/${chosenImage}`;
document.body.appendChild(image); //appendChild는 가장 뒤에, prepend는 가장 앞에 오게 한다. 