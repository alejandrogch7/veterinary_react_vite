const Patient = ({ patient, setPatient, deletePatient }) => {


  const { petName, ownerName, email, date, time, symptoms, id } = patient

  const handleDelete = ()=>{
    const confirmDelete = confirm('This patient is going to be deleted, do you agree?') 
    if(confirmDelete){
      deletePatient(id)
    }
  }

  return (
    <div className="shadow-lg p-5 rounded-lg text-left flex flex-col bg-white m-5">
      <div className="flex flex-wrap">
        <div className="md:w-1/2">
          <p className="p-2 secondColorText">
            Name: {''}
            <span className="font-bold">{petName}</span>
          </p>
          <p className="p-2 secondColorText">
            Owner's name: {''}
            <span className="font-bold">{ownerName}</span>
          </p>
          <p className="p-2 secondColorText">
            Email: {''}
            <span className="font-bold">{email}</span>
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="p-2 secondColorText">
            Appointment Date: {''}
            <span className="font-bold">{date}</span>
          </p>
          <p className="p-2 secondColorText">
            Appointment Time: {''}
            <span className="font-bold">{time}</span>
          </p>
          <p className="p-2 secondColorText">
            Syntoms: {''}
            <span className="font-bold">{symptoms}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="justify-end items-end">
          <button
            onClick={() => setPatient(patient)}>
            <p className="my-1 mx-1 py-1 px-1 rounded-lg text-sky-600">
              Editar
            </p>
          </button>
          <button onClick={handleDelete}>
            <p className="my-1 mx-1 py-1 px-1 rounded-lg mainBorderColor text-red-600">Eliminar</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Patient