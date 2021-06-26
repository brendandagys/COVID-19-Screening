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
var RegisterScreen = function (_a) {
    var location = _a.location, history = _a.history;
    var _b = react_1.useState(''), firstName = _b[0], setFirstName = _b[1];
    var _c = react_1.useState(''), lastName = _c[0], setLastName = _c[1];
    var _d = react_1.useState(''), email = _d[0], setEmail = _d[1];
    var _e = react_1.useState(''), username = _e[0], setUsername = _e[1];
    var _f = react_1.useState(''), password = _f[0], setPassword = _f[1];
    var _g = react_1.useState(''), confirmPassword = _g[0], setConfirmPassword = _g[1];
    var _h = react_1.useState(null), message = _h[0], setMessage = _h[1];
    var register = useActions_1.useActions().register;
    var registration = useTypedSelector_1.useTypedSelector(function (state) { return state.registration; });
    var loading = registration.loading, error = registration.error, userInfo = registration.userInfo;
    var redirect = location.search ? location.search.split('=')[1] : '/';
    react_1.useEffect(function () {
        if (userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);
    var submitHandler = function (e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        }
        else {
            setMessage(null);
            register(firstName, lastName, email, username, password);
        }
    };
    return (<FormContainer_1.default>
      <h1 className='mb-4'>Sign Up</h1>
      {message && <Message_1.default variant='danger'>{message}</Message_1.default>}
      {error && <Message_1.default variant='danger'>{error}</Message_1.default>}
      {loading && <Loader_1.default />}
      <br />
      <Form_1.default onSubmit={submitHandler}>
        <Form_1.default.Group controlId='firstName'>
          <Form_1.default.Label>First Name</Form_1.default.Label>
          <Form_1.default.Control type='text' placeholder='First name...' value={firstName} onChange={function (e) { return setFirstName(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='lastName'>
          <Form_1.default.Label>Last Name</Form_1.default.Label>
          <Form_1.default.Control type='text' placeholder='Last name...' value={lastName} onChange={function (e) { return setLastName(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='email'>
          <Form_1.default.Label>Email</Form_1.default.Label>
          <Form_1.default.Control type='email' placeholder='Email address...' value={email} onChange={function (e) { return setEmail(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='username'>
          <Form_1.default.Label>Username</Form_1.default.Label>
          <Form_1.default.Control type='text' placeholder='Username...' value={username} onChange={function (e) { return setUsername(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='password'>
          <Form_1.default.Label>Password</Form_1.default.Label>
          <Form_1.default.Control type='password' placeholder='Password...' value={password} onChange={function (e) { return setPassword(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='confirmpassword'>
          <Form_1.default.Label>Confirm Password</Form_1.default.Label>
          <Form_1.default.Control type='password' placeholder='Password...' value={confirmPassword} onChange={function (e) { return setConfirmPassword(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Button_1.default style={{ width: '100%' }} type='submit' variant='primary'>
          Submit
        </Button_1.default>
      </Form_1.default>

      <Row_1.default className='py-3'>
        <Col_1.default>
          Have an account?{' '}
          <react_router_dom_1.Link to={redirect ? "/login?redirect=" + redirect : '/login'}>
            Sign In
          </react_router_dom_1.Link>
        </Col_1.default>
      </Row_1.default>
    </FormContainer_1.default>);
};
exports.default = RegisterScreen;
//# sourceMappingURL=RegisterScreen.js.map