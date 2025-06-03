const express = require('express');
const pasth = require('path');
const bcrypt = require('bcrypt');
const collection = require('./config')
const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    res.render('login');    
});

app.get('/signup', (req, res) => {   
    res.render('signup');    
});

const port = 5000;





app.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new collection({
            username: username,
            password: hashedPassword
        });
        
        await newUser.save();
        res.redirect('/');

    }catch(err) {
        console.error("Error during signup:", err);
        res.status(500).send("Internal Server Error");
    }
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);

});