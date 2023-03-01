module.exports = {

    user:(app, req, res)=>{

        req.assert('_name', 'Name is required').notEmpty();
        req.assert('_email', 'Valid email is required').notEmpty().isEmail();
        req.assert('_password', 'Password is required').notEmpty();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }

};