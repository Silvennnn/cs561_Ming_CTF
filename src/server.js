import express from 'express'
import {fileURLToPath} from "url";
import {dirname} from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(express.static(__dirname + '/client'))

app.get('/', (req, res) => {
    res.redirect('index.html');
})

app.get('/next', (req, res) => {
    const options = req.query;
    const password = options.password;
    if (password === 'THE-PASSWORD') {
        res.redirect('theflag.html');
    } else {
        res.status(500).send('error')
    }
})

app.get('/getpsw', (req, res) => {
    res.status(200).json({"password":"THE-PASSWORD"})
})

// Call the listen() method on the server object
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
