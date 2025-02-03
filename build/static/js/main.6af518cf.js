/*! For license information please see main.6af518cf.js.LICENSE.txt */
(() => {
	"use strict";
	var e = {
			730: (e, t, n) => {
				var r = n(43),
					i = n(853);
				function o(e) {
					for (
						var t =
								"https://reactjs.org/docs/error-decoder.html?invariant=" + e,
							n = 1;
						n < arguments.length;
						n++
					)
						t += "&args[]=" + encodeURIComponent(arguments[n]);
					return (
						"Minified React error #" +
						e +
						"; visit " +
						t +
						" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
					);
				}
				var a = new Set(),
					s = {};
				function l(e, t) {
					u(e, t), u(e + "Capture", t);
				}
				function u(e, t) {
					for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
				}
				var c = !(
						"undefined" === typeof window ||
						"undefined" === typeof window.document ||
						"undefined" === typeof window.document.createElement
					),
					d = Object.prototype.hasOwnProperty,
					f =
						/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					h = {},
					p = {};
				function m(e, t, n, r, i, o, a) {
					(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
						(this.attributeName = r),
						(this.attributeNamespace = i),
						(this.mustUseProperty = n),
						(this.propertyName = e),
						(this.type = t),
						(this.sanitizeURL = o),
						(this.removeEmptyString = a);
				}
				var g = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
					.split(" ")
					.forEach(function (e) {
						g[e] = new m(e, 0, !1, e, null, !1, !1);
					}),
					[
						["acceptCharset", "accept-charset"],
						["className", "class"],
						["htmlFor", "for"],
						["httpEquiv", "http-equiv"],
					].forEach(function (e) {
						var t = e[0];
						g[t] = new m(t, 1, !1, e[1], null, !1, !1);
					}),
					["contentEditable", "draggable", "spellCheck", "value"].forEach(
						function (e) {
							g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
						}
					),
					[
						"autoReverse",
						"externalResourcesRequired",
						"focusable",
						"preserveAlpha",
					].forEach(function (e) {
						g[e] = new m(e, 2, !1, e, null, !1, !1);
					}),
					"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
						.split(" ")
						.forEach(function (e) {
							g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
						}),
					["checked", "multiple", "muted", "selected"].forEach(function (e) {
						g[e] = new m(e, 3, !0, e, null, !1, !1);
					}),
					["capture", "download"].forEach(function (e) {
						g[e] = new m(e, 4, !1, e, null, !1, !1);
					}),
					["cols", "rows", "size", "span"].forEach(function (e) {
						g[e] = new m(e, 6, !1, e, null, !1, !1);
					}),
					["rowSpan", "start"].forEach(function (e) {
						g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
					});
				var v = /[\-:]([a-z])/g;
				function y(e) {
					return e[1].toUpperCase();
				}
				function b(e, t, n, r) {
					var i = g.hasOwnProperty(t) ? g[t] : null;
					(null !== i
						? 0 !== i.type
						: r ||
						  !(2 < t.length) ||
						  ("o" !== t[0] && "O" !== t[0]) ||
						  ("n" !== t[1] && "N" !== t[1])) &&
						((function (e, t, n, r) {
							if (
								null === t ||
								"undefined" === typeof t ||
								(function (e, t, n, r) {
									if (null !== n && 0 === n.type) return !1;
									switch (typeof t) {
										case "function":
										case "symbol":
											return !0;
										case "boolean":
											return (
												!r &&
												(null !== n
													? !n.acceptsBooleans
													: "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
													  "aria-" !== e)
											);
										default:
											return !1;
									}
								})(e, t, n, r)
							)
								return !0;
							if (r) return !1;
							if (null !== n)
								switch (n.type) {
									case 3:
										return !t;
									case 4:
										return !1 === t;
									case 5:
										return isNaN(t);
									case 6:
										return isNaN(t) || 1 > t;
								}
							return !1;
						})(t, n, i, r) && (n = null),
						r || null === i
							? (function (e) {
									return (
										!!d.call(p, e) ||
										(!d.call(h, e) &&
											(f.test(e) ? (p[e] = !0) : ((h[e] = !0), !1)))
									);
							  })(t) &&
							  (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
							: i.mustUseProperty
							? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
							: ((t = i.attributeName),
							  (r = i.attributeNamespace),
							  null === n
									? e.removeAttribute(t)
									: ((n =
											3 === (i = i.type) || (4 === i && !0 === n)
												? ""
												: "" + n),
									  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
					.split(" ")
					.forEach(function (e) {
						var t = e.replace(v, y);
						g[t] = new m(t, 1, !1, e, null, !1, !1);
					}),
					"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
						.split(" ")
						.forEach(function (e) {
							var t = e.replace(v, y);
							g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
						}),
					["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
						var t = e.replace(v, y);
						g[t] = new m(
							t,
							1,
							!1,
							e,
							"http://www.w3.org/XML/1998/namespace",
							!1,
							!1
						);
					}),
					["tabIndex", "crossOrigin"].forEach(function (e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
					}),
					(g.xlinkHref = new m(
						"xlinkHref",
						1,
						!1,
						"xlink:href",
						"http://www.w3.org/1999/xlink",
						!0,
						!1
					)),
					["src", "href", "action", "formAction"].forEach(function (e) {
						g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
					});
				var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					x = Symbol.for("react.element"),
					S = Symbol.for("react.portal"),
					k = Symbol.for("react.fragment"),
					E = Symbol.for("react.strict_mode"),
					P = Symbol.for("react.profiler"),
					C = Symbol.for("react.provider"),
					T = Symbol.for("react.context"),
					F = Symbol.for("react.forward_ref"),
					_ = Symbol.for("react.suspense"),
					A = Symbol.for("react.suspense_list"),
					R = Symbol.for("react.memo"),
					j = Symbol.for("react.lazy");
				Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
				var D = Symbol.for("react.offscreen");
				Symbol.for("react.legacy_hidden"),
					Symbol.for("react.cache"),
					Symbol.for("react.tracing_marker");
				var L = Symbol.iterator;
				function O(e) {
					return null === e || "object" !== typeof e
						? null
						: "function" === typeof (e = (L && e[L]) || e["@@iterator"])
						? e
						: null;
				}
				var M,
					N = Object.assign;
				function V(e) {
					if (void 0 === M)
						try {
							throw Error();
						} catch (n) {
							var t = n.stack.trim().match(/\n( *(at )?)/);
							M = (t && t[1]) || "";
						}
					return "\n" + M + e;
				}
				var z = !1;
				function B(e, t) {
					if (!e || z) return "";
					z = !0;
					var n = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (
								((t = function () {
									throw Error();
								}),
								Object.defineProperty(t.prototype, "props", {
									set: function () {
										throw Error();
									},
								}),
								"object" === typeof Reflect && Reflect.construct)
							) {
								try {
									Reflect.construct(t, []);
								} catch (u) {
									var r = u;
								}
								Reflect.construct(e, [], t);
							} else {
								try {
									t.call();
								} catch (u) {
									r = u;
								}
								e.call(t.prototype);
							}
						else {
							try {
								throw Error();
							} catch (u) {
								r = u;
							}
							e();
						}
					} catch (u) {
						if (u && r && "string" === typeof u.stack) {
							for (
								var i = u.stack.split("\n"),
									o = r.stack.split("\n"),
									a = i.length - 1,
									s = o.length - 1;
								1 <= a && 0 <= s && i[a] !== o[s];

							)
								s--;
							for (; 1 <= a && 0 <= s; a--, s--)
								if (i[a] !== o[s]) {
									if (1 !== a || 1 !== s)
										do {
											if ((a--, 0 > --s || i[a] !== o[s])) {
												var l = "\n" + i[a].replace(" at new ", " at ");
												return (
													e.displayName &&
														l.includes("<anonymous>") &&
														(l = l.replace("<anonymous>", e.displayName)),
													l
												);
											}
										} while (1 <= a && 0 <= s);
									break;
								}
						}
					} finally {
						(z = !1), (Error.prepareStackTrace = n);
					}
					return (e = e ? e.displayName || e.name : "") ? V(e) : "";
				}
				function U(e) {
					switch (e.tag) {
						case 5:
							return V(e.type);
						case 16:
							return V("Lazy");
						case 13:
							return V("Suspense");
						case 19:
							return V("SuspenseList");
						case 0:
						case 2:
						case 15:
							return (e = B(e.type, !1));
						case 11:
							return (e = B(e.type.render, !1));
						case 1:
							return (e = B(e.type, !0));
						default:
							return "";
					}
				}
				function I(e) {
					if (null == e) return null;
					if ("function" === typeof e) return e.displayName || e.name || null;
					if ("string" === typeof e) return e;
					switch (e) {
						case k:
							return "Fragment";
						case S:
							return "Portal";
						case P:
							return "Profiler";
						case E:
							return "StrictMode";
						case _:
							return "Suspense";
						case A:
							return "SuspenseList";
					}
					if ("object" === typeof e)
						switch (e.$$typeof) {
							case T:
								return (e.displayName || "Context") + ".Consumer";
							case C:
								return (e._context.displayName || "Context") + ".Provider";
							case F:
								var t = e.render;
								return (
									(e = e.displayName) ||
										(e =
											"" !== (e = t.displayName || t.name || "")
												? "ForwardRef(" + e + ")"
												: "ForwardRef"),
									e
								);
							case R:
								return null !== (t = e.displayName || null)
									? t
									: I(e.type) || "Memo";
							case j:
								(t = e._payload), (e = e._init);
								try {
									return I(e(t));
								} catch (n) {}
						}
					return null;
				}
				function W(e) {
					var t = e.type;
					switch (e.tag) {
						case 24:
							return "Cache";
						case 9:
							return (t.displayName || "Context") + ".Consumer";
						case 10:
							return (t._context.displayName || "Context") + ".Provider";
						case 18:
							return "DehydratedFragment";
						case 11:
							return (
								(e = (e = t.render).displayName || e.name || ""),
								t.displayName ||
									("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
							);
						case 7:
							return "Fragment";
						case 5:
							return t;
						case 4:
							return "Portal";
						case 3:
							return "Root";
						case 6:
							return "Text";
						case 16:
							return I(t);
						case 8:
							return t === E ? "StrictMode" : "Mode";
						case 22:
							return "Offscreen";
						case 12:
							return "Profiler";
						case 21:
							return "Scope";
						case 13:
							return "Suspense";
						case 19:
							return "SuspenseList";
						case 25:
							return "TracingMarker";
						case 1:
						case 0:
						case 17:
						case 2:
						case 14:
						case 15:
							if ("function" === typeof t)
								return t.displayName || t.name || null;
							if ("string" === typeof t) return t;
					}
					return null;
				}
				function H(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "string":
						case "undefined":
						case "object":
							return e;
						default:
							return "";
					}
				}
				function q(e) {
					var t = e.type;
					return (
						(e = e.nodeName) &&
						"input" === e.toLowerCase() &&
						("checkbox" === t || "radio" === t)
					);
				}
				function $(e) {
					e._valueTracker ||
						(e._valueTracker = (function (e) {
							var t = q(e) ? "checked" : "value",
								n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
								r = "" + e[t];
							if (
								!e.hasOwnProperty(t) &&
								"undefined" !== typeof n &&
								"function" === typeof n.get &&
								"function" === typeof n.set
							) {
								var i = n.get,
									o = n.set;
								return (
									Object.defineProperty(e, t, {
										configurable: !0,
										get: function () {
											return i.call(this);
										},
										set: function (e) {
											(r = "" + e), o.call(this, e);
										},
									}),
									Object.defineProperty(e, t, { enumerable: n.enumerable }),
									{
										getValue: function () {
											return r;
										},
										setValue: function (e) {
											r = "" + e;
										},
										stopTracking: function () {
											(e._valueTracker = null), delete e[t];
										},
									}
								);
							}
						})(e));
				}
				function K(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var n = t.getValue(),
						r = "";
					return (
						e && (r = q(e) ? (e.checked ? "true" : "false") : e.value),
						(e = r) !== n && (t.setValue(e), !0)
					);
				}
				function X(e) {
					if (
						"undefined" ===
						typeof (e =
							e || ("undefined" !== typeof document ? document : void 0))
					)
						return null;
					try {
						return e.activeElement || e.body;
					} catch (t) {
						return e.body;
					}
				}
				function Q(e, t) {
					var n = t.checked;
					return N({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != n ? n : e._wrapperState.initialChecked,
					});
				}
				function Y(e, t) {
					var n = null == t.defaultValue ? "" : t.defaultValue,
						r = null != t.checked ? t.checked : t.defaultChecked;
					(n = H(null != t.value ? t.value : n)),
						(e._wrapperState = {
							initialChecked: r,
							initialValue: n,
							controlled:
								"checkbox" === t.type || "radio" === t.type
									? null != t.checked
									: null != t.value,
						});
				}
				function G(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1);
				}
				function J(e, t) {
					G(e, t);
					var n = H(t.value),
						r = t.type;
					if (null != n)
						"number" === r
							? ((0 === n && "" === e.value) || e.value != n) &&
							  (e.value = "" + n)
							: e.value !== "" + n && (e.value = "" + n);
					else if ("submit" === r || "reset" === r)
						return void e.removeAttribute("value");
					t.hasOwnProperty("value")
						? ee(e, t.type, n)
						: t.hasOwnProperty("defaultValue") &&
						  ee(e, t.type, H(t.defaultValue)),
						null == t.checked &&
							null != t.defaultChecked &&
							(e.defaultChecked = !!t.defaultChecked);
				}
				function Z(e, t, n) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var r = t.type;
						if (
							!(
								("submit" !== r && "reset" !== r) ||
								(void 0 !== t.value && null !== t.value)
							)
						)
							return;
						(t = "" + e._wrapperState.initialValue),
							n || t === e.value || (e.value = t),
							(e.defaultValue = t);
					}
					"" !== (n = e.name) && (e.name = ""),
						(e.defaultChecked = !!e._wrapperState.initialChecked),
						"" !== n && (e.name = n);
				}
				function ee(e, t, n) {
					("number" === t && X(e.ownerDocument) === e) ||
						(null == n
							? (e.defaultValue = "" + e._wrapperState.initialValue)
							: e.defaultValue !== "" + n && (e.defaultValue = "" + n));
				}
				var te = Array.isArray;
				function ne(e, t, n, r) {
					if (((e = e.options), t)) {
						t = {};
						for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
						for (n = 0; n < e.length; n++)
							(i = t.hasOwnProperty("$" + e[n].value)),
								e[n].selected !== i && (e[n].selected = i),
								i && r && (e[n].defaultSelected = !0);
					} else {
						for (n = "" + H(n), t = null, i = 0; i < e.length; i++) {
							if (e[i].value === n)
								return (
									(e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
								);
							null !== t || e[i].disabled || (t = e[i]);
						}
						null !== t && (t.selected = !0);
					}
				}
				function re(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
					return N({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue,
					});
				}
				function ie(e, t) {
					var n = t.value;
					if (null == n) {
						if (((n = t.children), (t = t.defaultValue), null != n)) {
							if (null != t) throw Error(o(92));
							if (te(n)) {
								if (1 < n.length) throw Error(o(93));
								n = n[0];
							}
							t = n;
						}
						null == t && (t = ""), (n = t);
					}
					e._wrapperState = { initialValue: H(n) };
				}
				function oe(e, t) {
					var n = H(t.value),
						r = H(t.defaultValue);
					null != n &&
						((n = "" + n) !== e.value && (e.value = n),
						null == t.defaultValue &&
							e.defaultValue !== n &&
							(e.defaultValue = n)),
						null != r && (e.defaultValue = "" + r);
				}
				function ae(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue &&
						"" !== t &&
						null !== t &&
						(e.value = t);
				}
				function se(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml";
					}
				}
				function le(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e
						? se(t)
						: "http://www.w3.org/2000/svg" === e && "foreignObject" === t
						? "http://www.w3.org/1999/xhtml"
						: e;
				}
				var ue,
					ce,
					de =
						((ce = function (e, t) {
							if (
								"http://www.w3.org/2000/svg" !== e.namespaceURI ||
								"innerHTML" in e
							)
								e.innerHTML = t;
							else {
								for (
									(ue = ue || document.createElement("div")).innerHTML =
										"<svg>" + t.valueOf().toString() + "</svg>",
										t = ue.firstChild;
									e.firstChild;

								)
									e.removeChild(e.firstChild);
								for (; t.firstChild; ) e.appendChild(t.firstChild);
							}
						}),
						"undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
							? function (e, t, n, r) {
									MSApp.execUnsafeLocalFunction(function () {
										return ce(e, t);
									});
							  }
							: ce);
				function fe(e, t) {
					if (t) {
						var n = e.firstChild;
						if (n && n === e.lastChild && 3 === n.nodeType)
							return void (n.nodeValue = t);
					}
					e.textContent = t;
				}
				var he = {
						animationIterationCount: !0,
						aspectRatio: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0,
					},
					pe = ["Webkit", "ms", "Moz", "O"];
				function me(e, t, n) {
					return null == t || "boolean" === typeof t || "" === t
						? ""
						: n ||
						  "number" !== typeof t ||
						  0 === t ||
						  (he.hasOwnProperty(e) && he[e])
						? ("" + t).trim()
						: t + "px";
				}
				function ge(e, t) {
					for (var n in ((e = e.style), t))
						if (t.hasOwnProperty(n)) {
							var r = 0 === n.indexOf("--"),
								i = me(n, t[n], r);
							"float" === n && (n = "cssFloat"),
								r ? e.setProperty(n, i) : (e[n] = i);
						}
				}
				Object.keys(he).forEach(function (e) {
					pe.forEach(function (t) {
						(t = t + e.charAt(0).toUpperCase() + e.substring(1)),
							(he[t] = he[e]);
					});
				});
				var ve = N(
					{ menuitem: !0 },
					{
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						embed: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
					}
				);
				function ye(e, t) {
					if (t) {
						if (
							ve[e] &&
							(null != t.children || null != t.dangerouslySetInnerHTML)
						)
							throw Error(o(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(o(60));
							if (
								"object" !== typeof t.dangerouslySetInnerHTML ||
								!("__html" in t.dangerouslySetInnerHTML)
							)
								throw Error(o(61));
						}
						if (null != t.style && "object" !== typeof t.style)
							throw Error(o(62));
					}
				}
				function be(e, t) {
					if (-1 === e.indexOf("-")) return "string" === typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0;
					}
				}
				var we = null;
				function xe(e) {
					return (
						(e = e.target || e.srcElement || window).correspondingUseElement &&
							(e = e.correspondingUseElement),
						3 === e.nodeType ? e.parentNode : e
					);
				}
				var Se = null,
					ke = null,
					Ee = null;
				function Pe(e) {
					if ((e = bi(e))) {
						if ("function" !== typeof Se) throw Error(o(280));
						var t = e.stateNode;
						t && ((t = xi(t)), Se(e.stateNode, e.type, t));
					}
				}
				function Ce(e) {
					ke ? (Ee ? Ee.push(e) : (Ee = [e])) : (ke = e);
				}
				function Te() {
					if (ke) {
						var e = ke,
							t = Ee;
						if (((Ee = ke = null), Pe(e), t))
							for (e = 0; e < t.length; e++) Pe(t[e]);
					}
				}
				function Fe(e, t) {
					return e(t);
				}
				function _e() {}
				var Ae = !1;
				function Re(e, t, n) {
					if (Ae) return e(t, n);
					Ae = !0;
					try {
						return Fe(e, t, n);
					} finally {
						(Ae = !1), (null !== ke || null !== Ee) && (_e(), Te());
					}
				}
				function je(e, t) {
					var n = e.stateNode;
					if (null === n) return null;
					var r = xi(n);
					if (null === r) return null;
					n = r[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(r = !r.disabled) ||
								(r = !(
									"button" === (e = e.type) ||
									"input" === e ||
									"select" === e ||
									"textarea" === e
								)),
								(e = !r);
							break e;
						default:
							e = !1;
					}
					if (e) return null;
					if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
					return n;
				}
				var De = !1;
				if (c)
					try {
						var Le = {};
						Object.defineProperty(Le, "passive", {
							get: function () {
								De = !0;
							},
						}),
							window.addEventListener("test", Le, Le),
							window.removeEventListener("test", Le, Le);
					} catch (ce) {
						De = !1;
					}
				function Oe(e, t, n, r, i, o, a, s, l) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(n, u);
					} catch (xc) {
						this.onError(xc);
					}
				}
				var Me = !1,
					Ne = null,
					Ve = !1,
					ze = null,
					Be = {
						onError: function (e) {
							(Me = !0), (Ne = e);
						},
					};
				function Ue(e, t, n, r, i, o, a, s, l) {
					(Me = !1), (Ne = null), Oe.apply(Be, arguments);
				}
				function Ie(e) {
					var t = e,
						n = e;
					if (e.alternate) for (; t.return; ) t = t.return;
					else {
						e = t;
						do {
							0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
						} while (e);
					}
					return 3 === t.tag ? n : null;
				}
				function We(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (
							(null === t &&
								null !== (e = e.alternate) &&
								(t = e.memoizedState),
							null !== t)
						)
							return t.dehydrated;
					}
					return null;
				}
				function He(e) {
					if (Ie(e) !== e) throw Error(o(188));
				}
				function qe(e) {
					return (
						(e = (function (e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Ie(e))) throw Error(o(188));
								return t !== e ? null : e;
							}
							for (var n = e, r = t; ; ) {
								var i = n.return;
								if (null === i) break;
								var a = i.alternate;
								if (null === a) {
									if (null !== (r = i.return)) {
										n = r;
										continue;
									}
									break;
								}
								if (i.child === a.child) {
									for (a = i.child; a; ) {
										if (a === n) return He(i), e;
										if (a === r) return He(i), t;
										a = a.sibling;
									}
									throw Error(o(188));
								}
								if (n.return !== r.return) (n = i), (r = a);
								else {
									for (var s = !1, l = i.child; l; ) {
										if (l === n) {
											(s = !0), (n = i), (r = a);
											break;
										}
										if (l === r) {
											(s = !0), (r = i), (n = a);
											break;
										}
										l = l.sibling;
									}
									if (!s) {
										for (l = a.child; l; ) {
											if (l === n) {
												(s = !0), (n = a), (r = i);
												break;
											}
											if (l === r) {
												(s = !0), (r = a), (n = i);
												break;
											}
											l = l.sibling;
										}
										if (!s) throw Error(o(189));
									}
								}
								if (n.alternate !== r) throw Error(o(190));
							}
							if (3 !== n.tag) throw Error(o(188));
							return n.stateNode.current === n ? e : t;
						})(e)),
						null !== e ? $e(e) : null
					);
				}
				function $e(e) {
					if (5 === e.tag || 6 === e.tag) return e;
					for (e = e.child; null !== e; ) {
						var t = $e(e);
						if (null !== t) return t;
						e = e.sibling;
					}
					return null;
				}
				var Ke = i.unstable_scheduleCallback,
					Xe = i.unstable_cancelCallback,
					Qe = i.unstable_shouldYield,
					Ye = i.unstable_requestPaint,
					Ge = i.unstable_now,
					Je = i.unstable_getCurrentPriorityLevel,
					Ze = i.unstable_ImmediatePriority,
					et = i.unstable_UserBlockingPriority,
					tt = i.unstable_NormalPriority,
					nt = i.unstable_LowPriority,
					rt = i.unstable_IdlePriority,
					it = null,
					ot = null;
				var at = Math.clz32
						? Math.clz32
						: function (e) {
								return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
						  },
					st = Math.log,
					lt = Math.LN2;
				var ut = 64,
					ct = 4194304;
				function dt(e) {
					switch (e & -e) {
						case 1:
							return 1;
						case 2:
							return 2;
						case 4:
							return 4;
						case 8:
							return 8;
						case 16:
							return 16;
						case 32:
							return 32;
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return 4194240 & e;
						case 4194304:
						case 8388608:
						case 16777216:
						case 33554432:
						case 67108864:
							return 130023424 & e;
						case 134217728:
							return 134217728;
						case 268435456:
							return 268435456;
						case 536870912:
							return 536870912;
						case 1073741824:
							return 1073741824;
						default:
							return e;
					}
				}
				function ft(e, t) {
					var n = e.pendingLanes;
					if (0 === n) return 0;
					var r = 0,
						i = e.suspendedLanes,
						o = e.pingedLanes,
						a = 268435455 & n;
					if (0 !== a) {
						var s = a & ~i;
						0 !== s ? (r = dt(s)) : 0 !== (o &= a) && (r = dt(o));
					} else 0 !== (a = n & ~i) ? (r = dt(a)) : 0 !== o && (r = dt(o));
					if (0 === r) return 0;
					if (
						0 !== t &&
						t !== r &&
						0 === (t & i) &&
						((i = r & -r) >= (o = t & -t) || (16 === i && 0 !== (4194240 & o)))
					)
						return t;
					if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
						for (e = e.entanglements, t &= r; 0 < t; )
							(i = 1 << (n = 31 - at(t))), (r |= e[n]), (t &= ~i);
					return r;
				}
				function ht(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 4:
							return t + 250;
						case 8:
						case 16:
						case 32:
						case 64:
						case 128:
						case 256:
						case 512:
						case 1024:
						case 2048:
						case 4096:
						case 8192:
						case 16384:
						case 32768:
						case 65536:
						case 131072:
						case 262144:
						case 524288:
						case 1048576:
						case 2097152:
							return t + 5e3;
						default:
							return -1;
					}
				}
				function pt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes)
						? e
						: 1073741824 & e
						? 1073741824
						: 0;
				}
				function mt() {
					var e = ut;
					return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
				}
				function gt(e) {
					for (var t = [], n = 0; 31 > n; n++) t.push(e);
					return t;
				}
				function vt(e, t, n) {
					(e.pendingLanes |= t),
						536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
						((e = e.eventTimes)[(t = 31 - at(t))] = n);
				}
				function yt(e, t) {
					var n = (e.entangledLanes |= t);
					for (e = e.entanglements; n; ) {
						var r = 31 - at(n),
							i = 1 << r;
						(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
					}
				}
				var bt = 0;
				function wt(e) {
					return 1 < (e &= -e)
						? 4 < e
							? 0 !== (268435455 & e)
								? 16
								: 536870912
							: 4
						: 1;
				}
				var xt,
					St,
					kt,
					Et,
					Pt,
					Ct = !1,
					Tt = [],
					Ft = null,
					_t = null,
					At = null,
					Rt = new Map(),
					jt = new Map(),
					Dt = [],
					Lt =
						"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
							" "
						);
				function Ot(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							Ft = null;
							break;
						case "dragenter":
						case "dragleave":
							_t = null;
							break;
						case "mouseover":
						case "mouseout":
							At = null;
							break;
						case "pointerover":
						case "pointerout":
							Rt.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							jt.delete(t.pointerId);
					}
				}
				function Mt(e, t, n, r, i, o) {
					return null === e || e.nativeEvent !== o
						? ((e = {
								blockedOn: t,
								domEventName: n,
								eventSystemFlags: r,
								nativeEvent: o,
								targetContainers: [i],
						  }),
						  null !== t && null !== (t = bi(t)) && St(t),
						  e)
						: ((e.eventSystemFlags |= r),
						  (t = e.targetContainers),
						  null !== i && -1 === t.indexOf(i) && t.push(i),
						  e);
				}
				function Nt(e) {
					var t = yi(e.target);
					if (null !== t) {
						var n = Ie(t);
						if (null !== n)
							if (13 === (t = n.tag)) {
								if (null !== (t = We(n)))
									return (
										(e.blockedOn = t),
										void Pt(e.priority, function () {
											kt(n);
										})
									);
							} else if (
								3 === t &&
								n.stateNode.current.memoizedState.isDehydrated
							)
								return void (e.blockedOn =
									3 === n.tag ? n.stateNode.containerInfo : null);
					}
					e.blockedOn = null;
				}
				function Vt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length; ) {
						var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== n)
							return null !== (t = bi(n)) && St(t), (e.blockedOn = n), !1;
						var r = new (n = e.nativeEvent).constructor(n.type, n);
						(we = r), n.target.dispatchEvent(r), (we = null), t.shift();
					}
					return !0;
				}
				function zt(e, t, n) {
					Vt(e) && n.delete(t);
				}
				function Bt() {
					(Ct = !1),
						null !== Ft && Vt(Ft) && (Ft = null),
						null !== _t && Vt(_t) && (_t = null),
						null !== At && Vt(At) && (At = null),
						Rt.forEach(zt),
						jt.forEach(zt);
				}
				function Ut(e, t) {
					e.blockedOn === t &&
						((e.blockedOn = null),
						Ct ||
							((Ct = !0),
							i.unstable_scheduleCallback(i.unstable_NormalPriority, Bt)));
				}
				function It(e) {
					function t(t) {
						return Ut(t, e);
					}
					if (0 < Tt.length) {
						Ut(Tt[0], e);
						for (var n = 1; n < Tt.length; n++) {
							var r = Tt[n];
							r.blockedOn === e && (r.blockedOn = null);
						}
					}
					for (
						null !== Ft && Ut(Ft, e),
							null !== _t && Ut(_t, e),
							null !== At && Ut(At, e),
							Rt.forEach(t),
							jt.forEach(t),
							n = 0;
						n < Dt.length;
						n++
					)
						(r = Dt[n]).blockedOn === e && (r.blockedOn = null);
					for (; 0 < Dt.length && null === (n = Dt[0]).blockedOn; )
						Nt(n), null === n.blockedOn && Dt.shift();
				}
				var Wt = w.ReactCurrentBatchConfig,
					Ht = !0;
				function qt(e, t, n, r) {
					var i = bt,
						o = Wt.transition;
					Wt.transition = null;
					try {
						(bt = 1), Kt(e, t, n, r);
					} finally {
						(bt = i), (Wt.transition = o);
					}
				}
				function $t(e, t, n, r) {
					var i = bt,
						o = Wt.transition;
					Wt.transition = null;
					try {
						(bt = 4), Kt(e, t, n, r);
					} finally {
						(bt = i), (Wt.transition = o);
					}
				}
				function Kt(e, t, n, r) {
					if (Ht) {
						var i = Qt(e, t, n, r);
						if (null === i) Hr(e, t, r, Xt, n), Ot(e, r);
						else if (
							(function (e, t, n, r, i) {
								switch (t) {
									case "focusin":
										return (Ft = Mt(Ft, e, t, n, r, i)), !0;
									case "dragenter":
										return (_t = Mt(_t, e, t, n, r, i)), !0;
									case "mouseover":
										return (At = Mt(At, e, t, n, r, i)), !0;
									case "pointerover":
										var o = i.pointerId;
										return Rt.set(o, Mt(Rt.get(o) || null, e, t, n, r, i)), !0;
									case "gotpointercapture":
										return (
											(o = i.pointerId),
											jt.set(o, Mt(jt.get(o) || null, e, t, n, r, i)),
											!0
										);
								}
								return !1;
							})(i, e, t, n, r)
						)
							r.stopPropagation();
						else if ((Ot(e, r), 4 & t && -1 < Lt.indexOf(e))) {
							for (; null !== i; ) {
								var o = bi(i);
								if (
									(null !== o && xt(o),
									null === (o = Qt(e, t, n, r)) && Hr(e, t, r, Xt, n),
									o === i)
								)
									break;
								i = o;
							}
							null !== i && r.stopPropagation();
						} else Hr(e, t, r, null, n);
					}
				}
				var Xt = null;
				function Qt(e, t, n, r) {
					if (((Xt = null), null !== (e = yi((e = xe(r))))))
						if (null === (t = Ie(e))) e = null;
						else if (13 === (n = t.tag)) {
							if (null !== (e = We(t))) return e;
							e = null;
						} else if (3 === n) {
							if (t.stateNode.current.memoizedState.isDehydrated)
								return 3 === t.tag ? t.stateNode.containerInfo : null;
							e = null;
						} else t !== e && (e = null);
					return (Xt = e), null;
				}
				function Yt(e) {
					switch (e) {
						case "cancel":
						case "click":
						case "close":
						case "contextmenu":
						case "copy":
						case "cut":
						case "auxclick":
						case "dblclick":
						case "dragend":
						case "dragstart":
						case "drop":
						case "focusin":
						case "focusout":
						case "input":
						case "invalid":
						case "keydown":
						case "keypress":
						case "keyup":
						case "mousedown":
						case "mouseup":
						case "paste":
						case "pause":
						case "play":
						case "pointercancel":
						case "pointerdown":
						case "pointerup":
						case "ratechange":
						case "reset":
						case "resize":
						case "seeked":
						case "submit":
						case "touchcancel":
						case "touchend":
						case "touchstart":
						case "volumechange":
						case "change":
						case "selectionchange":
						case "textInput":
						case "compositionstart":
						case "compositionend":
						case "compositionupdate":
						case "beforeblur":
						case "afterblur":
						case "beforeinput":
						case "blur":
						case "fullscreenchange":
						case "focus":
						case "hashchange":
						case "popstate":
						case "select":
						case "selectstart":
							return 1;
						case "drag":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "mousemove":
						case "mouseout":
						case "mouseover":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "scroll":
						case "toggle":
						case "touchmove":
						case "wheel":
						case "mouseenter":
						case "mouseleave":
						case "pointerenter":
						case "pointerleave":
							return 4;
						case "message":
							switch (Je()) {
								case Ze:
									return 1;
								case et:
									return 4;
								case tt:
								case nt:
									return 16;
								case rt:
									return 536870912;
								default:
									return 16;
							}
						default:
							return 16;
					}
				}
				var Gt = null,
					Jt = null,
					Zt = null;
				function en() {
					if (Zt) return Zt;
					var e,
						t,
						n = Jt,
						r = n.length,
						i = "value" in Gt ? Gt.value : Gt.textContent,
						o = i.length;
					for (e = 0; e < r && n[e] === i[e]; e++);
					var a = r - e;
					for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
					return (Zt = i.slice(e, 1 < t ? 1 - t : void 0));
				}
				function tn(e) {
					var t = e.keyCode;
					return (
						"charCode" in e
							? 0 === (e = e.charCode) && 13 === t && (e = 13)
							: (e = t),
						10 === e && (e = 13),
						32 <= e || 13 === e ? e : 0
					);
				}
				function nn() {
					return !0;
				}
				function rn() {
					return !1;
				}
				function on(e) {
					function t(t, n, r, i, o) {
						for (var a in ((this._reactName = t),
						(this._targetInst = r),
						(this.type = n),
						(this.nativeEvent = i),
						(this.target = o),
						(this.currentTarget = null),
						e))
							e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
						return (
							(this.isDefaultPrevented = (
								null != i.defaultPrevented
									? i.defaultPrevented
									: !1 === i.returnValue
							)
								? nn
								: rn),
							(this.isPropagationStopped = rn),
							this
						);
					}
					return (
						N(t.prototype, {
							preventDefault: function () {
								this.defaultPrevented = !0;
								var e = this.nativeEvent;
								e &&
									(e.preventDefault
										? e.preventDefault()
										: "unknown" !== typeof e.returnValue &&
										  (e.returnValue = !1),
									(this.isDefaultPrevented = nn));
							},
							stopPropagation: function () {
								var e = this.nativeEvent;
								e &&
									(e.stopPropagation
										? e.stopPropagation()
										: "unknown" !== typeof e.cancelBubble &&
										  (e.cancelBubble = !0),
									(this.isPropagationStopped = nn));
							},
							persist: function () {},
							isPersistent: nn,
						}),
						t
					);
				}
				var an,
					sn,
					ln,
					un = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function (e) {
							return e.timeStamp || Date.now();
						},
						defaultPrevented: 0,
						isTrusted: 0,
					},
					cn = on(un),
					dn = N({}, un, { view: 0, detail: 0 }),
					fn = on(dn),
					hn = N({}, dn, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Pn,
						button: 0,
						buttons: 0,
						relatedTarget: function (e) {
							return void 0 === e.relatedTarget
								? e.fromElement === e.srcElement
									? e.toElement
									: e.fromElement
								: e.relatedTarget;
						},
						movementX: function (e) {
							return "movementX" in e
								? e.movementX
								: (e !== ln &&
										(ln && "mousemove" === e.type
											? ((an = e.screenX - ln.screenX),
											  (sn = e.screenY - ln.screenY))
											: (sn = an = 0),
										(ln = e)),
								  an);
						},
						movementY: function (e) {
							return "movementY" in e ? e.movementY : sn;
						},
					}),
					pn = on(hn),
					mn = on(N({}, hn, { dataTransfer: 0 })),
					gn = on(N({}, dn, { relatedTarget: 0 })),
					vn = on(
						N({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					yn = N({}, un, {
						clipboardData: function (e) {
							return "clipboardData" in e
								? e.clipboardData
								: window.clipboardData;
						},
					}),
					bn = on(yn),
					wn = on(N({}, un, { data: 0 })),
					xn = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified",
					},
					Sn = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta",
					},
					kn = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey",
					};
				function En(e) {
					var t = this.nativeEvent;
					return t.getModifierState
						? t.getModifierState(e)
						: !!(e = kn[e]) && !!t[e];
				}
				function Pn() {
					return En;
				}
				var Cn = N({}, dn, {
						key: function (e) {
							if (e.key) {
								var t = xn[e.key] || e.key;
								if ("Unidentified" !== t) return t;
							}
							return "keypress" === e.type
								? 13 === (e = tn(e))
									? "Enter"
									: String.fromCharCode(e)
								: "keydown" === e.type || "keyup" === e.type
								? Sn[e.keyCode] || "Unidentified"
								: "";
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Pn,
						charCode: function (e) {
							return "keypress" === e.type ? tn(e) : 0;
						},
						keyCode: function (e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
						},
						which: function (e) {
							return "keypress" === e.type
								? tn(e)
								: "keydown" === e.type || "keyup" === e.type
								? e.keyCode
								: 0;
						},
					}),
					Tn = on(Cn),
					Fn = on(
						N({}, hn, {
							pointerId: 0,
							width: 0,
							height: 0,
							pressure: 0,
							tangentialPressure: 0,
							tiltX: 0,
							tiltY: 0,
							twist: 0,
							pointerType: 0,
							isPrimary: 0,
						})
					),
					_n = on(
						N({}, dn, {
							touches: 0,
							targetTouches: 0,
							changedTouches: 0,
							altKey: 0,
							metaKey: 0,
							ctrlKey: 0,
							shiftKey: 0,
							getModifierState: Pn,
						})
					),
					An = on(
						N({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
					),
					Rn = N({}, hn, {
						deltaX: function (e) {
							return "deltaX" in e
								? e.deltaX
								: "wheelDeltaX" in e
								? -e.wheelDeltaX
								: 0;
						},
						deltaY: function (e) {
							return "deltaY" in e
								? e.deltaY
								: "wheelDeltaY" in e
								? -e.wheelDeltaY
								: "wheelDelta" in e
								? -e.wheelDelta
								: 0;
						},
						deltaZ: 0,
						deltaMode: 0,
					}),
					jn = on(Rn),
					Dn = [9, 13, 27, 32],
					Ln = c && "CompositionEvent" in window,
					On = null;
				c && "documentMode" in document && (On = document.documentMode);
				var Mn = c && "TextEvent" in window && !On,
					Nn = c && (!Ln || (On && 8 < On && 11 >= On)),
					Vn = String.fromCharCode(32),
					zn = !1;
				function Bn(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Dn.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1;
					}
				}
				function Un(e) {
					return "object" === typeof (e = e.detail) && "data" in e
						? e.data
						: null;
				}
				var In = !1;
				var Wn = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0,
				};
				function Hn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!Wn[e.type] : "textarea" === t;
				}
				function qn(e, t, n, r) {
					Ce(r),
						0 < (t = $r(t, "onChange")).length &&
							((n = new cn("onChange", "change", null, n, r)),
							e.push({ event: n, listeners: t }));
				}
				var $n = null,
					Kn = null;
				function Xn(e) {
					Vr(e, 0);
				}
				function Qn(e) {
					if (K(wi(e))) return e;
				}
				function Yn(e, t) {
					if ("change" === e) return t;
				}
				var Gn = !1;
				if (c) {
					var Jn;
					if (c) {
						var Zn = "oninput" in document;
						if (!Zn) {
							var er = document.createElement("div");
							er.setAttribute("oninput", "return;"),
								(Zn = "function" === typeof er.oninput);
						}
						Jn = Zn;
					} else Jn = !1;
					Gn = Jn && (!document.documentMode || 9 < document.documentMode);
				}
				function tr() {
					$n && ($n.detachEvent("onpropertychange", nr), (Kn = $n = null));
				}
				function nr(e) {
					if ("value" === e.propertyName && Qn(Kn)) {
						var t = [];
						qn(t, Kn, e, xe(e)), Re(Xn, t);
					}
				}
				function rr(e, t, n) {
					"focusin" === e
						? (tr(), (Kn = n), ($n = t).attachEvent("onpropertychange", nr))
						: "focusout" === e && tr();
				}
				function ir(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e)
						return Qn(Kn);
				}
				function or(e, t) {
					if ("click" === e) return Qn(t);
				}
				function ar(e, t) {
					if ("input" === e || "change" === e) return Qn(t);
				}
				var sr =
					"function" === typeof Object.is
						? Object.is
						: function (e, t) {
								return (
									(e === t && (0 !== e || 1 / e === 1 / t)) ||
									(e !== e && t !== t)
								);
						  };
				function lr(e, t) {
					if (sr(e, t)) return !0;
					if (
						"object" !== typeof e ||
						null === e ||
						"object" !== typeof t ||
						null === t
					)
						return !1;
					var n = Object.keys(e),
						r = Object.keys(t);
					if (n.length !== r.length) return !1;
					for (r = 0; r < n.length; r++) {
						var i = n[r];
						if (!d.call(t, i) || !sr(e[i], t[i])) return !1;
					}
					return !0;
				}
				function ur(e) {
					for (; e && e.firstChild; ) e = e.firstChild;
					return e;
				}
				function cr(e, t) {
					var n,
						r = ur(e);
					for (e = 0; r; ) {
						if (3 === r.nodeType) {
							if (((n = e + r.textContent.length), e <= t && n >= t))
								return { node: r, offset: t - e };
							e = n;
						}
						e: {
							for (; r; ) {
								if (r.nextSibling) {
									r = r.nextSibling;
									break e;
								}
								r = r.parentNode;
							}
							r = void 0;
						}
						r = ur(r);
					}
				}
				function dr(e, t) {
					return (
						!(!e || !t) &&
						(e === t ||
							((!e || 3 !== e.nodeType) &&
								(t && 3 === t.nodeType
									? dr(e, t.parentNode)
									: "contains" in e
									? e.contains(t)
									: !!e.compareDocumentPosition &&
									  !!(16 & e.compareDocumentPosition(t)))))
					);
				}
				function fr() {
					for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
						try {
							var n = "string" === typeof t.contentWindow.location.href;
						} catch (r) {
							n = !1;
						}
						if (!n) break;
						t = X((e = t.contentWindow).document);
					}
					return t;
				}
				function hr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return (
						t &&
						(("input" === t &&
							("text" === e.type ||
								"search" === e.type ||
								"tel" === e.type ||
								"url" === e.type ||
								"password" === e.type)) ||
							"textarea" === t ||
							"true" === e.contentEditable)
					);
				}
				function pr(e) {
					var t = fr(),
						n = e.focusedElem,
						r = e.selectionRange;
					if (
						t !== n &&
						n &&
						n.ownerDocument &&
						dr(n.ownerDocument.documentElement, n)
					) {
						if (null !== r && hr(n))
							if (
								((t = r.start),
								void 0 === (e = r.end) && (e = t),
								"selectionStart" in n)
							)
								(n.selectionStart = t),
									(n.selectionEnd = Math.min(e, n.value.length));
							else if (
								(e =
									((t = n.ownerDocument || document) && t.defaultView) ||
									window).getSelection
							) {
								e = e.getSelection();
								var i = n.textContent.length,
									o = Math.min(r.start, i);
								(r = void 0 === r.end ? o : Math.min(r.end, i)),
									!e.extend && o > r && ((i = r), (r = o), (o = i)),
									(i = cr(n, o));
								var a = cr(n, r);
								i &&
									a &&
									(1 !== e.rangeCount ||
										e.anchorNode !== i.node ||
										e.anchorOffset !== i.offset ||
										e.focusNode !== a.node ||
										e.focusOffset !== a.offset) &&
									((t = t.createRange()).setStart(i.node, i.offset),
									e.removeAllRanges(),
									o > r
										? (e.addRange(t), e.extend(a.node, a.offset))
										: (t.setEnd(a.node, a.offset), e.addRange(t)));
							}
						for (t = [], e = n; (e = e.parentNode); )
							1 === e.nodeType &&
								t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
						for (
							"function" === typeof n.focus && n.focus(), n = 0;
							n < t.length;
							n++
						)
							((e = t[n]).element.scrollLeft = e.left),
								(e.element.scrollTop = e.top);
					}
				}
				var mr = c && "documentMode" in document && 11 >= document.documentMode,
					gr = null,
					vr = null,
					yr = null,
					br = !1;
				function wr(e, t, n) {
					var r =
						n.window === n
							? n.document
							: 9 === n.nodeType
							? n
							: n.ownerDocument;
					br ||
						null == gr ||
						gr !== X(r) ||
						("selectionStart" in (r = gr) && hr(r)
							? (r = { start: r.selectionStart, end: r.selectionEnd })
							: (r = {
									anchorNode: (r = (
										(r.ownerDocument && r.ownerDocument.defaultView) ||
										window
									).getSelection()).anchorNode,
									anchorOffset: r.anchorOffset,
									focusNode: r.focusNode,
									focusOffset: r.focusOffset,
							  }),
						(yr && lr(yr, r)) ||
							((yr = r),
							0 < (r = $r(vr, "onSelect")).length &&
								((t = new cn("onSelect", "select", null, t, n)),
								e.push({ event: t, listeners: r }),
								(t.target = gr))));
				}
				function xr(e, t) {
					var n = {};
					return (
						(n[e.toLowerCase()] = t.toLowerCase()),
						(n["Webkit" + e] = "webkit" + t),
						(n["Moz" + e] = "moz" + t),
						n
					);
				}
				var Sr = {
						animationend: xr("Animation", "AnimationEnd"),
						animationiteration: xr("Animation", "AnimationIteration"),
						animationstart: xr("Animation", "AnimationStart"),
						transitionend: xr("Transition", "TransitionEnd"),
					},
					kr = {},
					Er = {};
				function Pr(e) {
					if (kr[e]) return kr[e];
					if (!Sr[e]) return e;
					var t,
						n = Sr[e];
					for (t in n)
						if (n.hasOwnProperty(t) && t in Er) return (kr[e] = n[t]);
					return e;
				}
				c &&
					((Er = document.createElement("div").style),
					"AnimationEvent" in window ||
						(delete Sr.animationend.animation,
						delete Sr.animationiteration.animation,
						delete Sr.animationstart.animation),
					"TransitionEvent" in window || delete Sr.transitionend.transition);
				var Cr = Pr("animationend"),
					Tr = Pr("animationiteration"),
					Fr = Pr("animationstart"),
					_r = Pr("transitionend"),
					Ar = new Map(),
					Rr =
						"abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
							" "
						);
				function jr(e, t) {
					Ar.set(e, t), l(t, [e]);
				}
				for (var Dr = 0; Dr < Rr.length; Dr++) {
					var Lr = Rr[Dr];
					jr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
				}
				jr(Cr, "onAnimationEnd"),
					jr(Tr, "onAnimationIteration"),
					jr(Fr, "onAnimationStart"),
					jr("dblclick", "onDoubleClick"),
					jr("focusin", "onFocus"),
					jr("focusout", "onBlur"),
					jr(_r, "onTransitionEnd"),
					u("onMouseEnter", ["mouseout", "mouseover"]),
					u("onMouseLeave", ["mouseout", "mouseover"]),
					u("onPointerEnter", ["pointerout", "pointerover"]),
					u("onPointerLeave", ["pointerout", "pointerover"]),
					l(
						"onChange",
						"change click focusin focusout input keydown keyup selectionchange".split(
							" "
						)
					),
					l(
						"onSelect",
						"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
							" "
						)
					),
					l("onBeforeInput", [
						"compositionend",
						"keypress",
						"textInput",
						"paste",
					]),
					l(
						"onCompositionEnd",
						"compositionend focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					l(
						"onCompositionStart",
						"compositionstart focusout keydown keypress keyup mousedown".split(
							" "
						)
					),
					l(
						"onCompositionUpdate",
						"compositionupdate focusout keydown keypress keyup mousedown".split(
							" "
						)
					);
				var Or =
						"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
							" "
						),
					Mr = new Set(
						"cancel close invalid load scroll toggle".split(" ").concat(Or)
					);
				function Nr(e, t, n) {
					var r = e.type || "unknown-event";
					(e.currentTarget = n),
						(function (e, t, n, r, i, a, s, l, u) {
							if ((Ue.apply(this, arguments), Me)) {
								if (!Me) throw Error(o(198));
								var c = Ne;
								(Me = !1), (Ne = null), Ve || ((Ve = !0), (ze = c));
							}
						})(r, t, void 0, e),
						(e.currentTarget = null);
				}
				function Vr(e, t) {
					t = 0 !== (4 & t);
					for (var n = 0; n < e.length; n++) {
						var r = e[n],
							i = r.event;
						r = r.listeners;
						e: {
							var o = void 0;
							if (t)
								for (var a = r.length - 1; 0 <= a; a--) {
									var s = r[a],
										l = s.instance,
										u = s.currentTarget;
									if (((s = s.listener), l !== o && i.isPropagationStopped()))
										break e;
									Nr(i, s, u), (o = l);
								}
							else
								for (a = 0; a < r.length; a++) {
									if (
										((l = (s = r[a]).instance),
										(u = s.currentTarget),
										(s = s.listener),
										l !== o && i.isPropagationStopped())
									)
										break e;
									Nr(i, s, u), (o = l);
								}
						}
					}
					if (Ve) throw ((e = ze), (Ve = !1), (ze = null), e);
				}
				function zr(e, t) {
					var n = t[mi];
					void 0 === n && (n = t[mi] = new Set());
					var r = e + "__bubble";
					n.has(r) || (Wr(t, e, 2, !1), n.add(r));
				}
				function Br(e, t, n) {
					var r = 0;
					t && (r |= 4), Wr(n, e, r, t);
				}
				var Ur = "_reactListening" + Math.random().toString(36).slice(2);
				function Ir(e) {
					if (!e[Ur]) {
						(e[Ur] = !0),
							a.forEach(function (t) {
								"selectionchange" !== t &&
									(Mr.has(t) || Br(t, !1, e), Br(t, !0, e));
							});
						var t = 9 === e.nodeType ? e : e.ownerDocument;
						null === t || t[Ur] || ((t[Ur] = !0), Br("selectionchange", !1, t));
					}
				}
				function Wr(e, t, n, r) {
					switch (Yt(t)) {
						case 1:
							var i = qt;
							break;
						case 4:
							i = $t;
							break;
						default:
							i = Kt;
					}
					(n = i.bind(null, t, n, e)),
						(i = void 0),
						!De ||
							("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
							(i = !0),
						r
							? void 0 !== i
								? e.addEventListener(t, n, { capture: !0, passive: i })
								: e.addEventListener(t, n, !0)
							: void 0 !== i
							? e.addEventListener(t, n, { passive: i })
							: e.addEventListener(t, n, !1);
				}
				function Hr(e, t, n, r, i) {
					var o = r;
					if (0 === (1 & t) && 0 === (2 & t) && null !== r)
						e: for (;;) {
							if (null === r) return;
							var a = r.tag;
							if (3 === a || 4 === a) {
								var s = r.stateNode.containerInfo;
								if (s === i || (8 === s.nodeType && s.parentNode === i)) break;
								if (4 === a)
									for (a = r.return; null !== a; ) {
										var l = a.tag;
										if (
											(3 === l || 4 === l) &&
											((l = a.stateNode.containerInfo) === i ||
												(8 === l.nodeType && l.parentNode === i))
										)
											return;
										a = a.return;
									}
								for (; null !== s; ) {
									if (null === (a = yi(s))) return;
									if (5 === (l = a.tag) || 6 === l) {
										r = o = a;
										continue e;
									}
									s = s.parentNode;
								}
							}
							r = r.return;
						}
					Re(function () {
						var r = o,
							i = xe(n),
							a = [];
						e: {
							var s = Ar.get(e);
							if (void 0 !== s) {
								var l = cn,
									u = e;
								switch (e) {
									case "keypress":
										if (0 === tn(n)) break e;
									case "keydown":
									case "keyup":
										l = Tn;
										break;
									case "focusin":
										(u = "focus"), (l = gn);
										break;
									case "focusout":
										(u = "blur"), (l = gn);
										break;
									case "beforeblur":
									case "afterblur":
										l = gn;
										break;
									case "click":
										if (2 === n.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = pn;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = mn;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = _n;
										break;
									case Cr:
									case Tr:
									case Fr:
										l = vn;
										break;
									case _r:
										l = An;
										break;
									case "scroll":
										l = fn;
										break;
									case "wheel":
										l = jn;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = bn;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = Fn;
								}
								var c = 0 !== (4 & t),
									d = !c && "scroll" === e,
									f = c ? (null !== s ? s + "Capture" : null) : s;
								c = [];
								for (var h, p = r; null !== p; ) {
									var m = (h = p).stateNode;
									if (
										(5 === h.tag &&
											null !== m &&
											((h = m),
											null !== f &&
												null != (m = je(p, f)) &&
												c.push(qr(p, m, h))),
										d)
									)
										break;
									p = p.return;
								}
								0 < c.length &&
									((s = new l(s, u, null, n, i)),
									a.push({ event: s, listeners: c }));
							}
						}
						if (0 === (7 & t)) {
							if (
								((l = "mouseout" === e || "pointerout" === e),
								(!(s = "mouseover" === e || "pointerover" === e) ||
									n === we ||
									!(u = n.relatedTarget || n.fromElement) ||
									(!yi(u) && !u[pi])) &&
									(l || s) &&
									((s =
										i.window === i
											? i
											: (s = i.ownerDocument)
											? s.defaultView || s.parentWindow
											: window),
									l
										? ((l = r),
										  null !==
												(u = (u = n.relatedTarget || n.toElement)
													? yi(u)
													: null) &&
												(u !== (d = Ie(u)) || (5 !== u.tag && 6 !== u.tag)) &&
												(u = null))
										: ((l = null), (u = r)),
									l !== u))
							) {
								if (
									((c = pn),
									(m = "onMouseLeave"),
									(f = "onMouseEnter"),
									(p = "mouse"),
									("pointerout" !== e && "pointerover" !== e) ||
										((c = Fn),
										(m = "onPointerLeave"),
										(f = "onPointerEnter"),
										(p = "pointer")),
									(d = null == l ? s : wi(l)),
									(h = null == u ? s : wi(u)),
									((s = new c(m, p + "leave", l, n, i)).target = d),
									(s.relatedTarget = h),
									(m = null),
									yi(i) === r &&
										(((c = new c(f, p + "enter", u, n, i)).target = h),
										(c.relatedTarget = d),
										(m = c)),
									(d = m),
									l && u)
								)
									e: {
										for (f = u, p = 0, h = c = l; h; h = Kr(h)) p++;
										for (h = 0, m = f; m; m = Kr(m)) h++;
										for (; 0 < p - h; ) (c = Kr(c)), p--;
										for (; 0 < h - p; ) (f = Kr(f)), h--;
										for (; p--; ) {
											if (c === f || (null !== f && c === f.alternate)) break e;
											(c = Kr(c)), (f = Kr(f));
										}
										c = null;
									}
								else c = null;
								null !== l && Xr(a, s, l, c, !1),
									null !== u && null !== d && Xr(a, d, u, c, !0);
							}
							if (
								"select" ===
									(l =
										(s = r ? wi(r) : window).nodeName &&
										s.nodeName.toLowerCase()) ||
								("input" === l && "file" === s.type)
							)
								var g = Yn;
							else if (Hn(s))
								if (Gn) g = ar;
								else {
									g = ir;
									var v = rr;
								}
							else
								(l = s.nodeName) &&
									"input" === l.toLowerCase() &&
									("checkbox" === s.type || "radio" === s.type) &&
									(g = or);
							switch (
								(g && (g = g(e, r))
									? qn(a, g, n, i)
									: (v && v(e, s, r),
									  "focusout" === e &&
											(v = s._wrapperState) &&
											v.controlled &&
											"number" === s.type &&
											ee(s, "number", s.value)),
								(v = r ? wi(r) : window),
								e)
							) {
								case "focusin":
									(Hn(v) || "true" === v.contentEditable) &&
										((gr = v), (vr = r), (yr = null));
									break;
								case "focusout":
									yr = vr = gr = null;
									break;
								case "mousedown":
									br = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									(br = !1), wr(a, n, i);
									break;
								case "selectionchange":
									if (mr) break;
								case "keydown":
								case "keyup":
									wr(a, n, i);
							}
							var y;
							if (Ln)
								e: {
									switch (e) {
										case "compositionstart":
											var b = "onCompositionStart";
											break e;
										case "compositionend":
											b = "onCompositionEnd";
											break e;
										case "compositionupdate":
											b = "onCompositionUpdate";
											break e;
									}
									b = void 0;
								}
							else
								In
									? Bn(e, n) && (b = "onCompositionEnd")
									: "keydown" === e &&
									  229 === n.keyCode &&
									  (b = "onCompositionStart");
							b &&
								(Nn &&
									"ko" !== n.locale &&
									(In || "onCompositionStart" !== b
										? "onCompositionEnd" === b && In && (y = en())
										: ((Jt = "value" in (Gt = i) ? Gt.value : Gt.textContent),
										  (In = !0))),
								0 < (v = $r(r, b)).length &&
									((b = new wn(b, e, null, n, i)),
									a.push({ event: b, listeners: v }),
									y ? (b.data = y) : null !== (y = Un(n)) && (b.data = y))),
								(y = Mn
									? (function (e, t) {
											switch (e) {
												case "compositionend":
													return Un(t);
												case "keypress":
													return 32 !== t.which ? null : ((zn = !0), Vn);
												case "textInput":
													return (e = t.data) === Vn && zn ? null : e;
												default:
													return null;
											}
									  })(e, n)
									: (function (e, t) {
											if (In)
												return "compositionend" === e || (!Ln && Bn(e, t))
													? ((e = en()), (Zt = Jt = Gt = null), (In = !1), e)
													: null;
											switch (e) {
												case "paste":
												default:
													return null;
												case "keypress":
													if (
														!(t.ctrlKey || t.altKey || t.metaKey) ||
														(t.ctrlKey && t.altKey)
													) {
														if (t.char && 1 < t.char.length) return t.char;
														if (t.which) return String.fromCharCode(t.which);
													}
													return null;
												case "compositionend":
													return Nn && "ko" !== t.locale ? null : t.data;
											}
									  })(e, n)) &&
									0 < (r = $r(r, "onBeforeInput")).length &&
									((i = new wn("onBeforeInput", "beforeinput", null, n, i)),
									a.push({ event: i, listeners: r }),
									(i.data = y));
						}
						Vr(a, t);
					});
				}
				function qr(e, t, n) {
					return { instance: e, listener: t, currentTarget: n };
				}
				function $r(e, t) {
					for (var n = t + "Capture", r = []; null !== e; ) {
						var i = e,
							o = i.stateNode;
						5 === i.tag &&
							null !== o &&
							((i = o),
							null != (o = je(e, n)) && r.unshift(qr(e, o, i)),
							null != (o = je(e, t)) && r.push(qr(e, o, i))),
							(e = e.return);
					}
					return r;
				}
				function Kr(e) {
					if (null === e) return null;
					do {
						e = e.return;
					} while (e && 5 !== e.tag);
					return e || null;
				}
				function Xr(e, t, n, r, i) {
					for (var o = t._reactName, a = []; null !== n && n !== r; ) {
						var s = n,
							l = s.alternate,
							u = s.stateNode;
						if (null !== l && l === r) break;
						5 === s.tag &&
							null !== u &&
							((s = u),
							i
								? null != (l = je(n, o)) && a.unshift(qr(n, l, s))
								: i || (null != (l = je(n, o)) && a.push(qr(n, l, s)))),
							(n = n.return);
					}
					0 !== a.length && e.push({ event: t, listeners: a });
				}
				var Qr = /\r\n?/g,
					Yr = /\u0000|\uFFFD/g;
				function Gr(e) {
					return ("string" === typeof e ? e : "" + e)
						.replace(Qr, "\n")
						.replace(Yr, "");
				}
				function Jr(e, t, n) {
					if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(o(425));
				}
				function Zr() {}
				var ei = null,
					ti = null;
				function ni(e, t) {
					return (
						"textarea" === e ||
						"noscript" === e ||
						"string" === typeof t.children ||
						"number" === typeof t.children ||
						("object" === typeof t.dangerouslySetInnerHTML &&
							null !== t.dangerouslySetInnerHTML &&
							null != t.dangerouslySetInnerHTML.__html)
					);
				}
				var ri = "function" === typeof setTimeout ? setTimeout : void 0,
					ii = "function" === typeof clearTimeout ? clearTimeout : void 0,
					oi = "function" === typeof Promise ? Promise : void 0,
					ai =
						"function" === typeof queueMicrotask
							? queueMicrotask
							: "undefined" !== typeof oi
							? function (e) {
									return oi.resolve(null).then(e).catch(si);
							  }
							: ri;
				function si(e) {
					setTimeout(function () {
						throw e;
					});
				}
				function li(e, t) {
					var n = t,
						r = 0;
					do {
						var i = n.nextSibling;
						if ((e.removeChild(n), i && 8 === i.nodeType))
							if ("/$" === (n = i.data)) {
								if (0 === r) return e.removeChild(i), void It(t);
								r--;
							} else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
						n = i;
					} while (n);
					It(t);
				}
				function ui(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break;
						if (8 === t) {
							if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
							if ("/$" === t) return null;
						}
					}
					return e;
				}
				function ci(e) {
					e = e.previousSibling;
					for (var t = 0; e; ) {
						if (8 === e.nodeType) {
							var n = e.data;
							if ("$" === n || "$!" === n || "$?" === n) {
								if (0 === t) return e;
								t--;
							} else "/$" === n && t++;
						}
						e = e.previousSibling;
					}
					return null;
				}
				var di = Math.random().toString(36).slice(2),
					fi = "__reactFiber$" + di,
					hi = "__reactProps$" + di,
					pi = "__reactContainer$" + di,
					mi = "__reactEvents$" + di,
					gi = "__reactListeners$" + di,
					vi = "__reactHandles$" + di;
				function yi(e) {
					var t = e[fi];
					if (t) return t;
					for (var n = e.parentNode; n; ) {
						if ((t = n[pi] || n[fi])) {
							if (
								((n = t.alternate),
								null !== t.child || (null !== n && null !== n.child))
							)
								for (e = ci(e); null !== e; ) {
									if ((n = e[fi])) return n;
									e = ci(e);
								}
							return t;
						}
						n = (e = n).parentNode;
					}
					return null;
				}
				function bi(e) {
					return !(e = e[fi] || e[pi]) ||
						(5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
						? null
						: e;
				}
				function wi(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(o(33));
				}
				function xi(e) {
					return e[hi] || null;
				}
				var Si = [],
					ki = -1;
				function Ei(e) {
					return { current: e };
				}
				function Pi(e) {
					0 > ki || ((e.current = Si[ki]), (Si[ki] = null), ki--);
				}
				function Ci(e, t) {
					ki++, (Si[ki] = e.current), (e.current = t);
				}
				var Ti = {},
					Fi = Ei(Ti),
					_i = Ei(!1),
					Ai = Ti;
				function Ri(e, t) {
					var n = e.type.contextTypes;
					if (!n) return Ti;
					var r = e.stateNode;
					if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
						return r.__reactInternalMemoizedMaskedChildContext;
					var i,
						o = {};
					for (i in n) o[i] = t[i];
					return (
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								t),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						o
					);
				}
				function ji(e) {
					return null !== (e = e.childContextTypes) && void 0 !== e;
				}
				function Di() {
					Pi(_i), Pi(Fi);
				}
				function Li(e, t, n) {
					if (Fi.current !== Ti) throw Error(o(168));
					Ci(Fi, t), Ci(_i, n);
				}
				function Oi(e, t, n) {
					var r = e.stateNode;
					if (
						((t = t.childContextTypes), "function" !== typeof r.getChildContext)
					)
						return n;
					for (var i in (r = r.getChildContext()))
						if (!(i in t)) throw Error(o(108, W(e) || "Unknown", i));
					return N({}, n, r);
				}
				function Mi(e) {
					return (
						(e =
							((e = e.stateNode) &&
								e.__reactInternalMemoizedMergedChildContext) ||
							Ti),
						(Ai = Fi.current),
						Ci(Fi, e),
						Ci(_i, _i.current),
						!0
					);
				}
				function Ni(e, t, n) {
					var r = e.stateNode;
					if (!r) throw Error(o(169));
					n
						? ((e = Oi(e, t, Ai)),
						  (r.__reactInternalMemoizedMergedChildContext = e),
						  Pi(_i),
						  Pi(Fi),
						  Ci(Fi, e))
						: Pi(_i),
						Ci(_i, n);
				}
				var Vi = null,
					zi = !1,
					Bi = !1;
				function Ui(e) {
					null === Vi ? (Vi = [e]) : Vi.push(e);
				}
				function Ii() {
					if (!Bi && null !== Vi) {
						Bi = !0;
						var e = 0,
							t = bt;
						try {
							var n = Vi;
							for (bt = 1; e < n.length; e++) {
								var r = n[e];
								do {
									r = r(!0);
								} while (null !== r);
							}
							(Vi = null), (zi = !1);
						} catch (i) {
							throw (null !== Vi && (Vi = Vi.slice(e + 1)), Ke(Ze, Ii), i);
						} finally {
							(bt = t), (Bi = !1);
						}
					}
					return null;
				}
				var Wi = [],
					Hi = 0,
					qi = null,
					$i = 0,
					Ki = [],
					Xi = 0,
					Qi = null,
					Yi = 1,
					Gi = "";
				function Ji(e, t) {
					(Wi[Hi++] = $i), (Wi[Hi++] = qi), (qi = e), ($i = t);
				}
				function Zi(e, t, n) {
					(Ki[Xi++] = Yi), (Ki[Xi++] = Gi), (Ki[Xi++] = Qi), (Qi = e);
					var r = Yi;
					e = Gi;
					var i = 32 - at(r) - 1;
					(r &= ~(1 << i)), (n += 1);
					var o = 32 - at(t) + i;
					if (30 < o) {
						var a = i - (i % 5);
						(o = (r & ((1 << a) - 1)).toString(32)),
							(r >>= a),
							(i -= a),
							(Yi = (1 << (32 - at(t) + i)) | (n << i) | r),
							(Gi = o + e);
					} else (Yi = (1 << o) | (n << i) | r), (Gi = e);
				}
				function eo(e) {
					null !== e.return && (Ji(e, 1), Zi(e, 1, 0));
				}
				function to(e) {
					for (; e === qi; )
						(qi = Wi[--Hi]), (Wi[Hi] = null), ($i = Wi[--Hi]), (Wi[Hi] = null);
					for (; e === Qi; )
						(Qi = Ki[--Xi]),
							(Ki[Xi] = null),
							(Gi = Ki[--Xi]),
							(Ki[Xi] = null),
							(Yi = Ki[--Xi]),
							(Ki[Xi] = null);
				}
				var no = null,
					ro = null,
					io = !1,
					oo = null;
				function ao(e, t) {
					var n = Ru(5, null, null, 0);
					(n.elementType = "DELETED"),
						(n.stateNode = t),
						(n.return = e),
						null === (t = e.deletions)
							? ((e.deletions = [n]), (e.flags |= 16))
							: t.push(n);
				}
				function so(e, t) {
					switch (e.tag) {
						case 5:
							var n = e.type;
							return (
								null !==
									(t =
										1 !== t.nodeType ||
										n.toLowerCase() !== t.nodeName.toLowerCase()
											? null
											: t) &&
								((e.stateNode = t), (no = e), (ro = ui(t.firstChild)), !0)
							);
						case 6:
							return (
								null !==
									(t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
								((e.stateNode = t), (no = e), (ro = null), !0)
							);
						case 13:
							return (
								null !== (t = 8 !== t.nodeType ? null : t) &&
								((n = null !== Qi ? { id: Yi, overflow: Gi } : null),
								(e.memoizedState = {
									dehydrated: t,
									treeContext: n,
									retryLane: 1073741824,
								}),
								((n = Ru(18, null, null, 0)).stateNode = t),
								(n.return = e),
								(e.child = n),
								(no = e),
								(ro = null),
								!0)
							);
						default:
							return !1;
					}
				}
				function lo(e) {
					return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
				}
				function uo(e) {
					if (io) {
						var t = ro;
						if (t) {
							var n = t;
							if (!so(e, t)) {
								if (lo(e)) throw Error(o(418));
								t = ui(n.nextSibling);
								var r = no;
								t && so(e, t)
									? ao(r, n)
									: ((e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e));
							}
						} else {
							if (lo(e)) throw Error(o(418));
							(e.flags = (-4097 & e.flags) | 2), (io = !1), (no = e);
						}
					}
				}
				function co(e) {
					for (
						e = e.return;
						null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

					)
						e = e.return;
					no = e;
				}
				function fo(e) {
					if (e !== no) return !1;
					if (!io) return co(e), (io = !0), !1;
					var t;
					if (
						((t = 3 !== e.tag) &&
							!(t = 5 !== e.tag) &&
							(t =
								"head" !== (t = e.type) &&
								"body" !== t &&
								!ni(e.type, e.memoizedProps)),
						t && (t = ro))
					) {
						if (lo(e)) throw (ho(), Error(o(418)));
						for (; t; ) ao(e, t), (t = ui(t.nextSibling));
					}
					if ((co(e), 13 === e.tag)) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
							throw Error(o(317));
						e: {
							for (e = e.nextSibling, t = 0; e; ) {
								if (8 === e.nodeType) {
									var n = e.data;
									if ("/$" === n) {
										if (0 === t) {
											ro = ui(e.nextSibling);
											break e;
										}
										t--;
									} else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
								}
								e = e.nextSibling;
							}
							ro = null;
						}
					} else ro = no ? ui(e.stateNode.nextSibling) : null;
					return !0;
				}
				function ho() {
					for (var e = ro; e; ) e = ui(e.nextSibling);
				}
				function po() {
					(ro = no = null), (io = !1);
				}
				function mo(e) {
					null === oo ? (oo = [e]) : oo.push(e);
				}
				var go = w.ReactCurrentBatchConfig;
				function vo(e, t, n) {
					if (
						null !== (e = n.ref) &&
						"function" !== typeof e &&
						"object" !== typeof e
					) {
						if (n._owner) {
							if ((n = n._owner)) {
								if (1 !== n.tag) throw Error(o(309));
								var r = n.stateNode;
							}
							if (!r) throw Error(o(147, e));
							var i = r,
								a = "" + e;
							return null !== t &&
								null !== t.ref &&
								"function" === typeof t.ref &&
								t.ref._stringRef === a
								? t.ref
								: ((t = function (e) {
										var t = i.refs;
										null === e ? delete t[a] : (t[a] = e);
								  }),
								  (t._stringRef = a),
								  t);
						}
						if ("string" !== typeof e) throw Error(o(284));
						if (!n._owner) throw Error(o(290, e));
					}
					return e;
				}
				function yo(e, t) {
					throw (
						((e = Object.prototype.toString.call(t)),
						Error(
							o(
								31,
								"[object Object]" === e
									? "object with keys {" + Object.keys(t).join(", ") + "}"
									: e
							)
						))
					);
				}
				function bo(e) {
					return (0, e._init)(e._payload);
				}
				function wo(e) {
					function t(t, n) {
						if (e) {
							var r = t.deletions;
							null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
						}
					}
					function n(n, r) {
						if (!e) return null;
						for (; null !== r; ) t(n, r), (r = r.sibling);
						return null;
					}
					function r(e, t) {
						for (e = new Map(); null !== t; )
							null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
								(t = t.sibling);
						return e;
					}
					function i(e, t) {
						return ((e = Du(e, t)).index = 0), (e.sibling = null), e;
					}
					function a(t, n, r) {
						return (
							(t.index = r),
							e
								? null !== (r = t.alternate)
									? (r = r.index) < n
										? ((t.flags |= 2), n)
										: r
									: ((t.flags |= 2), n)
								: ((t.flags |= 1048576), n)
						);
					}
					function s(t) {
						return e && null === t.alternate && (t.flags |= 2), t;
					}
					function l(e, t, n, r) {
						return null === t || 6 !== t.tag
							? (((t = Nu(n, e.mode, r)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function u(e, t, n, r) {
						var o = n.type;
						return o === k
							? d(e, t, n.props.children, r, n.key)
							: null !== t &&
							  (t.elementType === o ||
									("object" === typeof o &&
										null !== o &&
										o.$$typeof === j &&
										bo(o) === t.type))
							? (((r = i(t, n.props)).ref = vo(e, t, n)), (r.return = e), r)
							: (((r = Lu(n.type, n.key, n.props, null, e.mode, r)).ref = vo(
									e,
									t,
									n
							  )),
							  (r.return = e),
							  r);
					}
					function c(e, t, n, r) {
						return null === t ||
							4 !== t.tag ||
							t.stateNode.containerInfo !== n.containerInfo ||
							t.stateNode.implementation !== n.implementation
							? (((t = Vu(n, e.mode, r)).return = e), t)
							: (((t = i(t, n.children || [])).return = e), t);
					}
					function d(e, t, n, r, o) {
						return null === t || 7 !== t.tag
							? (((t = Ou(n, e.mode, r, o)).return = e), t)
							: (((t = i(t, n)).return = e), t);
					}
					function f(e, t, n) {
						if (("string" === typeof t && "" !== t) || "number" === typeof t)
							return ((t = Nu("" + t, e.mode, n)).return = e), t;
						if ("object" === typeof t && null !== t) {
							switch (t.$$typeof) {
								case x:
									return (
										((n = Lu(t.type, t.key, t.props, null, e.mode, n)).ref = vo(
											e,
											null,
											t
										)),
										(n.return = e),
										n
									);
								case S:
									return ((t = Vu(t, e.mode, n)).return = e), t;
								case j:
									return f(e, (0, t._init)(t._payload), n);
							}
							if (te(t) || O(t))
								return ((t = Ou(t, e.mode, n, null)).return = e), t;
							yo(e, t);
						}
						return null;
					}
					function h(e, t, n, r) {
						var i = null !== t ? t.key : null;
						if (("string" === typeof n && "" !== n) || "number" === typeof n)
							return null !== i ? null : l(e, t, "" + n, r);
						if ("object" === typeof n && null !== n) {
							switch (n.$$typeof) {
								case x:
									return n.key === i ? u(e, t, n, r) : null;
								case S:
									return n.key === i ? c(e, t, n, r) : null;
								case j:
									return h(e, t, (i = n._init)(n._payload), r);
							}
							if (te(n) || O(n)) return null !== i ? null : d(e, t, n, r, null);
							yo(e, n);
						}
						return null;
					}
					function p(e, t, n, r, i) {
						if (("string" === typeof r && "" !== r) || "number" === typeof r)
							return l(t, (e = e.get(n) || null), "" + r, i);
						if ("object" === typeof r && null !== r) {
							switch (r.$$typeof) {
								case x:
									return u(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										i
									);
								case S:
									return c(
										t,
										(e = e.get(null === r.key ? n : r.key) || null),
										r,
										i
									);
								case j:
									return p(e, t, n, (0, r._init)(r._payload), i);
							}
							if (te(r) || O(r))
								return d(t, (e = e.get(n) || null), r, i, null);
							yo(t, r);
						}
						return null;
					}
					function m(i, o, s, l) {
						for (
							var u = null, c = null, d = o, m = (o = 0), g = null;
							null !== d && m < s.length;
							m++
						) {
							d.index > m ? ((g = d), (d = null)) : (g = d.sibling);
							var v = h(i, d, s[m], l);
							if (null === v) {
								null === d && (d = g);
								break;
							}
							e && d && null === v.alternate && t(i, d),
								(o = a(v, o, m)),
								null === c ? (u = v) : (c.sibling = v),
								(c = v),
								(d = g);
						}
						if (m === s.length) return n(i, d), io && Ji(i, m), u;
						if (null === d) {
							for (; m < s.length; m++)
								null !== (d = f(i, s[m], l)) &&
									((o = a(d, o, m)),
									null === c ? (u = d) : (c.sibling = d),
									(c = d));
							return io && Ji(i, m), u;
						}
						for (d = r(i, d); m < s.length; m++)
							null !== (g = p(d, i, m, s[m], l)) &&
								(e &&
									null !== g.alternate &&
									d.delete(null === g.key ? m : g.key),
								(o = a(g, o, m)),
								null === c ? (u = g) : (c.sibling = g),
								(c = g));
						return (
							e &&
								d.forEach(function (e) {
									return t(i, e);
								}),
							io && Ji(i, m),
							u
						);
					}
					function g(i, s, l, u) {
						var c = O(l);
						if ("function" !== typeof c) throw Error(o(150));
						if (null == (l = c.call(l))) throw Error(o(151));
						for (
							var d = (c = null), m = s, g = (s = 0), v = null, y = l.next();
							null !== m && !y.done;
							g++, y = l.next()
						) {
							m.index > g ? ((v = m), (m = null)) : (v = m.sibling);
							var b = h(i, m, y.value, u);
							if (null === b) {
								null === m && (m = v);
								break;
							}
							e && m && null === b.alternate && t(i, m),
								(s = a(b, s, g)),
								null === d ? (c = b) : (d.sibling = b),
								(d = b),
								(m = v);
						}
						if (y.done) return n(i, m), io && Ji(i, g), c;
						if (null === m) {
							for (; !y.done; g++, y = l.next())
								null !== (y = f(i, y.value, u)) &&
									((s = a(y, s, g)),
									null === d ? (c = y) : (d.sibling = y),
									(d = y));
							return io && Ji(i, g), c;
						}
						for (m = r(i, m); !y.done; g++, y = l.next())
							null !== (y = p(m, i, g, y.value, u)) &&
								(e &&
									null !== y.alternate &&
									m.delete(null === y.key ? g : y.key),
								(s = a(y, s, g)),
								null === d ? (c = y) : (d.sibling = y),
								(d = y));
						return (
							e &&
								m.forEach(function (e) {
									return t(i, e);
								}),
							io && Ji(i, g),
							c
						);
					}
					return function e(r, o, a, l) {
						if (
							("object" === typeof a &&
								null !== a &&
								a.type === k &&
								null === a.key &&
								(a = a.props.children),
							"object" === typeof a && null !== a)
						) {
							switch (a.$$typeof) {
								case x:
									e: {
										for (var u = a.key, c = o; null !== c; ) {
											if (c.key === u) {
												if ((u = a.type) === k) {
													if (7 === c.tag) {
														n(r, c.sibling),
															((o = i(c, a.props.children)).return = r),
															(r = o);
														break e;
													}
												} else if (
													c.elementType === u ||
													("object" === typeof u &&
														null !== u &&
														u.$$typeof === j &&
														bo(u) === c.type)
												) {
													n(r, c.sibling),
														((o = i(c, a.props)).ref = vo(r, c, a)),
														(o.return = r),
														(r = o);
													break e;
												}
												n(r, c);
												break;
											}
											t(r, c), (c = c.sibling);
										}
										a.type === k
											? (((o = Ou(a.props.children, r.mode, l, a.key)).return =
													r),
											  (r = o))
											: (((l = Lu(
													a.type,
													a.key,
													a.props,
													null,
													r.mode,
													l
											  )).ref = vo(r, o, a)),
											  (l.return = r),
											  (r = l));
									}
									return s(r);
								case S:
									e: {
										for (c = a.key; null !== o; ) {
											if (o.key === c) {
												if (
													4 === o.tag &&
													o.stateNode.containerInfo === a.containerInfo &&
													o.stateNode.implementation === a.implementation
												) {
													n(r, o.sibling),
														((o = i(o, a.children || [])).return = r),
														(r = o);
													break e;
												}
												n(r, o);
												break;
											}
											t(r, o), (o = o.sibling);
										}
										((o = Vu(a, r.mode, l)).return = r), (r = o);
									}
									return s(r);
								case j:
									return e(r, o, (c = a._init)(a._payload), l);
							}
							if (te(a)) return m(r, o, a, l);
							if (O(a)) return g(r, o, a, l);
							yo(r, a);
						}
						return ("string" === typeof a && "" !== a) || "number" === typeof a
							? ((a = "" + a),
							  null !== o && 6 === o.tag
									? (n(r, o.sibling), ((o = i(o, a)).return = r), (r = o))
									: (n(r, o), ((o = Nu(a, r.mode, l)).return = r), (r = o)),
							  s(r))
							: n(r, o);
					};
				}
				var xo = wo(!0),
					So = wo(!1),
					ko = Ei(null),
					Eo = null,
					Po = null,
					Co = null;
				function To() {
					Co = Po = Eo = null;
				}
				function Fo(e) {
					var t = ko.current;
					Pi(ko), (e._currentValue = t);
				}
				function _o(e, t, n) {
					for (; null !== e; ) {
						var r = e.alternate;
						if (
							((e.childLanes & t) !== t
								? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
								: null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
							e === n)
						)
							break;
						e = e.return;
					}
				}
				function Ao(e, t) {
					(Eo = e),
						(Co = Po = null),
						null !== (e = e.dependencies) &&
							null !== e.firstContext &&
							(0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
				}
				function Ro(e) {
					var t = e._currentValue;
					if (Co !== e)
						if (
							((e = { context: e, memoizedValue: t, next: null }), null === Po)
						) {
							if (null === Eo) throw Error(o(308));
							(Po = e), (Eo.dependencies = { lanes: 0, firstContext: e });
						} else Po = Po.next = e;
					return t;
				}
				var jo = null;
				function Do(e) {
					null === jo ? (jo = [e]) : jo.push(e);
				}
				function Lo(e, t, n, r) {
					var i = t.interleaved;
					return (
						null === i
							? ((n.next = n), Do(t))
							: ((n.next = i.next), (i.next = n)),
						(t.interleaved = n),
						Oo(e, r)
					);
				}
				function Oo(e, t) {
					e.lanes |= t;
					var n = e.alternate;
					for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
						(e.childLanes |= t),
							null !== (n = e.alternate) && (n.childLanes |= t),
							(n = e),
							(e = e.return);
					return 3 === n.tag ? n.stateNode : null;
				}
				var Mo = !1;
				function No(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: { pending: null, interleaved: null, lanes: 0 },
						effects: null,
					};
				}
				function Vo(e, t) {
					(e = e.updateQueue),
						t.updateQueue === e &&
							(t.updateQueue = {
								baseState: e.baseState,
								firstBaseUpdate: e.firstBaseUpdate,
								lastBaseUpdate: e.lastBaseUpdate,
								shared: e.shared,
								effects: e.effects,
							});
				}
				function zo(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null,
					};
				}
				function Bo(e, t, n) {
					var r = e.updateQueue;
					if (null === r) return null;
					if (((r = r.shared), 0 !== (2 & Fl))) {
						var i = r.pending;
						return (
							null === i ? (t.next = t) : ((t.next = i.next), (i.next = t)),
							(r.pending = t),
							Oo(e, n)
						);
					}
					return (
						null === (i = r.interleaved)
							? ((t.next = t), Do(r))
							: ((t.next = i.next), (i.next = t)),
						(r.interleaved = t),
						Oo(e, n)
					);
				}
				function Uo(e, t, n) {
					if (
						null !== (t = t.updateQueue) &&
						((t = t.shared), 0 !== (4194240 & n))
					) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				function Io(e, t) {
					var n = e.updateQueue,
						r = e.alternate;
					if (null !== r && n === (r = r.updateQueue)) {
						var i = null,
							o = null;
						if (null !== (n = n.firstBaseUpdate)) {
							do {
								var a = {
									eventTime: n.eventTime,
									lane: n.lane,
									tag: n.tag,
									payload: n.payload,
									callback: n.callback,
									next: null,
								};
								null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
							} while (null !== n);
							null === o ? (i = o = t) : (o = o.next = t);
						} else i = o = t;
						return (
							(n = {
								baseState: r.baseState,
								firstBaseUpdate: i,
								lastBaseUpdate: o,
								shared: r.shared,
								effects: r.effects,
							}),
							void (e.updateQueue = n)
						);
					}
					null === (e = n.lastBaseUpdate)
						? (n.firstBaseUpdate = t)
						: (e.next = t),
						(n.lastBaseUpdate = t);
				}
				function Wo(e, t, n, r) {
					var i = e.updateQueue;
					Mo = !1;
					var o = i.firstBaseUpdate,
						a = i.lastBaseUpdate,
						s = i.shared.pending;
					if (null !== s) {
						i.shared.pending = null;
						var l = s,
							u = l.next;
						(l.next = null), null === a ? (o = u) : (a.next = u), (a = l);
						var c = e.alternate;
						null !== c &&
							(s = (c = c.updateQueue).lastBaseUpdate) !== a &&
							(null === s ? (c.firstBaseUpdate = u) : (s.next = u),
							(c.lastBaseUpdate = l));
					}
					if (null !== o) {
						var d = i.baseState;
						for (a = 0, c = u = l = null, s = o; ; ) {
							var f = s.lane,
								h = s.eventTime;
							if ((r & f) === f) {
								null !== c &&
									(c = c.next =
										{
											eventTime: h,
											lane: 0,
											tag: s.tag,
											payload: s.payload,
											callback: s.callback,
											next: null,
										});
								e: {
									var p = e,
										m = s;
									switch (((f = t), (h = n), m.tag)) {
										case 1:
											if ("function" === typeof (p = m.payload)) {
												d = p.call(h, d, f);
												break e;
											}
											d = p;
											break e;
										case 3:
											p.flags = (-65537 & p.flags) | 128;
										case 0:
											if (
												null ===
													(f =
														"function" === typeof (p = m.payload)
															? p.call(h, d, f)
															: p) ||
												void 0 === f
											)
												break e;
											d = N({}, d, f);
											break e;
										case 2:
											Mo = !0;
									}
								}
								null !== s.callback &&
									0 !== s.lane &&
									((e.flags |= 64),
									null === (f = i.effects) ? (i.effects = [s]) : f.push(s));
							} else
								(h = {
									eventTime: h,
									lane: f,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null,
								}),
									null === c ? ((u = c = h), (l = d)) : (c = c.next = h),
									(a |= f);
							if (null === (s = s.next)) {
								if (null === (s = i.shared.pending)) break;
								(s = (f = s).next),
									(f.next = null),
									(i.lastBaseUpdate = f),
									(i.shared.pending = null);
							}
						}
						if (
							(null === c && (l = d),
							(i.baseState = l),
							(i.firstBaseUpdate = u),
							(i.lastBaseUpdate = c),
							null !== (t = i.shared.interleaved))
						) {
							i = t;
							do {
								(a |= i.lane), (i = i.next);
							} while (i !== t);
						} else null === o && (i.shared.lanes = 0);
						(Ml |= a), (e.lanes = a), (e.memoizedState = d);
					}
				}
				function Ho(e, t, n) {
					if (((e = t.effects), (t.effects = null), null !== e))
						for (t = 0; t < e.length; t++) {
							var r = e[t],
								i = r.callback;
							if (null !== i) {
								if (((r.callback = null), (r = n), "function" !== typeof i))
									throw Error(o(191, i));
								i.call(r);
							}
						}
				}
				var qo = {},
					$o = Ei(qo),
					Ko = Ei(qo),
					Xo = Ei(qo);
				function Qo(e) {
					if (e === qo) throw Error(o(174));
					return e;
				}
				function Yo(e, t) {
					switch ((Ci(Xo, t), Ci(Ko, e), Ci($o, qo), (e = t.nodeType))) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
							break;
						default:
							t = le(
								(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
								(e = e.tagName)
							);
					}
					Pi($o), Ci($o, t);
				}
				function Go() {
					Pi($o), Pi(Ko), Pi(Xo);
				}
				function Jo(e) {
					Qo(Xo.current);
					var t = Qo($o.current),
						n = le(t, e.type);
					t !== n && (Ci(Ko, e), Ci($o, n));
				}
				function Zo(e) {
					Ko.current === e && (Pi($o), Pi(Ko));
				}
				var ea = Ei(0);
				function ta(e) {
					for (var t = e; null !== t; ) {
						if (13 === t.tag) {
							var n = t.memoizedState;
							if (
								null !== n &&
								(null === (n = n.dehydrated) ||
									"$?" === n.data ||
									"$!" === n.data)
							)
								return t;
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 !== (128 & t.flags)) return t;
						} else if (null !== t.child) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; null === t.sibling; ) {
							if (null === t.return || t.return === e) return null;
							t = t.return;
						}
						(t.sibling.return = t.return), (t = t.sibling);
					}
					return null;
				}
				var na = [];
				function ra() {
					for (var e = 0; e < na.length; e++)
						na[e]._workInProgressVersionPrimary = null;
					na.length = 0;
				}
				var ia = w.ReactCurrentDispatcher,
					oa = w.ReactCurrentBatchConfig,
					aa = 0,
					sa = null,
					la = null,
					ua = null,
					ca = !1,
					da = !1,
					fa = 0,
					ha = 0;
				function pa() {
					throw Error(o(321));
				}
				function ma(e, t) {
					if (null === t) return !1;
					for (var n = 0; n < t.length && n < e.length; n++)
						if (!sr(e[n], t[n])) return !1;
					return !0;
				}
				function ga(e, t, n, r, i, a) {
					if (
						((aa = a),
						(sa = t),
						(t.memoizedState = null),
						(t.updateQueue = null),
						(t.lanes = 0),
						(ia.current = null === e || null === e.memoizedState ? Za : es),
						(e = n(r, i)),
						da)
					) {
						a = 0;
						do {
							if (((da = !1), (fa = 0), 25 <= a)) throw Error(o(301));
							(a += 1),
								(ua = la = null),
								(t.updateQueue = null),
								(ia.current = ts),
								(e = n(r, i));
						} while (da);
					}
					if (
						((ia.current = Ja),
						(t = null !== la && null !== la.next),
						(aa = 0),
						(ua = la = sa = null),
						(ca = !1),
						t)
					)
						throw Error(o(300));
					return e;
				}
				function va() {
					var e = 0 !== fa;
					return (fa = 0), e;
				}
				function ya() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null,
					};
					return (
						null === ua ? (sa.memoizedState = ua = e) : (ua = ua.next = e), ua
					);
				}
				function ba() {
					if (null === la) {
						var e = sa.alternate;
						e = null !== e ? e.memoizedState : null;
					} else e = la.next;
					var t = null === ua ? sa.memoizedState : ua.next;
					if (null !== t) (ua = t), (la = e);
					else {
						if (null === e) throw Error(o(310));
						(e = {
							memoizedState: (la = e).memoizedState,
							baseState: la.baseState,
							baseQueue: la.baseQueue,
							queue: la.queue,
							next: null,
						}),
							null === ua ? (sa.memoizedState = ua = e) : (ua = ua.next = e);
					}
					return ua;
				}
				function wa(e, t) {
					return "function" === typeof t ? t(e) : t;
				}
				function xa(e) {
					var t = ba(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = la,
						i = r.baseQueue,
						a = n.pending;
					if (null !== a) {
						if (null !== i) {
							var s = i.next;
							(i.next = a.next), (a.next = s);
						}
						(r.baseQueue = i = a), (n.pending = null);
					}
					if (null !== i) {
						(a = i.next), (r = r.baseState);
						var l = (s = null),
							u = null,
							c = a;
						do {
							var d = c.lane;
							if ((aa & d) === d)
								null !== u &&
									(u = u.next =
										{
											lane: 0,
											action: c.action,
											hasEagerState: c.hasEagerState,
											eagerState: c.eagerState,
											next: null,
										}),
									(r = c.hasEagerState ? c.eagerState : e(r, c.action));
							else {
								var f = {
									lane: d,
									action: c.action,
									hasEagerState: c.hasEagerState,
									eagerState: c.eagerState,
									next: null,
								};
								null === u ? ((l = u = f), (s = r)) : (u = u.next = f),
									(sa.lanes |= d),
									(Ml |= d);
							}
							c = c.next;
						} while (null !== c && c !== a);
						null === u ? (s = r) : (u.next = l),
							sr(r, t.memoizedState) || (bs = !0),
							(t.memoizedState = r),
							(t.baseState = s),
							(t.baseQueue = u),
							(n.lastRenderedState = r);
					}
					if (null !== (e = n.interleaved)) {
						i = e;
						do {
							(a = i.lane), (sa.lanes |= a), (Ml |= a), (i = i.next);
						} while (i !== e);
					} else null === i && (n.lanes = 0);
					return [t.memoizedState, n.dispatch];
				}
				function Sa(e) {
					var t = ba(),
						n = t.queue;
					if (null === n) throw Error(o(311));
					n.lastRenderedReducer = e;
					var r = n.dispatch,
						i = n.pending,
						a = t.memoizedState;
					if (null !== i) {
						n.pending = null;
						var s = (i = i.next);
						do {
							(a = e(a, s.action)), (s = s.next);
						} while (s !== i);
						sr(a, t.memoizedState) || (bs = !0),
							(t.memoizedState = a),
							null === t.baseQueue && (t.baseState = a),
							(n.lastRenderedState = a);
					}
					return [a, r];
				}
				function ka() {}
				function Ea(e, t) {
					var n = sa,
						r = ba(),
						i = t(),
						a = !sr(r.memoizedState, i);
					if (
						(a && ((r.memoizedState = i), (bs = !0)),
						(r = r.queue),
						Ma(Ta.bind(null, n, r, e), [e]),
						r.getSnapshot !== t ||
							a ||
							(null !== ua && 1 & ua.memoizedState.tag))
					) {
						if (
							((n.flags |= 2048),
							Ra(9, Ca.bind(null, n, r, i, t), void 0, null),
							null === _l)
						)
							throw Error(o(349));
						0 !== (30 & aa) || Pa(n, t, i);
					}
					return i;
				}
				function Pa(e, t, n) {
					(e.flags |= 16384),
						(e = { getSnapshot: t, value: n }),
						null === (t = sa.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (sa.updateQueue = t),
							  (t.stores = [e]))
							: null === (n = t.stores)
							? (t.stores = [e])
							: n.push(e);
				}
				function Ca(e, t, n, r) {
					(t.value = n), (t.getSnapshot = r), Fa(t) && _a(e);
				}
				function Ta(e, t, n) {
					return n(function () {
						Fa(t) && _a(e);
					});
				}
				function Fa(e) {
					var t = e.getSnapshot;
					e = e.value;
					try {
						var n = t();
						return !sr(e, n);
					} catch (r) {
						return !0;
					}
				}
				function _a(e) {
					var t = Oo(e, 1);
					null !== t && nu(t, e, 1, -1);
				}
				function Aa(e) {
					var t = ya();
					return (
						"function" === typeof e && (e = e()),
						(t.memoizedState = t.baseState = e),
						(e = {
							pending: null,
							interleaved: null,
							lanes: 0,
							dispatch: null,
							lastRenderedReducer: wa,
							lastRenderedState: e,
						}),
						(t.queue = e),
						(e = e.dispatch = Xa.bind(null, sa, e)),
						[t.memoizedState, e]
					);
				}
				function Ra(e, t, n, r) {
					return (
						(e = { tag: e, create: t, destroy: n, deps: r, next: null }),
						null === (t = sa.updateQueue)
							? ((t = { lastEffect: null, stores: null }),
							  (sa.updateQueue = t),
							  (t.lastEffect = e.next = e))
							: null === (n = t.lastEffect)
							? (t.lastEffect = e.next = e)
							: ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
						e
					);
				}
				function ja() {
					return ba().memoizedState;
				}
				function Da(e, t, n, r) {
					var i = ya();
					(sa.flags |= e),
						(i.memoizedState = Ra(1 | t, n, void 0, void 0 === r ? null : r));
				}
				function La(e, t, n, r) {
					var i = ba();
					r = void 0 === r ? null : r;
					var o = void 0;
					if (null !== la) {
						var a = la.memoizedState;
						if (((o = a.destroy), null !== r && ma(r, a.deps)))
							return void (i.memoizedState = Ra(t, n, o, r));
					}
					(sa.flags |= e), (i.memoizedState = Ra(1 | t, n, o, r));
				}
				function Oa(e, t) {
					return Da(8390656, 8, e, t);
				}
				function Ma(e, t) {
					return La(2048, 8, e, t);
				}
				function Na(e, t) {
					return La(4, 2, e, t);
				}
				function Va(e, t) {
					return La(4, 4, e, t);
				}
				function za(e, t) {
					return "function" === typeof t
						? ((e = e()),
						  t(e),
						  function () {
								t(null);
						  })
						: null !== t && void 0 !== t
						? ((e = e()),
						  (t.current = e),
						  function () {
								t.current = null;
						  })
						: void 0;
				}
				function Ba(e, t, n) {
					return (
						(n = null !== n && void 0 !== n ? n.concat([e]) : null),
						La(4, 4, za.bind(null, t, e), n)
					);
				}
				function Ua() {}
				function Ia(e, t) {
					var n = ba();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ma(t, r[1])
						? r[0]
						: ((n.memoizedState = [e, t]), e);
				}
				function Wa(e, t) {
					var n = ba();
					t = void 0 === t ? null : t;
					var r = n.memoizedState;
					return null !== r && null !== t && ma(t, r[1])
						? r[0]
						: ((e = e()), (n.memoizedState = [e, t]), e);
				}
				function Ha(e, t, n) {
					return 0 === (21 & aa)
						? (e.baseState && ((e.baseState = !1), (bs = !0)),
						  (e.memoizedState = n))
						: (sr(n, t) ||
								((n = mt()), (sa.lanes |= n), (Ml |= n), (e.baseState = !0)),
						  t);
				}
				function qa(e, t) {
					var n = bt;
					(bt = 0 !== n && 4 > n ? n : 4), e(!0);
					var r = oa.transition;
					oa.transition = {};
					try {
						e(!1), t();
					} finally {
						(bt = n), (oa.transition = r);
					}
				}
				function $a() {
					return ba().memoizedState;
				}
				function Ka(e, t, n) {
					var r = tu(e);
					if (
						((n = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						}),
						Qa(e))
					)
						Ya(t, n);
					else if (null !== (n = Lo(e, t, n, r))) {
						nu(n, e, r, eu()), Ga(n, t, r);
					}
				}
				function Xa(e, t, n) {
					var r = tu(e),
						i = {
							lane: r,
							action: n,
							hasEagerState: !1,
							eagerState: null,
							next: null,
						};
					if (Qa(e)) Ya(t, i);
					else {
						var o = e.alternate;
						if (
							0 === e.lanes &&
							(null === o || 0 === o.lanes) &&
							null !== (o = t.lastRenderedReducer)
						)
							try {
								var a = t.lastRenderedState,
									s = o(a, n);
								if (((i.hasEagerState = !0), (i.eagerState = s), sr(s, a))) {
									var l = t.interleaved;
									return (
										null === l
											? ((i.next = i), Do(t))
											: ((i.next = l.next), (l.next = i)),
										void (t.interleaved = i)
									);
								}
							} catch (u) {}
						null !== (n = Lo(e, t, i, r)) &&
							(nu(n, e, r, (i = eu())), Ga(n, t, r));
					}
				}
				function Qa(e) {
					var t = e.alternate;
					return e === sa || (null !== t && t === sa);
				}
				function Ya(e, t) {
					da = ca = !0;
					var n = e.pending;
					null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
						(e.pending = t);
				}
				function Ga(e, t, n) {
					if (0 !== (4194240 & n)) {
						var r = t.lanes;
						(n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
					}
				}
				var Ja = {
						readContext: Ro,
						useCallback: pa,
						useContext: pa,
						useEffect: pa,
						useImperativeHandle: pa,
						useInsertionEffect: pa,
						useLayoutEffect: pa,
						useMemo: pa,
						useReducer: pa,
						useRef: pa,
						useState: pa,
						useDebugValue: pa,
						useDeferredValue: pa,
						useTransition: pa,
						useMutableSource: pa,
						useSyncExternalStore: pa,
						useId: pa,
						unstable_isNewReconciler: !1,
					},
					Za = {
						readContext: Ro,
						useCallback: function (e, t) {
							return (ya().memoizedState = [e, void 0 === t ? null : t]), e;
						},
						useContext: Ro,
						useEffect: Oa,
						useImperativeHandle: function (e, t, n) {
							return (
								(n = null !== n && void 0 !== n ? n.concat([e]) : null),
								Da(4194308, 4, za.bind(null, t, e), n)
							);
						},
						useLayoutEffect: function (e, t) {
							return Da(4194308, 4, e, t);
						},
						useInsertionEffect: function (e, t) {
							return Da(4, 2, e, t);
						},
						useMemo: function (e, t) {
							var n = ya();
							return (
								(t = void 0 === t ? null : t),
								(e = e()),
								(n.memoizedState = [e, t]),
								e
							);
						},
						useReducer: function (e, t, n) {
							var r = ya();
							return (
								(t = void 0 !== n ? n(t) : t),
								(r.memoizedState = r.baseState = t),
								(e = {
									pending: null,
									interleaved: null,
									lanes: 0,
									dispatch: null,
									lastRenderedReducer: e,
									lastRenderedState: t,
								}),
								(r.queue = e),
								(e = e.dispatch = Ka.bind(null, sa, e)),
								[r.memoizedState, e]
							);
						},
						useRef: function (e) {
							return (e = { current: e }), (ya().memoizedState = e);
						},
						useState: Aa,
						useDebugValue: Ua,
						useDeferredValue: function (e) {
							return (ya().memoizedState = e);
						},
						useTransition: function () {
							var e = Aa(!1),
								t = e[0];
							return (
								(e = qa.bind(null, e[1])), (ya().memoizedState = e), [t, e]
							);
						},
						useMutableSource: function () {},
						useSyncExternalStore: function (e, t, n) {
							var r = sa,
								i = ya();
							if (io) {
								if (void 0 === n) throw Error(o(407));
								n = n();
							} else {
								if (((n = t()), null === _l)) throw Error(o(349));
								0 !== (30 & aa) || Pa(r, t, n);
							}
							i.memoizedState = n;
							var a = { value: n, getSnapshot: t };
							return (
								(i.queue = a),
								Oa(Ta.bind(null, r, a, e), [e]),
								(r.flags |= 2048),
								Ra(9, Ca.bind(null, r, a, n, t), void 0, null),
								n
							);
						},
						useId: function () {
							var e = ya(),
								t = _l.identifierPrefix;
							if (io) {
								var n = Gi;
								(t =
									":" +
									t +
									"R" +
									(n = (Yi & ~(1 << (32 - at(Yi) - 1))).toString(32) + n)),
									0 < (n = fa++) && (t += "H" + n.toString(32)),
									(t += ":");
							} else t = ":" + t + "r" + (n = ha++).toString(32) + ":";
							return (e.memoizedState = t);
						},
						unstable_isNewReconciler: !1,
					},
					es = {
						readContext: Ro,
						useCallback: Ia,
						useContext: Ro,
						useEffect: Ma,
						useImperativeHandle: Ba,
						useInsertionEffect: Na,
						useLayoutEffect: Va,
						useMemo: Wa,
						useReducer: xa,
						useRef: ja,
						useState: function () {
							return xa(wa);
						},
						useDebugValue: Ua,
						useDeferredValue: function (e) {
							return Ha(ba(), la.memoizedState, e);
						},
						useTransition: function () {
							return [xa(wa)[0], ba().memoizedState];
						},
						useMutableSource: ka,
						useSyncExternalStore: Ea,
						useId: $a,
						unstable_isNewReconciler: !1,
					},
					ts = {
						readContext: Ro,
						useCallback: Ia,
						useContext: Ro,
						useEffect: Ma,
						useImperativeHandle: Ba,
						useInsertionEffect: Na,
						useLayoutEffect: Va,
						useMemo: Wa,
						useReducer: Sa,
						useRef: ja,
						useState: function () {
							return Sa(wa);
						},
						useDebugValue: Ua,
						useDeferredValue: function (e) {
							var t = ba();
							return null === la
								? (t.memoizedState = e)
								: Ha(t, la.memoizedState, e);
						},
						useTransition: function () {
							return [Sa(wa)[0], ba().memoizedState];
						},
						useMutableSource: ka,
						useSyncExternalStore: Ea,
						useId: $a,
						unstable_isNewReconciler: !1,
					};
				function ns(e, t) {
					if (e && e.defaultProps) {
						for (var n in ((t = N({}, t)), (e = e.defaultProps)))
							void 0 === t[n] && (t[n] = e[n]);
						return t;
					}
					return t;
				}
				function rs(e, t, n, r) {
					(n =
						null === (n = n(r, (t = e.memoizedState))) || void 0 === n
							? t
							: N({}, t, n)),
						(e.memoizedState = n),
						0 === e.lanes && (e.updateQueue.baseState = n);
				}
				var is = {
					isMounted: function (e) {
						return !!(e = e._reactInternals) && Ie(e) === e;
					},
					enqueueSetState: function (e, t, n) {
						e = e._reactInternals;
						var r = eu(),
							i = tu(e),
							o = zo(r, i);
						(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Bo(e, o, i)) && (nu(t, e, i, r), Uo(t, e, i));
					},
					enqueueReplaceState: function (e, t, n) {
						e = e._reactInternals;
						var r = eu(),
							i = tu(e),
							o = zo(r, i);
						(o.tag = 1),
							(o.payload = t),
							void 0 !== n && null !== n && (o.callback = n),
							null !== (t = Bo(e, o, i)) && (nu(t, e, i, r), Uo(t, e, i));
					},
					enqueueForceUpdate: function (e, t) {
						e = e._reactInternals;
						var n = eu(),
							r = tu(e),
							i = zo(n, r);
						(i.tag = 2),
							void 0 !== t && null !== t && (i.callback = t),
							null !== (t = Bo(e, i, r)) && (nu(t, e, r, n), Uo(t, e, r));
					},
				};
				function os(e, t, n, r, i, o, a) {
					return "function" === typeof (e = e.stateNode).shouldComponentUpdate
						? e.shouldComponentUpdate(r, o, a)
						: !t.prototype ||
								!t.prototype.isPureReactComponent ||
								!lr(n, r) ||
								!lr(i, o);
				}
				function as(e, t, n) {
					var r = !1,
						i = Ti,
						o = t.contextType;
					return (
						"object" === typeof o && null !== o
							? (o = Ro(o))
							: ((i = ji(t) ? Ai : Fi.current),
							  (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
									? Ri(e, i)
									: Ti)),
						(t = new t(n, o)),
						(e.memoizedState =
							null !== t.state && void 0 !== t.state ? t.state : null),
						(t.updater = is),
						(e.stateNode = t),
						(t._reactInternals = e),
						r &&
							(((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
								i),
							(e.__reactInternalMemoizedMaskedChildContext = o)),
						t
					);
				}
				function ss(e, t, n, r) {
					(e = t.state),
						"function" === typeof t.componentWillReceiveProps &&
							t.componentWillReceiveProps(n, r),
						"function" === typeof t.UNSAFE_componentWillReceiveProps &&
							t.UNSAFE_componentWillReceiveProps(n, r),
						t.state !== e && is.enqueueReplaceState(t, t.state, null);
				}
				function ls(e, t, n, r) {
					var i = e.stateNode;
					(i.props = n), (i.state = e.memoizedState), (i.refs = {}), No(e);
					var o = t.contextType;
					"object" === typeof o && null !== o
						? (i.context = Ro(o))
						: ((o = ji(t) ? Ai : Fi.current), (i.context = Ri(e, o))),
						(i.state = e.memoizedState),
						"function" === typeof (o = t.getDerivedStateFromProps) &&
							(rs(e, t, o, n), (i.state = e.memoizedState)),
						"function" === typeof t.getDerivedStateFromProps ||
							"function" === typeof i.getSnapshotBeforeUpdate ||
							("function" !== typeof i.UNSAFE_componentWillMount &&
								"function" !== typeof i.componentWillMount) ||
							((t = i.state),
							"function" === typeof i.componentWillMount &&
								i.componentWillMount(),
							"function" === typeof i.UNSAFE_componentWillMount &&
								i.UNSAFE_componentWillMount(),
							t !== i.state && is.enqueueReplaceState(i, i.state, null),
							Wo(e, n, i, r),
							(i.state = e.memoizedState)),
						"function" === typeof i.componentDidMount && (e.flags |= 4194308);
				}
				function us(e, t) {
					try {
						var n = "",
							r = t;
						do {
							(n += U(r)), (r = r.return);
						} while (r);
						var i = n;
					} catch (o) {
						i = "\nError generating stack: " + o.message + "\n" + o.stack;
					}
					return { value: e, source: t, stack: i, digest: null };
				}
				function cs(e, t, n) {
					return {
						value: e,
						source: null,
						stack: null != n ? n : null,
						digest: null != t ? t : null,
					};
				}
				function ds(e, t) {
					try {
						console.error(t.value);
					} catch (n) {
						setTimeout(function () {
							throw n;
						});
					}
				}
				var fs = "function" === typeof WeakMap ? WeakMap : Map;
				function hs(e, t, n) {
					((n = zo(-1, n)).tag = 3), (n.payload = { element: null });
					var r = t.value;
					return (
						(n.callback = function () {
							Hl || ((Hl = !0), (ql = r)), ds(0, t);
						}),
						n
					);
				}
				function ps(e, t, n) {
					(n = zo(-1, n)).tag = 3;
					var r = e.type.getDerivedStateFromError;
					if ("function" === typeof r) {
						var i = t.value;
						(n.payload = function () {
							return r(i);
						}),
							(n.callback = function () {
								ds(0, t);
							});
					}
					var o = e.stateNode;
					return (
						null !== o &&
							"function" === typeof o.componentDidCatch &&
							(n.callback = function () {
								ds(0, t),
									"function" !== typeof r &&
										(null === $l ? ($l = new Set([this])) : $l.add(this));
								var e = t.stack;
								this.componentDidCatch(t.value, {
									componentStack: null !== e ? e : "",
								});
							}),
						n
					);
				}
				function ms(e, t, n) {
					var r = e.pingCache;
					if (null === r) {
						r = e.pingCache = new fs();
						var i = new Set();
						r.set(t, i);
					} else void 0 === (i = r.get(t)) && ((i = new Set()), r.set(t, i));
					i.has(n) || (i.add(n), (e = Pu.bind(null, e, t, n)), t.then(e, e));
				}
				function gs(e) {
					do {
						var t;
						if (
							((t = 13 === e.tag) &&
								(t = null === (t = e.memoizedState) || null !== t.dehydrated),
							t)
						)
							return e;
						e = e.return;
					} while (null !== e);
					return null;
				}
				function vs(e, t, n, r, i) {
					return 0 === (1 & e.mode)
						? (e === t
								? (e.flags |= 65536)
								: ((e.flags |= 128),
								  (n.flags |= 131072),
								  (n.flags &= -52805),
								  1 === n.tag &&
										(null === n.alternate
											? (n.tag = 17)
											: (((t = zo(-1, 1)).tag = 2), Bo(n, t, 1))),
								  (n.lanes |= 1)),
						  e)
						: ((e.flags |= 65536), (e.lanes = i), e);
				}
				var ys = w.ReactCurrentOwner,
					bs = !1;
				function ws(e, t, n, r) {
					t.child = null === e ? So(t, null, n, r) : xo(t, e.child, n, r);
				}
				function xs(e, t, n, r, i) {
					n = n.render;
					var o = t.ref;
					return (
						Ao(t, i),
						(r = ga(e, t, n, r, o, i)),
						(n = va()),
						null === e || bs
							? (io && n && eo(t), (t.flags |= 1), ws(e, t, r, i), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~i),
							  Hs(e, t, i))
					);
				}
				function Ss(e, t, n, r, i) {
					if (null === e) {
						var o = n.type;
						return "function" !== typeof o ||
							ju(o) ||
							void 0 !== o.defaultProps ||
							null !== n.compare ||
							void 0 !== n.defaultProps
							? (((e = Lu(n.type, null, r, t, t.mode, i)).ref = t.ref),
							  (e.return = t),
							  (t.child = e))
							: ((t.tag = 15), (t.type = o), ks(e, t, o, r, i));
					}
					if (((o = e.child), 0 === (e.lanes & i))) {
						var a = o.memoizedProps;
						if (
							(n = null !== (n = n.compare) ? n : lr)(a, r) &&
							e.ref === t.ref
						)
							return Hs(e, t, i);
					}
					return (
						(t.flags |= 1),
						((e = Du(o, r)).ref = t.ref),
						(e.return = t),
						(t.child = e)
					);
				}
				function ks(e, t, n, r, i) {
					if (null !== e) {
						var o = e.memoizedProps;
						if (lr(o, r) && e.ref === t.ref) {
							if (((bs = !1), (t.pendingProps = r = o), 0 === (e.lanes & i)))
								return (t.lanes = e.lanes), Hs(e, t, i);
							0 !== (131072 & e.flags) && (bs = !0);
						}
					}
					return Cs(e, t, n, r, i);
				}
				function Es(e, t, n) {
					var r = t.pendingProps,
						i = r.children,
						o = null !== e ? e.memoizedState : null;
					if ("hidden" === r.mode)
						if (0 === (1 & t.mode))
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								Ci(Dl, jl),
								(jl |= n);
						else {
							if (0 === (1073741824 & n))
								return (
									(e = null !== o ? o.baseLanes | n : n),
									(t.lanes = t.childLanes = 1073741824),
									(t.memoizedState = {
										baseLanes: e,
										cachePool: null,
										transitions: null,
									}),
									(t.updateQueue = null),
									Ci(Dl, jl),
									(jl |= e),
									null
								);
							(t.memoizedState = {
								baseLanes: 0,
								cachePool: null,
								transitions: null,
							}),
								(r = null !== o ? o.baseLanes : n),
								Ci(Dl, jl),
								(jl |= r);
						}
					else
						null !== o
							? ((r = o.baseLanes | n), (t.memoizedState = null))
							: (r = n),
							Ci(Dl, jl),
							(jl |= r);
					return ws(e, t, i, n), t.child;
				}
				function Ps(e, t) {
					var n = t.ref;
					((null === e && null !== n) || (null !== e && e.ref !== n)) &&
						((t.flags |= 512), (t.flags |= 2097152));
				}
				function Cs(e, t, n, r, i) {
					var o = ji(n) ? Ai : Fi.current;
					return (
						(o = Ri(t, o)),
						Ao(t, i),
						(n = ga(e, t, n, r, o, i)),
						(r = va()),
						null === e || bs
							? (io && r && eo(t), (t.flags |= 1), ws(e, t, n, i), t.child)
							: ((t.updateQueue = e.updateQueue),
							  (t.flags &= -2053),
							  (e.lanes &= ~i),
							  Hs(e, t, i))
					);
				}
				function Ts(e, t, n, r, i) {
					if (ji(n)) {
						var o = !0;
						Mi(t);
					} else o = !1;
					if ((Ao(t, i), null === t.stateNode))
						Ws(e, t), as(t, n, r), ls(t, n, r, i), (r = !0);
					else if (null === e) {
						var a = t.stateNode,
							s = t.memoizedProps;
						a.props = s;
						var l = a.context,
							u = n.contextType;
						"object" === typeof u && null !== u
							? (u = Ro(u))
							: (u = Ri(t, (u = ji(n) ? Ai : Fi.current)));
						var c = n.getDerivedStateFromProps,
							d =
								"function" === typeof c ||
								"function" === typeof a.getSnapshotBeforeUpdate;
						d ||
							("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof a.componentWillReceiveProps) ||
							((s !== r || l !== u) && ss(t, a, r, u)),
							(Mo = !1);
						var f = t.memoizedState;
						(a.state = f),
							Wo(t, r, a, i),
							(l = t.memoizedState),
							s !== r || f !== l || _i.current || Mo
								? ("function" === typeof c &&
										(rs(t, n, c, r), (l = t.memoizedState)),
								  (s = Mo || os(t, n, s, r, f, l, u))
										? (d ||
												("function" !== typeof a.UNSAFE_componentWillMount &&
													"function" !== typeof a.componentWillMount) ||
												("function" === typeof a.componentWillMount &&
													a.componentWillMount(),
												"function" === typeof a.UNSAFE_componentWillMount &&
													a.UNSAFE_componentWillMount()),
										  "function" === typeof a.componentDidMount &&
												(t.flags |= 4194308))
										: ("function" === typeof a.componentDidMount &&
												(t.flags |= 4194308),
										  (t.memoizedProps = r),
										  (t.memoizedState = l)),
								  (a.props = r),
								  (a.state = l),
								  (a.context = u),
								  (r = s))
								: ("function" === typeof a.componentDidMount &&
										(t.flags |= 4194308),
								  (r = !1));
					} else {
						(a = t.stateNode),
							Vo(e, t),
							(s = t.memoizedProps),
							(u = t.type === t.elementType ? s : ns(t.type, s)),
							(a.props = u),
							(d = t.pendingProps),
							(f = a.context),
							"object" === typeof (l = n.contextType) && null !== l
								? (l = Ro(l))
								: (l = Ri(t, (l = ji(n) ? Ai : Fi.current)));
						var h = n.getDerivedStateFromProps;
						(c =
							"function" === typeof h ||
							"function" === typeof a.getSnapshotBeforeUpdate) ||
							("function" !== typeof a.UNSAFE_componentWillReceiveProps &&
								"function" !== typeof a.componentWillReceiveProps) ||
							((s !== d || f !== l) && ss(t, a, r, l)),
							(Mo = !1),
							(f = t.memoizedState),
							(a.state = f),
							Wo(t, r, a, i);
						var p = t.memoizedState;
						s !== d || f !== p || _i.current || Mo
							? ("function" === typeof h &&
									(rs(t, n, h, r), (p = t.memoizedState)),
							  (u = Mo || os(t, n, u, r, f, p, l) || !1)
									? (c ||
											("function" !== typeof a.UNSAFE_componentWillUpdate &&
												"function" !== typeof a.componentWillUpdate) ||
											("function" === typeof a.componentWillUpdate &&
												a.componentWillUpdate(r, p, l),
											"function" === typeof a.UNSAFE_componentWillUpdate &&
												a.UNSAFE_componentWillUpdate(r, p, l)),
									  "function" === typeof a.componentDidUpdate &&
											(t.flags |= 4),
									  "function" === typeof a.getSnapshotBeforeUpdate &&
											(t.flags |= 1024))
									: ("function" !== typeof a.componentDidUpdate ||
											(s === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 4),
									  "function" !== typeof a.getSnapshotBeforeUpdate ||
											(s === e.memoizedProps && f === e.memoizedState) ||
											(t.flags |= 1024),
									  (t.memoizedProps = r),
									  (t.memoizedState = p)),
							  (a.props = r),
							  (a.state = p),
							  (a.context = l),
							  (r = u))
							: ("function" !== typeof a.componentDidUpdate ||
									(s === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 4),
							  "function" !== typeof a.getSnapshotBeforeUpdate ||
									(s === e.memoizedProps && f === e.memoizedState) ||
									(t.flags |= 1024),
							  (r = !1));
					}
					return Fs(e, t, n, r, o, i);
				}
				function Fs(e, t, n, r, i, o) {
					Ps(e, t);
					var a = 0 !== (128 & t.flags);
					if (!r && !a) return i && Ni(t, n, !1), Hs(e, t, o);
					(r = t.stateNode), (ys.current = t);
					var s =
						a && "function" !== typeof n.getDerivedStateFromError
							? null
							: r.render();
					return (
						(t.flags |= 1),
						null !== e && a
							? ((t.child = xo(t, e.child, null, o)),
							  (t.child = xo(t, null, s, o)))
							: ws(e, t, s, o),
						(t.memoizedState = r.state),
						i && Ni(t, n, !0),
						t.child
					);
				}
				function _s(e) {
					var t = e.stateNode;
					t.pendingContext
						? Li(0, t.pendingContext, t.pendingContext !== t.context)
						: t.context && Li(0, t.context, !1),
						Yo(e, t.containerInfo);
				}
				function As(e, t, n, r, i) {
					return po(), mo(i), (t.flags |= 256), ws(e, t, n, r), t.child;
				}
				var Rs,
					js,
					Ds,
					Ls,
					Os = { dehydrated: null, treeContext: null, retryLane: 0 };
				function Ms(e) {
					return { baseLanes: e, cachePool: null, transitions: null };
				}
				function Ns(e, t, n) {
					var r,
						i = t.pendingProps,
						a = ea.current,
						s = !1,
						l = 0 !== (128 & t.flags);
					if (
						((r = l) ||
							(r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)),
						r
							? ((s = !0), (t.flags &= -129))
							: (null !== e && null === e.memoizedState) || (a |= 1),
						Ci(ea, 1 & a),
						null === e)
					)
						return (
							uo(t),
							null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
								? (0 === (1 & t.mode)
										? (t.lanes = 1)
										: "$!" === e.data
										? (t.lanes = 8)
										: (t.lanes = 1073741824),
								  null)
								: ((l = i.children),
								  (e = i.fallback),
								  s
										? ((i = t.mode),
										  (s = t.child),
										  (l = { mode: "hidden", children: l }),
										  0 === (1 & i) && null !== s
												? ((s.childLanes = 0), (s.pendingProps = l))
												: (s = Mu(l, i, 0, null)),
										  (e = Ou(e, i, n, null)),
										  (s.return = t),
										  (e.return = t),
										  (s.sibling = e),
										  (t.child = s),
										  (t.child.memoizedState = Ms(n)),
										  (t.memoizedState = Os),
										  e)
										: Vs(t, l))
						);
					if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated))
						return (function (e, t, n, r, i, a, s) {
							if (n)
								return 256 & t.flags
									? ((t.flags &= -257), zs(e, t, s, (r = cs(Error(o(422))))))
									: null !== t.memoizedState
									? ((t.child = e.child), (t.flags |= 128), null)
									: ((a = r.fallback),
									  (i = t.mode),
									  (r = Mu(
											{ mode: "visible", children: r.children },
											i,
											0,
											null
									  )),
									  ((a = Ou(a, i, s, null)).flags |= 2),
									  (r.return = t),
									  (a.return = t),
									  (r.sibling = a),
									  (t.child = r),
									  0 !== (1 & t.mode) && xo(t, e.child, null, s),
									  (t.child.memoizedState = Ms(s)),
									  (t.memoizedState = Os),
									  a);
							if (0 === (1 & t.mode)) return zs(e, t, s, null);
							if ("$!" === i.data) {
								if ((r = i.nextSibling && i.nextSibling.dataset))
									var l = r.dgst;
								return (
									(r = l), zs(e, t, s, (r = cs((a = Error(o(419))), r, void 0)))
								);
							}
							if (((l = 0 !== (s & e.childLanes)), bs || l)) {
								if (null !== (r = _l)) {
									switch (s & -s) {
										case 4:
											i = 2;
											break;
										case 16:
											i = 8;
											break;
										case 64:
										case 128:
										case 256:
										case 512:
										case 1024:
										case 2048:
										case 4096:
										case 8192:
										case 16384:
										case 32768:
										case 65536:
										case 131072:
										case 262144:
										case 524288:
										case 1048576:
										case 2097152:
										case 4194304:
										case 8388608:
										case 16777216:
										case 33554432:
										case 67108864:
											i = 32;
											break;
										case 536870912:
											i = 268435456;
											break;
										default:
											i = 0;
									}
									0 !== (i = 0 !== (i & (r.suspendedLanes | s)) ? 0 : i) &&
										i !== a.retryLane &&
										((a.retryLane = i), Oo(e, i), nu(r, e, i, -1));
								}
								return mu(), zs(e, t, s, (r = cs(Error(o(421)))));
							}
							return "$?" === i.data
								? ((t.flags |= 128),
								  (t.child = e.child),
								  (t = Tu.bind(null, e)),
								  (i._reactRetry = t),
								  null)
								: ((e = a.treeContext),
								  (ro = ui(i.nextSibling)),
								  (no = t),
								  (io = !0),
								  (oo = null),
								  null !== e &&
										((Ki[Xi++] = Yi),
										(Ki[Xi++] = Gi),
										(Ki[Xi++] = Qi),
										(Yi = e.id),
										(Gi = e.overflow),
										(Qi = t)),
								  (t = Vs(t, r.children)),
								  (t.flags |= 4096),
								  t);
						})(e, t, l, i, r, a, n);
					if (s) {
						(s = i.fallback), (l = t.mode), (r = (a = e.child).sibling);
						var u = { mode: "hidden", children: i.children };
						return (
							0 === (1 & l) && t.child !== a
								? (((i = t.child).childLanes = 0),
								  (i.pendingProps = u),
								  (t.deletions = null))
								: ((i = Du(a, u)).subtreeFlags = 14680064 & a.subtreeFlags),
							null !== r
								? (s = Du(r, s))
								: ((s = Ou(s, l, n, null)).flags |= 2),
							(s.return = t),
							(i.return = t),
							(i.sibling = s),
							(t.child = i),
							(i = s),
							(s = t.child),
							(l =
								null === (l = e.child.memoizedState)
									? Ms(n)
									: {
											baseLanes: l.baseLanes | n,
											cachePool: null,
											transitions: l.transitions,
									  }),
							(s.memoizedState = l),
							(s.childLanes = e.childLanes & ~n),
							(t.memoizedState = Os),
							i
						);
					}
					return (
						(e = (s = e.child).sibling),
						(i = Du(s, { mode: "visible", children: i.children })),
						0 === (1 & t.mode) && (i.lanes = n),
						(i.return = t),
						(i.sibling = null),
						null !== e &&
							(null === (n = t.deletions)
								? ((t.deletions = [e]), (t.flags |= 16))
								: n.push(e)),
						(t.child = i),
						(t.memoizedState = null),
						i
					);
				}
				function Vs(e, t) {
					return (
						((t = Mu(
							{ mode: "visible", children: t },
							e.mode,
							0,
							null
						)).return = e),
						(e.child = t)
					);
				}
				function zs(e, t, n, r) {
					return (
						null !== r && mo(r),
						xo(t, e.child, null, n),
						((e = Vs(t, t.pendingProps.children)).flags |= 2),
						(t.memoizedState = null),
						e
					);
				}
				function Bs(e, t, n) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), _o(e.return, t, n);
				}
				function Us(e, t, n, r, i) {
					var o = e.memoizedState;
					null === o
						? (e.memoizedState = {
								isBackwards: t,
								rendering: null,
								renderingStartTime: 0,
								last: r,
								tail: n,
								tailMode: i,
						  })
						: ((o.isBackwards = t),
						  (o.rendering = null),
						  (o.renderingStartTime = 0),
						  (o.last = r),
						  (o.tail = n),
						  (o.tailMode = i));
				}
				function Is(e, t, n) {
					var r = t.pendingProps,
						i = r.revealOrder,
						o = r.tail;
					if ((ws(e, t, r.children, n), 0 !== (2 & (r = ea.current))))
						(r = (1 & r) | 2), (t.flags |= 128);
					else {
						if (null !== e && 0 !== (128 & e.flags))
							e: for (e = t.child; null !== e; ) {
								if (13 === e.tag) null !== e.memoizedState && Bs(e, n, t);
								else if (19 === e.tag) Bs(e, n, t);
								else if (null !== e.child) {
									(e.child.return = e), (e = e.child);
									continue;
								}
								if (e === t) break e;
								for (; null === e.sibling; ) {
									if (null === e.return || e.return === t) break e;
									e = e.return;
								}
								(e.sibling.return = e.return), (e = e.sibling);
							}
						r &= 1;
					}
					if ((Ci(ea, r), 0 === (1 & t.mode))) t.memoizedState = null;
					else
						switch (i) {
							case "forwards":
								for (n = t.child, i = null; null !== n; )
									null !== (e = n.alternate) && null === ta(e) && (i = n),
										(n = n.sibling);
								null === (n = i)
									? ((i = t.child), (t.child = null))
									: ((i = n.sibling), (n.sibling = null)),
									Us(t, !1, i, n, o);
								break;
							case "backwards":
								for (n = null, i = t.child, t.child = null; null !== i; ) {
									if (null !== (e = i.alternate) && null === ta(e)) {
										t.child = i;
										break;
									}
									(e = i.sibling), (i.sibling = n), (n = i), (i = e);
								}
								Us(t, !0, n, null, o);
								break;
							case "together":
								Us(t, !1, null, null, void 0);
								break;
							default:
								t.memoizedState = null;
						}
					return t.child;
				}
				function Ws(e, t) {
					0 === (1 & t.mode) &&
						null !== e &&
						((e.alternate = null), (t.alternate = null), (t.flags |= 2));
				}
				function Hs(e, t, n) {
					if (
						(null !== e && (t.dependencies = e.dependencies),
						(Ml |= t.lanes),
						0 === (n & t.childLanes))
					)
						return null;
					if (null !== e && t.child !== e.child) throw Error(o(153));
					if (null !== t.child) {
						for (
							n = Du((e = t.child), e.pendingProps), t.child = n, n.return = t;
							null !== e.sibling;

						)
							(e = e.sibling),
								((n = n.sibling = Du(e, e.pendingProps)).return = t);
						n.sibling = null;
					}
					return t.child;
				}
				function qs(e, t) {
					if (!io)
						switch (e.tailMode) {
							case "hidden":
								t = e.tail;
								for (var n = null; null !== t; )
									null !== t.alternate && (n = t), (t = t.sibling);
								null === n ? (e.tail = null) : (n.sibling = null);
								break;
							case "collapsed":
								n = e.tail;
								for (var r = null; null !== n; )
									null !== n.alternate && (r = n), (n = n.sibling);
								null === r
									? t || null === e.tail
										? (e.tail = null)
										: (e.tail.sibling = null)
									: (r.sibling = null);
						}
				}
				function $s(e) {
					var t = null !== e.alternate && e.alternate.child === e.child,
						n = 0,
						r = 0;
					if (t)
						for (var i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= 14680064 & i.subtreeFlags),
								(r |= 14680064 & i.flags),
								(i.return = e),
								(i = i.sibling);
					else
						for (i = e.child; null !== i; )
							(n |= i.lanes | i.childLanes),
								(r |= i.subtreeFlags),
								(r |= i.flags),
								(i.return = e),
								(i = i.sibling);
					return (e.subtreeFlags |= r), (e.childLanes = n), t;
				}
				function Ks(e, t, n) {
					var r = t.pendingProps;
					switch ((to(t), t.tag)) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return $s(t), null;
						case 1:
						case 17:
							return ji(t.type) && Di(), $s(t), null;
						case 3:
							return (
								(r = t.stateNode),
								Go(),
								Pi(_i),
								Pi(Fi),
								ra(),
								r.pendingContext &&
									((r.context = r.pendingContext), (r.pendingContext = null)),
								(null !== e && null !== e.child) ||
									(fo(t)
										? (t.flags |= 4)
										: null === e ||
										  (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
										  ((t.flags |= 1024),
										  null !== oo && (au(oo), (oo = null)))),
								js(e, t),
								$s(t),
								null
							);
						case 5:
							Zo(t);
							var i = Qo(Xo.current);
							if (((n = t.type), null !== e && null != t.stateNode))
								Ds(e, t, n, r, i),
									e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							else {
								if (!r) {
									if (null === t.stateNode) throw Error(o(166));
									return $s(t), null;
								}
								if (((e = Qo($o.current)), fo(t))) {
									(r = t.stateNode), (n = t.type);
									var a = t.memoizedProps;
									switch (
										((r[fi] = t), (r[hi] = a), (e = 0 !== (1 & t.mode)), n)
									) {
										case "dialog":
											zr("cancel", r), zr("close", r);
											break;
										case "iframe":
										case "object":
										case "embed":
											zr("load", r);
											break;
										case "video":
										case "audio":
											for (i = 0; i < Or.length; i++) zr(Or[i], r);
											break;
										case "source":
											zr("error", r);
											break;
										case "img":
										case "image":
										case "link":
											zr("error", r), zr("load", r);
											break;
										case "details":
											zr("toggle", r);
											break;
										case "input":
											Y(r, a), zr("invalid", r);
											break;
										case "select":
											(r._wrapperState = { wasMultiple: !!a.multiple }),
												zr("invalid", r);
											break;
										case "textarea":
											ie(r, a), zr("invalid", r);
									}
									for (var l in (ye(n, a), (i = null), a))
										if (a.hasOwnProperty(l)) {
											var u = a[l];
											"children" === l
												? "string" === typeof u
													? r.textContent !== u &&
													  (!0 !== a.suppressHydrationWarning &&
															Jr(r.textContent, u, e),
													  (i = ["children", u]))
													: "number" === typeof u &&
													  r.textContent !== "" + u &&
													  (!0 !== a.suppressHydrationWarning &&
															Jr(r.textContent, u, e),
													  (i = ["children", "" + u]))
												: s.hasOwnProperty(l) &&
												  null != u &&
												  "onScroll" === l &&
												  zr("scroll", r);
										}
									switch (n) {
										case "input":
											$(r), Z(r, a, !0);
											break;
										case "textarea":
											$(r), ae(r);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" === typeof a.onClick && (r.onclick = Zr);
									}
									(r = i), (t.updateQueue = r), null !== r && (t.flags |= 4);
								} else {
									(l = 9 === i.nodeType ? i : i.ownerDocument),
										"http://www.w3.org/1999/xhtml" === e && (e = se(n)),
										"http://www.w3.org/1999/xhtml" === e
											? "script" === n
												? (((e = l.createElement("div")).innerHTML =
														"<script></script>"),
												  (e = e.removeChild(e.firstChild)))
												: "string" === typeof r.is
												? (e = l.createElement(n, { is: r.is }))
												: ((e = l.createElement(n)),
												  "select" === n &&
														((l = e),
														r.multiple
															? (l.multiple = !0)
															: r.size && (l.size = r.size)))
											: (e = l.createElementNS(e, n)),
										(e[fi] = t),
										(e[hi] = r),
										Rs(e, t, !1, !1),
										(t.stateNode = e);
									e: {
										switch (((l = be(n, r)), n)) {
											case "dialog":
												zr("cancel", e), zr("close", e), (i = r);
												break;
											case "iframe":
											case "object":
											case "embed":
												zr("load", e), (i = r);
												break;
											case "video":
											case "audio":
												for (i = 0; i < Or.length; i++) zr(Or[i], e);
												i = r;
												break;
											case "source":
												zr("error", e), (i = r);
												break;
											case "img":
											case "image":
											case "link":
												zr("error", e), zr("load", e), (i = r);
												break;
											case "details":
												zr("toggle", e), (i = r);
												break;
											case "input":
												Y(e, r), (i = Q(e, r)), zr("invalid", e);
												break;
											case "option":
											default:
												i = r;
												break;
											case "select":
												(e._wrapperState = { wasMultiple: !!r.multiple }),
													(i = N({}, r, { value: void 0 })),
													zr("invalid", e);
												break;
											case "textarea":
												ie(e, r), (i = re(e, r)), zr("invalid", e);
										}
										for (a in (ye(n, i), (u = i)))
											if (u.hasOwnProperty(a)) {
												var c = u[a];
												"style" === a
													? ge(e, c)
													: "dangerouslySetInnerHTML" === a
													? null != (c = c ? c.__html : void 0) && de(e, c)
													: "children" === a
													? "string" === typeof c
														? ("textarea" !== n || "" !== c) && fe(e, c)
														: "number" === typeof c && fe(e, "" + c)
													: "suppressContentEditableWarning" !== a &&
													  "suppressHydrationWarning" !== a &&
													  "autoFocus" !== a &&
													  (s.hasOwnProperty(a)
															? null != c && "onScroll" === a && zr("scroll", e)
															: null != c && b(e, a, c, l));
											}
										switch (n) {
											case "input":
												$(e), Z(e, r, !1);
												break;
											case "textarea":
												$(e), ae(e);
												break;
											case "option":
												null != r.value &&
													e.setAttribute("value", "" + H(r.value));
												break;
											case "select":
												(e.multiple = !!r.multiple),
													null != (a = r.value)
														? ne(e, !!r.multiple, a, !1)
														: null != r.defaultValue &&
														  ne(e, !!r.multiple, r.defaultValue, !0);
												break;
											default:
												"function" === typeof i.onClick && (e.onclick = Zr);
										}
										switch (n) {
											case "button":
											case "input":
											case "select":
											case "textarea":
												r = !!r.autoFocus;
												break e;
											case "img":
												r = !0;
												break e;
											default:
												r = !1;
										}
									}
									r && (t.flags |= 4);
								}
								null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
							}
							return $s(t), null;
						case 6:
							if (e && null != t.stateNode) Ls(e, t, e.memoizedProps, r);
							else {
								if ("string" !== typeof r && null === t.stateNode)
									throw Error(o(166));
								if (((n = Qo(Xo.current)), Qo($o.current), fo(t))) {
									if (
										((r = t.stateNode),
										(n = t.memoizedProps),
										(r[fi] = t),
										(a = r.nodeValue !== n) && null !== (e = no))
									)
										switch (e.tag) {
											case 3:
												Jr(r.nodeValue, n, 0 !== (1 & e.mode));
												break;
											case 5:
												!0 !== e.memoizedProps.suppressHydrationWarning &&
													Jr(r.nodeValue, n, 0 !== (1 & e.mode));
										}
									a && (t.flags |= 4);
								} else
									((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
										r
									))[fi] = t),
										(t.stateNode = r);
							}
							return $s(t), null;
						case 13:
							if (
								(Pi(ea),
								(r = t.memoizedState),
								null === e ||
									(null !== e.memoizedState &&
										null !== e.memoizedState.dehydrated))
							) {
								if (
									io &&
									null !== ro &&
									0 !== (1 & t.mode) &&
									0 === (128 & t.flags)
								)
									ho(), po(), (t.flags |= 98560), (a = !1);
								else if (((a = fo(t)), null !== r && null !== r.dehydrated)) {
									if (null === e) {
										if (!a) throw Error(o(318));
										if (
											!(a =
												null !== (a = t.memoizedState) ? a.dehydrated : null)
										)
											throw Error(o(317));
										a[fi] = t;
									} else
										po(),
											0 === (128 & t.flags) && (t.memoizedState = null),
											(t.flags |= 4);
									$s(t), (a = !1);
								} else null !== oo && (au(oo), (oo = null)), (a = !0);
								if (!a) return 65536 & t.flags ? t : null;
							}
							return 0 !== (128 & t.flags)
								? ((t.lanes = n), t)
								: ((r = null !== r) !==
										(null !== e && null !== e.memoizedState) &&
										r &&
										((t.child.flags |= 8192),
										0 !== (1 & t.mode) &&
											(null === e || 0 !== (1 & ea.current)
												? 0 === Ll && (Ll = 3)
												: mu())),
								  null !== t.updateQueue && (t.flags |= 4),
								  $s(t),
								  null);
						case 4:
							return (
								Go(),
								js(e, t),
								null === e && Ir(t.stateNode.containerInfo),
								$s(t),
								null
							);
						case 10:
							return Fo(t.type._context), $s(t), null;
						case 19:
							if ((Pi(ea), null === (a = t.memoizedState))) return $s(t), null;
							if (((r = 0 !== (128 & t.flags)), null === (l = a.rendering)))
								if (r) qs(a, !1);
								else {
									if (0 !== Ll || (null !== e && 0 !== (128 & e.flags)))
										for (e = t.child; null !== e; ) {
											if (null !== (l = ta(e))) {
												for (
													t.flags |= 128,
														qs(a, !1),
														null !== (r = l.updateQueue) &&
															((t.updateQueue = r), (t.flags |= 4)),
														t.subtreeFlags = 0,
														r = n,
														n = t.child;
													null !== n;

												)
													(e = r),
														((a = n).flags &= 14680066),
														null === (l = a.alternate)
															? ((a.childLanes = 0),
															  (a.lanes = e),
															  (a.child = null),
															  (a.subtreeFlags = 0),
															  (a.memoizedProps = null),
															  (a.memoizedState = null),
															  (a.updateQueue = null),
															  (a.dependencies = null),
															  (a.stateNode = null))
															: ((a.childLanes = l.childLanes),
															  (a.lanes = l.lanes),
															  (a.child = l.child),
															  (a.subtreeFlags = 0),
															  (a.deletions = null),
															  (a.memoizedProps = l.memoizedProps),
															  (a.memoizedState = l.memoizedState),
															  (a.updateQueue = l.updateQueue),
															  (a.type = l.type),
															  (e = l.dependencies),
															  (a.dependencies =
																	null === e
																		? null
																		: {
																				lanes: e.lanes,
																				firstContext: e.firstContext,
																		  })),
														(n = n.sibling);
												return Ci(ea, (1 & ea.current) | 2), t.child;
											}
											e = e.sibling;
										}
									null !== a.tail &&
										Ge() > Il &&
										((t.flags |= 128),
										(r = !0),
										qs(a, !1),
										(t.lanes = 4194304));
								}
							else {
								if (!r)
									if (null !== (e = ta(l))) {
										if (
											((t.flags |= 128),
											(r = !0),
											null !== (n = e.updateQueue) &&
												((t.updateQueue = n), (t.flags |= 4)),
											qs(a, !0),
											null === a.tail &&
												"hidden" === a.tailMode &&
												!l.alternate &&
												!io)
										)
											return $s(t), null;
									} else
										2 * Ge() - a.renderingStartTime > Il &&
											1073741824 !== n &&
											((t.flags |= 128),
											(r = !0),
											qs(a, !1),
											(t.lanes = 4194304));
								a.isBackwards
									? ((l.sibling = t.child), (t.child = l))
									: (null !== (n = a.last) ? (n.sibling = l) : (t.child = l),
									  (a.last = l));
							}
							return null !== a.tail
								? ((t = a.tail),
								  (a.rendering = t),
								  (a.tail = t.sibling),
								  (a.renderingStartTime = Ge()),
								  (t.sibling = null),
								  (n = ea.current),
								  Ci(ea, r ? (1 & n) | 2 : 1 & n),
								  t)
								: ($s(t), null);
						case 22:
						case 23:
							return (
								du(),
								(r = null !== t.memoizedState),
								null !== e &&
									(null !== e.memoizedState) !== r &&
									(t.flags |= 8192),
								r && 0 !== (1 & t.mode)
									? 0 !== (1073741824 & jl) &&
									  ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
									: $s(t),
								null
							);
						case 24:
						case 25:
							return null;
					}
					throw Error(o(156, t.tag));
				}
				function Xs(e, t) {
					switch ((to(t), t.tag)) {
						case 1:
							return (
								ji(t.type) && Di(),
								65536 & (e = t.flags)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 3:
							return (
								Go(),
								Pi(_i),
								Pi(Fi),
								ra(),
								0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
									? ((t.flags = (-65537 & e) | 128), t)
									: null
							);
						case 5:
							return Zo(t), null;
						case 13:
							if (
								(Pi(ea),
								null !== (e = t.memoizedState) && null !== e.dehydrated)
							) {
								if (null === t.alternate) throw Error(o(340));
								po();
							}
							return 65536 & (e = t.flags)
								? ((t.flags = (-65537 & e) | 128), t)
								: null;
						case 19:
							return Pi(ea), null;
						case 4:
							return Go(), null;
						case 10:
							return Fo(t.type._context), null;
						case 22:
						case 23:
							return du(), null;
						default:
							return null;
					}
				}
				(Rs = function (e, t) {
					for (var n = t.child; null !== n; ) {
						if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
						else if (4 !== n.tag && null !== n.child) {
							(n.child.return = n), (n = n.child);
							continue;
						}
						if (n === t) break;
						for (; null === n.sibling; ) {
							if (null === n.return || n.return === t) return;
							n = n.return;
						}
						(n.sibling.return = n.return), (n = n.sibling);
					}
				}),
					(js = function () {}),
					(Ds = function (e, t, n, r) {
						var i = e.memoizedProps;
						if (i !== r) {
							(e = t.stateNode), Qo($o.current);
							var o,
								a = null;
							switch (n) {
								case "input":
									(i = Q(e, i)), (r = Q(e, r)), (a = []);
									break;
								case "select":
									(i = N({}, i, { value: void 0 })),
										(r = N({}, r, { value: void 0 })),
										(a = []);
									break;
								case "textarea":
									(i = re(e, i)), (r = re(e, r)), (a = []);
									break;
								default:
									"function" !== typeof i.onClick &&
										"function" === typeof r.onClick &&
										(e.onclick = Zr);
							}
							for (c in (ye(n, r), (n = null), i))
								if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && null != i[c])
									if ("style" === c) {
										var l = i[c];
										for (o in l)
											l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
									} else
										"dangerouslySetInnerHTML" !== c &&
											"children" !== c &&
											"suppressContentEditableWarning" !== c &&
											"suppressHydrationWarning" !== c &&
											"autoFocus" !== c &&
											(s.hasOwnProperty(c)
												? a || (a = [])
												: (a = a || []).push(c, null));
							for (c in r) {
								var u = r[c];
								if (
									((l = null != i ? i[c] : void 0),
									r.hasOwnProperty(c) && u !== l && (null != u || null != l))
								)
									if ("style" === c)
										if (l) {
											for (o in l)
												!l.hasOwnProperty(o) ||
													(u && u.hasOwnProperty(o)) ||
													(n || (n = {}), (n[o] = ""));
											for (o in u)
												u.hasOwnProperty(o) &&
													l[o] !== u[o] &&
													(n || (n = {}), (n[o] = u[o]));
										} else n || (a || (a = []), a.push(c, n)), (n = u);
									else
										"dangerouslySetInnerHTML" === c
											? ((u = u ? u.__html : void 0),
											  (l = l ? l.__html : void 0),
											  null != u && l !== u && (a = a || []).push(c, u))
											: "children" === c
											? ("string" !== typeof u && "number" !== typeof u) ||
											  (a = a || []).push(c, "" + u)
											: "suppressContentEditableWarning" !== c &&
											  "suppressHydrationWarning" !== c &&
											  (s.hasOwnProperty(c)
													? (null != u && "onScroll" === c && zr("scroll", e),
													  a || l === u || (a = []))
													: (a = a || []).push(c, u));
							}
							n && (a = a || []).push("style", n);
							var c = a;
							(t.updateQueue = c) && (t.flags |= 4);
						}
					}),
					(Ls = function (e, t, n, r) {
						n !== r && (t.flags |= 4);
					});
				var Qs = !1,
					Ys = !1,
					Gs = "function" === typeof WeakSet ? WeakSet : Set,
					Js = null;
				function Zs(e, t) {
					var n = e.ref;
					if (null !== n)
						if ("function" === typeof n)
							try {
								n(null);
							} catch (r) {
								Eu(e, t, r);
							}
						else n.current = null;
				}
				function el(e, t, n) {
					try {
						n();
					} catch (r) {
						Eu(e, t, r);
					}
				}
				var tl = !1;
				function nl(e, t, n) {
					var r = t.updateQueue;
					if (null !== (r = null !== r ? r.lastEffect : null)) {
						var i = (r = r.next);
						do {
							if ((i.tag & e) === e) {
								var o = i.destroy;
								(i.destroy = void 0), void 0 !== o && el(t, n, o);
							}
							i = i.next;
						} while (i !== r);
					}
				}
				function rl(e, t) {
					if (
						null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
					) {
						var n = (t = t.next);
						do {
							if ((n.tag & e) === e) {
								var r = n.create;
								n.destroy = r();
							}
							n = n.next;
						} while (n !== t);
					}
				}
				function il(e) {
					var t = e.ref;
					if (null !== t) {
						var n = e.stateNode;
						e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
					}
				}
				function ol(e) {
					var t = e.alternate;
					null !== t && ((e.alternate = null), ol(t)),
						(e.child = null),
						(e.deletions = null),
						(e.sibling = null),
						5 === e.tag &&
							null !== (t = e.stateNode) &&
							(delete t[fi],
							delete t[hi],
							delete t[mi],
							delete t[gi],
							delete t[vi]),
						(e.stateNode = null),
						(e.return = null),
						(e.dependencies = null),
						(e.memoizedProps = null),
						(e.memoizedState = null),
						(e.pendingProps = null),
						(e.stateNode = null),
						(e.updateQueue = null);
				}
				function al(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag;
				}
				function sl(e) {
					e: for (;;) {
						for (; null === e.sibling; ) {
							if (null === e.return || al(e.return)) return null;
							e = e.return;
						}
						for (
							e.sibling.return = e.return, e = e.sibling;
							5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

						) {
							if (2 & e.flags) continue e;
							if (null === e.child || 4 === e.tag) continue e;
							(e.child.return = e), (e = e.child);
						}
						if (!(2 & e.flags)) return e.stateNode;
					}
				}
				function ll(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode),
							t
								? 8 === n.nodeType
									? n.parentNode.insertBefore(e, t)
									: n.insertBefore(e, t)
								: (8 === n.nodeType
										? (t = n.parentNode).insertBefore(e, n)
										: (t = n).appendChild(e),
								  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
										null !== t.onclick ||
										(t.onclick = Zr));
					else if (4 !== r && null !== (e = e.child))
						for (ll(e, t, n), e = e.sibling; null !== e; )
							ll(e, t, n), (e = e.sibling);
				}
				function ul(e, t, n) {
					var r = e.tag;
					if (5 === r || 6 === r)
						(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
					else if (4 !== r && null !== (e = e.child))
						for (ul(e, t, n), e = e.sibling; null !== e; )
							ul(e, t, n), (e = e.sibling);
				}
				var cl = null,
					dl = !1;
				function fl(e, t, n) {
					for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
				}
				function hl(e, t, n) {
					if (ot && "function" === typeof ot.onCommitFiberUnmount)
						try {
							ot.onCommitFiberUnmount(it, n);
						} catch (s) {}
					switch (n.tag) {
						case 5:
							Ys || Zs(n, t);
						case 6:
							var r = cl,
								i = dl;
							(cl = null),
								fl(e, t, n),
								(dl = i),
								null !== (cl = r) &&
									(dl
										? ((e = cl),
										  (n = n.stateNode),
										  8 === e.nodeType
												? e.parentNode.removeChild(n)
												: e.removeChild(n))
										: cl.removeChild(n.stateNode));
							break;
						case 18:
							null !== cl &&
								(dl
									? ((e = cl),
									  (n = n.stateNode),
									  8 === e.nodeType
											? li(e.parentNode, n)
											: 1 === e.nodeType && li(e, n),
									  It(e))
									: li(cl, n.stateNode));
							break;
						case 4:
							(r = cl),
								(i = dl),
								(cl = n.stateNode.containerInfo),
								(dl = !0),
								fl(e, t, n),
								(cl = r),
								(dl = i);
							break;
						case 0:
						case 11:
						case 14:
						case 15:
							if (
								!Ys &&
								null !== (r = n.updateQueue) &&
								null !== (r = r.lastEffect)
							) {
								i = r = r.next;
								do {
									var o = i,
										a = o.destroy;
									(o = o.tag),
										void 0 !== a &&
											(0 !== (2 & o) || 0 !== (4 & o)) &&
											el(n, t, a),
										(i = i.next);
								} while (i !== r);
							}
							fl(e, t, n);
							break;
						case 1:
							if (
								!Ys &&
								(Zs(n, t),
								"function" === typeof (r = n.stateNode).componentWillUnmount)
							)
								try {
									(r.props = n.memoizedProps),
										(r.state = n.memoizedState),
										r.componentWillUnmount();
								} catch (s) {
									Eu(n, t, s);
								}
							fl(e, t, n);
							break;
						case 21:
							fl(e, t, n);
							break;
						case 22:
							1 & n.mode
								? ((Ys = (r = Ys) || null !== n.memoizedState),
								  fl(e, t, n),
								  (Ys = r))
								: fl(e, t, n);
							break;
						default:
							fl(e, t, n);
					}
				}
				function pl(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var n = e.stateNode;
						null === n && (n = e.stateNode = new Gs()),
							t.forEach(function (t) {
								var r = Fu.bind(null, e, t);
								n.has(t) || (n.add(t), t.then(r, r));
							});
					}
				}
				function ml(e, t) {
					var n = t.deletions;
					if (null !== n)
						for (var r = 0; r < n.length; r++) {
							var i = n[r];
							try {
								var a = e,
									s = t,
									l = s;
								e: for (; null !== l; ) {
									switch (l.tag) {
										case 5:
											(cl = l.stateNode), (dl = !1);
											break e;
										case 3:
										case 4:
											(cl = l.stateNode.containerInfo), (dl = !0);
											break e;
									}
									l = l.return;
								}
								if (null === cl) throw Error(o(160));
								hl(a, s, i), (cl = null), (dl = !1);
								var u = i.alternate;
								null !== u && (u.return = null), (i.return = null);
							} catch (c) {
								Eu(i, t, c);
							}
						}
					if (12854 & t.subtreeFlags)
						for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
				}
				function gl(e, t) {
					var n = e.alternate,
						r = e.flags;
					switch (e.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
							if ((ml(t, e), vl(e), 4 & r)) {
								try {
									nl(3, e, e.return), rl(3, e);
								} catch (Hc) {
									Eu(e, e.return, Hc);
								}
								try {
									nl(5, e, e.return);
								} catch (Hc) {
									Eu(e, e.return, Hc);
								}
							}
							break;
						case 1:
							ml(t, e), vl(e), 512 & r && null !== n && Zs(n, n.return);
							break;
						case 5:
							if (
								(ml(t, e),
								vl(e),
								512 & r && null !== n && Zs(n, n.return),
								32 & e.flags)
							) {
								var i = e.stateNode;
								try {
									fe(i, "");
								} catch (Hc) {
									Eu(e, e.return, Hc);
								}
							}
							if (4 & r && null != (i = e.stateNode)) {
								var a = e.memoizedProps,
									s = null !== n ? n.memoizedProps : a,
									l = e.type,
									u = e.updateQueue;
								if (((e.updateQueue = null), null !== u))
									try {
										"input" === l &&
											"radio" === a.type &&
											null != a.name &&
											G(i, a),
											be(l, s);
										var c = be(l, a);
										for (s = 0; s < u.length; s += 2) {
											var d = u[s],
												f = u[s + 1];
											"style" === d
												? ge(i, f)
												: "dangerouslySetInnerHTML" === d
												? de(i, f)
												: "children" === d
												? fe(i, f)
												: b(i, d, f, c);
										}
										switch (l) {
											case "input":
												J(i, a);
												break;
											case "textarea":
												oe(i, a);
												break;
											case "select":
												var h = i._wrapperState.wasMultiple;
												i._wrapperState.wasMultiple = !!a.multiple;
												var p = a.value;
												null != p
													? ne(i, !!a.multiple, p, !1)
													: h !== !!a.multiple &&
													  (null != a.defaultValue
															? ne(i, !!a.multiple, a.defaultValue, !0)
															: ne(i, !!a.multiple, a.multiple ? [] : "", !1));
										}
										i[hi] = a;
									} catch (Hc) {
										Eu(e, e.return, Hc);
									}
							}
							break;
						case 6:
							if ((ml(t, e), vl(e), 4 & r)) {
								if (null === e.stateNode) throw Error(o(162));
								(i = e.stateNode), (a = e.memoizedProps);
								try {
									i.nodeValue = a;
								} catch (Hc) {
									Eu(e, e.return, Hc);
								}
							}
							break;
						case 3:
							if (
								(ml(t, e),
								vl(e),
								4 & r && null !== n && n.memoizedState.isDehydrated)
							)
								try {
									It(t.containerInfo);
								} catch (Hc) {
									Eu(e, e.return, Hc);
								}
							break;
						case 4:
						default:
							ml(t, e), vl(e);
							break;
						case 13:
							ml(t, e),
								vl(e),
								8192 & (i = e.child).flags &&
									((a = null !== i.memoizedState),
									(i.stateNode.isHidden = a),
									!a ||
										(null !== i.alternate &&
											null !== i.alternate.memoizedState) ||
										(Ul = Ge())),
								4 & r && pl(e);
							break;
						case 22:
							if (
								((d = null !== n && null !== n.memoizedState),
								1 & e.mode
									? ((Ys = (c = Ys) || d), ml(t, e), (Ys = c))
									: ml(t, e),
								vl(e),
								8192 & r)
							) {
								if (
									((c = null !== e.memoizedState),
									(e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
								)
									for (Js = e, d = e.child; null !== d; ) {
										for (f = Js = d; null !== Js; ) {
											switch (((p = (h = Js).child), h.tag)) {
												case 0:
												case 11:
												case 14:
												case 15:
													nl(4, h, h.return);
													break;
												case 1:
													Zs(h, h.return);
													var m = h.stateNode;
													if ("function" === typeof m.componentWillUnmount) {
														(r = h), (n = h.return);
														try {
															(t = r),
																(m.props = t.memoizedProps),
																(m.state = t.memoizedState),
																m.componentWillUnmount();
														} catch (Hc) {
															Eu(r, n, Hc);
														}
													}
													break;
												case 5:
													Zs(h, h.return);
													break;
												case 22:
													if (null !== h.memoizedState) {
														xl(f);
														continue;
													}
											}
											null !== p ? ((p.return = h), (Js = p)) : xl(f);
										}
										d = d.sibling;
									}
								e: for (d = null, f = e; ; ) {
									if (5 === f.tag) {
										if (null === d) {
											d = f;
											try {
												(i = f.stateNode),
													c
														? "function" === typeof (a = i.style).setProperty
															? a.setProperty("display", "none", "important")
															: (a.display = "none")
														: ((l = f.stateNode),
														  (s =
																void 0 !== (u = f.memoizedProps.style) &&
																null !== u &&
																u.hasOwnProperty("display")
																	? u.display
																	: null),
														  (l.style.display = me("display", s)));
											} catch (Hc) {
												Eu(e, e.return, Hc);
											}
										}
									} else if (6 === f.tag) {
										if (null === d)
											try {
												f.stateNode.nodeValue = c ? "" : f.memoizedProps;
											} catch (Hc) {
												Eu(e, e.return, Hc);
											}
									} else if (
										((22 !== f.tag && 23 !== f.tag) ||
											null === f.memoizedState ||
											f === e) &&
										null !== f.child
									) {
										(f.child.return = f), (f = f.child);
										continue;
									}
									if (f === e) break e;
									for (; null === f.sibling; ) {
										if (null === f.return || f.return === e) break e;
										d === f && (d = null), (f = f.return);
									}
									d === f && (d = null),
										(f.sibling.return = f.return),
										(f = f.sibling);
								}
							}
							break;
						case 19:
							ml(t, e), vl(e), 4 & r && pl(e);
						case 21:
					}
				}
				function vl(e) {
					var t = e.flags;
					if (2 & t) {
						try {
							e: {
								for (var n = e.return; null !== n; ) {
									if (al(n)) {
										var r = n;
										break e;
									}
									n = n.return;
								}
								throw Error(o(160));
							}
							switch (r.tag) {
								case 5:
									var i = r.stateNode;
									32 & r.flags && (fe(i, ""), (r.flags &= -33)),
										ul(e, sl(e), i);
									break;
								case 3:
								case 4:
									var a = r.stateNode.containerInfo;
									ll(e, sl(e), a);
									break;
								default:
									throw Error(o(161));
							}
						} catch (pc) {
							Eu(e, e.return, pc);
						}
						e.flags &= -3;
					}
					4096 & t && (e.flags &= -4097);
				}
				function yl(e, t, n) {
					(Js = e), bl(e, t, n);
				}
				function bl(e, t, n) {
					for (var r = 0 !== (1 & e.mode); null !== Js; ) {
						var i = Js,
							o = i.child;
						if (22 === i.tag && r) {
							var a = null !== i.memoizedState || Qs;
							if (!a) {
								var s = i.alternate,
									l = (null !== s && null !== s.memoizedState) || Ys;
								s = Qs;
								var u = Ys;
								if (((Qs = a), (Ys = l) && !u))
									for (Js = i; null !== Js; )
										(l = (a = Js).child),
											22 === a.tag && null !== a.memoizedState
												? Sl(i)
												: null !== l
												? ((l.return = a), (Js = l))
												: Sl(i);
								for (; null !== o; ) (Js = o), bl(o, t, n), (o = o.sibling);
								(Js = i), (Qs = s), (Ys = u);
							}
							wl(e);
						} else
							0 !== (8772 & i.subtreeFlags) && null !== o
								? ((o.return = i), (Js = o))
								: wl(e);
					}
				}
				function wl(e) {
					for (; null !== Js; ) {
						var t = Js;
						if (0 !== (8772 & t.flags)) {
							var n = t.alternate;
							try {
								if (0 !== (8772 & t.flags))
									switch (t.tag) {
										case 0:
										case 11:
										case 15:
											Ys || rl(5, t);
											break;
										case 1:
											var r = t.stateNode;
											if (4 & t.flags && !Ys)
												if (null === n) r.componentDidMount();
												else {
													var i =
														t.elementType === t.type
															? n.memoizedProps
															: ns(t.type, n.memoizedProps);
													r.componentDidUpdate(
														i,
														n.memoizedState,
														r.__reactInternalSnapshotBeforeUpdate
													);
												}
											var a = t.updateQueue;
											null !== a && Ho(t, a, r);
											break;
										case 3:
											var s = t.updateQueue;
											if (null !== s) {
												if (((n = null), null !== t.child))
													switch (t.child.tag) {
														case 5:
														case 1:
															n = t.child.stateNode;
													}
												Ho(t, s, n);
											}
											break;
										case 5:
											var l = t.stateNode;
											if (null === n && 4 & t.flags) {
												n = l;
												var u = t.memoizedProps;
												switch (t.type) {
													case "button":
													case "input":
													case "select":
													case "textarea":
														u.autoFocus && n.focus();
														break;
													case "img":
														u.src && (n.src = u.src);
												}
											}
											break;
										case 6:
										case 4:
										case 12:
										case 19:
										case 17:
										case 21:
										case 22:
										case 23:
										case 25:
											break;
										case 13:
											if (null === t.memoizedState) {
												var c = t.alternate;
												if (null !== c) {
													var d = c.memoizedState;
													if (null !== d) {
														var f = d.dehydrated;
														null !== f && It(f);
													}
												}
											}
											break;
										default:
											throw Error(o(163));
									}
								Ys || (512 & t.flags && il(t));
							} catch (h) {
								Eu(t, t.return, h);
							}
						}
						if (t === e) {
							Js = null;
							break;
						}
						if (null !== (n = t.sibling)) {
							(n.return = t.return), (Js = n);
							break;
						}
						Js = t.return;
					}
				}
				function xl(e) {
					for (; null !== Js; ) {
						var t = Js;
						if (t === e) {
							Js = null;
							break;
						}
						var n = t.sibling;
						if (null !== n) {
							(n.return = t.return), (Js = n);
							break;
						}
						Js = t.return;
					}
				}
				function Sl(e) {
					for (; null !== Js; ) {
						var t = Js;
						try {
							switch (t.tag) {
								case 0:
								case 11:
								case 15:
									var n = t.return;
									try {
										rl(4, t);
									} catch (pc) {
										Eu(t, n, pc);
									}
									break;
								case 1:
									var r = t.stateNode;
									if ("function" === typeof r.componentDidMount) {
										var i = t.return;
										try {
											r.componentDidMount();
										} catch (pc) {
											Eu(t, i, pc);
										}
									}
									var o = t.return;
									try {
										il(t);
									} catch (pc) {
										Eu(t, o, pc);
									}
									break;
								case 5:
									var a = t.return;
									try {
										il(t);
									} catch (pc) {
										Eu(t, a, pc);
									}
							}
						} catch (pc) {
							Eu(t, t.return, pc);
						}
						if (t === e) {
							Js = null;
							break;
						}
						var s = t.sibling;
						if (null !== s) {
							(s.return = t.return), (Js = s);
							break;
						}
						Js = t.return;
					}
				}
				var kl,
					El = Math.ceil,
					Pl = w.ReactCurrentDispatcher,
					Cl = w.ReactCurrentOwner,
					Tl = w.ReactCurrentBatchConfig,
					Fl = 0,
					_l = null,
					Al = null,
					Rl = 0,
					jl = 0,
					Dl = Ei(0),
					Ll = 0,
					Ol = null,
					Ml = 0,
					Nl = 0,
					Vl = 0,
					zl = null,
					Bl = null,
					Ul = 0,
					Il = 1 / 0,
					Wl = null,
					Hl = !1,
					ql = null,
					$l = null,
					Kl = !1,
					Xl = null,
					Ql = 0,
					Yl = 0,
					Gl = null,
					Jl = -1,
					Zl = 0;
				function eu() {
					return 0 !== (6 & Fl) ? Ge() : -1 !== Jl ? Jl : (Jl = Ge());
				}
				function tu(e) {
					return 0 === (1 & e.mode)
						? 1
						: 0 !== (2 & Fl) && 0 !== Rl
						? Rl & -Rl
						: null !== go.transition
						? (0 === Zl && (Zl = mt()), Zl)
						: 0 !== (e = bt)
						? e
						: (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
				}
				function nu(e, t, n, r) {
					if (50 < Yl) throw ((Yl = 0), (Gl = null), Error(o(185)));
					vt(e, n, r),
						(0 !== (2 & Fl) && e === _l) ||
							(e === _l && (0 === (2 & Fl) && (Nl |= n), 4 === Ll && su(e, Rl)),
							ru(e, r),
							1 === n &&
								0 === Fl &&
								0 === (1 & t.mode) &&
								((Il = Ge() + 500), zi && Ii()));
				}
				function ru(e, t) {
					var n = e.callbackNode;
					!(function (e, t) {
						for (
							var n = e.suspendedLanes,
								r = e.pingedLanes,
								i = e.expirationTimes,
								o = e.pendingLanes;
							0 < o;

						) {
							var a = 31 - at(o),
								s = 1 << a,
								l = i[a];
							-1 === l
								? (0 !== (s & n) && 0 === (s & r)) || (i[a] = ht(s, t))
								: l <= t && (e.expiredLanes |= s),
								(o &= ~s);
						}
					})(e, t);
					var r = ft(e, e === _l ? Rl : 0);
					if (0 === r)
						null !== n && Xe(n),
							(e.callbackNode = null),
							(e.callbackPriority = 0);
					else if (((t = r & -r), e.callbackPriority !== t)) {
						if ((null != n && Xe(n), 1 === t))
							0 === e.tag
								? (function (e) {
										(zi = !0), Ui(e);
								  })(lu.bind(null, e))
								: Ui(lu.bind(null, e)),
								ai(function () {
									0 === (6 & Fl) && Ii();
								}),
								(n = null);
						else {
							switch (wt(r)) {
								case 1:
									n = Ze;
									break;
								case 4:
									n = et;
									break;
								case 16:
								default:
									n = tt;
									break;
								case 536870912:
									n = rt;
							}
							n = _u(n, iu.bind(null, e));
						}
						(e.callbackPriority = t), (e.callbackNode = n);
					}
				}
				function iu(e, t) {
					if (((Jl = -1), (Zl = 0), 0 !== (6 & Fl))) throw Error(o(327));
					var n = e.callbackNode;
					if (Su() && e.callbackNode !== n) return null;
					var r = ft(e, e === _l ? Rl : 0);
					if (0 === r) return null;
					if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gu(e, r);
					else {
						t = r;
						var i = Fl;
						Fl |= 2;
						var a = pu();
						for (
							(_l === e && Rl === t) ||
							((Wl = null), (Il = Ge() + 500), fu(e, t));
							;

						)
							try {
								yu();
								break;
							} catch (l) {
								hu(e, l);
							}
						To(),
							(Pl.current = a),
							(Fl = i),
							null !== Al ? (t = 0) : ((_l = null), (Rl = 0), (t = Ll));
					}
					if (0 !== t) {
						if (
							(2 === t && 0 !== (i = pt(e)) && ((r = i), (t = ou(e, i))),
							1 === t)
						)
							throw ((n = Ol), fu(e, 0), su(e, r), ru(e, Ge()), n);
						if (6 === t) su(e, r);
						else {
							if (
								((i = e.current.alternate),
								0 === (30 & r) &&
									!(function (e) {
										for (var t = e; ; ) {
											if (16384 & t.flags) {
												var n = t.updateQueue;
												if (null !== n && null !== (n = n.stores))
													for (var r = 0; r < n.length; r++) {
														var i = n[r],
															o = i.getSnapshot;
														i = i.value;
														try {
															if (!sr(o(), i)) return !1;
														} catch (s) {
															return !1;
														}
													}
											}
											if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
												(n.return = t), (t = n);
											else {
												if (t === e) break;
												for (; null === t.sibling; ) {
													if (null === t.return || t.return === e) return !0;
													t = t.return;
												}
												(t.sibling.return = t.return), (t = t.sibling);
											}
										}
										return !0;
									})(i) &&
									(2 === (t = gu(e, r)) &&
										0 !== (a = pt(e)) &&
										((r = a), (t = ou(e, a))),
									1 === t))
							)
								throw ((n = Ol), fu(e, 0), su(e, r), ru(e, Ge()), n);
							switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
								case 0:
								case 1:
									throw Error(o(345));
								case 2:
								case 5:
									xu(e, Bl, Wl);
									break;
								case 3:
									if (
										(su(e, r),
										(130023424 & r) === r && 10 < (t = Ul + 500 - Ge()))
									) {
										if (0 !== ft(e, 0)) break;
										if (((i = e.suspendedLanes) & r) !== r) {
											eu(), (e.pingedLanes |= e.suspendedLanes & i);
											break;
										}
										e.timeoutHandle = ri(xu.bind(null, e, Bl, Wl), t);
										break;
									}
									xu(e, Bl, Wl);
									break;
								case 4:
									if ((su(e, r), (4194240 & r) === r)) break;
									for (t = e.eventTimes, i = -1; 0 < r; ) {
										var s = 31 - at(r);
										(a = 1 << s), (s = t[s]) > i && (i = s), (r &= ~a);
									}
									if (
										((r = i),
										10 <
											(r =
												(120 > (r = Ge() - r)
													? 120
													: 480 > r
													? 480
													: 1080 > r
													? 1080
													: 1920 > r
													? 1920
													: 3e3 > r
													? 3e3
													: 4320 > r
													? 4320
													: 1960 * El(r / 1960)) - r))
									) {
										e.timeoutHandle = ri(xu.bind(null, e, Bl, Wl), r);
										break;
									}
									xu(e, Bl, Wl);
									break;
								default:
									throw Error(o(329));
							}
						}
					}
					return ru(e, Ge()), e.callbackNode === n ? iu.bind(null, e) : null;
				}
				function ou(e, t) {
					var n = zl;
					return (
						e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
						2 !== (e = gu(e, t)) && ((t = Bl), (Bl = n), null !== t && au(t)),
						e
					);
				}
				function au(e) {
					null === Bl ? (Bl = e) : Bl.push.apply(Bl, e);
				}
				function su(e, t) {
					for (
						t &= ~Vl,
							t &= ~Nl,
							e.suspendedLanes |= t,
							e.pingedLanes &= ~t,
							e = e.expirationTimes;
						0 < t;

					) {
						var n = 31 - at(t),
							r = 1 << n;
						(e[n] = -1), (t &= ~r);
					}
				}
				function lu(e) {
					if (0 !== (6 & Fl)) throw Error(o(327));
					Su();
					var t = ft(e, 0);
					if (0 === (1 & t)) return ru(e, Ge()), null;
					var n = gu(e, t);
					if (0 !== e.tag && 2 === n) {
						var r = pt(e);
						0 !== r && ((t = r), (n = ou(e, r)));
					}
					if (1 === n) throw ((n = Ol), fu(e, 0), su(e, t), ru(e, Ge()), n);
					if (6 === n) throw Error(o(345));
					return (
						(e.finishedWork = e.current.alternate),
						(e.finishedLanes = t),
						xu(e, Bl, Wl),
						ru(e, Ge()),
						null
					);
				}
				function uu(e, t) {
					var n = Fl;
					Fl |= 1;
					try {
						return e(t);
					} finally {
						0 === (Fl = n) && ((Il = Ge() + 500), zi && Ii());
					}
				}
				function cu(e) {
					null !== Xl && 0 === Xl.tag && 0 === (6 & Fl) && Su();
					var t = Fl;
					Fl |= 1;
					var n = Tl.transition,
						r = bt;
					try {
						if (((Tl.transition = null), (bt = 1), e)) return e();
					} finally {
						(bt = r), (Tl.transition = n), 0 === (6 & (Fl = t)) && Ii();
					}
				}
				function du() {
					(jl = Dl.current), Pi(Dl);
				}
				function fu(e, t) {
					(e.finishedWork = null), (e.finishedLanes = 0);
					var n = e.timeoutHandle;
					if ((-1 !== n && ((e.timeoutHandle = -1), ii(n)), null !== Al))
						for (n = Al.return; null !== n; ) {
							var r = n;
							switch ((to(r), r.tag)) {
								case 1:
									null !== (r = r.type.childContextTypes) &&
										void 0 !== r &&
										Di();
									break;
								case 3:
									Go(), Pi(_i), Pi(Fi), ra();
									break;
								case 5:
									Zo(r);
									break;
								case 4:
									Go();
									break;
								case 13:
								case 19:
									Pi(ea);
									break;
								case 10:
									Fo(r.type._context);
									break;
								case 22:
								case 23:
									du();
							}
							n = n.return;
						}
					if (
						((_l = e),
						(Al = e = Du(e.current, null)),
						(Rl = jl = t),
						(Ll = 0),
						(Ol = null),
						(Vl = Nl = Ml = 0),
						(Bl = zl = null),
						null !== jo)
					) {
						for (t = 0; t < jo.length; t++)
							if (null !== (r = (n = jo[t]).interleaved)) {
								n.interleaved = null;
								var i = r.next,
									o = n.pending;
								if (null !== o) {
									var a = o.next;
									(o.next = i), (r.next = a);
								}
								n.pending = r;
							}
						jo = null;
					}
					return e;
				}
				function hu(e, t) {
					for (;;) {
						var n = Al;
						try {
							if ((To(), (ia.current = Ja), ca)) {
								for (var r = sa.memoizedState; null !== r; ) {
									var i = r.queue;
									null !== i && (i.pending = null), (r = r.next);
								}
								ca = !1;
							}
							if (
								((aa = 0),
								(ua = la = sa = null),
								(da = !1),
								(fa = 0),
								(Cl.current = null),
								null === n || null === n.return)
							) {
								(Ll = 1), (Ol = t), (Al = null);
								break;
							}
							e: {
								var a = e,
									s = n.return,
									l = n,
									u = t;
								if (
									((t = Rl),
									(l.flags |= 32768),
									null !== u &&
										"object" === typeof u &&
										"function" === typeof u.then)
								) {
									var c = u,
										d = l,
										f = d.tag;
									if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
										var h = d.alternate;
										h
											? ((d.updateQueue = h.updateQueue),
											  (d.memoizedState = h.memoizedState),
											  (d.lanes = h.lanes))
											: ((d.updateQueue = null), (d.memoizedState = null));
									}
									var p = gs(s);
									if (null !== p) {
										(p.flags &= -257),
											vs(p, s, l, 0, t),
											1 & p.mode && ms(a, c, t),
											(u = c);
										var m = (t = p).updateQueue;
										if (null === m) {
											var g = new Set();
											g.add(u), (t.updateQueue = g);
										} else m.add(u);
										break e;
									}
									if (0 === (1 & t)) {
										ms(a, c, t), mu();
										break e;
									}
									u = Error(o(426));
								} else if (io && 1 & l.mode) {
									var v = gs(s);
									if (null !== v) {
										0 === (65536 & v.flags) && (v.flags |= 256),
											vs(v, s, l, 0, t),
											mo(us(u, l));
										break e;
									}
								}
								(a = u = us(u, l)),
									4 !== Ll && (Ll = 2),
									null === zl ? (zl = [a]) : zl.push(a),
									(a = s);
								do {
									switch (a.tag) {
										case 3:
											(a.flags |= 65536),
												(t &= -t),
												(a.lanes |= t),
												Io(a, hs(0, u, t));
											break e;
										case 1:
											l = u;
											var y = a.type,
												b = a.stateNode;
											if (
												0 === (128 & a.flags) &&
												("function" === typeof y.getDerivedStateFromError ||
													(null !== b &&
														"function" === typeof b.componentDidCatch &&
														(null === $l || !$l.has(b))))
											) {
												(a.flags |= 65536),
													(t &= -t),
													(a.lanes |= t),
													Io(a, ps(a, l, t));
												break e;
											}
									}
									a = a.return;
								} while (null !== a);
							}
							wu(n);
						} catch (w) {
							(t = w), Al === n && null !== n && (Al = n = n.return);
							continue;
						}
						break;
					}
				}
				function pu() {
					var e = Pl.current;
					return (Pl.current = Ja), null === e ? Ja : e;
				}
				function mu() {
					(0 !== Ll && 3 !== Ll && 2 !== Ll) || (Ll = 4),
						null === _l ||
							(0 === (268435455 & Ml) && 0 === (268435455 & Nl)) ||
							su(_l, Rl);
				}
				function gu(e, t) {
					var n = Fl;
					Fl |= 2;
					var r = pu();
					for ((_l === e && Rl === t) || ((Wl = null), fu(e, t)); ; )
						try {
							vu();
							break;
						} catch (i) {
							hu(e, i);
						}
					if ((To(), (Fl = n), (Pl.current = r), null !== Al))
						throw Error(o(261));
					return (_l = null), (Rl = 0), Ll;
				}
				function vu() {
					for (; null !== Al; ) bu(Al);
				}
				function yu() {
					for (; null !== Al && !Qe(); ) bu(Al);
				}
				function bu(e) {
					var t = kl(e.alternate, e, jl);
					(e.memoizedProps = e.pendingProps),
						null === t ? wu(e) : (Al = t),
						(Cl.current = null);
				}
				function wu(e) {
					var t = e;
					do {
						var n = t.alternate;
						if (((e = t.return), 0 === (32768 & t.flags))) {
							if (null !== (n = Ks(n, t, jl))) return void (Al = n);
						} else {
							if (null !== (n = Xs(n, t)))
								return (n.flags &= 32767), void (Al = n);
							if (null === e) return (Ll = 6), void (Al = null);
							(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
						}
						if (null !== (t = t.sibling)) return void (Al = t);
						Al = t = e;
					} while (null !== t);
					0 === Ll && (Ll = 5);
				}
				function xu(e, t, n) {
					var r = bt,
						i = Tl.transition;
					try {
						(Tl.transition = null),
							(bt = 1),
							(function (e, t, n, r) {
								do {
									Su();
								} while (null !== Xl);
								if (0 !== (6 & Fl)) throw Error(o(327));
								n = e.finishedWork;
								var i = e.finishedLanes;
								if (null === n) return null;
								if (
									((e.finishedWork = null),
									(e.finishedLanes = 0),
									n === e.current)
								)
									throw Error(o(177));
								(e.callbackNode = null), (e.callbackPriority = 0);
								var a = n.lanes | n.childLanes;
								if (
									((function (e, t) {
										var n = e.pendingLanes & ~t;
										(e.pendingLanes = t),
											(e.suspendedLanes = 0),
											(e.pingedLanes = 0),
											(e.expiredLanes &= t),
											(e.mutableReadLanes &= t),
											(e.entangledLanes &= t),
											(t = e.entanglements);
										var r = e.eventTimes;
										for (e = e.expirationTimes; 0 < n; ) {
											var i = 31 - at(n),
												o = 1 << i;
											(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
										}
									})(e, a),
									e === _l && ((Al = _l = null), (Rl = 0)),
									(0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
										Kl ||
										((Kl = !0),
										_u(tt, function () {
											return Su(), null;
										})),
									(a = 0 !== (15990 & n.flags)),
									0 !== (15990 & n.subtreeFlags) || a)
								) {
									(a = Tl.transition), (Tl.transition = null);
									var s = bt;
									bt = 1;
									var l = Fl;
									(Fl |= 4),
										(Cl.current = null),
										(function (e, t) {
											if (((ei = Ht), hr((e = fr())))) {
												if ("selectionStart" in e)
													var n = {
														start: e.selectionStart,
														end: e.selectionEnd,
													};
												else
													e: {
														var r =
															(n =
																((n = e.ownerDocument) && n.defaultView) ||
																window).getSelection && n.getSelection();
														if (r && 0 !== r.rangeCount) {
															n = r.anchorNode;
															var i = r.anchorOffset,
																a = r.focusNode;
															r = r.focusOffset;
															try {
																n.nodeType, a.nodeType;
															} catch (Nc) {
																n = null;
																break e;
															}
															var s = 0,
																l = -1,
																u = -1,
																c = 0,
																d = 0,
																f = e,
																h = null;
															t: for (;;) {
																for (
																	var p;
																	f !== n ||
																		(0 !== i && 3 !== f.nodeType) ||
																		(l = s + i),
																		f !== a ||
																			(0 !== r && 3 !== f.nodeType) ||
																			(u = s + r),
																		3 === f.nodeType &&
																			(s += f.nodeValue.length),
																		null !== (p = f.firstChild);

																)
																	(h = f), (f = p);
																for (;;) {
																	if (f === e) break t;
																	if (
																		(h === n && ++c === i && (l = s),
																		h === a && ++d === r && (u = s),
																		null !== (p = f.nextSibling))
																	)
																		break;
																	h = (f = h).parentNode;
																}
																f = p;
															}
															n =
																-1 === l || -1 === u
																	? null
																	: { start: l, end: u };
														} else n = null;
													}
												n = n || { start: 0, end: 0 };
											} else n = null;
											for (
												ti = { focusedElem: e, selectionRange: n },
													Ht = !1,
													Js = t;
												null !== Js;

											)
												if (
													((e = (t = Js).child),
													0 !== (1028 & t.subtreeFlags) && null !== e)
												)
													(e.return = t), (Js = e);
												else
													for (; null !== Js; ) {
														t = Js;
														try {
															var m = t.alternate;
															if (0 !== (1024 & t.flags))
																switch (t.tag) {
																	case 0:
																	case 11:
																	case 15:
																	case 5:
																	case 6:
																	case 4:
																	case 17:
																		break;
																	case 1:
																		if (null !== m) {
																			var g = m.memoizedProps,
																				v = m.memoizedState,
																				y = t.stateNode,
																				b = y.getSnapshotBeforeUpdate(
																					t.elementType === t.type
																						? g
																						: ns(t.type, g),
																					v
																				);
																			y.__reactInternalSnapshotBeforeUpdate = b;
																		}
																		break;
																	case 3:
																		var w = t.stateNode.containerInfo;
																		1 === w.nodeType
																			? (w.textContent = "")
																			: 9 === w.nodeType &&
																			  w.documentElement &&
																			  w.removeChild(w.documentElement);
																		break;
																	default:
																		throw Error(o(163));
																}
														} catch (Nc) {
															Eu(t, t.return, Nc);
														}
														if (null !== (e = t.sibling)) {
															(e.return = t.return), (Js = e);
															break;
														}
														Js = t.return;
													}
											(m = tl), (tl = !1);
										})(e, n),
										gl(n, e),
										pr(ti),
										(Ht = !!ei),
										(ti = ei = null),
										(e.current = n),
										yl(n, e, i),
										Ye(),
										(Fl = l),
										(bt = s),
										(Tl.transition = a);
								} else e.current = n;
								if (
									(Kl && ((Kl = !1), (Xl = e), (Ql = i)),
									(a = e.pendingLanes),
									0 === a && ($l = null),
									(function (e) {
										if (ot && "function" === typeof ot.onCommitFiberRoot)
											try {
												ot.onCommitFiberRoot(
													it,
													e,
													void 0,
													128 === (128 & e.current.flags)
												);
											} catch (t) {}
									})(n.stateNode),
									ru(e, Ge()),
									null !== t)
								)
									for (r = e.onRecoverableError, n = 0; n < t.length; n++)
										(i = t[n]),
											r(i.value, { componentStack: i.stack, digest: i.digest });
								if (Hl) throw ((Hl = !1), (e = ql), (ql = null), e);
								0 !== (1 & Ql) && 0 !== e.tag && Su(),
									(a = e.pendingLanes),
									0 !== (1 & a)
										? e === Gl
											? Yl++
											: ((Yl = 0), (Gl = e))
										: (Yl = 0),
									Ii();
							})(e, t, n, r);
					} finally {
						(Tl.transition = i), (bt = r);
					}
					return null;
				}
				function Su() {
					if (null !== Xl) {
						var e = wt(Ql),
							t = Tl.transition,
							n = bt;
						try {
							if (((Tl.transition = null), (bt = 16 > e ? 16 : e), null === Xl))
								var r = !1;
							else {
								if (((e = Xl), (Xl = null), (Ql = 0), 0 !== (6 & Fl)))
									throw Error(o(331));
								var i = Fl;
								for (Fl |= 4, Js = e.current; null !== Js; ) {
									var a = Js,
										s = a.child;
									if (0 !== (16 & Js.flags)) {
										var l = a.deletions;
										if (null !== l) {
											for (var u = 0; u < l.length; u++) {
												var c = l[u];
												for (Js = c; null !== Js; ) {
													var d = Js;
													switch (d.tag) {
														case 0:
														case 11:
														case 15:
															nl(8, d, a);
													}
													var f = d.child;
													if (null !== f) (f.return = d), (Js = f);
													else
														for (; null !== Js; ) {
															var h = (d = Js).sibling,
																p = d.return;
															if ((ol(d), d === c)) {
																Js = null;
																break;
															}
															if (null !== h) {
																(h.return = p), (Js = h);
																break;
															}
															Js = p;
														}
												}
											}
											var m = a.alternate;
											if (null !== m) {
												var g = m.child;
												if (null !== g) {
													m.child = null;
													do {
														var v = g.sibling;
														(g.sibling = null), (g = v);
													} while (null !== g);
												}
											}
											Js = a;
										}
									}
									if (0 !== (2064 & a.subtreeFlags) && null !== s)
										(s.return = a), (Js = s);
									else
										e: for (; null !== Js; ) {
											if (0 !== (2048 & (a = Js).flags))
												switch (a.tag) {
													case 0:
													case 11:
													case 15:
														nl(9, a, a.return);
												}
											var y = a.sibling;
											if (null !== y) {
												(y.return = a.return), (Js = y);
												break e;
											}
											Js = a.return;
										}
								}
								var b = e.current;
								for (Js = b; null !== Js; ) {
									var w = (s = Js).child;
									if (0 !== (2064 & s.subtreeFlags) && null !== w)
										(w.return = s), (Js = w);
									else
										e: for (s = b; null !== Js; ) {
											if (0 !== (2048 & (l = Js).flags))
												try {
													switch (l.tag) {
														case 0:
														case 11:
														case 15:
															rl(9, l);
													}
												} catch (S) {
													Eu(l, l.return, S);
												}
											if (l === s) {
												Js = null;
												break e;
											}
											var x = l.sibling;
											if (null !== x) {
												(x.return = l.return), (Js = x);
												break e;
											}
											Js = l.return;
										}
								}
								if (
									((Fl = i),
									Ii(),
									ot && "function" === typeof ot.onPostCommitFiberRoot)
								)
									try {
										ot.onPostCommitFiberRoot(it, e);
									} catch (S) {}
								r = !0;
							}
							return r;
						} finally {
							(bt = n), (Tl.transition = t);
						}
					}
					return !1;
				}
				function ku(e, t, n) {
					(e = Bo(e, (t = hs(0, (t = us(n, t)), 1)), 1)),
						(t = eu()),
						null !== e && (vt(e, 1, t), ru(e, t));
				}
				function Eu(e, t, n) {
					if (3 === e.tag) ku(e, e, n);
					else
						for (; null !== t; ) {
							if (3 === t.tag) {
								ku(t, e, n);
								break;
							}
							if (1 === t.tag) {
								var r = t.stateNode;
								if (
									"function" === typeof t.type.getDerivedStateFromError ||
									("function" === typeof r.componentDidCatch &&
										(null === $l || !$l.has(r)))
								) {
									(t = Bo(t, (e = ps(t, (e = us(n, e)), 1)), 1)),
										(e = eu()),
										null !== t && (vt(t, 1, e), ru(t, e));
									break;
								}
							}
							t = t.return;
						}
				}
				function Pu(e, t, n) {
					var r = e.pingCache;
					null !== r && r.delete(t),
						(t = eu()),
						(e.pingedLanes |= e.suspendedLanes & n),
						_l === e &&
							(Rl & n) === n &&
							(4 === Ll ||
							(3 === Ll && (130023424 & Rl) === Rl && 500 > Ge() - Ul)
								? fu(e, 0)
								: (Vl |= n)),
						ru(e, t);
				}
				function Cu(e, t) {
					0 === t &&
						(0 === (1 & e.mode)
							? (t = 1)
							: ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
					var n = eu();
					null !== (e = Oo(e, t)) && (vt(e, t, n), ru(e, n));
				}
				function Tu(e) {
					var t = e.memoizedState,
						n = 0;
					null !== t && (n = t.retryLane), Cu(e, n);
				}
				function Fu(e, t) {
					var n = 0;
					switch (e.tag) {
						case 13:
							var r = e.stateNode,
								i = e.memoizedState;
							null !== i && (n = i.retryLane);
							break;
						case 19:
							r = e.stateNode;
							break;
						default:
							throw Error(o(314));
					}
					null !== r && r.delete(t), Cu(e, n);
				}
				function _u(e, t) {
					return Ke(e, t);
				}
				function Au(e, t, n, r) {
					(this.tag = e),
						(this.key = n),
						(this.sibling =
							this.child =
							this.return =
							this.stateNode =
							this.type =
							this.elementType =
								null),
						(this.index = 0),
						(this.ref = null),
						(this.pendingProps = t),
						(this.dependencies =
							this.memoizedState =
							this.updateQueue =
							this.memoizedProps =
								null),
						(this.mode = r),
						(this.subtreeFlags = this.flags = 0),
						(this.deletions = null),
						(this.childLanes = this.lanes = 0),
						(this.alternate = null);
				}
				function Ru(e, t, n, r) {
					return new Au(e, t, n, r);
				}
				function ju(e) {
					return !(!(e = e.prototype) || !e.isReactComponent);
				}
				function Du(e, t) {
					var n = e.alternate;
					return (
						null === n
							? (((n = Ru(e.tag, t, e.key, e.mode)).elementType =
									e.elementType),
							  (n.type = e.type),
							  (n.stateNode = e.stateNode),
							  (n.alternate = e),
							  (e.alternate = n))
							: ((n.pendingProps = t),
							  (n.type = e.type),
							  (n.flags = 0),
							  (n.subtreeFlags = 0),
							  (n.deletions = null)),
						(n.flags = 14680064 & e.flags),
						(n.childLanes = e.childLanes),
						(n.lanes = e.lanes),
						(n.child = e.child),
						(n.memoizedProps = e.memoizedProps),
						(n.memoizedState = e.memoizedState),
						(n.updateQueue = e.updateQueue),
						(t = e.dependencies),
						(n.dependencies =
							null === t
								? null
								: { lanes: t.lanes, firstContext: t.firstContext }),
						(n.sibling = e.sibling),
						(n.index = e.index),
						(n.ref = e.ref),
						n
					);
				}
				function Lu(e, t, n, r, i, a) {
					var s = 2;
					if (((r = e), "function" === typeof e)) ju(e) && (s = 1);
					else if ("string" === typeof e) s = 5;
					else
						e: switch (e) {
							case k:
								return Ou(n.children, i, a, t);
							case E:
								(s = 8), (i |= 8);
								break;
							case P:
								return (
									((e = Ru(12, n, t, 2 | i)).elementType = P), (e.lanes = a), e
								);
							case _:
								return (
									((e = Ru(13, n, t, i)).elementType = _), (e.lanes = a), e
								);
							case A:
								return (
									((e = Ru(19, n, t, i)).elementType = A), (e.lanes = a), e
								);
							case D:
								return Mu(n, i, a, t);
							default:
								if ("object" === typeof e && null !== e)
									switch (e.$$typeof) {
										case C:
											s = 10;
											break e;
										case T:
											s = 9;
											break e;
										case F:
											s = 11;
											break e;
										case R:
											s = 14;
											break e;
										case j:
											(s = 16), (r = null);
											break e;
									}
								throw Error(o(130, null == e ? e : typeof e, ""));
						}
					return (
						((t = Ru(s, n, t, i)).elementType = e),
						(t.type = r),
						(t.lanes = a),
						t
					);
				}
				function Ou(e, t, n, r) {
					return ((e = Ru(7, e, r, t)).lanes = n), e;
				}
				function Mu(e, t, n, r) {
					return (
						((e = Ru(22, e, r, t)).elementType = D),
						(e.lanes = n),
						(e.stateNode = { isHidden: !1 }),
						e
					);
				}
				function Nu(e, t, n) {
					return ((e = Ru(6, e, null, t)).lanes = n), e;
				}
				function Vu(e, t, n) {
					return (
						((t = Ru(
							4,
							null !== e.children ? e.children : [],
							e.key,
							t
						)).lanes = n),
						(t.stateNode = {
							containerInfo: e.containerInfo,
							pendingChildren: null,
							implementation: e.implementation,
						}),
						t
					);
				}
				function zu(e, t, n, r, i) {
					(this.tag = t),
						(this.containerInfo = e),
						(this.finishedWork =
							this.pingCache =
							this.current =
							this.pendingChildren =
								null),
						(this.timeoutHandle = -1),
						(this.callbackNode = this.pendingContext = this.context = null),
						(this.callbackPriority = 0),
						(this.eventTimes = gt(0)),
						(this.expirationTimes = gt(-1)),
						(this.entangledLanes =
							this.finishedLanes =
							this.mutableReadLanes =
							this.expiredLanes =
							this.pingedLanes =
							this.suspendedLanes =
							this.pendingLanes =
								0),
						(this.entanglements = gt(0)),
						(this.identifierPrefix = r),
						(this.onRecoverableError = i),
						(this.mutableSourceEagerHydrationData = null);
				}
				function Bu(e, t, n, r, i, o, a, s, l) {
					return (
						(e = new zu(e, t, n, s, l)),
						1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
						(o = Ru(3, null, null, t)),
						(e.current = o),
						(o.stateNode = e),
						(o.memoizedState = {
							element: r,
							isDehydrated: n,
							cache: null,
							transitions: null,
							pendingSuspenseBoundaries: null,
						}),
						No(o),
						e
					);
				}
				function Uu(e) {
					if (!e) return Ti;
					e: {
						if (Ie((e = e._reactInternals)) !== e || 1 !== e.tag)
							throw Error(o(170));
						var t = e;
						do {
							switch (t.tag) {
								case 3:
									t = t.stateNode.context;
									break e;
								case 1:
									if (ji(t.type)) {
										t = t.stateNode.__reactInternalMemoizedMergedChildContext;
										break e;
									}
							}
							t = t.return;
						} while (null !== t);
						throw Error(o(171));
					}
					if (1 === e.tag) {
						var n = e.type;
						if (ji(n)) return Oi(e, n, t);
					}
					return t;
				}
				function Iu(e, t, n, r, i, o, a, s, l) {
					return (
						((e = Bu(n, r, !0, e, 0, o, 0, s, l)).context = Uu(null)),
						(n = e.current),
						((o = zo((r = eu()), (i = tu(n)))).callback =
							void 0 !== t && null !== t ? t : null),
						Bo(n, o, i),
						(e.current.lanes = i),
						vt(e, i, r),
						ru(e, r),
						e
					);
				}
				function Wu(e, t, n, r) {
					var i = t.current,
						o = eu(),
						a = tu(i);
					return (
						(n = Uu(n)),
						null === t.context ? (t.context = n) : (t.pendingContext = n),
						((t = zo(o, a)).payload = { element: e }),
						null !== (r = void 0 === r ? null : r) && (t.callback = r),
						null !== (e = Bo(i, t, a)) && (nu(e, i, a, o), Uo(e, i, a)),
						a
					);
				}
				function Hu(e) {
					return (e = e.current).child
						? (e.child.tag, e.child.stateNode)
						: null;
				}
				function qu(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var n = e.retryLane;
						e.retryLane = 0 !== n && n < t ? n : t;
					}
				}
				function $u(e, t) {
					qu(e, t), (e = e.alternate) && qu(e, t);
				}
				kl = function (e, t, n) {
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || _i.current) bs = !0;
						else {
							if (0 === (e.lanes & n) && 0 === (128 & t.flags))
								return (
									(bs = !1),
									(function (e, t, n) {
										switch (t.tag) {
											case 3:
												_s(t), po();
												break;
											case 5:
												Jo(t);
												break;
											case 1:
												ji(t.type) && Mi(t);
												break;
											case 4:
												Yo(t, t.stateNode.containerInfo);
												break;
											case 10:
												var r = t.type._context,
													i = t.memoizedProps.value;
												Ci(ko, r._currentValue), (r._currentValue = i);
												break;
											case 13:
												if (null !== (r = t.memoizedState))
													return null !== r.dehydrated
														? (Ci(ea, 1 & ea.current), (t.flags |= 128), null)
														: 0 !== (n & t.child.childLanes)
														? Ns(e, t, n)
														: (Ci(ea, 1 & ea.current),
														  null !== (e = Hs(e, t, n)) ? e.sibling : null);
												Ci(ea, 1 & ea.current);
												break;
											case 19:
												if (
													((r = 0 !== (n & t.childLanes)),
													0 !== (128 & e.flags))
												) {
													if (r) return Is(e, t, n);
													t.flags |= 128;
												}
												if (
													(null !== (i = t.memoizedState) &&
														((i.rendering = null),
														(i.tail = null),
														(i.lastEffect = null)),
													Ci(ea, ea.current),
													r)
												)
													break;
												return null;
											case 22:
											case 23:
												return (t.lanes = 0), Es(e, t, n);
										}
										return Hs(e, t, n);
									})(e, t, n)
								);
							bs = 0 !== (131072 & e.flags);
						}
					else (bs = !1), io && 0 !== (1048576 & t.flags) && Zi(t, $i, t.index);
					switch (((t.lanes = 0), t.tag)) {
						case 2:
							var r = t.type;
							Ws(e, t), (e = t.pendingProps);
							var i = Ri(t, Fi.current);
							Ao(t, n), (i = ga(null, t, r, e, i, n));
							var a = va();
							return (
								(t.flags |= 1),
								"object" === typeof i &&
								null !== i &&
								"function" === typeof i.render &&
								void 0 === i.$$typeof
									? ((t.tag = 1),
									  (t.memoizedState = null),
									  (t.updateQueue = null),
									  ji(r) ? ((a = !0), Mi(t)) : (a = !1),
									  (t.memoizedState =
											null !== i.state && void 0 !== i.state ? i.state : null),
									  No(t),
									  (i.updater = is),
									  (t.stateNode = i),
									  (i._reactInternals = t),
									  ls(t, r, e, n),
									  (t = Fs(null, t, r, !0, a, n)))
									: ((t.tag = 0),
									  io && a && eo(t),
									  ws(null, t, i, n),
									  (t = t.child)),
								t
							);
						case 16:
							r = t.elementType;
							e: {
								switch (
									(Ws(e, t),
									(e = t.pendingProps),
									(r = (i = r._init)(r._payload)),
									(t.type = r),
									(i = t.tag =
										(function (e) {
											if ("function" === typeof e) return ju(e) ? 1 : 0;
											if (void 0 !== e && null !== e) {
												if ((e = e.$$typeof) === F) return 11;
												if (e === R) return 14;
											}
											return 2;
										})(r)),
									(e = ns(r, e)),
									i)
								) {
									case 0:
										t = Cs(null, t, r, e, n);
										break e;
									case 1:
										t = Ts(null, t, r, e, n);
										break e;
									case 11:
										t = xs(null, t, r, e, n);
										break e;
									case 14:
										t = Ss(null, t, r, ns(r.type, e), n);
										break e;
								}
								throw Error(o(306, r, ""));
							}
							return t;
						case 0:
							return (
								(r = t.type),
								(i = t.pendingProps),
								Cs(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
							);
						case 1:
							return (
								(r = t.type),
								(i = t.pendingProps),
								Ts(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
							);
						case 3:
							e: {
								if ((_s(t), null === e)) throw Error(o(387));
								(r = t.pendingProps),
									(i = (a = t.memoizedState).element),
									Vo(e, t),
									Wo(t, r, null, n);
								var s = t.memoizedState;
								if (((r = s.element), a.isDehydrated)) {
									if (
										((a = {
											element: r,
											isDehydrated: !1,
											cache: s.cache,
											pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
											transitions: s.transitions,
										}),
										(t.updateQueue.baseState = a),
										(t.memoizedState = a),
										256 & t.flags)
									) {
										t = As(e, t, r, n, (i = us(Error(o(423)), t)));
										break e;
									}
									if (r !== i) {
										t = As(e, t, r, n, (i = us(Error(o(424)), t)));
										break e;
									}
									for (
										ro = ui(t.stateNode.containerInfo.firstChild),
											no = t,
											io = !0,
											oo = null,
											n = So(t, null, r, n),
											t.child = n;
										n;

									)
										(n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
								} else {
									if ((po(), r === i)) {
										t = Hs(e, t, n);
										break e;
									}
									ws(e, t, r, n);
								}
								t = t.child;
							}
							return t;
						case 5:
							return (
								Jo(t),
								null === e && uo(t),
								(r = t.type),
								(i = t.pendingProps),
								(a = null !== e ? e.memoizedProps : null),
								(s = i.children),
								ni(r, i)
									? (s = null)
									: null !== a && ni(r, a) && (t.flags |= 32),
								Ps(e, t),
								ws(e, t, s, n),
								t.child
							);
						case 6:
							return null === e && uo(t), null;
						case 13:
							return Ns(e, t, n);
						case 4:
							return (
								Yo(t, t.stateNode.containerInfo),
								(r = t.pendingProps),
								null === e ? (t.child = xo(t, null, r, n)) : ws(e, t, r, n),
								t.child
							);
						case 11:
							return (
								(r = t.type),
								(i = t.pendingProps),
								xs(e, t, r, (i = t.elementType === r ? i : ns(r, i)), n)
							);
						case 7:
							return ws(e, t, t.pendingProps, n), t.child;
						case 8:
						case 12:
							return ws(e, t, t.pendingProps.children, n), t.child;
						case 10:
							e: {
								if (
									((r = t.type._context),
									(i = t.pendingProps),
									(a = t.memoizedProps),
									(s = i.value),
									Ci(ko, r._currentValue),
									(r._currentValue = s),
									null !== a)
								)
									if (sr(a.value, s)) {
										if (a.children === i.children && !_i.current) {
											t = Hs(e, t, n);
											break e;
										}
									} else
										for (
											null !== (a = t.child) && (a.return = t);
											null !== a;

										) {
											var l = a.dependencies;
											if (null !== l) {
												s = a.child;
												for (var u = l.firstContext; null !== u; ) {
													if (u.context === r) {
														if (1 === a.tag) {
															(u = zo(-1, n & -n)).tag = 2;
															var c = a.updateQueue;
															if (null !== c) {
																var d = (c = c.shared).pending;
																null === d
																	? (u.next = u)
																	: ((u.next = d.next), (d.next = u)),
																	(c.pending = u);
															}
														}
														(a.lanes |= n),
															null !== (u = a.alternate) && (u.lanes |= n),
															_o(a.return, n, t),
															(l.lanes |= n);
														break;
													}
													u = u.next;
												}
											} else if (10 === a.tag)
												s = a.type === t.type ? null : a.child;
											else if (18 === a.tag) {
												if (null === (s = a.return)) throw Error(o(341));
												(s.lanes |= n),
													null !== (l = s.alternate) && (l.lanes |= n),
													_o(s, n, t),
													(s = a.sibling);
											} else s = a.child;
											if (null !== s) s.return = a;
											else
												for (s = a; null !== s; ) {
													if (s === t) {
														s = null;
														break;
													}
													if (null !== (a = s.sibling)) {
														(a.return = s.return), (s = a);
														break;
													}
													s = s.return;
												}
											a = s;
										}
								ws(e, t, i.children, n), (t = t.child);
							}
							return t;
						case 9:
							return (
								(i = t.type),
								(r = t.pendingProps.children),
								Ao(t, n),
								(r = r((i = Ro(i)))),
								(t.flags |= 1),
								ws(e, t, r, n),
								t.child
							);
						case 14:
							return (
								(i = ns((r = t.type), t.pendingProps)),
								Ss(e, t, r, (i = ns(r.type, i)), n)
							);
						case 15:
							return ks(e, t, t.type, t.pendingProps, n);
						case 17:
							return (
								(r = t.type),
								(i = t.pendingProps),
								(i = t.elementType === r ? i : ns(r, i)),
								Ws(e, t),
								(t.tag = 1),
								ji(r) ? ((e = !0), Mi(t)) : (e = !1),
								Ao(t, n),
								as(t, r, i),
								ls(t, r, i, n),
								Fs(null, t, r, !0, e, n)
							);
						case 19:
							return Is(e, t, n);
						case 22:
							return Es(e, t, n);
					}
					throw Error(o(156, t.tag));
				};
				var Ku =
					"function" === typeof reportError
						? reportError
						: function (e) {
								console.error(e);
						  };
				function Xu(e) {
					this._internalRoot = e;
				}
				function Qu(e) {
					this._internalRoot = e;
				}
				function Yu(e) {
					return !(
						!e ||
						(1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
					);
				}
				function Gu(e) {
					return !(
						!e ||
						(1 !== e.nodeType &&
							9 !== e.nodeType &&
							11 !== e.nodeType &&
							(8 !== e.nodeType ||
								" react-mount-point-unstable " !== e.nodeValue))
					);
				}
				function Ju() {}
				function Zu(e, t, n, r, i) {
					var o = n._reactRootContainer;
					if (o) {
						var a = o;
						if ("function" === typeof i) {
							var s = i;
							i = function () {
								var e = Hu(a);
								s.call(e);
							};
						}
						Wu(t, a, e, i);
					} else
						a = (function (e, t, n, r, i) {
							if (i) {
								if ("function" === typeof r) {
									var o = r;
									r = function () {
										var e = Hu(a);
										o.call(e);
									};
								}
								var a = Iu(t, r, e, 0, null, !1, 0, "", Ju);
								return (
									(e._reactRootContainer = a),
									(e[pi] = a.current),
									Ir(8 === e.nodeType ? e.parentNode : e),
									cu(),
									a
								);
							}
							for (; (i = e.lastChild); ) e.removeChild(i);
							if ("function" === typeof r) {
								var s = r;
								r = function () {
									var e = Hu(l);
									s.call(e);
								};
							}
							var l = Bu(e, 0, !1, null, 0, !1, 0, "", Ju);
							return (
								(e._reactRootContainer = l),
								(e[pi] = l.current),
								Ir(8 === e.nodeType ? e.parentNode : e),
								cu(function () {
									Wu(t, l, n, r);
								}),
								l
							);
						})(n, t, e, i, r);
					return Hu(a);
				}
				(Qu.prototype.render = Xu.prototype.render =
					function (e) {
						var t = this._internalRoot;
						if (null === t) throw Error(o(409));
						Wu(e, t, null, null);
					}),
					(Qu.prototype.unmount = Xu.prototype.unmount =
						function () {
							var e = this._internalRoot;
							if (null !== e) {
								this._internalRoot = null;
								var t = e.containerInfo;
								cu(function () {
									Wu(null, e, null, null);
								}),
									(t[pi] = null);
							}
						}),
					(Qu.prototype.unstable_scheduleHydration = function (e) {
						if (e) {
							var t = Et();
							e = { blockedOn: null, target: e, priority: t };
							for (
								var n = 0;
								n < Dt.length && 0 !== t && t < Dt[n].priority;
								n++
							);
							Dt.splice(n, 0, e), 0 === n && Nt(e);
						}
					}),
					(xt = function (e) {
						switch (e.tag) {
							case 3:
								var t = e.stateNode;
								if (t.current.memoizedState.isDehydrated) {
									var n = dt(t.pendingLanes);
									0 !== n &&
										(yt(t, 1 | n),
										ru(t, Ge()),
										0 === (6 & Fl) && ((Il = Ge() + 500), Ii()));
								}
								break;
							case 13:
								cu(function () {
									var t = Oo(e, 1);
									if (null !== t) {
										var n = eu();
										nu(t, e, 1, n);
									}
								}),
									$u(e, 1);
						}
					}),
					(St = function (e) {
						if (13 === e.tag) {
							var t = Oo(e, 134217728);
							if (null !== t) nu(t, e, 134217728, eu());
							$u(e, 134217728);
						}
					}),
					(kt = function (e) {
						if (13 === e.tag) {
							var t = tu(e),
								n = Oo(e, t);
							if (null !== n) nu(n, e, t, eu());
							$u(e, t);
						}
					}),
					(Et = function () {
						return bt;
					}),
					(Pt = function (e, t) {
						var n = bt;
						try {
							return (bt = e), t();
						} finally {
							bt = n;
						}
					}),
					(Se = function (e, t, n) {
						switch (t) {
							case "input":
								if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
									for (n = e; n.parentNode; ) n = n.parentNode;
									for (
										n = n.querySelectorAll(
											"input[name=" + JSON.stringify("" + t) + '][type="radio"]'
										),
											t = 0;
										t < n.length;
										t++
									) {
										var r = n[t];
										if (r !== e && r.form === e.form) {
											var i = xi(r);
											if (!i) throw Error(o(90));
											K(r), J(r, i);
										}
									}
								}
								break;
							case "textarea":
								oe(e, n);
								break;
							case "select":
								null != (t = n.value) && ne(e, !!n.multiple, t, !1);
						}
					}),
					(Fe = uu),
					(_e = cu);
				var ec = {
						usingClientEntryPoint: !1,
						Events: [bi, wi, xi, Ce, Te, uu],
					},
					tc = {
						findFiberByHostInstance: yi,
						bundleType: 0,
						version: "18.3.1",
						rendererPackageName: "react-dom",
					},
					nc = {
						bundleType: tc.bundleType,
						version: tc.version,
						rendererPackageName: tc.rendererPackageName,
						rendererConfig: tc.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setErrorHandler: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: w.ReactCurrentDispatcher,
						findHostInstanceByFiber: function (e) {
							return null === (e = qe(e)) ? null : e.stateNode;
						},
						findFiberByHostInstance:
							tc.findFiberByHostInstance ||
							function () {
								return null;
							},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null,
						reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
					};
				if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!rc.isDisabled && rc.supportsFiber)
						try {
							(it = rc.inject(nc)), (ot = rc);
						} catch (ce) {}
				}
				(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec),
					(t.createPortal = function (e, t) {
						var n =
							2 < arguments.length && void 0 !== arguments[2]
								? arguments[2]
								: null;
						if (!Yu(t)) throw Error(o(200));
						return (function (e, t, n) {
							var r =
								3 < arguments.length && void 0 !== arguments[3]
									? arguments[3]
									: null;
							return {
								$$typeof: S,
								key: null == r ? null : "" + r,
								children: e,
								containerInfo: t,
								implementation: n,
							};
						})(e, t, null, n);
					}),
					(t.createRoot = function (e, t) {
						if (!Yu(e)) throw Error(o(299));
						var n = !1,
							r = "",
							i = Ku;
						return (
							null !== t &&
								void 0 !== t &&
								(!0 === t.unstable_strictMode && (n = !0),
								void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
								void 0 !== t.onRecoverableError && (i = t.onRecoverableError)),
							(t = Bu(e, 1, !1, null, 0, n, 0, r, i)),
							(e[pi] = t.current),
							Ir(8 === e.nodeType ? e.parentNode : e),
							new Xu(t)
						);
					}),
					(t.findDOMNode = function (e) {
						if (null == e) return null;
						if (1 === e.nodeType) return e;
						var t = e._reactInternals;
						if (void 0 === t) {
							if ("function" === typeof e.render) throw Error(o(188));
							throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
						}
						return (e = null === (e = qe(t)) ? null : e.stateNode);
					}),
					(t.flushSync = function (e) {
						return cu(e);
					}),
					(t.hydrate = function (e, t, n) {
						if (!Gu(t)) throw Error(o(200));
						return Zu(null, e, t, !0, n);
					}),
					(t.hydrateRoot = function (e, t, n) {
						if (!Yu(e)) throw Error(o(405));
						var r = (null != n && n.hydratedSources) || null,
							i = !1,
							a = "",
							s = Ku;
						if (
							(null !== n &&
								void 0 !== n &&
								(!0 === n.unstable_strictMode && (i = !0),
								void 0 !== n.identifierPrefix && (a = n.identifierPrefix),
								void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
							(t = Iu(t, null, e, 1, null != n ? n : null, i, 0, a, s)),
							(e[pi] = t.current),
							Ir(e),
							r)
						)
							for (e = 0; e < r.length; e++)
								(i = (i = (n = r[e])._getVersion)(n._source)),
									null == t.mutableSourceEagerHydrationData
										? (t.mutableSourceEagerHydrationData = [n, i])
										: t.mutableSourceEagerHydrationData.push(n, i);
						return new Qu(t);
					}),
					(t.render = function (e, t, n) {
						if (!Gu(t)) throw Error(o(200));
						return Zu(null, e, t, !1, n);
					}),
					(t.unmountComponentAtNode = function (e) {
						if (!Gu(e)) throw Error(o(40));
						return (
							!!e._reactRootContainer &&
							(cu(function () {
								Zu(null, null, e, !1, function () {
									(e._reactRootContainer = null), (e[pi] = null);
								});
							}),
							!0)
						);
					}),
					(t.unstable_batchedUpdates = uu),
					(t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
						if (!Gu(n)) throw Error(o(200));
						if (null == e || void 0 === e._reactInternals) throw Error(o(38));
						return Zu(e, t, n, !1, r);
					}),
					(t.version = "18.3.1-next-f1338f8080-20240426");
			},
			391: (e, t, n) => {
				var r = n(950);
				(t.H = r.createRoot), r.hydrateRoot;
			},
			950: (e, t, n) => {
				!(function e() {
					if (
						"undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
						"function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
					)
						try {
							__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
						} catch (t) {
							console.error(t);
						}
				})(),
					(e.exports = n(730));
			},
			153: (e, t, n) => {
				var r = n(43),
					i = Symbol.for("react.element"),
					o = Symbol.for("react.fragment"),
					a = Object.prototype.hasOwnProperty,
					s =
						r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
							.ReactCurrentOwner,
					l = { key: !0, ref: !0, __self: !0, __source: !0 };
				function u(e, t, n) {
					var r,
						o = {},
						u = null,
						c = null;
					for (r in (void 0 !== n && (u = "" + n),
					void 0 !== t.key && (u = "" + t.key),
					void 0 !== t.ref && (c = t.ref),
					t))
						a.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
					if (e && e.defaultProps)
						for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
					return {
						$$typeof: i,
						type: e,
						key: u,
						ref: c,
						props: o,
						_owner: s.current,
					};
				}
				(t.Fragment = o), (t.jsx = u), (t.jsxs = u);
			},
			202: (e, t) => {
				var n = Symbol.for("react.element"),
					r = Symbol.for("react.portal"),
					i = Symbol.for("react.fragment"),
					o = Symbol.for("react.strict_mode"),
					a = Symbol.for("react.profiler"),
					s = Symbol.for("react.provider"),
					l = Symbol.for("react.context"),
					u = Symbol.for("react.forward_ref"),
					c = Symbol.for("react.suspense"),
					d = Symbol.for("react.memo"),
					f = Symbol.for("react.lazy"),
					h = Symbol.iterator;
				var p = {
						isMounted: function () {
							return !1;
						},
						enqueueForceUpdate: function () {},
						enqueueReplaceState: function () {},
						enqueueSetState: function () {},
					},
					m = Object.assign,
					g = {};
				function v(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				function y() {}
				function b(e, t, n) {
					(this.props = e),
						(this.context = t),
						(this.refs = g),
						(this.updater = n || p);
				}
				(v.prototype.isReactComponent = {}),
					(v.prototype.setState = function (e, t) {
						if ("object" !== typeof e && "function" !== typeof e && null != e)
							throw Error(
								"setState(...): takes an object of state variables to update or a function which returns an object of state variables."
							);
						this.updater.enqueueSetState(this, e, t, "setState");
					}),
					(v.prototype.forceUpdate = function (e) {
						this.updater.enqueueForceUpdate(this, e, "forceUpdate");
					}),
					(y.prototype = v.prototype);
				var w = (b.prototype = new y());
				(w.constructor = b), m(w, v.prototype), (w.isPureReactComponent = !0);
				var x = Array.isArray,
					S = Object.prototype.hasOwnProperty,
					k = { current: null },
					E = { key: !0, ref: !0, __self: !0, __source: !0 };
				function P(e, t, r) {
					var i,
						o = {},
						a = null,
						s = null;
					if (null != t)
						for (i in (void 0 !== t.ref && (s = t.ref),
						void 0 !== t.key && (a = "" + t.key),
						t))
							S.call(t, i) && !E.hasOwnProperty(i) && (o[i] = t[i]);
					var l = arguments.length - 2;
					if (1 === l) o.children = r;
					else if (1 < l) {
						for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
						o.children = u;
					}
					if (e && e.defaultProps)
						for (i in (l = e.defaultProps)) void 0 === o[i] && (o[i] = l[i]);
					return {
						$$typeof: n,
						type: e,
						key: a,
						ref: s,
						props: o,
						_owner: k.current,
					};
				}
				function C(e) {
					return "object" === typeof e && null !== e && e.$$typeof === n;
				}
				var T = /\/+/g;
				function F(e, t) {
					return "object" === typeof e && null !== e && null != e.key
						? (function (e) {
								var t = { "=": "=0", ":": "=2" };
								return (
									"$" +
									e.replace(/[=:]/g, function (e) {
										return t[e];
									})
								);
						  })("" + e.key)
						: t.toString(36);
				}
				function _(e, t, i, o, a) {
					var s = typeof e;
					("undefined" !== s && "boolean" !== s) || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else
						switch (s) {
							case "string":
							case "number":
								l = !0;
								break;
							case "object":
								switch (e.$$typeof) {
									case n:
									case r:
										l = !0;
								}
						}
					if (l)
						return (
							(a = a((l = e))),
							(e = "" === o ? "." + F(l, 0) : o),
							x(a)
								? ((i = ""),
								  null != e && (i = e.replace(T, "$&/") + "/"),
								  _(a, t, i, "", function (e) {
										return e;
								  }))
								: null != a &&
								  (C(a) &&
										(a = (function (e, t) {
											return {
												$$typeof: n,
												type: e.type,
												key: t,
												ref: e.ref,
												props: e.props,
												_owner: e._owner,
											};
										})(
											a,
											i +
												(!a.key || (l && l.key === a.key)
													? ""
													: ("" + a.key).replace(T, "$&/") + "/") +
												e
										)),
								  t.push(a)),
							1
						);
					if (((l = 0), (o = "" === o ? "." : o + ":"), x(e)))
						for (var u = 0; u < e.length; u++) {
							var c = o + F((s = e[u]), u);
							l += _(s, t, i, c, a);
						}
					else if (
						((c = (function (e) {
							return null === e || "object" !== typeof e
								? null
								: "function" === typeof (e = (h && e[h]) || e["@@iterator"])
								? e
								: null;
						})(e)),
						"function" === typeof c)
					)
						for (e = c.call(e), u = 0; !(s = e.next()).done; )
							l += _((s = s.value), t, i, (c = o + F(s, u++)), a);
					else if ("object" === s)
						throw (
							((t = String(e)),
							Error(
								"Objects are not valid as a React child (found: " +
									("[object Object]" === t
										? "object with keys {" + Object.keys(e).join(", ") + "}"
										: t) +
									"). If you meant to render a collection of children, use an array instead."
							))
						);
					return l;
				}
				function A(e, t, n) {
					if (null == e) return e;
					var r = [],
						i = 0;
					return (
						_(e, r, "", "", function (e) {
							return t.call(n, e, i++);
						}),
						r
					);
				}
				function R(e) {
					if (-1 === e._status) {
						var t = e._result;
						(t = t()).then(
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 1), (e._result = t));
							},
							function (t) {
								(0 !== e._status && -1 !== e._status) ||
									((e._status = 2), (e._result = t));
							}
						),
							-1 === e._status && ((e._status = 0), (e._result = t));
					}
					if (1 === e._status) return e._result.default;
					throw e._result;
				}
				var j = { current: null },
					D = { transition: null },
					L = {
						ReactCurrentDispatcher: j,
						ReactCurrentBatchConfig: D,
						ReactCurrentOwner: k,
					};
				function O() {
					throw Error(
						"act(...) is not supported in production builds of React."
					);
				}
				(t.Children = {
					map: A,
					forEach: function (e, t, n) {
						A(
							e,
							function () {
								t.apply(this, arguments);
							},
							n
						);
					},
					count: function (e) {
						var t = 0;
						return (
							A(e, function () {
								t++;
							}),
							t
						);
					},
					toArray: function (e) {
						return (
							A(e, function (e) {
								return e;
							}) || []
						);
					},
					only: function (e) {
						if (!C(e))
							throw Error(
								"React.Children.only expected to receive a single React element child."
							);
						return e;
					},
				}),
					(t.Component = v),
					(t.Fragment = i),
					(t.Profiler = a),
					(t.PureComponent = b),
					(t.StrictMode = o),
					(t.Suspense = c),
					(t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
					(t.act = O),
					(t.cloneElement = function (e, t, r) {
						if (null === e || void 0 === e)
							throw Error(
								"React.cloneElement(...): The argument must be a React element, but you passed " +
									e +
									"."
							);
						var i = m({}, e.props),
							o = e.key,
							a = e.ref,
							s = e._owner;
						if (null != t) {
							if (
								(void 0 !== t.ref && ((a = t.ref), (s = k.current)),
								void 0 !== t.key && (o = "" + t.key),
								e.type && e.type.defaultProps)
							)
								var l = e.type.defaultProps;
							for (u in t)
								S.call(t, u) &&
									!E.hasOwnProperty(u) &&
									(i[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
						}
						var u = arguments.length - 2;
						if (1 === u) i.children = r;
						else if (1 < u) {
							l = Array(u);
							for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
							i.children = l;
						}
						return {
							$$typeof: n,
							type: e.type,
							key: o,
							ref: a,
							props: i,
							_owner: s,
						};
					}),
					(t.createContext = function (e) {
						return (
							((e = {
								$$typeof: l,
								_currentValue: e,
								_currentValue2: e,
								_threadCount: 0,
								Provider: null,
								Consumer: null,
								_defaultValue: null,
								_globalName: null,
							}).Provider = { $$typeof: s, _context: e }),
							(e.Consumer = e)
						);
					}),
					(t.createElement = P),
					(t.createFactory = function (e) {
						var t = P.bind(null, e);
						return (t.type = e), t;
					}),
					(t.createRef = function () {
						return { current: null };
					}),
					(t.forwardRef = function (e) {
						return { $$typeof: u, render: e };
					}),
					(t.isValidElement = C),
					(t.lazy = function (e) {
						return {
							$$typeof: f,
							_payload: { _status: -1, _result: e },
							_init: R,
						};
					}),
					(t.memo = function (e, t) {
						return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
					}),
					(t.startTransition = function (e) {
						var t = D.transition;
						D.transition = {};
						try {
							e();
						} finally {
							D.transition = t;
						}
					}),
					(t.unstable_act = O),
					(t.useCallback = function (e, t) {
						return j.current.useCallback(e, t);
					}),
					(t.useContext = function (e) {
						return j.current.useContext(e);
					}),
					(t.useDebugValue = function () {}),
					(t.useDeferredValue = function (e) {
						return j.current.useDeferredValue(e);
					}),
					(t.useEffect = function (e, t) {
						return j.current.useEffect(e, t);
					}),
					(t.useId = function () {
						return j.current.useId();
					}),
					(t.useImperativeHandle = function (e, t, n) {
						return j.current.useImperativeHandle(e, t, n);
					}),
					(t.useInsertionEffect = function (e, t) {
						return j.current.useInsertionEffect(e, t);
					}),
					(t.useLayoutEffect = function (e, t) {
						return j.current.useLayoutEffect(e, t);
					}),
					(t.useMemo = function (e, t) {
						return j.current.useMemo(e, t);
					}),
					(t.useReducer = function (e, t, n) {
						return j.current.useReducer(e, t, n);
					}),
					(t.useRef = function (e) {
						return j.current.useRef(e);
					}),
					(t.useState = function (e) {
						return j.current.useState(e);
					}),
					(t.useSyncExternalStore = function (e, t, n) {
						return j.current.useSyncExternalStore(e, t, n);
					}),
					(t.useTransition = function () {
						return j.current.useTransition();
					}),
					(t.version = "18.3.1");
			},
			43: (e, t, n) => {
				e.exports = n(202);
			},
			579: (e, t, n) => {
				e.exports = n(153);
			},
			234: (e, t) => {
				function n(e, t) {
					var n = e.length;
					e.push(t);
					e: for (; 0 < n; ) {
						var r = (n - 1) >>> 1,
							i = e[r];
						if (!(0 < o(i, t))) break e;
						(e[r] = t), (e[n] = i), (n = r);
					}
				}
				function r(e) {
					return 0 === e.length ? null : e[0];
				}
				function i(e) {
					if (0 === e.length) return null;
					var t = e[0],
						n = e.pop();
					if (n !== t) {
						e[0] = n;
						e: for (var r = 0, i = e.length, a = i >>> 1; r < a; ) {
							var s = 2 * (r + 1) - 1,
								l = e[s],
								u = s + 1,
								c = e[u];
							if (0 > o(l, n))
								u < i && 0 > o(c, l)
									? ((e[r] = c), (e[u] = n), (r = u))
									: ((e[r] = l), (e[s] = n), (r = s));
							else {
								if (!(u < i && 0 > o(c, n))) break e;
								(e[r] = c), (e[u] = n), (r = u);
							}
						}
					}
					return t;
				}
				function o(e, t) {
					var n = e.sortIndex - t.sortIndex;
					return 0 !== n ? n : e.id - t.id;
				}
				if (
					"object" === typeof performance &&
					"function" === typeof performance.now
				) {
					var a = performance;
					t.unstable_now = function () {
						return a.now();
					};
				} else {
					var s = Date,
						l = s.now();
					t.unstable_now = function () {
						return s.now() - l;
					};
				}
				var u = [],
					c = [],
					d = 1,
					f = null,
					h = 3,
					p = !1,
					m = !1,
					g = !1,
					v = "function" === typeof setTimeout ? setTimeout : null,
					y = "function" === typeof clearTimeout ? clearTimeout : null,
					b = "undefined" !== typeof setImmediate ? setImmediate : null;
				function w(e) {
					for (var t = r(c); null !== t; ) {
						if (null === t.callback) i(c);
						else {
							if (!(t.startTime <= e)) break;
							i(c), (t.sortIndex = t.expirationTime), n(u, t);
						}
						t = r(c);
					}
				}
				function x(e) {
					if (((g = !1), w(e), !m))
						if (null !== r(u)) (m = !0), D(S);
						else {
							var t = r(c);
							null !== t && L(x, t.startTime - e);
						}
				}
				function S(e, n) {
					(m = !1), g && ((g = !1), y(C), (C = -1)), (p = !0);
					var o = h;
					try {
						for (
							w(n), f = r(u);
							null !== f && (!(f.expirationTime > n) || (e && !_()));

						) {
							var a = f.callback;
							if ("function" === typeof a) {
								(f.callback = null), (h = f.priorityLevel);
								var s = a(f.expirationTime <= n);
								(n = t.unstable_now()),
									"function" === typeof s
										? (f.callback = s)
										: f === r(u) && i(u),
									w(n);
							} else i(u);
							f = r(u);
						}
						if (null !== f) var l = !0;
						else {
							var d = r(c);
							null !== d && L(x, d.startTime - n), (l = !1);
						}
						return l;
					} finally {
						(f = null), (h = o), (p = !1);
					}
				}
				"undefined" !== typeof navigator &&
					void 0 !== navigator.scheduling &&
					void 0 !== navigator.scheduling.isInputPending &&
					navigator.scheduling.isInputPending.bind(navigator.scheduling);
				var k,
					E = !1,
					P = null,
					C = -1,
					T = 5,
					F = -1;
				function _() {
					return !(t.unstable_now() - F < T);
				}
				function A() {
					if (null !== P) {
						var e = t.unstable_now();
						F = e;
						var n = !0;
						try {
							n = P(!0, e);
						} finally {
							n ? k() : ((E = !1), (P = null));
						}
					} else E = !1;
				}
				if ("function" === typeof b)
					k = function () {
						b(A);
					};
				else if ("undefined" !== typeof MessageChannel) {
					var R = new MessageChannel(),
						j = R.port2;
					(R.port1.onmessage = A),
						(k = function () {
							j.postMessage(null);
						});
				} else
					k = function () {
						v(A, 0);
					};
				function D(e) {
					(P = e), E || ((E = !0), k());
				}
				function L(e, n) {
					C = v(function () {
						e(t.unstable_now());
					}, n);
				}
				(t.unstable_IdlePriority = 5),
					(t.unstable_ImmediatePriority = 1),
					(t.unstable_LowPriority = 4),
					(t.unstable_NormalPriority = 3),
					(t.unstable_Profiling = null),
					(t.unstable_UserBlockingPriority = 2),
					(t.unstable_cancelCallback = function (e) {
						e.callback = null;
					}),
					(t.unstable_continueExecution = function () {
						m || p || ((m = !0), D(S));
					}),
					(t.unstable_forceFrameRate = function (e) {
						0 > e || 125 < e
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
							  )
							: (T = 0 < e ? Math.floor(1e3 / e) : 5);
					}),
					(t.unstable_getCurrentPriorityLevel = function () {
						return h;
					}),
					(t.unstable_getFirstCallbackNode = function () {
						return r(u);
					}),
					(t.unstable_next = function (e) {
						switch (h) {
							case 1:
							case 2:
							case 3:
								var t = 3;
								break;
							default:
								t = h;
						}
						var n = h;
						h = t;
						try {
							return e();
						} finally {
							h = n;
						}
					}),
					(t.unstable_pauseExecution = function () {}),
					(t.unstable_requestPaint = function () {}),
					(t.unstable_runWithPriority = function (e, t) {
						switch (e) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								e = 3;
						}
						var n = h;
						h = e;
						try {
							return t();
						} finally {
							h = n;
						}
					}),
					(t.unstable_scheduleCallback = function (e, i, o) {
						var a = t.unstable_now();
						switch (
							("object" === typeof o && null !== o
								? (o = "number" === typeof (o = o.delay) && 0 < o ? a + o : a)
								: (o = a),
							e)
						) {
							case 1:
								var s = -1;
								break;
							case 2:
								s = 250;
								break;
							case 5:
								s = 1073741823;
								break;
							case 4:
								s = 1e4;
								break;
							default:
								s = 5e3;
						}
						return (
							(e = {
								id: d++,
								callback: i,
								priorityLevel: e,
								startTime: o,
								expirationTime: (s = o + s),
								sortIndex: -1,
							}),
							o > a
								? ((e.sortIndex = o),
								  n(c, e),
								  null === r(u) &&
										e === r(c) &&
										(g ? (y(C), (C = -1)) : (g = !0), L(x, o - a)))
								: ((e.sortIndex = s), n(u, e), m || p || ((m = !0), D(S))),
							e
						);
					}),
					(t.unstable_shouldYield = _),
					(t.unstable_wrapCallback = function (e) {
						var t = h;
						return function () {
							var n = h;
							h = t;
							try {
								return e.apply(this, arguments);
							} finally {
								h = n;
							}
						};
					});
			},
			853: (e, t, n) => {
				e.exports = n(234);
			},
		},
		t = {};
	function n(r) {
		var i = t[r];
		if (void 0 !== i) return i.exports;
		var o = (t[r] = { exports: {} });
		return e[r](o, o.exports, n), o.exports;
	}
	(n.d = (e, t) => {
		for (var r in t)
			n.o(t, r) &&
				!n.o(e, r) &&
				Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
	}),
		(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(n.r = (e) => {
			"undefined" !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
				Object.defineProperty(e, "__esModule", { value: !0 });
		});
	var r = {};
	n.r(r),
		n.d(r, {
			hasBrowserEnv: () => ge,
			hasStandardBrowserEnv: () => ye,
			hasStandardBrowserWebWorkerEnv: () => be,
			navigator: () => ve,
			origin: () => we,
		});
	var i = n(43),
		o = n(391);
	function a(e, t) {
		return function () {
			return e.apply(t, arguments);
		};
	}
	const { toString: s } = Object.prototype,
		{ getPrototypeOf: l } = Object,
		u =
			((c = Object.create(null)),
			(e) => {
				const t = s.call(e);
				return c[t] || (c[t] = t.slice(8, -1).toLowerCase());
			});
	var c;
	const d = (e) => ((e = e.toLowerCase()), (t) => u(t) === e),
		f = (e) => (t) => typeof t === e,
		{ isArray: h } = Array,
		p = f("undefined");
	const m = d("ArrayBuffer");
	const g = f("string"),
		v = f("function"),
		y = f("number"),
		b = (e) => null !== e && "object" === typeof e,
		w = (e) => {
			if ("object" !== u(e)) return !1;
			const t = l(e);
			return (
				(null === t ||
					t === Object.prototype ||
					null === Object.getPrototypeOf(t)) &&
				!(Symbol.toStringTag in e) &&
				!(Symbol.iterator in e)
			);
		},
		x = d("Date"),
		S = d("File"),
		k = d("Blob"),
		E = d("FileList"),
		P = d("URLSearchParams"),
		[C, T, F, _] = ["ReadableStream", "Request", "Response", "Headers"].map(d);
	function A(e, t) {
		let n,
			r,
			{ allOwnKeys: i = !1 } =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		if (null !== e && "undefined" !== typeof e)
			if (("object" !== typeof e && (e = [e]), h(e)))
				for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
			else {
				const r = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
					o = r.length;
				let a;
				for (n = 0; n < o; n++) (a = r[n]), t.call(null, e[a], a, e);
			}
	}
	function R(e, t) {
		t = t.toLowerCase();
		const n = Object.keys(e);
		let r,
			i = n.length;
		for (; i-- > 0; ) if (((r = n[i]), t === r.toLowerCase())) return r;
		return null;
	}
	const j =
			"undefined" !== typeof globalThis
				? globalThis
				: "undefined" !== typeof self
				? self
				: "undefined" !== typeof window
				? window
				: global,
		D = (e) => !p(e) && e !== j;
	const L =
		((O = "undefined" !== typeof Uint8Array && l(Uint8Array)),
		(e) => O && e instanceof O);
	var O;
	const M = d("HTMLFormElement"),
		N = ((e) => {
			let { hasOwnProperty: t } = e;
			return (e, n) => t.call(e, n);
		})(Object.prototype),
		V = d("RegExp"),
		z = (e, t) => {
			const n = Object.getOwnPropertyDescriptors(e),
				r = {};
			A(n, (n, i) => {
				let o;
				!1 !== (o = t(n, i, e)) && (r[i] = o || n);
			}),
				Object.defineProperties(e, r);
		},
		B = "abcdefghijklmnopqrstuvwxyz",
		U = "0123456789",
		I = { DIGIT: U, ALPHA: B, ALPHA_DIGIT: B + B.toUpperCase() + U };
	const W = d("AsyncFunction"),
		H = ((e, t) => {
			return e
				? setImmediate
				: t
				? ((n = "axios@".concat(Math.random())),
				  (r = []),
				  j.addEventListener(
						"message",
						(e) => {
							let { source: t, data: i } = e;
							t === j && i === n && r.length && r.shift()();
						},
						!1
				  ),
				  (e) => {
						r.push(e), j.postMessage(n, "*");
				  })
				: (e) => setTimeout(e);
			var n, r;
		})("function" === typeof setImmediate, v(j.postMessage)),
		q =
			"undefined" !== typeof queueMicrotask
				? queueMicrotask.bind(j)
				: ("undefined" !== typeof process && process.nextTick) || H,
		$ = {
			isArray: h,
			isArrayBuffer: m,
			isBuffer: function (e) {
				return (
					null !== e &&
					!p(e) &&
					null !== e.constructor &&
					!p(e.constructor) &&
					v(e.constructor.isBuffer) &&
					e.constructor.isBuffer(e)
				);
			},
			isFormData: (e) => {
				let t;
				return (
					e &&
					(("function" === typeof FormData && e instanceof FormData) ||
						(v(e.append) &&
							("formdata" === (t = u(e)) ||
								("object" === t &&
									v(e.toString) &&
									"[object FormData]" === e.toString()))))
				);
			},
			isArrayBufferView: function (e) {
				let t;
				return (
					(t =
						"undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
							? ArrayBuffer.isView(e)
							: e && e.buffer && m(e.buffer)),
					t
				);
			},
			isString: g,
			isNumber: y,
			isBoolean: (e) => !0 === e || !1 === e,
			isObject: b,
			isPlainObject: w,
			isReadableStream: C,
			isRequest: T,
			isResponse: F,
			isHeaders: _,
			isUndefined: p,
			isDate: x,
			isFile: S,
			isBlob: k,
			isRegExp: V,
			isFunction: v,
			isStream: (e) => b(e) && v(e.pipe),
			isURLSearchParams: P,
			isTypedArray: L,
			isFileList: E,
			forEach: A,
			merge: function e() {
				const { caseless: t } = (D(this) && this) || {},
					n = {},
					r = (r, i) => {
						const o = (t && R(n, i)) || i;
						w(n[o]) && w(r)
							? (n[o] = e(n[o], r))
							: w(r)
							? (n[o] = e({}, r))
							: h(r)
							? (n[o] = r.slice())
							: (n[o] = r);
					};
				for (let i = 0, o = arguments.length; i < o; i++)
					arguments[i] && A(arguments[i], r);
				return n;
			},
			extend: function (e, t, n) {
				let { allOwnKeys: r } =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				return (
					A(
						t,
						(t, r) => {
							n && v(t) ? (e[r] = a(t, n)) : (e[r] = t);
						},
						{ allOwnKeys: r }
					),
					e
				);
			},
			trim: (e) =>
				e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
			stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
			inherits: (e, t, n, r) => {
				(e.prototype = Object.create(t.prototype, r)),
					(e.prototype.constructor = e),
					Object.defineProperty(e, "super", { value: t.prototype }),
					n && Object.assign(e.prototype, n);
			},
			toFlatObject: (e, t, n, r) => {
				let i, o, a;
				const s = {};
				if (((t = t || {}), null == e)) return t;
				do {
					for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
						(a = i[o]),
							(r && !r(a, e, t)) || s[a] || ((t[a] = e[a]), (s[a] = !0));
					e = !1 !== n && l(e);
				} while (e && (!n || n(e, t)) && e !== Object.prototype);
				return t;
			},
			kindOf: u,
			kindOfTest: d,
			endsWith: (e, t, n) => {
				(e = String(e)),
					(void 0 === n || n > e.length) && (n = e.length),
					(n -= t.length);
				const r = e.indexOf(t, n);
				return -1 !== r && r === n;
			},
			toArray: (e) => {
				if (!e) return null;
				if (h(e)) return e;
				let t = e.length;
				if (!y(t)) return null;
				const n = new Array(t);
				for (; t-- > 0; ) n[t] = e[t];
				return n;
			},
			forEachEntry: (e, t) => {
				const n = (e && e[Symbol.iterator]).call(e);
				let r;
				for (; (r = n.next()) && !r.done; ) {
					const n = r.value;
					t.call(e, n[0], n[1]);
				}
			},
			matchAll: (e, t) => {
				let n;
				const r = [];
				for (; null !== (n = e.exec(t)); ) r.push(n);
				return r;
			},
			isHTMLForm: M,
			hasOwnProperty: N,
			hasOwnProp: N,
			reduceDescriptors: z,
			freezeMethods: (e) => {
				z(e, (t, n) => {
					if (v(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
						return !1;
					const r = e[n];
					v(r) &&
						((t.enumerable = !1),
						"writable" in t
							? (t.writable = !1)
							: t.set ||
							  (t.set = () => {
									throw Error("Can not rewrite read-only method '" + n + "'");
							  }));
				});
			},
			toObjectSet: (e, t) => {
				const n = {},
					r = (e) => {
						e.forEach((e) => {
							n[e] = !0;
						});
					};
				return h(e) ? r(e) : r(String(e).split(t)), n;
			},
			toCamelCase: (e) =>
				e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
					return t.toUpperCase() + n;
				}),
			noop: () => {},
			toFiniteNumber: (e, t) =>
				null != e && Number.isFinite((e = +e)) ? e : t,
			findKey: R,
			global: j,
			isContextDefined: D,
			ALPHABET: I,
			generateString: function () {
				let e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
					t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: I.ALPHA_DIGIT,
					n = "";
				const { length: r } = t;
				for (; e--; ) n += t[(Math.random() * r) | 0];
				return n;
			},
			isSpecCompliantForm: function (e) {
				return !!(
					e &&
					v(e.append) &&
					"FormData" === e[Symbol.toStringTag] &&
					e[Symbol.iterator]
				);
			},
			toJSONObject: (e) => {
				const t = new Array(10),
					n = (e, r) => {
						if (b(e)) {
							if (t.indexOf(e) >= 0) return;
							if (!("toJSON" in e)) {
								t[r] = e;
								const i = h(e) ? [] : {};
								return (
									A(e, (e, t) => {
										const o = n(e, r + 1);
										!p(o) && (i[t] = o);
									}),
									(t[r] = void 0),
									i
								);
							}
						}
						return e;
					};
				return n(e, 0);
			},
			isAsyncFn: W,
			isThenable: (e) => e && (b(e) || v(e)) && v(e.then) && v(e.catch),
			setImmediate: H,
			asap: q,
		};
	function K(e, t, n, r, i) {
		Error.call(this),
			Error.captureStackTrace
				? Error.captureStackTrace(this, this.constructor)
				: (this.stack = new Error().stack),
			(this.message = e),
			(this.name = "AxiosError"),
			t && (this.code = t),
			n && (this.config = n),
			r && (this.request = r),
			i && ((this.response = i), (this.status = i.status ? i.status : null));
	}
	$.inherits(K, Error, {
		toJSON: function () {
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: $.toJSONObject(this.config),
				code: this.code,
				status: this.status,
			};
		},
	});
	const X = K.prototype,
		Q = {};
	[
		"ERR_BAD_OPTION_VALUE",
		"ERR_BAD_OPTION",
		"ECONNABORTED",
		"ETIMEDOUT",
		"ERR_NETWORK",
		"ERR_FR_TOO_MANY_REDIRECTS",
		"ERR_DEPRECATED",
		"ERR_BAD_RESPONSE",
		"ERR_BAD_REQUEST",
		"ERR_CANCELED",
		"ERR_NOT_SUPPORT",
		"ERR_INVALID_URL",
	].forEach((e) => {
		Q[e] = { value: e };
	}),
		Object.defineProperties(K, Q),
		Object.defineProperty(X, "isAxiosError", { value: !0 }),
		(K.from = (e, t, n, r, i, o) => {
			const a = Object.create(X);
			return (
				$.toFlatObject(
					e,
					a,
					function (e) {
						return e !== Error.prototype;
					},
					(e) => "isAxiosError" !== e
				),
				K.call(a, e.message, t, n, r, i),
				(a.cause = e),
				(a.name = e.name),
				o && Object.assign(a, o),
				a
			);
		});
	const Y = K;
	function G(e) {
		return $.isPlainObject(e) || $.isArray(e);
	}
	function J(e) {
		return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
	}
	function Z(e, t, n) {
		return e
			? e
					.concat(t)
					.map(function (e, t) {
						return (e = J(e)), !n && t ? "[" + e + "]" : e;
					})
					.join(n ? "." : "")
			: t;
	}
	const ee = $.toFlatObject($, {}, null, function (e) {
		return /^is[A-Z]/.test(e);
	});
	const te = function (e, t, n) {
		if (!$.isObject(e)) throw new TypeError("target must be an object");
		t = t || new FormData();
		const r = (n = $.toFlatObject(
				n,
				{ metaTokens: !0, dots: !1, indexes: !1 },
				!1,
				function (e, t) {
					return !$.isUndefined(t[e]);
				}
			)).metaTokens,
			i = n.visitor || u,
			o = n.dots,
			a = n.indexes,
			s =
				(n.Blob || ("undefined" !== typeof Blob && Blob)) &&
				$.isSpecCompliantForm(t);
		if (!$.isFunction(i)) throw new TypeError("visitor must be a function");
		function l(e) {
			if (null === e) return "";
			if ($.isDate(e)) return e.toISOString();
			if (!s && $.isBlob(e))
				throw new Y("Blob is not supported. Use a Buffer instead.");
			return $.isArrayBuffer(e) || $.isTypedArray(e)
				? s && "function" === typeof Blob
					? new Blob([e])
					: Buffer.from(e)
				: e;
		}
		function u(e, n, i) {
			let s = e;
			if (e && !i && "object" === typeof e)
				if ($.endsWith(n, "{}"))
					(n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
				else if (
					($.isArray(e) &&
						(function (e) {
							return $.isArray(e) && !e.some(G);
						})(e)) ||
					(($.isFileList(e) || $.endsWith(n, "[]")) && (s = $.toArray(e)))
				)
					return (
						(n = J(n)),
						s.forEach(function (e, r) {
							!$.isUndefined(e) &&
								null !== e &&
								t.append(
									!0 === a ? Z([n], r, o) : null === a ? n : n + "[]",
									l(e)
								);
						}),
						!1
					);
			return !!G(e) || (t.append(Z(i, n, o), l(e)), !1);
		}
		const c = [],
			d = Object.assign(ee, {
				defaultVisitor: u,
				convertValue: l,
				isVisitable: G,
			});
		if (!$.isObject(e)) throw new TypeError("data must be an object");
		return (
			(function e(n, r) {
				if (!$.isUndefined(n)) {
					if (-1 !== c.indexOf(n))
						throw Error("Circular reference detected in " + r.join("."));
					c.push(n),
						$.forEach(n, function (n, o) {
							!0 ===
								(!($.isUndefined(n) || null === n) &&
									i.call(t, n, $.isString(o) ? o.trim() : o, r, d)) &&
								e(n, r ? r.concat(o) : [o]);
						}),
						c.pop();
				}
			})(e),
			t
		);
	};
	function ne(e) {
		const t = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+",
			"%00": "\0",
		};
		return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
			return t[e];
		});
	}
	function re(e, t) {
		(this._pairs = []), e && te(e, this, t);
	}
	const ie = re.prototype;
	(ie.append = function (e, t) {
		this._pairs.push([e, t]);
	}),
		(ie.toString = function (e) {
			const t = e
				? function (t) {
						return e.call(this, t, ne);
				  }
				: ne;
			return this._pairs
				.map(function (e) {
					return t(e[0]) + "=" + t(e[1]);
				}, "")
				.join("&");
		});
	const oe = re;
	function ae(e) {
		return encodeURIComponent(e)
			.replace(/%3A/gi, ":")
			.replace(/%24/g, "$")
			.replace(/%2C/gi, ",")
			.replace(/%20/g, "+")
			.replace(/%5B/gi, "[")
			.replace(/%5D/gi, "]");
	}
	function se(e, t, n) {
		if (!t) return e;
		const r = (n && n.encode) || ae;
		$.isFunction(n) && (n = { serialize: n });
		const i = n && n.serialize;
		let o;
		if (
			((o = i
				? i(t, n)
				: $.isURLSearchParams(t)
				? t.toString()
				: new oe(t, n).toString(r)),
			o)
		) {
			const t = e.indexOf("#");
			-1 !== t && (e = e.slice(0, t)),
				(e += (-1 === e.indexOf("?") ? "?" : "&") + o);
		}
		return e;
	}
	const le = class {
			constructor() {
				this.handlers = [];
			}
			use(e, t, n) {
				return (
					this.handlers.push({
						fulfilled: e,
						rejected: t,
						synchronous: !!n && n.synchronous,
						runWhen: n ? n.runWhen : null,
					}),
					this.handlers.length - 1
				);
			}
			eject(e) {
				this.handlers[e] && (this.handlers[e] = null);
			}
			clear() {
				this.handlers && (this.handlers = []);
			}
			forEach(e) {
				$.forEach(this.handlers, function (t) {
					null !== t && e(t);
				});
			}
		},
		ue = {
			silentJSONParsing: !0,
			forcedJSONParsing: !0,
			clarifyTimeoutError: !1,
		};
	function ce(e) {
		return (
			(ce =
				"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
					? function (e) {
							return typeof e;
					  }
					: function (e) {
							return e &&
								"function" == typeof Symbol &&
								e.constructor === Symbol &&
								e !== Symbol.prototype
								? "symbol"
								: typeof e;
					  }),
			ce(e)
		);
	}
	function de(e) {
		var t = (function (e, t) {
			if ("object" != ce(e) || !e) return e;
			var n = e[Symbol.toPrimitive];
			if (void 0 !== n) {
				var r = n.call(e, t || "default");
				if ("object" != ce(r)) return r;
				throw new TypeError("@@toPrimitive must return a primitive value.");
			}
			return ("string" === t ? String : Number)(e);
		})(e, "string");
		return "symbol" == ce(t) ? t : t + "";
	}
	function fe(e, t, n) {
		return (
			(t = de(t)) in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (e[t] = n),
			e
		);
	}
	function he(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t &&
				(r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})),
				n.push.apply(n, r);
		}
		return n;
	}
	function pe(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2
				? he(Object(n), !0).forEach(function (t) {
						fe(e, t, n[t]);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: he(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
				  });
		}
		return e;
	}
	const me = {
			isBrowser: !0,
			classes: {
				URLSearchParams:
					"undefined" !== typeof URLSearchParams ? URLSearchParams : oe,
				FormData: "undefined" !== typeof FormData ? FormData : null,
				Blob: "undefined" !== typeof Blob ? Blob : null,
			},
			protocols: ["http", "https", "file", "blob", "url", "data"],
		},
		ge = "undefined" !== typeof window && "undefined" !== typeof document,
		ve = ("object" === typeof navigator && navigator) || void 0,
		ye =
			ge &&
			(!ve || ["ReactNative", "NativeScript", "NS"].indexOf(ve.product) < 0),
		be =
			"undefined" !== typeof WorkerGlobalScope &&
			self instanceof WorkerGlobalScope &&
			"function" === typeof self.importScripts,
		we = (ge && window.location.href) || "http://localhost",
		xe = pe(pe({}, r), me);
	const Se = function (e) {
		function t(e, n, r, i) {
			let o = e[i++];
			if ("__proto__" === o) return !0;
			const a = Number.isFinite(+o),
				s = i >= e.length;
			if (((o = !o && $.isArray(r) ? r.length : o), s))
				return $.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !a;
			(r[o] && $.isObject(r[o])) || (r[o] = []);
			return (
				t(e, n, r[o], i) &&
					$.isArray(r[o]) &&
					(r[o] = (function (e) {
						const t = {},
							n = Object.keys(e);
						let r;
						const i = n.length;
						let o;
						for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
						return t;
					})(r[o])),
				!a
			);
		}
		if ($.isFormData(e) && $.isFunction(e.entries)) {
			const n = {};
			return (
				$.forEachEntry(e, (e, r) => {
					t(
						(function (e) {
							return $.matchAll(/\w+|\[(\w*)]/g, e).map((e) =>
								"[]" === e[0] ? "" : e[1] || e[0]
							);
						})(e),
						r,
						n,
						0
					);
				}),
				n
			);
		}
		return null;
	};
	const ke = {
		transitional: ue,
		adapter: ["xhr", "http", "fetch"],
		transformRequest: [
			function (e, t) {
				const n = t.getContentType() || "",
					r = n.indexOf("application/json") > -1,
					i = $.isObject(e);
				i && $.isHTMLForm(e) && (e = new FormData(e));
				if ($.isFormData(e)) return r ? JSON.stringify(Se(e)) : e;
				if (
					$.isArrayBuffer(e) ||
					$.isBuffer(e) ||
					$.isStream(e) ||
					$.isFile(e) ||
					$.isBlob(e) ||
					$.isReadableStream(e)
				)
					return e;
				if ($.isArrayBufferView(e)) return e.buffer;
				if ($.isURLSearchParams(e))
					return (
						t.setContentType(
							"application/x-www-form-urlencoded;charset=utf-8",
							!1
						),
						e.toString()
					);
				let o;
				if (i) {
					if (n.indexOf("application/x-www-form-urlencoded") > -1)
						return (function (e, t) {
							return te(
								e,
								new xe.classes.URLSearchParams(),
								Object.assign(
									{
										visitor: function (e, t, n, r) {
											return xe.isNode && $.isBuffer(e)
												? (this.append(t, e.toString("base64")), !1)
												: r.defaultVisitor.apply(this, arguments);
										},
									},
									t
								)
							);
						})(e, this.formSerializer).toString();
					if ((o = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
						const t = this.env && this.env.FormData;
						return te(
							o ? { "files[]": e } : e,
							t && new t(),
							this.formSerializer
						);
					}
				}
				return i || r
					? (t.setContentType("application/json", !1),
					  (function (e, t, n) {
							if ($.isString(e))
								try {
									return (t || JSON.parse)(e), $.trim(e);
								} catch (r) {
									if ("SyntaxError" !== r.name) throw r;
								}
							return (n || JSON.stringify)(e);
					  })(e))
					: e;
			},
		],
		transformResponse: [
			function (e) {
				const t = this.transitional || ke.transitional,
					n = t && t.forcedJSONParsing,
					r = "json" === this.responseType;
				if ($.isResponse(e) || $.isReadableStream(e)) return e;
				if (e && $.isString(e) && ((n && !this.responseType) || r)) {
					const n = !(t && t.silentJSONParsing) && r;
					try {
						return JSON.parse(e);
					} catch (i) {
						if (n) {
							if ("SyntaxError" === i.name)
								throw Y.from(i, Y.ERR_BAD_RESPONSE, this, null, this.response);
							throw i;
						}
					}
				}
				return e;
			},
		],
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: { FormData: xe.classes.FormData, Blob: xe.classes.Blob },
		validateStatus: function (e) {
			return e >= 200 && e < 300;
		},
		headers: {
			common: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": void 0,
			},
		},
	};
	$.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
		ke.headers[e] = {};
	});
	const Ee = ke,
		Pe = $.toObjectSet([
			"age",
			"authorization",
			"content-length",
			"content-type",
			"etag",
			"expires",
			"from",
			"host",
			"if-modified-since",
			"if-unmodified-since",
			"last-modified",
			"location",
			"max-forwards",
			"proxy-authorization",
			"referer",
			"retry-after",
			"user-agent",
		]),
		Ce = Symbol("internals");
	function Te(e) {
		return e && String(e).trim().toLowerCase();
	}
	function Fe(e) {
		return !1 === e || null == e ? e : $.isArray(e) ? e.map(Fe) : String(e);
	}
	function _e(e, t, n, r, i) {
		return $.isFunction(r)
			? r.call(this, t, n)
			: (i && (t = n),
			  $.isString(t)
					? $.isString(r)
						? -1 !== t.indexOf(r)
						: $.isRegExp(r)
						? r.test(t)
						: void 0
					: void 0);
	}
	class Ae {
		constructor(e) {
			e && this.set(e);
		}
		set(e, t, n) {
			const r = this;
			function i(e, t, n) {
				const i = Te(t);
				if (!i) throw new Error("header name must be a non-empty string");
				const o = $.findKey(r, i);
				(!o || void 0 === r[o] || !0 === n || (void 0 === n && !1 !== r[o])) &&
					(r[o || t] = Fe(e));
			}
			const o = (e, t) => $.forEach(e, (e, n) => i(e, n, t));
			if ($.isPlainObject(e) || e instanceof this.constructor) o(e, t);
			else if (
				$.isString(e) &&
				(e = e.trim()) &&
				!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
			)
				o(
					((e) => {
						const t = {};
						let n, r, i;
						return (
							e &&
								e.split("\n").forEach(function (e) {
									(i = e.indexOf(":")),
										(n = e.substring(0, i).trim().toLowerCase()),
										(r = e.substring(i + 1).trim()),
										!n ||
											(t[n] && Pe[n]) ||
											("set-cookie" === n
												? t[n]
													? t[n].push(r)
													: (t[n] = [r])
												: (t[n] = t[n] ? t[n] + ", " + r : r));
								}),
							t
						);
					})(e),
					t
				);
			else if ($.isHeaders(e)) for (const [a, s] of e.entries()) i(s, a, n);
			else null != e && i(t, e, n);
			return this;
		}
		get(e, t) {
			if ((e = Te(e))) {
				const n = $.findKey(this, e);
				if (n) {
					const e = this[n];
					if (!t) return e;
					if (!0 === t)
						return (function (e) {
							const t = Object.create(null),
								n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
							let r;
							for (; (r = n.exec(e)); ) t[r[1]] = r[2];
							return t;
						})(e);
					if ($.isFunction(t)) return t.call(this, e, n);
					if ($.isRegExp(t)) return t.exec(e);
					throw new TypeError("parser must be boolean|regexp|function");
				}
			}
		}
		has(e, t) {
			if ((e = Te(e))) {
				const n = $.findKey(this, e);
				return !(!n || void 0 === this[n] || (t && !_e(0, this[n], n, t)));
			}
			return !1;
		}
		delete(e, t) {
			const n = this;
			let r = !1;
			function i(e) {
				if ((e = Te(e))) {
					const i = $.findKey(n, e);
					!i || (t && !_e(0, n[i], i, t)) || (delete n[i], (r = !0));
				}
			}
			return $.isArray(e) ? e.forEach(i) : i(e), r;
		}
		clear(e) {
			const t = Object.keys(this);
			let n = t.length,
				r = !1;
			for (; n--; ) {
				const i = t[n];
				(e && !_e(0, this[i], i, e, !0)) || (delete this[i], (r = !0));
			}
			return r;
		}
		normalize(e) {
			const t = this,
				n = {};
			return (
				$.forEach(this, (r, i) => {
					const o = $.findKey(n, i);
					if (o) return (t[o] = Fe(r)), void delete t[i];
					const a = e
						? (function (e) {
								return e
									.trim()
									.toLowerCase()
									.replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
						  })(i)
						: String(i).trim();
					a !== i && delete t[i], (t[a] = Fe(r)), (n[a] = !0);
				}),
				this
			);
		}
		concat() {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
				t[n] = arguments[n];
			return this.constructor.concat(this, ...t);
		}
		toJSON(e) {
			const t = Object.create(null);
			return (
				$.forEach(this, (n, r) => {
					null != n &&
						!1 !== n &&
						(t[r] = e && $.isArray(n) ? n.join(", ") : n);
				}),
				t
			);
		}
		[Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]();
		}
		toString() {
			return Object.entries(this.toJSON())
				.map((e) => {
					let [t, n] = e;
					return t + ": " + n;
				})
				.join("\n");
		}
		get [Symbol.toStringTag]() {
			return "AxiosHeaders";
		}
		static from(e) {
			return e instanceof this ? e : new this(e);
		}
		static concat(e) {
			const t = new this(e);
			for (
				var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
				i < n;
				i++
			)
				r[i - 1] = arguments[i];
			return r.forEach((e) => t.set(e)), t;
		}
		static accessor(e) {
			const t = (this[Ce] = this[Ce] = { accessors: {} }).accessors,
				n = this.prototype;
			function r(e) {
				const r = Te(e);
				t[r] ||
					(!(function (e, t) {
						const n = $.toCamelCase(" " + t);
						["get", "set", "has"].forEach((r) => {
							Object.defineProperty(e, r + n, {
								value: function (e, n, i) {
									return this[r].call(this, t, e, n, i);
								},
								configurable: !0,
							});
						});
					})(n, e),
					(t[r] = !0));
			}
			return $.isArray(e) ? e.forEach(r) : r(e), this;
		}
	}
	Ae.accessor([
		"Content-Type",
		"Content-Length",
		"Accept",
		"Accept-Encoding",
		"User-Agent",
		"Authorization",
	]),
		$.reduceDescriptors(Ae.prototype, (e, t) => {
			let { value: n } = e,
				r = t[0].toUpperCase() + t.slice(1);
			return {
				get: () => n,
				set(e) {
					this[r] = e;
				},
			};
		}),
		$.freezeMethods(Ae);
	const Re = Ae;
	function je(e, t) {
		const n = this || Ee,
			r = t || n,
			i = Re.from(r.headers);
		let o = r.data;
		return (
			$.forEach(e, function (e) {
				o = e.call(n, o, i.normalize(), t ? t.status : void 0);
			}),
			i.normalize(),
			o
		);
	}
	function De(e) {
		return !(!e || !e.__CANCEL__);
	}
	function Le(e, t, n) {
		Y.call(this, null == e ? "canceled" : e, Y.ERR_CANCELED, t, n),
			(this.name = "CanceledError");
	}
	$.inherits(Le, Y, { __CANCEL__: !0 });
	const Oe = Le;
	function Me(e, t, n) {
		const r = n.config.validateStatus;
		n.status && r && !r(n.status)
			? t(
					new Y(
						"Request failed with status code " + n.status,
						[Y.ERR_BAD_REQUEST, Y.ERR_BAD_RESPONSE][
							Math.floor(n.status / 100) - 4
						],
						n.config,
						n.request,
						n
					)
			  )
			: e(n);
	}
	const Ne = function (e, t) {
		e = e || 10;
		const n = new Array(e),
			r = new Array(e);
		let i,
			o = 0,
			a = 0;
		return (
			(t = void 0 !== t ? t : 1e3),
			function (s) {
				const l = Date.now(),
					u = r[a];
				i || (i = l), (n[o] = s), (r[o] = l);
				let c = a,
					d = 0;
				for (; c !== o; ) (d += n[c++]), (c %= e);
				if (((o = (o + 1) % e), o === a && (a = (a + 1) % e), l - i < t))
					return;
				const f = u && l - u;
				return f ? Math.round((1e3 * d) / f) : void 0;
			}
		);
	};
	const Ve = function (e, t) {
			let n,
				r,
				i = 0,
				o = 1e3 / t;
			const a = function (t) {
				let o =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: Date.now();
				(i = o),
					(n = null),
					r && (clearTimeout(r), (r = null)),
					e.apply(null, t);
			};
			return [
				function () {
					const e = Date.now(),
						t = e - i;
					for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
						l[u] = arguments[u];
					t >= o
						? a(l, e)
						: ((n = l),
						  r ||
								(r = setTimeout(() => {
									(r = null), a(n);
								}, o - t)));
				},
				() => n && a(n),
			];
		},
		ze = function (e, t) {
			let n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3,
				r = 0;
			const i = Ne(50, 250);
			return Ve((n) => {
				const o = n.loaded,
					a = n.lengthComputable ? n.total : void 0,
					s = o - r,
					l = i(s);
				r = o;
				e({
					loaded: o,
					total: a,
					progress: a ? o / a : void 0,
					bytes: s,
					rate: l || void 0,
					estimated: l && a && o <= a ? (a - o) / l : void 0,
					event: n,
					lengthComputable: null != a,
					[t ? "download" : "upload"]: !0,
				});
			}, n);
		},
		Be = (e, t) => {
			const n = null != e;
			return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
		},
		Ue = (e) =>
			function () {
				for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
					n[r] = arguments[r];
				return $.asap(() => e(...n));
			},
		Ie = xe.hasStandardBrowserEnv
			? ((e, t) => (n) => (
					(n = new URL(n, xe.origin)),
					e.protocol === n.protocol &&
						e.host === n.host &&
						(t || e.port === n.port)
			  ))(
					new URL(xe.origin),
					xe.navigator && /(msie|trident)/i.test(xe.navigator.userAgent)
			  )
			: () => !0,
		We = xe.hasStandardBrowserEnv
			? {
					write(e, t, n, r, i, o) {
						const a = [e + "=" + encodeURIComponent(t)];
						$.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
							$.isString(r) && a.push("path=" + r),
							$.isString(i) && a.push("domain=" + i),
							!0 === o && a.push("secure"),
							(document.cookie = a.join("; "));
					},
					read(e) {
						const t = document.cookie.match(
							new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
						);
						return t ? decodeURIComponent(t[3]) : null;
					},
					remove(e) {
						this.write(e, "", Date.now() - 864e5);
					},
			  }
			: { write() {}, read: () => null, remove() {} };
	function He(e, t) {
		return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
			? (function (e, t) {
					return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
			  })(e, t)
			: t;
	}
	const qe = (e) => (e instanceof Re ? pe({}, e) : e);
	function $e(e, t) {
		t = t || {};
		const n = {};
		function r(e, t, n, r) {
			return $.isPlainObject(e) && $.isPlainObject(t)
				? $.merge.call({ caseless: r }, e, t)
				: $.isPlainObject(t)
				? $.merge({}, t)
				: $.isArray(t)
				? t.slice()
				: t;
		}
		function i(e, t, n, i) {
			return $.isUndefined(t)
				? $.isUndefined(e)
					? void 0
					: r(void 0, e, 0, i)
				: r(e, t, 0, i);
		}
		function o(e, t) {
			if (!$.isUndefined(t)) return r(void 0, t);
		}
		function a(e, t) {
			return $.isUndefined(t)
				? $.isUndefined(e)
					? void 0
					: r(void 0, e)
				: r(void 0, t);
		}
		function s(n, i, o) {
			return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0;
		}
		const l = {
			url: o,
			method: o,
			data: o,
			baseURL: a,
			transformRequest: a,
			transformResponse: a,
			paramsSerializer: a,
			timeout: a,
			timeoutMessage: a,
			withCredentials: a,
			withXSRFToken: a,
			adapter: a,
			responseType: a,
			xsrfCookieName: a,
			xsrfHeaderName: a,
			onUploadProgress: a,
			onDownloadProgress: a,
			decompress: a,
			maxContentLength: a,
			maxBodyLength: a,
			beforeRedirect: a,
			transport: a,
			httpAgent: a,
			httpsAgent: a,
			cancelToken: a,
			socketPath: a,
			responseEncoding: a,
			validateStatus: s,
			headers: (e, t, n) => i(qe(e), qe(t), 0, !0),
		};
		return (
			$.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
				const o = l[r] || i,
					a = o(e[r], t[r], r);
				($.isUndefined(a) && o !== s) || (n[r] = a);
			}),
			n
		);
	}
	const Ke = (e) => {
			const t = $e({}, e);
			let n,
				{
					data: r,
					withXSRFToken: i,
					xsrfHeaderName: o,
					xsrfCookieName: a,
					headers: s,
					auth: l,
				} = t;
			if (
				((t.headers = s = Re.from(s)),
				(t.url = se(He(t.baseURL, t.url), e.params, e.paramsSerializer)),
				l &&
					s.set(
						"Authorization",
						"Basic " +
							btoa(
								(l.username || "") +
									":" +
									(l.password ? unescape(encodeURIComponent(l.password)) : "")
							)
					),
				$.isFormData(r))
			)
				if (xe.hasStandardBrowserEnv || xe.hasStandardBrowserWebWorkerEnv)
					s.setContentType(void 0);
				else if (!1 !== (n = s.getContentType())) {
					const [e, ...t] = n
						? n
								.split(";")
								.map((e) => e.trim())
								.filter(Boolean)
						: [];
					s.setContentType([e || "multipart/form-data", ...t].join("; "));
				}
			if (
				xe.hasStandardBrowserEnv &&
				(i && $.isFunction(i) && (i = i(t)), i || (!1 !== i && Ie(t.url)))
			) {
				const e = o && a && We.read(a);
				e && s.set(o, e);
			}
			return t;
		},
		Xe =
			"undefined" !== typeof XMLHttpRequest &&
			function (e) {
				return new Promise(function (t, n) {
					const r = Ke(e);
					let i = r.data;
					const o = Re.from(r.headers).normalize();
					let a,
						s,
						l,
						u,
						c,
						{ responseType: d, onUploadProgress: f, onDownloadProgress: h } = r;
					function p() {
						u && u(),
							c && c(),
							r.cancelToken && r.cancelToken.unsubscribe(a),
							r.signal && r.signal.removeEventListener("abort", a);
					}
					let m = new XMLHttpRequest();
					function g() {
						if (!m) return;
						const r = Re.from(
							"getAllResponseHeaders" in m && m.getAllResponseHeaders()
						);
						Me(
							function (e) {
								t(e), p();
							},
							function (e) {
								n(e), p();
							},
							{
								data:
									d && "text" !== d && "json" !== d
										? m.response
										: m.responseText,
								status: m.status,
								statusText: m.statusText,
								headers: r,
								config: e,
								request: m,
							}
						),
							(m = null);
					}
					m.open(r.method.toUpperCase(), r.url, !0),
						(m.timeout = r.timeout),
						"onloadend" in m
							? (m.onloadend = g)
							: (m.onreadystatechange = function () {
									m &&
										4 === m.readyState &&
										(0 !== m.status ||
											(m.responseURL &&
												0 === m.responseURL.indexOf("file:"))) &&
										setTimeout(g);
							  }),
						(m.onabort = function () {
							m &&
								(n(new Y("Request aborted", Y.ECONNABORTED, e, m)), (m = null));
						}),
						(m.onerror = function () {
							n(new Y("Network Error", Y.ERR_NETWORK, e, m)), (m = null);
						}),
						(m.ontimeout = function () {
							let t = r.timeout
								? "timeout of " + r.timeout + "ms exceeded"
								: "timeout exceeded";
							const i = r.transitional || ue;
							r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
								n(
									new Y(
										t,
										i.clarifyTimeoutError ? Y.ETIMEDOUT : Y.ECONNABORTED,
										e,
										m
									)
								),
								(m = null);
						}),
						void 0 === i && o.setContentType(null),
						"setRequestHeader" in m &&
							$.forEach(o.toJSON(), function (e, t) {
								m.setRequestHeader(t, e);
							}),
						$.isUndefined(r.withCredentials) ||
							(m.withCredentials = !!r.withCredentials),
						d && "json" !== d && (m.responseType = r.responseType),
						h && (([l, c] = ze(h, !0)), m.addEventListener("progress", l)),
						f &&
							m.upload &&
							(([s, u] = ze(f)),
							m.upload.addEventListener("progress", s),
							m.upload.addEventListener("loadend", u)),
						(r.cancelToken || r.signal) &&
							((a = (t) => {
								m &&
									(n(!t || t.type ? new Oe(null, e, m) : t),
									m.abort(),
									(m = null));
							}),
							r.cancelToken && r.cancelToken.subscribe(a),
							r.signal &&
								(r.signal.aborted
									? a()
									: r.signal.addEventListener("abort", a)));
					const v = (function (e) {
						const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
						return (t && t[1]) || "";
					})(r.url);
					v && -1 === xe.protocols.indexOf(v)
						? n(new Y("Unsupported protocol " + v + ":", Y.ERR_BAD_REQUEST, e))
						: m.send(i || null);
				});
			},
		Qe = (e, t) => {
			const { length: n } = (e = e ? e.filter(Boolean) : []);
			if (t || n) {
				let n,
					r = new AbortController();
				const i = function (e) {
					if (!n) {
						(n = !0), a();
						const t = e instanceof Error ? e : this.reason;
						r.abort(
							t instanceof Y ? t : new Oe(t instanceof Error ? t.message : t)
						);
					}
				};
				let o =
					t &&
					setTimeout(() => {
						(o = null),
							i(new Y("timeout ".concat(t, " of ms exceeded"), Y.ETIMEDOUT));
					}, t);
				const a = () => {
					e &&
						(o && clearTimeout(o),
						(o = null),
						e.forEach((e) => {
							e.unsubscribe
								? e.unsubscribe(i)
								: e.removeEventListener("abort", i);
						}),
						(e = null));
				};
				e.forEach((e) => e.addEventListener("abort", i));
				const { signal: s } = r;
				return (s.unsubscribe = () => $.asap(a)), s;
			}
		};
	function Ye(e, t) {
		(this.v = e), (this.k = t);
	}
	function Ge(e) {
		return function () {
			return new Je(e.apply(this, arguments));
		};
	}
	function Je(e) {
		var t, n;
		function r(t, n) {
			try {
				var o = e[t](n),
					a = o.value,
					s = a instanceof Ye;
				Promise.resolve(s ? a.v : a).then(
					function (n) {
						if (s) {
							var l = "return" === t ? "return" : "next";
							if (!a.k || n.done) return r(l, n);
							n = e[l](n).value;
						}
						i(o.done ? "return" : "normal", n);
					},
					function (e) {
						r("throw", e);
					}
				);
			} catch (e) {
				i("throw", e);
			}
		}
		function i(e, i) {
			switch (e) {
				case "return":
					t.resolve({ value: i, done: !0 });
					break;
				case "throw":
					t.reject(i);
					break;
				default:
					t.resolve({ value: i, done: !1 });
			}
			(t = t.next) ? r(t.key, t.arg) : (n = null);
		}
		(this._invoke = function (e, i) {
			return new Promise(function (o, a) {
				var s = { key: e, arg: i, resolve: o, reject: a, next: null };
				n ? (n = n.next = s) : ((t = n = s), r(e, i));
			});
		}),
			"function" != typeof e.return && (this.return = void 0);
	}
	function Ze(e) {
		return new Ye(e, 0);
	}
	function et(e) {
		var t = {},
			n = !1;
		function r(t, r) {
			return (
				(n = !0),
				(r = new Promise(function (n) {
					n(e[t](r));
				})),
				{ done: !1, value: new Ye(r, 1) }
			);
		}
		return (
			(t[("undefined" != typeof Symbol && Symbol.iterator) || "@@iterator"] =
				function () {
					return this;
				}),
			(t.next = function (e) {
				return n ? ((n = !1), e) : r("next", e);
			}),
			"function" == typeof e.throw &&
				(t.throw = function (e) {
					if (n) throw ((n = !1), e);
					return r("throw", e);
				}),
			"function" == typeof e.return &&
				(t.return = function (e) {
					return n ? ((n = !1), e) : r("return", e);
				}),
			t
		);
	}
	function tt(e) {
		var t,
			n,
			r,
			i = 2;
		for (
			"undefined" != typeof Symbol &&
			((n = Symbol.asyncIterator), (r = Symbol.iterator));
			i--;

		) {
			if (n && null != (t = e[n])) return t.call(e);
			if (r && null != (t = e[r])) return new nt(t.call(e));
			(n = "@@asyncIterator"), (r = "@@iterator");
		}
		throw new TypeError("Object is not async iterable");
	}
	function nt(e) {
		function t(e) {
			if (Object(e) !== e)
				return Promise.reject(new TypeError(e + " is not an object."));
			var t = e.done;
			return Promise.resolve(e.value).then(function (e) {
				return { value: e, done: t };
			});
		}
		return (
			(nt = function (e) {
				(this.s = e), (this.n = e.next);
			}),
			(nt.prototype = {
				s: null,
				n: null,
				next: function () {
					return t(this.n.apply(this.s, arguments));
				},
				return: function (e) {
					var n = this.s.return;
					return void 0 === n
						? Promise.resolve({ value: e, done: !0 })
						: t(n.apply(this.s, arguments));
				},
				throw: function (e) {
					var n = this.s.return;
					return void 0 === n
						? Promise.reject(e)
						: t(n.apply(this.s, arguments));
				},
			}),
			new nt(e)
		);
	}
	(Je.prototype[
		("function" == typeof Symbol && Symbol.asyncIterator) || "@@asyncIterator"
	] = function () {
		return this;
	}),
		(Je.prototype.next = function (e) {
			return this._invoke("next", e);
		}),
		(Je.prototype.throw = function (e) {
			return this._invoke("throw", e);
		}),
		(Je.prototype.return = function (e) {
			return this._invoke("return", e);
		});
	const rt = function* (e, t) {
			let n = e.byteLength;
			if (!t || n < t) return void (yield e);
			let r,
				i = 0;
			for (; i < n; ) (r = i + t), yield e.slice(i, r), (i = r);
		},
		it = (function () {
			var e = Ge(function* (e, t) {
				var n,
					r = !1,
					i = !1;
				try {
					for (
						var o, a = tt(ot(e));
						(r = !(o = yield Ze(a.next())).done);
						r = !1
					) {
						const e = o.value;
						yield* et(tt(rt(e, t)));
					}
				} catch (s) {
					(i = !0), (n = s);
				} finally {
					try {
						r && null != a.return && (yield Ze(a.return()));
					} finally {
						if (i) throw n;
					}
				}
			});
			return function (t, n) {
				return e.apply(this, arguments);
			};
		})(),
		ot = (function () {
			var e = Ge(function* (e) {
				if (e[Symbol.asyncIterator]) return void (yield* et(tt(e)));
				const t = e.getReader();
				try {
					for (;;) {
						const { done: e, value: n } = yield Ze(t.read());
						if (e) break;
						yield n;
					}
				} finally {
					yield Ze(t.cancel());
				}
			});
			return function (t) {
				return e.apply(this, arguments);
			};
		})(),
		at = (e, t, n, r) => {
			const i = it(e, t);
			let o,
				a = 0,
				s = (e) => {
					o || ((o = !0), r && r(e));
				};
			return new ReadableStream(
				{
					async pull(e) {
						try {
							const { done: t, value: r } = await i.next();
							if (t) return s(), void e.close();
							let o = r.byteLength;
							if (n) {
								let e = (a += o);
								n(e);
							}
							e.enqueue(new Uint8Array(r));
						} catch (t) {
							throw (s(t), t);
						}
					},
					cancel: (e) => (s(e), i.return()),
				},
				{ highWaterMark: 2 }
			);
		},
		st =
			"function" === typeof fetch &&
			"function" === typeof Request &&
			"function" === typeof Response,
		lt = st && "function" === typeof ReadableStream,
		ut =
			st &&
			("function" === typeof TextEncoder
				? ((ct = new TextEncoder()), (e) => ct.encode(e))
				: async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
	var ct;
	const dt = function (e) {
			try {
				for (
					var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
					r < t;
					r++
				)
					n[r - 1] = arguments[r];
				return !!e(...n);
			} catch (i) {
				return !1;
			}
		},
		ft =
			lt &&
			dt(() => {
				let e = !1;
				const t = new Request(xe.origin, {
					body: new ReadableStream(),
					method: "POST",
					get duplex() {
						return (e = !0), "half";
					},
				}).headers.has("Content-Type");
				return e && !t;
			}),
		ht = lt && dt(() => $.isReadableStream(new Response("").body)),
		pt = { stream: ht && ((e) => e.body) };
	var mt;
	st &&
		((mt = new Response()),
		["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
			!pt[e] &&
				(pt[e] = $.isFunction(mt[e])
					? (t) => t[e]()
					: (t, n) => {
							throw new Y(
								"Response type '".concat(e, "' is not supported"),
								Y.ERR_NOT_SUPPORT,
								n
							);
					  });
		}));
	const gt = async (e, t) => {
			const n = $.toFiniteNumber(e.getContentLength());
			return null == n
				? (async (e) => {
						if (null == e) return 0;
						if ($.isBlob(e)) return e.size;
						if ($.isSpecCompliantForm(e)) {
							const t = new Request(xe.origin, { method: "POST", body: e });
							return (await t.arrayBuffer()).byteLength;
						}
						return $.isArrayBufferView(e) || $.isArrayBuffer(e)
							? e.byteLength
							: ($.isURLSearchParams(e) && (e += ""),
							  $.isString(e) ? (await ut(e)).byteLength : void 0);
				  })(t)
				: n;
		},
		vt = {
			http: null,
			xhr: Xe,
			fetch:
				st &&
				(async (e) => {
					let {
						url: t,
						method: n,
						data: r,
						signal: i,
						cancelToken: o,
						timeout: a,
						onDownloadProgress: s,
						onUploadProgress: l,
						responseType: u,
						headers: c,
						withCredentials: d = "same-origin",
						fetchOptions: f,
					} = Ke(e);
					u = u ? (u + "").toLowerCase() : "text";
					let h,
						p = Qe([i, o && o.toAbortSignal()], a);
					const m =
						p &&
						p.unsubscribe &&
						(() => {
							p.unsubscribe();
						});
					let g;
					try {
						if (
							l &&
							ft &&
							"get" !== n &&
							"head" !== n &&
							0 !== (g = await gt(c, r))
						) {
							let e,
								n = new Request(t, { method: "POST", body: r, duplex: "half" });
							if (
								($.isFormData(r) &&
									(e = n.headers.get("content-type")) &&
									c.setContentType(e),
								n.body)
							) {
								const [e, t] = Be(g, ze(Ue(l)));
								r = at(n.body, 65536, e, t);
							}
						}
						$.isString(d) || (d = d ? "include" : "omit");
						const i = "credentials" in Request.prototype;
						h = new Request(
							t,
							pe(
								pe({}, f),
								{},
								{
									signal: p,
									method: n.toUpperCase(),
									headers: c.normalize().toJSON(),
									body: r,
									duplex: "half",
									credentials: i ? d : void 0,
								}
							)
						);
						let o = await fetch(h);
						const a = ht && ("stream" === u || "response" === u);
						if (ht && (s || (a && m))) {
							const e = {};
							["status", "statusText", "headers"].forEach((t) => {
								e[t] = o[t];
							});
							const t = $.toFiniteNumber(o.headers.get("content-length")),
								[n, r] = (s && Be(t, ze(Ue(s), !0))) || [];
							o = new Response(
								at(o.body, 65536, n, () => {
									r && r(), m && m();
								}),
								e
							);
						}
						u = u || "text";
						let v = await pt[$.findKey(pt, u) || "text"](o, e);
						return (
							!a && m && m(),
							await new Promise((t, n) => {
								Me(t, n, {
									data: v,
									headers: Re.from(o.headers),
									status: o.status,
									statusText: o.statusText,
									config: e,
									request: h,
								});
							})
						);
					} catch (v) {
						if (
							(m && m(),
							v && "TypeError" === v.name && /fetch/i.test(v.message))
						)
							throw Object.assign(new Y("Network Error", Y.ERR_NETWORK, e, h), {
								cause: v.cause || v,
							});
						throw Y.from(v, v && v.code, e, h);
					}
				}),
		};
	$.forEach(vt, (e, t) => {
		if (e) {
			try {
				Object.defineProperty(e, "name", { value: t });
			} catch (n) {}
			Object.defineProperty(e, "adapterName", { value: t });
		}
	});
	const yt = (e) => "- ".concat(e),
		bt = (e) => $.isFunction(e) || null === e || !1 === e,
		wt = (e) => {
			e = $.isArray(e) ? e : [e];
			const { length: t } = e;
			let n, r;
			const i = {};
			for (let o = 0; o < t; o++) {
				let t;
				if (
					((n = e[o]),
					(r = n),
					!bt(n) && ((r = vt[(t = String(n)).toLowerCase()]), void 0 === r))
				)
					throw new Y("Unknown adapter '".concat(t, "'"));
				if (r) break;
				i[t || "#" + o] = r;
			}
			if (!r) {
				const e = Object.entries(i).map((e) => {
					let [t, n] = e;
					return (
						"adapter ".concat(t, " ") +
						(!1 === n
							? "is not supported by the environment"
							: "is not available in the build")
					);
				});
				let n = t
					? e.length > 1
						? "since :\n" + e.map(yt).join("\n")
						: " " + yt(e[0])
					: "as no adapter specified";
				throw new Y(
					"There is no suitable adapter to dispatch the request " + n,
					"ERR_NOT_SUPPORT"
				);
			}
			return r;
		};
	function xt(e) {
		if (
			(e.cancelToken && e.cancelToken.throwIfRequested(),
			e.signal && e.signal.aborted)
		)
			throw new Oe(null, e);
	}
	function St(e) {
		xt(e),
			(e.headers = Re.from(e.headers)),
			(e.data = je.call(e, e.transformRequest)),
			-1 !== ["post", "put", "patch"].indexOf(e.method) &&
				e.headers.setContentType("application/x-www-form-urlencoded", !1);
		return wt(e.adapter || Ee.adapter)(e).then(
			function (t) {
				return (
					xt(e),
					(t.data = je.call(e, e.transformResponse, t)),
					(t.headers = Re.from(t.headers)),
					t
				);
			},
			function (t) {
				return (
					De(t) ||
						(xt(e),
						t &&
							t.response &&
							((t.response.data = je.call(e, e.transformResponse, t.response)),
							(t.response.headers = Re.from(t.response.headers)))),
					Promise.reject(t)
				);
			}
		);
	}
	const kt = "1.7.9",
		Et = {};
	["object", "boolean", "number", "function", "string", "symbol"].forEach(
		(e, t) => {
			Et[e] = function (n) {
				return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
			};
		}
	);
	const Pt = {};
	(Et.transitional = function (e, t, n) {
		function r(e, t) {
			return (
				"[Axios v1.7.9] Transitional option '" +
				e +
				"'" +
				t +
				(n ? ". " + n : "")
			);
		}
		return (n, i, o) => {
			if (!1 === e)
				throw new Y(
					r(i, " has been removed" + (t ? " in " + t : "")),
					Y.ERR_DEPRECATED
				);
			return (
				t &&
					!Pt[i] &&
					((Pt[i] = !0),
					console.warn(
						r(
							i,
							" has been deprecated since v" +
								t +
								" and will be removed in the near future"
						)
					)),
				!e || e(n, i, o)
			);
		};
	}),
		(Et.spelling = function (e) {
			return (t, n) => (
				console.warn("".concat(n, " is likely a misspelling of ").concat(e)), !0
			);
		});
	const Ct = {
			assertOptions: function (e, t, n) {
				if ("object" !== typeof e)
					throw new Y("options must be an object", Y.ERR_BAD_OPTION_VALUE);
				const r = Object.keys(e);
				let i = r.length;
				for (; i-- > 0; ) {
					const o = r[i],
						a = t[o];
					if (a) {
						const t = e[o],
							n = void 0 === t || a(t, o, e);
						if (!0 !== n)
							throw new Y(
								"option " + o + " must be " + n,
								Y.ERR_BAD_OPTION_VALUE
							);
					} else if (!0 !== n)
						throw new Y("Unknown option " + o, Y.ERR_BAD_OPTION);
				}
			},
			validators: Et,
		},
		Tt = Ct.validators;
	class Ft {
		constructor(e) {
			(this.defaults = e),
				(this.interceptors = { request: new le(), response: new le() });
		}
		async request(e, t) {
			try {
				return await this._request(e, t);
			} catch (n) {
				if (n instanceof Error) {
					let e = {};
					Error.captureStackTrace
						? Error.captureStackTrace(e)
						: (e = new Error());
					const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
					try {
						n.stack
							? t &&
							  !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
							  (n.stack += "\n" + t)
							: (n.stack = t);
					} catch (r) {}
				}
				throw n;
			}
		}
		_request(e, t) {
			"string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
				(t = $e(this.defaults, t));
			const { transitional: n, paramsSerializer: r, headers: i } = t;
			void 0 !== n &&
				Ct.assertOptions(
					n,
					{
						silentJSONParsing: Tt.transitional(Tt.boolean),
						forcedJSONParsing: Tt.transitional(Tt.boolean),
						clarifyTimeoutError: Tt.transitional(Tt.boolean),
					},
					!1
				),
				null != r &&
					($.isFunction(r)
						? (t.paramsSerializer = { serialize: r })
						: Ct.assertOptions(
								r,
								{ encode: Tt.function, serialize: Tt.function },
								!0
						  )),
				Ct.assertOptions(
					t,
					{
						baseUrl: Tt.spelling("baseURL"),
						withXsrfToken: Tt.spelling("withXSRFToken"),
					},
					!0
				),
				(t.method = (t.method || this.defaults.method || "get").toLowerCase());
			let o = i && $.merge(i.common, i[t.method]);
			i &&
				$.forEach(
					["delete", "get", "head", "post", "put", "patch", "common"],
					(e) => {
						delete i[e];
					}
				),
				(t.headers = Re.concat(o, i));
			const a = [];
			let s = !0;
			this.interceptors.request.forEach(function (e) {
				("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
					((s = s && e.synchronous), a.unshift(e.fulfilled, e.rejected));
			});
			const l = [];
			let u;
			this.interceptors.response.forEach(function (e) {
				l.push(e.fulfilled, e.rejected);
			});
			let c,
				d = 0;
			if (!s) {
				const e = [St.bind(this), void 0];
				for (
					e.unshift.apply(e, a),
						e.push.apply(e, l),
						c = e.length,
						u = Promise.resolve(t);
					d < c;

				)
					u = u.then(e[d++], e[d++]);
				return u;
			}
			c = a.length;
			let f = t;
			for (d = 0; d < c; ) {
				const e = a[d++],
					t = a[d++];
				try {
					f = e(f);
				} catch (h) {
					t.call(this, h);
					break;
				}
			}
			try {
				u = St.call(this, f);
			} catch (h) {
				return Promise.reject(h);
			}
			for (d = 0, c = l.length; d < c; ) u = u.then(l[d++], l[d++]);
			return u;
		}
		getUri(e) {
			return se(
				He((e = $e(this.defaults, e)).baseURL, e.url),
				e.params,
				e.paramsSerializer
			);
		}
	}
	$.forEach(["delete", "get", "head", "options"], function (e) {
		Ft.prototype[e] = function (t, n) {
			return this.request(
				$e(n || {}, { method: e, url: t, data: (n || {}).data })
			);
		};
	}),
		$.forEach(["post", "put", "patch"], function (e) {
			function t(t) {
				return function (n, r, i) {
					return this.request(
						$e(i || {}, {
							method: e,
							headers: t ? { "Content-Type": "multipart/form-data" } : {},
							url: n,
							data: r,
						})
					);
				};
			}
			(Ft.prototype[e] = t()), (Ft.prototype[e + "Form"] = t(!0));
		});
	const _t = Ft;
	class At {
		constructor(e) {
			if ("function" !== typeof e)
				throw new TypeError("executor must be a function.");
			let t;
			this.promise = new Promise(function (e) {
				t = e;
			});
			const n = this;
			this.promise.then((e) => {
				if (!n._listeners) return;
				let t = n._listeners.length;
				for (; t-- > 0; ) n._listeners[t](e);
				n._listeners = null;
			}),
				(this.promise.then = (e) => {
					let t;
					const r = new Promise((e) => {
						n.subscribe(e), (t = e);
					}).then(e);
					return (
						(r.cancel = function () {
							n.unsubscribe(t);
						}),
						r
					);
				}),
				e(function (e, r, i) {
					n.reason || ((n.reason = new Oe(e, r, i)), t(n.reason));
				});
		}
		throwIfRequested() {
			if (this.reason) throw this.reason;
		}
		subscribe(e) {
			this.reason
				? e(this.reason)
				: this._listeners
				? this._listeners.push(e)
				: (this._listeners = [e]);
		}
		unsubscribe(e) {
			if (!this._listeners) return;
			const t = this._listeners.indexOf(e);
			-1 !== t && this._listeners.splice(t, 1);
		}
		toAbortSignal() {
			const e = new AbortController(),
				t = (t) => {
					e.abort(t);
				};
			return (
				this.subscribe(t),
				(e.signal.unsubscribe = () => this.unsubscribe(t)),
				e.signal
			);
		}
		static source() {
			let e;
			return {
				token: new At(function (t) {
					e = t;
				}),
				cancel: e,
			};
		}
	}
	const Rt = At;
	const jt = {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		EarlyHints: 103,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
		AlreadyReported: 208,
		ImUsed: 226,
		MultipleChoices: 300,
		MovedPermanently: 301,
		Found: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		Unused: 306,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,
		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		PayloadTooLarge: 413,
		UriTooLong: 414,
		UnsupportedMediaType: 415,
		RangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		MisdirectedRequest: 421,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		TooEarly: 425,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,
		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		VariantAlsoNegotiates: 506,
		InsufficientStorage: 507,
		LoopDetected: 508,
		NotExtended: 510,
		NetworkAuthenticationRequired: 511,
	};
	Object.entries(jt).forEach((e) => {
		let [t, n] = e;
		jt[n] = t;
	});
	const Dt = jt;
	const Lt = (function e(t) {
		const n = new _t(t),
			r = a(_t.prototype.request, n);
		return (
			$.extend(r, _t.prototype, n, { allOwnKeys: !0 }),
			$.extend(r, n, null, { allOwnKeys: !0 }),
			(r.create = function (n) {
				return e($e(t, n));
			}),
			r
		);
	})(Ee);
	(Lt.Axios = _t),
		(Lt.CanceledError = Oe),
		(Lt.CancelToken = Rt),
		(Lt.isCancel = De),
		(Lt.VERSION = kt),
		(Lt.toFormData = te),
		(Lt.AxiosError = Y),
		(Lt.Cancel = Lt.CanceledError),
		(Lt.all = function (e) {
			return Promise.all(e);
		}),
		(Lt.spread = function (e) {
			return function (t) {
				return e.apply(null, t);
			};
		}),
		(Lt.isAxiosError = function (e) {
			return $.isObject(e) && !0 === e.isAxiosError;
		}),
		(Lt.mergeConfig = $e),
		(Lt.AxiosHeaders = Re),
		(Lt.formToJSON = (e) => Se($.isHTMLForm(e) ? new FormData(e) : e)),
		(Lt.getAdapter = wt),
		(Lt.HttpStatusCode = Dt),
		(Lt.default = Lt);
	const Ot = Lt;
	var Mt = n(579);
	const Nt = function (e) {
		return (0, Mt.jsx)("h1", { className: "dex-title", children: e.children });
	};
	var Vt = {
			color: void 0,
			size: void 0,
			className: void 0,
			style: void 0,
			attr: void 0,
		},
		zt = i.createContext && i.createContext(Vt),
		Bt = ["attr", "size", "title"];
	function Ut(e, t) {
		if (null == e) return {};
		var n,
			r,
			i = (function (e, t) {
				if (null == e) return {};
				var n = {};
				for (var r in e)
					if (Object.prototype.hasOwnProperty.call(e, r)) {
						if (t.indexOf(r) >= 0) continue;
						n[r] = e[r];
					}
				return n;
			})(e, t);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			for (r = 0; r < o.length; r++)
				(n = o[r]),
					t.indexOf(n) >= 0 ||
						(Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
		}
		return i;
	}
	function It() {
		return (
			(It = Object.assign
				? Object.assign.bind()
				: function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var n = arguments[t];
							for (var r in n)
								Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
						}
						return e;
				  }),
			It.apply(this, arguments)
		);
	}
	function Wt(e, t) {
		var n = Object.keys(e);
		if (Object.getOwnPropertySymbols) {
			var r = Object.getOwnPropertySymbols(e);
			t &&
				(r = r.filter(function (t) {
					return Object.getOwnPropertyDescriptor(e, t).enumerable;
				})),
				n.push.apply(n, r);
		}
		return n;
	}
	function Ht(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = null != arguments[t] ? arguments[t] : {};
			t % 2
				? Wt(Object(n), !0).forEach(function (t) {
						qt(e, t, n[t]);
				  })
				: Object.getOwnPropertyDescriptors
				? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
				: Wt(Object(n)).forEach(function (t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
				  });
		}
		return e;
	}
	function qt(e, t, n) {
		return (
			(t = (function (e) {
				var t = (function (e, t) {
					if ("object" != typeof e || !e) return e;
					var n = e[Symbol.toPrimitive];
					if (void 0 !== n) {
						var r = n.call(e, t || "default");
						if ("object" != typeof r) return r;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === t ? String : Number)(e);
				})(e, "string");
				return "symbol" == typeof t ? t : t + "";
			})(t)) in e
				? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0,
				  })
				: (e[t] = n),
			e
		);
	}
	function $t(e) {
		return (
			e &&
			e.map((e, t) =>
				i.createElement(e.tag, Ht({ key: t }, e.attr), $t(e.child))
			)
		);
	}
	function Kt(e) {
		return (t) =>
			i.createElement(Xt, It({ attr: Ht({}, e.attr) }, t), $t(e.child));
	}
	function Xt(e) {
		var t = (t) => {
			var n,
				{ attr: r, size: o, title: a } = e,
				s = Ut(e, Bt),
				l = o || t.size || "1em";
			return (
				t.className && (n = t.className),
				e.className && (n = (n ? n + " " : "") + e.className),
				i.createElement(
					"svg",
					It(
						{ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
						t.attr,
						r,
						s,
						{
							className: n,
							style: Ht(Ht({ color: e.color || t.color }, t.style), e.style),
							height: l,
							width: l,
							xmlns: "http://www.w3.org/2000/svg",
						}
					),
					a && i.createElement("title", null, a),
					e.children
				)
			);
		};
		return void 0 !== zt
			? i.createElement(zt.Consumer, null, (e) => t(e))
			: t(Vt);
	}
	function Qt(e) {
		return Kt({
			tag: "svg",
			attr: { viewBox: "0 0 512 512" },
			child: [
				{
					tag: "path",
					attr: {
						d: "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z",
					},
					child: [],
				},
			],
		})(e);
	}
	function Yt(e) {
		return Kt({
			tag: "svg",
			attr: { viewBox: "0 0 384 512" },
			child: [
				{
					tag: "path",
					attr: {
						d: "M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z",
					},
					child: [],
				},
			],
		})(e);
	}
	function Gt(e) {
		return Kt({
			tag: "svg",
			attr: { viewBox: "0 0 576 512" },
			child: [
				{
					tag: "path",
					attr: {
						d: "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
					},
					child: [],
				},
			],
		})(e);
	}
	const Jt = function (e) {
		return (0, Mt.jsx)("div", {
			onClick: () =>
				document
					.querySelector(".dex-title")
					.scrollIntoView({ behavior: "smooth" }),
			className: "back-up-btn",
			children: (0, Mt.jsx)(Yt, { onClick: e.scrollFunc }),
		});
	};
	const Zt = function (e) {
		return (0, Mt.jsx)("center", {
			children: (0, Mt.jsx)("input", {
				className: "search-bar",
				type: "text",
				placeholder: "Type to filter Pok\xe9mon results",
				onChange: e.changeFunc,
			}),
		});
	};
	const en = function (e) {
		return (0, Mt.jsxs)(
			"div",
			{
				className: "pokemon-list-item " + e.itemSize,
				id: e.number,
				onClick: e.clicky,
				children: [
					(0, Mt.jsx)("img", {
						alt: e.name,
						src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(
							e.number,
							".png"
						),
					}),
					(0, Mt.jsx)("br", {}),
					(0, Mt.jsxs)("div", {
						children: [
							e.number <= 1025
								? "#" + e.number.toString().padStart(4, 0) + " - "
								: "",
							e.name.replace("-", " "),
						],
					}),
				],
			},
			e.number
		);
	};
	function tn(e) {
		if ("undefined" === typeof Proxy) return e;
		const t = new Map();
		return new Proxy(
			function () {
				return e(...arguments);
			},
			{
				get: (n, r) =>
					"create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r)),
			}
		);
	}
	function nn(e) {
		return null !== e && "object" === typeof e && "function" === typeof e.start;
	}
	function rn(e, t) {
		if (null == e) return {};
		var n,
			r,
			i = (function (e, t) {
				if (null == e) return {};
				var n = {};
				for (var r in e)
					if ({}.hasOwnProperty.call(e, r)) {
						if (t.includes(r)) continue;
						n[r] = e[r];
					}
				return n;
			})(e, t);
		if (Object.getOwnPropertySymbols) {
			var o = Object.getOwnPropertySymbols(e);
			for (r = 0; r < o.length; r++)
				(n = o[r]),
					t.includes(n) ||
						({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
		}
		return i;
	}
	const on = (e) => Array.isArray(e);
	function an(e, t) {
		if (!Array.isArray(t)) return !1;
		const n = t.length;
		if (n !== e.length) return !1;
		for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
		return !0;
	}
	function sn(e) {
		return "string" === typeof e || Array.isArray(e);
	}
	function ln(e) {
		const t = [{}, {}];
		return (
			null === e ||
				void 0 === e ||
				e.values.forEach((e, n) => {
					(t[0][n] = e.get()), (t[1][n] = e.getVelocity());
				}),
			t
		);
	}
	function un(e, t, n, r) {
		if ("function" === typeof t) {
			const [i, o] = ln(r);
			t = t(void 0 !== n ? n : e.custom, i, o);
		}
		if (
			("string" === typeof t && (t = e.variants && e.variants[t]),
			"function" === typeof t)
		) {
			const [i, o] = ln(r);
			t = t(void 0 !== n ? n : e.custom, i, o);
		}
		return t;
	}
	function cn(e, t, n) {
		const r = e.getProps();
		return un(r, t, void 0 !== n ? n : r.custom, e);
	}
	const dn = [
			"animate",
			"whileInView",
			"whileFocus",
			"whileHover",
			"whileTap",
			"whileDrag",
			"exit",
		],
		fn = ["initial", ...dn];
	function hn(e) {
		let t;
		return () => (void 0 === t && (t = e()), t);
	}
	const pn = hn(() => void 0 !== window.ScrollTimeline);
	class mn {
		constructor(e) {
			(this.stop = () => this.runAll("stop")),
				(this.animations = e.filter(Boolean));
		}
		get finished() {
			return Promise.all(
				this.animations.map((e) => ("finished" in e ? e.finished : e))
			);
		}
		getAll(e) {
			return this.animations[0][e];
		}
		setAll(e, t) {
			for (let n = 0; n < this.animations.length; n++)
				this.animations[n][e] = t;
		}
		attachTimeline(e, t) {
			const n = this.animations.map((n) =>
				pn() && n.attachTimeline
					? n.attachTimeline(e)
					: "function" === typeof t
					? t(n)
					: void 0
			);
			return () => {
				n.forEach((e, t) => {
					e && e(), this.animations[t].stop();
				});
			};
		}
		get time() {
			return this.getAll("time");
		}
		set time(e) {
			this.setAll("time", e);
		}
		get speed() {
			return this.getAll("speed");
		}
		set speed(e) {
			this.setAll("speed", e);
		}
		get startTime() {
			return this.getAll("startTime");
		}
		get duration() {
			let e = 0;
			for (let t = 0; t < this.animations.length; t++)
				e = Math.max(e, this.animations[t].duration);
			return e;
		}
		runAll(e) {
			this.animations.forEach((t) => t[e]());
		}
		flatten() {
			this.runAll("flatten");
		}
		play() {
			this.runAll("play");
		}
		pause() {
			this.runAll("pause");
		}
		cancel() {
			this.runAll("cancel");
		}
		complete() {
			this.runAll("complete");
		}
	}
	class gn extends mn {
		then(e, t) {
			return Promise.all(this.animations).then(e).catch(t);
		}
	}
	function vn(e, t) {
		return e ? e[t] || e.default || e : void 0;
	}
	const yn = 2e4;
	function bn(e) {
		let t = 0;
		let n = e.next(t);
		for (; !n.done && t < yn; ) (t += 50), (n = e.next(t));
		return t >= yn ? 1 / 0 : t;
	}
	function wn(e) {
		return "function" === typeof e;
	}
	function xn(e, t) {
		(e.timeline = t), (e.onfinish = null);
	}
	const Sn = (e) => Array.isArray(e) && "number" === typeof e[0],
		kn = { linearEasing: void 0 };
	function En(e, t) {
		const n = hn(e);
		return () => {
			var e;
			return null !== (e = kn[t]) && void 0 !== e ? e : n();
		};
	}
	const Pn = En(() => {
			try {
				document
					.createElement("div")
					.animate({ opacity: 0 }, { easing: "linear(0, 1)" });
			} catch (e) {
				return !1;
			}
			return !0;
		}, "linearEasing"),
		Cn = (e, t, n) => {
			const r = t - e;
			return 0 === r ? 1 : (n - e) / r;
		},
		Tn = function (e, t) {
			let n =
					arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
				r = "";
			const i = Math.max(Math.round(t / n), 2);
			for (let o = 0; o < i; o++) r += e(Cn(0, i - 1, o)) + ", ";
			return "linear(".concat(r.substring(0, r.length - 2), ")");
		};
	function Fn(e) {
		return Boolean(
			("function" === typeof e && Pn()) ||
				!e ||
				("string" === typeof e && (e in An || Pn())) ||
				Sn(e) ||
				(Array.isArray(e) && e.every(Fn))
		);
	}
	const _n = (e) => {
			let [t, n, r, i] = e;
			return "cubic-bezier("
				.concat(t, ", ")
				.concat(n, ", ")
				.concat(r, ", ")
				.concat(i, ")");
		},
		An = {
			linear: "linear",
			ease: "ease",
			easeIn: "ease-in",
			easeOut: "ease-out",
			easeInOut: "ease-in-out",
			circIn: _n([0, 0.65, 0.55, 1]),
			circOut: _n([0.55, 0, 1, 0.45]),
			backIn: _n([0.31, 0.01, 0.66, -0.59]),
			backOut: _n([0.33, 1.53, 0.69, 0.99]),
		};
	function Rn(e, t) {
		return e
			? "function" === typeof e && Pn()
				? Tn(e, t)
				: Sn(e)
				? _n(e)
				: Array.isArray(e)
				? e.map((e) => Rn(e, t) || An.easeOut)
				: An[e]
			: void 0;
	}
	const jn = { x: !1, y: !1 };
	function Dn() {
		return jn.x || jn.y;
	}
	function Ln(e, t) {
		const n = (function (e, t, n) {
				var r;
				if (e instanceof Element) return [e];
				if ("string" === typeof e) {
					let i = document;
					t && (i = t.current);
					const o =
						null !== (r = null === n || void 0 === n ? void 0 : n[e]) &&
						void 0 !== r
							? r
							: i.querySelectorAll(e);
					return o ? Array.from(o) : [];
				}
				return Array.from(e);
			})(e),
			r = new AbortController();
		return [
			n,
			pe(pe({ passive: !0 }, t), {}, { signal: r.signal }),
			() => r.abort(),
		];
	}
	function On(e) {
		return (t) => {
			"touch" === t.pointerType || Dn() || e(t);
		};
	}
	const Mn = (e, t) => !!t && (e === t || Mn(e, t.parentElement)),
		Nn = (e) =>
			"mouse" === e.pointerType
				? "number" !== typeof e.button || e.button <= 0
				: !1 !== e.isPrimary,
		Vn = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
	const zn = new WeakSet();
	function Bn(e) {
		return (t) => {
			"Enter" === t.key && e(t);
		};
	}
	function Un(e, t) {
		e.dispatchEvent(
			new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
		);
	}
	function In(e) {
		return Nn(e) && !Dn();
	}
	function Wn(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		const [r, i, o] = Ln(e, n),
			a = (e) => {
				const r = e.currentTarget;
				if (!In(e) || zn.has(r)) return;
				zn.add(r);
				const o = t(e),
					a = (e, t) => {
						window.removeEventListener("pointerup", s),
							window.removeEventListener("pointercancel", l),
							In(e) &&
								zn.has(r) &&
								(zn.delete(r), "function" === typeof o && o(e, { success: t }));
					},
					s = (e) => {
						a(e, n.useGlobalTarget || Mn(r, e.target));
					},
					l = (e) => {
						a(e, !1);
					};
				window.addEventListener("pointerup", s, i),
					window.addEventListener("pointercancel", l, i);
			};
		return (
			r.forEach((e) => {
				(function (e) {
					return Vn.has(e.tagName) || -1 !== e.tabIndex;
				})(e) ||
					null !== e.getAttribute("tabindex") ||
					(e.tabIndex = 0);
				(n.useGlobalTarget ? window : e).addEventListener("pointerdown", a, i),
					e.addEventListener(
						"focus",
						(e) =>
							((e, t) => {
								const n = e.currentTarget;
								if (!n) return;
								const r = Bn(() => {
									if (zn.has(n)) return;
									Un(n, "down");
									const e = Bn(() => {
										Un(n, "up");
									});
									n.addEventListener("keyup", e, t),
										n.addEventListener("blur", () => Un(n, "cancel"), t);
								});
								n.addEventListener("keydown", r, t),
									n.addEventListener(
										"blur",
										() => n.removeEventListener("keydown", r),
										t
									);
							})(e, i),
						i
					);
			}),
			o
		);
	}
	const Hn = (e) => 1e3 * e,
		qn = (e) => e / 1e3,
		$n = (e) => e;
	const Kn = [
			"transformPerspective",
			"x",
			"y",
			"z",
			"translateX",
			"translateY",
			"translateZ",
			"scale",
			"scaleX",
			"scaleY",
			"rotate",
			"rotateX",
			"rotateY",
			"rotateZ",
			"skew",
			"skewX",
			"skewY",
		],
		Xn = new Set(Kn),
		Qn = new Set(["width", "height", "top", "left", "right", "bottom", ...Kn]),
		Yn = (e) => (on(e) ? e[e.length - 1] || 0 : e),
		Gn = !1,
		Jn = !1;
	const Zn = [
		"read",
		"resolveKeyframes",
		"update",
		"preRender",
		"render",
		"postRender",
	];
	function er(e, t) {
		let n = !1,
			r = !0;
		const i = { delta: 0, timestamp: 0, isProcessing: !1 },
			o = () => (n = !0),
			a = Zn.reduce(
				(e, t) => (
					(e[t] = (function (e) {
						let t = new Set(),
							n = new Set(),
							r = !1,
							i = !1;
						const o = new WeakSet();
						let a = { delta: 0, timestamp: 0, isProcessing: !1 };
						function s(t) {
							o.has(t) && (l.schedule(t), e()), t(a);
						}
						const l = {
							schedule: function (e) {
								const i =
									arguments.length > 2 &&
									void 0 !== arguments[2] &&
									arguments[2] &&
									r
										? t
										: n;
								return (
									arguments.length > 1 &&
										void 0 !== arguments[1] &&
										arguments[1] &&
										o.add(e),
									i.has(e) || i.add(e),
									e
								);
							},
							cancel: (e) => {
								n.delete(e), o.delete(e);
							},
							process: (e) => {
								(a = e),
									r
										? (i = !0)
										: ((r = !0),
										  ([t, n] = [n, t]),
										  t.forEach(s),
										  t.clear(),
										  (r = !1),
										  i && ((i = !1), l.process(e)));
							},
						};
						return l;
					})(o)),
					e
				),
				{}
			),
			{
				read: s,
				resolveKeyframes: l,
				update: u,
				preRender: c,
				render: d,
				postRender: f,
			} = a,
			h = () => {
				const o = Jn ? i.timestamp : performance.now();
				(n = !1),
					(i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, 40), 1)),
					(i.timestamp = o),
					(i.isProcessing = !0),
					s.process(i),
					l.process(i),
					u.process(i),
					c.process(i),
					d.process(i),
					f.process(i),
					(i.isProcessing = !1),
					n && t && ((r = !1), e(h));
			},
			p = Zn.reduce((t, o) => {
				const s = a[o];
				return (
					(t[o] = function (t) {
						let o =
								arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
							a =
								arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
						return (
							n || ((n = !0), (r = !0), i.isProcessing || e(h)),
							s.schedule(t, o, a)
						);
					}),
					t
				);
			}, {});
		return {
			schedule: p,
			cancel: (e) => {
				for (let t = 0; t < Zn.length; t++) a[Zn[t]].cancel(e);
			},
			state: i,
			steps: a,
		};
	}
	const {
		schedule: tr,
		cancel: nr,
		state: rr,
		steps: ir,
	} = er(
		"undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : $n,
		!0
	);
	let or;
	function ar() {
		or = void 0;
	}
	const sr = {
		now: () => (
			void 0 === or &&
				sr.set(rr.isProcessing || Jn ? rr.timestamp : performance.now()),
			or
		),
		set: (e) => {
			(or = e), queueMicrotask(ar);
		},
	};
	function lr(e, t) {
		-1 === e.indexOf(t) && e.push(t);
	}
	function ur(e, t) {
		const n = e.indexOf(t);
		n > -1 && e.splice(n, 1);
	}
	class cr {
		constructor() {
			this.subscriptions = [];
		}
		add(e) {
			return lr(this.subscriptions, e), () => ur(this.subscriptions, e);
		}
		notify(e, t, n) {
			const r = this.subscriptions.length;
			if (r)
				if (1 === r) this.subscriptions[0](e, t, n);
				else
					for (let i = 0; i < r; i++) {
						const r = this.subscriptions[i];
						r && r(e, t, n);
					}
		}
		getSize() {
			return this.subscriptions.length;
		}
		clear() {
			this.subscriptions.length = 0;
		}
	}
	function dr(e, t) {
		return t ? e * (1e3 / t) : 0;
	}
	const fr = { current: void 0 };
	class hr {
		constructor(e) {
			var t = this;
			let n =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			(this.version = "11.18.2"),
				(this.canTrackVelocity = null),
				(this.events = {}),
				(this.updateAndNotify = function (e) {
					let n =
						!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
					const r = sr.now();
					t.updatedAt !== r && t.setPrevFrameValue(),
						(t.prev = t.current),
						t.setCurrent(e),
						t.current !== t.prev &&
							t.events.change &&
							t.events.change.notify(t.current),
						n &&
							t.events.renderRequest &&
							t.events.renderRequest.notify(t.current);
				}),
				(this.hasAnimated = !1),
				this.setCurrent(e),
				(this.owner = n.owner);
		}
		setCurrent(e) {
			var t;
			(this.current = e),
				(this.updatedAt = sr.now()),
				null === this.canTrackVelocity &&
					void 0 !== e &&
					(this.canTrackVelocity = ((t = this.current), !isNaN(parseFloat(t))));
		}
		setPrevFrameValue() {
			let e =
				arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: this.current;
			(this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
		}
		onChange(e) {
			return this.on("change", e);
		}
		on(e, t) {
			this.events[e] || (this.events[e] = new cr());
			const n = this.events[e].add(t);
			return "change" === e
				? () => {
						n(),
							tr.read(() => {
								this.events.change.getSize() || this.stop();
							});
				  }
				: n;
		}
		clearListeners() {
			for (const e in this.events) this.events[e].clear();
		}
		attach(e, t) {
			(this.passiveEffect = e), (this.stopPassiveEffect = t);
		}
		set(e) {
			let t =
				!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
			t && this.passiveEffect
				? this.passiveEffect(e, this.updateAndNotify)
				: this.updateAndNotify(e, t);
		}
		setWithVelocity(e, t, n) {
			this.set(t),
				(this.prev = void 0),
				(this.prevFrameValue = e),
				(this.prevUpdatedAt = this.updatedAt - n);
		}
		jump(e) {
			let t =
				!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
			this.updateAndNotify(e),
				(this.prev = e),
				(this.prevUpdatedAt = this.prevFrameValue = void 0),
				t && this.stop(),
				this.stopPassiveEffect && this.stopPassiveEffect();
		}
		get() {
			return fr.current && fr.current.push(this), this.current;
		}
		getPrevious() {
			return this.prev;
		}
		getVelocity() {
			const e = sr.now();
			if (
				!this.canTrackVelocity ||
				void 0 === this.prevFrameValue ||
				e - this.updatedAt > 30
			)
				return 0;
			const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
			return dr(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
		}
		start(e) {
			return (
				this.stop(),
				new Promise((t) => {
					(this.hasAnimated = !0),
						(this.animation = e(t)),
						this.events.animationStart && this.events.animationStart.notify();
				}).then(() => {
					this.events.animationComplete &&
						this.events.animationComplete.notify(),
						this.clearAnimation();
				})
			);
		}
		stop() {
			this.animation &&
				(this.animation.stop(),
				this.events.animationCancel && this.events.animationCancel.notify()),
				this.clearAnimation();
		}
		isAnimating() {
			return !!this.animation;
		}
		clearAnimation() {
			delete this.animation;
		}
		destroy() {
			this.clearListeners(),
				this.stop(),
				this.stopPassiveEffect && this.stopPassiveEffect();
		}
	}
	function pr(e, t) {
		return new hr(e, t);
	}
	const mr = ["transitionEnd", "transition"];
	function gr(e, t, n) {
		e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, pr(n));
	}
	const vr = (e) => Boolean(e && e.getVelocity);
	function yr(e, t) {
		const n = e.getValue("willChange");
		if (((r = n), Boolean(vr(r) && r.add))) return n.add(t);
		var r;
	}
	const br = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
		wr = "data-" + br("framerAppearId");
	function xr(e) {
		return e.props[wr];
	}
	const Sr = !1,
		kr = (e, t, n) =>
			(((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
	function Er(e, t, n, r) {
		if (e === t && n === r) return $n;
		const i = (t) =>
			(function (e, t, n, r, i) {
				let o,
					a,
					s = 0;
				do {
					(a = t + (n - t) / 2),
						(o = kr(a, r, i) - e),
						o > 0 ? (n = a) : (t = a);
				} while (Math.abs(o) > 1e-7 && ++s < 12);
				return a;
			})(t, 0, 1, e, n);
		return (e) => (0 === e || 1 === e ? e : kr(i(e), t, r));
	}
	const Pr = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
		Cr = (e) => (t) => 1 - e(1 - t),
		Tr = Er(0.33, 1.53, 0.69, 0.99),
		Fr = Cr(Tr),
		_r = Pr(Fr),
		Ar = (e) =>
			(e *= 2) < 1 ? 0.5 * Fr(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
		Rr = (e) => 1 - Math.sin(Math.acos(e)),
		jr = Cr(Rr),
		Dr = Pr(Rr),
		Lr = (e) =>
			/^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(
				e
			);
	const Or = (e, t, n) => (n > t ? t : n < e ? e : n),
		Mr = {
			test: (e) => "number" === typeof e,
			parse: parseFloat,
			transform: (e) => e,
		},
		Nr = pe(pe({}, Mr), {}, { transform: (e) => Or(0, 1, e) }),
		Vr = pe(pe({}, Mr), {}, { default: 1 }),
		zr = (e) => Math.round(1e5 * e) / 1e5,
		Br = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
	const Ur =
			/^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
		Ir = (e, t) => (n) =>
			Boolean(
				("string" === typeof n && Ur.test(n) && n.startsWith(e)) ||
					(t &&
						!(function (e) {
							return null == e;
						})(n) &&
						Object.prototype.hasOwnProperty.call(n, t))
			),
		Wr = (e, t, n) => (r) => {
			if ("string" !== typeof r) return r;
			const [i, o, a, s] = r.match(Br);
			return {
				[e]: parseFloat(i),
				[t]: parseFloat(o),
				[n]: parseFloat(a),
				alpha: void 0 !== s ? parseFloat(s) : 1,
			};
		},
		Hr = pe(
			pe({}, Mr),
			{},
			{ transform: (e) => Math.round(((e) => Or(0, 255, e))(e)) }
		),
		qr = {
			test: Ir("rgb", "red"),
			parse: Wr("red", "green", "blue"),
			transform: (e) => {
				let { red: t, green: n, blue: r, alpha: i = 1 } = e;
				return (
					"rgba(" +
					Hr.transform(t) +
					", " +
					Hr.transform(n) +
					", " +
					Hr.transform(r) +
					", " +
					zr(Nr.transform(i)) +
					")"
				);
			},
		};
	const $r = {
			test: Ir("#"),
			parse: function (e) {
				let t = "",
					n = "",
					r = "",
					i = "";
				return (
					e.length > 5
						? ((t = e.substring(1, 3)),
						  (n = e.substring(3, 5)),
						  (r = e.substring(5, 7)),
						  (i = e.substring(7, 9)))
						: ((t = e.substring(1, 2)),
						  (n = e.substring(2, 3)),
						  (r = e.substring(3, 4)),
						  (i = e.substring(4, 5)),
						  (t += t),
						  (n += n),
						  (r += r),
						  (i += i)),
					{
						red: parseInt(t, 16),
						green: parseInt(n, 16),
						blue: parseInt(r, 16),
						alpha: i ? parseInt(i, 16) / 255 : 1,
					}
				);
			},
			transform: qr.transform,
		},
		Kr = (e) => ({
			test: (t) =>
				"string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
			parse: parseFloat,
			transform: (t) => "".concat(t).concat(e),
		}),
		Xr = Kr("deg"),
		Qr = Kr("%"),
		Yr = Kr("px"),
		Gr = Kr("vh"),
		Jr = Kr("vw"),
		Zr = pe(
			pe({}, Qr),
			{},
			{
				parse: (e) => Qr.parse(e) / 100,
				transform: (e) => Qr.transform(100 * e),
			}
		),
		ei = {
			test: Ir("hsl", "hue"),
			parse: Wr("hue", "saturation", "lightness"),
			transform: (e) => {
				let { hue: t, saturation: n, lightness: r, alpha: i = 1 } = e;
				return (
					"hsla(" +
					Math.round(t) +
					", " +
					Qr.transform(zr(n)) +
					", " +
					Qr.transform(zr(r)) +
					", " +
					zr(Nr.transform(i)) +
					")"
				);
			},
		},
		ti = {
			test: (e) => qr.test(e) || $r.test(e) || ei.test(e),
			parse: (e) =>
				qr.test(e) ? qr.parse(e) : ei.test(e) ? ei.parse(e) : $r.parse(e),
			transform: (e) =>
				"string" === typeof e
					? e
					: e.hasOwnProperty("red")
					? qr.transform(e)
					: ei.transform(e),
		},
		ni =
			/(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
	const ri = "number",
		ii = "color",
		oi =
			/var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;
	function ai(e) {
		const t = e.toString(),
			n = [],
			r = { color: [], number: [], var: [] },
			i = [];
		let o = 0;
		const a = t
			.replace(
				oi,
				(e) => (
					ti.test(e)
						? (r.color.push(o), i.push(ii), n.push(ti.parse(e)))
						: e.startsWith("var(")
						? (r.var.push(o), i.push("var"), n.push(e))
						: (r.number.push(o), i.push(ri), n.push(parseFloat(e))),
					++o,
					"${}"
				)
			)
			.split("${}");
		return { values: n, split: a, indexes: r, types: i };
	}
	function si(e) {
		return ai(e).values;
	}
	function li(e) {
		const { split: t, types: n } = ai(e),
			r = t.length;
		return (e) => {
			let i = "";
			for (let o = 0; o < r; o++)
				if (((i += t[o]), void 0 !== e[o])) {
					const t = n[o];
					i += t === ri ? zr(e[o]) : t === ii ? ti.transform(e[o]) : e[o];
				}
			return i;
		};
	}
	const ui = (e) => ("number" === typeof e ? 0 : e);
	const ci = {
			test: function (e) {
				var t, n;
				return (
					isNaN(e) &&
					"string" === typeof e &&
					((null === (t = e.match(Br)) || void 0 === t ? void 0 : t.length) ||
						0) +
						((null === (n = e.match(ni)) || void 0 === n ? void 0 : n.length) ||
							0) >
						0
				);
			},
			parse: si,
			createTransformer: li,
			getAnimatableNone: function (e) {
				const t = si(e);
				return li(e)(t.map(ui));
			},
		},
		di = new Set(["brightness", "contrast", "saturate", "opacity"]);
	function fi(e) {
		const [t, n] = e.slice(0, -1).split("(");
		if ("drop-shadow" === t) return e;
		const [r] = n.match(Br) || [];
		if (!r) return e;
		const i = n.replace(r, "");
		let o = di.has(t) ? 1 : 0;
		return r !== n && (o *= 100), t + "(" + o + i + ")";
	}
	const hi =
			/\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
		pi = pe(
			pe({}, ci),
			{},
			{
				getAnimatableNone: (e) => {
					const t = e.match(hi);
					return t ? t.map(fi).join(" ") : e;
				},
			}
		),
		mi = {
			borderWidth: Yr,
			borderTopWidth: Yr,
			borderRightWidth: Yr,
			borderBottomWidth: Yr,
			borderLeftWidth: Yr,
			borderRadius: Yr,
			radius: Yr,
			borderTopLeftRadius: Yr,
			borderTopRightRadius: Yr,
			borderBottomRightRadius: Yr,
			borderBottomLeftRadius: Yr,
			width: Yr,
			maxWidth: Yr,
			height: Yr,
			maxHeight: Yr,
			top: Yr,
			right: Yr,
			bottom: Yr,
			left: Yr,
			padding: Yr,
			paddingTop: Yr,
			paddingRight: Yr,
			paddingBottom: Yr,
			paddingLeft: Yr,
			margin: Yr,
			marginTop: Yr,
			marginRight: Yr,
			marginBottom: Yr,
			marginLeft: Yr,
			backgroundPositionX: Yr,
			backgroundPositionY: Yr,
		},
		gi = {
			rotate: Xr,
			rotateX: Xr,
			rotateY: Xr,
			rotateZ: Xr,
			scale: Vr,
			scaleX: Vr,
			scaleY: Vr,
			scaleZ: Vr,
			skew: Xr,
			skewX: Xr,
			skewY: Xr,
			distance: Yr,
			translateX: Yr,
			translateY: Yr,
			translateZ: Yr,
			x: Yr,
			y: Yr,
			z: Yr,
			perspective: Yr,
			transformPerspective: Yr,
			opacity: Nr,
			originX: Zr,
			originY: Zr,
			originZ: Yr,
		},
		vi = pe(pe({}, Mr), {}, { transform: Math.round }),
		yi = pe(
			pe(pe({}, mi), gi),
			{},
			{
				zIndex: vi,
				size: Yr,
				fillOpacity: Nr,
				strokeOpacity: Nr,
				numOctaves: vi,
			}
		),
		bi = pe(
			pe({}, yi),
			{},
			{
				color: ti,
				backgroundColor: ti,
				outlineColor: ti,
				fill: ti,
				stroke: ti,
				borderColor: ti,
				borderTopColor: ti,
				borderRightColor: ti,
				borderBottomColor: ti,
				borderLeftColor: ti,
				filter: pi,
				WebkitFilter: pi,
			}
		),
		wi = (e) => bi[e];
	function xi(e, t) {
		let n = wi(e);
		return (
			n !== pi && (n = ci),
			n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
		);
	}
	const Si = new Set(["auto", "none", "0"]);
	const ki = (e) => e === Mr || e === Yr,
		Ei = (e, t) => parseFloat(e.split(", ")[t]),
		Pi = (e, t) => (n, r) => {
			let { transform: i } = r;
			if ("none" === i || !i) return 0;
			const o = i.match(
				/^matrix3d\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
			);
			if (o) return Ei(o[1], t);
			{
				const t = i.match(
					/^matrix\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/
				);
				return t ? Ei(t[1], e) : 0;
			}
		},
		Ci = new Set(["x", "y", "z"]),
		Ti = Kn.filter((e) => !Ci.has(e));
	const Fi = {
		width: (e, t) => {
			let { x: n } = e,
				{ paddingLeft: r = "0", paddingRight: i = "0" } = t;
			return n.max - n.min - parseFloat(r) - parseFloat(i);
		},
		height: (e, t) => {
			let { y: n } = e,
				{ paddingTop: r = "0", paddingBottom: i = "0" } = t;
			return n.max - n.min - parseFloat(r) - parseFloat(i);
		},
		top: (e, t) => {
			let { top: n } = t;
			return parseFloat(n);
		},
		left: (e, t) => {
			let { left: n } = t;
			return parseFloat(n);
		},
		bottom: (e, t) => {
			let { y: n } = e,
				{ top: r } = t;
			return parseFloat(r) + (n.max - n.min);
		},
		right: (e, t) => {
			let { x: n } = e,
				{ left: r } = t;
			return parseFloat(r) + (n.max - n.min);
		},
		x: Pi(4, 13),
		y: Pi(5, 14),
	};
	(Fi.translateX = Fi.x), (Fi.translateY = Fi.y);
	const _i = new Set();
	let Ai = !1,
		Ri = !1;
	function ji() {
		if (Ri) {
			const e = Array.from(_i).filter((e) => e.needsMeasurement),
				t = new Set(e.map((e) => e.element)),
				n = new Map();
			t.forEach((e) => {
				const t = (function (e) {
					const t = [];
					return (
						Ti.forEach((n) => {
							const r = e.getValue(n);
							void 0 !== r &&
								(t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
						}),
						t
					);
				})(e);
				t.length && (n.set(e, t), e.render());
			}),
				e.forEach((e) => e.measureInitialState()),
				t.forEach((e) => {
					e.render();
					const t = n.get(e);
					t &&
						t.forEach((t) => {
							let [n, r] = t;
							var i;
							null === (i = e.getValue(n)) || void 0 === i || i.set(r);
						});
				}),
				e.forEach((e) => e.measureEndState()),
				e.forEach((e) => {
					void 0 !== e.suspendedScrollY &&
						window.scrollTo(0, e.suspendedScrollY);
				});
		}
		(Ri = !1), (Ai = !1), _i.forEach((e) => e.complete()), _i.clear();
	}
	function Di() {
		_i.forEach((e) => {
			e.readKeyframes(), e.needsMeasurement && (Ri = !0);
		});
	}
	class Li {
		constructor(e, t, n, r, i) {
			let o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
			(this.isComplete = !1),
				(this.isAsync = !1),
				(this.needsMeasurement = !1),
				(this.isScheduled = !1),
				(this.unresolvedKeyframes = [...e]),
				(this.onComplete = t),
				(this.name = n),
				(this.motionValue = r),
				(this.element = i),
				(this.isAsync = o);
		}
		scheduleResolve() {
			(this.isScheduled = !0),
				this.isAsync
					? (_i.add(this),
					  Ai || ((Ai = !0), tr.read(Di), tr.resolveKeyframes(ji)))
					: (this.readKeyframes(), this.complete());
		}
		readKeyframes() {
			const {
				unresolvedKeyframes: e,
				name: t,
				element: n,
				motionValue: r,
			} = this;
			for (let i = 0; i < e.length; i++)
				if (null === e[i])
					if (0 === i) {
						const i = null === r || void 0 === r ? void 0 : r.get(),
							o = e[e.length - 1];
						if (void 0 !== i) e[0] = i;
						else if (n && t) {
							const r = n.readValue(t, o);
							void 0 !== r && null !== r && (e[0] = r);
						}
						void 0 === e[0] && (e[0] = o), r && void 0 === i && r.set(e[0]);
					} else e[i] = e[i - 1];
		}
		setFinalKeyframe() {}
		measureInitialState() {}
		renderEndStyles() {}
		measureEndState() {}
		complete() {
			(this.isComplete = !0),
				this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
				_i.delete(this);
		}
		cancel() {
			this.isComplete || ((this.isScheduled = !1), _i.delete(this));
		}
		resume() {
			this.isComplete || this.scheduleResolve();
		}
	}
	let Oi = $n,
		Mi = $n;
	const Ni = (e) => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
		Vi = (e) => (t) => "string" === typeof t && t.startsWith(e),
		zi = Vi("--"),
		Bi = Vi("var(--"),
		Ui = (e) => !!Bi(e) && Ii.test(e.split("/*")[0].trim()),
		Ii =
			/var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i,
		Wi =
			/^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;
	function Hi(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
		Mi(
			n <= 4,
			'Max CSS variable fallback depth detected in property "'.concat(
				e,
				'". This may indicate a circular fallback dependency.'
			)
		);
		const [r, i] = (function (e) {
			const t = Wi.exec(e);
			if (!t) return [,];
			const [, n, r, i] = t;
			return ["--".concat(null !== n && void 0 !== n ? n : r), i];
		})(e);
		if (!r) return;
		const o = window.getComputedStyle(t).getPropertyValue(r);
		if (o) {
			const e = o.trim();
			return Ni(e) ? parseFloat(e) : e;
		}
		return Ui(i) ? Hi(i, t, n + 1) : i;
	}
	const qi = (e) => (t) => t.test(e),
		$i = [
			Mr,
			Yr,
			Qr,
			Xr,
			Jr,
			Gr,
			{ test: (e) => "auto" === e, parse: (e) => e },
		],
		Ki = (e) => $i.find(qi(e));
	class Xi extends Li {
		constructor(e, t, n, r, i) {
			super(e, t, n, r, i, !0);
		}
		readKeyframes() {
			const { unresolvedKeyframes: e, element: t, name: n } = this;
			if (!t || !t.current) return;
			super.readKeyframes();
			for (let s = 0; s < e.length; s++) {
				let n = e[s];
				if ("string" === typeof n && ((n = n.trim()), Ui(n))) {
					const r = Hi(n, t.current);
					void 0 !== r && (e[s] = r),
						s === e.length - 1 && (this.finalKeyframe = n);
				}
			}
			if ((this.resolveNoneKeyframes(), !Qn.has(n) || 2 !== e.length)) return;
			const [r, i] = e,
				o = Ki(r),
				a = Ki(i);
			if (o !== a)
				if (ki(o) && ki(a))
					for (let s = 0; s < e.length; s++) {
						const t = e[s];
						"string" === typeof t && (e[s] = parseFloat(t));
					}
				else this.needsMeasurement = !0;
		}
		resolveNoneKeyframes() {
			const { unresolvedKeyframes: e, name: t } = this,
				n = [];
			for (let i = 0; i < e.length; i++)
				("number" === typeof (r = e[i])
					? 0 === r
					: null === r || "none" === r || "0" === r || Lr(r)) && n.push(i);
			var r;
			n.length &&
				(function (e, t, n) {
					let r,
						i = 0;
					for (; i < e.length && !r; ) {
						const t = e[i];
						"string" === typeof t &&
							!Si.has(t) &&
							ai(t).values.length &&
							(r = e[i]),
							i++;
					}
					if (r && n) for (const o of t) e[o] = xi(n, r);
				})(e, n, t);
		}
		measureInitialState() {
			const { element: e, unresolvedKeyframes: t, name: n } = this;
			if (!e || !e.current) return;
			"height" === n && (this.suspendedScrollY = window.pageYOffset),
				(this.measuredOrigin = Fi[n](
					e.measureViewportBox(),
					window.getComputedStyle(e.current)
				)),
				(t[0] = this.measuredOrigin);
			const r = t[t.length - 1];
			void 0 !== r && e.getValue(n, r).jump(r, !1);
		}
		measureEndState() {
			var e;
			const { element: t, name: n, unresolvedKeyframes: r } = this;
			if (!t || !t.current) return;
			const i = t.getValue(n);
			i && i.jump(this.measuredOrigin, !1);
			const o = r.length - 1,
				a = r[o];
			(r[o] = Fi[n](
				t.measureViewportBox(),
				window.getComputedStyle(t.current)
			)),
				null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a),
				(null === (e = this.removedTransforms) || void 0 === e
					? void 0
					: e.length) &&
					this.removedTransforms.forEach((e) => {
						let [n, r] = e;
						t.getValue(n).set(r);
					}),
				this.resolveNoneKeyframes();
		}
	}
	const Qi = (e, t) =>
		"zIndex" !== t &&
		(!("number" !== typeof e && !Array.isArray(e)) ||
			!(
				"string" !== typeof e ||
				(!ci.test(e) && "0" !== e) ||
				e.startsWith("url(")
			));
	function Yi(e, t, n, r) {
		const i = e[0];
		if (null === i) return !1;
		if ("display" === t || "visibility" === t) return !0;
		const o = e[e.length - 1],
			a = Qi(i, t),
			s = Qi(o, t);
		return (
			Oi(
				a === s,
				"You are trying to animate "
					.concat(t, ' from "')
					.concat(i, '" to "')
					.concat(o, '". ')
					.concat(
						i,
						" is not an animatable value - to enable this animation set "
					)
					.concat(i, " to a value animatable to ")
					.concat(o, " via the `style` property.")
			),
			!(!a || !s) &&
				((function (e) {
					const t = e[0];
					if (1 === e.length) return !0;
					for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
				})(e) ||
					(("spring" === n || wn(n)) && r))
		);
	}
	const Gi = (e) => null !== e;
	function Ji(e, t, n) {
		let { repeat: r, repeatType: i = "loop" } = t;
		const o = e.filter(Gi),
			a = r && "loop" !== i && r % 2 === 1 ? 0 : o.length - 1;
		return a && void 0 !== n ? n : o[a];
	}
	const Zi = [
		"autoplay",
		"delay",
		"type",
		"repeat",
		"repeatDelay",
		"repeatType",
	];
	class eo {
		constructor(e) {
			let {
					autoplay: t = !0,
					delay: n = 0,
					type: r = "keyframes",
					repeat: i = 0,
					repeatDelay: o = 0,
					repeatType: a = "loop",
				} = e,
				s = rn(e, Zi);
			(this.isStopped = !1),
				(this.hasAttemptedResolve = !1),
				(this.createdAt = sr.now()),
				(this.options = pe(
					{
						autoplay: t,
						delay: n,
						type: r,
						repeat: i,
						repeatDelay: o,
						repeatType: a,
					},
					s
				)),
				this.updateFinishedPromise();
		}
		calcStartTime() {
			return this.resolvedAt && this.resolvedAt - this.createdAt > 40
				? this.resolvedAt
				: this.createdAt;
		}
		get resolved() {
			return (
				this._resolved || this.hasAttemptedResolve || (Di(), ji()),
				this._resolved
			);
		}
		onKeyframesResolved(e, t) {
			(this.resolvedAt = sr.now()), (this.hasAttemptedResolve = !0);
			const {
				name: n,
				type: r,
				velocity: i,
				delay: o,
				onComplete: a,
				onUpdate: s,
				isGenerator: l,
			} = this.options;
			if (!l && !Yi(e, n, r, i)) {
				if (Sr || !o)
					return (
						s && s(Ji(e, this.options, t)),
						a && a(),
						void this.resolveFinishedPromise()
					);
				this.options.duration = 0;
			}
			const u = this.initPlayback(e, t);
			!1 !== u &&
				((this._resolved = pe({ keyframes: e, finalKeyframe: t }, u)),
				this.onPostResolved());
		}
		onPostResolved() {}
		then(e, t) {
			return this.currentFinishedPromise.then(e, t);
		}
		flatten() {
			(this.options.type = "keyframes"), (this.options.ease = "linear");
		}
		updateFinishedPromise() {
			this.currentFinishedPromise = new Promise((e) => {
				this.resolveFinishedPromise = e;
			});
		}
	}
	const to = (e, t, n) => e + (t - e) * n;
	function no(e, t, n) {
		return (
			n < 0 && (n += 1),
			n > 1 && (n -= 1),
			n < 1 / 6
				? e + 6 * (t - e) * n
				: n < 0.5
				? t
				: n < 2 / 3
				? e + (t - e) * (2 / 3 - n) * 6
				: e
		);
	}
	function ro(e, t) {
		return (n) => (n > 0 ? t : e);
	}
	const io = (e, t, n) => {
			const r = e * e,
				i = n * (t * t - r) + r;
			return i < 0 ? 0 : Math.sqrt(i);
		},
		oo = [$r, qr, ei];
	function ao(e) {
		const t = ((e) => oo.find((t) => t.test(e)))(e);
		if (
			(Oi(
				Boolean(t),
				"'".concat(
					e,
					"' is not an animatable color. Use the equivalent color code instead."
				)
			),
			!Boolean(t))
		)
			return !1;
		let n = t.parse(e);
		return (
			t === ei &&
				(n = (function (e) {
					let { hue: t, saturation: n, lightness: r, alpha: i } = e;
					(t /= 360), (n /= 100), (r /= 100);
					let o = 0,
						a = 0,
						s = 0;
					if (n) {
						const e = r < 0.5 ? r * (1 + n) : r + n - r * n,
							i = 2 * r - e;
						(o = no(i, e, t + 1 / 3)),
							(a = no(i, e, t)),
							(s = no(i, e, t - 1 / 3));
					} else o = a = s = r;
					return {
						red: Math.round(255 * o),
						green: Math.round(255 * a),
						blue: Math.round(255 * s),
						alpha: i,
					};
				})(n)),
			n
		);
	}
	const so = (e, t) => {
			const n = ao(e),
				r = ao(t);
			if (!n || !r) return ro(e, t);
			const i = pe({}, n);
			return (e) => (
				(i.red = io(n.red, r.red, e)),
				(i.green = io(n.green, r.green, e)),
				(i.blue = io(n.blue, r.blue, e)),
				(i.alpha = to(n.alpha, r.alpha, e)),
				qr.transform(i)
			);
		},
		lo = (e, t) => (n) => t(e(n)),
		uo = function () {
			for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
				t[n] = arguments[n];
			return t.reduce(lo);
		},
		co = new Set(["none", "hidden"]);
	function fo(e, t) {
		return (n) => to(e, t, n);
	}
	function ho(e) {
		return "number" === typeof e
			? fo
			: "string" === typeof e
			? Ui(e)
				? ro
				: ti.test(e)
				? so
				: go
			: Array.isArray(e)
			? po
			: "object" === typeof e
			? ti.test(e)
				? so
				: mo
			: ro;
	}
	function po(e, t) {
		const n = [...e],
			r = n.length,
			i = e.map((e, n) => ho(e)(e, t[n]));
		return (e) => {
			for (let t = 0; t < r; t++) n[t] = i[t](e);
			return n;
		};
	}
	function mo(e, t) {
		const n = pe(pe({}, e), t),
			r = {};
		for (const i in n)
			void 0 !== e[i] && void 0 !== t[i] && (r[i] = ho(e[i])(e[i], t[i]));
		return (e) => {
			for (const t in r) n[t] = r[t](e);
			return n;
		};
	}
	const go = (e, t) => {
		const n = ci.createTransformer(t),
			r = ai(e),
			i = ai(t);
		return r.indexes.var.length === i.indexes.var.length &&
			r.indexes.color.length === i.indexes.color.length &&
			r.indexes.number.length >= i.indexes.number.length
			? (co.has(e) && !i.values.length) || (co.has(t) && !r.values.length)
				? (function (e, t) {
						return co.has(e)
							? (n) => (n <= 0 ? e : t)
							: (n) => (n >= 1 ? t : e);
				  })(e, t)
				: uo(
						po(
							(function (e, t) {
								var n;
								const r = [],
									i = { color: 0, var: 0, number: 0 };
								for (let o = 0; o < t.values.length; o++) {
									const a = t.types[o],
										s = e.indexes[a][i[a]],
										l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
									(r[o] = l), i[a]++;
								}
								return r;
							})(r, i),
							i.values
						),
						n
				  )
			: (Oi(
					!0,
					"Complex values '"
						.concat(e, "' and '")
						.concat(
							t,
							"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
						)
			  ),
			  ro(e, t));
	};
	function vo(e, t, n) {
		if ("number" === typeof e && "number" === typeof t && "number" === typeof n)
			return to(e, t, n);
		return ho(e)(e, t);
	}
	function yo(e, t, n) {
		const r = Math.max(t - 5, 0);
		return dr(n - e(r), t - r);
	}
	const bo = {
			stiffness: 100,
			damping: 10,
			mass: 1,
			velocity: 0,
			duration: 800,
			bounce: 0.3,
			visualDuration: 0.3,
			restSpeed: { granular: 0.01, default: 2 },
			restDelta: { granular: 0.005, default: 0.5 },
			minDuration: 0.01,
			maxDuration: 10,
			minDamping: 0.05,
			maxDamping: 1,
		},
		wo = 0.001;
	function xo(e) {
		let t,
			n,
			{
				duration: r = bo.duration,
				bounce: i = bo.bounce,
				velocity: o = bo.velocity,
				mass: a = bo.mass,
			} = e;
		Oi(r <= Hn(bo.maxDuration), "Spring duration must be 10 seconds or less");
		let s = 1 - i;
		(s = Or(bo.minDamping, bo.maxDamping, s)),
			(r = Or(bo.minDuration, bo.maxDuration, qn(r))),
			s < 1
				? ((t = (e) => {
						const t = e * s,
							n = t * r,
							i = t - o,
							a = ko(e, s),
							l = Math.exp(-n);
						return wo - (i / a) * l;
				  }),
				  (n = (e) => {
						const n = e * s * r,
							i = n * o + o,
							a = Math.pow(s, 2) * Math.pow(e, 2) * r,
							l = Math.exp(-n),
							u = ko(Math.pow(e, 2), s);
						return ((-t(e) + wo > 0 ? -1 : 1) * ((i - a) * l)) / u;
				  }))
				: ((t = (e) => Math.exp(-e * r) * ((e - o) * r + 1) - 0.001),
				  (n = (e) => Math.exp(-e * r) * (r * r * (o - e))));
		const l = (function (e, t, n) {
			let r = n;
			for (let i = 1; i < So; i++) r -= e(r) / t(r);
			return r;
		})(t, n, 5 / r);
		if (((r = Hn(r)), isNaN(l)))
			return { stiffness: bo.stiffness, damping: bo.damping, duration: r };
		{
			const e = Math.pow(l, 2) * a;
			return { stiffness: e, damping: 2 * s * Math.sqrt(a * e), duration: r };
		}
	}
	const So = 12;
	function ko(e, t) {
		return e * Math.sqrt(1 - t * t);
	}
	const Eo = ["duration", "bounce"],
		Po = ["stiffness", "damping", "mass"];
	function Co(e, t) {
		return t.some((t) => void 0 !== e[t]);
	}
	function To() {
		let e =
				arguments.length > 0 && void 0 !== arguments[0]
					? arguments[0]
					: bo.visualDuration,
			t =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: bo.bounce;
		const n =
			"object" !== typeof e
				? { visualDuration: e, keyframes: [0, 1], bounce: t }
				: e;
		let { restSpeed: r, restDelta: i } = n;
		const o = n.keyframes[0],
			a = n.keyframes[n.keyframes.length - 1],
			s = { done: !1, value: o },
			{
				stiffness: l,
				damping: u,
				mass: c,
				duration: d,
				velocity: f,
				isResolvedFromDuration: h,
			} = (function (e) {
				let t = pe(
					{
						velocity: bo.velocity,
						stiffness: bo.stiffness,
						damping: bo.damping,
						mass: bo.mass,
						isResolvedFromDuration: !1,
					},
					e
				);
				if (!Co(e, Po) && Co(e, Eo))
					if (e.visualDuration) {
						const n = e.visualDuration,
							r = (2 * Math.PI) / (1.2 * n),
							i = r * r,
							o = 2 * Or(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
						t = pe(pe({}, t), {}, { mass: bo.mass, stiffness: i, damping: o });
					} else {
						const n = xo(e);
						(t = pe(pe(pe({}, t), n), {}, { mass: bo.mass })),
							(t.isResolvedFromDuration = !0);
					}
				return t;
			})(pe(pe({}, n), {}, { velocity: -qn(n.velocity || 0) })),
			p = f || 0,
			m = u / (2 * Math.sqrt(l * c)),
			g = a - o,
			v = qn(Math.sqrt(l / c)),
			y = Math.abs(g) < 5;
		let b;
		if (
			(r || (r = y ? bo.restSpeed.granular : bo.restSpeed.default),
			i || (i = y ? bo.restDelta.granular : bo.restDelta.default),
			m < 1)
		) {
			const e = ko(v, m);
			b = (t) => {
				const n = Math.exp(-m * v * t);
				return (
					a -
					n * (((p + m * v * g) / e) * Math.sin(e * t) + g * Math.cos(e * t))
				);
			};
		} else if (1 === m) b = (e) => a - Math.exp(-v * e) * (g + (p + v * g) * e);
		else {
			const e = v * Math.sqrt(m * m - 1);
			b = (t) => {
				const n = Math.exp(-m * v * t),
					r = Math.min(e * t, 300);
				return (
					a - (n * ((p + m * v * g) * Math.sinh(r) + e * g * Math.cosh(r))) / e
				);
			};
		}
		const w = {
			calculatedDuration: (h && d) || null,
			next: (e) => {
				const t = b(e);
				if (h) s.done = e >= d;
				else {
					let n = 0;
					m < 1 && (n = 0 === e ? Hn(p) : yo(b, e, t));
					const o = Math.abs(n) <= r,
						l = Math.abs(a - t) <= i;
					s.done = o && l;
				}
				return (s.value = s.done ? a : t), s;
			},
			toString: () => {
				const e = Math.min(bn(w), yn),
					t = Tn((t) => w.next(e * t).value, e, 30);
				return e + "ms " + t;
			},
		};
		return w;
	}
	function Fo(e) {
		let {
			keyframes: t,
			velocity: n = 0,
			power: r = 0.8,
			timeConstant: i = 325,
			bounceDamping: o = 10,
			bounceStiffness: a = 500,
			modifyTarget: s,
			min: l,
			max: u,
			restDelta: c = 0.5,
			restSpeed: d,
		} = e;
		const f = t[0],
			h = { done: !1, value: f },
			p = (e) =>
				void 0 === l
					? u
					: void 0 === u || Math.abs(l - e) < Math.abs(u - e)
					? l
					: u;
		let m = r * n;
		const g = f + m,
			v = void 0 === s ? g : s(g);
		v !== g && (m = v - f);
		const y = (e) => -m * Math.exp(-e / i),
			b = (e) => v + y(e),
			w = (e) => {
				const t = y(e),
					n = b(e);
				(h.done = Math.abs(t) <= c), (h.value = h.done ? v : n);
			};
		let x, S;
		const k = (e) => {
			((e) => (void 0 !== l && e < l) || (void 0 !== u && e > u))(h.value) &&
				((x = e),
				(S = To({
					keyframes: [h.value, p(h.value)],
					velocity: yo(b, e, h.value),
					damping: o,
					stiffness: a,
					restDelta: c,
					restSpeed: d,
				})));
		};
		return (
			k(0),
			{
				calculatedDuration: null,
				next: (e) => {
					let t = !1;
					return (
						S || void 0 !== x || ((t = !0), w(e), k(e)),
						void 0 !== x && e >= x ? S.next(e - x) : (!t && w(e), h)
					);
				},
			}
		);
	}
	const _o = Er(0.42, 0, 1, 1),
		Ao = Er(0, 0, 0.58, 1),
		Ro = Er(0.42, 0, 0.58, 1),
		jo = {
			linear: $n,
			easeIn: _o,
			easeInOut: Ro,
			easeOut: Ao,
			circIn: Rr,
			circInOut: Dr,
			circOut: jr,
			backIn: Fr,
			backInOut: _r,
			backOut: Tr,
			anticipate: Ar,
		},
		Do = (e) => {
			if (Sn(e)) {
				Mi(
					4 === e.length,
					"Cubic bezier arrays must contain four numerical values."
				);
				const [t, n, r, i] = e;
				return Er(t, n, r, i);
			}
			return "string" === typeof e
				? (Mi(void 0 !== jo[e], "Invalid easing type '".concat(e, "'")), jo[e])
				: e;
		};
	function Lo(e, t) {
		let {
			clamp: n = !0,
			ease: r,
			mixer: i,
		} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		const o = e.length;
		if (
			(Mi(
				o === t.length,
				"Both input and output ranges must be the same length"
			),
			1 === o)
		)
			return () => t[0];
		if (2 === o && t[0] === t[1]) return () => t[1];
		const a = e[0] === e[1];
		e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
		const s = (function (e, t, n) {
				const r = [],
					i = n || vo,
					o = e.length - 1;
				for (let a = 0; a < o; a++) {
					let n = i(e[a], e[a + 1]);
					if (t) {
						const e = Array.isArray(t) ? t[a] || $n : t;
						n = uo(e, n);
					}
					r.push(n);
				}
				return r;
			})(t, r, i),
			l = s.length,
			u = (n) => {
				if (a && n < e[0]) return t[0];
				let r = 0;
				if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
				const i = Cn(e[r], e[r + 1], n);
				return s[r](i);
			};
		return n ? (t) => u(Or(e[0], e[o - 1], t)) : u;
	}
	function Oo(e) {
		const t = [0];
		return (
			(function (e, t) {
				const n = e[e.length - 1];
				for (let r = 1; r <= t; r++) {
					const i = Cn(0, t, r);
					e.push(to(n, 1, i));
				}
			})(t, e.length - 1),
			t
		);
	}
	function Mo(e) {
		let {
			duration: t = 300,
			keyframes: n,
			times: r,
			ease: i = "easeInOut",
		} = e;
		const o = ((e) => Array.isArray(e) && "number" !== typeof e[0])(i)
				? i.map(Do)
				: Do(i),
			a = { done: !1, value: n[0] },
			s = (function (e, t) {
				return e.map((e) => e * t);
			})(r && r.length === n.length ? r : Oo(n), t),
			l = Lo(s, n, {
				ease: Array.isArray(o)
					? o
					: ((u = n), (c = o), u.map(() => c || Ro).splice(0, u.length - 1)),
			});
		var u, c;
		return {
			calculatedDuration: t,
			next: (e) => ((a.value = l(e)), (a.done = e >= t), a),
		};
	}
	const No = (e) => {
			const t = (t) => {
				let { timestamp: n } = t;
				return e(n);
			};
			return {
				start: () => tr.update(t, !0),
				stop: () => nr(t),
				now: () => (rr.isProcessing ? rr.timestamp : sr.now()),
			};
		},
		Vo = { decay: Fo, inertia: Fo, tween: Mo, keyframes: Mo, spring: To },
		zo = (e) => e / 100;
	class Bo extends eo {
		constructor(e) {
			super(e),
				(this.holdTime = null),
				(this.cancelTime = null),
				(this.currentTime = 0),
				(this.playbackSpeed = 1),
				(this.pendingPlayState = "running"),
				(this.startTime = null),
				(this.state = "idle"),
				(this.stop = () => {
					if (
						(this.resolver.cancel(),
						(this.isStopped = !0),
						"idle" === this.state)
					)
						return;
					this.teardown();
					const { onStop: e } = this.options;
					e && e();
				});
			const {
					name: t,
					motionValue: n,
					element: r,
					keyframes: i,
				} = this.options,
				o = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || Li;
			(this.resolver = new o(
				i,
				(e, t) => this.onKeyframesResolved(e, t),
				t,
				n,
				r
			)),
				this.resolver.scheduleResolve();
		}
		flatten() {
			super.flatten(),
				this._resolved &&
					Object.assign(
						this._resolved,
						this.initPlayback(this._resolved.keyframes)
					);
		}
		initPlayback(e) {
			const {
					type: t = "keyframes",
					repeat: n = 0,
					repeatDelay: r = 0,
					repeatType: i,
					velocity: o = 0,
				} = this.options,
				a = wn(t) ? t : Vo[t] || Mo;
			let s, l;
			a !== Mo &&
				"number" !== typeof e[0] &&
				((s = uo(zo, vo(e[0], e[1]))), (e = [0, 100]));
			const u = a(pe(pe({}, this.options), {}, { keyframes: e }));
			"mirror" === i &&
				(l = a(
					pe(
						pe({}, this.options),
						{},
						{ keyframes: [...e].reverse(), velocity: -o }
					)
				)),
				null === u.calculatedDuration && (u.calculatedDuration = bn(u));
			const { calculatedDuration: c } = u,
				d = c + r;
			return {
				generator: u,
				mirroredGenerator: l,
				mapPercentToKeyframes: s,
				calculatedDuration: c,
				resolvedDuration: d,
				totalDuration: d * (n + 1) - r,
			};
		}
		onPostResolved() {
			const { autoplay: e = !0 } = this.options;
			this.play(),
				"paused" !== this.pendingPlayState && e
					? (this.state = this.pendingPlayState)
					: this.pause();
		}
		tick(e) {
			let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
			const { resolved: n } = this;
			if (!n) {
				const { keyframes: e } = this.options;
				return { done: !0, value: e[e.length - 1] };
			}
			const {
				finalKeyframe: r,
				generator: i,
				mirroredGenerator: o,
				mapPercentToKeyframes: a,
				keyframes: s,
				calculatedDuration: l,
				totalDuration: u,
				resolvedDuration: c,
			} = n;
			if (null === this.startTime) return i.next(0);
			const {
				delay: d,
				repeat: f,
				repeatType: h,
				repeatDelay: p,
				onUpdate: m,
			} = this.options;
			this.speed > 0
				? (this.startTime = Math.min(this.startTime, e))
				: this.speed < 0 &&
				  (this.startTime = Math.min(e - u / this.speed, this.startTime)),
				t
					? (this.currentTime = e)
					: null !== this.holdTime
					? (this.currentTime = this.holdTime)
					: (this.currentTime = Math.round(e - this.startTime) * this.speed);
			const g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
				v = this.speed >= 0 ? g < 0 : g > u;
			(this.currentTime = Math.max(g, 0)),
				"finished" === this.state &&
					null === this.holdTime &&
					(this.currentTime = u);
			let y = this.currentTime,
				b = i;
			if (f) {
				const e = Math.min(this.currentTime, u) / c;
				let t = Math.floor(e),
					n = e % 1;
				!n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, f + 1));
				Boolean(t % 2) &&
					("reverse" === h
						? ((n = 1 - n), p && (n -= p / c))
						: "mirror" === h && (b = o)),
					(y = Or(0, 1, n) * c);
			}
			const w = v ? { done: !1, value: s[0] } : b.next(y);
			a && (w.value = a(w.value));
			let { done: x } = w;
			v ||
				null === l ||
				(x = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
			const S =
				null === this.holdTime &&
				("finished" === this.state || ("running" === this.state && x));
			return (
				S && void 0 !== r && (w.value = Ji(s, this.options, r)),
				m && m(w.value),
				S && this.finish(),
				w
			);
		}
		get duration() {
			const { resolved: e } = this;
			return e ? qn(e.calculatedDuration) : 0;
		}
		get time() {
			return qn(this.currentTime);
		}
		set time(e) {
			(e = Hn(e)),
				(this.currentTime = e),
				null !== this.holdTime || 0 === this.speed
					? (this.holdTime = e)
					: this.driver &&
					  (this.startTime = this.driver.now() - e / this.speed);
		}
		get speed() {
			return this.playbackSpeed;
		}
		set speed(e) {
			const t = this.playbackSpeed !== e;
			(this.playbackSpeed = e), t && (this.time = qn(this.currentTime));
		}
		play() {
			if (
				(this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
			)
				return void (this.pendingPlayState = "running");
			if (this.isStopped) return;
			const { driver: e = No, onPlay: t, startTime: n } = this.options;
			this.driver || (this.driver = e((e) => this.tick(e))), t && t();
			const r = this.driver.now();
			null !== this.holdTime
				? (this.startTime = r - this.holdTime)
				: this.startTime
				? "finished" === this.state && (this.startTime = r)
				: (this.startTime =
						null !== n && void 0 !== n ? n : this.calcStartTime()),
				"finished" === this.state && this.updateFinishedPromise(),
				(this.cancelTime = this.startTime),
				(this.holdTime = null),
				(this.state = "running"),
				this.driver.start();
		}
		pause() {
			var e;
			this._resolved
				? ((this.state = "paused"),
				  (this.holdTime =
						null !== (e = this.currentTime) && void 0 !== e ? e : 0))
				: (this.pendingPlayState = "paused");
		}
		complete() {
			"running" !== this.state && this.play(),
				(this.pendingPlayState = this.state = "finished"),
				(this.holdTime = null);
		}
		finish() {
			this.teardown(), (this.state = "finished");
			const { onComplete: e } = this.options;
			e && e();
		}
		cancel() {
			null !== this.cancelTime && this.tick(this.cancelTime),
				this.teardown(),
				this.updateFinishedPromise();
		}
		teardown() {
			(this.state = "idle"),
				this.stopDriver(),
				this.resolveFinishedPromise(),
				this.updateFinishedPromise(),
				(this.startTime = this.cancelTime = null),
				this.resolver.cancel();
		}
		stopDriver() {
			this.driver && (this.driver.stop(), (this.driver = void 0));
		}
		sample(e) {
			return (this.startTime = 0), this.tick(e, !0);
		}
	}
	const Uo = new Set(["opacity", "clipPath", "filter", "transform"]);
	const Io = hn(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
		Wo = ["onComplete", "onUpdate", "motionValue", "element"],
		Ho = ["motionValue", "onUpdate", "onComplete", "element"];
	const qo = { anticipate: Ar, backInOut: _r, circInOut: Dr };
	class $o extends eo {
		constructor(e) {
			super(e);
			const {
				name: t,
				motionValue: n,
				element: r,
				keyframes: i,
			} = this.options;
			(this.resolver = new Xi(
				i,
				(e, t) => this.onKeyframesResolved(e, t),
				t,
				n,
				r
			)),
				this.resolver.scheduleResolve();
		}
		initPlayback(e, t) {
			let {
				duration: n = 300,
				times: r,
				ease: i,
				type: o,
				motionValue: a,
				name: s,
				startTime: l,
			} = this.options;
			if (!a.owner || !a.owner.current) return !1;
			var u;
			if (
				("string" === typeof i && Pn() && i in qo && (i = qo[i]),
				wn((u = this.options).type) || "spring" === u.type || !Fn(u.ease))
			) {
				const t = this.options,
					{ onComplete: a, onUpdate: s, motionValue: l, element: u } = t,
					c = rn(t, Wo),
					d = (function (e, t) {
						const n = new Bo(
							pe(
								pe({}, t),
								{},
								{ keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }
							)
						);
						let r = { done: !1, value: e[0] };
						const i = [];
						let o = 0;
						for (; !r.done && o < 2e4; )
							(r = n.sample(o)), i.push(r.value), (o += 10);
						return {
							times: void 0,
							keyframes: i,
							duration: o - 10,
							ease: "linear",
						};
					})(e, c);
				1 === (e = d.keyframes).length && (e[1] = e[0]),
					(n = d.duration),
					(r = d.times),
					(i = d.ease),
					(o = "keyframes");
			}
			const c = (function (e, t, n) {
				let {
					delay: r = 0,
					duration: i = 300,
					repeat: o = 0,
					repeatType: a = "loop",
					ease: s = "easeInOut",
					times: l,
				} = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				const u = { [t]: n };
				l && (u.offset = l);
				const c = Rn(s, i);
				return (
					Array.isArray(c) && (u.easing = c),
					e.animate(u, {
						delay: r,
						duration: i,
						easing: Array.isArray(c) ? "linear" : c,
						fill: "both",
						iterations: o + 1,
						direction: "reverse" === a ? "alternate" : "normal",
					})
				);
			})(
				a.owner.current,
				s,
				e,
				pe(pe({}, this.options), {}, { duration: n, times: r, ease: i })
			);
			return (
				(c.startTime = null !== l && void 0 !== l ? l : this.calcStartTime()),
				this.pendingTimeline
					? (xn(c, this.pendingTimeline), (this.pendingTimeline = void 0))
					: (c.onfinish = () => {
							const { onComplete: n } = this.options;
							a.set(Ji(e, this.options, t)),
								n && n(),
								this.cancel(),
								this.resolveFinishedPromise();
					  }),
				{ animation: c, duration: n, times: r, type: o, ease: i, keyframes: e }
			);
		}
		get duration() {
			const { resolved: e } = this;
			if (!e) return 0;
			const { duration: t } = e;
			return qn(t);
		}
		get time() {
			const { resolved: e } = this;
			if (!e) return 0;
			const { animation: t } = e;
			return qn(t.currentTime || 0);
		}
		set time(e) {
			const { resolved: t } = this;
			if (!t) return;
			const { animation: n } = t;
			n.currentTime = Hn(e);
		}
		get speed() {
			const { resolved: e } = this;
			if (!e) return 1;
			const { animation: t } = e;
			return t.playbackRate;
		}
		set speed(e) {
			const { resolved: t } = this;
			if (!t) return;
			const { animation: n } = t;
			n.playbackRate = e;
		}
		get state() {
			const { resolved: e } = this;
			if (!e) return "idle";
			const { animation: t } = e;
			return t.playState;
		}
		get startTime() {
			const { resolved: e } = this;
			if (!e) return null;
			const { animation: t } = e;
			return t.startTime;
		}
		attachTimeline(e) {
			if (this._resolved) {
				const { resolved: t } = this;
				if (!t) return $n;
				const { animation: n } = t;
				xn(n, e);
			} else this.pendingTimeline = e;
			return $n;
		}
		play() {
			if (this.isStopped) return;
			const { resolved: e } = this;
			if (!e) return;
			const { animation: t } = e;
			"finished" === t.playState && this.updateFinishedPromise(), t.play();
		}
		pause() {
			const { resolved: e } = this;
			if (!e) return;
			const { animation: t } = e;
			t.pause();
		}
		stop() {
			if (
				(this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)
			)
				return;
			this.resolveFinishedPromise(), this.updateFinishedPromise();
			const { resolved: e } = this;
			if (!e) return;
			const {
				animation: t,
				keyframes: n,
				duration: r,
				type: i,
				ease: o,
				times: a,
			} = e;
			if ("idle" === t.playState || "finished" === t.playState) return;
			if (this.time) {
				const e = this.options,
					{ motionValue: t, onUpdate: s, onComplete: l, element: u } = e,
					c = rn(e, Ho),
					d = new Bo(
						pe(
							pe({}, c),
							{},
							{
								keyframes: n,
								duration: r,
								type: i,
								ease: o,
								times: a,
								isGenerator: !0,
							}
						)
					),
					f = Hn(this.time);
				t.setWithVelocity(d.sample(f - 10).value, d.sample(f).value, 10);
			}
			const { onStop: s } = this.options;
			s && s(), this.cancel();
		}
		complete() {
			const { resolved: e } = this;
			e && e.animation.finish();
		}
		cancel() {
			const { resolved: e } = this;
			e && e.animation.cancel();
		}
		static supports(e) {
			const {
				motionValue: t,
				name: n,
				repeatDelay: r,
				repeatType: i,
				damping: o,
				type: a,
			} = e;
			if (!t || !t.owner || !(t.owner.current instanceof HTMLElement))
				return !1;
			const { onUpdate: s, transformTemplate: l } = t.owner.getProps();
			return (
				Io() &&
				n &&
				Uo.has(n) &&
				!s &&
				!l &&
				!r &&
				"mirror" !== i &&
				0 !== o &&
				"inertia" !== a
			);
		}
	}
	const Ko = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
		Xo = { type: "keyframes", duration: 0.8 },
		Qo = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
		Yo = (e, t) => {
			let { keyframes: n } = t;
			return n.length > 2
				? Xo
				: Xn.has(e)
				? e.startsWith("scale")
					? {
							type: "spring",
							stiffness: 550,
							damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
							restSpeed: 10,
					  }
					: Ko
				: Qo;
		},
		Go = [
			"when",
			"delay",
			"delayChildren",
			"staggerChildren",
			"staggerDirection",
			"repeat",
			"repeatType",
			"repeatDelay",
			"from",
			"elapsed",
		];
	const Jo = function (e, t, n) {
			let r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
				i = arguments.length > 4 ? arguments[4] : void 0,
				o = arguments.length > 5 ? arguments[5] : void 0;
			return (a) => {
				const s = vn(r, e) || {},
					l = s.delay || r.delay || 0;
				let { elapsed: u = 0 } = r;
				u -= Hn(l);
				let c = pe(
					pe(
						{
							keyframes: Array.isArray(n) ? n : [null, n],
							ease: "easeOut",
							velocity: t.getVelocity(),
						},
						s
					),
					{},
					{
						delay: -u,
						onUpdate: (e) => {
							t.set(e), s.onUpdate && s.onUpdate(e);
						},
						onComplete: () => {
							a(), s.onComplete && s.onComplete();
						},
						name: e,
						motionValue: t,
						element: o ? void 0 : i,
					}
				);
				(function (e) {
					let {
							when: t,
							delay: n,
							delayChildren: r,
							staggerChildren: i,
							staggerDirection: o,
							repeat: a,
							repeatType: s,
							repeatDelay: l,
							from: u,
							elapsed: c,
						} = e,
						d = rn(e, Go);
					return !!Object.keys(d).length;
				})(s) || (c = pe(pe({}, c), Yo(e, c))),
					c.duration && (c.duration = Hn(c.duration)),
					c.repeatDelay && (c.repeatDelay = Hn(c.repeatDelay)),
					void 0 !== c.from && (c.keyframes[0] = c.from);
				let d = !1;
				if (
					((!1 === c.type || (0 === c.duration && !c.repeatDelay)) &&
						((c.duration = 0), 0 === c.delay && (d = !0)),
					(Sr || Gn) && ((d = !0), (c.duration = 0), (c.delay = 0)),
					d && !o && void 0 !== t.get())
				) {
					const e = Ji(c.keyframes, s);
					if (void 0 !== e)
						return (
							tr.update(() => {
								c.onUpdate(e), c.onComplete();
							}),
							new gn([])
						);
				}
				return !o && $o.supports(c) ? new $o(c) : new Bo(c);
			};
		},
		Zo = ["transition", "transitionEnd"];
	function ea(e, t) {
		let { protectedKeys: n, needsAnimating: r } = e;
		const i = n.hasOwnProperty(t) && !0 !== r[t];
		return (r[t] = !1), i;
	}
	function ta(e, t) {
		let {
			delay: n = 0,
			transitionOverride: r,
			type: i,
		} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		var o;
		let { transition: a = e.getDefaultTransition(), transitionEnd: s } = t,
			l = rn(t, Zo);
		r && (a = r);
		const u = [],
			c = i && e.animationState && e.animationState.getState()[i];
		for (const d in l) {
			const t = e.getValue(
					d,
					null !== (o = e.latestValues[d]) && void 0 !== o ? o : null
				),
				r = l[d];
			if (void 0 === r || (c && ea(c, d))) continue;
			const i = pe({ delay: n }, vn(a || {}, d));
			let s = !1;
			if (window.MotionHandoffAnimation) {
				const t = xr(e);
				if (t) {
					const e = window.MotionHandoffAnimation(t, d, tr);
					null !== e && ((i.startTime = e), (s = !0));
				}
			}
			yr(e, d),
				t.start(
					Jo(
						d,
						t,
						r,
						e.shouldReduceMotion && Qn.has(d) ? { type: !1 } : i,
						e,
						s
					)
				);
			const f = t.animation;
			f && u.push(f);
		}
		return (
			s &&
				Promise.all(u).then(() => {
					tr.update(() => {
						s &&
							(function (e, t) {
								let n = cn(e, t) || {},
									{ transitionEnd: r = {}, transition: i = {} } = n,
									o = rn(n, mr);
								o = pe(pe({}, o), r);
								for (const a in o) gr(e, a, Yn(o[a]));
							})(e, s);
					});
				}),
			u
		);
	}
	function na(e, t) {
		let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
		var r;
		const i = cn(
			e,
			t,
			"exit" === n.type
				? null === (r = e.presenceContext) || void 0 === r
					? void 0
					: r.custom
				: void 0
		);
		let { transition: o = e.getDefaultTransition() || {} } = i || {};
		n.transitionOverride && (o = n.transitionOverride);
		const a = i ? () => Promise.all(ta(e, i, n)) : () => Promise.resolve(),
			s =
				e.variantChildren && e.variantChildren.size
					? function () {
							let r =
								arguments.length > 0 && void 0 !== arguments[0]
									? arguments[0]
									: 0;
							const {
								delayChildren: i = 0,
								staggerChildren: a,
								staggerDirection: s,
							} = o;
							return (function (e, t) {
								let n =
										arguments.length > 2 && void 0 !== arguments[2]
											? arguments[2]
											: 0,
									r =
										arguments.length > 3 && void 0 !== arguments[3]
											? arguments[3]
											: 0,
									i =
										arguments.length > 4 && void 0 !== arguments[4]
											? arguments[4]
											: 1,
									o = arguments.length > 5 ? arguments[5] : void 0;
								const a = [],
									s = (e.variantChildren.size - 1) * r,
									l =
										1 === i
											? function () {
													return (
														(arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: 0) * r
													);
											  }
											: function () {
													return (
														s -
														(arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: 0) *
															r
													);
											  };
								return (
									Array.from(e.variantChildren)
										.sort(ra)
										.forEach((e, r) => {
											e.notify("AnimationStart", t),
												a.push(
													na(e, t, pe(pe({}, o), {}, { delay: n + l(r) })).then(
														() => e.notify("AnimationComplete", t)
													)
												);
										}),
									Promise.all(a)
								);
							})(e, t, i + r, a, s, n);
					  }
					: () => Promise.resolve(),
			{ when: l } = o;
		if (l) {
			const [e, t] = "beforeChildren" === l ? [a, s] : [s, a];
			return e().then(() => t());
		}
		return Promise.all([a(), s(n.delay)]);
	}
	function ra(e, t) {
		return e.sortNodePosition(t);
	}
	const ia = fn.length;
	function oa(e) {
		if (!e) return;
		if (!e.isControllingVariants) {
			const t = (e.parent && oa(e.parent)) || {};
			return void 0 !== e.props.initial && (t.initial = e.props.initial), t;
		}
		const t = {};
		for (let n = 0; n < ia; n++) {
			const r = fn[n],
				i = e.props[r];
			(sn(i) || !1 === i) && (t[r] = i);
		}
		return t;
	}
	const aa = ["transition", "transitionEnd"],
		sa = [...dn].reverse(),
		la = dn.length;
	function ua(e) {
		return (t) =>
			Promise.all(
				t.map((t) => {
					let { animation: n, options: r } = t;
					return (function (e, t) {
						let n,
							r =
								arguments.length > 2 && void 0 !== arguments[2]
									? arguments[2]
									: {};
						if ((e.notify("AnimationStart", t), Array.isArray(t))) {
							const i = t.map((t) => na(e, t, r));
							n = Promise.all(i);
						} else if ("string" === typeof t) n = na(e, t, r);
						else {
							const i = "function" === typeof t ? cn(e, t, r.custom) : t;
							n = Promise.all(ta(e, i, r));
						}
						return n.then(() => {
							e.notify("AnimationComplete", t);
						});
					})(e, n, r);
				})
			);
	}
	function ca(e) {
		let t = ua(e),
			n = ha(),
			r = !0;
		const i = (t) => (n, r) => {
			var i;
			const o = cn(
				e,
				r,
				"exit" === t
					? null === (i = e.presenceContext) || void 0 === i
						? void 0
						: i.custom
					: void 0
			);
			if (o) {
				const { transition: e, transitionEnd: t } = o,
					r = rn(o, aa);
				n = pe(pe(pe({}, n), r), t);
			}
			return n;
		};
		function o(o) {
			const { props: a } = e,
				s = oa(e.parent) || {},
				l = [],
				u = new Set();
			let c = {},
				d = 1 / 0;
			for (let t = 0; t < la; t++) {
				const f = sa[t],
					h = n[f],
					p = void 0 !== a[f] ? a[f] : s[f],
					m = sn(p),
					g = f === o ? h.isActive : null;
				!1 === g && (d = t);
				let v = p === s[f] && p !== a[f] && m;
				if (
					(v && r && e.manuallyAnimateOnMount && (v = !1),
					(h.protectedKeys = pe({}, c)),
					(!h.isActive && null === g) ||
						(!p && !h.prevProp) ||
						nn(p) ||
						"boolean" === typeof p)
				)
					continue;
				const y = da(h.prevProp, p);
				let b = y || (f === o && h.isActive && !v && m) || (t > d && m),
					w = !1;
				const x = Array.isArray(p) ? p : [p];
				let S = x.reduce(i(f), {});
				!1 === g && (S = {});
				const { prevResolvedValues: k = {} } = h,
					E = pe(pe({}, k), S),
					P = (t) => {
						(b = !0),
							u.has(t) && ((w = !0), u.delete(t)),
							(h.needsAnimating[t] = !0);
						const n = e.getValue(t);
						n && (n.liveStyle = !1);
					};
				for (const e in E) {
					const t = S[e],
						n = k[e];
					if (c.hasOwnProperty(e)) continue;
					let r = !1;
					(r = on(t) && on(n) ? !an(t, n) : t !== n),
						r
							? void 0 !== t && null !== t
								? P(e)
								: u.add(e)
							: void 0 !== t && u.has(e)
							? P(e)
							: (h.protectedKeys[e] = !0);
				}
				(h.prevProp = p),
					(h.prevResolvedValues = S),
					h.isActive && (c = pe(pe({}, c), S)),
					r && e.blockInitialAnimation && (b = !1);
				b &&
					(!(v && y) || w) &&
					l.push(...x.map((e) => ({ animation: e, options: { type: f } })));
			}
			if (u.size) {
				const t = {};
				u.forEach((n) => {
					const r = e.getBaseTarget(n),
						i = e.getValue(n);
					i && (i.liveStyle = !0),
						(t[n] = null !== r && void 0 !== r ? r : null);
				}),
					l.push({ animation: t });
			}
			let f = Boolean(l.length);
			return (
				!r ||
					(!1 !== a.initial && a.initial !== a.animate) ||
					e.manuallyAnimateOnMount ||
					(f = !1),
				(r = !1),
				f ? t(l) : Promise.resolve()
			);
		}
		return {
			animateChanges: o,
			setActive: function (t, r) {
				var i;
				if (n[t].isActive === r) return Promise.resolve();
				null === (i = e.variantChildren) ||
					void 0 === i ||
					i.forEach((e) => {
						var n;
						return null === (n = e.animationState) || void 0 === n
							? void 0
							: n.setActive(t, r);
					}),
					(n[t].isActive = r);
				const a = o(t);
				for (const e in n) n[e].protectedKeys = {};
				return a;
			},
			setAnimateFunction: function (n) {
				t = n(e);
			},
			getState: () => n,
			reset: () => {
				(n = ha()), (r = !0);
			},
		};
	}
	function da(e, t) {
		return "string" === typeof t ? t !== e : !!Array.isArray(t) && !an(t, e);
	}
	function fa() {
		return {
			isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
			protectedKeys: {},
			needsAnimating: {},
			prevResolvedValues: {},
		};
	}
	function ha() {
		return {
			animate: fa(!0),
			whileInView: fa(),
			whileHover: fa(),
			whileTap: fa(),
			whileDrag: fa(),
			whileFocus: fa(),
			exit: fa(),
		};
	}
	class pa {
		constructor(e) {
			(this.isMounted = !1), (this.node = e);
		}
		update() {}
	}
	let ma = 0;
	const ga = {
		animation: {
			Feature: class extends pa {
				constructor(e) {
					super(e), e.animationState || (e.animationState = ca(e));
				}
				updateAnimationControlsSubscription() {
					const { animate: e } = this.node.getProps();
					nn(e) && (this.unmountControls = e.subscribe(this.node));
				}
				mount() {
					this.updateAnimationControlsSubscription();
				}
				update() {
					const { animate: e } = this.node.getProps(),
						{ animate: t } = this.node.prevProps || {};
					e !== t && this.updateAnimationControlsSubscription();
				}
				unmount() {
					var e;
					this.node.animationState.reset(),
						null === (e = this.unmountControls) || void 0 === e || e.call(this);
				}
			},
		},
		exit: {
			Feature: class extends pa {
				constructor() {
					super(...arguments), (this.id = ma++);
				}
				update() {
					if (!this.node.presenceContext) return;
					const { isPresent: e, onExitComplete: t } = this.node.presenceContext,
						{ isPresent: n } = this.node.prevPresenceContext || {};
					if (!this.node.animationState || e === n) return;
					const r = this.node.animationState.setActive("exit", !e);
					t && !e && r.then(() => t(this.id));
				}
				mount() {
					const { register: e } = this.node.presenceContext || {};
					e && (this.unmount = e(this.id));
				}
				unmount() {}
			},
		},
	};
	function va(e, t, n) {
		let r =
			arguments.length > 3 && void 0 !== arguments[3]
				? arguments[3]
				: { passive: !0 };
		return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
	}
	function ya(e) {
		return { point: { x: e.pageX, y: e.pageY } };
	}
	function ba(e, t, n, r) {
		return va(
			e,
			t,
			(
				(e) => (t) =>
					Nn(t) && e(t, ya(t))
			)(n),
			r
		);
	}
	const wa = (e, t) => Math.abs(e - t);
	class xa {
		constructor(e, t) {
			let {
				transformPagePoint: n,
				contextWindow: r,
				dragSnapToOrigin: i = !1,
			} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			if (
				((this.startEvent = null),
				(this.lastMoveEvent = null),
				(this.lastMoveEventInfo = null),
				(this.handlers = {}),
				(this.contextWindow = window),
				(this.updatePoint = () => {
					if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
					const e = Ea(this.lastMoveEventInfo, this.history),
						t = null !== this.startEvent,
						n =
							(function (e, t) {
								const n = wa(e.x, t.x),
									r = wa(e.y, t.y);
								return Math.sqrt(n ** 2 + r ** 2);
							})(e.offset, { x: 0, y: 0 }) >= 3;
					if (!t && !n) return;
					const { point: r } = e,
						{ timestamp: i } = rr;
					this.history.push(pe(pe({}, r), {}, { timestamp: i }));
					const { onStart: o, onMove: a } = this.handlers;
					t ||
						(o && o(this.lastMoveEvent, e),
						(this.startEvent = this.lastMoveEvent)),
						a && a(this.lastMoveEvent, e);
				}),
				(this.handlePointerMove = (e, t) => {
					(this.lastMoveEvent = e),
						(this.lastMoveEventInfo = Sa(t, this.transformPagePoint)),
						tr.update(this.updatePoint, !0);
				}),
				(this.handlePointerUp = (e, t) => {
					this.end();
					const {
						onEnd: n,
						onSessionEnd: r,
						resumeAnimation: i,
					} = this.handlers;
					if (
						(this.dragSnapToOrigin && i && i(),
						!this.lastMoveEvent || !this.lastMoveEventInfo)
					)
						return;
					const o = Ea(
						"pointercancel" === e.type
							? this.lastMoveEventInfo
							: Sa(t, this.transformPagePoint),
						this.history
					);
					this.startEvent && n && n(e, o), r && r(e, o);
				}),
				!Nn(e))
			)
				return;
			(this.dragSnapToOrigin = i),
				(this.handlers = t),
				(this.transformPagePoint = n),
				(this.contextWindow = r || window);
			const o = Sa(ya(e), this.transformPagePoint),
				{ point: a } = o,
				{ timestamp: s } = rr;
			this.history = [pe(pe({}, a), {}, { timestamp: s })];
			const { onSessionStart: l } = t;
			l && l(e, Ea(o, this.history)),
				(this.removeListeners = uo(
					ba(this.contextWindow, "pointermove", this.handlePointerMove),
					ba(this.contextWindow, "pointerup", this.handlePointerUp),
					ba(this.contextWindow, "pointercancel", this.handlePointerUp)
				));
		}
		updateHandlers(e) {
			this.handlers = e;
		}
		end() {
			this.removeListeners && this.removeListeners(), nr(this.updatePoint);
		}
	}
	function Sa(e, t) {
		return t ? { point: t(e.point) } : e;
	}
	function ka(e, t) {
		return { x: e.x - t.x, y: e.y - t.y };
	}
	function Ea(e, t) {
		let { point: n } = e;
		return {
			point: n,
			delta: ka(n, Ca(t)),
			offset: ka(n, Pa(t)),
			velocity: Ta(t, 0.1),
		};
	}
	function Pa(e) {
		return e[0];
	}
	function Ca(e) {
		return e[e.length - 1];
	}
	function Ta(e, t) {
		if (e.length < 2) return { x: 0, y: 0 };
		let n = e.length - 1,
			r = null;
		const i = Ca(e);
		for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Hn(t))); ) n--;
		if (!r) return { x: 0, y: 0 };
		const o = qn(i.timestamp - r.timestamp);
		if (0 === o) return { x: 0, y: 0 };
		const a = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
		return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
	}
	function Fa(e) {
		return (
			e &&
			"object" === typeof e &&
			Object.prototype.hasOwnProperty.call(e, "current")
		);
	}
	function _a(e) {
		return e.max - e.min;
	}
	function Aa(e, t, n) {
		let r =
			arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
		(e.origin = r),
			(e.originPoint = to(t.min, t.max, e.origin)),
			(e.scale = _a(n) / _a(t)),
			(e.translate = to(n.min, n.max, e.origin) - e.originPoint),
			((e.scale >= 0.9999 && e.scale <= 1.0001) || isNaN(e.scale)) &&
				(e.scale = 1),
			((e.translate >= -0.01 && e.translate <= 0.01) || isNaN(e.translate)) &&
				(e.translate = 0);
	}
	function Ra(e, t, n, r) {
		Aa(e.x, t.x, n.x, r ? r.originX : void 0),
			Aa(e.y, t.y, n.y, r ? r.originY : void 0);
	}
	function ja(e, t, n) {
		(e.min = n.min + t.min), (e.max = e.min + _a(t));
	}
	function Da(e, t, n) {
		(e.min = t.min - n.min), (e.max = e.min + _a(t));
	}
	function La(e, t, n) {
		Da(e.x, t.x, n.x), Da(e.y, t.y, n.y);
	}
	function Oa(e, t, n) {
		return {
			min: void 0 !== t ? e.min + t : void 0,
			max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
		};
	}
	function Ma(e, t) {
		let n = t.min - e.min,
			r = t.max - e.max;
		return (
			t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
		);
	}
	const Na = 0.35;
	function Va(e, t, n) {
		return { min: za(e, t), max: za(e, n) };
	}
	function za(e, t) {
		return "number" === typeof e ? e : e[t] || 0;
	}
	const Ba = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
	function Ua(e) {
		return [e("x"), e("y")];
	}
	function Ia(e) {
		let { top: t, left: n, right: r, bottom: i } = e;
		return { x: { min: n, max: r }, y: { min: t, max: i } };
	}
	function Wa(e) {
		return void 0 === e || 1 === e;
	}
	function Ha(e) {
		let { scale: t, scaleX: n, scaleY: r } = e;
		return !Wa(t) || !Wa(n) || !Wa(r);
	}
	function qa(e) {
		return (
			Ha(e) ||
			$a(e) ||
			e.z ||
			e.rotate ||
			e.rotateX ||
			e.rotateY ||
			e.skewX ||
			e.skewY
		);
	}
	function $a(e) {
		return Ka(e.x) || Ka(e.y);
	}
	function Ka(e) {
		return e && "0%" !== e;
	}
	function Xa(e, t, n) {
		return n + t * (e - n);
	}
	function Qa(e, t, n, r, i) {
		return void 0 !== i && (e = Xa(e, i, r)), Xa(e, n, r) + t;
	}
	function Ya(e) {
		let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
			r = arguments.length > 3 ? arguments[3] : void 0,
			i = arguments.length > 4 ? arguments[4] : void 0;
		(e.min = Qa(e.min, t, n, r, i)), (e.max = Qa(e.max, t, n, r, i));
	}
	function Ga(e, t) {
		let { x: n, y: r } = t;
		Ya(e.x, n.translate, n.scale, n.originPoint),
			Ya(e.y, r.translate, r.scale, r.originPoint);
	}
	const Ja = 0.999999999999,
		Za = 1.0000000000001;
	function es(e, t) {
		(e.min = e.min + t), (e.max = e.max + t);
	}
	function ts(e, t, n, r) {
		let i =
			arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5;
		Ya(e, t, n, to(e.min, e.max, i), r);
	}
	function ns(e, t) {
		ts(e.x, t.x, t.scaleX, t.scale, t.originX),
			ts(e.y, t.y, t.scaleY, t.scale, t.originY);
	}
	function rs(e, t) {
		return Ia(
			(function (e, t) {
				if (!t) return e;
				const n = t({ x: e.left, y: e.top }),
					r = t({ x: e.right, y: e.bottom });
				return { top: n.y, left: n.x, bottom: r.y, right: r.x };
			})(e.getBoundingClientRect(), t)
		);
	}
	const is = (e) => {
			let { current: t } = e;
			return t ? t.ownerDocument.defaultView : null;
		},
		os = new WeakMap();
	class as {
		constructor(e) {
			(this.openDragLock = null),
				(this.isDragging = !1),
				(this.currentDirection = null),
				(this.originPoint = { x: 0, y: 0 }),
				(this.constraints = !1),
				(this.hasMutatedConstraints = !1),
				(this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
				(this.visualElement = e);
		}
		start(e) {
			let { snapToCursor: t = !1 } =
				arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			const { presenceContext: n } = this.visualElement;
			if (n && !1 === n.isPresent) return;
			const { dragSnapToOrigin: r } = this.getProps();
			this.panSession = new xa(
				e,
				{
					onSessionStart: (e) => {
						const { dragSnapToOrigin: n } = this.getProps();
						n ? this.pauseAnimation() : this.stopAnimation(),
							t && this.snapToCursor(ya(e).point);
					},
					onStart: (e, t) => {
						const {
							drag: n,
							dragPropagation: r,
							onDragStart: i,
						} = this.getProps();
						if (
							n &&
							!r &&
							(this.openDragLock && this.openDragLock(),
							(this.openDragLock =
								"x" === (o = n) || "y" === o
									? jn[o]
										? null
										: ((jn[o] = !0),
										  () => {
												jn[o] = !1;
										  })
									: jn.x || jn.y
									? null
									: ((jn.x = jn.y = !0),
									  () => {
											jn.x = jn.y = !1;
									  })),
							!this.openDragLock)
						)
							return;
						var o;
						(this.isDragging = !0),
							(this.currentDirection = null),
							this.resolveConstraints(),
							this.visualElement.projection &&
								((this.visualElement.projection.isAnimationBlocked = !0),
								(this.visualElement.projection.target = void 0)),
							Ua((e) => {
								let t = this.getAxisMotionValue(e).get() || 0;
								if (Qr.test(t)) {
									const { projection: n } = this.visualElement;
									if (n && n.layout) {
										const r = n.layout.layoutBox[e];
										if (r) {
											t = _a(r) * (parseFloat(t) / 100);
										}
									}
								}
								this.originPoint[e] = t;
							}),
							i && tr.postRender(() => i(e, t)),
							yr(this.visualElement, "transform");
						const { animationState: a } = this.visualElement;
						a && a.setActive("whileDrag", !0);
					},
					onMove: (e, t) => {
						const {
							dragPropagation: n,
							dragDirectionLock: r,
							onDirectionLock: i,
							onDrag: o,
						} = this.getProps();
						if (!n && !this.openDragLock) return;
						const { offset: a } = t;
						if (r && null === this.currentDirection)
							return (
								(this.currentDirection = (function (e) {
									let t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: 10,
										n = null;
									Math.abs(e.y) > t
										? (n = "y")
										: Math.abs(e.x) > t && (n = "x");
									return n;
								})(a)),
								void (
									null !== this.currentDirection &&
									i &&
									i(this.currentDirection)
								)
							);
						this.updateAxis("x", t.point, a),
							this.updateAxis("y", t.point, a),
							this.visualElement.render(),
							o && o(e, t);
					},
					onSessionEnd: (e, t) => this.stop(e, t),
					resumeAnimation: () =>
						Ua((e) => {
							var t;
							return (
								"paused" === this.getAnimationState(e) &&
								(null === (t = this.getAxisMotionValue(e).animation) ||
								void 0 === t
									? void 0
									: t.play())
							);
						}),
				},
				{
					transformPagePoint: this.visualElement.getTransformPagePoint(),
					dragSnapToOrigin: r,
					contextWindow: is(this.visualElement),
				}
			);
		}
		stop(e, t) {
			const n = this.isDragging;
			if ((this.cancel(), !n)) return;
			const { velocity: r } = t;
			this.startAnimation(r);
			const { onDragEnd: i } = this.getProps();
			i && tr.postRender(() => i(e, t));
		}
		cancel() {
			this.isDragging = !1;
			const { projection: e, animationState: t } = this.visualElement;
			e && (e.isAnimationBlocked = !1),
				this.panSession && this.panSession.end(),
				(this.panSession = void 0);
			const { dragPropagation: n } = this.getProps();
			!n &&
				this.openDragLock &&
				(this.openDragLock(), (this.openDragLock = null)),
				t && t.setActive("whileDrag", !1);
		}
		updateAxis(e, t, n) {
			const { drag: r } = this.getProps();
			if (!n || !ss(e, r, this.currentDirection)) return;
			const i = this.getAxisMotionValue(e);
			let o = this.originPoint[e] + n[e];
			this.constraints &&
				this.constraints[e] &&
				(o = (function (e, t, n) {
					let { min: r, max: i } = t;
					return (
						void 0 !== r && e < r
							? (e = n ? to(r, e, n.min) : Math.max(e, r))
							: void 0 !== i &&
							  e > i &&
							  (e = n ? to(i, e, n.max) : Math.min(e, i)),
						e
					);
				})(o, this.constraints[e], this.elastic[e])),
				i.set(o);
		}
		resolveConstraints() {
			var e;
			const { dragConstraints: t, dragElastic: n } = this.getProps(),
				r =
					this.visualElement.projection && !this.visualElement.projection.layout
						? this.visualElement.projection.measure(!1)
						: null === (e = this.visualElement.projection) || void 0 === e
						? void 0
						: e.layout,
				i = this.constraints;
			t && Fa(t)
				? this.constraints || (this.constraints = this.resolveRefConstraints())
				: (this.constraints =
						!(!t || !r) &&
						(function (e, t) {
							let { top: n, left: r, bottom: i, right: o } = t;
							return { x: Oa(e.x, r, o), y: Oa(e.y, n, i) };
						})(r.layoutBox, t)),
				(this.elastic = (function () {
					let e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Na;
					return (
						!1 === e ? (e = 0) : !0 === e && (e = Na),
						{ x: Va(e, "left", "right"), y: Va(e, "top", "bottom") }
					);
				})(n)),
				i !== this.constraints &&
					r &&
					this.constraints &&
					!this.hasMutatedConstraints &&
					Ua((e) => {
						!1 !== this.constraints &&
							this.getAxisMotionValue(e) &&
							(this.constraints[e] = (function (e, t) {
								const n = {};
								return (
									void 0 !== t.min && (n.min = t.min - e.min),
									void 0 !== t.max && (n.max = t.max - e.min),
									n
								);
							})(r.layoutBox[e], this.constraints[e]));
					});
		}
		resolveRefConstraints() {
			const { dragConstraints: e, onMeasureDragConstraints: t } =
				this.getProps();
			if (!e || !Fa(e)) return !1;
			const n = e.current;
			Mi(
				null !== n,
				"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
			);
			const { projection: r } = this.visualElement;
			if (!r || !r.layout) return !1;
			const i = (function (e, t, n) {
				const r = rs(e, n),
					{ scroll: i } = t;
				return i && (es(r.x, i.offset.x), es(r.y, i.offset.y)), r;
			})(n, r.root, this.visualElement.getTransformPagePoint());
			let o = (function (e, t) {
				return { x: Ma(e.x, t.x), y: Ma(e.y, t.y) };
			})(r.layout.layoutBox, i);
			if (t) {
				const e = t(
					(function (e) {
						let { x: t, y: n } = e;
						return { top: n.min, right: t.max, bottom: n.max, left: t.min };
					})(o)
				);
				(this.hasMutatedConstraints = !!e), e && (o = Ia(e));
			}
			return o;
		}
		startAnimation(e) {
			const {
					drag: t,
					dragMomentum: n,
					dragElastic: r,
					dragTransition: i,
					dragSnapToOrigin: o,
					onDragTransitionEnd: a,
				} = this.getProps(),
				s = this.constraints || {},
				l = Ua((a) => {
					if (!ss(a, t, this.currentDirection)) return;
					let l = (s && s[a]) || {};
					o && (l = { min: 0, max: 0 });
					const u = r ? 200 : 1e6,
						c = r ? 40 : 1e7,
						d = pe(
							pe(
								{
									type: "inertia",
									velocity: n ? e[a] : 0,
									bounceStiffness: u,
									bounceDamping: c,
									timeConstant: 750,
									restDelta: 1,
									restSpeed: 10,
								},
								i
							),
							l
						);
					return this.startAxisValueAnimation(a, d);
				});
			return Promise.all(l).then(a);
		}
		startAxisValueAnimation(e, t) {
			const n = this.getAxisMotionValue(e);
			return (
				yr(this.visualElement, e),
				n.start(Jo(e, n, 0, t, this.visualElement, !1))
			);
		}
		stopAnimation() {
			Ua((e) => this.getAxisMotionValue(e).stop());
		}
		pauseAnimation() {
			Ua((e) => {
				var t;
				return null === (t = this.getAxisMotionValue(e).animation) ||
					void 0 === t
					? void 0
					: t.pause();
			});
		}
		getAnimationState(e) {
			var t;
			return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t
				? void 0
				: t.state;
		}
		getAxisMotionValue(e) {
			const t = "_drag".concat(e.toUpperCase()),
				n = this.visualElement.getProps(),
				r = n[t];
			return (
				r ||
				this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
			);
		}
		snapToCursor(e) {
			Ua((t) => {
				const { drag: n } = this.getProps();
				if (!ss(t, n, this.currentDirection)) return;
				const { projection: r } = this.visualElement,
					i = this.getAxisMotionValue(t);
				if (r && r.layout) {
					const { min: n, max: o } = r.layout.layoutBox[t];
					i.set(e[t] - to(n, o, 0.5));
				}
			});
		}
		scalePositionWithinConstraints() {
			if (!this.visualElement.current) return;
			const { drag: e, dragConstraints: t } = this.getProps(),
				{ projection: n } = this.visualElement;
			if (!Fa(t) || !n || !this.constraints) return;
			this.stopAnimation();
			const r = { x: 0, y: 0 };
			Ua((e) => {
				const t = this.getAxisMotionValue(e);
				if (t && !1 !== this.constraints) {
					const n = t.get();
					r[e] = (function (e, t) {
						let n = 0.5;
						const r = _a(e),
							i = _a(t);
						return (
							i > r
								? (n = Cn(t.min, t.max - r, e.min))
								: r > i && (n = Cn(e.min, e.max - i, t.min)),
							Or(0, 1, n)
						);
					})({ min: n, max: n }, this.constraints[e]);
				}
			});
			const { transformTemplate: i } = this.visualElement.getProps();
			(this.visualElement.current.style.transform = i ? i({}, "") : "none"),
				n.root && n.root.updateScroll(),
				n.updateLayout(),
				this.resolveConstraints(),
				Ua((t) => {
					if (!ss(t, e, null)) return;
					const n = this.getAxisMotionValue(t),
						{ min: i, max: o } = this.constraints[t];
					n.set(to(i, o, r[t]));
				});
		}
		addListeners() {
			if (!this.visualElement.current) return;
			os.set(this.visualElement, this);
			const e = ba(this.visualElement.current, "pointerdown", (e) => {
					const { drag: t, dragListener: n = !0 } = this.getProps();
					t && n && this.start(e);
				}),
				t = () => {
					const { dragConstraints: e } = this.getProps();
					Fa(e) &&
						e.current &&
						(this.constraints = this.resolveRefConstraints());
				},
				{ projection: n } = this.visualElement,
				r = n.addEventListener("measure", t);
			n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
				tr.read(t);
			const i = va(window, "resize", () =>
					this.scalePositionWithinConstraints()
				),
				o = n.addEventListener("didUpdate", (e) => {
					let { delta: t, hasLayoutChanged: n } = e;
					this.isDragging &&
						n &&
						(Ua((e) => {
							const n = this.getAxisMotionValue(e);
							n &&
								((this.originPoint[e] += t[e].translate),
								n.set(n.get() + t[e].translate));
						}),
						this.visualElement.render());
				});
			return () => {
				i(), e(), r(), o && o();
			};
		}
		getProps() {
			const e = this.visualElement.getProps(),
				{
					drag: t = !1,
					dragDirectionLock: n = !1,
					dragPropagation: r = !1,
					dragConstraints: i = !1,
					dragElastic: o = Na,
					dragMomentum: a = !0,
				} = e;
			return pe(
				pe({}, e),
				{},
				{
					drag: t,
					dragDirectionLock: n,
					dragPropagation: r,
					dragConstraints: i,
					dragElastic: o,
					dragMomentum: a,
				}
			);
		}
	}
	function ss(e, t, n) {
		return (!0 === t || t === e) && (null === n || n === e);
	}
	const ls = (e) => (t, n) => {
		e && tr.postRender(() => e(t, n));
	};
	const us = (0, i.createContext)(null);
	const cs = (0, i.createContext)({}),
		ds = (0, i.createContext)({}),
		fs = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
	function hs(e, t) {
		return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
	}
	const ps = {
			correct: (e, t) => {
				if (!t.target) return e;
				if ("string" === typeof e) {
					if (!Yr.test(e)) return e;
					e = parseFloat(e);
				}
				const n = hs(e, t.target.x),
					r = hs(e, t.target.y);
				return "".concat(n, "% ").concat(r, "%");
			},
		},
		ms = {
			correct: (e, t) => {
				let { treeScale: n, projectionDelta: r } = t;
				const i = e,
					o = ci.parse(e);
				if (o.length > 5) return i;
				const a = ci.createTransformer(e),
					s = "number" !== typeof o[0] ? 1 : 0,
					l = r.x.scale * n.x,
					u = r.y.scale * n.y;
				(o[0 + s] /= l), (o[1 + s] /= u);
				const c = to(l, u, 0.5);
				return (
					"number" === typeof o[2 + s] && (o[2 + s] /= c),
					"number" === typeof o[3 + s] && (o[3 + s] /= c),
					a(o)
				);
			},
		},
		gs = {};
	const { schedule: vs, cancel: ys } = er(queueMicrotask, !1);
	class bs extends i.Component {
		componentDidMount() {
			const {
					visualElement: e,
					layoutGroup: t,
					switchLayoutGroup: n,
					layoutId: r,
				} = this.props,
				{ projection: i } = e;
			var o;
			(o = xs),
				Object.assign(gs, o),
				i &&
					(t.group && t.group.add(i),
					n && n.register && r && n.register(i),
					i.root.didUpdate(),
					i.addEventListener("animationComplete", () => {
						this.safeToRemove();
					}),
					i.setOptions(
						pe(
							pe({}, i.options),
							{},
							{ onExitComplete: () => this.safeToRemove() }
						)
					)),
				(fs.hasEverUpdated = !0);
		}
		getSnapshotBeforeUpdate(e) {
			const {
					layoutDependency: t,
					visualElement: n,
					drag: r,
					isPresent: i,
				} = this.props,
				o = n.projection;
			return o
				? ((o.isPresent = i),
				  r || e.layoutDependency !== t || void 0 === t
						? o.willUpdate()
						: this.safeToRemove(),
				  e.isPresent !== i &&
						(i
							? o.promote()
							: o.relegate() ||
							  tr.postRender(() => {
									const e = o.getStack();
									(e && e.members.length) || this.safeToRemove();
							  })),
				  null)
				: null;
		}
		componentDidUpdate() {
			const { projection: e } = this.props.visualElement;
			e &&
				(e.root.didUpdate(),
				vs.postRender(() => {
					!e.currentAnimation && e.isLead() && this.safeToRemove();
				}));
		}
		componentWillUnmount() {
			const {
					visualElement: e,
					layoutGroup: t,
					switchLayoutGroup: n,
				} = this.props,
				{ projection: r } = e;
			r &&
				(r.scheduleCheckAfterUnmount(),
				t && t.group && t.group.remove(r),
				n && n.deregister && n.deregister(r));
		}
		safeToRemove() {
			const { safeToRemove: e } = this.props;
			e && e();
		}
		render() {
			return null;
		}
	}
	function ws(e) {
		const [t, n] = (function () {
				let e =
					!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				const t = (0, i.useContext)(us);
				if (null === t) return [!0, null];
				const { isPresent: n, onExitComplete: r, register: o } = t,
					a = (0, i.useId)();
				(0, i.useEffect)(() => {
					e && o(a);
				}, [e]);
				const s = (0, i.useCallback)(() => e && r && r(a), [a, r, e]);
				return !n && r ? [!1, s] : [!0];
			})(),
			r = (0, i.useContext)(cs);
		return (0, Mt.jsx)(
			bs,
			pe(
				pe({}, e),
				{},
				{
					layoutGroup: r,
					switchLayoutGroup: (0, i.useContext)(ds),
					isPresent: t,
					safeToRemove: n,
				}
			)
		);
	}
	const xs = {
		borderRadius: pe(
			pe({}, ps),
			{},
			{
				applyTo: [
					"borderTopLeftRadius",
					"borderTopRightRadius",
					"borderBottomLeftRadius",
					"borderBottomRightRadius",
				],
			}
		),
		borderTopLeftRadius: ps,
		borderTopRightRadius: ps,
		borderBottomLeftRadius: ps,
		borderBottomRightRadius: ps,
		boxShadow: ms,
	};
	const Ss = (e, t) => e.depth - t.depth;
	class ks {
		constructor() {
			(this.children = []), (this.isDirty = !1);
		}
		add(e) {
			lr(this.children, e), (this.isDirty = !0);
		}
		remove(e) {
			ur(this.children, e), (this.isDirty = !0);
		}
		forEach(e) {
			this.isDirty && this.children.sort(Ss),
				(this.isDirty = !1),
				this.children.forEach(e);
		}
	}
	function Es(e, t) {
		const n = sr.now(),
			r = (i) => {
				let { timestamp: o } = i;
				const a = o - n;
				a >= t && (nr(r), e(a - t));
			};
		return tr.read(r, !0), () => nr(r);
	}
	function Ps(e) {
		const t = vr(e) ? e.get() : e;
		return ((e) => Boolean(e && "object" === typeof e && e.mix && e.toValue))(t)
			? t.toValue()
			: t;
	}
	const Cs = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
		Ts = Cs.length,
		Fs = (e) => ("string" === typeof e ? parseFloat(e) : e),
		_s = (e) => "number" === typeof e || Yr.test(e);
	function As(e, t) {
		return void 0 !== e[t] ? e[t] : e.borderRadius;
	}
	const Rs = Ds(0, 0.5, jr),
		js = Ds(0.5, 0.95, $n);
	function Ds(e, t, n) {
		return (r) => (r < e ? 0 : r > t ? 1 : n(Cn(e, t, r)));
	}
	function Ls(e, t) {
		(e.min = t.min), (e.max = t.max);
	}
	function Os(e, t) {
		Ls(e.x, t.x), Ls(e.y, t.y);
	}
	function Ms(e, t) {
		(e.translate = t.translate),
			(e.scale = t.scale),
			(e.originPoint = t.originPoint),
			(e.origin = t.origin);
	}
	function Ns(e, t, n, r, i) {
		return (
			(e = Xa((e -= t), 1 / n, r)), void 0 !== i && (e = Xa(e, 1 / i, r)), e
		);
	}
	function Vs(e, t, n, r, i) {
		let [o, a, s] = n;
		!(function (e) {
			let t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
				r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5,
				i = arguments.length > 4 ? arguments[4] : void 0,
				o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
				a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
			Qr.test(t) &&
				((t = parseFloat(t)), (t = to(a.min, a.max, t / 100) - a.min));
			if ("number" !== typeof t) return;
			let s = to(o.min, o.max, r);
			e === o && (s -= t),
				(e.min = Ns(e.min, t, n, s, i)),
				(e.max = Ns(e.max, t, n, s, i));
		})(e, t[o], t[a], t[s], t.scale, r, i);
	}
	const zs = ["x", "scaleX", "originX"],
		Bs = ["y", "scaleY", "originY"];
	function Us(e, t, n, r) {
		Vs(e.x, t, zs, n ? n.x : void 0, r ? r.x : void 0),
			Vs(e.y, t, Bs, n ? n.y : void 0, r ? r.y : void 0);
	}
	function Is(e) {
		return 0 === e.translate && 1 === e.scale;
	}
	function Ws(e) {
		return Is(e.x) && Is(e.y);
	}
	function Hs(e, t) {
		return e.min === t.min && e.max === t.max;
	}
	function qs(e, t) {
		return (
			Math.round(e.min) === Math.round(t.min) &&
			Math.round(e.max) === Math.round(t.max)
		);
	}
	function $s(e, t) {
		return qs(e.x, t.x) && qs(e.y, t.y);
	}
	function Ks(e) {
		return _a(e.x) / _a(e.y);
	}
	function Xs(e, t) {
		return (
			e.translate === t.translate &&
			e.scale === t.scale &&
			e.originPoint === t.originPoint
		);
	}
	class Qs {
		constructor() {
			this.members = [];
		}
		add(e) {
			lr(this.members, e), e.scheduleRender();
		}
		remove(e) {
			if (
				(ur(this.members, e),
				e === this.prevLead && (this.prevLead = void 0),
				e === this.lead)
			) {
				const e = this.members[this.members.length - 1];
				e && this.promote(e);
			}
		}
		relegate(e) {
			const t = this.members.findIndex((t) => e === t);
			if (0 === t) return !1;
			let n;
			for (let r = t; r >= 0; r--) {
				const e = this.members[r];
				if (!1 !== e.isPresent) {
					n = e;
					break;
				}
			}
			return !!n && (this.promote(n), !0);
		}
		promote(e, t) {
			const n = this.lead;
			if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
				n.instance && n.scheduleRender(),
					e.scheduleRender(),
					(e.resumeFrom = n),
					t && (e.resumeFrom.preserveOpacity = !0),
					n.snapshot &&
						((e.snapshot = n.snapshot),
						(e.snapshot.latestValues = n.animationValues || n.latestValues)),
					e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
				const { crossfade: r } = e.options;
				!1 === r && n.hide();
			}
		}
		exitAnimationComplete() {
			this.members.forEach((e) => {
				const { options: t, resumingFrom: n } = e;
				t.onExitComplete && t.onExitComplete(),
					n && n.options.onExitComplete && n.options.onExitComplete();
			});
		}
		scheduleRender() {
			this.members.forEach((e) => {
				e.instance && e.scheduleRender(!1);
			});
		}
		removeLeadSnapshot() {
			this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
		}
	}
	const Ys = {
			type: "projectionFrame",
			totalNodes: 0,
			resolvedTargetDeltas: 0,
			recalculatedProjection: 0,
		},
		Gs = "undefined" !== typeof window && void 0 !== window.MotionDebug,
		Js = ["", "X", "Y", "Z"],
		Zs = { visibility: "hidden" };
	let el = 0;
	function tl(e, t, n, r) {
		const { latestValues: i } = t;
		i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
	}
	function nl(e) {
		if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
		const { visualElement: t } = e.options;
		if (!t) return;
		const n = xr(t);
		if (window.MotionHasOptimisedAnimation(n, "transform")) {
			const { layout: t, layoutId: r } = e.options;
			window.MotionCancelOptimisedAnimation(n, "transform", tr, !(t || r));
		}
		const { parent: r } = e;
		r && !r.hasCheckedOptimisedAppear && nl(r);
	}
	function rl(e) {
		let {
			attachResizeListener: t,
			defaultParent: n,
			measureScroll: r,
			checkIsScrollRoot: i,
			resetTransform: o,
		} = e;
		return class {
			constructor() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t =
						arguments.length > 1 && void 0 !== arguments[1]
							? arguments[1]
							: null === n || void 0 === n
							? void 0
							: n();
				(this.id = el++),
					(this.animationId = 0),
					(this.children = new Set()),
					(this.options = {}),
					(this.isTreeAnimating = !1),
					(this.isAnimationBlocked = !1),
					(this.isLayoutDirty = !1),
					(this.isProjectionDirty = !1),
					(this.isSharedProjectionDirty = !1),
					(this.isTransformDirty = !1),
					(this.updateManuallyBlocked = !1),
					(this.updateBlockedByResize = !1),
					(this.isUpdating = !1),
					(this.isSVG = !1),
					(this.needsReset = !1),
					(this.shouldResetTransform = !1),
					(this.hasCheckedOptimisedAppear = !1),
					(this.treeScale = { x: 1, y: 1 }),
					(this.eventHandlers = new Map()),
					(this.hasTreeAnimated = !1),
					(this.updateScheduled = !1),
					(this.scheduleUpdate = () => this.update()),
					(this.projectionUpdateScheduled = !1),
					(this.checkUpdateFailed = () => {
						this.isUpdating &&
							((this.isUpdating = !1), this.clearAllSnapshots());
					}),
					(this.updateProjection = () => {
						(this.projectionUpdateScheduled = !1),
							Gs &&
								(Ys.totalNodes =
									Ys.resolvedTargetDeltas =
									Ys.recalculatedProjection =
										0),
							this.nodes.forEach(al),
							this.nodes.forEach(hl),
							this.nodes.forEach(pl),
							this.nodes.forEach(sl),
							Gs && window.MotionDebug.record(Ys);
					}),
					(this.resolvedRelativeTargetAt = 0),
					(this.hasProjected = !1),
					(this.isVisible = !0),
					(this.animationProgress = 0),
					(this.sharedNodes = new Map()),
					(this.latestValues = e),
					(this.root = t ? t.root || t : this),
					(this.path = t ? [...t.path, t] : []),
					(this.parent = t),
					(this.depth = t ? t.depth + 1 : 0);
				for (let n = 0; n < this.path.length; n++)
					this.path[n].shouldResetTransform = !0;
				this.root === this && (this.nodes = new ks());
			}
			addEventListener(e, t) {
				return (
					this.eventHandlers.has(e) || this.eventHandlers.set(e, new cr()),
					this.eventHandlers.get(e).add(t)
				);
			}
			notifyListeners(e) {
				const t = this.eventHandlers.get(e);
				for (
					var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
					i < n;
					i++
				)
					r[i - 1] = arguments[i];
				t && t.notify(...r);
			}
			hasListeners(e) {
				return this.eventHandlers.has(e);
			}
			mount(e) {
				let n =
					arguments.length > 1 && void 0 !== arguments[1]
						? arguments[1]
						: this.root.hasTreeAnimated;
				if (this.instance) return;
				var r;
				(this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName),
					(this.instance = e);
				const { layoutId: i, layout: o, visualElement: a } = this.options;
				if (
					(a && !a.current && a.mount(e),
					this.root.nodes.add(this),
					this.parent && this.parent.children.add(this),
					n && (o || i) && (this.isLayoutDirty = !0),
					t)
				) {
					let n;
					const r = () => (this.root.updateBlockedByResize = !1);
					t(e, () => {
						(this.root.updateBlockedByResize = !0),
							n && n(),
							(n = Es(r, 250)),
							fs.hasAnimatedSinceResize &&
								((fs.hasAnimatedSinceResize = !1), this.nodes.forEach(fl));
					});
				}
				i && this.root.registerSharedNode(i, this),
					!1 !== this.options.animate &&
						a &&
						(i || o) &&
						this.addEventListener("didUpdate", (e) => {
							let {
								delta: t,
								hasLayoutChanged: n,
								hasRelativeTargetChanged: r,
								layout: i,
							} = e;
							if (this.isTreeAnimationBlocked())
								return (
									(this.target = void 0), void (this.relativeTarget = void 0)
								);
							const o =
									this.options.transition || a.getDefaultTransition() || wl,
								{ onLayoutAnimationStart: s, onLayoutAnimationComplete: l } =
									a.getProps(),
								u = !this.targetLayout || !$s(this.targetLayout, i) || r,
								c = !n && r;
							if (
								this.options.layoutRoot ||
								(this.resumeFrom && this.resumeFrom.instance) ||
								c ||
								(n && (u || !this.currentAnimation))
							) {
								this.resumeFrom &&
									((this.resumingFrom = this.resumeFrom),
									(this.resumingFrom.resumingFrom = void 0)),
									this.setAnimationOrigin(t, c);
								const e = pe(
									pe({}, vn(o, "layout")),
									{},
									{ onPlay: s, onComplete: l }
								);
								(a.shouldReduceMotion || this.options.layoutRoot) &&
									((e.delay = 0), (e.type = !1)),
									this.startAnimation(e);
							} else
								n || fl(this),
									this.isLead() &&
										this.options.onExitComplete &&
										this.options.onExitComplete();
							this.targetLayout = i;
						});
			}
			unmount() {
				this.options.layoutId && this.willUpdate(),
					this.root.nodes.remove(this);
				const e = this.getStack();
				e && e.remove(this),
					this.parent && this.parent.children.delete(this),
					(this.instance = void 0),
					nr(this.updateProjection);
			}
			blockUpdate() {
				this.updateManuallyBlocked = !0;
			}
			unblockUpdate() {
				this.updateManuallyBlocked = !1;
			}
			isUpdateBlocked() {
				return this.updateManuallyBlocked || this.updateBlockedByResize;
			}
			isTreeAnimationBlocked() {
				return (
					this.isAnimationBlocked ||
					(this.parent && this.parent.isTreeAnimationBlocked()) ||
					!1
				);
			}
			startUpdate() {
				this.isUpdateBlocked() ||
					((this.isUpdating = !0),
					this.nodes && this.nodes.forEach(ml),
					this.animationId++);
			}
			getTransformTemplate() {
				const { visualElement: e } = this.options;
				return e && e.getProps().transformTemplate;
			}
			willUpdate() {
				let e =
					!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked()))
					return void (
						this.options.onExitComplete && this.options.onExitComplete()
					);
				if (
					(window.MotionCancelOptimisedAnimation &&
						!this.hasCheckedOptimisedAppear &&
						nl(this),
					!this.root.isUpdating && this.root.startUpdate(),
					this.isLayoutDirty)
				)
					return;
				this.isLayoutDirty = !0;
				for (let i = 0; i < this.path.length; i++) {
					const e = this.path[i];
					(e.shouldResetTransform = !0),
						e.updateScroll("snapshot"),
						e.options.layoutRoot && e.willUpdate(!1);
				}
				const { layoutId: t, layout: n } = this.options;
				if (void 0 === t && !n) return;
				const r = this.getTransformTemplate();
				(this.prevTransformTemplateValue = r
					? r(this.latestValues, "")
					: void 0),
					this.updateSnapshot(),
					e && this.notifyListeners("willUpdate");
			}
			update() {
				this.updateScheduled = !1;
				if (this.isUpdateBlocked())
					return (
						this.unblockUpdate(),
						this.clearAllSnapshots(),
						void this.nodes.forEach(ul)
					);
				this.isUpdating || this.nodes.forEach(cl),
					(this.isUpdating = !1),
					this.nodes.forEach(dl),
					this.nodes.forEach(il),
					this.nodes.forEach(ol),
					this.clearAllSnapshots();
				const e = sr.now();
				(rr.delta = Or(0, 1e3 / 60, e - rr.timestamp)),
					(rr.timestamp = e),
					(rr.isProcessing = !0),
					ir.update.process(rr),
					ir.preRender.process(rr),
					ir.render.process(rr),
					(rr.isProcessing = !1);
			}
			didUpdate() {
				this.updateScheduled ||
					((this.updateScheduled = !0), vs.read(this.scheduleUpdate));
			}
			clearAllSnapshots() {
				this.nodes.forEach(ll), this.sharedNodes.forEach(gl);
			}
			scheduleUpdateProjection() {
				this.projectionUpdateScheduled ||
					((this.projectionUpdateScheduled = !0),
					tr.preRender(this.updateProjection, !1, !0));
			}
			scheduleCheckAfterUnmount() {
				tr.postRender(() => {
					this.isLayoutDirty
						? this.root.didUpdate()
						: this.root.checkUpdateFailed();
				});
			}
			updateSnapshot() {
				!this.snapshot && this.instance && (this.snapshot = this.measure());
			}
			updateLayout() {
				if (!this.instance) return;
				if (
					(this.updateScroll(),
					(!this.options.alwaysMeasureLayout || !this.isLead()) &&
						!this.isLayoutDirty)
				)
					return;
				if (this.resumeFrom && !this.resumeFrom.instance)
					for (let n = 0; n < this.path.length; n++) {
						this.path[n].updateScroll();
					}
				const e = this.layout;
				(this.layout = this.measure(!1)),
					(this.layoutCorrected = {
						x: { min: 0, max: 0 },
						y: { min: 0, max: 0 },
					}),
					(this.isLayoutDirty = !1),
					(this.projectionDelta = void 0),
					this.notifyListeners("measure", this.layout.layoutBox);
				const { visualElement: t } = this.options;
				t &&
					t.notify(
						"LayoutMeasure",
						this.layout.layoutBox,
						e ? e.layoutBox : void 0
					);
			}
			updateScroll() {
				let e =
						arguments.length > 0 && void 0 !== arguments[0]
							? arguments[0]
							: "measure",
					t = Boolean(this.options.layoutScroll && this.instance);
				if (
					(this.scroll &&
						this.scroll.animationId === this.root.animationId &&
						this.scroll.phase === e &&
						(t = !1),
					t)
				) {
					const t = i(this.instance);
					this.scroll = {
						animationId: this.root.animationId,
						phase: e,
						isRoot: t,
						offset: r(this.instance),
						wasRoot: this.scroll ? this.scroll.isRoot : t,
					};
				}
			}
			resetTransform() {
				if (!o) return;
				const e =
						this.isLayoutDirty ||
						this.shouldResetTransform ||
						this.options.alwaysMeasureLayout,
					t = this.projectionDelta && !Ws(this.projectionDelta),
					n = this.getTransformTemplate(),
					r = n ? n(this.latestValues, "") : void 0,
					i = r !== this.prevTransformTemplateValue;
				e &&
					(t || qa(this.latestValues) || i) &&
					(o(this.instance, r),
					(this.shouldResetTransform = !1),
					this.scheduleRender());
			}
			measure() {
				let e =
					!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				const t = this.measurePageBox();
				let n = this.removeElementScroll(t);
				var r;
				return (
					e && (n = this.removeTransform(n)),
					kl((r = n).x),
					kl(r.y),
					{
						animationId: this.root.animationId,
						measuredBox: t,
						layoutBox: n,
						latestValues: {},
						source: this.id,
					}
				);
			}
			measurePageBox() {
				var e;
				const { visualElement: t } = this.options;
				if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
				const n = t.measureViewportBox();
				if (
					!(
						(null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) ||
						this.path.some(Pl)
					)
				) {
					const { scroll: e } = this.root;
					e && (es(n.x, e.offset.x), es(n.y, e.offset.y));
				}
				return n;
			}
			removeElementScroll(e) {
				var t;
				const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
				if (
					(Os(n, e),
					null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot)
				)
					return n;
				for (let r = 0; r < this.path.length; r++) {
					const t = this.path[r],
						{ scroll: i, options: o } = t;
					t !== this.root &&
						i &&
						o.layoutScroll &&
						(i.wasRoot && Os(n, e), es(n.x, i.offset.x), es(n.y, i.offset.y));
				}
				return n;
			}
			applyTransform(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
				Os(n, e);
				for (let r = 0; r < this.path.length; r++) {
					const e = this.path[r];
					!t &&
						e.options.layoutScroll &&
						e.scroll &&
						e !== e.root &&
						ns(n, { x: -e.scroll.offset.x, y: -e.scroll.offset.y }),
						qa(e.latestValues) && ns(n, e.latestValues);
				}
				return qa(this.latestValues) && ns(n, this.latestValues), n;
			}
			removeTransform(e) {
				const t = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
				Os(t, e);
				for (let n = 0; n < this.path.length; n++) {
					const e = this.path[n];
					if (!e.instance) continue;
					if (!qa(e.latestValues)) continue;
					Ha(e.latestValues) && e.updateSnapshot();
					const r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
					Os(r, e.measurePageBox()),
						Us(
							t,
							e.latestValues,
							e.snapshot ? e.snapshot.layoutBox : void 0,
							r
						);
				}
				return qa(this.latestValues) && Us(t, this.latestValues), t;
			}
			setTargetDelta(e) {
				(this.targetDelta = e),
					this.root.scheduleUpdateProjection(),
					(this.isProjectionDirty = !0);
			}
			setOptions(e) {
				this.options = pe(
					pe(pe({}, this.options), e),
					{},
					{ crossfade: void 0 === e.crossfade || e.crossfade }
				);
			}
			clearMeasurements() {
				(this.scroll = void 0),
					(this.layout = void 0),
					(this.snapshot = void 0),
					(this.prevTransformTemplateValue = void 0),
					(this.targetDelta = void 0),
					(this.target = void 0),
					(this.isLayoutDirty = !1);
			}
			forceRelativeParentToResolveTarget() {
				this.relativeParent &&
					this.relativeParent.resolvedRelativeTargetAt !== rr.timestamp &&
					this.relativeParent.resolveTargetDelta(!0);
			}
			resolveTargetDelta() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				var t;
				const n = this.getLead();
				this.isProjectionDirty ||
					(this.isProjectionDirty = n.isProjectionDirty),
					this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty),
					this.isSharedProjectionDirty ||
						(this.isSharedProjectionDirty = n.isSharedProjectionDirty);
				const r = Boolean(this.resumingFrom) || this !== n;
				if (
					!(
						e ||
						(r && this.isSharedProjectionDirty) ||
						this.isProjectionDirty ||
						(null === (t = this.parent) || void 0 === t
							? void 0
							: t.isProjectionDirty) ||
						this.attemptToResolveRelativeTarget ||
						this.root.updateBlockedByResize
					)
				)
					return;
				const { layout: i, layoutId: o } = this.options;
				if (this.layout && (i || o)) {
					if (
						((this.resolvedRelativeTargetAt = rr.timestamp),
						!this.targetDelta && !this.relativeTarget)
					) {
						const e = this.getClosestProjectingParent();
						e && e.layout && 1 !== this.animationProgress
							? ((this.relativeParent = e),
							  this.forceRelativeParentToResolveTarget(),
							  (this.relativeTarget = {
									x: { min: 0, max: 0 },
									y: { min: 0, max: 0 },
							  }),
							  (this.relativeTargetOrigin = {
									x: { min: 0, max: 0 },
									y: { min: 0, max: 0 },
							  }),
							  La(
									this.relativeTargetOrigin,
									this.layout.layoutBox,
									e.layout.layoutBox
							  ),
							  Os(this.relativeTarget, this.relativeTargetOrigin))
							: (this.relativeParent = this.relativeTarget = void 0);
					}
					if (this.relativeTarget || this.targetDelta) {
						var a, s, l;
						if (
							(this.target ||
								((this.target = {
									x: { min: 0, max: 0 },
									y: { min: 0, max: 0 },
								}),
								(this.targetWithTransforms = {
									x: { min: 0, max: 0 },
									y: { min: 0, max: 0 },
								})),
							this.relativeTarget &&
							this.relativeTargetOrigin &&
							this.relativeParent &&
							this.relativeParent.target
								? (this.forceRelativeParentToResolveTarget(),
								  (a = this.target),
								  (s = this.relativeTarget),
								  (l = this.relativeParent.target),
								  ja(a.x, s.x, l.x),
								  ja(a.y, s.y, l.y))
								: this.targetDelta
								? (Boolean(this.resumingFrom)
										? (this.target = this.applyTransform(this.layout.layoutBox))
										: Os(this.target, this.layout.layoutBox),
								  Ga(this.target, this.targetDelta))
								: Os(this.target, this.layout.layoutBox),
							this.attemptToResolveRelativeTarget)
						) {
							this.attemptToResolveRelativeTarget = !1;
							const e = this.getClosestProjectingParent();
							e &&
							Boolean(e.resumingFrom) === Boolean(this.resumingFrom) &&
							!e.options.layoutScroll &&
							e.target &&
							1 !== this.animationProgress
								? ((this.relativeParent = e),
								  this.forceRelativeParentToResolveTarget(),
								  (this.relativeTarget = {
										x: { min: 0, max: 0 },
										y: { min: 0, max: 0 },
								  }),
								  (this.relativeTargetOrigin = {
										x: { min: 0, max: 0 },
										y: { min: 0, max: 0 },
								  }),
								  La(this.relativeTargetOrigin, this.target, e.target),
								  Os(this.relativeTarget, this.relativeTargetOrigin))
								: (this.relativeParent = this.relativeTarget = void 0);
						}
						Gs && Ys.resolvedTargetDeltas++;
					}
				}
			}
			getClosestProjectingParent() {
				if (
					this.parent &&
					!Ha(this.parent.latestValues) &&
					!$a(this.parent.latestValues)
				)
					return this.parent.isProjecting()
						? this.parent
						: this.parent.getClosestProjectingParent();
			}
			isProjecting() {
				return Boolean(
					(this.relativeTarget ||
						this.targetDelta ||
						this.options.layoutRoot) &&
						this.layout
				);
			}
			calcProjection() {
				var e;
				const t = this.getLead(),
					n = Boolean(this.resumingFrom) || this !== t;
				let r = !0;
				if (
					((this.isProjectionDirty ||
						(null === (e = this.parent) || void 0 === e
							? void 0
							: e.isProjectionDirty)) &&
						(r = !1),
					n &&
						(this.isSharedProjectionDirty || this.isTransformDirty) &&
						(r = !1),
					this.resolvedRelativeTargetAt === rr.timestamp && (r = !1),
					r)
				)
					return;
				const { layout: i, layoutId: o } = this.options;
				if (
					((this.isTreeAnimating = Boolean(
						(this.parent && this.parent.isTreeAnimating) ||
							this.currentAnimation ||
							this.pendingAnimation
					)),
					this.isTreeAnimating ||
						(this.targetDelta = this.relativeTarget = void 0),
					!this.layout || (!i && !o))
				)
					return;
				Os(this.layoutCorrected, this.layout.layoutBox);
				const a = this.treeScale.x,
					s = this.treeScale.y;
				!(function (e, t, n) {
					let r =
						arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
					const i = n.length;
					if (!i) return;
					let o, a;
					t.x = t.y = 1;
					for (let s = 0; s < i; s++) {
						(o = n[s]), (a = o.projectionDelta);
						const { visualElement: i } = o.options;
						(i && i.props.style && "contents" === i.props.style.display) ||
							(r &&
								o.options.layoutScroll &&
								o.scroll &&
								o !== o.root &&
								ns(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
							a && ((t.x *= a.x.scale), (t.y *= a.y.scale), Ga(e, a)),
							r && qa(o.latestValues) && ns(e, o.latestValues));
					}
					t.x < Za && t.x > Ja && (t.x = 1), t.y < Za && t.y > Ja && (t.y = 1);
				})(this.layoutCorrected, this.treeScale, this.path, n),
					!t.layout ||
						t.target ||
						(1 === this.treeScale.x && 1 === this.treeScale.y) ||
						((t.target = t.layout.layoutBox),
						(t.targetWithTransforms = {
							x: { min: 0, max: 0 },
							y: { min: 0, max: 0 },
						}));
				const { target: l } = t;
				l
					? (this.projectionDelta && this.prevProjectionDelta
							? (Ms(this.prevProjectionDelta.x, this.projectionDelta.x),
							  Ms(this.prevProjectionDelta.y, this.projectionDelta.y))
							: this.createProjectionDeltas(),
					  Ra(
							this.projectionDelta,
							this.layoutCorrected,
							l,
							this.latestValues
					  ),
					  (this.treeScale.x === a &&
							this.treeScale.y === s &&
							Xs(this.projectionDelta.x, this.prevProjectionDelta.x) &&
							Xs(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
							((this.hasProjected = !0),
							this.scheduleRender(),
							this.notifyListeners("projectionUpdate", l)),
					  Gs && Ys.recalculatedProjection++)
					: this.prevProjectionDelta &&
					  (this.createProjectionDeltas(), this.scheduleRender());
			}
			hide() {
				this.isVisible = !1;
			}
			show() {
				this.isVisible = !0;
			}
			scheduleRender() {
				let e =
					!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
				var t;
				if (
					(null === (t = this.options.visualElement) ||
						void 0 === t ||
						t.scheduleRender(),
					e)
				) {
					const e = this.getStack();
					e && e.scheduleRender();
				}
				this.resumingFrom &&
					!this.resumingFrom.instance &&
					(this.resumingFrom = void 0);
			}
			createProjectionDeltas() {
				(this.prevProjectionDelta = {
					x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
				}),
					(this.projectionDelta = {
						x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
						y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					}),
					(this.projectionDeltaWithTransform = {
						x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
						y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					});
			}
			setAnimationOrigin(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
				const n = this.snapshot,
					r = n ? n.latestValues : {},
					i = pe({}, this.latestValues),
					o = {
						x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
						y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
					};
				(this.relativeParent && this.relativeParent.options.layoutRoot) ||
					(this.relativeTarget = this.relativeTargetOrigin = void 0),
					(this.attemptToResolveRelativeTarget = !t);
				const a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
					s =
						(n ? n.source : void 0) !==
						(this.layout ? this.layout.source : void 0),
					l = this.getStack(),
					u = !l || l.members.length <= 1,
					c = Boolean(
						s && !u && !0 === this.options.crossfade && !this.path.some(bl)
					);
				let d;
				(this.animationProgress = 0),
					(this.mixTargetDelta = (t) => {
						const n = t / 1e3;
						var l, f, h, p;
						vl(o.x, e.x, n),
							vl(o.y, e.y, n),
							this.setTargetDelta(o),
							this.relativeTarget &&
								this.relativeTargetOrigin &&
								this.layout &&
								this.relativeParent &&
								this.relativeParent.layout &&
								(La(
									a,
									this.layout.layoutBox,
									this.relativeParent.layout.layoutBox
								),
								(l = this.relativeTarget),
								(f = this.relativeTargetOrigin),
								(h = a),
								(p = n),
								yl(l.x, f.x, h.x, p),
								yl(l.y, f.y, h.y, p),
								d &&
									(function (e, t) {
										return Hs(e.x, t.x) && Hs(e.y, t.y);
									})(this.relativeTarget, d) &&
									(this.isProjectionDirty = !1),
								d || (d = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
								Os(d, this.relativeTarget)),
							s &&
								((this.animationValues = i),
								(function (e, t, n, r, i, o) {
									i
										? ((e.opacity = to(
												0,
												void 0 !== n.opacity ? n.opacity : 1,
												Rs(r)
										  )),
										  (e.opacityExit = to(
												void 0 !== t.opacity ? t.opacity : 1,
												0,
												js(r)
										  )))
										: o &&
										  (e.opacity = to(
												void 0 !== t.opacity ? t.opacity : 1,
												void 0 !== n.opacity ? n.opacity : 1,
												r
										  ));
									for (let a = 0; a < Ts; a++) {
										const i = "border".concat(Cs[a], "Radius");
										let o = As(t, i),
											s = As(n, i);
										(void 0 === o && void 0 === s) ||
											(o || (o = 0),
											s || (s = 0),
											0 === o || 0 === s || _s(o) === _s(s)
												? ((e[i] = Math.max(to(Fs(o), Fs(s), r), 0)),
												  (Qr.test(s) || Qr.test(o)) && (e[i] += "%"))
												: (e[i] = s));
									}
									(t.rotate || n.rotate) &&
										(e.rotate = to(t.rotate || 0, n.rotate || 0, r));
								})(i, r, this.latestValues, n, c, u)),
							this.root.scheduleUpdateProjection(),
							this.scheduleRender(),
							(this.animationProgress = n);
					}),
					this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
			}
			startAnimation(e) {
				this.notifyListeners("animationStart"),
					this.currentAnimation && this.currentAnimation.stop(),
					this.resumingFrom &&
						this.resumingFrom.currentAnimation &&
						this.resumingFrom.currentAnimation.stop(),
					this.pendingAnimation &&
						(nr(this.pendingAnimation), (this.pendingAnimation = void 0)),
					(this.pendingAnimation = tr.update(() => {
						(fs.hasAnimatedSinceResize = !0),
							(this.currentAnimation = (function (e, t, n) {
								const r = vr(e) ? e : pr(e);
								return r.start(Jo("", r, t, n)), r.animation;
							})(
								0,
								1e3,
								pe(
									pe({}, e),
									{},
									{
										onUpdate: (t) => {
											this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
										},
										onComplete: () => {
											e.onComplete && e.onComplete(), this.completeAnimation();
										},
									}
								)
							)),
							this.resumingFrom &&
								(this.resumingFrom.currentAnimation = this.currentAnimation),
							(this.pendingAnimation = void 0);
					}));
			}
			completeAnimation() {
				this.resumingFrom &&
					((this.resumingFrom.currentAnimation = void 0),
					(this.resumingFrom.preserveOpacity = void 0));
				const e = this.getStack();
				e && e.exitAnimationComplete(),
					(this.resumingFrom =
						this.currentAnimation =
						this.animationValues =
							void 0),
					this.notifyListeners("animationComplete");
			}
			finishAnimation() {
				this.currentAnimation &&
					(this.mixTargetDelta && this.mixTargetDelta(1e3),
					this.currentAnimation.stop()),
					this.completeAnimation();
			}
			applyTransformsToTarget() {
				const e = this.getLead();
				let {
					targetWithTransforms: t,
					target: n,
					layout: r,
					latestValues: i,
				} = e;
				if (t && n && r) {
					if (
						this !== e &&
						this.layout &&
						r &&
						El(this.options.animationType, this.layout.layoutBox, r.layoutBox)
					) {
						n = this.target || { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
						const t = _a(this.layout.layoutBox.x);
						(n.x.min = e.target.x.min), (n.x.max = n.x.min + t);
						const r = _a(this.layout.layoutBox.y);
						(n.y.min = e.target.y.min), (n.y.max = n.y.min + r);
					}
					Os(t, n),
						ns(t, i),
						Ra(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
				}
			}
			registerSharedNode(e, t) {
				this.sharedNodes.has(e) || this.sharedNodes.set(e, new Qs());
				this.sharedNodes.get(e).add(t);
				const n = t.options.initialPromotionConfig;
				t.promote({
					transition: n ? n.transition : void 0,
					preserveFollowOpacity:
						n && n.shouldPreserveFollowOpacity
							? n.shouldPreserveFollowOpacity(t)
							: void 0,
				});
			}
			isLead() {
				const e = this.getStack();
				return !e || e.lead === this;
			}
			getLead() {
				var e;
				const { layoutId: t } = this.options;
				return (
					(t &&
						(null === (e = this.getStack()) || void 0 === e
							? void 0
							: e.lead)) ||
					this
				);
			}
			getPrevLead() {
				var e;
				const { layoutId: t } = this.options;
				return t
					? null === (e = this.getStack()) || void 0 === e
						? void 0
						: e.prevLead
					: void 0;
			}
			getStack() {
				const { layoutId: e } = this.options;
				if (e) return this.root.sharedNodes.get(e);
			}
			promote() {
				let {
					needsReset: e,
					transition: t,
					preserveFollowOpacity: n,
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const r = this.getStack();
				r && r.promote(this, n),
					e && ((this.projectionDelta = void 0), (this.needsReset = !0)),
					t && this.setOptions({ transition: t });
			}
			relegate() {
				const e = this.getStack();
				return !!e && e.relegate(this);
			}
			resetSkewAndRotation() {
				const { visualElement: e } = this.options;
				if (!e) return;
				let t = !1;
				const { latestValues: n } = e;
				if (
					((n.z ||
						n.rotate ||
						n.rotateX ||
						n.rotateY ||
						n.rotateZ ||
						n.skewX ||
						n.skewY) &&
						(t = !0),
					!t)
				)
					return;
				const r = {};
				n.z && tl("z", e, r, this.animationValues);
				for (let i = 0; i < Js.length; i++)
					tl("rotate".concat(Js[i]), e, r, this.animationValues),
						tl("skew".concat(Js[i]), e, r, this.animationValues);
				e.render();
				for (const i in r)
					e.setStaticValue(i, r[i]),
						this.animationValues && (this.animationValues[i] = r[i]);
				e.scheduleRender();
			}
			getProjectionStyles(e) {
				var t, n;
				if (!this.instance || this.isSVG) return;
				if (!this.isVisible) return Zs;
				const r = { visibility: "" },
					i = this.getTransformTemplate();
				if (this.needsReset)
					return (
						(this.needsReset = !1),
						(r.opacity = ""),
						(r.pointerEvents =
							Ps(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""),
						(r.transform = i ? i(this.latestValues, "") : "none"),
						r
					);
				const o = this.getLead();
				if (!this.projectionDelta || !this.layout || !o.target) {
					const t = {};
					return (
						this.options.layoutId &&
							((t.opacity =
								void 0 !== this.latestValues.opacity
									? this.latestValues.opacity
									: 1),
							(t.pointerEvents =
								Ps(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
								"")),
						this.hasProjected &&
							!qa(this.latestValues) &&
							((t.transform = i ? i({}, "") : "none"),
							(this.hasProjected = !1)),
						t
					);
				}
				const a = o.animationValues || o.latestValues;
				this.applyTransformsToTarget(),
					(r.transform = (function (e, t, n) {
						let r = "";
						const i = e.x.translate / t.x,
							o = e.y.translate / t.y,
							a = (null === n || void 0 === n ? void 0 : n.z) || 0;
						if (
							((i || o || a) &&
								(r = "translate3d("
									.concat(i, "px, ")
									.concat(o, "px, ")
									.concat(a, "px) ")),
							(1 === t.x && 1 === t.y) ||
								(r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
							n)
						) {
							const {
								transformPerspective: e,
								rotate: t,
								rotateX: i,
								rotateY: o,
								skewX: a,
								skewY: s,
							} = n;
							e && (r = "perspective(".concat(e, "px) ").concat(r)),
								t && (r += "rotate(".concat(t, "deg) ")),
								i && (r += "rotateX(".concat(i, "deg) ")),
								o && (r += "rotateY(".concat(o, "deg) ")),
								a && (r += "skewX(".concat(a, "deg) ")),
								s && (r += "skewY(".concat(s, "deg) "));
						}
						const s = e.x.scale * t.x,
							l = e.y.scale * t.y;
						return (
							(1 === s && 1 === l) ||
								(r += "scale(".concat(s, ", ").concat(l, ")")),
							r || "none"
						);
					})(this.projectionDeltaWithTransform, this.treeScale, a)),
					i && (r.transform = i(a, r.transform));
				const { x: s, y: l } = this.projectionDelta;
				(r.transformOrigin = ""
					.concat(100 * s.origin, "% ")
					.concat(100 * l.origin, "% 0")),
					o.animationValues
						? (r.opacity =
								o === this
									? null !==
											(n =
												null !== (t = a.opacity) && void 0 !== t
													? t
													: this.latestValues.opacity) && void 0 !== n
										? n
										: 1
									: this.preserveOpacity
									? this.latestValues.opacity
									: a.opacityExit)
						: (r.opacity =
								o === this
									? void 0 !== a.opacity
										? a.opacity
										: ""
									: void 0 !== a.opacityExit
									? a.opacityExit
									: 0);
				for (const u in gs) {
					if (void 0 === a[u]) continue;
					const { correct: e, applyTo: t } = gs[u],
						n = "none" === r.transform ? a[u] : e(a[u], o);
					if (t) {
						const e = t.length;
						for (let i = 0; i < e; i++) r[t[i]] = n;
					} else r[u] = n;
				}
				return (
					this.options.layoutId &&
						(r.pointerEvents =
							o === this
								? Ps(null === e || void 0 === e ? void 0 : e.pointerEvents) ||
								  ""
								: "none"),
					r
				);
			}
			clearSnapshot() {
				this.resumeFrom = this.snapshot = void 0;
			}
			resetTree() {
				this.root.nodes.forEach((e) => {
					var t;
					return null === (t = e.currentAnimation) || void 0 === t
						? void 0
						: t.stop();
				}),
					this.root.nodes.forEach(ul),
					this.root.sharedNodes.clear();
			}
		};
	}
	function il(e) {
		e.updateLayout();
	}
	function ol(e) {
		var t;
		const n =
			(null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) ||
			e.snapshot;
		if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
			const { layoutBox: t, measuredBox: r } = e.layout,
				{ animationType: i } = e.options,
				o = n.source !== e.layout.source;
			"size" === i
				? Ua((e) => {
						const r = o ? n.measuredBox[e] : n.layoutBox[e],
							i = _a(r);
						(r.min = t[e].min), (r.max = r.min + i);
				  })
				: El(i, n.layoutBox, t) &&
				  Ua((r) => {
						const i = o ? n.measuredBox[r] : n.layoutBox[r],
							a = _a(t[r]);
						(i.max = i.min + a),
							e.relativeTarget &&
								!e.currentAnimation &&
								((e.isProjectionDirty = !0),
								(e.relativeTarget[r].max = e.relativeTarget[r].min + a));
				  });
			const a = {
				x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
				y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
			};
			Ra(a, t, n.layoutBox);
			const s = {
				x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
				y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
			};
			o ? Ra(s, e.applyTransform(r, !0), n.measuredBox) : Ra(s, t, n.layoutBox);
			const l = !Ws(a);
			let u = !1;
			if (!e.resumeFrom) {
				const r = e.getClosestProjectingParent();
				if (r && !r.resumeFrom) {
					const { snapshot: i, layout: o } = r;
					if (i && o) {
						const a = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
						La(a, n.layoutBox, i.layoutBox);
						const s = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
						La(s, t, o.layoutBox),
							$s(a, s) || (u = !0),
							r.options.layoutRoot &&
								((e.relativeTarget = s),
								(e.relativeTargetOrigin = a),
								(e.relativeParent = r));
					}
				}
			}
			e.notifyListeners("didUpdate", {
				layout: t,
				snapshot: n,
				delta: s,
				layoutDelta: a,
				hasLayoutChanged: l,
				hasRelativeTargetChanged: u,
			});
		} else if (e.isLead()) {
			const { onExitComplete: t } = e.options;
			t && t();
		}
		e.options.transition = void 0;
	}
	function al(e) {
		Gs && Ys.totalNodes++,
			e.parent &&
				(e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
				e.isSharedProjectionDirty ||
					(e.isSharedProjectionDirty = Boolean(
						e.isProjectionDirty ||
							e.parent.isProjectionDirty ||
							e.parent.isSharedProjectionDirty
					)),
				e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
	}
	function sl(e) {
		e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
	}
	function ll(e) {
		e.clearSnapshot();
	}
	function ul(e) {
		e.clearMeasurements();
	}
	function cl(e) {
		e.isLayoutDirty = !1;
	}
	function dl(e) {
		const { visualElement: t } = e.options;
		t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
			e.resetTransform();
	}
	function fl(e) {
		e.finishAnimation(),
			(e.targetDelta = e.relativeTarget = e.target = void 0),
			(e.isProjectionDirty = !0);
	}
	function hl(e) {
		e.resolveTargetDelta();
	}
	function pl(e) {
		e.calcProjection();
	}
	function ml(e) {
		e.resetSkewAndRotation();
	}
	function gl(e) {
		e.removeLeadSnapshot();
	}
	function vl(e, t, n) {
		(e.translate = to(t.translate, 0, n)),
			(e.scale = to(t.scale, 1, n)),
			(e.origin = t.origin),
			(e.originPoint = t.originPoint);
	}
	function yl(e, t, n, r) {
		(e.min = to(t.min, n.min, r)), (e.max = to(t.max, n.max, r));
	}
	function bl(e) {
		return e.animationValues && void 0 !== e.animationValues.opacityExit;
	}
	const wl = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
		xl = (e) =>
			"undefined" !== typeof navigator &&
			navigator.userAgent &&
			navigator.userAgent.toLowerCase().includes(e),
		Sl = xl("applewebkit/") && !xl("chrome/") ? Math.round : $n;
	function kl(e) {
		(e.min = Sl(e.min)), (e.max = Sl(e.max));
	}
	function El(e, t, n) {
		return (
			"position" === e ||
			("preserve-aspect" === e &&
				((r = Ks(t)), (i = Ks(n)), (o = 0.2), !(Math.abs(r - i) <= o)))
		);
		var r, i, o;
	}
	function Pl(e) {
		var t;
		return (
			e !== e.root &&
			(null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
		);
	}
	const Cl = rl({
			attachResizeListener: (e, t) => va(e, "resize", t),
			measureScroll: () => ({
				x: document.documentElement.scrollLeft || document.body.scrollLeft,
				y: document.documentElement.scrollTop || document.body.scrollTop,
			}),
			checkIsScrollRoot: () => !0,
		}),
		Tl = { current: void 0 },
		Fl = rl({
			measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
			defaultParent: () => {
				if (!Tl.current) {
					const e = new Cl({});
					e.mount(window), e.setOptions({ layoutScroll: !0 }), (Tl.current = e);
				}
				return Tl.current;
			},
			resetTransform: (e, t) => {
				e.style.transform = void 0 !== t ? t : "none";
			},
			checkIsScrollRoot: (e) =>
				Boolean("fixed" === window.getComputedStyle(e).position),
		}),
		_l = {
			pan: {
				Feature: class extends pa {
					constructor() {
						super(...arguments), (this.removePointerDownListener = $n);
					}
					onPointerDown(e) {
						this.session = new xa(e, this.createPanHandlers(), {
							transformPagePoint: this.node.getTransformPagePoint(),
							contextWindow: is(this.node),
						});
					}
					createPanHandlers() {
						const {
							onPanSessionStart: e,
							onPanStart: t,
							onPan: n,
							onPanEnd: r,
						} = this.node.getProps();
						return {
							onSessionStart: ls(e),
							onStart: ls(t),
							onMove: n,
							onEnd: (e, t) => {
								delete this.session, r && tr.postRender(() => r(e, t));
							},
						};
					}
					mount() {
						this.removePointerDownListener = ba(
							this.node.current,
							"pointerdown",
							(e) => this.onPointerDown(e)
						);
					}
					update() {
						this.session &&
							this.session.updateHandlers(this.createPanHandlers());
					}
					unmount() {
						this.removePointerDownListener(),
							this.session && this.session.end();
					}
				},
			},
			drag: {
				Feature: class extends pa {
					constructor(e) {
						super(e),
							(this.removeGroupControls = $n),
							(this.removeListeners = $n),
							(this.controls = new as(e));
					}
					mount() {
						const { dragControls: e } = this.node.getProps();
						e && (this.removeGroupControls = e.subscribe(this.controls)),
							(this.removeListeners = this.controls.addListeners() || $n);
					}
					unmount() {
						this.removeGroupControls(), this.removeListeners();
					}
				},
				ProjectionNode: Fl,
				MeasureLayout: ws,
			},
		};
	function Al(e, t, n) {
		const { props: r } = e;
		e.animationState &&
			r.whileHover &&
			e.animationState.setActive("whileHover", "Start" === n);
		const i = r["onHover" + n];
		i && tr.postRender(() => i(t, ya(t)));
	}
	function Rl(e, t, n) {
		const { props: r } = e;
		e.animationState &&
			r.whileTap &&
			e.animationState.setActive("whileTap", "Start" === n);
		const i = r["onTap" + ("End" === n ? "" : n)];
		i && tr.postRender(() => i(t, ya(t)));
	}
	const jl = ["root"],
		Dl = new WeakMap(),
		Ll = new WeakMap(),
		Ol = (e) => {
			const t = Dl.get(e.target);
			t && t(e);
		},
		Ml = (e) => {
			e.forEach(Ol);
		};
	function Nl(e, t, n) {
		const r = (function (e) {
			let { root: t } = e,
				n = rn(e, jl);
			const r = t || document;
			Ll.has(r) || Ll.set(r, {});
			const i = Ll.get(r),
				o = JSON.stringify(n);
			return (
				i[o] || (i[o] = new IntersectionObserver(Ml, pe({ root: t }, n))), i[o]
			);
		})(t);
		return (
			Dl.set(e, n),
			r.observe(e),
			() => {
				Dl.delete(e), r.unobserve(e);
			}
		);
	}
	const Vl = { some: 0, all: 1 };
	const zl = {
			inView: {
				Feature: class extends pa {
					constructor() {
						super(...arguments),
							(this.hasEnteredView = !1),
							(this.isInView = !1);
					}
					startObserver() {
						this.unmount();
						const { viewport: e = {} } = this.node.getProps(),
							{ root: t, margin: n, amount: r = "some", once: i } = e,
							o = {
								root: t ? t.current : void 0,
								rootMargin: n,
								threshold: "number" === typeof r ? r : Vl[r],
							};
						return Nl(this.node.current, o, (e) => {
							const { isIntersecting: t } = e;
							if (this.isInView === t) return;
							if (((this.isInView = t), i && !t && this.hasEnteredView)) return;
							t && (this.hasEnteredView = !0),
								this.node.animationState &&
									this.node.animationState.setActive("whileInView", t);
							const { onViewportEnter: n, onViewportLeave: r } =
									this.node.getProps(),
								o = t ? n : r;
							o && o(e);
						});
					}
					mount() {
						this.startObserver();
					}
					update() {
						if ("undefined" === typeof IntersectionObserver) return;
						const { props: e, prevProps: t } = this.node,
							n = ["amount", "margin", "root"].some(
								(function (e) {
									let { viewport: t = {} } = e,
										{ viewport: n = {} } =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {};
									return (e) => t[e] !== n[e];
								})(e, t)
							);
						n && this.startObserver();
					}
					unmount() {}
				},
			},
			tap: {
				Feature: class extends pa {
					mount() {
						const { current: e } = this.node;
						e &&
							(this.unmount = Wn(
								e,
								(e) => (
									Rl(this.node, e, "Start"),
									(e, t) => {
										let { success: n } = t;
										return Rl(this.node, e, n ? "End" : "Cancel");
									}
								),
								{ useGlobalTarget: this.node.props.globalTapTarget }
							));
					}
					unmount() {}
				},
			},
			focus: {
				Feature: class extends pa {
					constructor() {
						super(...arguments), (this.isActive = !1);
					}
					onFocus() {
						let e = !1;
						try {
							e = this.node.current.matches(":focus-visible");
						} catch (t) {
							e = !0;
						}
						e &&
							this.node.animationState &&
							(this.node.animationState.setActive("whileFocus", !0),
							(this.isActive = !0));
					}
					onBlur() {
						this.isActive &&
							this.node.animationState &&
							(this.node.animationState.setActive("whileFocus", !1),
							(this.isActive = !1));
					}
					mount() {
						this.unmount = uo(
							va(this.node.current, "focus", () => this.onFocus()),
							va(this.node.current, "blur", () => this.onBlur())
						);
					}
					unmount() {}
				},
			},
			hover: {
				Feature: class extends pa {
					mount() {
						const { current: e } = this.node;
						e &&
							(this.unmount = (function (e, t) {
								let n =
									arguments.length > 2 && void 0 !== arguments[2]
										? arguments[2]
										: {};
								const [r, i, o] = Ln(e, n),
									a = On((e) => {
										const { target: n } = e,
											r = t(e);
										if ("function" !== typeof r || !n) return;
										const o = On((e) => {
											r(e), n.removeEventListener("pointerleave", o);
										});
										n.addEventListener("pointerleave", o, i);
									});
								return (
									r.forEach((e) => {
										e.addEventListener("pointerenter", a, i);
									}),
									o
								);
							})(
								e,
								(e) => (
									Al(this.node, e, "Start"), (e) => Al(this.node, e, "End")
								)
							));
					}
					unmount() {}
				},
			},
		},
		Bl = { layout: { ProjectionNode: Fl, MeasureLayout: ws } },
		Ul = (0, i.createContext)({ strict: !1 }),
		Il = (0, i.createContext)({
			transformPagePoint: (e) => e,
			isStatic: !1,
			reducedMotion: "never",
		}),
		Wl = (0, i.createContext)({});
	function Hl(e) {
		return nn(e.animate) || fn.some((t) => sn(e[t]));
	}
	function ql(e) {
		return Boolean(Hl(e) || e.variants);
	}
	function $l(e) {
		const { initial: t, animate: n } = (function (e, t) {
			if (Hl(e)) {
				const { initial: t, animate: n } = e;
				return {
					initial: !1 === t || sn(t) ? t : void 0,
					animate: sn(n) ? n : void 0,
				};
			}
			return !1 !== e.inherit ? t : {};
		})(e, (0, i.useContext)(Wl));
		return (0, i.useMemo)(() => ({ initial: t, animate: n }), [Kl(t), Kl(n)]);
	}
	function Kl(e) {
		return Array.isArray(e) ? e.join(" ") : e;
	}
	const Xl = "undefined" !== typeof window,
		Ql = {
			animation: [
				"animate",
				"variants",
				"whileHover",
				"whileTap",
				"exit",
				"whileInView",
				"whileFocus",
				"whileDrag",
			],
			exit: ["exit"],
			drag: ["drag", "dragControls"],
			focus: ["whileFocus"],
			hover: ["whileHover", "onHoverStart", "onHoverEnd"],
			tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
			pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
			inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
			layout: ["layout", "layoutId"],
		},
		Yl = {};
	for (const wd in Ql)
		Yl[wd] = { isEnabled: (e) => Ql[wd].some((t) => !!e[t]) };
	const Gl = Symbol.for("motionComponentSymbol");
	function Jl(e, t, n) {
		return (0, i.useCallback)(
			(r) => {
				r && e.onMount && e.onMount(r),
					t && (r ? t.mount(r) : t.unmount()),
					n && ("function" === typeof n ? n(r) : Fa(n) && (n.current = r));
			},
			[t]
		);
	}
	const Zl = Xl ? i.useLayoutEffect : i.useEffect;
	function eu(e, t, n, r, o) {
		var a, s;
		const { visualElement: l } = (0, i.useContext)(Wl),
			u = (0, i.useContext)(Ul),
			c = (0, i.useContext)(us),
			d = (0, i.useContext)(Il).reducedMotion,
			f = (0, i.useRef)(null);
		(r = r || u.renderer),
			!f.current &&
				r &&
				(f.current = r(e, {
					visualState: t,
					parent: l,
					props: n,
					presenceContext: c,
					blockInitialAnimation: !!c && !1 === c.initial,
					reducedMotionConfig: d,
				}));
		const h = f.current,
			p = (0, i.useContext)(ds);
		!h ||
			h.projection ||
			!o ||
			("html" !== h.type && "svg" !== h.type) ||
			(function (e, t, n, r) {
				const {
					layoutId: i,
					layout: o,
					drag: a,
					dragConstraints: s,
					layoutScroll: l,
					layoutRoot: u,
				} = t;
				(e.projection = new n(
					e.latestValues,
					t["data-framer-portal-id"] ? void 0 : tu(e.parent)
				)),
					e.projection.setOptions({
						layoutId: i,
						layout: o,
						alwaysMeasureLayout: Boolean(a) || (s && Fa(s)),
						visualElement: e,
						animationType: "string" === typeof o ? o : "both",
						initialPromotionConfig: r,
						layoutScroll: l,
						layoutRoot: u,
					});
			})(f.current, n, o, p);
		const m = (0, i.useRef)(!1);
		(0, i.useInsertionEffect)(() => {
			h && m.current && h.update(n, c);
		});
		const g = n[wr],
			v = (0, i.useRef)(
				Boolean(g) &&
					!(null === (a = window.MotionHandoffIsComplete) || void 0 === a
						? void 0
						: a.call(window, g)) &&
					(null === (s = window.MotionHasOptimisedAnimation) || void 0 === s
						? void 0
						: s.call(window, g))
			);
		return (
			Zl(() => {
				h &&
					((m.current = !0),
					(window.MotionIsMounted = !0),
					h.updateFeatures(),
					vs.render(h.render),
					v.current && h.animationState && h.animationState.animateChanges());
			}),
			(0, i.useEffect)(() => {
				h &&
					(!v.current && h.animationState && h.animationState.animateChanges(),
					v.current &&
						(queueMicrotask(() => {
							var e;
							null === (e = window.MotionHandoffMarkAsComplete) ||
								void 0 === e ||
								e.call(window, g);
						}),
						(v.current = !1)));
			}),
			h
		);
	}
	function tu(e) {
		if (e)
			return !1 !== e.options.allowProjection ? e.projection : tu(e.parent);
	}
	function nu(e) {
		let {
			preloadedFeatures: t,
			createVisualElement: n,
			useRender: r,
			useVisualState: o,
			Component: a,
		} = e;
		var s, l;
		function u(e, t) {
			let s;
			const l = pe(
					pe(pe({}, (0, i.useContext)(Il)), e),
					{},
					{ layoutId: ru(e) }
				),
				{ isStatic: u } = l,
				c = $l(e),
				d = o(e, u);
			if (!u && Xl) {
				!(function () {
					(0, i.useContext)(Ul).strict;
					0;
				})();
				const e = (function (e) {
					const { drag: t, layout: n } = Yl;
					if (!t && !n) return {};
					const r = pe(pe({}, t), n);
					return {
						MeasureLayout:
							(null === t || void 0 === t ? void 0 : t.isEnabled(e)) ||
							(null === n || void 0 === n ? void 0 : n.isEnabled(e))
								? r.MeasureLayout
								: void 0,
						ProjectionNode: r.ProjectionNode,
					};
				})(l);
				(s = e.MeasureLayout),
					(c.visualElement = eu(a, d, l, n, e.ProjectionNode));
			}
			return (0, Mt.jsxs)(Wl.Provider, {
				value: c,
				children: [
					s && c.visualElement
						? (0, Mt.jsx)(s, pe({ visualElement: c.visualElement }, l))
						: null,
					r(a, e, Jl(d, c.visualElement, t), d, u, c.visualElement),
				],
			});
		}
		t &&
			(function (e) {
				for (const t in e) Yl[t] = pe(pe({}, Yl[t]), e[t]);
			})(t),
			(u.displayName = "motion.".concat(
				"string" === typeof a
					? a
					: "create(".concat(
							null !==
								(l =
									null !== (s = a.displayName) && void 0 !== s ? s : a.name) &&
								void 0 !== l
								? l
								: "",
							")"
					  )
			));
		const c = (0, i.forwardRef)(u);
		return (c[Gl] = a), c;
	}
	function ru(e) {
		let { layoutId: t } = e;
		const n = (0, i.useContext)(cs).id;
		return n && void 0 !== t ? n + "-" + t : t;
	}
	const iu = [
		"animate",
		"circle",
		"defs",
		"desc",
		"ellipse",
		"g",
		"image",
		"line",
		"filter",
		"marker",
		"mask",
		"metadata",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"rect",
		"stop",
		"switch",
		"symbol",
		"svg",
		"text",
		"tspan",
		"use",
		"view",
	];
	function ou(e) {
		return (
			"string" === typeof e &&
			!e.includes("-") &&
			!!(iu.indexOf(e) > -1 || /[A-Z]/.test(e))
		);
	}
	const au = ["transitionEnd", "transition"];
	const su = (e) => (t, n) => {
		const r = (0, i.useContext)(Wl),
			o = (0, i.useContext)(us),
			a = () =>
				(function (e, t, n, r) {
					let {
						scrapeMotionValuesFromProps: i,
						createRenderState: o,
						onUpdate: a,
					} = e;
					const s = { latestValues: lu(t, n, r, i), renderState: o() };
					return (
						a &&
							((s.onMount = (e) => a(pe({ props: t, current: e }, s))),
							(s.onUpdate = (e) => a(e))),
						s
					);
				})(e, t, r, o);
		return n
			? a()
			: (function (e) {
					const t = (0, i.useRef)(null);
					return null === t.current && (t.current = e()), t.current;
			  })(a);
	};
	function lu(e, t, n, r) {
		const i = {},
			o = r(e, {});
		for (const f in o) i[f] = Ps(o[f]);
		let { initial: a, animate: s } = e;
		const l = Hl(e),
			u = ql(e);
		t &&
			u &&
			!l &&
			!1 !== e.inherit &&
			(void 0 === a && (a = t.initial), void 0 === s && (s = t.animate));
		let c = !!n && !1 === n.initial;
		c = c || !1 === a;
		const d = c ? s : a;
		if (d && "boolean" !== typeof d && !nn(d)) {
			const t = Array.isArray(d) ? d : [d];
			for (let n = 0; n < t.length; n++) {
				const r = un(e, t[n]);
				if (r) {
					const { transitionEnd: e, transition: t } = r,
						n = rn(r, au);
					for (const r in n) {
						let e = n[r];
						if (Array.isArray(e)) {
							e = e[c ? e.length - 1 : 0];
						}
						null !== e && (i[r] = e);
					}
					for (const r in e) i[r] = e[r];
				}
			}
		}
		return i;
	}
	const uu = (e, t) => (t && "number" === typeof e ? t.transform(e) : e),
		cu = {
			x: "translateX",
			y: "translateY",
			z: "translateZ",
			transformPerspective: "perspective",
		},
		du = Kn.length;
	function fu(e, t, n) {
		const { style: r, vars: i, transformOrigin: o } = e;
		let a = !1,
			s = !1;
		for (const l in t) {
			const e = t[l];
			if (Xn.has(l)) a = !0;
			else if (zi(l)) i[l] = e;
			else {
				const t = uu(e, yi[l]);
				l.startsWith("origin") ? ((s = !0), (o[l] = t)) : (r[l] = t);
			}
		}
		if (
			(t.transform ||
				(a || n
					? (r.transform = (function (e, t, n) {
							let r = "",
								i = !0;
							for (let o = 0; o < du; o++) {
								const a = Kn[o],
									s = e[a];
								if (void 0 === s) continue;
								let l = !0;
								if (
									((l =
										"number" === typeof s
											? s === (a.startsWith("scale") ? 1 : 0)
											: 0 === parseFloat(s)),
									!l || n)
								) {
									const e = uu(s, yi[a]);
									l ||
										((i = !1),
										(r += "".concat(cu[a] || a, "(").concat(e, ") "))),
										n && (t[a] = e);
								}
							}
							return (
								(r = r.trim()),
								n ? (r = n(t, i ? "" : r)) : i && (r = "none"),
								r
							);
					  })(t, e.transform, n))
					: r.transform && (r.transform = "none")),
			s)
		) {
			const { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = o;
			r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n);
		}
	}
	const hu = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
		pu = { offset: "strokeDashoffset", array: "strokeDasharray" };
	function mu(e, t, n) {
		return "string" === typeof e ? e : Yr.transform(t + n * e);
	}
	const gu = [
		"attrX",
		"attrY",
		"attrScale",
		"originX",
		"originY",
		"pathLength",
		"pathSpacing",
		"pathOffset",
	];
	function vu(e, t, n, r) {
		let {
			attrX: i,
			attrY: o,
			attrScale: a,
			originX: s,
			originY: l,
			pathLength: u,
			pathSpacing: c = 1,
			pathOffset: d = 0,
		} = t;
		if ((fu(e, rn(t, gu), r), n))
			return void (e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
		(e.attrs = e.style), (e.style = {});
		const { attrs: f, style: h, dimensions: p } = e;
		f.transform && (p && (h.transform = f.transform), delete f.transform),
			p &&
				(void 0 !== s || void 0 !== l || h.transform) &&
				(h.transformOrigin = (function (e, t, n) {
					const r = mu(t, e.x, e.width),
						i = mu(n, e.y, e.height);
					return "".concat(r, " ").concat(i);
				})(p, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
			void 0 !== i && (f.x = i),
			void 0 !== o && (f.y = o),
			void 0 !== a && (f.scale = a),
			void 0 !== u &&
				(function (e, t) {
					let n =
							arguments.length > 2 && void 0 !== arguments[2]
								? arguments[2]
								: 1,
						r =
							arguments.length > 3 && void 0 !== arguments[3]
								? arguments[3]
								: 0,
						i =
							!(arguments.length > 4 && void 0 !== arguments[4]) ||
							arguments[4];
					e.pathLength = 1;
					const o = i ? hu : pu;
					e[o.offset] = Yr.transform(-r);
					const a = Yr.transform(t),
						s = Yr.transform(n);
					e[o.array] = "".concat(a, " ").concat(s);
				})(f, u, c, d, !1);
	}
	const yu = () => ({
			style: {},
			transform: {},
			transformOrigin: {},
			vars: {},
		}),
		bu = () =>
			pe(
				pe({}, { style: {}, transform: {}, transformOrigin: {}, vars: {} }),
				{},
				{ attrs: {} }
			),
		wu = (e) => "string" === typeof e && "svg" === e.toLowerCase();
	function xu(e, t, n, r) {
		let { style: i, vars: o } = t;
		Object.assign(e.style, i, r && r.getProjectionStyles(n));
		for (const a in o) e.style.setProperty(a, o[a]);
	}
	const Su = new Set([
		"baseFrequency",
		"diffuseConstant",
		"kernelMatrix",
		"kernelUnitLength",
		"keySplines",
		"keyTimes",
		"limitingConeAngle",
		"markerHeight",
		"markerWidth",
		"numOctaves",
		"targetX",
		"targetY",
		"surfaceScale",
		"specularConstant",
		"specularExponent",
		"stdDeviation",
		"tableValues",
		"viewBox",
		"gradientTransform",
		"pathLength",
		"startOffset",
		"textLength",
		"lengthAdjust",
	]);
	function ku(e, t, n, r) {
		xu(e, t, void 0, r);
		for (const i in t.attrs) e.setAttribute(Su.has(i) ? i : br(i), t.attrs[i]);
	}
	function Eu(e, t) {
		let { layout: n, layoutId: r } = t;
		return (
			Xn.has(e) ||
			e.startsWith("origin") ||
			((n || void 0 !== r) && (!!gs[e] || "opacity" === e))
		);
	}
	function Pu(e, t, n) {
		var r;
		const { style: i } = e,
			o = {};
		for (const a in i)
			(vr(i[a]) ||
				(t.style && vr(t.style[a])) ||
				Eu(a, e) ||
				void 0 !==
					(null === (r = null === n || void 0 === n ? void 0 : n.getValue(a)) ||
					void 0 === r
						? void 0
						: r.liveStyle)) &&
				(o[a] = i[a]);
		return o;
	}
	function Cu(e, t, n) {
		const r = Pu(e, t, n);
		for (const i in e)
			if (vr(e[i]) || vr(t[i])) {
				r[
					-1 !== Kn.indexOf(i)
						? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
						: i
				] = e[i];
			}
		return r;
	}
	const Tu = ["x", "y", "width", "height", "cx", "cy", "r"],
		Fu = {
			useVisualState: su({
				scrapeMotionValuesFromProps: Cu,
				createRenderState: bu,
				onUpdate: (e) => {
					let {
						props: t,
						prevProps: n,
						current: r,
						renderState: i,
						latestValues: o,
					} = e;
					if (!r) return;
					let a = !!t.drag;
					if (!a)
						for (const l in o)
							if (Xn.has(l)) {
								a = !0;
								break;
							}
					if (!a) return;
					let s = !n;
					if (n)
						for (let l = 0; l < Tu.length; l++) {
							const e = Tu[l];
							t[e] !== n[e] && (s = !0);
						}
					s &&
						tr.read(() => {
							!(function (e, t) {
								try {
									t.dimensions =
										"function" === typeof e.getBBox
											? e.getBBox()
											: e.getBoundingClientRect();
								} catch (n) {
									t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
								}
							})(r, i),
								tr.render(() => {
									vu(i, o, wu(r.tagName), t.transformTemplate), ku(r, i);
								});
						});
				},
			}),
		},
		_u = {
			useVisualState: su({
				scrapeMotionValuesFromProps: Pu,
				createRenderState: yu,
			}),
		};
	function Au(e, t, n) {
		for (const r in t) vr(t[r]) || Eu(r, n) || (e[r] = t[r]);
	}
	function Ru(e, t) {
		const n = {};
		return (
			Au(n, e.style || {}, e),
			Object.assign(
				n,
				(function (e, t) {
					let { transformTemplate: n } = e;
					return (0, i.useMemo)(() => {
						const e = {
							style: {},
							transform: {},
							transformOrigin: {},
							vars: {},
						};
						return fu(e, t, n), Object.assign({}, e.vars, e.style);
					}, [t]);
				})(e, t)
			),
			n
		);
	}
	function ju(e, t) {
		const n = {},
			r = Ru(e, t);
		return (
			e.drag &&
				!1 !== e.dragListener &&
				((n.draggable = !1),
				(r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
				(r.touchAction =
					!0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x"))),
			void 0 === e.tabIndex &&
				(e.onTap || e.onTapStart || e.whileTap) &&
				(n.tabIndex = 0),
			(n.style = r),
			n
		);
	}
	const Du = new Set([
		"animate",
		"exit",
		"variants",
		"initial",
		"style",
		"values",
		"variants",
		"transition",
		"transformTemplate",
		"custom",
		"inherit",
		"onBeforeLayoutMeasure",
		"onAnimationStart",
		"onAnimationComplete",
		"onUpdate",
		"onDragStart",
		"onDrag",
		"onDragEnd",
		"onMeasureDragConstraints",
		"onDirectionLock",
		"onDragTransitionEnd",
		"_dragX",
		"_dragY",
		"onHoverStart",
		"onHoverEnd",
		"onViewportEnter",
		"onViewportLeave",
		"globalTapTarget",
		"ignoreStrict",
		"viewport",
	]);
	function Lu(e) {
		return (
			e.startsWith("while") ||
			(e.startsWith("drag") && "draggable" !== e) ||
			e.startsWith("layout") ||
			e.startsWith("onTap") ||
			e.startsWith("onPan") ||
			e.startsWith("onLayout") ||
			Du.has(e)
		);
	}
	let Ou = (e) => !Lu(e);
	try {
		(Mu = require("@emotion/is-prop-valid").default) &&
			(Ou = (e) => (e.startsWith("on") ? !Lu(e) : Mu(e)));
	} catch (bd) {}
	var Mu;
	function Nu(e, t, n, r) {
		const o = (0, i.useMemo)(() => {
			const n = bu();
			return (
				vu(n, t, wu(r), e.transformTemplate),
				pe(pe({}, n.attrs), {}, { style: pe({}, n.style) })
			);
		}, [t]);
		if (e.style) {
			const t = {};
			Au(t, e.style, e), (o.style = pe(pe({}, t), o.style));
		}
		return o;
	}
	function Vu() {
		let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
		return (t, n, r, o, a) => {
			let { latestValues: s } = o;
			const l = (ou(t) ? Nu : ju)(n, s, a, t),
				u = (function (e, t, n) {
					const r = {};
					for (const i in e)
						("values" === i && "object" === typeof e.values) ||
							((Ou(i) ||
								(!0 === n && Lu(i)) ||
								(!t && !Lu(i)) ||
								(e.draggable && i.startsWith("onDrag"))) &&
								(r[i] = e[i]));
					return r;
				})(n, "string" === typeof t, e),
				c = t !== i.Fragment ? pe(pe(pe({}, u), l), {}, { ref: r }) : {},
				{ children: d } = n,
				f = (0, i.useMemo)(() => (vr(d) ? d.get() : d), [d]);
			return (0, i.createElement)(t, pe(pe({}, c), {}, { children: f }));
		};
	}
	function zu(e, t) {
		return function (n) {
			let { forwardMotionProps: r } =
				arguments.length > 1 && void 0 !== arguments[1]
					? arguments[1]
					: { forwardMotionProps: !1 };
			return nu(
				pe(
					pe({}, ou(n) ? Fu : _u),
					{},
					{
						preloadedFeatures: e,
						useRender: Vu(r),
						createVisualElement: t,
						Component: n,
					}
				)
			);
		};
	}
	const Bu = { current: null },
		Uu = { current: !1 };
	const Iu = [...$i, ti, ci],
		Wu = new WeakMap();
	const Hu = ["willChange"],
		qu = [
			"AnimationStart",
			"AnimationComplete",
			"Update",
			"BeforeLayoutMeasure",
			"LayoutMeasure",
			"LayoutAnimationStart",
			"LayoutAnimationComplete",
		];
	class $u {
		scrapeMotionValuesFromProps(e, t, n) {
			return {};
		}
		constructor(e) {
			let {
					parent: t,
					props: n,
					presenceContext: r,
					reducedMotionConfig: i,
					blockInitialAnimation: o,
					visualState: a,
				} = e,
				s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
			(this.current = null),
				(this.children = new Set()),
				(this.isVariantNode = !1),
				(this.isControllingVariants = !1),
				(this.shouldReduceMotion = null),
				(this.values = new Map()),
				(this.KeyframeResolver = Li),
				(this.features = {}),
				(this.valueSubscriptions = new Map()),
				(this.prevMotionValues = {}),
				(this.events = {}),
				(this.propEventSubscriptions = {}),
				(this.notifyUpdate = () => this.notify("Update", this.latestValues)),
				(this.render = () => {
					this.current &&
						(this.triggerBuild(),
						this.renderInstance(
							this.current,
							this.renderState,
							this.props.style,
							this.projection
						));
				}),
				(this.renderScheduledAt = 0),
				(this.scheduleRender = () => {
					const e = sr.now();
					this.renderScheduledAt < e &&
						((this.renderScheduledAt = e), tr.render(this.render, !1, !0));
				});
			const { latestValues: l, renderState: u, onUpdate: c } = a;
			(this.onUpdate = c),
				(this.latestValues = l),
				(this.baseTarget = pe({}, l)),
				(this.initialValues = n.initial ? pe({}, l) : {}),
				(this.renderState = u),
				(this.parent = t),
				(this.props = n),
				(this.presenceContext = r),
				(this.depth = t ? t.depth + 1 : 0),
				(this.reducedMotionConfig = i),
				(this.options = s),
				(this.blockInitialAnimation = Boolean(o)),
				(this.isControllingVariants = Hl(n)),
				(this.isVariantNode = ql(n)),
				this.isVariantNode && (this.variantChildren = new Set()),
				(this.manuallyAnimateOnMount = Boolean(t && t.current));
			const d = this.scrapeMotionValuesFromProps(n, {}, this),
				{ willChange: f } = d,
				h = rn(d, Hu);
			for (const p in h) {
				const e = h[p];
				void 0 !== l[p] && vr(e) && e.set(l[p], !1);
			}
		}
		mount(e) {
			(this.current = e),
				Wu.set(e, this),
				this.projection &&
					!this.projection.instance &&
					this.projection.mount(e),
				this.parent &&
					this.isVariantNode &&
					!this.isControllingVariants &&
					(this.removeFromVariantTree = this.parent.addVariantChild(this)),
				this.values.forEach((e, t) => this.bindToMotionValue(t, e)),
				Uu.current ||
					(function () {
						if (((Uu.current = !0), Xl))
							if (window.matchMedia) {
								const e = window.matchMedia("(prefers-reduced-motion)"),
									t = () => (Bu.current = e.matches);
								e.addListener(t), t();
							} else Bu.current = !1;
					})(),
				(this.shouldReduceMotion =
					"never" !== this.reducedMotionConfig &&
					("always" === this.reducedMotionConfig || Bu.current)),
				this.parent && this.parent.children.add(this),
				this.update(this.props, this.presenceContext);
		}
		unmount() {
			Wu.delete(this.current),
				this.projection && this.projection.unmount(),
				nr(this.notifyUpdate),
				nr(this.render),
				this.valueSubscriptions.forEach((e) => e()),
				this.valueSubscriptions.clear(),
				this.removeFromVariantTree && this.removeFromVariantTree(),
				this.parent && this.parent.children.delete(this);
			for (const e in this.events) this.events[e].clear();
			for (const e in this.features) {
				const t = this.features[e];
				t && (t.unmount(), (t.isMounted = !1));
			}
			this.current = null;
		}
		bindToMotionValue(e, t) {
			this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
			const n = Xn.has(e),
				r = t.on("change", (t) => {
					(this.latestValues[e] = t),
						this.props.onUpdate && tr.preRender(this.notifyUpdate),
						n && this.projection && (this.projection.isTransformDirty = !0);
				}),
				i = t.on("renderRequest", this.scheduleRender);
			let o;
			window.MotionCheckAppearSync &&
				(o = window.MotionCheckAppearSync(this, e, t)),
				this.valueSubscriptions.set(e, () => {
					r(), i(), o && o(), t.owner && t.stop();
				});
		}
		sortNodePosition(e) {
			return this.current &&
				this.sortInstanceNodePosition &&
				this.type === e.type
				? this.sortInstanceNodePosition(this.current, e.current)
				: 0;
		}
		updateFeatures() {
			let e = "animation";
			for (e in Yl) {
				const t = Yl[e];
				if (!t) continue;
				const { isEnabled: n, Feature: r } = t;
				if (
					(!this.features[e] &&
						r &&
						n(this.props) &&
						(this.features[e] = new r(this)),
					this.features[e])
				) {
					const t = this.features[e];
					t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
				}
			}
		}
		triggerBuild() {
			this.build(this.renderState, this.latestValues, this.props);
		}
		measureViewportBox() {
			return this.current
				? this.measureInstanceViewportBox(this.current, this.props)
				: { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
		}
		getStaticValue(e) {
			return this.latestValues[e];
		}
		setStaticValue(e, t) {
			this.latestValues[e] = t;
		}
		update(e, t) {
			(e.transformTemplate || this.props.transformTemplate) &&
				this.scheduleRender(),
				(this.prevProps = this.props),
				(this.props = e),
				(this.prevPresenceContext = this.presenceContext),
				(this.presenceContext = t);
			for (let n = 0; n < qu.length; n++) {
				const t = qu[n];
				this.propEventSubscriptions[t] &&
					(this.propEventSubscriptions[t](),
					delete this.propEventSubscriptions[t]);
				const r = e["on" + t];
				r && (this.propEventSubscriptions[t] = this.on(t, r));
			}
			(this.prevMotionValues = (function (e, t, n) {
				for (const r in t) {
					const i = t[r],
						o = n[r];
					if (vr(i)) e.addValue(r, i);
					else if (vr(o)) e.addValue(r, pr(i, { owner: e }));
					else if (o !== i)
						if (e.hasValue(r)) {
							const t = e.getValue(r);
							!0 === t.liveStyle ? t.jump(i) : t.hasAnimated || t.set(i);
						} else {
							const t = e.getStaticValue(r);
							e.addValue(r, pr(void 0 !== t ? t : i, { owner: e }));
						}
				}
				for (const r in n) void 0 === t[r] && e.removeValue(r);
				return t;
			})(
				this,
				this.scrapeMotionValuesFromProps(e, this.prevProps, this),
				this.prevMotionValues
			)),
				this.handleChildMotionValue && this.handleChildMotionValue(),
				this.onUpdate && this.onUpdate(this);
		}
		getProps() {
			return this.props;
		}
		getVariant(e) {
			return this.props.variants ? this.props.variants[e] : void 0;
		}
		getDefaultTransition() {
			return this.props.transition;
		}
		getTransformPagePoint() {
			return this.props.transformPagePoint;
		}
		getClosestVariantNode() {
			return this.isVariantNode
				? this
				: this.parent
				? this.parent.getClosestVariantNode()
				: void 0;
		}
		addVariantChild(e) {
			const t = this.getClosestVariantNode();
			if (t)
				return (
					t.variantChildren && t.variantChildren.add(e),
					() => t.variantChildren.delete(e)
				);
		}
		addValue(e, t) {
			const n = this.values.get(e);
			t !== n &&
				(n && this.removeValue(e),
				this.bindToMotionValue(e, t),
				this.values.set(e, t),
				(this.latestValues[e] = t.get()));
		}
		removeValue(e) {
			this.values.delete(e);
			const t = this.valueSubscriptions.get(e);
			t && (t(), this.valueSubscriptions.delete(e)),
				delete this.latestValues[e],
				this.removeValueFromRenderState(e, this.renderState);
		}
		hasValue(e) {
			return this.values.has(e);
		}
		getValue(e, t) {
			if (this.props.values && this.props.values[e])
				return this.props.values[e];
			let n = this.values.get(e);
			return (
				void 0 === n &&
					void 0 !== t &&
					((n = pr(null === t ? void 0 : t, { owner: this })),
					this.addValue(e, n)),
				n
			);
		}
		readValue(e, t) {
			var n;
			let r =
				void 0 === this.latestValues[e] && this.current
					? null !== (n = this.getBaseTargetFromProps(this.props, e)) &&
					  void 0 !== n
						? n
						: this.readValueFromInstance(this.current, e, this.options)
					: this.latestValues[e];
			return (
				void 0 !== r &&
					null !== r &&
					("string" === typeof r && (Ni(r) || Lr(r))
						? (r = parseFloat(r))
						: !((e) => Iu.find(qi(e)))(r) && ci.test(t) && (r = xi(e, t)),
					this.setBaseTarget(e, vr(r) ? r.get() : r)),
				vr(r) ? r.get() : r
			);
		}
		setBaseTarget(e, t) {
			this.baseTarget[e] = t;
		}
		getBaseTarget(e) {
			var t;
			const { initial: n } = this.props;
			let r;
			if ("string" === typeof n || "object" === typeof n) {
				const i = un(
					this.props,
					n,
					null === (t = this.presenceContext) || void 0 === t
						? void 0
						: t.custom
				);
				i && (r = i[e]);
			}
			if (n && void 0 !== r) return r;
			const i = this.getBaseTargetFromProps(this.props, e);
			return void 0 === i || vr(i)
				? void 0 !== this.initialValues[e] && void 0 === r
					? void 0
					: this.baseTarget[e]
				: i;
		}
		on(e, t) {
			return (
				this.events[e] || (this.events[e] = new cr()), this.events[e].add(t)
			);
		}
		notify(e) {
			if (this.events[e]) {
				for (
					var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
					r < t;
					r++
				)
					n[r - 1] = arguments[r];
				this.events[e].notify(...n);
			}
		}
	}
	class Ku extends $u {
		constructor() {
			super(...arguments), (this.KeyframeResolver = Xi);
		}
		sortInstanceNodePosition(e, t) {
			return 2 & e.compareDocumentPosition(t) ? 1 : -1;
		}
		getBaseTargetFromProps(e, t) {
			return e.style ? e.style[t] : void 0;
		}
		removeValueFromRenderState(e, t) {
			let { vars: n, style: r } = t;
			delete n[e], delete r[e];
		}
		handleChildMotionValue() {
			this.childSubscription &&
				(this.childSubscription(), delete this.childSubscription);
			const { children: e } = this.props;
			vr(e) &&
				(this.childSubscription = e.on("change", (e) => {
					this.current && (this.current.textContent = "".concat(e));
				}));
		}
	}
	class Xu extends Ku {
		constructor() {
			super(...arguments), (this.type = "html"), (this.renderInstance = xu);
		}
		readValueFromInstance(e, t) {
			if (Xn.has(t)) {
				const e = wi(t);
				return (e && e.default) || 0;
			}
			{
				const r = ((n = e), window.getComputedStyle(n)),
					i = (zi(t) ? r.getPropertyValue(t) : r[t]) || 0;
				return "string" === typeof i ? i.trim() : i;
			}
			var n;
		}
		measureInstanceViewportBox(e, t) {
			let { transformPagePoint: n } = t;
			return rs(e, n);
		}
		build(e, t, n) {
			fu(e, t, n.transformTemplate);
		}
		scrapeMotionValuesFromProps(e, t, n) {
			return Pu(e, t, n);
		}
	}
	class Qu extends Ku {
		constructor() {
			super(...arguments),
				(this.type = "svg"),
				(this.isSVGTag = !1),
				(this.measureInstanceViewportBox = Ba);
		}
		getBaseTargetFromProps(e, t) {
			return e[t];
		}
		readValueFromInstance(e, t) {
			if (Xn.has(t)) {
				const e = wi(t);
				return (e && e.default) || 0;
			}
			return (t = Su.has(t) ? t : br(t)), e.getAttribute(t);
		}
		scrapeMotionValuesFromProps(e, t, n) {
			return Cu(e, t, n);
		}
		build(e, t, n) {
			vu(e, t, this.isSVGTag, n.transformTemplate);
		}
		renderInstance(e, t, n, r) {
			ku(e, t, 0, r);
		}
		mount(e) {
			(this.isSVGTag = wu(e.tagName)), super.mount(e);
		}
	}
	const Yu = (e, t) =>
			ou(e) ? new Qu(t) : new Xu(t, { allowProjection: e !== i.Fragment }),
		Gu = tn(zu(pe(pe(pe(pe({}, ga), zl), _l), Bl), Yu));
	const Ju = function (e) {
		return (0, Mt.jsxs)(Mt.Fragment, {
			children: [
				(0, Mt.jsxs)("h1", {
					className: "pokemon-detail-header",
					style: {
						color: e.info.shiny ? "gold" : "white",
						transition: "color 300ms",
					},
					children: [
						"#",
						e.info.number && e.info.number.toString().padStart(4, 0),
						" -\xa0",
						e.info.name && e.info.name.replace("-", " "),
						(0, Mt.jsx)(Gu.img, {
							style: { marginTop: 10, marginLeft: 12 },
							src: "https://archives.bulbagarden.net/media/upload/2/20/ShinyVIIIStar.png",
							initial: { opacity: 0 },
							animate: { opacity: e.info.shiny ? 1 : 0 },
						}),
					],
				}),
				(0, Mt.jsx)("div", { className: "jp", children: e.info.japanese }),
				(0, Mt.jsxs)("sub", { children: ["The ", e.info.genus] }),
			],
		});
	};
	const Zu = function (e) {
		return (0, Mt.jsx)("div", {
			style: { display: "flex", margin: "10px auto" },
			children: (0, Mt.jsx)("img", {
				className: "sprite",
				width:
					Math.ceil(
						parseInt(window.innerWidth) /
							(parseInt(window.innerWidth) / e.imageSize)
					) + "px",
				src: e.image,
				alt: e.altText,
				onClick: e.click,
			}),
		});
	};
	const ec = function (e) {
		const [t, n] = (0, i.useState)(null),
			[r, o] = (0, i.useState)(null),
			[a, s] = (0, i.useState)(!1),
			[l, u] = (0, i.useState)(!1);
		return (
			(0, i.useEffect)(
				function () {
					e.fetchUrl &&
						(n(null),
						o(null),
						s(!1),
						u(!1),
						Ot.get(e.fetchUrl).then((e) => {
							n(
								e.data.flavor_text_entries.findLast(
									(e) => "en" == e.language.name
								).flavor_text
							),
								0 != e.data.effect_entries.length
									? o(
											e.data.effect_entries.findLast(
												(e) => "en" == e.language.name
											).effect
									  )
									: o(null);
						}));
				},
				[e.fetchUrl]
			),
			(0, Mt.jsxs)("div", {
				children: [
					(0, Mt.jsx)("div", {
						className: "ability-text",
						onClick: (e) => {
							s((e) => !e), a && u(!1);
						},
						style: {
							textTransform: "capitalize",
							color: l ? "gold" : "white",
							transition: "color .2s",
						},
						children: e.isHidden
							? (0, Mt.jsx)("span", {
									style: { fontWeight: 700 },
									children: e.name,
							  })
							: e.name,
					}),
					(0, Mt.jsx)("sub", {
						onClick: () => {
							null !== r && u((e) => !e);
						},
						style: {
							display: a ? "block" : "none",
							cursor: "pointer",
							userSelect: "none",
						},
						children: l ? r : t,
					}),
				],
			})
		);
	};
	const tc = function (e) {
		return (0, Mt.jsx)("div", {
			className: "ability-menu",
			children:
				e.abilityList &&
				e.abilityList.map((e, t) =>
					(0, Mt.jsx)(Mt.Fragment, {
						children: (0, Mt.jsx)(
							ec,
							{
								name: e.ability.name.replace("-", " "),
								fetchUrl: e.ability.url,
								isHidden: e.is_hidden,
							},
							t
						),
					})
				),
		});
	};
	const nc = [
		0.094, 0.16639787, 0.21573247, 0.25572005, 0.29024988, 0.3210876,
		0.34921268, 0.3752356, 0.39956728, 0.4225, 0.44310755, 0.4627984,
		0.48168495, 0.49985844, 0.51739395, 0.5343543, 0.5507927, 0.5667545,
		0.5822789, 0.5974, 0.6121573, 0.6265671, 0.64065295, 0.65443563, 0.667934,
		0.6811649, 0.69414365, 0.7068842, 0.7193991, 0.7317, 0.7377695, 0.74378943,
		0.74976104, 0.7556855, 0.76156384, 0.76739717, 0.7731865, 0.77893275,
		0.784637, 0.7903, 0.7953, 0.8003, 0.8053, 0.8103, 0.8153, 0.8203, 0.8253,
		0.8303, 0.8353, 0.8403,
	];
	function rc(e, t) {
		return (
			t || (t = e.slice(0)),
			Object.freeze(
				Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
			)
		);
	}
	const ic = ["animated"],
		oc = ["className"],
		ac = ["justify", "className"],
		sc = ["startDigitsAtZero"];
	var lc, uc;
	const cc = (e, t, n) => {
		const r = document.createElement(e),
			[i, o] = Array.isArray(t) ? [void 0, t] : [t, n];
		return (
			i && Object.assign(r, i),
			null == o || o.forEach((e) => r.appendChild(e)),
			r
		);
	};
	String.raw;
	const dc = String.raw,
		fc =
			typeof CSS < "u" &&
			CSS.supports &&
			CSS.supports("animation-timing-function", "linear(1,2)"),
		hc =
			typeof CSS < "u" &&
			CSS.supports &&
			CSS.supports("line-height", "mod(1,1)"),
		pc =
			typeof matchMedia < "u"
				? matchMedia("(prefers-reduced-motion: reduce)")
				: null,
		mc = "--_number-flow-d-opacity",
		gc = "--_number-flow-d-width",
		vc = "--_number-flow-dx",
		yc = "--_number-flow-d",
		bc = (() => {
			try {
				return (
					CSS.registerProperty({
						name: mc,
						syntax: "<number>",
						inherits: !1,
						initialValue: "0",
					}),
					CSS.registerProperty({
						name: vc,
						syntax: "<length>",
						inherits: !0,
						initialValue: "0px",
					}),
					CSS.registerProperty({
						name: gc,
						syntax: "<number>",
						inherits: !1,
						initialValue: "0",
					}),
					CSS.registerProperty({
						name: yc,
						syntax: "<number>",
						inherits: !0,
						initialValue: "0",
					}),
					!0
				);
			} catch (e) {
				return !1;
			}
		})(),
		wc = "var(--number-flow-char-height, 1em)",
		xc = "var(--number-flow-mask-height, 0.25em)",
		Sc = "calc(".concat(xc, " / 2)"),
		kc = "var(--number-flow-mask-width, 0.5em)",
		Ec = "calc(".concat(kc, " / var(--scale-x))"),
		Pc = "#000 0, transparent 71%",
		Cc = dc(
			lc ||
				(lc = rc(
					[
						":host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:",
						" !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(",
						") / var(--width));transform:translateX(var(",
						")) scaleX(var(--scale-x));margin:0 calc(-1 * ",
						");position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ",
						",#000 calc(100% - ",
						"),transparent ),linear-gradient(to bottom,transparent 0,#000 ",
						",#000 calc(100% - ",
						"),transparent 100% ),radial-gradient(at bottom right,",
						"),radial-gradient(at bottom left,",
						"),radial-gradient(at top left,",
						"),radial-gradient(at top right,",
						");-webkit-mask-size:100% calc(100% - ",
						" * 2),calc(100% - ",
						" * 2) 100%,",
						" ",
						",",
						" ",
						",",
						" ",
						",",
						" ",
						";-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:",
						" ",
						";transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(",
						void 0,
						")}.digit__num,.number .section::after{padding:",
						" 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol__exiting{left:0}.section--justify-right .symbol__exiting{right:0}.animate-presence{opacity:calc(1 + var(",
						"))}",
					],
					[
						":host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:",
						" !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(",
						") / var(--width));transform:translateX(var(",
						")) scaleX(var(--scale-x));margin:0 calc(-1 * ",
						");position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ",
						",#000 calc(100% - ",
						"),transparent ),linear-gradient(to bottom,transparent 0,#000 ",
						",#000 calc(100% - ",
						"),transparent 100% ),radial-gradient(at bottom right,",
						"),radial-gradient(at bottom left,",
						"),radial-gradient(at top left,",
						"),radial-gradient(at top right,",
						");-webkit-mask-size:100% calc(100% - ",
						" * 2),calc(100% - ",
						" * 2) 100%,",
						" ",
						",",
						" ",
						",",
						" ",
						",",
						" ",
						";-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:",
						" ",
						";transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(",
						")))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section__exiting,.symbol__exiting{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(",
						")}.digit__num,.number .section::after{padding:",
						" 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num:not(.is-current){position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num:not(.is-current){display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol__exiting{left:0}.section--justify-right .symbol__exiting{right:0}.animate-presence{opacity:calc(1 + var(",
						"))}",
					]
				)),
			wc,
			gc,
			vc,
			kc,
			Ec,
			Ec,
			xc,
			xc,
			Pc,
			Pc,
			Pc,
			Pc,
			xc,
			Ec,
			Ec,
			xc,
			Ec,
			xc,
			Ec,
			xc,
			Ec,
			xc,
			Sc,
			kc,
			vc,
			yc,
			Sc,
			mc
		),
		Tc = HTMLElement,
		Fc =
			(dc(
				uc ||
					(uc = rc([
						":host{display:inline-block;direction:ltr;white-space:nowrap;line-height:",
						" !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:",
						" 0}.symbol{white-space:pre}",
					])),
				wc,
				Sc
			),
			hc && fc && bc);
	let _c;
	class Ac extends Tc {
		constructor() {
			super(), (this.created = !1), (this.manual = !1);
			const e = this.constructor.defaultProps,
				{ animated: t } = e,
				n = rn(e, ic);
			(this._animated = this.computedAnimated = t), Object.assign(this, n);
		}
		get animated() {
			return this._animated;
		}
		set animated(e) {
			var t;
			this.animated !== e &&
				((this._animated = e),
				null == (t = this.shadowRoot) ||
					t.getAnimations().forEach((e) => e.finish()));
		}
		set data(e) {
			if (null == e) return;
			const { pre: t, integer: n, fraction: r, post: i, value: o } = e;
			if (this.created) {
				const s = this._data;
				if (
					((this._data = e),
					(this.computedTrend =
						"function" == typeof this.trend
							? this.trend(s.value, o)
							: this.trend),
					(this.startingPos = void 0),
					this.computedTrend && this.continuous)
				) {
					const t = s.integer
							.concat(s.fraction)
							.filter((e) => "integer" === e.type || "fraction" === e.type),
						n = e.integer
							.concat(e.fraction)
							.filter((e) => "integer" === e.type || "fraction" === e.type),
						r = t.find(
							(e) => !n.find((t) => t.pos === e.pos && t.value === e.value)
						),
						i = n.find(
							(e) => !t.find((t) => e.pos === t.pos && e.value === t.value)
						);
					this.startingPos = ((e, t) =>
						null == e ? t : null == t ? e : Math.max(e, t))(
						null == r ? void 0 : r.pos,
						null == i ? void 0 : i.pos
					);
				}
				(this.computedAnimated =
					Fc &&
					this._animated &&
					(!this.respectMotionPreference || !(null != pc && pc.matches)) &&
					(a = this).offsetWidth > 0 &&
					a.offsetHeight > 0),
					this.manual || this.willUpdate(),
					this._pre.update(t),
					this._num.update({ integer: n, fraction: r }),
					this._post.update(i),
					this.manual || this.didUpdate();
			} else {
				if (
					((this._data = e),
					this.attachShadow({ mode: "open" }),
					typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets)
				)
					_c || ((_c = new CSSStyleSheet()), _c.replaceSync(Cc)),
						(this.shadowRoot.adoptedStyleSheets = [_c]);
				else {
					const e = document.createElement("style");
					(e.textContent = Cc), this.shadowRoot.appendChild(e);
				}
				(this._pre = new Lc(this, t, { justify: "right", part: "left" })),
					this.shadowRoot.appendChild(this._pre.el),
					(this._num = new Rc(this, n, r)),
					this.shadowRoot.appendChild(this._num.el),
					(this._post = new Lc(this, i, { justify: "left", part: "right" })),
					this.shadowRoot.appendChild(this._post.el);
			}
			var a;
			this.created = !0;
		}
		willUpdate() {
			this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
		}
		didUpdate() {
			if (!this.computedAnimated) return;
			this._abortAnimationsFinish
				? this._abortAnimationsFinish.abort()
				: this.dispatchEvent(new Event("animationsstart")),
				this._pre.didUpdate(),
				this._num.didUpdate(),
				this._post.didUpdate();
			const e = new AbortController();
			Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(
				() => {
					e.signal.aborted ||
						(this.dispatchEvent(new Event("animationsfinish")),
						(this._abortAnimationsFinish = void 0));
				}
			),
				(this._abortAnimationsFinish = e);
		}
	}
	Ac.defaultProps = {
		transformTiming: {
			duration: 900,
			easing:
				"linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)",
		},
		spinTiming: void 0,
		opacityTiming: { duration: 450, easing: "ease-out" },
		animated: !0,
		trend: (e, t) => Math.sign(t - e),
		continuous: !1,
		respectMotionPreference: !0,
		digits: void 0,
	};
	class Rc {
		constructor(e, t, n) {
			let r =
					arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
				{ className: i } = r,
				o = rn(r, oc);
			(this.flow = e),
				(this._integer = new Dc(e, t, { justify: "right", part: "integer" })),
				(this._fraction = new Dc(e, n, { justify: "left", part: "fraction" })),
				(this._inner = cc("span", { className: "number__inner" }, [
					this._integer.el,
					this._fraction.el,
				])),
				(this.el = cc(
					"span",
					pe(
						pe({}, o),
						{},
						{
							part: "number",
							className: "number ".concat(null !== i && void 0 !== i ? i : ""),
						}
					),
					[this._inner]
				));
		}
		willUpdate() {
			(this._prevWidth = this.el.offsetWidth),
				(this._prevLeft = this.el.getBoundingClientRect().left),
				this._integer.willUpdate(),
				this._fraction.willUpdate();
		}
		update(e) {
			let { integer: t, fraction: n } = e;
			this._integer.update(t), this._fraction.update(n);
		}
		didUpdate() {
			const e = this.el.getBoundingClientRect();
			this._integer.didUpdate(), this._fraction.didUpdate();
			const t = this._prevLeft - e.left,
				n = this.el.offsetWidth,
				r = this._prevWidth - n;
			this.el.style.setProperty("--width", String(n)),
				this.el.animate(
					{ [vc]: ["".concat(t, "px"), "0px"], [gc]: [r, 0] },
					pe(pe({}, this.flow.transformTiming), {}, { composite: "accumulate" })
				);
		}
	}
	class jc {
		constructor(e, t, n, r) {
			let { justify: i, className: o } = n,
				a = rn(n, ac);
			(this.flow = e),
				(this.children = new Map()),
				(this.onCharRemove = (e) => () => {
					this.children.delete(e);
				}),
				(this.justify = i);
			const s = t.map((e) => this.addChar(e).el);
			this.el = cc(
				"span",
				pe(
					pe({}, a),
					{},
					{
						className: "section section--justify-"
							.concat(i, " ")
							.concat(null !== o && void 0 !== o ? o : ""),
					}
				),
				r ? r(s) : s
			);
		}
		addChar(e) {
			let t =
					arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				{ startDigitsAtZero: n = !1 } = t,
				r = rn(t, sc);
			const i =
				"integer" === e.type || "fraction" === e.type
					? new Nc(
							this,
							e.type,
							n ? 0 : e.value,
							e.pos,
							pe(pe({}, r), {}, { onRemove: this.onCharRemove(e.key) })
					  )
					: new Vc(
							this,
							e.type,
							e.value,
							pe(pe({}, r), {}, { onRemove: this.onCharRemove(e.key) })
					  );
			return this.children.set(e.key, i), i;
		}
		unpop(e) {
			e.el.classList.remove("section__exiting"),
				(e.el.style.top = ""),
				(e.el.style[this.justify] = "");
		}
		pop(e) {
			e.forEach((e) => {
				(e.el.style.top = "".concat(e.el.offsetTop, "px")),
					(e.el.style[this.justify] = "".concat(
						((e, t) => {
							var n, r;
							return "left" === t
								? e.offsetLeft
								: (null !==
										(n =
											null ==
											(r =
												e.offsetParent instanceof HTMLElement
													? e.offsetParent
													: null)
												? void 0
												: r.offsetWidth) && void 0 !== n
										? n
										: 0) -
										e.offsetWidth -
										e.offsetLeft;
						})(e.el, this.justify),
						"px"
					));
			}),
				e.forEach((e) => {
					e.el.classList.add("section__exiting"), (e.present = !1);
				});
		}
		addNewAndUpdateExisting(e) {
			const t = new Map(),
				n = new Map(),
				r = "left" === this.justify,
				i = r ? "prepend" : "append";
			if (
				((function (e, t) {
					let { reverse: n = !1 } =
						arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
					const r = e.length;
					for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++)
						t(e[i], i);
				})(
					e,
					(e) => {
						let r;
						this.children.has(e.key)
							? ((r = this.children.get(e.key)),
							  n.set(e, r),
							  this.unpop(r),
							  (r.present = !0))
							: ((r = this.addChar(e, {
									startDigitsAtZero: !0,
									animateIn: !0,
							  })),
							  t.set(e, r)),
							this.el[i](r.el);
					},
					{ reverse: r }
				),
				this.flow.computedAnimated)
			) {
				const e = this.el.getBoundingClientRect();
				t.forEach((t) => {
					t.willUpdate(e);
				});
			}
			t.forEach((e, t) => {
				e.update(t.value);
			}),
				n.forEach((e, t) => {
					e.update(t.value);
				});
		}
		willUpdate() {
			const e = this.el.getBoundingClientRect();
			(this._prevOffset = e[this.justify]),
				this.children.forEach((t) => t.willUpdate(e));
		}
		didUpdate() {
			const e = this.el.getBoundingClientRect();
			this.children.forEach((t) => t.didUpdate(e));
			const t = e[this.justify],
				n = this._prevOffset - t;
			n &&
				this.children.size &&
				this.el.animate(
					{ transform: ["translateX(".concat(n, "px)"), "none"] },
					pe(pe({}, this.flow.transformTiming), {}, { composite: "accumulate" })
				);
		}
	}
	class Dc extends jc {
		update(e) {
			const t = new Map();
			this.children.forEach((n, r) => {
				e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
			}),
				this.addNewAndUpdateExisting(e),
				t.forEach((e) => {
					e instanceof Nc && e.update(0);
				}),
				this.pop(t);
		}
	}
	class Lc extends jc {
		update(e) {
			const t = new Map();
			this.children.forEach((n, r) => {
				e.find((e) => e.key === r) || t.set(r, n);
			}),
				this.pop(t),
				this.addNewAndUpdateExisting(e);
		}
	}
	class Oc {
		constructor(e, t) {
			let { onRemove: n, animateIn: r = !1 } =
				arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			(this.flow = e),
				(this.el = t),
				(this._present = !0),
				(this._remove = () => {
					var e;
					this.el.remove(), null == (e = this._onRemove) || e.call(this);
				}),
				this.el.classList.add("animate-presence"),
				this.flow.computedAnimated &&
					r &&
					this.el.animate(
						{ [mc]: [-0.9999, 0] },
						pe(pe({}, this.flow.opacityTiming), {}, { composite: "accumulate" })
					),
				(this._onRemove = n);
		}
		get present() {
			return this._present;
		}
		set present(e) {
			if (this._present !== e) {
				if (((this._present = e), !this.flow.computedAnimated))
					return void (e || this._remove());
				this.el.style.setProperty(
					"--_number-flow-d-opacity",
					e ? "0" : "-.999"
				),
					this.el.animate(
						{ [mc]: e ? [-0.9999, 0] : [0.999, 0] },
						pe(pe({}, this.flow.opacityTiming), {}, { composite: "accumulate" })
					),
					e
						? this.flow.removeEventListener("animationsfinish", this._remove)
						: this.flow.addEventListener("animationsfinish", this._remove, {
								once: !0,
						  });
			}
		}
	}
	class Mc extends Oc {
		constructor(e, t, n, r) {
			super(e.flow, n, r), (this.section = e), (this.value = t), (this.el = n);
		}
	}
	class Nc extends Mc {
		constructor(e, t, n, r, i) {
			var o, a, s;
			const l =
					(null !==
						(o =
							null == (s = null == (a = e.flow.digits) ? void 0 : a[r])
								? void 0
								: s.max) && void 0 !== o
						? o
						: 9) + 1,
				u = Array.from({ length: l }).map((e, t) => {
					const r = cc(
						"span",
						{ className: "digit__num".concat(t === n ? " is-current" : "") },
						[document.createTextNode(String(t))]
					);
					return r.style.setProperty("--n", String(t)), r;
				}),
				c = cc(
					"span",
					{ part: "digit ".concat(t, "-digit"), className: "digit" },
					u
				);
			c.style.setProperty("--current", String(n)),
				c.style.setProperty("--length", String(l)),
				super(e, n, c, i),
				(this.pos = r),
				(this._onAnimationsFinish = () => {
					this.el.classList.remove("is-spinning");
				}),
				(this._numbers = u),
				(this._length = l);
		}
		willUpdate(e) {
			const t = this.el.getBoundingClientRect();
			this._prevValue = this.value;
			const n = t[this.section.justify] - e[this.section.justify],
				r = t.width / 2;
			this._prevCenter = "left" === this.section.justify ? n + r : n - r;
		}
		update(e) {
			var t, n;
			null == (t = this._numbers[this.value]) ||
				t.classList.remove("is-current"),
				this.el.style.setProperty("--current", String(e)),
				null == (n = this._numbers[e]) || n.classList.add("is-current"),
				(this.value = e);
		}
		didUpdate(e) {
			var t;
			const n = this.el.getBoundingClientRect(),
				r = n[this.section.justify] - e[this.section.justify],
				i = n.width / 2,
				o = "left" === this.section.justify ? r + i : r - i,
				a = this._prevCenter - o;
			a &&
				this.el.animate(
					{ transform: ["translateX(".concat(a, "px)"), "none"] },
					pe(pe({}, this.flow.transformTiming), {}, { composite: "accumulate" })
				);
			const s = this.diff;
			s &&
				(this.el.classList.add("is-spinning"),
				this.el.animate(
					{ [yc]: [-s, 0] },
					pe(
						pe(
							{},
							null !== (t = this.flow.spinTiming) && void 0 !== t
								? t
								: this.flow.transformTiming
						),
						{},
						{ composite: "accumulate" }
					)
				),
				this.flow.addEventListener(
					"animationsfinish",
					this._onAnimationsFinish,
					{ once: !0 }
				));
		}
		get diff() {
			let e = this.flow.computedTrend;
			const t = this.value - this._prevValue;
			return !t &&
				null != this.flow.startingPos &&
				this.flow.startingPos >= this.pos
				? this._length * e
				: (e || (e = Math.sign(t)),
				  e < 0 && this.value > this._prevValue
						? this.value - this._length - this._prevValue
						: e > 0 && this.value < this._prevValue
						? this._length - this._prevValue + this.value
						: t);
		}
	}
	class Vc extends Mc {
		constructor(e, t, n, r) {
			const i = cc("span", { className: "symbol__value", textContent: n });
			super(
				e,
				n,
				cc("span", { part: "symbol ".concat(t), className: "symbol" }, [i]),
				r
			),
				(this.type = t),
				(this._children = new Map()),
				(this._onChildRemove = (e) => () => {
					this._children.delete(e);
				}),
				this._children.set(
					n,
					new Oc(this.flow, i, { onRemove: this._onChildRemove(n) })
				);
		}
		willUpdate(e) {
			if ("decimal" === this.type) return;
			const t = this.el.getBoundingClientRect();
			this._prevOffset = t[this.section.justify] - e[this.section.justify];
		}
		update(e) {
			if (this.value !== e) {
				const t = this._children.get(this.value);
				if (
					((t.present = !1),
					t.el.classList.add("symbol__exiting"),
					this._children.has(e))
				) {
					const t = this._children.get(e);
					(t.present = !0), t.el.classList.remove("symbol__exiting");
				} else {
					const t = cc("span", { className: "symbol__value", textContent: e });
					this.el.appendChild(t),
						this._children.set(
							e,
							new Oc(this.flow, t, {
								animateIn: !0,
								onRemove: this._onChildRemove(e),
							})
						);
				}
			}
			this.value = e;
		}
		didUpdate(e) {
			if ("decimal" === this.type) return;
			const t =
					this.el.getBoundingClientRect()[this.section.justify] -
					e[this.section.justify],
				n = this._prevOffset - t;
			n &&
				this.el.animate(
					{ transform: ["translateX(".concat(n, "px)"), "none"] },
					pe(pe({}, this.flow.transformTiming), {}, { composite: "accumulate" })
				);
		}
	}
	const zc = [
			"transformTiming",
			"spinTiming",
			"opacityTiming",
			"animated",
			"respectMotionPreference",
			"trend",
			"continuous",
		],
		Bc = [
			"innerRef",
			"className",
			"data",
			"willChange",
			"isolate",
			"group",
			"digits",
			"onAnimationsStart",
			"onAnimationsFinish",
		],
		Uc = ["value", "locales", "format", "prefix", "suffix"];
	var Ic,
		Wc,
		Hc,
		qc =
			parseInt(
				null === (Ic = i.version.match(/^(\d+)\./)) || void 0 === Ic
					? void 0
					: Ic[1]
			) >= 19,
		$c = class extends Ac {
			attributeChangedCallback(e, t, n) {
				this[e] = JSON.parse(n);
			}
		};
	($c.observedAttributes = qc ? [] : ["data", "digits"]),
		(Wc = "number-flow-react"),
		(Hc = $c),
		customElements.get(Wc) !== Hc && customElements.define(Wc, Hc);
	var Kc = {},
		Xc = qc ? (e) => e : JSON.stringify;
	function Qc(e) {
		const {
			transformTiming: t,
			spinTiming: n,
			opacityTiming: r,
			animated: i,
			respectMotionPreference: o,
			trend: a,
			continuous: s,
		} = e;
		return [
			{
				transformTiming: t,
				spinTiming: n,
				opacityTiming: r,
				animated: i,
				respectMotionPreference: o,
				trend: a,
				continuous: s,
			},
			rn(e, zc),
		];
	}
	var Yc = class extends i.Component {
			constructor(e) {
				super(e), (this.handleRef = this.handleRef.bind(this));
			}
			updateProperties(e) {
				if (!this.el) return;
				this.el.manual = !this.props.isolate;
				const [t] = Qc(this.props);
				Object.entries(t).forEach((e) => {
					let [t, n] = e;
					this.el[t] = null !== n && void 0 !== n ? n : $c.defaultProps[t];
				}),
					null !== e &&
						void 0 !== e &&
						e.onAnimationsStart &&
						this.el.removeEventListener("animationsstart", e.onAnimationsStart),
					this.props.onAnimationsStart &&
						this.el.addEventListener(
							"animationsstart",
							this.props.onAnimationsStart
						),
					null !== e &&
						void 0 !== e &&
						e.onAnimationsFinish &&
						this.el.removeEventListener(
							"animationsfinish",
							e.onAnimationsFinish
						),
					this.props.onAnimationsFinish &&
						this.el.addEventListener(
							"animationsfinish",
							this.props.onAnimationsFinish
						);
			}
			componentDidMount() {
				this.updateProperties(),
					qc &&
						this.el &&
						((this.el.digits = this.props.digits),
						(this.el.data = this.props.data));
			}
			getSnapshotBeforeUpdate(e) {
				if ((this.updateProperties(e), e.data !== this.props.data)) {
					if (this.props.group)
						return (
							this.props.group.willUpdate(),
							() => {
								var e;
								return null === (e = this.props.group) || void 0 === e
									? void 0
									: e.didUpdate();
							}
						);
					var t;
					if (!this.props.isolate)
						return (
							null === (t = this.el) || void 0 === t || t.willUpdate(),
							() => {
								var e;
								return null === (e = this.el) || void 0 === e
									? void 0
									: e.didUpdate();
							}
						);
				}
				return null;
			}
			componentDidUpdate(e, t, n) {
				null === n || void 0 === n || n();
			}
			handleRef(e) {
				this.props.innerRef && (this.props.innerRef.current = e), (this.el = e);
			}
			render() {
				const [e, t] = Qc(this.props),
					{
						innerRef: n,
						className: r,
						data: o,
						willChange: a,
						isolate: s,
						group: l,
						digits: u,
						onAnimationsStart: c,
						onAnimationsFinish: d,
					} = t,
					f = rn(t, Bc);
				return i.createElement(
					"number-flow-react",
					pe(
						pe(
							{
								ref: this.handleRef,
								"data-will-change": a ? "" : void 0,
								class: r,
								"aria-label": o.valueAsString,
							},
							f
						),
						{},
						{
							role: "img",
							dangerouslySetInnerHTML: { __html: "" },
							suppressHydrationWarning: !0,
							digits: Xc(u),
							data: Xc(o),
						}
					)
				);
			}
		},
		Gc = i.forwardRef(function (e, t) {
			let { value: n, locales: r, format: o, prefix: a, suffix: s } = e,
				l = rn(e, Uc);
			i.useImperativeHandle(t, () => u.current, []);
			const u = i.useRef(),
				c = i.useContext(Zc);
			null === c || void 0 === c || c.useRegister(u);
			const d = i.useMemo(() => (r ? JSON.stringify(r) : ""), [r]),
				f = i.useMemo(() => (o ? JSON.stringify(o) : ""), [o]),
				h = i.useMemo(() => {
					var e, t;
					const i =
						null !== (t = Kc[(e = "".concat(d, ":").concat(f))]) && void 0 !== t
							? t
							: (Kc[e] = new Intl.NumberFormat(r, o));
					return (function (e, t, n, r) {
						const i = t.formatToParts(e);
						n && i.unshift({ type: "prefix", value: n }),
							r && i.push({ type: "suffix", value: r });
						const o = [],
							a = [],
							s = [],
							l = [],
							u = {},
							c = (e) => {
								var t;
								return ""
									.concat(e, ":")
									.concat(
										(u[e] = (null !== (t = u[e]) && void 0 !== t ? t : -1) + 1)
									);
							};
						let d = "",
							f = !1,
							h = !1;
						for (const m of i) {
							d += m.value;
							const e =
								"minusSign" === m.type || "plusSign" === m.type
									? "sign"
									: m.type;
							"integer" === e
								? ((f = !0),
								  a.push(
										...m.value
											.split("")
											.map((t) => ({ type: e, value: parseInt(t) }))
								  ))
								: "group" === e
								? a.push({ type: e, value: m.value })
								: "decimal" === e
								? ((h = !0), s.push({ type: e, value: m.value, key: c(e) }))
								: "fraction" === e
								? s.push(
										...m.value
											.split("")
											.map((t) => ({
												type: e,
												value: parseInt(t),
												key: c(e),
												pos: -1 - u[e],
											}))
								  )
								: (f || h ? l : o).push({ type: e, value: m.value, key: c(e) });
						}
						const p = [];
						for (let m = a.length - 1; m >= 0; m--) {
							const e = a[m];
							p.unshift(
								"integer" === e.type
									? pe(pe({}, e), {}, { key: c(e.type), pos: u[e.type] })
									: pe(pe({}, e), {}, { key: c(e.type) })
							);
						}
						return {
							pre: o,
							integer: p,
							fraction: s,
							post: l,
							valueAsString: d,
							value: "string" == typeof e ? parseFloat(e) : e,
						};
					})(n, i, a, s);
				}, [n, d, f, a, s]);
			return i.createElement(
				Yc,
				pe(pe({}, l), {}, { group: c, data: h, innerRef: u })
			);
		}),
		Jc = Gc,
		Zc = i.createContext(void 0);
	const ed = ["#FF0000", "#FFA500", "#FFFF00", "#00FF00", "#71E1B3"];
	const td = function (e) {
		return (0, Mt.jsxs)("div", {
			children: [
				(0, Mt.jsx)("h3", {
					style: { textAlign: "center", textTransform: "capitalize" },
					children:
						"hp" == e.statName
							? "HP"
							: "cp" == e.statName
							? "CP"
							: e.statName.replace("-", " "),
				}),
				e.optionalLevel
					? (0, Mt.jsxs)(Mt.Fragment, {
							children: [
								(0, Mt.jsx)("sub", {
									style: {
										opacity:
											15 == e.optionalLevel ||
											20 == e.optionalLevel ||
											25 == e.optionalLevel
												? 1
												: 0,
									},
									children:
										"cp" != e.statName
											? "sample text"
											: 15 == e.optionalLevel
											? "Research"
											: 20 == e.optionalLevel
											? "Raid / Egg"
											: 25 == e.optionalLevel
											? "Raid (Weather Boost)"
											: "sample text",
								}),
								(0, Mt.jsx)("br", {}),
							],
					  })
					: null,
				(0, Mt.jsx)("div", {
					style: {
						backgroundColor:
							((t = "cp" == e.statName ? e.statNumber / 26 : e.statNumber),
							t < 40
								? ed[0]
								: (t >= 40) & (t < 65)
								? ed[1]
								: t >= 65 && t < 80
								? ed[2]
								: t >= 80 && t < 105
								? ed[3]
								: ed[4]),
						width:
							"cp" == e.statName
								? Math.floor((e.statNumber / 6672) * 500)
								: Math.floor((e.statNumber / 255) * 500),
					},
					className: "bar",
					children: (0, Mt.jsx)(Jc, { value: e.statNumber }),
				}),
			],
		});
		var t;
	};
	const nd = function (e) {
		return (0, Mt.jsxs)("div", {
			style: {
				flexBasis: "100%",
				justifyContent: "space-evenly",
				margin: "3px 0px",
			},
			children: [
				(0, Mt.jsx)("input", {
					type: "range",
					style: {
						accentColor:
							e.iv >= 15 ? "#ba3838" : 0 == e.iv ? "lightslategray" : "#d49831",
						color: "whitesmoke",
					},
					id: e.stat,
					min: 0,
					max: 15,
					value: e.iv,
					onChange: e.changeFunc,
				}),
				(0, Mt.jsx)("span", { children: e.iv }),
			],
		});
	};
	const rd = function (e) {
		const [t, n] = (0, i.useState)(!1),
			[r, o] = (0, i.useState)(15),
			[a, s] = (0, i.useState)(15),
			[l, u] = (0, i.useState)(15),
			[c, d] = (0, i.useState)(45),
			[f, h] = (0, i.useState)(50),
			[p, m] = (0, i.useState)(null);
		function g() {
			if (
				(o(parseInt(document.querySelector("#atk").value || 0)),
				s(parseInt(document.querySelector("#def").value || 0)),
				u(parseInt(document.querySelector("#hp").value || 0)),
				e.statList)
			) {
				d(r + a + l);
				var t = Math.round(
						2 *
							((7 / 8) *
								Math.max(e.statList[1].base_stat, e.statList[3].base_stat) +
								(1 / 8) *
									Math.min(e.statList[1].base_stat, e.statList[3].base_stat))
					),
					n = Math.round(
						2 *
							((5 / 8) *
								Math.max(e.statList[2].base_stat, e.statList[4].base_stat) +
								(3 / 8) *
									Math.min(e.statList[2].base_stat, e.statList[4].base_stat))
					),
					i = 1 + (e.statList[5].base_stat - 75) / 500,
					c = Math.round(t * i),
					h = Math.round(n * i),
					p = Math.floor(1.75 * e.statList[0].base_stat + 50),
					g = Math.floor(
						Math.max(
							10,
							((c + r) *
								Math.pow(h + a, 0.5) *
								Math.pow(p + l, 0.5) *
								Math.pow(nc[NaN !== f ? f - 1 : 1], 2)) /
								10
						)
					);
				Math.floor(
					Math.max(
						10,
						((c + r) *
							Math.pow(h + a, 0.5) *
							Math.pow(p + l, 0.5) *
							Math.pow(nc[39], 2)) /
							10
					)
				) >= 4e3 &&
					((c = Math.round(0.91 * c)),
					(h = Math.round(0.91 * h)),
					(p = Math.round(0.91 * p)),
					(g = Math.floor(
						Math.max(
							10,
							((c + r) *
								Math.pow(h + a, 0.5) *
								Math.pow(p + l, 0.5) *
								Math.pow(nc[NaN !== f ? f - 1 : 1], 2)) /
								10
						)
					))),
					m(g);
			}
		}
		return (
			(0, i.useEffect)(g, [e.statList, r, a, l, f]),
			(0, Mt.jsxs)("div", {
				className: "stat-menu",
				children: [
					(0, Mt.jsxs)("div", {
						style: { display: t ? "none" : "block" },
						children: [
							(0, Mt.jsx)("button", {
								onClick: () => {
									n(!0);
								},
								children: "PoGO",
							}),
							e.statList &&
								e.statList.map((e, t) =>
									(0, Mt.jsx)(
										td,
										{ statName: e.stat.name, statNumber: e.base_stat },
										t
									)
								),
						],
					}),
					(0, Mt.jsxs)("div", {
						style: { display: t ? "block" : "none" },
						children: [
							(0, Mt.jsx)("button", {
								onClick: () => {
									n(!1);
								},
								children: "Mainline",
							}),
							(0, Mt.jsx)(
								td,
								{ statName: "cp", statNumber: p, optionalLevel: f },
								6
							),
							(0, Mt.jsx)("br", {}),
							(0, Mt.jsx)("br", {}),
							(0, Mt.jsxs)("div", {
								children: [
									(0, Mt.jsx)("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											justifyContent: "space-evenly",
										},
										children: (0, Mt.jsx)("input", {
											id: "lvl",
											type: "number",
											min: "1",
											max: "50",
											value: f,
											onChange: () => {
												h(parseInt(document.querySelector("#lvl").value || 1)),
													g();
											},
										}),
									}),
									(0, Mt.jsx)("br", {}),
									(0, Mt.jsx)("br", {}),
									(0, Mt.jsx)("div", {
										style: {
											display: "flex",
											flexWrap: "wrap",
											justifyContent: "center",
										},
										children: (0, Mt.jsxs)("div", {
											style: {
												display: "flex",
												flexWrap: "wrap",
												justifyContent: "center",
												width: "50%",
											},
											children: [
												(0, Mt.jsx)(nd, { stat: "atk", iv: r, changeFunc: g }),
												(0, Mt.jsx)(nd, { stat: "def", iv: a, changeFunc: g }),
												(0, Mt.jsx)(nd, { stat: "hp", iv: l, changeFunc: g }),
											],
										}),
									}),
									(0, Mt.jsx)("br", {}),
									(0, Mt.jsxs)("center", {
										children: [
											(0, Mt.jsx)(Gt, {
												size: "3em",
												color:
													c >= 24 && 45 != c
														? "#d49831"
														: c >= 45
														? "#ba3838"
														: "lightgray",
												style: { margin: "2px 6px" },
											}),
											(0, Mt.jsx)(Gt, {
												size: "3em",
												color:
													c >= 31 && 45 != c
														? "#d49831"
														: c >= 45
														? "#ba3838"
														: "lightgray",
												style: { margin: "2px 6px" },
											}),
											(0, Mt.jsx)(Gt, {
												size: "3em",
												color:
													c > 38 && 45 != c
														? "#d49831"
														: c >= 45
														? "#ba3838"
														: "lightgray",
												style: { margin: "2px 6px" },
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			})
		);
	};
	const id = function (e) {
		return (0, Mt.jsxs)("div", {
			className: "pokemon-nav-buttons",
			children: [
				(0, Mt.jsx)("button", { onClick: e.leftFunc, children: "\u2190" }),
				(0, Mt.jsx)("button", {
					onClick: e.randomFunc,
					children: "Surprise Me!",
				}),
				(0, Mt.jsx)("button", { onClick: e.rightFunc, children: "\u2192" }),
			],
		});
	};
	const od = function (e) {
		return (0, Mt.jsx)("div", {
			className: "art-buttons",
			children: (0, Mt.jsx)("button", {
				onClick: e.artFunc,
				children: e.artChoice,
			}),
		});
	};
	const ad = function (e) {
		return (0, Mt.jsx)("div", {
			className: "icon ".concat(e.type),
			children: (0, Mt.jsx)("img", {
				src: "https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/5781623f147f1bf850f426cfe1874ba56a9b75ee/icons/".concat(
					e.type,
					".svg"
				),
				alt: e.type,
			}),
		});
	};
	const sd = function (e) {
		return (0, Mt.jsx)("div", {
			className: "flex-container",
			children: (0, Mt.jsxs)("div", {
				className: "flavor-container",
				children: [
					(0, Mt.jsx)("p", { children: e.text }),
					(0, Mt.jsxs)("div", { children: ["Pok\xe9mon ", e.game] }),
				],
			}),
		});
	};
	const ld = function (e) {
		return (0, Mt.jsxs)("div", {
			children: [(0, Mt.jsx)("p", { children: e.name }), !e.name && "pootis"],
		});
	};
	const ud = function (e) {
		return (0, Mt.jsx)("div", {
			className: "move-list",
			children: (0, Mt.jsx)("ul", {
				children:
					e.moves &&
					e.moves.map((e, t) =>
						(0, Mt.jsx)(
							ld,
							{ name: e.move.name.replace("-", " "), fetchUrl: e.move.url },
							t
						)
					),
			}),
		});
	};
	const cd = function () {
		const e = (0, i.useContext)(hd),
			[t, n] = (0, i.useState)([]),
			[r, o] = (0, i.useState)(e),
			[a, s] = (0, i.useState)(null),
			[l, u] = (0, i.useState)(null),
			[c, d] = (0, i.useState)(null),
			[f, h] = (0, i.useState)("en"),
			[p, m] = (0, i.useState)([]),
			[g, v] = (0, i.useState)(null),
			[y, b] = (0, i.useState)(!0),
			[w, x] = (0, i.useState)(!1),
			S = y ? "official-artwork" : "home",
			k = y ? "Pok\xe9mon HOME" : "Ken Sugimori Art",
			E = w ? "front_shiny" : "front_default";
		return (
			(0, i.useEffect)(
				function () {
					Ot.get("https://pokeapi.co/api/v2/pokemon/".concat(e)).then((e) => {
						n(e.data);
					}),
						Ot.get("https://pokeapi.co/api/v2/pokemon-species/".concat(e)).then(
							(e) => {
								s(e.data.genera.findLast((e) => "en" == e.language.name).genus),
									v(
										e.data.names.findLast((e) => "ja-Hrkt" == e.language.name)
											.name
									),
									u(
										e.data.flavor_text_entries.findLast(
											(e) => e.language.name == f
										)
									),
									d(e.data.name);
							}
						),
						o(e);
				},
				[e]
			),
			(0, i.useEffect)(
				function () {
					Ot.get("https://pokeapi.co/api/v2/pokemon/".concat(r)).then((e) => {
						n(e.data);
					}),
						Ot.get("https://pokeapi.co/api/v2/pokemon-species/".concat(r)).then(
							(e) => {
								s(e.data.genera.findLast((e) => "en" == e.language.name).genus),
									v(
										e.data.names.findLast((e) => "ja-Hrkt" == e.language.name)
											.name
									),
									u(
										e.data.flavor_text_entries.findLast(
											(e) => e.language.name == f
										)
									),
									d(e.data.name);
							}
						);
				},
				[r]
			),
			t &&
				(0, Mt.jsxs)("div", {
					style: { display: "flex", justifyContent: "center" },
					children: [
						(0, Mt.jsxs)("div", {
							className: "flex-container",
							style: { width: 500, minWidth: 500, maxWidth: 500 },
							children: [
								(0, Mt.jsx)(tc, { abilityList: t.abilities }),
								(0, Mt.jsx)("br", {}),
								(0, Mt.jsx)("br", {}),
								(0, Mt.jsx)(rd, { statList: t.stats }),
							],
						}),
						(0, Mt.jsxs)("div", {
							style: { flexBasis: "33%" },
							children: [
								(0, Mt.jsx)(Ju, {
									info: {
										genus: a,
										japanese: g,
										name: c,
										number: t.id,
										shiny: w,
									},
								}),
								(0, Mt.jsx)(Zu, {
									image: t.sprites && t.sprites.other[S][E],
									imageSize: 350,
									altText: c,
									shiny: w,
									click: () => x((e) => !e),
								}),
								(0, Mt.jsx)("div", {
									className: "types",
									children:
										t.types &&
										t.types.map((e, t) =>
											(0, Mt.jsx)(ad, { type: e.type.name }, t)
										),
								}),
								(0, Mt.jsx)(id, {
									leftFunc: () => o((e) => parseInt(e) - 1),
									randomFunc: () => o(Math.floor(1025 * Math.random()) + 1),
									rightFunc: () => o((e) => parseInt(e) + 1),
								}),
								(0, Mt.jsx)(od, { artFunc: () => b((e) => !e), artChoice: k }),
							],
						}),
						(0, Mt.jsxs)("div", {
							style: { width: 500, minWidth: 500, maxWidth: 500 },
							children: [
								(0, Mt.jsx)(sd, {
									text: l && l.flavor_text,
									game: l && l.version.name.replace("-", " "),
								}),
								(0, Mt.jsx)("br", {}),
								(0, Mt.jsx)("br", {}),
								(0, Mt.jsx)(ud, { moves: t.moves }),
							],
						}),
					],
				})
		);
	};
	const dd = function (e) {
		return (0, Mt.jsx)("div", {
			style: { position: "absolute", top: 0, left: 0 },
			children: (0, Mt.jsx)("button", {
				className: "back-btn",
				onClick: e.clickFunc,
				children: (0, Mt.jsx)(Qt, {}),
			}),
		});
	};
	const fd = function (e) {
		return (0, Mt.jsx)("div", {
			id: e.useId ? e.children.toLowerCase() : "",
			className: "flex-interrupt",
			children: (0, Mt.jsx)("h1", { children: e.children }),
		});
	};
	const hd = (0, i.createContext)(null),
		pd = [
			{ start: 0, name: "Kanto" },
			{ start: 151, name: "Johto" },
			{ start: 251, name: "Hoenn" },
			{ start: 386, name: "Sinnoh" },
			{ start: 493, name: "Unova" },
			{ start: 649, name: "Kalos" },
			{ start: 721, name: "Alola" },
			{ start: 809, name: "Galar" },
			{ start: 898, name: "Hisui" },
			{ start: 905, name: "Paldea" },
		];
	var md = [0, 151, 251, 386, 493, 649, 721, 809, 898, 905],
		gd = [
			"kanto",
			"johto",
			"hoenn",
			"sinnoh",
			"unova",
			"kalos",
			"alola",
			"galar",
			"hisui",
			"paldea",
		];
	const vd = function () {
			const [e, t] = (0, i.useState)(!1),
				[n, r] = (0, i.useState)([]),
				[o, a] = (0, i.useState)(1),
				[s, l] = (0, i.useState)("medium"),
				[u, c] = (0, i.useState)(200),
				[d, f] = (0, i.useState)(""),
				h =
					"kanto" == d.toLowerCase() ||
					"johto" == d.toLowerCase() ||
					"hoenn" == d.toLowerCase() ||
					"sinnoh" == d.toLowerCase() ||
					"unova" == d.toLowerCase() ||
					"kalos" == d.toLowerCase() ||
					"alola" == d.toLowerCase() ||
					"galar" == d.toLowerCase() ||
					"hisui" == d.toLowerCase() ||
					"paldea" == d.toLowerCase();
			(0, i.useEffect)(() => {
				Ot.get("https://pokeapi.co/api/v2/pokemon?limit=1302").then((e) => {
					r(e.data.results);
				});
			}, []);
			const p = () => {
					c((e) => Math.min(u + 200, 1025));
				},
				m = (e) => {
					a(e.currentTarget.id),
						setTimeout(() => {
							t(!0);
						}, 500);
				};
			return (0, Mt.jsx)("div", {
				children: (0, Mt.jsxs)("div", {
					className: "pokemon-list-wrapper",
					children: [
						(0, Mt.jsxs)("div", {
							style: { display: e ? "none" : "block" },
							children: [
								(0, Mt.jsx)(Nt, { children: "Pok\xe9dex" }),
								(0, Mt.jsx)(Jt, {}),
								(0, Mt.jsx)(Zt, {
									changeFunc: function (e) {
										f(e.currentTarget.value);
									},
								}),
								(0, Mt.jsxs)("div", {
									className: "size-buttons",
									children: [
										(0, Mt.jsx)("button", {
											onClick: () => l("small"),
											children: "SM",
										}),
										(0, Mt.jsx)("button", {
											onClick: () => l("medium"),
											children: "MED",
										}),
										(0, Mt.jsx)("button", {
											onClick: () => l("large"),
											children: "LG",
										}),
									],
								}),
								(0, Mt.jsx)("div", {
									className: "size-buttons",
									children: (0, Mt.jsx)("button", {
										onClick: () => l("list"),
										children: "List",
									}),
								}),
								(0, Mt.jsxs)("div", {
									style: { textAlign: "center", textTransform: "capitalize" },
									children: [s, " view"],
								}),
								(0, Mt.jsx)("br", {}),
								(0, Mt.jsx)("div", {
									className: "region-refer-btn",
									children: (0, Mt.jsxs)("select", {
										onChange: (e) => {
											(document.querySelector(".search-bar").value =
												e.currentTarget.value),
												f(e.currentTarget.value);
										},
										children: [
											(0, Mt.jsx)("option", { value: "" }, "none"),
											(0, Mt.jsx)(
												"option",
												{ value: "kanto", children: "Kanto" },
												"kanto"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "johto", children: "Johto" },
												"johto"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "hoenn", children: "Hoenn" },
												"hoenn"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "sinnoh", children: "Sinnoh" },
												"sinnoh"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "unova", children: "Unova" },
												"unova"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "kalos", children: "Kalos" },
												"kalos"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "alola", children: "Alola" },
												"alola"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "galar", children: "Galar" },
												"galar"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "hisui", children: "Hisui" },
												"hisui"
											),
											(0, Mt.jsx)(
												"option",
												{ value: "paldea", children: "Paldea" },
												"paldea"
											),
										],
									}),
								}),
								(0, Mt.jsx)("div", {
									className: "pokemon-list",
									children: h
										? n
												.filter((e, t) => {
													var n;
													return (
														t >= md[gd.indexOf(d)] &&
														t <
															(null !== (n = md[gd.indexOf(d) + 1]) &&
															void 0 !== n
																? n
																: 1025)
													);
												})
												.map((e, t) =>
													(0, Mt.jsx)(Mt.Fragment, {
														children: (0, Mt.jsx)(
															en,
															{
																number: t + md[gd.indexOf(d)] + 1,
																name: e.name,
																itemSize: s,
																clicky: m,
															},
															t
														),
													})
												)
										: 0 == d.length || h
										? n &&
										  n
												.filter((e, t) => t < u)
												.map((e, t) =>
													(0, Mt.jsxs)(Mt.Fragment, {
														children: [
															0 == d.length &&
																pd.map(
																	(e) =>
																		t == e.start &&
																		(0, Mt.jsx)(
																			fd,
																			{ useId: !0, children: e.name },
																			e.name + "-interrupt"
																		)
																),
															(0, Mt.jsx)(
																en,
																{
																	number: t + 1,
																	name: e.name,
																	itemSize: s,
																	clicky: m,
																},
																t + 1
															),
															t == u - 1 &&
																u < 1025 &&
																(0, Mt.jsx)(fd, {
																	children: (0, Mt.jsx)("button", {
																		className: "load-more-btn",
																		onClick: p,
																		children: "Load More",
																	}),
																}),
														],
													})
												)
										: n &&
										  n
												.filter((e, t) => t < 1025)
												.map((e, t) =>
													(0, Mt.jsx)(Mt.Fragment, {
														children:
															e.name.replace("-", " ").includes(d) &&
															(0, Mt.jsx)(
																en,
																{
																	number: t + 1,
																	name: e.name,
																	itemSize: s,
																	clicky: m,
																},
																t + 1
															),
													})
												),
								}),
							],
						}),
						(0, Mt.jsx)("div", {
							style: { display: e ? "block" : "none" },
							children: (0, Mt.jsxs)(hd.Provider, {
								value: o,
								children: [
									(0, Mt.jsx)(dd, {
										clickFunc: () => {
											t(!1);
										},
									}),
									(0, Mt.jsx)("br", {}),
									(0, Mt.jsx)(cd, {}),
								],
							}),
						}),
					],
				}),
			});
		},
		yd = document.getElementById("root");
	(0, o.H)(yd).render(
		(0, Mt.jsx)(i.StrictMode, { children: (0, Mt.jsx)(vd, {}) })
	);
})();
//# sourceMappingURL=main.6af518cf.js.map
