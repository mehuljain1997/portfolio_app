const { dateFormatter } = require("../util/helpers");

class Portfolio{

    constructor(id, name, transactions = [])
    {
        this.id = id;
        this.name = name;
        this.transactions = transactions;
        this.latestDate = "";
        this.amount = 0.0;

    };

    latestTransactionDate(){
        try
        {
            let latestDate = "";
            if(this.transactions.length)
            {                
                latestDate = new Date(this.transactions[0].date);
                this.transactions.forEach((transaction,index) => {
                    let transactionDate = new Date(transaction.date);
                    latestDate = transactionDate > latestDate ? transactionDate : latestDate;
                });
                // latestDate = dateFormatter(latestDate);
            }
            this.latestDate = latestDate;
        }catch(err)
        {
            console.log(err);
        } 
        
        return;
    };

    calculateHoldings(){
        this.holdingCount = this.transactions.map((transaction) => {
            return transaction.securityId;
        }).filter((securityId,index, securities) => {
            return securities.indexOf(securityId) == index;
        }).length;
    }

    calculateValue(date, securitiesGlobal){
        const securities = securitiesGlobal.slice();
        const shares = {};
        const securityHoldings = {};
        for(const transaction of this.transactions)
        {
            if(transaction.date.getTime() < date.getTime())
            {
                for(const security of securities)
                {
                    if(security.id == transaction.securityId)
                    {
                        const price = security.getPriceOnDate(transaction.date);
                        transaction['price'] = price
                        const sharesCount = transaction.amount / price;
                        securityHoldings[security.id] = security;

                        if(!shares[security.id] && transaction.type == "Buy")
                        {
                            shares[security.id] = sharesCount;
                        }
                        else if(transaction.type == "Buy")
                        {
                            shares[security.id] += sharesCount;
                        }
                        else if(transaction.type == "Sell")
                        {
                            shares[security.id] -= sharesCount;
                        }

                    }
                }
            }
            else {
                console.log('else')
            }
        }
        this.amount = 0.0;
        for(const [index, security] of Object.entries(securityHoldings))
        {
            if(shares[index])
            {
                this.amount += (security.getPriceOnDate(date) * shares[index]);
            }
        }

        return;
    }
}
module.exports.Portfolio = Portfolio;