import './Profile.css'
import React, { Component } from "react";
function Profile () {
    return (
        <>
            <div class="container-xl px-4 mt-4">
    <div class="row">
        <div class="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    {/* <!-- Profile picture image--> */}
                    <img class="img-account-profile rounded-circle mb-2" src="data:img.png;base64,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" alt=""/>
                    {/* <!-- Profile picture help block--> */}
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* <!-- Profile picture upload button--> */}
                    <button class="btn btn-primary" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form>
                        {/* <!-- Form Group (username)--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Ahmad2371" />
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (first name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">First name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Muhammad"/>
                            </div>
                            {/* <!-- Form Group (last name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Last name</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Ahmed"/>
                            </div>
                        </div>
                        {/* <!-- Form Row        --> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (organization name)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Organization name</label>
                                <input class="form-control" id="formControlReadonly" type="text" placeholder="Organization123" />
                            </div>
                            {/* <!-- Form Group (location)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLocation">Location</label>
                                <input class="form-control" id="inputLocation" type="text" placeholder="Lahore"/>
                            </div>
                        </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="ahmed@gmail.com"/>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="92 322123456"/>
                            </div>
                            {/* <!-- Form Group (birthday)--> */}
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="11/03/1995"/>
                            </div>
                        </div>
                        {/* <!-- Save changes button--> */}
                        <button class="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Profile;