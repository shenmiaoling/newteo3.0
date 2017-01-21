webpackJsonp([4],{

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(298);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(474);

	__webpack_require__(588);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Topbar = function (_Component) {
	  _inherits(Topbar, _Component);

	  function Topbar() {
	    _classCallCheck(this, Topbar);

	    return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).apply(this, arguments));
	  }

	  _createClass(Topbar, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          text = _props.text,
	          actions = _props.actions;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'home' },
	          _react2.default.createElement(
	            'div',
	            { className: 'home-title' },
	            _react2.default.createElement(
	              'h2',
	              null,
	              '\u65E0\u9700\u82B1\u8D39100\u4E07\u7684\u8D44\u91D1'
	            ),
	            _react2.default.createElement(
	              'h2',
	              null,
	              '\u5C31\u80FD\u62E5\u6709100\u4E07\u7684\u5F00\u53D1\u529B\u91CF'
	            ),
	            _react2.default.createElement(
	              'div',
	              { id: 'typefield' },
	              '\u2014 \u52A9\u529B\u4F20\u7EDF\u884C\u4E1A\u5B9E\u73B0\u4E92\u8054\u7F51+ '
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'two-btn' },
	            _react2.default.createElement(
	              'button',
	              { className: 'contact-btn' },
	              '\u8054\u7CFB\u6211\u4EEC'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'team-btn' },
	              '\u65B0\u6F6E\u56E2\u961F'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'server-page' },
	          _react2.default.createElement(
	            'div',
	            { className: 'server-title' },
	            '\u670D\u52A1\u8FD1\u5728\u54AB\u5C3A'
	          ),
	          _react2.default.createElement(
	            'p',
	            { className: 'server-subtitle' },
	            '\u63D0\u4F9B\u73B0\u6709\u7684\u3001\u672A\u6765\u7684\u3001\u5C5E\u4E8E\u4F60\u7684\u56E2\u961F\u3002'
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'server-context' },
	            '\u4EE5\u5F80\u6709\u516C\u53F8\u60F3\u505A\u4EA7\u54C1\u65F6\uFF0C\u53EF\u80FD\u9700\u8981\u82B1\u8D39\u5927\u91CF\u7684\u7CBE\u529B\u548C\u8D44\u91D1\u53BB\u57F9\u517B\u4E00\u652F\u5F00\u53D1\u56E2\u961F\uFF0C\u73B0\u5728\u4E0D\u7528\u4E86\uFF0C\u5408\u4F5C\u4F19\u4F34\u53EF\u4EE5\u8D2D\u4E70\u6211\u4EEC\u7684\u670D\u52A1\u4E3A\u4EA7\u54C1\u63D0\u4F9B\u6280\u672F\u652F\u6301\uFF0C\u5BF9\u4EA7\u54C1\u8FDB\u884C\u6709\u6548\u5F00\u53D1\u3001\u5347\u7EA7\u53CA\u7EF4\u62A4\u3002\u6211\u4EEC\u751A\u81F3\u53EF\u4EE5\u57F9\u517B\u4E00\u652F\u4E13\u5C5E\u56E2\u961F\u4E3A\u8FD9\u4E2A\u4EA7\u54C1\u505A\u957F\u671F\u7684\u7EF4\u62A4\u3002'
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'know-more' },
	            '\u4E86\u89E3\u66F4\u591A'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'server-intro' },
	          _react2.default.createElement('img', { src: '/images/tool.png', className: 'tool-img' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'intro' },
	            _react2.default.createElement(
	              'div',
	              { className: 'intro-title' },
	              '\u670D\u52A1\u89E6\u624B\u53EF\u53CA'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'intro-subtitle' },
	              '\u4E3A\u4E86\u4F7F\u670D\u52A1\u8FBE\u5230\u6781\u81F4\uFF0C'
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'intro-subtitle' },
	              '\u6211\u4EEC\u7814\u53D1\u4E86\u201C\u5C0F\u6865\u6881\u201D\u3002'
	            ),
	            _react2.default.createElement(
	              'div',
	              { style: { textAlign: "right" } },
	              _react2.default.createElement(
	                'button',
	                { id: 'know-more', className: 'know-more' },
	                '\u4E86\u89E3\u66F4\u591A'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Topbar;
	}(_react.Component);

	exports.default = Topbar;

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(589);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(584)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./style.styl", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/stylus-loader/index.js!./style.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(583)();
	// imports


	// module
	exports.push([module.id, ".home {\n  margin: 0 auto;\n  width: 100%;\n  height: 434px;\n  background-image: url(\"/images/intro-bg.jpg\");\n  background-repeat: no-repeat;\n  background-size: 100%;\n}\n.home-title {\n  color: #fff;\n  padding-top: 130px;\n  margin-left: 37px;\n}\n#typefield {\n  margin-left: 75px;\n}\n.two-btn {\n  margin-top: 67px;\n}\n.contact-btn {\n  font-size: 16px;\n  padding: 12px 88px;\n  color: #fff;\n  background-image: linear-gradient(to right, #db5434, #ffb300);\n  border: none;\n  display: block;\n  margin: 0 auto;\n}\n.team-btn {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  margin-top: 16px;\n  color: #fff;\n}\n.server-page {\n  padding: 45px 30px 50px 30px;\n}\n.server-title {\n  font-size: 20px;\n  color: rgba(0,0,0,0.87);\n}\n.server-subtitle {\n  color: rgba(0,0,0,0.54);\n}\n.server-context {\n  color: rgba(0,0,0,0.87);\n  font-size: 14px;\n  line-height: 22px;\n}\n.know-more {\n  color: #ff6f00;\n  font-size: 14px;\n  border: 1px solid #ff6f00;\n  background-color: #fff;\n  padding: 6px 11px 5px 7px;\n  margin-top: 40px;\n}\n.server-intro {\n  padding-top: 45px;\n  padding-bottom: 45px;\n  margin-right: 15px;\n  margin-left: 15px;\n  border-top: 1px solid rgba(0,0,0,0.12);\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n  text-align: center;\n}\n.tool-img {\n  width: 79px;\n  height: 130px;\n  vertical-align: top;\n}\n.intro {\n  display: inline-block;\n  margin-left: 50px;\n}\n.intro-title {\n  font-size: 20px;\n  margin-bottom: 10px;\n}\n.intro-subtitle {\n  font-size: 14px;\n  line-height: 20px;\n  color: rgba(0,0,0,0.54);\n  text-align: left;\n}\n#know-more {\n  margin-top: 25px;\n  text-align: right;\n}\n", ""]);

	// exports


/***/ }

});