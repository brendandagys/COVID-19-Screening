import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import { useTypedSelector } from '../hooks/useTypedSelector'
// import { useActions } from '../hooks/useActions'

const FormScreen = ({
  location,
  history,
}: RouteComponentProps): JSX.Element => {
  const { userInfo } = useTypedSelector((state) => state.authenticate)

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    }
  }, [history, userInfo])

  return (
    <div>
      <h2>Form Page</h2>
    </div>
  )
}

export default FormScreen
