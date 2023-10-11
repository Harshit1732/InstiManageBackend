const { Exchangemodel } = require("../models/Exchangemodel");


///getting the data from db
const getData = async (req, res) => {
  try {
    const data = await Exchangemodel.find();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
};

//// create a new data in db
const createData = async (req, res) => {
  const { Exchangenumber, name, balance } = req.body;

  try {
    let data = await Exchangemodel.create({
      Exchangenumber,
      Name: name,
      Balance: balance,
    });
    await data.save();
    res.send(data);
  } catch (er) {
    console.log(er);
    res.send({ err: "Something went wrong" });
  }
};

// update a data
const updateData = async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    const updateddata = await Exchangemodel.findByIdAndUpdate(
      { _id: ID },
      payload,
    );
    res.send(updateddata);
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
};


//delete a data 
const deletedata = async (req, res) => {
  const ID = req.params.id;
  try {
    await Exchangemodel.findByIdAndDelete({ _id: ID });
    res.send("successfully deleted");
  } catch (err) {
    console.log(err);
    res.send({ err: "Something went wrong" });
  }
};

module.exports = { getData, updateData, deletedata,createData };
