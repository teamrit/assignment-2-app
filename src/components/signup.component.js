import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import {signUpUser} from "../redux/actions/users.action";
import {Toast,Form} from "react-bootstrap";
import {CenteredLogo} from "./centered.logo";
import ReactDOM from "react-dom";
import {SignUpInput} from "./signup.input";
import {Modal} from "./portal";
import {Toaster} from "./toast.component";

export class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            confirmPassword: "",
            showResponse: true
        }
        this.el = document.createElement('div');
    }

    onChange = key => (e) => {
        console.warn(e,key);
        this.setState({[key] : e.target.value})
    };

    signUp = (e) => {
        e.preventDefault();
        const {email,password,firstName,lastName} = this.state;
        this.props.signUpUser({email,password,firstName,lastName});
    };


    render() {
        const {email,password,firstName,lastName,confirmPassword,showResponse} = this.state;
        return (
            <div className="mh-100 bg-jazz">
                <div className="mh-100 bg-ripple aligner">
                    <div className="login ">
                        <div>
                            <div className="container">
                                <div className="d-flex justify-content-center h-100">
                                    <div className="card br-major h-70">
                                        <div className="card-header br-major-t bg-pop text-white">
                                            <h3 className="t-b text-center">Sign Up</h3>
                                        </div>
                                        <Modal>
                                            <Toaster
                                                show={showResponse}
                                                onClose={() => {this.setState({showResponse: false})}}
                                                title={"Sign up successfully"}
                                                description={"Hey buddy"}
                                            />
                                        </Modal>

                                        <div className="card-body">
                                            <form>
                                                <CenteredLogo />
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
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Label className={"t-b"}>Account type</Form.Label>
                                                    <Form.Control as="select" onChange={e => console.log(e.target.value)}>
                                                        <option value="ADMIN">Admin</option>
                                                        <option value="STANDARD_USER">Standard User</option>
                                                    </Form.Control>
                                                </Form.Group>
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