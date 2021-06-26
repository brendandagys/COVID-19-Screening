"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var LoginScreen_1 = __importDefault(require("../screens/LoginScreen"));
var RegisterScreen_1 = __importDefault(require("../screens/RegisterScreen"));
var FormScreen_1 = __importDefault(require("../screens/FormScreen"));
var ProfileScreen_1 = __importDefault(require("../screens/ProfileScreen"));
var NavBar_1 = __importDefault(require("./NavBar"));
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var CompletedScreen_1 = __importDefault(require("../screens/CompletedScreen"));
var App = function () {
    var userInfo = useTypedSelector_1.useTypedSelector(function (state) { return state.authenticate; }).userInfo;
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.submissionFetch; }), submission = _a.submission, userResetFlag = _a.userResetFlag;
    var history = react_router_dom_1.useHistory();
    react_1.useEffect(function () {
        if (!userInfo) {
            history.push('/login');
        }
        // if (submission) {
        //   history.push('/completed')
        // }
    }, [history, userInfo]);
    return (<main className='py-3'>
      <Container_1.default>
        <NavBar_1.default />
        <react_router_dom_1.Route path='/login' component={LoginScreen_1.default}/>
        <react_router_dom_1.Route path='/register' component={RegisterScreen_1.default}/>
        <react_router_dom_1.Route path='/profile'>
          {!userInfo ? (<react_router_dom_1.Redirect to='/login?redirect=/profile'/>) : (<ProfileScreen_1.default />)}
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/completed'>
          {!userInfo ? (<react_router_dom_1.Redirect to='/login?redirect=/completed'/>) : !submission || userResetFlag ? (<react_router_dom_1.Redirect to='/'/>) : (<CompletedScreen_1.default />)}
        </react_router_dom_1.Route>
        <react_router_dom_1.Route exact path='/'>
          {!userInfo ? (<react_router_dom_1.Redirect to='/login'/>) : submission ? (<react_router_dom_1.Redirect to='/completed'/>) : (<FormScreen_1.default />)}
        </react_router_dom_1.Route>
      </Container_1.default>
    </main>);
};
exports.default = App;
//# sourceMappingURL=App.js.map