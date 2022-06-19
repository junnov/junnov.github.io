const images = [
  "background-01.avif",
  "background-02.avif",
  "background-03.avif",
  "background-04.avif",
  "background-05.avif",
]

const randomImage = images[Math.floor(Math.random()*images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${randomImage}`

document.body.appendChild(bgImage)