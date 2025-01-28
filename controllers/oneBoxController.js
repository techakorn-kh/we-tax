module.exports = {
    sendTextFile: async(req, res) => {
        try {
            return res.json(`Text File To One Box`);
        } catch (err) {
            return res.send(err);
        }
    },
    sendPDFFile: async(req, res) => {
        try {
            return res.json(`PDF File To One Box`);
        } catch (err) {
            return res.send(err);
        }
    },
}