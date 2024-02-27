import React from 'react'

class Page12 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: true
        }
        this.handler = this.handler.bind(this) // method binding
    }

    handler() {
        this.setState({
            view: !this.state.view
        })
    }

    render() {
        return (
            <div>
                <h1>Modify the view using State</h1>
                <section>
                    {
                        this.state.view  ? (
                            <div className="login">
                                <h3>Login window</h3>
                                <form>
                                    <fieldset>
                                        <div className="item">
                                            <label htmlFor="user">Username</label>
                                            <input type="email" name="user" id="user" className="input-item" required />
                                        </div>
                                        <div className="item">
                                            <label htmlFor="pass">Password</label>
                                            <input type="password" name="pass" id="pass" className="input-item" required />
                                        </div>
                                        <div className="item">
                                            <input type="submit" value="Login" />
                                        </div>
                                    </fieldset>
                                </form>
                                <div>
                                    <h3>New User ?<span onClick={this.handler} className="link">Register Here</span> </h3>
                                </div>
                            </div>
                        ) : (
                            <div className="register">
                                <h3>Register Window</h3>
                                <form>
                                    <fieldset>
                                        <div className="item">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" name="name" id="name" className="input-item" required />
                                        </div>
                                        <div className="item">
                                            <label htmlFor="user">Username</label>
                                            <input type="email" name="user" id="user" className="input-item" required />
                                        </div>
                                        <div className="item">
                                            <label htmlFor="pass">Password</label>
                                            <input type="password" name="pass" id="pass" className="input-item" required />
                                        </div>
                                        <div className="item">
                                            <input type="submit" value="Register" />
                                        </div>
                                    </fieldset>
                                </form>
                                <div>
                                    <h3>Already registered..<span onClick={this.handler} className="link">Login Here</span> </h3>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        )
    }
}


export default Page12
