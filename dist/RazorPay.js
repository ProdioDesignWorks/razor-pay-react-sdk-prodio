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
          name = payload.name;

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
      } else {
        options = {
          key: keyId,
          amount: payment_amount,
          subscription_id: subscription_id,
          name: name,
          description: description,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SYXpvclBheS5qc3giXSwibmFtZXMiOlsiUmF6b3JQYXkiLCJwcm9wcyIsInBheWxvYWQiLCJwYXltZW50X2Ftb3VudCIsIm9yZGVyX2lkIiwic3Vic2NyaXB0aW9uX2lkIiwiZGVzY3JpcHRpb24iLCJrZXlJZCIsIm5hbWUiLCJtZSIsIm9wdGlvbnMiLCJrZXkiLCJhbW91bnQiLCJwcmVmaWxsIiwicGF5ZXJOYW1lIiwiZW1haWwiLCJoYW5kbGVyIiwicmVzcG9uc2UiLCJvblBheW1lbnRSZXNwb25zZSIsIm1vZGFsIiwib25kaXNtaXNzIiwib25DbG9zZSIsIm5vdGVzIiwiYWRkcmVzcyIsInRoZW1lIiwiY29sb3IiLCJyenAxIiwid2luZG93IiwiUmF6b3JwYXkiLCJvcGVuIiwiZW1iZWRTY3JpcHQiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwiYm9keSIsImFwcGVuZENoaWxkIiwibmV3UHJvcHMiLCJvcGVuQ2hlY2tvdXRGb3JtIiwiY2hlY2tPdXRSYXpvclBheSIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDTUEsUTs7Ozs7QUFNRixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLGtGQUFNQSxLQUFOOztBQURlLHVFQWVBLFVBQUNDLE9BQUQsRUFBYTtBQUFBLFVBRXhCQyxjQUZ3QixHQVN4QkQsT0FUd0IsQ0FFeEJDLGNBRndCO0FBQUEsVUFHeEJDLFFBSHdCLEdBU3hCRixPQVR3QixDQUd4QkUsUUFId0I7QUFBQSxVQUl4QkMsZUFKd0IsR0FTeEJILE9BVHdCLENBSXhCRyxlQUp3QjtBQUFBLFVBS3hCQyxXQUx3QixHQVN4QkosT0FUd0IsQ0FLeEJJLFdBTHdCO0FBQUEsVUFNeEJDLEtBTndCLEdBU3hCTCxPQVR3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QUNpQkosUSxFQUFTO0FBQ3ZCLFdBQUtoQixLQUFMLENBQVdpQixpQkFBWCxDQUE2QkQsUUFBN0I7QUFDSDs7O2tDQTJFYTtBQUNWLFVBQU1pQixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csR0FBUCxHQUFhLDhDQUFiO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7QUFDQUgsTUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJOLE1BQTFCO0FBQ0g7Ozt3Q0FFbUI7QUFDaEIsV0FBS0osV0FBTDtBQUNIOzs7OENBRXlCVyxRLEVBQVM7QUFDL0IsVUFBR0EsUUFBUSxDQUFDQyxnQkFBWixFQUE2QjtBQUN6QixhQUFLQyxnQkFBTCxDQUFzQkYsUUFBUSxDQUFDdkMsT0FBL0I7QUFDSDtBQUNKOzs7NkJBQ1E7QUFDTCxhQUNJLDRDQURKO0FBR0g7Ozs7RUFsSGtCMEMsZ0I7O2dCQUFqQjVDLFEsZUFDaUI7QUFDZnFCLEVBQUFBLE9BQU8sRUFBRXdCLHNCQUFVQyxJQURKO0FBRWY1QixFQUFBQSxpQkFBaUIsRUFBRTJCLHNCQUFVQztBQUZkLEM7O0FBa0h0QjtlQUVjOUMsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5jbGFzcyBSYXpvclBheSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIG9uUGF5bWVudFJlc3BvbnNlOiBQcm9wVHlwZXMuZnVuY1xuICAgICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5lbWJlZFNjcmlwdCA9IHRoaXMuZW1iZWRTY3JpcHQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsb3NlID0gdGhpcy5vbkNsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25QYXltZW50UmVzcG9uc2UgPSB0aGlzLm9uUGF5bWVudFJlc3BvbnNlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgb25DbG9zZSgpe1xuICAgICAgICBjb25zb2xlLmxvZygnY2xvc2VkJyk7XG4gICAgICAgIHRoaXMucHJvcHMub25DbG9zZSgpO1xuICAgIH1cbiAgICBvblBheW1lbnRSZXNwb25zZShyZXNwb25zZSl7XG4gICAgICAgIHRoaXMucHJvcHMub25QYXltZW50UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGNoZWNrT3V0UmF6b3JQYXkgPSAocGF5bG9hZCkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwYXltZW50X2Ftb3VudCxcbiAgICAgICAgICAgIG9yZGVyX2lkLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uX2lkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBrZXlJZCxcbiAgICAgICAgICAgIG5hbWVcblxuICAgICAgICB9ID0gcGF5bG9hZDtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG4gICAgICAgIGxldCBvcHRpb25zID17fTtcbiAgICAgICAgaWYob3JkZXJfaWQpe1xuICAgICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBrZXk6IGtleUlkLFxuICAgICAgICAgICAgICAgIG9yZGVyX2lkLFxuICAgICAgICAgICAgICAgIGFtb3VudDogcGF5bWVudF9hbW91bnQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgcHJlZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwYXlsb2FkLnBheWVyTmFtZSA/IHBheWxvYWQucGF5ZXJOYW1lIDogJ2pvbmF0aGFuJyxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6cGF5bG9hZC5lbWFpbCA/IHBheWxvYWQuZW1haWwgOiAnam9oYW5hdGhvbkRvZUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKHJlc3BvbnNlKXtcbiAgICAgICAgICAgICAgICAgICAgbWUub25QYXltZW50UmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICAgICAgICBvbmRpc21pc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5vdGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6ICdHb2EsSW5kaWEnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjOUQ1MEJCJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAga2V5OiBrZXlJZCxcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHBheW1lbnRfYW1vdW50LFxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbl9pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBwcmVmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHBheWxvYWQucGF5ZXJOYW1lID8gcGF5bG9hZC5wYXllck5hbWUgOiAnam9uYXRoYW4nLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDpwYXlsb2FkLmVtYWlsID8gcGF5bG9hZC5lbWFpbCA6ICdqb2hhbmF0aG9uRG9lQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAocmVzcG9uc2Upe1xuICAgICAgICAgICAgICAgICAgICBtZS5vblBheW1lbnRSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGFsOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uZGlzbWlzczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uQ2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbm90ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczogJ0dvYSxJbmRpYScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM5RDUwQkInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcnpwMSA9IG5ldyB3aW5kb3cuUmF6b3JwYXkob3B0aW9ucyk7XG5cbiAgICAgICAgcnpwMS5vcGVuKCk7XG4gICAgfSAgIFxuXG4gICAgZW1iZWRTY3JpcHQoKSB7XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBcImh0dHBzOi8vY2hlY2tvdXQucmF6b3JwYXkuY29tL3YxL2NoZWNrb3V0LmpzXCI7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5lbWJlZFNjcmlwdCgpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpe1xuICAgICAgICBpZihuZXdQcm9wcy5vcGVuQ2hlY2tvdXRGb3JtKXtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tPdXRSYXpvclBheShuZXdQcm9wcy5wYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhem9yUGF5O1xuIl19