"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RazorPay =
/*#__PURE__*/
function (_Component) {
  _inherits(RazorPay, _Component);

  function RazorPay(props) {
    var _this;

    _classCallCheck(this, RazorPay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RazorPay).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "checkOutRazorPay", function (payload) {
      var payment_amount = payload.payment_amount,
          order_id = payload.order_id,
          description = payload.description,
          keyId = payload.keyId,
          name = payload.name;

      var me = _assertThisInitialized(_this);

      var options = {
        key: keyId,
        amount: payment_amount,
        name: name,
        description: description,
        order_id: order_id,
        prefill: {
          name: payload.payerName ? payload.payerName : 'jonathan',
          email: payload.email ? payload.email : 'johanathonDoe@gmail.com'
        },
        handler: function handler(response) {
          me.onPaymentResponse(response);
        },
        modal: {
          ondismiss: function ondismiss() {
            me.onClose();
          }
        },
        notes: {
          address: 'Goa,India'
        },
        theme: {
          color: '#9D50BB'
        }
      };
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    });

    _this.embedScript = _this.embedScript.bind(_assertThisInitialized(_this));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_this));
    _this.onPaymentResponse = _this.onPaymentResponse.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RazorPay, [{
    key: "onClose",
    value: function onClose() {
      console.log('closed');
      this.props.onClose();
    }
  }, {
    key: "onPaymentResponse",
    value: function onPaymentResponse(response) {
      this.props.onPaymentResponse(response);
    }
  }, {
    key: "embedScript",
    value: function embedScript() {
      var script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.embedScript();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      if (newProps.openCheckoutForm) {
        this.checkOutRazorPay(newProps.payload);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", null);
    }
  }]);

  return RazorPay;
}(_react.Component);

_defineProperty(RazorPay, "propTypes", {
  onClose: _propTypes["default"].func,
  onPaymentResponse: _propTypes["default"].func
});

