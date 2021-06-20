import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

type Response = 'yes' | 'no' | null

const Question = ({ questionText }: { questionText: string }) => {
  const [response, setResponse] = useState<Response>(null)

  return (
    <Card className='my-3'>
      <Card.Header as='h6'>Header</Card.Header>
      <Card.Body>
        <Card.Title>Question</Card.Title>
        <Card.Text>{questionText}</Card.Text>
        <Button
          className='mx-2 mt-2'
          variant={response === 'yes' ? 'success' : 'secondary'}
          onClick={() => setResponse('yes')}
        >
          Yes
        </Button>
        <Button
          className='mx-2 mt-2'
          variant={response === 'no' ? 'danger' : 'secondary'}
          onClick={() => setResponse('no')}
        >
          No
        </Button>
      </Card.Body>
      <Card.Footer className='py-1'>
        <small className='text-muted'>{response}</small>
      </Card.Footer>
    </Card>
  )
}

export default Question
