import Patient from "./Patient"


const clientsList = ({ patients, setPatient, deletePatient }) => {

  return (
    <div className="md:w-3/5 justify-center">
      {patients && patients.length ?
        (
          <div>
            <h2 className="font-bold text-3xl text-center">Patients list</h2>
            <p className="text-lg mt-5 text-center mb-10">
              Manage your {''}
              <span className="font-bold thirdColorText">Patients appointments</span>
            </p>
            <div id="listSection" className="fourthColor m-5 py-5 rounded-lg max-h-[48rem] h-[82%] overflow-y-scroll ">
              {patients.map((patient) => (
                <Patient
                  key={patient.id}
                  patient={patient}
                  setPatient={setPatient}
                  deletePatient={deletePatient}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="font-bold text-3xl text-center">Patients list</h2>
            <p className="text-lg mt-5 text-center mb-10">
              In this moment, the list is {''}
              <span className="font-bold thirdColorText">Empty</span>
            </p>
          </div>
        )}
    </div>
  )
}

export default clientsList