var Assignment = require('../models/assingnment.model')

async function upload(req, res) {
    try {
        if (!req.files) {
            res.send({ status: false, message: 'No file uploaded' });
        }
        //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
        // let file = req.files.file;
        const assignmnt = new Assignment(req.files);

        //Use the mv() method to place the file in upload directory (i.e. "uploads")
        // avatar.mv('./uploads/' + avatar.name);

        //send response
        // res.send({
        //     status: true,
        //     message: 'File is uploaded',
        //     data: {
        //         name: avatar.name,
        //         mimetype: avatar.mimetype,
        //         size: avatar.size
        //     }
        // });

        await assignmnt.save();
        res.send({
            status: true,
            message: 'File is uploaded',
            data: assignmnt.file.name
        });


    } catch (err) {
        res.status(500).send(err);
        console.log(err);
    };
};

// async function upload(req, res) {
//   try {
//     console.log("Uploading...")
//     if (!req.files) {
//       res.send({ status: false, message: 'No file uploaded' });
//     }
//     await uploadFile(req, res);
//     res.status(200).send("Uploaded the file successfully: " + req.file.originalname);

//   } catch (err) {
//     res.status(500).send(err);
//     console.log(`Could not upload the file: ${req.file.originalname}. ${err}`);
//   };
// };
async function getfiles(req, res) {
    try {
        await Assignment.find((err, files) => {
            if (err) {
                return res.sendStatus(404);
            }
            // return  res.download('./${file.name}');
            return res.sendFile(files);
        });
    } catch (err) {
        res.send(err);
        console.log(err)
    };
}

function getListFiles(req, res) {
    const directoryPath = __basedir + "/resources/uploads/";

    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            res.status(500).send({
                message: "Unable to scan files!",
            });
        }

        let fileInfos = [];

        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
    });
};

module.exports = { upload, getfiles, getListFiles };