"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Form_1 = __importDefault(require("react-bootstrap/Form"));
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var Message_1 = __importDefault(require("../components/Message"));
var Loader_1 = __importDefault(require("../components/Loader"));
var FormContainer_1 = __importDefault(require("../components/FormContainer"));
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var ProfileScreen = function () {
    var _a = react_1.useState(''), firstName = _a[0], setFirstName = _a[1];
    var _b = react_1.useState(''), lastName = _b[0], setLastName = _b[1];
    var _c = react_1.useState(''), email = _c[0], setEmail = _c[1];
    var _d = react_1.useState(''), username = _d[0], setUsername = _d[1];
    var _e = react_1.useState(''), password = _e[0], setPassword = _e[1];
    var _f = react_1.useState(''), confirmPassword = _f[0], setConfirmPassword = _f[1];
    var _g = react_1.useState(false), isAdministrator = _g[0], setIsAdministrator = _g[1];
    var _h = react_1.useState(null), message = _h[0], setMessage = _h[1];
    var _j = useActions_1.useActions(), getUserDetails = _j.getUserDetails, updateUser = _j.updateUser;
    var userDetails = useTypedSelector_1.useTypedSelector(function (state) { return state.userDetails; });
    var loading = userDetails.loading, error = userDetails.error, userInfo = userDetails.userInfo;
    var userUpdate = useTypedSelector_1.useTypedSelector(function (state) { return state.userUpdate; });
    var errorUpdate = userUpdate.error, userInfoUpdate = userUpdate.userInfo;
    react_1.useEffect(function () {
        if (!userInfo) {
            getUserDetails('profile');
        }
        else {
            setFirstName(userInfo.firstName);
            setLastName(userInfo.lastName);
            setEmail(userInfo.email);
            setUsername(userInfo.username);
            setIsAdministrator(userInfo.isAdministrator);
        }
    }, [confirmPassword, getUserDetails, password, userInfo]);
    var submitHandler = function (e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        }
        else if (userInfo) {
            setMessage(null);
            updateUser({
                id: userInfo.id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                username: username,
                password: password,
                isAdministrator: isAdministrator,
            });
        }
    };
    return (<FormContainer_1.default>
      <h2 className='mb-4'>Your Profile</h2>
      {message && <Message_1.default variant='danger'>{message}</Message_1.default>}
      {error && <Message_1.default variant='danger'>{error}</Message_1.default>}
      {errorUpdate && <Message_1.default variant='danger'>{errorUpdate}</Message_1.default>}
      {userInfoUpdate && !message && (<Message_1.default variant='success'>Your profile is updated!</Message_1.default>)}
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
          <Form_1.default.Control autoComplete='true' type='password' placeholder='Password...' value={password} onChange={function (e) { return setPassword(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        <Form_1.default.Group controlId='confirmpassword'>
          <Form_1.default.Label>Confirm Password</Form_1.default.Label>
          <Form_1.default.Control autoComplete='true' type='password' placeholder='Password...' value={confirmPassword} onChange={function (e) { return setConfirmPassword(e.target.value); }}></Form_1.default.Control>
        </Form_1.default.Group>
        <br />
        {/* <Form.Group controlId='administrator'>
          <Form.Check
            checked={isAdministrator}
            disabled={!userInfo?.isAdministrator ?? true}
            type='checkbox'
            label='Administrator?'
            onChange={() => setIsAdministrator((prev) => !prev)}
          />
        </Form.Group>
        <br /> */}

        <Button_1.default type='submit' variant='primary'>
          Update
        </Button_1.default>
      </Form_1.default>
    </FormContainer_1.default>);
};
exports.default = ProfileScreen;
//# sourceMappingURL=ProfileScreen.js.map