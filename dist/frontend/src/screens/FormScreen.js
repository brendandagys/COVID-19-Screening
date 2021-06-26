"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Question_1 = __importDefault(require("../components/Question"));
var useActions_1 = require("../hooks/useActions");
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Modal_1 = __importDefault(require("react-bootstrap/Modal"));
// import Message from '../components/Message'
// import Loader from '../components/Loader'
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var react_scroll_1 = require("react-scroll");
var FormScreen = function () {
    var _a = react_1.useState(false), show = _a[0], setShow = _a[1];
    var toggleShow = function () { return setShow(function (show) { return !show; }); };
    var _b = react_1.useState(false), showFail = _b[0], setShowFail = _b[1];
    var toggleShowFail = function () { return setShowFail(function (showFail) { return !showFail; }); };
    var _c = react_1.useState(false), allQuestionsAnswered = _c[0], setAllQuestionsAnswered = _c[1];
    var _d = react_1.useState(0), numQuestionsAnswered = _d[0], setNumQuestionsAnswered = _d[1];
    var userInfo = useTypedSelector_1.useTypedSelector(function (state) { return state.authenticate; }).userInfo;
    var _e = useTypedSelector_1.useTypedSelector(function (state) { return state.submissionFetch; }), submission = _e.submission, userResetFlag = _e.userResetFlag;
    var _f = useTypedSelector_1.useTypedSelector(function (state) { return state.questionsFetch; }), loading = _f.loading, error = _f.error, questions = _f.questions;
    var submitAnswers = questions === null || questions === void 0 ? void 0 : questions.map(function (question) {
        return { question: question._id, answer: 'no' };
    });
    var _g = useActions_1.useActions(), getQuestions = _g.getQuestions, fetchSubmission = _g.fetchSubmission, createSubmission = _g.createSubmission;
    react_1.useEffect(function () {
        var timer = setTimeout(function () {
            !submission && setShow(true);
        }, 700);
        return function () { return clearTimeout(timer); };
    }, [submission]);
    react_1.useEffect(function () {
        if (!questions)
            getQuestions();
    }, [questions, getQuestions]);
    react_1.useEffect(function () {
        if (!userResetFlag)
            fetchSubmission();
    }, [userResetFlag, fetchSubmission]);
    react_1.useEffect(function () {
        if (numQuestionsAnswered === (questions === null || questions === void 0 ? void 0 : questions.length)) {
            setAllQuestionsAnswered(true);
        }
        else {
            setAllQuestionsAnswered(false);
        }
    }, [numQuestionsAnswered, questions]);
    react_1.useEffect(function () {
        if (allQuestionsAnswered)
            react_scroll_1.animateScroll.scrollToBottom({ smooth: true });
    }, [allQuestionsAnswered]);
    var markQuestionAnswered = function (operation) {
        setNumQuestionsAnswered(function (prevCount) {
            return operation === 'add' ? prevCount + 1 : prevCount - 1;
        });
    };
    return (<>
      <Container_1.default className='pb-3 text-center' style={{ maxWidth: '600px' }}>
        <h2 className='mb-3'>Screening Questions</h2>
        {questions === null || questions === void 0 ? void 0 : questions.map(function (question, index) {
            return (<Question_1.default key={index} questionText={question.question} index={index} markQuestionAnswered={markQuestionAnswered} toggleShowFail={toggleShowFail}/>);
        })}
        {allQuestionsAnswered && (<Button_1.default size='lg' className='mt-3' style={{ width: '100%', fontSize: '3rem' }} type='submit' variant='primary' onClick={function () { return createSubmission(submitAnswers, false); }}>
            Submit
          </Button_1.default>)}
      </Container_1.default>
      <Modal_1.default show={show} onHide={toggleShow} className='text-center'>
        <Modal_1.default.Body style={{ backgroundColor: '#F0F0F0' }}>
          <Modal_1.default.Title>
            <p className='text-success'>{'Pre-Screening Messages'}</p>
            <small className='text-muted'>{(userInfo === null || userInfo === void 0 ? void 0 : userInfo.firstName) + " " + (userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastName)}</small>
          </Modal_1.default.Title>
        </Modal_1.default.Body>
        <Modal_1.default.Body>
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
        </Modal_1.default.Body>
        <Modal_1.default.Footer style={{ backgroundColor: '#F5F5F5' }}>
          <Button_1.default style={{ width: '100%' }} variant='success' onClick={toggleShow}>
            Okay
          </Button_1.default>
        </Modal_1.default.Footer>
      </Modal_1.default>
      <Modal_1.default show={showFail} onHide={toggleShowFail} className='text-center'>
        <Modal_1.default.Body style={{ backgroundColor: '#F0F0F0' }}>
          <Modal_1.default.Title>
            <p className='text-danger'>Contact Us</p>
            <small className='text-muted'>{(userInfo === null || userInfo === void 0 ? void 0 : userInfo.firstName) + " " + (userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastName)}</small>
          </Modal_1.default.Title>
        </Modal_1.default.Body>
        <Modal_1.default.Body>
          <h6 className='text-danger'>
            If you are experiencing any of the symptoms listed below, please see
            a member of the screening staff, or contact Occupational Health.
          </h6>
        </Modal_1.default.Body>
        <Modal_1.default.Footer style={{ backgroundColor: '#F5F5F5' }}>
          <Button_1.default style={{ width: '100%' }} variant='success' onClick={toggleShowFail}>
            Okay
          </Button_1.default>
        </Modal_1.default.Footer>
      </Modal_1.default>
    </>);
};
exports.default = FormScreen;
//# sourceMappingURL=FormScreen.js.map