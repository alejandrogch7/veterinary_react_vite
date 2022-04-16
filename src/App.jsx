import { useState, useEffect } from 'react'
import Form from "./components/Form"
import Header from "./components/Header"
import ClientsList from "./components/ClientsList"
function App() {

  const [patients,setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect(()=>{
    const obtainLS=()=>{
      const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? []
      setPatients(patientsLS)
    }
    obtainLS()
  },[])

  useEffect(()=>{
    localStorage.setItem('patients',JSON.stringify(patients))
  },[patients])


  const deletePatient = (id) => {
    const patientsUpdated = patients.filter(patient => patient.id !== id)
    setPatients(patientsUpdated)
  }
  

  return (
    <div className="container mx-auto mt-20 justify-center">
      <Header />
      <div className="my-12 md:flex">         
        <Form // We are going to set some props to share information from the main component to children components. 
        patients={patients}
        setPatients={setPatients}
        patient={patient}
        setPatient={setPatient}
        />
        <ClientsList 
        patients={patients} 
        setPatient={setPatient}     
        deletePatient={deletePatient}  
        />
      </div>
    </div>
  )
}

export default App
