"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = __importDefault(require("react-dom"));
var react_redux_1 = require("react-redux");
var store_1 = __importDefault(require("./state/store"));
require("./bootstrap.min.css");
var App_1 = __importDefault(require("./components/App"));
var react_router_dom_1 = require("react-router-dom");
react_dom_1.default.render(<react_1.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_redux_1.Provider store={store_1.default}>
        <App_1.default />
      </react_redux_1.Provider>
    </react_router_dom_1.BrowserRouter>
  </react_1.StrictMode>, document.getElementById('root'));
//# sourceMappingURL=index.js.map