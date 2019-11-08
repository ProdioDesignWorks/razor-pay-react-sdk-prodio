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
          subscription_id = payload.subscription_id,
          description = payload.description,
          keyId = payload.keyId,
          name = payload.name,
          _payload$callback_url = payload.callback_url,
          callback_url = _payload$callback_url === void 0 ? '' : _payload$callback_url,
          _payload$theme_color = payload.theme_color,
          theme_color = _payload$theme_color === void 0 ? '#9D50BB' : _payload$theme_color,
          _payload$redirect = payload.redirect,
          redirect = _payload$redirect === void 0 ? false : _payload$redirect;

      var me = _assertThisInitialized(_this);

      var options = {};

      if (order_id) {
        options = {
          key: keyId,
          order_id: order_id,
          amount: payment_amount,
          name: name,
          description: description,
          prefill: {
            name: payload.payerName ? payload.payerName : '',
            email: payload.email ? payload.email : ''
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
            address: ''
          },
          theme: {
            color: theme_color
          },
          callback_url: callback_url,
          redirect: redirect
        };
      } else {
        options = {
          key: keyId,
          amount: payment_amount,
          subscription_id: subscription_id,
          name: name,
          description: description,
          prefill: {
            name: payload.payerName ? payload.payerName : '',
            email: payload.email ? payload.email : ''
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
            color: theme_color
          },
          callback_url: callback_url,
          redirect: redirect
        };
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SYXpvclBheS5qc3giXSwibmFtZXMiOlsiUmF6b3JQYXkiLCJwcm9wcyIsInBheWxvYWQiLCJwYXltZW50X2Ftb3VudCIsIm9yZGVyX2lkIiwic3Vic2NyaXB0aW9uX2lkIiwiZGVzY3JpcHRpb24iLCJrZXlJZCIsIm5hbWUiLCJjYWxsYmFja191cmwiLCJ0aGVtZV9jb2xvciIsInJlZGlyZWN0IiwibWUiLCJvcHRpb25zIiwia2V5IiwiYW1vdW50IiwicHJlZmlsbCIsInBheWVyTmFtZSIsImVtYWlsIiwiaGFuZGxlciIsInJlc3BvbnNlIiwib25QYXltZW50UmVzcG9uc2UiLCJtb2RhbCIsIm9uZGlzbWlzcyIsIm9uQ2xvc2UiLCJub3RlcyIsImFkZHJlc3MiLCJ0aGVtZSIsImNvbG9yIiwicnpwMSIsIndpbmRvdyIsIlJhem9ycGF5Iiwib3BlbiIsImVtYmVkU2NyaXB0IiwiYmluZCIsImNvbnNvbGUiLCJsb2ciLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm5ld1Byb3BzIiwib3BlbkNoZWNrb3V0Rm9ybSIsImNoZWNrT3V0UmF6b3JQYXkiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFE7Ozs7O0FBTUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZixrRkFBTUEsS0FBTjs7QUFEZSx1RUFlQSxVQUFDQyxPQUFELEVBQWE7QUFBQSxVQUV4QkMsY0FGd0IsR0FXeEJELE9BWHdCLENBRXhCQyxjQUZ3QjtBQUFBLFVBR3hCQyxRQUh3QixHQVd4QkYsT0FYd0IsQ0FHeEJFLFFBSHdCO0FBQUEsVUFJeEJDLGVBSndCLEdBV3hCSCxPQVh3QixDQUl4QkcsZUFKd0I7QUFBQSxVQUt4QkMsV0FMd0IsR0FXeEJKLE9BWHdCLENB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O2VBRWNqRCxRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgUmF6b3JQYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICAgICAgICBvblBheW1lbnRSZXNwb25zZTogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmVtYmVkU2NyaXB0ID0gdGhpcy5lbWJlZFNjcmlwdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblBheW1lbnRSZXNwb25zZSA9IHRoaXMub25QYXltZW50UmVzcG9uc2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkNsb3NlKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQnKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XG4gICAgfVxuICAgIG9uUGF5bWVudFJlc3BvbnNlKHJlc3BvbnNlKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vblBheW1lbnRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgfVxuXG4gICAgY2hlY2tPdXRSYXpvclBheSA9IChwYXlsb2FkKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHBheW1lbnRfYW1vdW50LFxuICAgICAgICAgICAgb3JkZXJfaWQsXG4gICAgICAgICAgICBzdWJzY3JpcHRpb25faWQsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGtleUlkLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrX3VybCA9ICcnLFxuICAgICAgICAgICAgdGhlbWVfY29sb3IgPSAnIzlENTBCQicsXG4gICAgICAgICAgICByZWRpcmVjdCA9IGZhbHNlXG4gICAgICAgIH0gPSBwYXlsb2FkO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcbiAgICAgICAgbGV0IG9wdGlvbnMgPXt9O1xuICAgICAgICBpZihvcmRlcl9pZCl7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGtleToga2V5SWQsXG4gICAgICAgICAgICAgICAgb3JkZXJfaWQsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBwYXltZW50X2Ftb3VudCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmVmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBheWxvYWQucGF5ZXJOYW1lID8gcGF5bG9hZC5wYXllck5hbWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6cGF5bG9hZC5lbWFpbCA/IHBheWxvYWQuZW1haWwgOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uUGF5bWVudFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgb25kaXNtaXNzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUub25DbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub3Rlczoge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZV9jb2xvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrX3VybCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlJZCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnRfYW1vdW50LFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbl9pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmVmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBheWxvYWQucGF5ZXJOYW1lID8gcGF5bG9hZC5wYXllck5hbWUgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6cGF5bG9hZC5lbWFpbCA/IHBheWxvYWQuZW1haWwgOiAnJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChyZXNwb25zZSl7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9uUGF5bWVudFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgb25kaXNtaXNzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUub25DbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBub3Rlczoge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiAnR29hLEluZGlhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0aGVtZV9jb2xvcixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrX3VybCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJ6cDEgPSBuZXcgd2luZG93LlJhem9ycGF5KG9wdGlvbnMpO1xuXG4gICAgICAgIHJ6cDEub3BlbigpO1xuICAgIH0gICBcblxuICAgIGVtYmVkU2NyaXB0KCkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQuc3JjID0gXCJodHRwczovL2NoZWNrb3V0LnJhem9ycGF5LmNvbS92MS9jaGVja291dC5qc1wiO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuZW1iZWRTY3JpcHQoKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKXtcbiAgICAgICAgaWYobmV3UHJvcHMub3BlbkNoZWNrb3V0Rm9ybSl7XG4gICAgICAgICAgICB0aGlzLmNoZWNrT3V0UmF6b3JQYXkobmV3UHJvcHMucGF5bG9hZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXpvclBheTtcbiJdfQ==