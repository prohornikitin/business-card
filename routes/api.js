const express = require('express');
const router = express.Router();
const portfolioDao = require('../data/portfolio')
const profileDao = require('../data/profile')

router.get('/profile', (req, res) => {
    profileDao.get().
    then(data => {
        res.json(data)
    }).
    catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})


router.put('/profile', (req, res) => {
    const data = req.body;
    profileDao.update(data).
    then(() => {
        res.sendStatus(200)
    }).
    catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
})


router.get('/portfolio', (req, res) => {
    portfolioDao.getAll().
    then(data => {
        res.json(data);
    }).
    catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})

router.put('/portfolio', (req, res) => {
    const id = req.body.id
    const data = req.body
    const doDbActions = async() => {
        if(id) {
            await portfolioDao.updateExisting(id, data)
        } else {
            await portfolioDao.putNew(data)
        }
    }
    doDbActions().
    then(() => {
        res.sendStatus(200)
    }).
    catch(err => {
        console.error(err)
        res.sendStatus(500)
    })
})


module.exports = router;
