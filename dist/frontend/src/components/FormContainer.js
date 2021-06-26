"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __importDefault(require("react-bootstrap/Container"));
var Row_1 = __importDefault(require("react-bootstrap/Row"));
var Col_1 = __importDefault(require("react-bootstrap/Col"));
var FormContainer = function (_a) {
    var children = _a.children;
    return (<Container_1.default>
      <Row_1.default className='justify-content-md-center'>
        <Col_1.default xs={12} md={6}>
          {children}
        </Col_1.default>
      </Row_1.default>
    </Container_1.default>);
};
exports.default = FormContainer;
//# sourceMappingURL=FormContainer.js.map