"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("react-bootstrap/Card"));
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var react_1 = require("react");
var Question = function (_a) {
    var questionText = _a.questionText, index = _a.index, markQuestionAnswered = _a.markQuestionAnswered, toggleShowFail = _a.toggleShowFail;
    var _b = react_1.useState(null), response = _b[0], setResponse = _b[1];
    return (<Card_1.default border={response === 'yes' ? 'success' : response === 'no' ? 'danger' : ''} className='my-3'>
      <Card_1.default.Header as='h6'>{'Question ' + (index + 1)}</Card_1.default.Header>
      <Card_1.default.Body>
        {/* <Card.Title>Question</Card.Title> */}
        <Card_1.default.Text>
          <small>{questionText}</small>
        </Card_1.default.Text>
        <hr style={{ color: 'slategray' }}/>
        <Row_1.default>
          <Col_1.default>
            <Button_1.default style={{ width: '100%' }} variant={response === 'yes' ? 'success' : 'secondary'} onClick={function () {
            setResponse('yes');
            toggleShowFail();
            response !== null && markQuestionAnswered('subtract');
        }}>
              Yes
            </Button_1.default>
          </Col_1.default>
          <Col_1.default>
            <Button_1.default style={{ width: '100%' }} variant={response === 'no' ? 'danger' : 'secondary'} onClick={function () {
            setResponse('no');
            response !== 'no' && markQuestionAnswered('add');
        }}>
              No
            </Button_1.default>
          </Col_1.default>
        </Row_1.default>
      </Card_1.default.Body>
      <Card_1.default.Footer className='py-1'>
        <small className='text-muted'></small>
      </Card_1.default.Footer>
    </Card_1.default>);
};
exports.default = Question;
//# sourceMappingURL=Question.js.map