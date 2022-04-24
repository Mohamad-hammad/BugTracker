import React, { Component } from "react";
import "./signin.css"
import "react-icons";
import {FiLock,FiUser,FiMail } from "react-icons/fi";
export default class Signin extends Component {
    render() {
        return (
            <div class="wrapper">
                <div class="card">
                    <form action="#" class="d-flex flex-column">
                        <div class="h3 text-center text-white">
                            Login
                        </div>
                        <div class="d-flex align-items-center input-field my-3 mb-4">
                        <span class="p-2"><FiUser/></span> <input type="text" placeholder="Username or Email" required class="form-control" />
                        </div>
                        <div class="d-flex align-items-center input-field mb-4">
                        <span class="p-2"><FiLock/></span>
                            <input type="password" placeholder="Password" required class="form-control" id="pwd" />
                            <button class="btn" onclick="showPassword()">
                                <span class="fas fa-eye-slash"></span>
                            </button>
                        </div>
                        <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                            <div class="d-flex align-items-center">
                                <label class="option">
                                    <span class="text-light-white">Remember Me</span>
                                    <input type="checkbox"/>
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                            <div class="mt-sm-0 mt-3">
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                        <div class="my-3">
                            <input type="submit" value="Login" class="btn btn-primary" />
                        </div>
                        <div class="mb-3">
                            <span class="text-light-white">Don't have an account?</span>
                            <a href="">Sign Up</a>
                        </div>
                    </form>
                    <div class="position-relative border-bottom my-3 line">
                        <span class="connect">or connect with</span>
                    </div>
                    <div class="text-center py-3 connections">
                        <a href="https://wwww.facebook.com" target="_blank" class="px-2">
                            <img src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt="" />
                        </a>
                        <a href="https://www.google.com" target="_blank" class="px-2">
                            <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>

        );
    }
}