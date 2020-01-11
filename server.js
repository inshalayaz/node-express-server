let express = require("express");
let ourApp = express();
ourApp.use(express.urlencoded({extended:false}));
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
  if (req.body.skyColor == 'blue' || req.body.skyColor == 'Blue' ||req.body.skyColor == 'BLUE'  ){
    res.send(`
        <p>Congrats thats the correct answer.</p>
        <a href = "/">Back to the home page</a>
    `);
  } else{
    res.send(`
    <p>Sorry thats the incorrect answer.</p>
    <a href = "/">Back to the home page</a>
    `);
  }
});

ourApp.get('/answer', function (req, res) {
    res.send('Brooo go back and submit the answer.')
  });


ourApp.listen(3000)
