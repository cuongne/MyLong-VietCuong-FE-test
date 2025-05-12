import Ze, { useRef as Mr, useEffect as zr } from "react";
var ve = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Ir() {
  if (qe) return ie;
  qe = 1;
  var r = Ze, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(i, p, R) {
    var h, _ = {}, T = null, A = null;
    R !== void 0 && (T = "" + R), p.key !== void 0 && (T = "" + p.key), p.ref !== void 0 && (A = p.ref);
    for (h in p) n.call(p, h) && !l.hasOwnProperty(h) && (_[h] = p[h]);
    if (i && i.defaultProps) for (h in p = i.defaultProps, p) _[h] === void 0 && (_[h] = p[h]);
    return { $$typeof: o, type: i, key: T, ref: A, props: _, _owner: c.current };
  }
  return ie.Fragment = a, ie.jsx = u, ie.jsxs = u, ie;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Lr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ze, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), i = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), z = Symbol.iterator, P = "@@iterator";
    function C(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = z && e[z] || e[P];
      return typeof t == "function" ? t : null;
    }
    var E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++)
          s[d - 1] = arguments[d];
        U("error", e, s);
      }
    }
    function U(e, t, s) {
      {
        var d = E.ReactDebugCurrentFrame, m = d.getStackAddendum();
        m !== "" && (t += "%s", s = s.concat([m]));
        var x = s.map(function(g) {
          return String(g);
        });
        x.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var W = !1, J = !1, de = !1, fe = !1, pe = !1, K;
    K = Symbol.for("react.module.reference");
    function re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === l || pe || e === c || e === R || e === h || fe || e === A || W || J || de || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === u || e.$$typeof === i || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === K || e.getModuleId !== void 0));
    }
    function te(e, t, s) {
      var d = e.displayName;
      if (d)
        return d;
      var m = t.displayName || t.name || "";
      return m !== "" ? s + "(" + m + ")" : s;
    }
    function y(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case R:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var t = e;
            return y(t) + ".Consumer";
          case u:
            var s = e;
            return y(s._context) + ".Provider";
          case p:
            return te(e, e.render, "ForwardRef");
          case _:
            var d = e.displayName || null;
            return d !== null ? d : I(e.type) || "Memo";
          case T: {
            var m = e, x = m._payload, g = m._init;
            try {
              return I(g(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, $ = 0, B, oe, X, D, ne, F, Oe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function sr() {
      {
        if ($ === 0) {
          B = console.log, oe = console.info, X = console.warn, D = console.error, ne = console.group, F = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function ir() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: B
            }),
            info: L({}, e, {
              value: oe
            }),
            warn: L({}, e, {
              value: X
            }),
            error: L({}, e, {
              value: D
            }),
            group: L({}, e, {
              value: ne
            }),
            groupCollapsed: L({}, e, {
              value: F
            }),
            groupEnd: L({}, e, {
              value: Oe
            })
          });
        }
        $ < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = E.ReactCurrentDispatcher, xe;
    function be(e, t, s) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (m) {
            var d = m.stack.trim().match(/\n( *(at )?)/);
            xe = d && d[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var we = !1, ge;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new lr();
    }
    function Me(e, t) {
      if (!e || we)
        return "";
      {
        var s = ge.get(e);
        if (s !== void 0)
          return s;
      }
      var d;
      we = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = ye.current, ye.current = null, sr();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (M) {
              d = M;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (M) {
              d = M;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            d = M;
          }
          e();
        }
      } catch (M) {
        if (M && d && typeof M.stack == "string") {
          for (var b = M.stack.split(`
`), O = d.stack.split(`
`), S = b.length - 1, j = O.length - 1; S >= 1 && j >= 0 && b[S] !== O[j]; )
            j--;
          for (; S >= 1 && j >= 0; S--, j--)
            if (b[S] !== O[j]) {
              if (S !== 1 || j !== 1)
                do
                  if (S--, j--, j < 0 || b[S] !== O[j]) {
                    var N = `
` + b[S].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, N), N;
                  }
                while (S >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        we = !1, ye.current = x, ir(), Error.prepareStackTrace = m;
      }
      var Z = e ? e.displayName || e.name : "", q = Z ? be(Z) : "";
      return typeof e == "function" && ge.set(e, q), q;
    }
    function cr(e, t, s) {
      return Me(e, !1);
    }
    function ur(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function me(e, t, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Me(e, ur(e));
      if (typeof e == "string")
        return be(e);
      switch (e) {
        case R:
          return be("Suspense");
        case h:
          return be("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return cr(e.render);
          case _:
            return me(e.type, t, s);
          case T: {
            var d = e, m = d._payload, x = d._init;
            try {
              return me(x(m), t, s);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, ze = {}, Ie = E.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var t = e._owner, s = me(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(s);
      } else
        Ie.setExtraStackFrame(null);
    }
    function dr(e, t, s, d, m) {
      {
        var x = Function.call.bind(ae);
        for (var g in e)
          if (x(e, g)) {
            var b = void 0;
            try {
              if (typeof e[g] != "function") {
                var O = Error((d || "React class") + ": " + s + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              b = e[g](t, g, d, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              b = S;
            }
            b && !(b instanceof Error) && (he(m), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", s, g, typeof b), he(null)), b instanceof Error && !(b.message in ze) && (ze[b.message] = !0, he(m), v("Failed %s type: %s", s, b.message), he(null));
          }
      }
    }
    var fr = Array.isArray;
    function Re(e) {
      return fr(e);
    }
    function pr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, s = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function br(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function Fe(e) {
      if (br(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pr(e)), Le(e);
    }
    var se = E.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, We, Ce;
    Ce = {};
    function mr(e) {
      if (ae.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (ae.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function vr(e, t) {
      if (typeof e.ref == "string" && se.current && t && se.current.stateNode !== t) {
        var s = I(se.current.type);
        Ce[s] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(se.current.type), e.ref), Ce[s] = !0);
      }
    }
    function yr(e, t) {
      {
        var s = function() {
          Ne || (Ne = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function xr(e, t) {
      {
        var s = function() {
          We || (We = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var wr = function(e, t, s, d, m, x, g) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: s,
        props: g,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Rr(e, t, s, d, m) {
      {
        var x, g = {}, b = null, O = null;
        s !== void 0 && (Fe(s), b = "" + s), hr(t) && (Fe(t.key), b = "" + t.key), mr(t) && (O = t.ref, vr(t, m));
        for (x in t)
          ae.call(t, x) && !gr.hasOwnProperty(x) && (g[x] = t[x]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (x in S)
            g[x] === void 0 && (g[x] = S[x]);
        }
        if (b || O) {
          var j = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && yr(g, j), O && xr(g, j);
        }
        return wr(e, b, O, m, d, se.current, g);
      }
    }
    var Ee = E.ReactCurrentOwner, Ge = E.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var t = e._owner, s = me(e.type, e._source, t ? t.type : null);
        Ge.setExtraStackFrame(s);
      } else
        Ge.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function $e() {
      {
        if (Ee.current) {
          var e = I(Ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Cr(e) {
      return "";
    }
    var De = {};
    function Er(e) {
      {
        var t = $e();
        if (!t) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (t = `

Check the top-level render call using <` + s + ">.");
        }
        return t;
      }
    }
    function Ve(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = Er(t);
        if (De[s])
          return;
        De[s] = !0;
        var d = "";
        e && e._owner && e._owner !== Ee.current && (d = " It was passed a child from " + I(e._owner.type) + "."), H(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, d), H(null);
      }
    }
    function Ye(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var s = 0; s < e.length; s++) {
            var d = e[s];
            _e(d) && Ve(d, t);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = C(e);
          if (typeof m == "function" && m !== e.entries)
            for (var x = m.call(e), g; !(g = x.next()).done; )
              _e(g.value) && Ve(g.value, t);
        }
      }
    }
    function kr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var s;
        if (typeof t == "function")
          s = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === _))
          s = t.propTypes;
        else
          return;
        if (s) {
          var d = I(t);
          dr(s, e.props, "prop", d, e);
        } else if (t.PropTypes !== void 0 && !ke) {
          ke = !0;
          var m = I(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), s = 0; s < t.length; s++) {
          var d = t[s];
          if (d !== "children" && d !== "key") {
            H(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Ue = {};
    function Be(e, t, s, d, m, x) {
      {
        var g = re(e);
        if (!g) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = Cr();
          O ? b += O : b += $e();
          var S;
          e === null ? S = "null" : Re(e) ? S = "array" : e !== void 0 && e.$$typeof === o ? (S = "<" + (I(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, b);
        }
        var j = Rr(e, t, s, m, x);
        if (j == null)
          return j;
        if (g) {
          var N = t.children;
          if (N !== void 0)
            if (d)
              if (Re(N)) {
                for (var Z = 0; Z < N.length; Z++)
                  Ye(N[Z], e);
                Object.freeze && Object.freeze(N);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(N, e);
        }
        if (ae.call(t, "key")) {
          var q = I(e), M = Object.keys(t).filter(function(Ar) {
            return Ar !== "key";
          }), Se = M.length > 0 ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[q + Se]) {
            var Or = M.length > 0 ? "{" + M.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Se, q, Or, q), Ue[q + Se] = !0;
          }
        }
        return e === n ? _r(j) : kr(j), j;
      }
    }
    function Sr(e, t, s) {
      return Be(e, t, s, !0);
    }
    function jr(e, t, s) {
      return Be(e, t, s, !1);
    }
    var Tr = jr, Pr = Sr;
    le.Fragment = n, le.jsx = Tr, le.jsxs = Pr;
  }()), le;
}
var Ke;
function Fr() {
  return Ke || (Ke = 1, process.env.NODE_ENV === "production" ? ve.exports = Ir() : ve.exports = Lr()), ve.exports;
}
var k = Fr();
const Nr = () => /* @__PURE__ */ k.jsxs("svg", { width: "16px", height: "16px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ k.jsx("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
  /* @__PURE__ */ k.jsx("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
  /* @__PURE__ */ k.jsxs("g", { id: "SVGRepo_iconCarrier", children: [
    " ",
    /* @__PURE__ */ k.jsxs("g", { id: "Menu / Close_MD", children: [
      " ",
      /* @__PURE__ */ k.jsx("path", { id: "Vector", d: "M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18", stroke: "#949494", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      " "
    ] }),
    " "
  ] })
] }), Wr = () => /* @__PURE__ */ k.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-3.5 w-3.5", viewBox: "0 0 20 20", fill: "currentColor", stroke: "currentColor", strokeWidth: "1", children: /* @__PURE__ */ k.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }) });
function Qe(r) {
  var o, a, n = "";
  if (typeof r == "string" || typeof r == "number") n += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var c = r.length;
    for (o = 0; o < c; o++) r[o] && (a = Qe(r[o])) && (n && (n += " "), n += a);
  } else for (a in r) r[a] && (n && (n += " "), n += a);
  return n;
}
function Gr() {
  for (var r, o, a = 0, n = "", c = arguments.length; a < c; a++) (r = arguments[a]) && (o = Qe(r)) && (n && (n += " "), n += o);
  return n;
}
const Pe = "-", $r = (r) => {
  const o = Vr(r), {
    conflictingClassGroups: a,
    conflictingClassGroupModifiers: n
  } = r;
  return {
    getClassGroupId: (u) => {
      const i = u.split(Pe);
      return i[0] === "" && i.length !== 1 && i.shift(), er(i, o) || Dr(u);
    },
    getConflictingClassGroupIds: (u, i) => {
      const p = a[u] || [];
      return i && n[u] ? [...p, ...n[u]] : p;
    }
  };
}, er = (r, o) => {
  var u;
  if (r.length === 0)
    return o.classGroupId;
  const a = r[0], n = o.nextPart.get(a), c = n ? er(r.slice(1), n) : void 0;
  if (c)
    return c;
  if (o.validators.length === 0)
    return;
  const l = r.join(Pe);
  return (u = o.validators.find(({
    validator: i
  }) => i(l))) == null ? void 0 : u.classGroupId;
}, Xe = /^\[(.+)\]$/, Dr = (r) => {
  if (Xe.test(r)) {
    const o = Xe.exec(r)[1], a = o == null ? void 0 : o.substring(0, o.indexOf(":"));
    if (a)
      return "arbitrary.." + a;
  }
}, Vr = (r) => {
  const {
    theme: o,
    prefix: a
  } = r, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Ur(Object.entries(r.classGroups), a).forEach(([l, u]) => {
    Te(u, n, l, o);
  }), n;
}, Te = (r, o, a, n) => {
  r.forEach((c) => {
    if (typeof c == "string") {
      const l = c === "" ? o : He(o, c);
      l.classGroupId = a;
      return;
    }
    if (typeof c == "function") {
      if (Yr(c)) {
        Te(c(n), o, a, n);
        return;
      }
      o.validators.push({
        validator: c,
        classGroupId: a
      });
      return;
    }
    Object.entries(c).forEach(([l, u]) => {
      Te(u, He(o, l), a, n);
    });
  });
}, He = (r, o) => {
  let a = r;
  return o.split(Pe).forEach((n) => {
    a.nextPart.has(n) || a.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), a = a.nextPart.get(n);
  }), a;
}, Yr = (r) => r.isThemeGetter, Ur = (r, o) => o ? r.map(([a, n]) => {
  const c = n.map((l) => typeof l == "string" ? o + l : typeof l == "object" ? Object.fromEntries(Object.entries(l).map(([u, i]) => [o + u, i])) : l);
  return [a, c];
}) : r, Br = (r) => {
  if (r < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let o = 0, a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const c = (l, u) => {
    a.set(l, u), o++, o > r && (o = 0, n = a, a = /* @__PURE__ */ new Map());
  };
  return {
    get(l) {
      let u = a.get(l);
      if (u !== void 0)
        return u;
      if ((u = n.get(l)) !== void 0)
        return c(l, u), u;
    },
    set(l, u) {
      a.has(l) ? a.set(l, u) : c(l, u);
    }
  };
}, rr = "!", qr = (r) => {
  const {
    separator: o,
    experimentalParseClassName: a
  } = r, n = o.length === 1, c = o[0], l = o.length, u = (i) => {
    const p = [];
    let R = 0, h = 0, _;
    for (let C = 0; C < i.length; C++) {
      let E = i[C];
      if (R === 0) {
        if (E === c && (n || i.slice(C, C + l) === o)) {
          p.push(i.slice(h, C)), h = C + l;
          continue;
        }
        if (E === "/") {
          _ = C;
          continue;
        }
      }
      E === "[" ? R++ : E === "]" && R--;
    }
    const T = p.length === 0 ? i : i.substring(h), A = T.startsWith(rr), z = A ? T.substring(1) : T, P = _ && _ > h ? _ - h : void 0;
    return {
      modifiers: p,
      hasImportantModifier: A,
      baseClassName: z,
      maybePostfixModifierPosition: P
    };
  };
  return a ? (i) => a({
    className: i,
    parseClassName: u
  }) : u;
}, Jr = (r) => {
  if (r.length <= 1)
    return r;
  const o = [];
  let a = [];
  return r.forEach((n) => {
    n[0] === "[" ? (o.push(...a.sort(), n), a = []) : a.push(n);
  }), o.push(...a.sort()), o;
}, Kr = (r) => ({
  cache: Br(r.cacheSize),
  parseClassName: qr(r),
  ...$r(r)
}), Xr = /\s+/, Hr = (r, o) => {
  const {
    parseClassName: a,
    getClassGroupId: n,
    getConflictingClassGroupIds: c
  } = o, l = [], u = r.trim().split(Xr);
  let i = "";
  for (let p = u.length - 1; p >= 0; p -= 1) {
    const R = u[p], {
      modifiers: h,
      hasImportantModifier: _,
      baseClassName: T,
      maybePostfixModifierPosition: A
    } = a(R);
    let z = !!A, P = n(z ? T.substring(0, A) : T);
    if (!P) {
      if (!z) {
        i = R + (i.length > 0 ? " " + i : i);
        continue;
      }
      if (P = n(T), !P) {
        i = R + (i.length > 0 ? " " + i : i);
        continue;
      }
      z = !1;
    }
    const C = Jr(h).join(":"), E = _ ? C + rr : C, v = E + P;
    if (l.includes(v))
      continue;
    l.push(v);
    const U = c(P, z);
    for (let W = 0; W < U.length; ++W) {
      const J = U[W];
      l.push(E + J);
    }
    i = R + (i.length > 0 ? " " + i : i);
  }
  return i;
};
function Zr() {
  let r = 0, o, a, n = "";
  for (; r < arguments.length; )
    (o = arguments[r++]) && (a = tr(o)) && (n && (n += " "), n += a);
  return n;
}
const tr = (r) => {
  if (typeof r == "string")
    return r;
  let o, a = "";
  for (let n = 0; n < r.length; n++)
    r[n] && (o = tr(r[n])) && (a && (a += " "), a += o);
  return a;
};
function Qr(r, ...o) {
  let a, n, c, l = u;
  function u(p) {
    const R = o.reduce((h, _) => _(h), r());
    return a = Kr(R), n = a.cache.get, c = a.cache.set, l = i, i(p);
  }
  function i(p) {
    const R = n(p);
    if (R)
      return R;
    const h = Hr(p, a);
    return c(p, h), h;
  }
  return function() {
    return l(Zr.apply(null, arguments));
  };
}
const w = (r) => {
  const o = (a) => a[r] || [];
  return o.isThemeGetter = !0, o;
}, or = /^\[(?:([a-z-]+):)?(.+)\]$/i, et = /^\d+\/\d+$/, rt = /* @__PURE__ */ new Set(["px", "full", "screen"]), tt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ot = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, nt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, at = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, st = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, G = (r) => Q(r) || rt.has(r) || et.test(r), V = (r) => ee(r, "length", bt), Q = (r) => !!r && !Number.isNaN(Number(r)), je = (r) => ee(r, "number", Q), ce = (r) => !!r && Number.isInteger(Number(r)), it = (r) => r.endsWith("%") && Q(r.slice(0, -1)), f = (r) => or.test(r), Y = (r) => tt.test(r), lt = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ct = (r) => ee(r, lt, nr), ut = (r) => ee(r, "position", nr), dt = /* @__PURE__ */ new Set(["image", "url"]), ft = (r) => ee(r, dt, mt), pt = (r) => ee(r, "", gt), ue = () => !0, ee = (r, o, a) => {
  const n = or.exec(r);
  return n ? n[1] ? typeof o == "string" ? n[1] === o : o.has(n[1]) : a(n[2]) : !1;
}, bt = (r) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ot.test(r) && !nt.test(r)
), nr = () => !1, gt = (r) => at.test(r), mt = (r) => st.test(r), ht = () => {
  const r = w("colors"), o = w("spacing"), a = w("blur"), n = w("brightness"), c = w("borderColor"), l = w("borderRadius"), u = w("borderSpacing"), i = w("borderWidth"), p = w("contrast"), R = w("grayscale"), h = w("hueRotate"), _ = w("invert"), T = w("gap"), A = w("gradientColorStops"), z = w("gradientColorStopPositions"), P = w("inset"), C = w("margin"), E = w("opacity"), v = w("padding"), U = w("saturate"), W = w("scale"), J = w("sepia"), de = w("skew"), fe = w("space"), pe = w("translate"), K = () => ["auto", "contain", "none"], re = () => ["auto", "hidden", "clip", "visible", "scroll"], te = () => ["auto", f, o], y = () => [f, o], I = () => ["", G, V], L = () => ["auto", Q, f], $ = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], B = () => ["solid", "dashed", "dotted", "double", "none"], oe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], X = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], D = () => ["", "0", f], ne = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], F = () => [Q, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ue],
      spacing: [G, V],
      blur: ["none", "", Y, f],
      brightness: F(),
      borderColor: [r],
      borderRadius: ["none", "", "full", Y, f],
      borderSpacing: y(),
      borderWidth: I(),
      contrast: F(),
      grayscale: D(),
      hueRotate: F(),
      invert: D(),
      gap: y(),
      gradientColorStops: [r],
      gradientColorStopPositions: [it, V],
      inset: te(),
      margin: te(),
      opacity: F(),
      padding: y(),
      saturate: F(),
      scale: F(),
      sepia: D(),
      skew: F(),
      space: y(),
      translate: y()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Y]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ne()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ne()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...$(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: re()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": re()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": re()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: K()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": K()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": K()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [P]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [P]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [P]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [P]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [P]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [P]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [P]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [P]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [P]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ce, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: te()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: D()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: D()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ce, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ue]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ce, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": L()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": L()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ue]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ce, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": L()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": L()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [T]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [T]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [T]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...X()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...X(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...X(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [v]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [v]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [v]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [v]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [v]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [v]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [v]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [v]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [v]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [C]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [C]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [C]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [C]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [C]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [C]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [C]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [C]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [C]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [fe]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [fe]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", f, o]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [f, o, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [f, o, "none", "full", "min", "max", "fit", "prose", {
          screen: [Y]
        }, Y]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, o, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [f, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, o, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [f, o, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Y, V]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", je]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ue]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Q, je]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", G, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [r]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [E]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [r]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [E]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...B(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", G, V]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", G, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [r]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: y()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [E]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...$(), ut]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ct]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, ft]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [r]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [z]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [z]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [z]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [A]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [A]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [A]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [l]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [l]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [l]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [l]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [l]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [l]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [l]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [l]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [l]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [l]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [l]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [l]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [l]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [l]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [l]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [E]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...B(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [i]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [E]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: B()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [c]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...B()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [G, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [G, V]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [r]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: I()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [r]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [E]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [G, V]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [r]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Y, pt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ue]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [E]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...oe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": oe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [a]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [p]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Y, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [R]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [h]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [_]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [J]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [a]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [p]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [R]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [h]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [_]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [E]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [J]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [u]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [u]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [u]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: F()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: F()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ce, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [pe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [pe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [de]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [de]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", r]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [r]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": y()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [r, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [G, V, je]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [r, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, vt = /* @__PURE__ */ Qr(ht);
function ar(...r) {
  return vt(Gr(...r));
}
const xt = ({ checked: r = !1, onChecked: o }) => {
  const a = () => {
    o(!r);
  };
  return /* @__PURE__ */ k.jsx("div", { className: "inline-flex items-center", children: /* @__PURE__ */ k.jsxs("label", { className: "flex items-center cursor-pointer relative", children: [
    /* @__PURE__ */ k.jsx("input", { type: "checkbox", checked: r, onChange: a, className: ar("peer h-5 w-5 cursor-pointer transition-all duration-300 appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-green-800 checked:border-green-800", r && ""), id: "check4" }),
    /* @__PURE__ */ k.jsx("span", { className: "absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2", children: /* @__PURE__ */ k.jsx(Wr, {}) })
  ] }) });
}, wt = ({ totalItems: r, itemsPerPage: o, onPageChange: a, currentPage: n }) => {
  const c = Math.ceil(r / o), l = (i) => {
    a(i);
  }, u = Array.from({ length: c }, (i, p) => p + 1);
  return /* @__PURE__ */ k.jsxs("div", { className: "flex gap-3 items-center", children: [
    /* @__PURE__ */ k.jsx(
      "button",
      {
        onClick: () => l(n - 1),
        disabled: n === 1,
        className: "px-2 py-1 text-sm  disabled:text-[#888888]",
        children: "Prev"
      }
    ),
    u.map((i) => /* @__PURE__ */ k.jsx(
      "button",
      {
        onClick: () => l(i),
        className: `w-7 h-7 rounded-lg flex items-center justify-center text-sm ${i === n ? "bg-green-800 text-white" : "bg-gray-200 hover:bg-gray-300"}`,
        children: i
      },
      i
    )),
    /* @__PURE__ */ k.jsx(
      "button",
      {
        onClick: () => l(n + 1),
        disabled: n === c,
        className: "px-2 py-1 text-sm  disabled:text-[#888888]",
        children: "Next"
      }
    )
  ] });
}, Rt = ({ isOpen: r, closePopup: o, children: a, className: n }) => {
  const c = Mr(null);
  return zr(() => {
    const l = (u) => {
      c.current && !c.current.contains(u.target) && o();
    };
    return r ? document.addEventListener("mousedown", l) : document.removeEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, [r, o]), /* @__PURE__ */ k.jsx(k.Fragment, { children: r && /* @__PURE__ */ k.jsx("div", { className: "fixed inset-0 flex items-center justify-center px-5 sm:px-0 bg-gray-800 bg-opacity-50 z-50", children: /* @__PURE__ */ k.jsxs(
    "div",
    {
      ref: c,
      className: ar("bg-white p-6 rounded-lg shadow-lg sm:w-1/3 w-full relative", n),
      children: [
        a,
        /* @__PURE__ */ k.jsx("button", { onClick: o, className: "absolute top-3 right-3", children: /* @__PURE__ */ k.jsx(Nr, {}) })
      ]
    }
  ) }) });
};
function Ct(r, o) {
  return r + o;
}
export {
  xt as Checkbox,
  wt as Pagination,
  Rt as Popup,
  Ct as calc
};
//# sourceMappingURL=index.es.js.map
