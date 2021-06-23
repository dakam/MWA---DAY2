module.exports.MultiplyNums = function(req, res) {
    let num1 = parseInt(req.params.x);
    let num2 = parseInt(req.query.y);
    let results = num1*num2;

    console.log(`multiplying two numbers ${num1} and ${num2} yields ${results}`)

    res.status(200).json({"Result": results});

}


