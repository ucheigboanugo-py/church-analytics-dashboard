// backend/controllers/uploadController.js
const csv = require('csv-parser');

exports.uploadCSV = (req, res) => {
    const file = req.file;
    const fileType = req.body.fileType;
    const branch = req.body.branch;

    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const results = [];
    csv.parse(file.buffer.toString(), { headers: true })
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // Process the CSV data here
            console.log(results);
            res.json({ message: 'File uploaded successfully', data: results });
        })
        .on('error', (error) => {
            console.error(error);
            res.status(500).json({ message: 'Error processing CSV file' });
        });
};
