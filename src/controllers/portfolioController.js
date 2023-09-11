exports.create = async (req, res) => {

    let statusValue= req.params.status;
    let dataValue= req.params.name;
    res.status(200).json({
        statusValue:"Success",
        dataValue: "Contain create information"
        })
  
 };


exports.read = async (req, res) => {

    let statusValue= req.params.status;
    let dataValue= req.params.name;
    res.status(200).json({
        statusValue:"Success",
        dataValue: "Contain read information"
    })
 };


exports.delete = async (req, res) => { 
    let statusValue= req.params.status;
    let dataValue= req.params.name;
    res.status(200).json({
        statusValue:"Success",
        dataValue: "Contain delete information"
    })
 };


exports.update = async (req, res) => { 
    let statusValue= req.params.status;
    let dataValue= req.params.name;
    res.status(200).json({
        statusValue:"Success",
        dataValue: "Contain update information"
    })
 };