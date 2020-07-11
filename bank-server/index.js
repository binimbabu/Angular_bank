const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const fs = require('fs');
const os = require('os');
const cors = require('cors');

const dataService = require('./data.service');
const db = require('./db');

const app = express();

app.use(cors({
    origin:'http://localhost:4200',
    credentials: true
}));

app.use(session({
    secret: 'randomText',
    saveUninitialized: true,
    resave:true
}));

app.use(bodyParser.json());

const logMiddleware = (req,res,next) =>{
    fs.appendFile('./logs.txt', JSON.stringify(req.body)+os.EOL, (err)=>{
        if(err){
            return console.log(err);
        }
        next();
    })
}
app.use(logMiddleware);

const authMiddleware = (req,res, next) => {
    console.log(req.session.accno);
    if(!req.session.accno){
        return res.status(401).json({ "message":"Account details doesn't exist. Please login" });
    }
    return dataService.getAccountDetails(req.session)
    .then(result=>{
        req.user = result.user;
        if(!result.user){
            return res.status(401).json({ status:422, "message":"Account details doesn't exist." });
        }
        next();
    })
}

app.get('/test', (req,res)=>{
    return db.User.find({})
    .limit(10)
    .skip(20)
    .sort({ name: -1 })
    .select('name -_id')
    .then(data=>res.json(data));
})

app.get('/', authMiddleware, (req,res)=>{
    //const data = dataService.getAccountDetails();
    return res.status(200).json({
        accno:req.session.accno,
        mpin:req.session.mpin,
    });
});
app.post('/register', (req,res)=>{
    return dataService.register(req.body)
    .then(result=>{
        return res.status(result.status).json(result);
    });
});
app.post('/login', (req,res)=>{
    return dataService.login(req.body)
    .then(result=>{
        if(result.status==200){
            req.session.accno = req.body.accno;
            req.session.mpin = req.body.mpin;
        }
        return res.status(result.status).json(result);
    })
});
app.post('/logout', (req,res)=>{
    req.session.destroy();
    return res.status(200).json({message:"Logged out successfully"});
})
app.post('/deposit', authMiddleware,(req,res)=>{
    return dataService.deposit(req.session, req.body)
    .then(result=>{
        return res.status(result.status).json(result);
    })
});
app.post('/withdraw', authMiddleware,(req,res)=>{
    return dataService.withdraw(req.session, req.body)
    .then(result=>{
        return res.status(result.status).json(result);
    });
});
app.get('/balance', authMiddleware,(req,res)=>{
    return dataService.checkBalance(req.session)
    .then(result=>{
        return res.status(result.status).json(result);
    });
});
app.get('/history', authMiddleware, (req,res)=>{
    return res.status(200).json(req.user.history);
});
app.put('/edit-history/:id', authMiddleware, (req,res)=>{
    return dataService.editHistory(req.params.id, req.session, req.body)
    .then(result=>{
        return res.status(result.status).json(result);
    });
})
app.get('/profile', authMiddleware, (req,res)=>{
    return res.status(200).json(req.user);
})
app.put('/profile', authMiddleware, (req,res)=>{
    return dataService.updateProfile(req.session, req.body)
    .then(result=>{
        return res.status(result.status).json(result);
    });
})
app.delete('/history/:id', authMiddleware, (req,res)=>{
    return dataService.deleteHistory(req.params.id, req.session)
    .then(result=>{
        return res.status(result.status).json(result);
    });
})+
app.listen(9000, function(){console.log("App started")});