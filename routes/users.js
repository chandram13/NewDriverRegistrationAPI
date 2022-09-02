import express from 'express';

const router = express.Router();

const users = [
    {
        DriverName: "First",
        DriverAge: 18,
        DriverLicenseID: "A0000",
        DriverAddress: "123 My Home, Los Angeles CA 00000",
        DriverVIN: 00000000,
        DriverLicensePlate: 9AAA000
    }



]

// all routes in here are starting with /users
router.get('/', (req,res) => {
    res.send(users);
} );

router.post('/',(req,res) => {

    const user = req.body;

    users.push(user);

    res.send(`District with the academic year of ${user.AcademicYear} added to the database!`);
});

router.get('/moreinfo',(req, res) => {
    res.send('More absenteeism information here:')
});

export default router;