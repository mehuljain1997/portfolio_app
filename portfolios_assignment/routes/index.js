const express = require('express');
const router = express.Router();
const { dateFormatter } = require('../util/helpers');

const data = require("../data/seeder");
const errorResponse = {
    status : "NOK",
    message : "Internal Server Error!",
}

router.get('/portfolios', function(req, res, next) {
    try
    {
        res.status(200).send({
            status : "OK",
            data : data.portfolios.map((portfolio) => {
                return {
                    holdingCount : portfolio.holdingCount,
                    id           : portfolio.id,
                    name         : portfolio.name,
                    latestDate   : dateFormatter(portfolio.latestDate)
                };
            }),
        });

    }catch(err)
    {
        console.log(err);
        res.status(500).send(errorResponse);
    }
});

router.get('/portfolio/details/:id', function(req, res, next) {
    try{
        const result = data.portfolios.find((portfolio) => {
            return portfolio.id == req.params.id;
        });

        result.calculateValue(new Date((req.query.date ? req.query.date : "")), data.securities);
        res.status(200).send({
            status  : "OK",
            data    : result
        });
    }catch(err)
    {
        console.log(err)
        res.status(500).send(errorResponse); 
    }
});

module.exports = router;