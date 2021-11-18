class Transaction
{
    constructor(securityId, type, date, amount)
    {
        this.securityId = securityId;
        this.type = type;
        this.date = new Date(date);
        this.amount = parseFloat(amount);
    }
}
module.exports.Transaction = Transaction;