"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Form_1 = __importDefault(require("react-bootstrap/Form"));
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var Message_1 = __importDefault(require("../components/Message"));
var Loader_1 = __importDefault(require("../components/Loader"));
var FormContainer_1 = __importDefault(require("../components/FormContainer"));
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var LoginScreen = function (_a) {
    var location = _a.location, history = _a.history;
    var _b = react_1.useState(''), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    var login = useActions_1.useActions().login;
    var authenticate = useTypedSelector_1.useTypedSelector(function (state) {
        return state.authenticate;
    });
    var loading = authenticate.loading, error = authenticate.error, userInfo = authenticate.userInfo;
    var redirect = location.search ? location.search.split('=')[1] : '/';
    react_1.useEffect(function () {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);
    var submitHandler = function (e) {
        e.preventDefault();
        login(username, password);
    };
    return (<FormContainer_1.default>
      <h1 className='mb-4'>Sign In</h1>
      {error && <Message_1.default variant='danger'>{error}</Message_1.default>}
      {loading && <Loader_1.default />}
      <br />
      <Form_1.default onSubmit={submitHandler}>
        <Form_1.default.Group controlId='username'>
          <Form_1.default.Label>Username</Form_1.default.Label>
          <Form_1.default.Control autoComplete='true' type='text' placeholder='Username...' value={username} onChange={function (e) { return setUsername(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='password'>
          <Form_1.default.Label>Password</Form_1.default.Label>
          <Form_1.default.Control autoComplete='true' type='password' placeholder='Password...' value={password} onChange={function (e) { return setPassword(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Button_1.default style={{ width: '100%' }} type='submit' variant='primary'>
          Log In
        </Button_1.default>
      </Form_1.default>

      <Row_1.default className='py-3'>
        <Col_1.default>
          New user?{' '}
          <react_router_dom_1.Link to={redirect ? "/register?redirect=" + redirect : '/register'}>
            Register
          </react_router_dom_1.Link>
        </Col_1.default>
      </Row_1.default>
    </FormContainer_1.default>);
};
exports.default = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map