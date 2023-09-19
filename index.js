const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

const user_id = "kamal_teja_pushadapu_30052003";
const email = "kamalteja.20bce7452@vitap.ac.in";
const roll_number = "20BCE7452";

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  const data = req.body.data || [];
  const is_success = "data" in req.body;

  var alphabets = [];
  var numbers = [];
  var highest_alphabet = null;

  for (var i = 0; i < data.length; i++) {
    if (isNaN(data[i])) {
      alphabets.push(data[i]);
      if (highest_alphabet === null || data[i] > highest_alphabet) {
        highest_alphabet = data[i];
      }
    } else {
      numbers.push(data[i]);
    }
  }

  const response_data = {
    is_success: is_success,
    user_id: user_id,
    email: email,
    roll_number: roll_number,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highest_alphabet,
  };

  res.json(response_data);
});

app.get("/bfhl", (req, res) => {
  if (Object.keys(req.body).length !== 0)
    res.status(500).json({ message: "Input is not allowed" });
  else {
    const operation_code = 1;
    res.status(200).json({ operation_code: operation_code });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
