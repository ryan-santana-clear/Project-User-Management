module.exports = {

    user:(app, req, res)=>{

        req.assert('name', 'Name is required').notEmpty();
        req.assert('email', 'Valid email is required').notEmpty().isEmail();
        req.assert('password', 'Password is required').notEmpty();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }

};