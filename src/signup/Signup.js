import React from 'react'
import Navbar from '../navbar/Navbar.js'
import FormField from '../formfield/FormField.js'
import CoolButton from '../coolbutton/CoolButton.js'

const Signup = (props) => {

    return(
        <>
            <Navbar/>

            <div class="mb-3 container">

            <FormField label="Name" type="text" placeholder="e.g Jane Doe" />
            <FormField label="Email" type="email" placeholder="e.g. jdoe@gmail.com" />
            <FormField label="Password" type="password" placeholder="e.g. supersecret password" />

            <CoolButton label= "Submit" isPrimary className="mt-4 is-rounded my-class" >Button 1</CoolButton>
            </div>
        </>
    )
}







export default Signup