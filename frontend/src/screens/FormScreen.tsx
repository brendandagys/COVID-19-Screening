// import { useEffect } from 'react'
// import { RouteComponentProps } from 'react-router-dom'
import Question from '../components/Question'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { useTypedSelector } from '../hooks/useTypedSelector'
// import { useActions } from '../hooks/useActions'

const FormScreen = (): JSX.Element => {
  return (
    <div>
      <h2>Screening Questions</h2>
      <Question questionText='What is being asked of you in this question?' />
      <Question questionText='What is being asked of you in this question?' />
      <Question questionText='What is being asked of you in this question?' />
      <Question questionText='What is being asked of you in this question?' />
      <Question questionText='What is being asked of you in this question?' />
      <Question questionText='What is being asked of you in this question?' />
    </div>
  )
}

export default FormScreen
