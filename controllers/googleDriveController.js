module.exports = {
    sendTextFile: async(req, res) => {
        try {
            return res.json(`Text File To Google Drive`);
        } catch (err) {
            return res.send(err);
        }
    },
    sendPDFFile: async(req, res) => {
        try {
            return res.json(`PDF File To Google Drive`);
        } catch (err) {
            return res.send(err);
        }
    },
}