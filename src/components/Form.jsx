/* 
First we need to import the hooks from react, 
this is for setting the state of the app, 
most poppular hooks are this two and useContext
*/
import { useState, useEffect } from 'react'

//componente de error
import Error from "./Error"


const Form = ({ patients, setPatients, patient, setPatient }) => {
  /* 
  then we have to call the function in this section, 
  before the return but inside of the function of the component 
  */
  const [petName, setPetName] = useState('') // we set this because we want to identify what the user is typing 
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [symptoms, setSymptoms] = useState('')

  const generteId = () => {
    const randomNumber = Math.random().toString(36).substr(2)
    const randomDate = Date.now().toString(36)
    return randomNumber + randomDate
  }

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setEmail(patient.email)
      setDate(patient.date)
      setTime(patient.time)
      setSymptoms(patient.symptoms)
    }
  }, [patient])



  const handleSubmit = (e) => {
    e.preventDefault()
    if ([petName, ownerName, email, date, time, symptoms].includes('')) {
      console.log('All blanks must be filled.')
      setError(true)
      return;
    }
    setError(false)
    // Create an object for each patient so you can save everyones data.
    const objectPatient = {
      petName,
      ownerName,
      email,
      date,
      time,
      symptoms
    }
    if (patient.id) {
      // Editing the register
      objectPatient.id = patient.id
      const patientsUpdated = patients.map(patientState=>patientState.id === patient.id ? objectPatient : patientState)
      setPatients(patientsUpdated)
      setPatient({})
    } else {
      // New register
      objectPatient.id = generteId()
/* 
So we can not overwrite the object each time, 
we need to copy the original array and then add the new one  
*/
      setPatients([...patients, objectPatient])
    }

    // Then we can reinitiate the form so another user can use the inputs
    setPetName('')
    setOwnerName('')
    setEmail('')
    setDate('')
    setTime('')
    setSymptoms('')
  }

  return (
    <div className="md:w-2/5 justify-center">
      <h2 className="font-bold text-3xl text-center">
        Patient
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        add patients and {""}
        <span className="thirdColorText font-bold">Manage them</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="fourthColor rounded-lg py-10 px-5 mx-5 mb-10"
      >
        {error && <Error>All the blanks must be filled.</Error>}
        <div className="mb-5">
          <label htmlFor="pet" className="block thirdColorText uppercase font-bold ">
            Name of your pet
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet's name"
            className="border-2 w-full rounded-lg p-2 mt-2 placeholder-gray-300 "
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="owner" className="block thirdColorText uppercase font-bold">
            Your name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Your name"
            className="border-2 w-full rounded-lg p-2 mt-2 placeholder-gray-300"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block thirdColorText uppercase font-bold">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="border-2 w-full rounded-lg p-2 mt-2 placeholder-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="date" className="block thirdColorText uppercase font-bold">
            Appointment date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full rounded-lg p-2 mt-2 placeholder-gray-300"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="time" className="block thirdColorText uppercase font-bold">
            Appointment time
          </label>
          <input
            id="time"
            type="time"
            placeholder="Pet's name"
            className="border-2 w-full rounded-lg p-2 mt-2 placeholder-gray-300"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block thirdColorText uppercase font-bold">
            Symptoms of your pet
          </label>
          <textarea
            id="symptoms"
            className='w-full h-20 border-2 rounded-lg p-2 mt-2 placeholder-gray-300'
            placeholder='Describe the symptoms'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value={patient.id ? 'Edit patient' : 'Add patient'}
          className='mainColor p-5 w-full rounded-lg hover:bg-blue-800 cursor-pointer fourthColorText'
        />
      </form>
    </div>
  )
}

export default Form