__path = process.cwd()

var express = require('express'); 
var app = express();
var cookieParser = require('cookie-parser');

//
cors = require('cors'),
secure = require('ssl-express-www');

// Port
var PORT = process.env.PORT || 3000 || 5000 || 3000

// App use
app.set('trust proxy', true);
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(cookieParser());
app.use(express.static())

app.get('/', (req, res) => {
    res.sendFile(__path + '/index.html')
})
  
// App listen (port)
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:` + PORT)
	console.log(`Hii {author}`)
	})

// 
module.exports = app
