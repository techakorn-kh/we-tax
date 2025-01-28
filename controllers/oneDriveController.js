module.exports = {
    sendTextFile: async(req, res) => {
        try {
            console.log(req.body);
            return res.json(`Text File To One Drive`);
        } catch (err) {
            return res.send(err);
        }
    },
    sendPDFFile: async(req, res) => {
        try {
            return res.json(`PDF File To One Drive`);
        } catch (err) {
            return res.send(err);
        }
    },
}