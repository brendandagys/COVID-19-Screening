// import { useState, useEffect } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { useTypedSelector } from '../hooks/useTypedSelector'
// import { useActions } from '../hooks/useActions'

const FormScreen = ({
  location,
  history,
}: RouteComponentProps): JSX.Element => {
  return (
    <div>
      <h2>Form Page</h2>
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default FormScreen
