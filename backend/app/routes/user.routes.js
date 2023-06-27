const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const { uploadUserAvatar } =  require("../utils/multer");
const { uploadPilotAvatar } =  require("../utils/multer");
const { uploadAirplaneAvatar } =  require("../utils/multer");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/owner",
    [authJwt.verifyToken, authJwt.isOwner],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post("/api/test/scan_data", controller.sendScanData )

  app.post("/api/test/send_report_data", controller.sendReport )

  app.post("/api/test/send_customers_data", controller.sendCustomers )

  app.post("/api/test/send_payments_data", controller.sendPayments )

  app.post("/api/test/send_buildings_data", controller.sendBuildings )

  app.post("/api/test/paidsubscription", controller.paidSubscription )

  app.post("/api/test/region_monthlyfee_fix", controller.fixregionmonthlyfee )

  app.post("/api/test/person_monthlyfee_fix", controller.fixpersonmonthlyfee )

  app.post("/api/test/get-all-user", controller.getAllUser )

  app.post("/api/test/get_customers_data", controller.getCustomers )

  app.post("/api/test/getpaid", controller.getPaid )

  app.post("/api/test/get_payments_data", controller.getPayments )

  app.post("/api/test/get_building_data", controller.getBuilding )

  app.post("/api/test/get-all-owner", controller.getAllOnwer )

  app.post("/api/test/get-all-pilot", controller.getAllPilot )

  app.post("/api/test/get-all-airplane", controller.getAllAirplane )

  app.post("/api/test/invoice_data", controller.getAllInvoice )

  app.post("/api/test/get_invoice_number", controller.getInvoiceNum )

  app.post("/api/test/get_filters", controller.getFilters )

  app.post("/api/test/receive_report_data", controller.receiveReportData )

  app.get("/api/test/send_report_data/:id", controller.sendReportData )

  app.post("/api/test/send_invoice_data", controller.saveInvoiceData )

  app.post("/api/test/init_invoice_data", controller.initInvoiceData )

  app.post("/api/test/owner-profile", uploadUserAvatar.single('file'), controller.createOwnerProfile )

  app.post("/api/test/pilot-profile", uploadPilotAvatar.single('file'), controller.createPilotProfile )

  app.post("/api/test/airplane-profile", uploadAirplaneAvatar.single('file'), controller.createAirplaneProfile )
};
