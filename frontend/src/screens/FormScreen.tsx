import { useEffect, useState } from 'react'
import Question from '../components/Question'
import { useActions } from '../hooks/useActions'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { animateScroll } from 'react-scroll'

const FormScreen = (): JSX.Element => {
  const [show, setShow] = useState(false)
  const toggleShow = () => setShow((show) => !show)

  const [showFail, setShowFail] = useState(false)
  const toggleShowFail = () => setShowFail((showFail) => !showFail)

  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false)
  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState(0)

  const { userInfo } = useTypedSelector((state) => state.authenticate)
  const { submission, userResetFlag } = useTypedSelector(
    (state) => state.submissionFetch
  )
  const { questions } = useTypedSelector((state) => state.questionsFetch)

  const submitAnswers = questions?.map((question) => {
    return { question: question._id, answer: 'no' }
  })

  const { getQuestions, fetchSubmission, createSubmission } = useActions()

  useEffect(() => {
    const timer = setTimeout(() => {
      !submission && setShow(true)
    }, 700)
    return () => clearTimeout(timer)
  }, [submission])

  useEffect(() => {
    if (!questions) getQuestions()
  }, [questions, getQuestions])

  useEffect(() => {
    if (!userResetFlag) fetchSubmission()
  }, [userResetFlag, fetchSubmission])

  useEffect(() => {
    if (numQuestionsAnswered === questions?.length) {
      setAllQuestionsAnswered(true)
    } else {
      setAllQuestionsAnswered(false)
    }
  }, [numQuestionsAnswered, questions])

  useEffect(() => {
    if (allQuestionsAnswered) animateScroll.scrollToBottom({ smooth: true })
  }, [allQuestionsAnswered])

  const markQuestionAnswered = (operation: 'add' | 'subtract') => {
    setNumQuestionsAnswered((prevCount) =>
      operation === 'add' ? prevCount + 1 : prevCount - 1
    )
  }

  return (
    <>
      <Container className='pb-3 text-center' style={{ maxWidth: '600px' }}>
        <h2 className='mb-3'>Screening Questions</h2>
        {questions?.map((question, index) => {
          return (
            <Question
              key={index}
              questionText={question.question}
              index={index}
              markQuestionAnswered={markQuestionAnswered}
              toggleShowFail={toggleShowFail}
            />
          )
        })}
        {allQuestionsAnswered && (
          <Button
            size='lg'
            className='mt-3'
            style={{ width: '100%', fontSize: '3rem' }}
            type='submit'
            variant='primary'
            onClick={() => createSubmission(submitAnswers, false)}
          >
            Submit
          </Button>
        )}
      </Container>
      <Modal show={show} onHide={toggleShow} className='text-center'>
        <Modal.Body style={{ backgroundColor: '#F0F0F0' }}>
          <Modal.Title>
            <p className='text-success'>{'Pre-Screening Messages'}</p>
            <small className='text-muted'>{`${userInfo?.firstName} ${userInfo?.lastName}`}</small>
          </Modal.Title>
        </Modal.Body>
        <Modal.Body>
          <h6>
            Screening for staff for symptoms of COVID is important in order to
            keep our patients and staff safe.
          </h6>
          <h6>
            In order to maximize the efficacy of screening we would ask that you
            be honest about your symptoms and complete the screening questions
            within 2 hours of your shift start time.
          </h6>
          <h6>
            If you recently failed screening and have been authorized to return
            to work by OHS then you are OK to proceed as long as you have no new
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
      <Modal show={showFail} onHide={toggleShowFail} className='text-center'>
        <Modal.Body style={{ backgroundColor: '#F0F0F0' }}>
          <Modal.Title>
            <p className='text-danger'>Contact Us</p>
            <small className='text-muted'>{`${userInfo?.firstName} ${userInfo?.lastName}`}</small>
          </Modal.Title>
        </Modal.Body>
        <Modal.Body>
          <h6 className='text-danger'>
            If you are experiencing any of the symptoms listed below, please see
            a member of the screening staff, or contact Occupational Health.
          </h6>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#F5F5F5' }}>
          <Button
            style={{ width: '100%' }}
            variant='success'
            onClick={toggleShowFail}
          >
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default FormScreen
