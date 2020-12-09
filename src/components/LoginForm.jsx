import React, { Component } from 'react'
import Input from './common/Input';
import Joi from 'joi-browser';

class LoginForm extends Component {
    state = {
        account: {
            username: '',
            password: ''
        },
        errors: {}
    }

    // uitlisation de Joi
    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password"),
    }

    // affiche un message d'erreur en cas de submit avec des champs vide
    validate = () => {
        // permet d'afficher toutes les erreurs
        //sinon par défaut sans l'option, Joi s'arrête à la première erreur rencontrée et la retourne
        const options = { abortEarly: false }; 

        // on récupère que l'objet error
        const { error } = Joi.validate(this.state.account, this.schema, options);

        if (error) {
            let errors = {};

            for (const detail of error.details) {
                console.log(detail.message);
                errors[detail.path[0]] = detail.message; // errors.username = "message..."
            }
            console.log(errors);
            return errors;
        }
        return null;

        /* AVANT L'UTILISATION DE JOI
        const errors = {};
        const { account } = this.state;

        if (account.username.trim() === '') errors.username = 'Username is required !';
        if (account.password.trim() === '') errors.password = 'Password is required !';

        return Object.keys(errors).length === 0 ? null : errors; */
    }

    // affiche un message d'erreur en cas de saisie puis correction de la saisie (champs vide)
    validateProperty = (input) => {
        if (input.name === 'username') {

            if (input.value.trim() === '') return 'Username cannot be empty';
        }

        if (input.name === 'password') {

            if (input.value.trim() === '') return 'Password cannot be empty';
        }
    }


    handleSubmit = e => {
        e.preventDefault();

        const errors = this.validate(); // on teste dans validate si une erreur ?
        this.setState({ errors: errors || {} });

        if (errors) return;
        console.log("submitted :)");
    }

    handleChange = ({ currentTarget: input }) => { // handleChange = e => {} ==> déstructuration de e en faisant ({currentTarget: input})
        const account = { ...this.state.account };
        let errors = { ...this.state.errors };
        
        // récupération de la saisie
        account[input.name] = input.value; // account[e.currentTarget.name] permet de récupérer le name de l'input

        const errorMessage = this.validateProperty(input); // on récupère un message d'erreur si "champ vide"

        // vérification d'une éventuelle erreur de saisie
        // si errorMessage alors on ajoute une propriété errors.username ou errors.password à l'objet errors
        if (errorMessage) {
            errors[input.name] = errorMessage;
        } else {
            errors = {};
        }

        console.log(account);
        this.setState({ account, errors });
    }

    render() {

        const { account, errors } = this.state;

        return (
            <div
                style={{ width: '60%', margin: '0 auto' }}
            >
                <h2 className="text-center">Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        label="username"
                        value={account.username}
                        onChange={this.handleChange}
                        error={errors.username}
                    />
                    <Input
                        label="password"
                        value={account.password}
                        onChange={this.handleChange}
                        error={errors.password}
                    />
                    <button disabled={this.validate()} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;