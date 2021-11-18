const dateFormatter = (dt) => {
    return dt.toISOString().split("T")[0];
};
module.exports.dateFormatter = dateFormatter;