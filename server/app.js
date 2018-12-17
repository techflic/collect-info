// ===================================================================
/**
 * Module dependencies.
 */
const env           = "local";
const express       = require("express");
const bodyParser    = require("body-parser");
const cors          = require("cors");
const mongoose      = require("mongoose");

// ===================================================================

const app = express();

/**
 * Connect to Database.
 */
mongoose
    .connect(
        "mongodb://fsd-server-admin:fsdadmin1@ds151232.mlab.com:51232/my-shelf",
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("Database connection successful");
    })
    .catch(err => {
        console.error("Database connection error");
    });

/**
 * Parsers.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/**
 * Cors.
 */
app.use(cors());

// ===================================================================

/**
 * Routes.
 */
app.use("/collect/", require("./routes"));

/**
 * 404 handler.
 */
app.get("*", function(req, res) {
    res.status(404).send({
        response: "Not Found",
        data: null,
        error: "Sorry, invalid request"
    });
});

/**
 * Dev error handler.
 */
if (env === "local") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        return res.json({
            message: err.message,
            error: err
        });
    });
}

/**
 * Production error handler, no stacktraces leaked to user.
 */
if (env === "production") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        return res.json({
            message: err.message,
            error: {}
        });
    });
}

// ===================================================================

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen("3001", function(err) {
    if (err) {
        console.log("Error starting server : ", err);
    } else {
        console.log("NODE_ENV : local");
        console.log("listening on port : 3001");
    }
});
