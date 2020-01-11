let express = require("express");
let ourApp = express();
ourApp.app.get('/', (req, res) => {
  res.send(`

    <form action = "/answer" method = "POST">
        <p>What color is the sky on the clear and Sunny Day?</p>
        <input name = "skyColor">
        <button>Submit answer</button>
    </form>

  `)
})