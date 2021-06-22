import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

type Response = 'yes' | 'no' | null

const Question = ({
  questionText,
  index,
  markQuestionAnswered,
  toggleShowFail,
}: {
  questionText: string
  index: number
  markQuestionAnswered: (operation: 'add' | 'subtract') => void
  toggleShowFail: () => void
}) => {
  const [response, setResponse] = useState<Response>(null)

  return (
    <Card
      border={
        response === 'yes' ? 'success' : response === 'no' ? 'danger' : ''
      }
      className='my-3'
    >
      <Card.Header as='h6'>{'Question ' + (index + 1)}</Card.Header>
      <Card.Body>
        {/* <Card.Title>Question</Card.Title> */}
        <Card.Text>
          <small>{questionText}</small>
        </Card.Text>
        <hr style={{ color: 'slategray' }} />
        <Row>
          <Col>
            <Button
              style={{ width: '100%' }}
              variant={response === 'yes' ? 'success' : 'secondary'}
              onClick={() => {
                setResponse('yes')
                toggleShowFail()
                response !== null && markQuestionAnswered('subtract')
              }}
            >
              Yes
            </Button>
          </Col>
          <Col>
            <Button
              style={{ width: '100%' }}
              variant={response === 'no' ? 'danger' : 'secondary'}
              onClick={() => {
                setResponse('no')
                response !== 'no' && markQuestionAnswered('add')
              }}
            >
              No
            </Button>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className='py-1'>
        <small className='text-muted'></small>
      </Card.Footer>
    </Card>
  )
}

export default Question
