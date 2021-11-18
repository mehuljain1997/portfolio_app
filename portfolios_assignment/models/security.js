const { SecurityHistory } = require("./security_history");

class Security{

    constructor(id,name,history = [])
    {
        this.id = id;
        this.name = name;
        this.history = history;
    }

    addHistory(sh){
        try
        {   
            this.history.push(sh);
            return true;
        }
        catch(err)
        {
            return false;
        }
    };

    getPriceOnDate(dt)
    {
        let result = new SecurityHistory(new Date, "0");
        if(this.history.length)
        {
            result = this.history[0];
            for( const price of this.history)
            {
                if(price.endDate.getTime() == dt.getTime())
                {
                    return price.value;
                }
                if(price.endDate < dt && price.endDate > result.endDate)
                {
                    result = price;
                }
            }
        }
        return result.value;
    }
}
module.exports.Security = Security;