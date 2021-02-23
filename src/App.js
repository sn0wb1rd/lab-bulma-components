import React from 'react';

import 'bulma/css/bulma.css';
// import Navbar from './navbar/Navbar.js' // not needed in it 4
// import FormField from './formfield/FormField.js' // not needed in it 4
// import CoolButton from './coolbutton/CoolButton.js' // not needed it 4
import Signup from './signup/Signup.js';

const App = () => {
  return (
    <React.Fragment>
        <Signup/>



        {/* <Navbar/>

        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" /> */}

        {/*It 3 */}
        {/* <div>
          <CoolButton label= "Log out" isSmall isDanger className="is-rounded my-class" >Button 1</CoolButton>
          <CoolButton label= "Log in" isSmall isSuccess>Button 2</CoolButton>
        </div> */}


    </React.Fragment>
  )   
};

export default App;


