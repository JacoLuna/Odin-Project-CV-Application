import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import GeneralInformation from './components/generalInformation'
import Studies from './components/Studies.jsx'
import Experience from './components/Experience.jsx'


function App(){
  const [studies, setStudies] = useState([<Studies key="Studies-0"></Studies>])
  const [experiences, setExperiences] = useState([<Experience key="Experience-0"></Experience>])
  
  const addStudy = () =>  {
    setStudies( (prevStudies) => [...prevStudies, <Studies key={"Studies-"+prevStudies.length}></Studies>])
  }
  const delStudy = () => {
    setStudies( (prevStudies) => prevStudies.slice(0, prevStudies.length-1))  
  }

  const addExperience = () =>  {
    setExperiences( (prevExp) => [...prevExp, <Experience key={"Experience-"+prevExp.length}></Experience>])
  }
  const delExperience = () => {
    setExperiences( (prevExp) => prevExp.slice(0, prevExp.length-1))  
  }
  return(
    <>
    <StrictMode>
      <div id='tittle-container'>
        <h1 id='tittle'>Curriculum Vitae Creator</h1>
      </div>
      <div className='section-container'>
        <div className='group-frm-container'>
          <div className='single-frm-container'>
            <GeneralInformation></GeneralInformation>
          </div>
        </div>
      </div>

      <div className='section-container'>
        <div className='group-frm-container'>
          {studies.map( (study) => (
              <div className='single-frm-container' key={study.key}>{study}</div>
            ))}
        </div>

        <div className='btn-container'>
          <input className='btn' type="button" value="+" onClick={addStudy}/>
          <input className='btn' type="button" value="-" onClick={delStudy} disabled={studies.length <= 1}/>
        </div>
      </div>
      
      <div className='section-container'>
        <div className='group-frm-container'>
          {experiences.map( (experience) => (
              <div className='single-frm-container' key={experience.key}>{experience}</div>
            ))}
        </div>

        <div className='btn-container'>
          <input className='btn' type="button" value="+" onClick={addExperience}/>
          <input className='btn' type="button" value="-" onClick={delExperience} disabled={studies.length <= 1}/>
        </div>
      </div>
    </StrictMode>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App/>)
