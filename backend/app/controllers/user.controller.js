const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Customer = db.customer;
const Role = db.role;
const Report = db.report;
const Owner = db.owner;
const Pilot = db.pilotprofile;
const Airplane = db.airplaneprofile;
const ScanData = db.scandata;
const Payments = db.payments;
const Buildings = db.buildings;
const Subscription = db.subscription;
const Invoice = db.invoice;



exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Owner Content.");
};

exports.getAllUser = async (req, res) => {
  const users = await User.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(users);
  }
};

exports.getCustomers = async (req, res) => {
  const customers = await Customer.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(customers);
  }
};


exports.getPaid = async (req, res) => {
  const paid = await Subscription.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(paid);
  }
};

exports.getPayments = async (req, res) => {
  const payments = await Payments.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(payments);
  }
};

exports.getBuilding = async (req, res) => {
  const building = await Buildings.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(building);
  }
};

exports.getAllPilot = async (req, res) => {
  const pilots = await Pilot.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(pilots);
  }
};

exports.getAllAirplane = async (req, res) => {
  const airplanes = await Airplane.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(airplanes);
  }
};

exports.getAllInvoice = async (req, res) => {
  const invoice = await ScanData.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(invoice);
  }
};

exports.getInvoiceNum = async (req, res) => {
  const invoice = await Invoice.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(invoice);
  }
};

exports.getFilters = async (req, res) => {
  try {
  const year = parseInt(req.body.yearvalue.value);
  const month = req.body.monthvalue.value;
  const filter = {Month: month, Year: year}

  const docs = await Payments.find(filter);
  console.log(docs);
  res.json(docs);
  console.log(docs);
  } catch (err) {
    console.log(err);
    res.status(500).send('internal server error');
  } finally {
    // await Payments.close();
  }
  // if (!req.body) {

  //   res.status(200).send("No response.");

  // } else {
  //   res.status(200).send(invoice);
  // }
};


exports.getAllOnwer = async (req, res) => {
  const owners = await Owner.find()
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(owners);
  }
};

exports.sendReport = async (req, res) => {
  const report = new Report({
    selectedAirplane: req.body.selectedAirplane,
    selectedMark: req.body.selectedMark,
    selectedDates: req.body.selectedDates,
    fuelexpenss: req.body.fuelexpenss,
    oilsexpenss: req.body.oilsexpenss,
    serviceexpenss: req.body.serviceexpenss,
    fboexpenss: req.body.fboexpenss,
    formpredata : req.body.formpredata,
    formpostdata: req.body.formpostdata,
  });

  const reportdata = await report.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: reportdata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

}

exports.sendCustomers = async (req, res) => {
  const customer = await Customer.insertMany(req.body);
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(customer);
  }
  

}

exports.sendPayments = async (req, res) => {
  await Payments.insertMany(req.body);
  
  res.status(200).send({message: "Data saved successfully."});

}

exports.sendBuildings = async (req, res) => {
  await Buildings.insertMany(req.body);
  
  res.status(200).send({message: "Data saved successfully."});

}

exports.paidSubscription = async (req, res) => {
  const subscription = new Subscription({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    customerid: req.body.customerid,
    monthlyfee: req.body.monthlyfee,
    paidsubscription: req.body.paidsubscription,
  });

  const data = await subscription.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
  
  res.status(200).send({message: "Data saved successfully."});

}


exports.receiveReportData = async (req, res) => {
  const receivereportdata = await Report.find();
  if (!req.body) {

    res.status(200).send("No response.");

  } else {
    res.status(200).send(receivereportdata);
  }
};

exports.fixregionmonthlyfee = async (req, res) => {
  const Region = req.body.selectedRegion.value;
  const MonthlyFee = req.body.regionmonthlyfee;
  
  const filter = { Region: Region };
  const updateDoc = { $set: { MonthlyFee: MonthlyFee } };
  const result = await Customer.updateMany(filter, updateDoc);

  if (result) {
    res.send(`Successfully updated age of user ${Region} to ${MonthlyFee}.`);
  } else {
    res.status(404).send(`Region ${Region} not found.`);
  }
};




exports.fixpersonmonthlyfee = async (req, res) => {
  const FirstName = req.body.clientfirstname;
  const LastName = req.body.clientlastname;
  const MonthlyFee = req.body.personmonthlyfee;
  
  const filter = { FirstName: FirstName, LastName: LastName };
  const updateDoc = { $set: { MonthlyFee: MonthlyFee } };
  const result = await Customer.updateMany(filter, updateDoc);

  if (result) {
    res.send(`Successfully updated monthlyfee of user ${FirstName}+${LastName} to ${MonthlyFee}.`);
  } else {
    res.status(404).send(`Region ${FirstName}+${LastName} not found.`);
  }
};

exports.sendReportData =async (req, res) => {
  console.log('param id', req.params.id);

  let collection = await Report.findOne({
    _id: req.params.id
  });


  if (!collection) res.send("Not found").status(404);
  else res.send(collection).status(200);
}

exports.initInvoiceData = async (req, res) => {

  let invoicedata = await Invoice.findOne({
    invoicenumber: req.body.invoicenumber
  });

  console.log('result', invoicedata);

  if (!invoicedata) res.send("Not found").status(404);
  else res.send(invoicedata).status(200);
}
  
exports.createOwnerProfile = async (req, res) => {

  const showreport = new Owner({
    firstname: req.body.FirstName,
    lastname: req.body.LastName,
    phonenumber: req.body.PhoneNumber,
    emailaddress: req.body.EmailAddress,
    location: req.body.Location,
    amount: req.body.Amount,
    imagename: req.avatarId,
  });

  const showreportdata = await showreport.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: showreportdata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.saveInvoiceData = async (req, res) => {
  console.log(req.body);
  const saveinvoice = new Invoice({
    invoicenumber: req.body.invoicenumber,
    monthvalue: req.body.monthvalue,
    regionvalue: req.body.regionvalue,
    setdate: req.body.setdate,
    yearvalue: req.body.yearvalue,
  });

  const invoicedata = await saveinvoice.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: invoicedata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.createPilotProfile = async (req, res) => {
  console.log(req.avatarId);
  console.log(req.body);
  const pilotprofile = new Pilot({
    fullname: req.body.FullName,
    company: req.body.Company,
    phonenumber: req.body.PhoneNumber,
    emailaddress: req.body.EmailAddress,
    imagename: req.avatarId,
  });

  const pilotprofiledata = await pilotprofile.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: pilotprofiledata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};

exports.createAirplaneProfile = async (req, res) => {
  console.log(req.avatarId);
  console.log(req.body);
  const airplaneprofile = new Airplane({
    airplanename: req.body.AirplaneName,
    airplamemark: req.body.AirplaneMark,
    owner: req.body.Owner,
    pilot: req.body.Pilot,
    imagename: req.avatarId,
  });

  const airplaneprofiledata = await airplaneprofile.save();

  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: airplaneprofiledata,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};


exports.sendScanData = async (req, res) => {
  console.log(req.body);
  const scandata = new ScanData({
    customerid: req.body.customerid,
    fullname: req.body.fullname,
    address: req.body.address,
    monthlyfee: req.body.monthlyfee,
    date: req.body.date,
  });

  const scanData = await scandata.save();
  
  try {
    if (!req.body) {
      res.send({
        status: false,
        message: "no response",
      });
    } else {
      res.send({
        status: true,
        message: 'OK',
        data: scanData,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }

};
