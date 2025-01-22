import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import GeneralInformation from './components/generalInformation'
import Studies from './components/Studies.jsx'
import Experience from './components/Experience.jsx'


function App(){
  const [studies, setStudies] = useState([<Studies key="Studies-0"></Studies>])
  
  const addStudy = () =>  {
    setStudies( (prevStudies) => [...prevStudies, <Studies key={"Studies-"+prevStudies.length}></Studies>])
  }
  const delStudy = () => {
    setStudies( (prevStudies) => prevStudies.slice(0, prevStudies.length-1))  
  }

  return(
    <>
    <StrictMode>
      {/* <h1 id='tittle'>Curriculum Vitae Creator</h1> */}
      <GeneralInformation></GeneralInformation>

      {studies.map( (study) => (
          <div key={study.key}>{study}</div>
        ))}
      <input type="button" value="+" onClick={addStudy}/>
      <input type="button" value="-" onClick={delStudy} disabled={studies.length <= 1}/>
      <Experience></Experience>
    </StrictMode>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
