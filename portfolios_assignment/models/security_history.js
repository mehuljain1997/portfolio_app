class SecurityHistory
{
    constructor(endDate = '', value = '')
    {
        this.endDate = new Date(endDate);
        this.value = parseFloat(value);
    
    }

}
module.exports.SecurityHistory = SecurityHistory;