;
var _default = RazorPay;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SYXpvclBheS5qc3giXSwibmFtZXMiOlsiUmF6b3JQYXkiLCJwcm9wcyIsInBheWxvYWQiLCJwYXltZW50X2Ftb3VudCIsIm9yZGVyX2lkIiwiZGVzY3JpcHRpb24iLCJrZXlJZCIsIm5hbWUiLCJtZSIsIm9wdGlvbnMiLCJrZXkiLCJhbW91bnQiLCJwcmVmaWxsIiwicGF5ZXJOYW1lIiwiZW1haWwiLCJoYW5kbGVyIiwicmVzcG9uc2UiLCJvblBheW1lbnRSZXNwb25zZSIsIm1vZGFsIiwib25kaXNtaXNzIiwib25DbG9zZSIsIm5vdGVzIiwiYWRkcmVzcyIsInRoZW1lIiwiY29sb3IiLCJyenAxIiwid2luZG93IiwiUmF6b3JwYXkiLCJvcGVuIiwiZW1iZWRTY3JpcHQiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwibmV3UHJvcHMiLCJvcGVuQ2hlY2tvdXRGb3JtIiwiY2hlY2tPdXRSYXpvclBheSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTUEsUTs7Ozs7QUFNRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGtGQUFNQSxLQUFOOztBQURlLHVFQWVBLFVBQUNDLE9BQUQsRUFBYTtBQUFBLFVBRXhCQyxjQUZ3QixHQVF4QkQsT0FSd0IsQ0FFeEJDLGNBRndCO0FBQUEsVUFHeEJDLFFBSHdCLEdBUXhCRixPQVJ3QixDQUd4QkUsUUFId0I7QUFBQSxVQUl4QkMsV0FKd0IsR0FReEJILE9BUndCLENBSXhCRyxXQUp3QjtBQUFBLFVBS3hCQyxLQUx3QixHQVF4QkosT0FSd0IsQ0FLeEJJLEtBTHdCO0FBQUEsVUFNeEJDLElBTndCLEdBUXhCTCxPQVJ3QixDQU14QkssSUFOd0I7O0FBVTVCLFVBQU1DLEVBQUUsZ0NBQVI7O0FBRUEsVUFBTUMsT0FBTyxHQUFHO0FBQ1pDLFFBQUFBLEdBQUcsRUFBRUosS0FETztBQUVaSyxRQUFBQSxNQUFNLEVBQUVSLGNBRkk7QUFHWkksUUFBQUEsSUFBSSxFQUFFQSxJQUhNO0FBSVpGLFFBQUFBLFdBQVcsRUFBRUEsV0FKRDtBQUtaRCxRQUFBQSxRQUFRLEVBQVJBLFFBTFk7QUFNWlEsUUFBQUEsT0FBTyxFQUFFO0FBQ0xMLFVBQUFBLElBQUksRUFBRUwsT0FBTyxDQUFDVyxTQUFSLEdBQW9CWCxPQUFPLENBQUNXLFNBQTVCLEdBQXdDLFVBRHpDO0FBRUxDLFVBQUFBLEtBQUssRUFBQ1osT0FBTyxDQUFDWSxLQUFSLEdBQWdCWixPQUFPLENBQUNZLEtBQXhCLEdBQWdDO0FBRmpDLFNBTkc7QUFVWkMsUUFBQUEsT0FBTyxFQUFFLGlCQUFVQyxRQUFWLEVBQW1CO0FBQ3hCUixVQUFBQSxFQUFFLENBQUNTLGlCQUFILENBQXFCRCxRQUFyQjtBQUNELFNBWlM7QUFhWkUsUUFBQUEsS0FBSyxFQUFFO0FBQ0hDLFVBQUFBLFNBQVMsRUFBRSxxQkFBVTtBQUNqQlgsWUFBQUEsRUFBRSxDQUFDWSxPQUFIO0FBQ0g7QUFIRSxTQWJLO0FBa0JaQyxRQUFBQSxLQUFLLEVBQUU7QUFDSEMsVUFBQUEsT0FBTyxFQUFFO0FBRE4sU0FsQks7QUFxQlpDLFFBQUFBLEtBQUssRUFBRTtBQUNIQyxVQUFBQSxLQUFLLEVBQUU7QUFESjtBQXJCSyxPQUFoQjtBQXlCQSxVQUFNQyxJQUFJLEdBQUcsSUFBSUMsTUFBTSxDQUFDQyxRQUFYLENBQW9CbEIsT0FBcEIsQ0FBYjtBQUVBZ0IsTUFBQUEsSUFBSSxDQUFDRyxJQUFMO0FBQ0gsS0F2RGtCOztBQUVmLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsK0JBQW5CO0FBQ0EsVUFBS1YsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYVUsSUFBYiwrQkFBZjtBQUNBLFVBQUtiLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCYSxJQUF2QiwrQkFBekI7QUFKZTtBQUtsQjs7Ozs4QkFFUTtBQUNMQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsV0FBSy9CLEtBQUwsQ0FBV21CLE9BQVg7QUFDSDs7O3NDQUNpQkosUSxFQUFTO0FBQ3ZCLFdBQUtmLEtBQUwsQ0FBV2dCLGlCQUFYLENBQTZCRCxRQUE3QjtBQUNIOzs7a0NBNENhO0FBQ1YsVUFBTWlCLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxHQUFQLEdBQWEsOENBQWI7QUFDQUgsTUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdBQWUsSUFBZjtBQUNBSCxNQUFBQSxRQUFRLENBQUNJLElBQVQsQ0FBY0MsV0FBZCxDQUEwQk4sTUFBMUI7QUFDSDs7O3dDQUVtQjtBQUNoQixXQUFLSixXQUFMO0FBQ0g7Ozs4Q0FFeUJXLFEsRUFBUztBQUMvQixVQUFHQSxRQUFRLENBQUNDLGdCQUFaLEVBQTZCO0FBQ3pCLGFBQUtDLGdCQUFMLENBQXNCRixRQUFRLENBQUN0QyxPQUEvQjtBQUNIO0FBQ0o7Ozs2QkFDUTtBQUNMLGFBQ0ksNENBREo7QUFHSDs7OztFQW5Ga0J5QyxnQjs7Z0JBQWpCM0MsUSxlQUNpQjtBQUNmb0IsRUFBQUEsT0FBTyxFQUFFd0Isc0JBQVVDLElBREo7QUFFZjVCLEVBQUFBLGlCQUFpQixFQUFFMkIsc0JBQVVDO0FBRmQsQzs7QUFtRnRCO2VBRWM3QyxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmNsYXNzIFJhem9yUGF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgb25QYXltZW50UmVzcG9uc2U6IFByb3BUeXBlcy5mdW5jXG4gICAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmVtYmVkU2NyaXB0ID0gdGhpcy5lbWJlZFNjcmlwdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBheW1lbnRSZXNwb25zZSA9IHRoaXMub25QYXltZW50UmVzcG9uc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICAgIG9uUGF5bWVudFJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgY2hlY2tPdXRSYXpvclBheSA9IChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBheW1lbnRfYW1vdW50LFxuICAgICAgICAgICAgb3JkZXJfaWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGtleUlkLFxuICAgICAgICAgICAgbmFtZVxuXG4gICAgICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAga2V5OiBrZXlJZCxcbiAgICAgICAgICAgIGFtb3VudDogcGF5bWVudF9hbW91bnQsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgb3JkZXJfaWQsXG4gICAgICAgICAgICBwcmVmaWxsOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogcGF5bG9hZC5wYXllck5hbWUgPyBwYXlsb2FkLnBheWVyTmFtZSA6ICdqb25hdGhhbicsXG4gICAgICAgICAgICAgICAgZW1haWw6cGF5bG9hZC5lbWFpbCA/IHBheWxvYWQuZW1haWwgOiAnam9oYW5hdGhvbkRvZUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgbWUub25QYXltZW50UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICBvbmRpc21pc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm90ZXM6IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiAnR29hLEluZGlhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAnIzlENTBCQicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByenAxID0gbmV3IHdpbmRvdy5SYXpvcnBheShvcHRpb25zKTtcblxuICAgICAgICByenAxLm9wZW4oKTtcbiAgICB9ICAgXG5cbiAgICBlbWJlZFNjcmlwdCgpIHtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanNcIjtcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmVtYmVkU2NyaXB0KCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcyl7XG4gICAgICAgIGlmKG5ld1Byb3BzLm9wZW5DaGVja291dEZvcm0pe1xuICAgICAgICAgICAgdGhpcy5jaGVja091dFJhem9yUGF5KG5ld1Byb3BzLnBheWxvYWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmF6b3JQYXk7XG4iXX0=