const { readFileSync } = require("fs");
const { Portfolio } = require("../models/portfolio");
const { Security } = require("../models/security");
const { SecurityHistory } = require("../models/security_history");
const { Transaction } = require("../models/transaction");

const data = {
    portfolios : [],
    securities : []
};

mapHistory = (history) => history.map((element) => {
    return new SecurityHistory(
        element["EndDate"], 
        element["Value"]
    )
});

mapSecurities = (securities) => securities.map((security) => {
    return new Security(
        security["_Id"], 
        security["name"], 
        mapHistory(security["HistoryDetail"])
    )
});

mapTransactions = (transactions) => transactions.map((transaction) => {
    return new Transaction(
        transaction["SecurityId"], 
        transaction["Type"], 
        transaction["Date"], 
        transaction["Amount"]
    )
});

mapPortFolios = (portfolios) => portfolios.map((portfolio) => {
    const result = new Portfolio(
        portfolio["_Id"], 
        portfolio["Name"], 
        mapTransactions(portfolio["Transactions"])
    );
    result.latestTransactionDate();
    result.calculateHoldings();
    return result;

});

seedData = () => {
    try
    {
        data.portfolios = mapPortFolios(JSON.parse(readFileSync(__dirname + "/portfolios.json", "utf-8"))["Portfolios"]);
        data.securities = mapSecurities(JSON.parse(readFileSync(__dirname + "/securities.json", "utf-8"))["Securities"]);
    }catch(err)
    {
        console.log(err);
    }
};

seedData();

module.exports = data;