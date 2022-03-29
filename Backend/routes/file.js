var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');
const { writeFile, readFile } = require('fs');
//writefile
router.get('/createfile', function (req, res) {
    writeFile('fs-file.txt', 'content of fs-file.txt', (err) => {
        if (err) {
            throw err;
        } else {
            res.send('File Created/modified');
        }
    });
});
router.get('/readfile/:filename', function (req, res) {
    const filePath = path.join(__dirname, '../', req.params.filename);
    fs.readFile(filePath, 'utf8', (err, content) => {
        if (err) {
            res.json(err);
        } else {
            res.send(content);
        }
    });
});
router.get('/readdirectory', function (req, res) {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            res.json(err);
        } else {
            res.send(files);
        }
    });
});
router.get('/addcontent/:filename', function (req, res) {
    const filePath = path.join(__dirname, '../', req.params.filename);
    fs.appendFile(filePath, '\nappened line 1\nappened line 2', (e) => {
        if (e) res.json(e);
        res.send('File Modified');
    });
});
router.get('/deletefile/:filename', function (req, res) {
    const filePath = path.join(__dirname, '../', req.params.filename);
        fs.unlink(filePath, (e) => {
            if (e) res.json(e);
            res.send('File deleted');
        });
    
});

module.exports = router;
