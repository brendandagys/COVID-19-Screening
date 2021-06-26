import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Button from 'react-bootstrap/Button'
import { useActions } from '../hooks/useActions'

const CompletedScreen = (): JSX.Element => {
  const { loading, error, userInfo } = useTypedSelector(
    (state) => state.authenticate
  )

  const { loading: loadingEmail, error: errorEmail } = useTypedSelector(
    (state) => state.emailFetch
  )

  const { clearSubmission, createEmail, fetchEmail } = useActions()

  useEffect(() => {
    fetchEmail()
  }, [fetchEmail])

  let color: string = '#2E5090'

  switch (new Date().getDay()) {
    case 0:
      color = '#2E5090'
      break
    case 1:
      color = '#41924B'
      break
    case 2:
      color = '#FEF250'
      break
    case 3:
      color = '#FFD1DC'
      break
    case 4:
      color = '#2E5090'
      break
    case 5:
      color = '#FFB347'
      break
    case 6:
      color = '#2E5090'
  }

  return (
    <Container
      fluid
      className='text-center'
      style={{ backgroundColor: color, height: '87vh' }}
    >
      <Row className='my-3 py-5'>
        <Col xs={12}>
          <Button
            disabled={loadingEmail === false ? true : false}
            variant='secondary'
            onClick={() => {
              if (userInfo) createEmail(userInfo.email, color)
            }}
          >
            Send Results By Email
          </Button>
        </Col>
        <Col xs={12} className='mt-1'>
          <small>{userInfo?.email}</small>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontWeight: 'bold' }}>{`Completed by ${
            userInfo?.firstName
          } ${
            userInfo?.lastName
          } on ${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}`}</p>
          <br />
          <p>
            You are cleared to work. Please be prepared to show this
            confirmation at staff entrance point when reporting for your shift.
          </p>
        </Col>
        <Col xs={12} className='mt-5'>
          <Button onClick={clearSubmission} variant='secondary'>
            Start Over
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default CompletedScreen
