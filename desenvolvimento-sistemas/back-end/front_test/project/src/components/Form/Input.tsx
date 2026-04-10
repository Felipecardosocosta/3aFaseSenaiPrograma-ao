import type {InputHTMLAttributes} from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>{

    name?:string

}



export const FormInpurt = ({name ,...rest}:Props) => {
  return (

    <div>
        
   <label 
   htmlFor=""
   
   >
    {name}
    
    </label>
   <input 
   type="text" 
   {...rest}
   />
        
    </div>
  )
}
