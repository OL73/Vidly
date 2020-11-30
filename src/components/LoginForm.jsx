import React, { Component } from 'react'

class LoginForm extends Component {
    state = {
        account: {
            username: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log('submitted');
    }

    handleChange = e => {
        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value; // account[e.currentTarget.name] permet de récupérer le name de l'input

        console.log(account);
        this.setState({ account });
    }

    render() {

        const { account } = this.state;

        return (
            <div className="container">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            value={account.username}
                            onChange={this.handleChange}
                            name="username"
                            autoFocus
                            id="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            value={account.password}
                            onChange={this.handleChange}
                            name="password"
                            id="password"
                            type="text"
                            className="form-control" />
                    </div>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;