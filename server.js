const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.static('public'));

// Upload Setup
const upload = multer({ dest: 'uploads/' });

// Serve HTML Form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Handle file upload
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname, mimetype, size } = req.file;
  res.json({
    name: originalname,
    type: mimetype,
    size: size
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
