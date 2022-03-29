var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');
const { writeFile, readFile } = require('fs');

router.get('/createfile/:filename/:filecontent', function (req, res) {
    fs.mkdir('./files', function (e) {
        if (e) {
            if (e.code == 'EEXIST') {
                fs.writeFile(
                    `./files/${req.params.filename}`,
                    req.params.filecontent,
                    (err) => {
                        if (err) {
                            throw err;
                        } else {
                            res.send('success');
                        }
                    }
                );
            } else {
                res.json(e);
            }
        } else {
            fs.writeFile(
                `./files/${req.params.filename}`,
                req.params.filecontent,
                (err) => {
                    if (err) {
                        throw err;
                    } else {
                        res.send('success');
                    }
                }
            );
        }
    });
});
router.get('/foldercontents', function (req, res) {
    const folderPath = path.join(__dirname, '../files/');
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            res.json(err);
        } else {
            res.send(files);
        }
    });
});
router.get('/createfolder/:foldername', function (req, res) {
    console.log('Entered');
    fs.mkdir(`./files/${req.params.foldername}`, (e) => {
        if (e) {
            if (e.code == 'EEXIST') {
                res.send('Folder already Exist');
            } else {
                res.json(e);
            }
        } else {
            res.json('Folder created');
        }
    });
});
router.get('/delete/:filename', function (req, res) {
    const filePath = path.join('./files/', req.params.filename);
    console.log(filePath);
    fs.unlink(filePath, (e) => {
        if (e) {
            res.json(e);
        }
        res.send('File deleted');
    });
});
router.get('/readfile/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, 'utf8', (e, data) => {
        if (e) {
            res.json(e);
        } else {
            res.json(data);
        }
    });
});
router.get('/modifyfile/:filename/:content', function (req, res) {
    fs.writeFile(
        `./files/${req.params.filename}`,
        req.params.content,
        (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json('Changed file');
            }
        }
    );
});
module.exports = router;
