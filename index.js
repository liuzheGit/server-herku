const express = require('express');
const multer = require('multer');

//第二次
const upload = multer({dest: 'uploads/'});

//加入cors
const cors = require('cors');


const app = express();

app.get('/', cors() ,(req, res)=>{
  res.send('hello liuZhe!');
});

app.post('/upload', cors(), upload.single('file'), (req, res) =>{
  // console.log(req.file.filename);
  res.send(req.file.filename);
});

app.get('/preview/:key',cors(), (req, res) =>{
  res.sendfile(
    `uploads/${req.params.key}`,
    {
      root: __dirname,
      headers: {
        'Content-Type': 'image/jpeg'
      }
    }
  );
});

let port = process.env.PORT || 3000;
app.listen(port);
console.log(`开启服务成功并且监听在${port}端口!!`);
