import React from 'react'

const FormField = props => {
    return (
        <>
            <div className='field'>
                <label className='label'>{props.label}</label>
            </div>

            <div class="control">
                <input className="input" type={props.type} placeholder={props.placeholder}/>
            </div>
        </>
    );
  };


export default FormField