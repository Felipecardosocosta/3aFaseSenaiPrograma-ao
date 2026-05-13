import axios from 'axios'
import React, { useEffect, useState } from 'react'

import{FaUserAlt} from"react-icons/fa"

const PatientsList = () => {

    const [patients,setPatients] = useState([])
    const [searchTerm,setSearchTerm] = useState('')

    const [ages,setAges]=useState({})

    const calculateAge =(birthdate)=>{
        if (!birthdate) return "-"

        const today = new Date()

        const birthdateData = new Date(birthdate)

        let age = today.getFullYear() - birthdateData.getFullYear()

        const monthDiff = today.getMonth() - birthdateData.getMonth()

        if (monthDiff<0 || (monthDiff=== 0 && today.getDate() < birthdateData.getDate())) age--

        return age
    }

    useEffect(()=>{
        
        const fecthPatients = async ()=>{
            try {
                const response = await axios.get("http://localhost:3000/patients")
                const patientsData = response.data
                const calculateAges = {}

                patientsData.forEach(element => {

                    calculateAges[element.id] = calculateAge(element.birthdate)
                    
                });
                setPatients(patientsData)
                setAges(calculateAge)

            } catch (error) {
            console.log("Erro ao obter dados dos pacientes",error);
            
                
            }
        }
        fecthPatients()
    },[])


    const handleSearchChange = (e)=>{

        setSearchTerm(e.target.value)
    }

    const filteredPatiens = patients.filter( (patients)=> [patients.fullName,patients.email,patients.phone].join(" ").toLowerCase().includes(searchTerm.toLowerCase()) )


  return (
    <div>PatientsList</div>
  )
}

export default PatientsList