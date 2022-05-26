const express = require('express');
const path = require('path');
const app = express();

/** Force ssl */
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https')
    res.redirect(`https://${req.header('host')}${req.url}`)
  else
  next()
})


app.use(express.static(__dirname + '/dist/show-restaurants-from-excel'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/dist/show-restaurants-from-excel/index.html'));
});

app.listen(process.env.PORT || 8080);