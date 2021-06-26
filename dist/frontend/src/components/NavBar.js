"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var useActions_1 = require("../hooks/useActions");
var react_router_bootstrap_1 = require("react-router-bootstrap");
var Navbar_1 = __importDefault(require("react-bootstrap/Navbar"));
var Nav_1 = __importDefault(require("react-bootstrap/Nav"));
var NavDropdown_1 = __importDefault(require("react-bootstrap/NavDropdown"));
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var NavBar = function () {
    var userInfo = useTypedSelector_1.useTypedSelector(function (state) { return state.authenticate; }).userInfo;
    var logout = useActions_1.useActions().logout;
    var signoutHandler = function () {
        logout();
    };
    return (<header className='mb-3'>
      <Navbar_1.default bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container_1.default>
          <react_router_bootstrap_1.LinkContainer to='/'>
            <Navbar_1.default.Brand>Screener</Navbar_1.default.Brand>
          </react_router_bootstrap_1.LinkContainer>
          <Navbar_1.default.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar_1.default.Collapse id='basic-navbar-nav'>
            <Nav_1.default className='ml-auto'>
              <react_router_bootstrap_1.LinkContainer to='/'>
                <Nav_1.default.Link>Questions</Nav_1.default.Link>
              </react_router_bootstrap_1.LinkContainer>

              {userInfo ? (<NavDropdown_1.default title={userInfo.firstName} id='firstname'>
                  <react_router_bootstrap_1.LinkContainer to='/profile'>
                    <NavDropdown_1.default.Item>Profile</NavDropdown_1.default.Item>
                  </react_router_bootstrap_1.LinkContainer>
                  <NavDropdown_1.default.Item onClick={signoutHandler}>
                    Sign Out
                  </NavDropdown_1.default.Item>
                </NavDropdown_1.default>) : (<react_router_bootstrap_1.LinkContainer to='/login'>
                  <Nav_1.default.Link>Sign In</Nav_1.default.Link>
                </react_router_bootstrap_1.LinkContainer>)}
            </Nav_1.default>
          </Navbar_1.default.Collapse>
        </Container_1.default>
      </Navbar_1.default>
    </header>);
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.js.map