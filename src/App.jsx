import { useEffect, useState } from 'react'
import data from './data/db.json'
import FormContainer from './components/FormContainer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import EmployeeDetails from './components/EmployeeDetails'

function App() {
  const [formData, setFormData] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setFormData(data)
    }, 1000)
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              formData.length > 0 ? (
                <div className="main">
                  <FormContainer formFields={formData} title={formData.title} />
                </div>
              ) : (
                <div className="loaderContainer">
                  <div className="loader"></div>
                </div>
              )
            }
          />
          <Route path="/details" element={<EmployeeDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
