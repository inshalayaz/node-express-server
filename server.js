let express = require("express");
let ourApp = express();
ourApp.get('/', (req, res) => {
  res.send(`

    <form action = "/answer" method = "POST">
        <p>What color is the sky on the clear and Sunny Day?</p>
        <input name = "skyColor">
        <button>Submit answer</button>
    </form>

  `)
})

ourApp.post('/answer', function (req, res) {
  res.send('Thanks for submitting the answer')
});

ourApp.get('/answer', function (req, res) {
    res.send('Brooo go back and submit the answer.')
  });


ourApp.listen(3000)
