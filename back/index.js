//BACK

const express = require('express');
const app = express();
const port = 3005;
const cors = require('cors');
app.use(
  cors({
    origin: "*",
  })
)
const tab = [
  {
    image: "../assets/ordi1.jpg",
    price: 1200,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem."
  },
  {
    image: "../assets/ordi2.jpg",
    price: 500,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo itaque laborum delectus accusantium non, nostrum ut inventore, earum tempore reprehenderit, nam quae unde dolore dolorem excepturi vero consectetur. Atque, exercitationem."
  }]

app.get('/', (req, res) => {
  //res.send('Hello World!');
  //res.json({ name: "Kyle", favoriteFood: "Rice" });
  res.send(tab)
})

/*app.get('/arg', (req, res) => {
  // appel bdd
  res.send("Hello world") 
})*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
