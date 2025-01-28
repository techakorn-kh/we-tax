const express = require('express');
const FormData = require('form-data');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const indexRoutes = require('./routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', upload.single('file'), (req, res) => {
    try {
        const { url_uploads, SendEtax, SendInbox } = req.body;

        console.log(req.file, req.body);
        
        return res.json({ url_uploads, SendEtax, SendInbox });
    } catch (err) {
        return res.send(err)
    }
});

app.use('/api', indexRoutes);

// app.get('/api/text-to-one-box', async (req, res) => {
//     try {
//         const url = `https://uatbox.one.th/system/api/v1/uploads_share_link`,
//         token = `1a61c6d9d807e51366db51f59691ecebb0329dca2e4c9fbd1ae5ae45b833aeee8a8813fcd11eecd0efb686a098663071a60af3870aa1377c69275e774b15c4d7`,
//         url_uploads = `https://uatbox.one.th/sharelinkuploads?id=6db26a555411251b6ad3353709bd45f2`,
//         text_path = `C:\\Users\\TECHAKORN-KH\\Documents\\WE-TAX Text Files.txt`;

//         const formData = new FormData();
//         formData.append('file', fs.createReadStream(`${text_path}`));
//         formData.append('url_uploads', `${url_uploads}`);
//         formData.append('SendEtax', 'N');
//         formData.append('SendInbox', 'N');

//         const config = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: url,
//             headers : {
//                 "Authorization" : `Bearer ${token}`
//             },
//             data: formData
//         };

//         await axios.request(config)
//         .then(async (response) => {
//             return res.json(response.data);
//         }).catch((err) => {
//             throw err;
//         });
//     } catch (err) {
//         console.error(err);
//         return res.send(err);
//     }
// });

// app.get('/api/pdf-to-one-box', async (req, res) => {
//     try {
//         const url = `https://uatbox.one.th/system/api/v1/uploads_share_link`,
//         token = `1a61c6d9d807e51366db51f59691ecebb0329dca2e4c9fbd1ae5ae45b833aeee8a8813fcd11eecd0efb686a098663071a60af3870aa1377c69275e774b15c4d7`,
//         url_uploads = `https://uatbox.one.th/sharelinkuploads?id=a947244b33648b21e6eb5e6a7816d98f`,
//         pdf_path = `C:\\Users\\TECHAKORN-KH\\Documents\\WE-TAX PDF Files.pdf`;

//         const formData = new FormData();
//         formData.append('file', fs.createReadStream(`${pdf_path}`));
//         formData.append('url_uploads', `${url_uploads}`);
//         formData.append('SendEtax', 'N');
//         formData.append('SendInbox', 'N');

//         const config = {
//             method: 'post',
//             maxBodyLength: Infinity,
//             url: url,
//             headers : {
//                 "Authorization" : `Bearer ${token}`
//             },
//             data: formData
//         };

//         await axios.request(config)
//         .then(async (response) => {
//             return res.json(response.data);
//         }).catch((err) => {
//             throw err;
//         });
//     } catch (err) {
//         console.error(err);
//         return res.send(err);
//     }
// });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});