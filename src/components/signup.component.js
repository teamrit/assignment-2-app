import React, {Component} from 'react';
import image from "../incible-logo.png";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {signUpUser} from "../redux/actions/users.action";

const SignUpInput = ({id,label="",keyForInput = "",...inputProps}) => (
    <div className="form-group">
        <label htmlFor={id} className="w-100 t-b text-left">{label}</label>
        <input id={id} className="form-control" {...inputProps} />
    </div>
);

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmPassword: ""
        }
    }

    onChange = key => (e) => {
        console.warn(e,key);
        this.setState({[key] : e.target.value})
    };

    signUp = (e) => {
        e.preventDefault();
        const {email,password,firstName,lastName} = this.state;
        console.warn(email,password,firstName,lastName)
        console.log(this.props.signUpUser())
    };

    render() {
        const {email,password,firstName,lastName,confirmPassword} = this.state;
        return (
            <div className="mh-100 bg-jazz">
                <div className="mh-100 bg-ripple aligner">
                    <div className="login ">
                        <div>
                            <div className="container">
                                <div className="d-flex justify-content-center h-100">
                                    <div className="card br-major h-70">
                                        <div className="card-header br-major-t bg-pop text-white">
                                            <h3 className="t-b">Sign Up</h3>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <img src={image}
                                                     title="Incible: Invincible Incident Management"
                                                     alt="Incible: Invincible Incident Management"
                                                     className="logo mb-3 border rounded" />
                                                <SignUpInput
                                                    label={"First Name"}
                                                    id={"su-firstName"}
                                                    type={"text"}
                                                    placeholder={"First name eg: John"}
                                                    onChange={this.onChange("firstName")}
                                                    value={firstName}
                                                />
                                                <SignUpInput
                                                    label={"Last Name"}
                                                    id={"su-lastName"}
                                                    type={"text"}
                                                    placeholder={"Last name eg: Cena"}
                                                    onChange={this.onChange("lastName")}
                                                    value={lastName}
                                                />
                                                <SignUpInput
                                                    label={"Email"}
                                                    id={"su-email"}
                                                    type={"text"}
                                                    placeholder={"Email eg: something@example.com"}
                                                    onChange={this.onChange("email")}
                                                    value={email}
                                                />
                                                <SignUpInput
                                                    label={"Password"}
                                                    id={"su-password"}
                                                    type={"password"}
                                                    placeholder={"Password"}
                                                    onChange={this.onChange("password")}
                                                    value={password}
                                                />
                                                <SignUpInput
                                                    label={"Confirm password"}
                                                    id={"su-cpassword"}
                                                    type={"password"}
                                                    placeholder={"Confirm Password"}
                                                    onChange={this.onChange("confirmPassword")}
                                                    value={confirmPassword}
                                                />
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" htmlFor="exampleCheck1">&nbsp;Remember Me</label>
                                                </div>
                                                <button
                                                    onClick={this.signUp}
                                                    className="btn float-right login_btn bg-pop brr text-white t-b mt-2">
                                                    Sign Up <i className="fa fa-arrow-right"/>
                                                </button>
                                            </form>
                                        </div>
                                        <div className="card-footer">
                                            <div className="d-flex justify-content-center links">
                                                Already have an account?
                                                <Link to="/login">&nbsp;Sign In</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state => state), {signUpUser: signUpUser})(SignUp);