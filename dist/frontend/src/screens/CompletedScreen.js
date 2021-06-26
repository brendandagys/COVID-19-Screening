"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var useTypedSelector_1 = require("../hooks/useTypedSelector");
var Button_1 = __importDefault(require("react-bootstrap/Button"));
var useActions_1 = require("../hooks/useActions");
var CompletedScreen = function () {
    var _a = useTypedSelector_1.useTypedSelector(function (state) { return state.authenticate; }), loading = _a.loading, error = _a.error, userInfo = _a.userInfo;
    var _b = useTypedSelector_1.useTypedSelector(function (state) { return state.emailFetch; }), loadingEmailFetch = _b.loading, errorEmailFetch = _b.error;
    var _c = useTypedSelector_1.useTypedSelector(function (state) { return state.emailCreate; }), loadingEmailCreate = _c.loading, errorEmailCreate = _c.error;
    var _d = useActions_1.useActions(), clearSubmission = _d.clearSubmission, createEmail = _d.createEmail, fetchEmail = _d.fetchEmail;
    react_1.useEffect(function () {
        fetchEmail();
    }, [fetchEmail]);
    var color = '#2E5090';
    var fontColor = 'black';
    switch (new Date().getDay()) {
        case 0:
            color = '#2E5090';
            fontColor = 'white';
            break;
        case 1:
            color = '#41924B';
            break;
        case 2:
            color = '#FEF250';
            break;
        case 3:
            color = '#FFD1DC';
            break;
        case 4:
            color = '#2E5090';
            fontColor = 'white';
            break;
        case 5:
            color = '#FFB347';
            break;
        case 6:
            color = '#CDB7F6';
    }
    return (<Container_1.default fluid className='text-center' style={{ backgroundColor: color, height: '87vh' }}>
      <Row_1.default className='my-3 py-5'>
        <Col_1.default xs={12}>
          <Button_1.default disabled={loadingEmailFetch === false || loadingEmailCreate === false
            ? true
            : false} variant='secondary' onClick={function () {
            if (userInfo)
                createEmail(userInfo.email, color, fontColor);
        }}>
            Send Results By Email
          </Button_1.default>
        </Col_1.default>
        <Col_1.default xs={12} className='mt-1'>
          <small style={{ color: fontColor }}>{userInfo === null || userInfo === void 0 ? void 0 : userInfo.email}</small>
        </Col_1.default>
      </Row_1.default>
      <Row_1.default>
        <Col_1.default>
          <p style={{ fontWeight: 'bold', color: fontColor }}>{"Completed by " + (userInfo === null || userInfo === void 0 ? void 0 : userInfo.firstName) + " " + (userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastName) + " on " + new Date().toLocaleDateString() + ", " + new Date().toLocaleTimeString()}</p>
          <br />
          <p style={{ color: fontColor }}>
            You are cleared to work. Please be prepared to show this
            confirmation at staff entrance point when reporting for your shift.
          </p>
        </Col_1.default>
        <Col_1.default xs={12} className='mt-5'>
          <Button_1.default onClick={clearSubmission} variant='secondary'>
            Start Over
          </Button_1.default>
        </Col_1.default>
      </Row_1.default>
    </Container_1.default>);
};
exports.default = CompletedScreen;
//# sourceMappingURL=CompletedScreen.js.map