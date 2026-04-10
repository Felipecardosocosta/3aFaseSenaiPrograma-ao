import React from 'react'

export const LabelInput = ({ type, text, name, ...rest}) => {

     

    return (
        <div className='flex flex-col gap-1'>
            <label
                htmlFor={name}
                className=''
            >{text}:
            </label>

            <input
                
                type={type}
                name={name}
                className='border-1 rounded'
                {...rest}
                
             
            />


        </div>
    )
}

