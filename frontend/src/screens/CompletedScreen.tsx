import { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Button from 'react-bootstrap/Button'
import Message from '../components/Message'
import { useActions } from '../hooks/useActions'

const CompletedScreen = ({ createdAt }: { createdAt: string }): JSX.Element => {
  const createdDate = new Date(createdAt)

  const { userInfo } = useTypedSelector((state) => state.authenticate)

  const { loading: loadingEmailFetch } = useTypedSelector(
    (state) => state.emailFetch
  )

  const { loading: loadingEmailCreate } = useTypedSelector(
    (state) => state.emailCreate
  )

  const { clearSubmission, createEmail, fetchEmail } = useActions()

  useEffect(() => {
    fetchEmail()
  }, [fetchEmail])

  let color: string = '#2E5090'
  let fontColor: string = 'black'

  switch (new Date().getDay()) {
    case 0: // Sunday - purple
      color = '#CDB7F6'
      break
    case 1: // Monday - yellow
      color = '#FEF250'
      break
    case 2: // Tuesday - green
      color = '#41924B'
      break
    case 3: // Wednesday - pink
      color = '#FFD1DC'
      break
    case 4: // Thursday - blue
      color = '#2E5090'
      fontColor = 'white'
      break
    case 5: // Friday - orange
      color = '#FFB347'
      break
    case 6: // Saturday - purple
      color = '#CDB7F6'
  }

  return (
    <Container
      fluid
      className='text-center'
      style={{ backgroundColor: color, height: '87vh', borderRadius: '12px' }}
    >
      <Row className='my-3 py-5'>
        <Col xs={12}>
          {loadingEmailCreate === false ? (
            <Message variant='success'>Email sent!</Message>
          ) : (
            <Button
              disabled={loadingEmailFetch === false ? true : false}
              variant='secondary'
              onClick={() => {
                if (userInfo) createEmail(userInfo.email, color, fontColor)
              }}
            >
              Send Results By Email
            </Button>
          )}
        </Col>
        <Col xs={12} className='mt-1'>
          <small style={{ color: fontColor }}>{userInfo?.email}</small>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ fontWeight: 'bold', color: fontColor }}>{`Completed by ${
            userInfo?.firstName
          } ${
            userInfo?.lastName
          } on ${createdDate.toLocaleDateString()}, ${createdDate.toLocaleTimeString()}`}</p>
          <br />
          <p style={{ color: fontColor }}>
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
