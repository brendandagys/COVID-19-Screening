import { useEffect, useState } from 'react'
import Question from '../components/Question'
import { useActions } from '../hooks/useActions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import { useTypedSelector } from '../hooks/useTypedSelector'

const FormScreen = (): JSX.Element => {
  const [show, setShow] = useState(true)
  const toggleShow = () => setShow((show) => !show)

  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)
  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0)

  const { userInfo } = useTypedSelector((state) => state.authenticate)

  const { loading, error, questions } = useTypedSelector(
    (state) => state.questionsFetch
  )

  const { getQuestions } = useActions()

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

  useEffect(() => {
    if (numQuestionsAnswered === questions?.length) {
      setAllQuestionsAnswered(true)
    }
  }, [numQuestionsAnswered, questions])

  const markQuestionAnswered = () => {
    setNumQuestionsAnswered((prevCount) => prevCount + 1)
  }

  return (
    <>
      <Container>
        <h2 className='mb-3'>Screening Questions</h2>

        {questions?.map((question, index) => {
          return (
            <Question
              key={question._id}
              questionText={question.question}
              index={index}
              markQuestionAnswered={markQuestionAnswered}
            />
          )
        })}
        {allQuestionsAnswered && (
          <Button type='submit' variant='primary'>
            Submit
          </Button>
        )}
      </Container>
      <Modal show={show} onHide={toggleShow}>
        <Modal.Header style={{ backgroundColor: '#F0F0F0' }}>
          <Modal.Title>
            <p className='text-success'>{'Pre-Screening Messages'}</p>
            <small className='text-muted'>{`${userInfo?.firstName} ${userInfo?.lastName}`}</small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Screening for staff for symptoms of COVID is important in order to
            keep our patients and staff safe. In order to maximize the efficacy
            of screening we would ask that you be honest about your symptoms and
            complete the screening questions within 2 hours of your shift start
            time.
          </h6>
          <h6>
            If you recently failed screening and have been authorized to return
            to work byOHS then you are OK to proceed as long as you have no new
            symptoms.
          </h6>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#F5F5F5' }}>
          <Button
            style={{ width: '100%' }}
            variant='success'
            onClick={toggleShow}
          >
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FormScreen
