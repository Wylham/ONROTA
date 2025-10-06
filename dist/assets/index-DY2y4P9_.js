(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _a = { exports: {} },
  yl = {},
  za = { exports: {} },
  R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for("react.element"),
  Jc = Symbol.for("react.portal"),
  ed = Symbol.for("react.fragment"),
  td = Symbol.for("react.strict_mode"),
  nd = Symbol.for("react.profiler"),
  rd = Symbol.for("react.provider"),
  ld = Symbol.for("react.context"),
  od = Symbol.for("react.forward_ref"),
  id = Symbol.for("react.suspense"),
  sd = Symbol.for("react.memo"),
  ad = Symbol.for("react.lazy"),
  cs = Symbol.iterator;
function ud(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (cs && e[cs]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var La = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ma = Object.assign,
  Pa = {};
function pn(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Pa), (this.updater = n || La));
}
pn.prototype.isReactComponent = {};
pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ta() {}
Ta.prototype = pn.prototype;
function ci(e, t, n) {
  ((this.props = e), (this.context = t), (this.refs = Pa), (this.updater = n || La));
}
var di = (ci.prototype = new Ta());
di.constructor = ci;
Ma(di, pn.prototype);
di.isPureReactComponent = !0;
var ds = Array.isArray,
  Ra = Object.prototype.hasOwnProperty,
  fi = { current: null },
  Ia = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t))
      Ra.call(t, r) && !Ia.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), c = 0; c < a; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return { $$typeof: ur, type: e, key: o, ref: i, props: l, _owner: fi.current };
}
function cd(e, t) {
  return { $$typeof: ur, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ur;
}
function dd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fs = /\/+/g;
function Al(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? dd("" + e.key) : t.toString(36);
}
function Or(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ur:
          case Jc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Al(i, 0) : r),
      ds(l)
        ? ((n = ""),
          e != null && (n = e.replace(fs, "$&/") + "/"),
          Or(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (mi(l) &&
            (l = cd(
              l,
              n +
                (!l.key || (i && i.key === l.key) ? "" : ("" + l.key).replace(fs, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), ds(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Al(o, a);
      i += Or(o, t, n, u, l);
    }
  else if (((u = ud(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (u = r + Al(o, a++)), (i += Or(o, t, n, u, l)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      )
    );
  return i;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Or(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function fd(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ce = { current: null },
  Dr = { transition: null },
  md = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Dr, ReactCurrentOwner: fi };
function Da() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = {
  map: gr,
  forEach: function (e, t, n) {
    gr(
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
      gr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      gr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mi(e))
      throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
R.Component = pn;
R.Fragment = ed;
R.Profiler = nd;
R.PureComponent = ci;
R.StrictMode = td;
R.Suspense = id;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = md;
R.act = Da;
R.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " + e + "."
    );
  var r = Ma({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = fi.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      Ra.call(t, u) &&
        !Ia.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var c = 0; c < u; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
R.createContext = function (e) {
  return (
    (e = {
      $$typeof: ld,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rd, _context: e }),
    (e.Consumer = e)
  );
};
R.createElement = Oa;
R.createFactory = function (e) {
  var t = Oa.bind(null, e);
  return ((t.type = e), t);
};
R.createRef = function () {
  return { current: null };
};
R.forwardRef = function (e) {
  return { $$typeof: od, render: e };
};
R.isValidElement = mi;
R.lazy = function (e) {
  return { $$typeof: ad, _payload: { _status: -1, _result: e }, _init: fd };
};
R.memo = function (e, t) {
  return { $$typeof: sd, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function (e) {
  var t = Dr.transition;
  Dr.transition = {};
  try {
    e();
  } finally {
    Dr.transition = t;
  }
};
R.unstable_act = Da;
R.useCallback = function (e, t) {
  return ce.current.useCallback(e, t);
};
R.useContext = function (e) {
  return ce.current.useContext(e);
};
R.useDebugValue = function () {};
R.useDeferredValue = function (e) {
  return ce.current.useDeferredValue(e);
};
R.useEffect = function (e, t) {
  return ce.current.useEffect(e, t);
};
R.useId = function () {
  return ce.current.useId();
};
R.useImperativeHandle = function (e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function (e, t) {
  return ce.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function (e, t) {
  return ce.current.useLayoutEffect(e, t);
};
R.useMemo = function (e, t) {
  return ce.current.useMemo(e, t);
};
R.useReducer = function (e, t, n) {
  return ce.current.useReducer(e, t, n);
};
R.useRef = function (e) {
  return ce.current.useRef(e);
};
R.useState = function (e) {
  return ce.current.useState(e);
};
R.useSyncExternalStore = function (e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function () {
  return ce.current.useTransition();
};
R.version = "18.3.1";
za.exports = R;
var j = za.exports;
const pd = Zc(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd = j,
  gd = Symbol.for("react.element"),
  vd = Symbol.for("react.fragment"),
  xd = Object.prototype.hasOwnProperty,
  yd = hd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wd = { key: !0, ref: !0, __self: !0, __source: !0 };
function $a(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref));
  for (r in t) xd.call(t, r) && !wd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: gd, type: e, key: o, ref: i, props: l, _owner: yd.current };
}
yl.Fragment = vd;
yl.jsx = $a;
yl.jsxs = $a;
_a.exports = yl;
var s = _a.exports,
  vo = {},
  Aa = { exports: {} },
  ke = {},
  Fa = { exports: {} },
  Va = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var T = C.length;
    C.push(P);
    e: for (; 0 < T; ) {
      var G = (T - 1) >>> 1,
        Z = C[G];
      if (0 < l(Z, P)) ((C[G] = P), (C[T] = Z), (T = G));
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0],
      T = C.pop();
    if (T !== P) {
      C[0] = T;
      e: for (var G = 0, Z = C.length, pr = Z >>> 1; G < pr; ) {
        var jt = 2 * (G + 1) - 1,
          $l = C[jt],
          St = jt + 1,
          hr = C[St];
        if (0 > l($l, T))
          St < Z && 0 > l(hr, $l)
            ? ((C[G] = hr), (C[St] = T), (G = St))
            : ((C[G] = $l), (C[jt] = T), (G = jt));
        else if (St < Z && 0 > l(hr, T)) ((C[G] = hr), (C[St] = T), (G = St));
        else break e;
      }
    }
    return P;
  }
  function l(C, P) {
    var T = C.sortIndex - P.sortIndex;
    return T !== 0 ? T : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    c = [],
    d = 1,
    m = null,
    h = 3,
    v = !1,
    w = !1,
    y = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    p = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(C) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= C) (r(c), (P.sortIndex = P.expirationTime), t(u, P));
      else break;
      P = n(c);
    }
  }
  function x(C) {
    if (((y = !1), g(C), !w))
      if (n(u) !== null) ((w = !0), Ol(S));
      else {
        var P = n(c);
        P !== null && Dl(x, P.startTime - C);
      }
  }
  function S(C, P) {
    ((w = !1), y && ((y = !1), p(M), (M = -1)), (v = !0));
    var T = h;
    try {
      for (g(P), m = n(u); m !== null && (!(m.expirationTime > P) || (C && !Me())); ) {
        var G = m.callback;
        if (typeof G == "function") {
          ((m.callback = null), (h = m.priorityLevel));
          var Z = G(m.expirationTime <= P);
          ((P = e.unstable_now()),
            typeof Z == "function" ? (m.callback = Z) : m === n(u) && r(u),
            g(P));
        } else r(u);
        m = n(u);
      }
      if (m !== null) var pr = !0;
      else {
        var jt = n(c);
        (jt !== null && Dl(x, jt.startTime - P), (pr = !1));
      }
      return pr;
    } finally {
      ((m = null), (h = T), (v = !1));
    }
  }
  var _ = !1,
    z = null,
    M = -1,
    Q = 5,
    I = -1;
  function Me() {
    return !(e.unstable_now() - I < Q);
  }
  function vn() {
    if (z !== null) {
      var C = e.unstable_now();
      I = C;
      var P = !0;
      try {
        P = z(!0, C);
      } finally {
        P ? xn() : ((_ = !1), (z = null));
      }
    } else _ = !1;
  }
  var xn;
  if (typeof f == "function")
    xn = function () {
      f(vn);
    };
  else if (typeof MessageChannel < "u") {
    var us = new MessageChannel(),
      qc = us.port2;
    ((us.port1.onmessage = vn),
      (xn = function () {
        qc.postMessage(null);
      }));
  } else
    xn = function () {
      N(vn, 0);
    };
  function Ol(C) {
    ((z = C), _ || ((_ = !0), xn()));
  }
  function Dl(C, P) {
    M = N(function () {
      C(e.unstable_now());
    }, P);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Ol(S));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (Q = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var T = h;
      h = P;
      try {
        return C();
      } finally {
        h = T;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var T = h;
      h = C;
      try {
        return P();
      } finally {
        h = T;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, T) {
      var G = e.unstable_now();
      switch (
        (typeof T == "object" && T !== null
          ? ((T = T.delay), (T = typeof T == "number" && 0 < T ? G + T : G))
          : (T = G),
        C)
      ) {
        case 1:
          var Z = -1;
          break;
        case 2:
          Z = 250;
          break;
        case 5:
          Z = 1073741823;
          break;
        case 4:
          Z = 1e4;
          break;
        default:
          Z = 5e3;
      }
      return (
        (Z = T + Z),
        (C = {
          id: d++,
          callback: P,
          priorityLevel: C,
          startTime: T,
          expirationTime: Z,
          sortIndex: -1,
        }),
        T > G
          ? ((C.sortIndex = T),
            t(c, C),
            n(u) === null && C === n(c) && (y ? (p(M), (M = -1)) : (y = !0), Dl(x, T - G)))
          : ((C.sortIndex = Z), t(u, C), w || v || ((w = !0), Ol(S))),
        C
      );
    }),
    (e.unstable_shouldYield = Me),
    (e.unstable_wrapCallback = function (C) {
      var P = h;
      return function () {
        var T = h;
        h = P;
        try {
          return C.apply(this, arguments);
        } finally {
          h = T;
        }
      };
    }));
})(Va);
Fa.exports = Va;
var kd = Fa.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jd = j,
  we = kd;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Ba = new Set(),
  Wn = {};
function Dt(e, t) {
  (sn(e, t), sn(e + "Capture", t));
}
function sn(e, t) {
  for (Wn[e] = t, e = 0; e < t.length; e++) Ba.add(t[e]);
}
var Xe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xo = Object.prototype.hasOwnProperty,
  Sd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ms = {},
  ps = {};
function Nd(e) {
  return xo.call(ps, e) ? !0 : xo.call(ms, e) ? !1 : Sd.test(e) ? (ps[e] = !0) : ((ms[e] = !0), !1);
}
function Ed(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Cd(e, t, n, r) {
  if (t === null || typeof t > "u" || Ed(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function de(e, t, n, r, l, o, i) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i));
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var pi = /[\-:]([a-z])/g;
function hi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    re[t] = new de(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(pi, hi);
    re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(pi, hi);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function gi(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (Cd(t, n, l, r) && (n = null),
    r || l === null
      ? Nd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  vr = Symbol.for("react.element"),
  Vt = Symbol.for("react.portal"),
  Bt = Symbol.for("react.fragment"),
  vi = Symbol.for("react.strict_mode"),
  yo = Symbol.for("react.profiler"),
  Ua = Symbol.for("react.provider"),
  Ha = Symbol.for("react.context"),
  xi = Symbol.for("react.forward_ref"),
  wo = Symbol.for("react.suspense"),
  ko = Symbol.for("react.suspense_list"),
  yi = Symbol.for("react.memo"),
  nt = Symbol.for("react.lazy"),
  ba = Symbol.for("react.offscreen"),
  hs = Symbol.iterator;
function yn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hs && e[hs]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var b = Object.assign,
  Fl;
function zn(e) {
  if (Fl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fl = (t && t[1]) || "";
    }
  return (
    `
` +
    Fl +
    e
  );
}
var Vl = !1;
function Bl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
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
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    ((Vl = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function _d(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = Bl(e.type, !1)), e);
    case 11:
      return ((e = Bl(e.type.render, !1)), e);
    case 1:
      return ((e = Bl(e.type, !0)), e);
    default:
      return "";
  }
}
function jo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Bt:
      return "Fragment";
    case Vt:
      return "Portal";
    case yo:
      return "Profiler";
    case vi:
      return "StrictMode";
    case wo:
      return "Suspense";
    case ko:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ha:
        return (e.displayName || "Context") + ".Consumer";
      case Ua:
        return (e._context.displayName || "Context") + ".Provider";
      case xi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case yi:
        return ((t = e.displayName || null), t !== null ? t : jo(e.type) || "Memo");
      case nt:
        ((t = e._payload), (e = e._init));
        try {
          return jo(e(t));
        } catch {}
    }
  return null;
}
function zd(e) {
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
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
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
      return jo(t);
    case 8:
      return t === vi ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function vt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Wa(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Ld(e) {
  var t = Wa(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          ((r = "" + i), o.call(this, i));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function xr(e) {
  e._valueTracker || (e._valueTracker = Ld(e));
}
function Qa(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Wa(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function So(e, t) {
  var n = t.checked;
  return b({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function gs(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = vt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    }));
}
function Ga(e, t) {
  ((t = t.checked), t != null && gi(e, "checked", t, !1));
}
function No(e, t) {
  Ga(e, t);
  var n = vt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? Eo(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Eo(e, t.type, vt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked));
}
function vs(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function Eo(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      ((l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + vt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Co(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return b({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function xs(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: vt(n) };
}
function Ka(e, t) {
  var n = vt(t.value),
    r = vt(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ya(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function _o(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ya(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var yr,
  Xa = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        yr = yr || document.createElement("div"),
          yr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
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
  Md = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function (e) {
  Md.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (In[t] = In[e]));
  });
});
function qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (In.hasOwnProperty(e) && In[e])
      ? ("" + t).trim()
      : t + "px";
}
function Za(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = qa(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l));
    }
}
var Pd = b(
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
function zo(e, t) {
  if (t) {
    if (Pd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Lo(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var Mo = null;
function wi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Po = null,
  Jt = null,
  en = null;
function ws(e) {
  if ((e = fr(e))) {
    if (typeof Po != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Nl(t)), Po(e.stateNode, e.type, t));
  }
}
function Ja(e) {
  Jt ? (en ? en.push(e) : (en = [e])) : (Jt = e);
}
function eu() {
  if (Jt) {
    var e = Jt,
      t = en;
    if (((en = Jt = null), ws(e), t)) for (e = 0; e < t.length; e++) ws(t[e]);
  }
}
function tu(e, t) {
  return e(t);
}
function nu() {}
var Ul = !1;
function ru(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return tu(e, t, n);
  } finally {
    ((Ul = !1), (Jt !== null || en !== null) && (nu(), eu()));
  }
}
function Gn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Nl(n);
  if (r === null) return null;
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
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var To = !1;
if (Xe)
  try {
    var wn = {};
    (Object.defineProperty(wn, "passive", {
      get: function () {
        To = !0;
      },
    }),
      window.addEventListener("test", wn, wn),
      window.removeEventListener("test", wn, wn));
  } catch {
    To = !1;
  }
function Td(e, t, n, r, l, o, i, a, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var On = !1,
  Xr = null,
  qr = !1,
  Ro = null,
  Rd = {
    onError: function (e) {
      ((On = !0), (Xr = e));
    },
  };
function Id(e, t, n, r, l, o, i, a, u) {
  ((On = !1), (Xr = null), Td.apply(Rd, arguments));
}
function Od(e, t, n, r, l, o, i, a, u) {
  if ((Id.apply(this, arguments), On)) {
    if (On) {
      var c = Xr;
      ((On = !1), (Xr = null));
    } else throw Error(k(198));
    qr || ((qr = !0), (Ro = c));
  }
}
function $t(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function ks(e) {
  if ($t(e) !== e) throw Error(k(188));
}
function Dd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = $t(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return (ks(l), e);
        if (o === r) return (ks(l), t);
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) ((n = l), (r = o));
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          ((i = !0), (n = l), (r = o));
          break;
        }
        if (a === r) {
          ((i = !0), (r = l), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((i = !0), (n = o), (r = l));
            break;
          }
          if (a === r) {
            ((i = !0), (r = o), (n = l));
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function ou(e) {
  return ((e = Dd(e)), e !== null ? iu(e) : null);
}
function iu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = iu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var su = we.unstable_scheduleCallback,
  js = we.unstable_cancelCallback,
  $d = we.unstable_shouldYield,
  Ad = we.unstable_requestPaint,
  K = we.unstable_now,
  Fd = we.unstable_getCurrentPriorityLevel,
  ki = we.unstable_ImmediatePriority,
  au = we.unstable_UserBlockingPriority,
  Zr = we.unstable_NormalPriority,
  Vd = we.unstable_LowPriority,
  uu = we.unstable_IdlePriority,
  wl = null,
  He = null;
function Bd(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Oe = Math.clz32 ? Math.clz32 : bd,
  Ud = Math.log,
  Hd = Math.LN2;
function bd(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ud(e) / Hd) | 0)) | 0);
}
var wr = 64,
  kr = 4194304;
function Mn(e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
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
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Mn(a)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else ((i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - Oe(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
  return r;
}
function Wd(e, t) {
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
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qd(e, t) {
  for (
    var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Oe(o),
      a = 1 << i,
      u = l[i];
    (u === -1 ? (!(a & n) || a & r) && (l[i] = Wd(a, t)) : u <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function Io(e) {
  return ((e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0);
}
function cu() {
  var e = wr;
  return ((wr <<= 1), !(wr & 4194240) && (wr = 64), e);
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Oe(t)),
    (e[t] = n));
}
function Gd(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n),
      o = 1 << l;
    ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o));
  }
}
function ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n),
      l = 1 << r;
    ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
  }
}
var D = 0;
function du(e) {
  return ((e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1);
}
var fu,
  Si,
  mu,
  pu,
  hu,
  Oo = !1,
  jr = [],
  ut = null,
  ct = null,
  dt = null,
  Kn = new Map(),
  Yn = new Map(),
  lt = [],
  Kd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ss(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Kn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Yn.delete(t.pointerId);
  }
}
function kn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = fr(t)), t !== null && Si(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ((ut = kn(ut, e, t, n, r, l)), !0);
    case "dragenter":
      return ((ct = kn(ct, e, t, n, r, l)), !0);
    case "mouseover":
      return ((dt = kn(dt, e, t, n, r, l)), !0);
    case "pointerover":
      var o = l.pointerId;
      return (Kn.set(o, kn(Kn.get(o) || null, e, t, n, r, l)), !0);
    case "gotpointercapture":
      return ((o = l.pointerId), Yn.set(o, kn(Yn.get(o) || null, e, t, n, r, l)), !0);
  }
  return !1;
}
function gu(e) {
  var t = Ct(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lu(n)), t !== null)) {
          ((e.blockedOn = t),
            hu(e.priority, function () {
              mu(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function $r(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Do(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((Mo = r), n.target.dispatchEvent(r), (Mo = null));
    } else return ((t = fr(n)), t !== null && Si(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Ns(e, t, n) {
  $r(e) && n.delete(t);
}
function Xd() {
  ((Oo = !1),
    ut !== null && $r(ut) && (ut = null),
    ct !== null && $r(ct) && (ct = null),
    dt !== null && $r(dt) && (dt = null),
    Kn.forEach(Ns),
    Yn.forEach(Ns));
}
function jn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Oo || ((Oo = !0), we.unstable_scheduleCallback(we.unstable_NormalPriority, Xd)));
}
function Xn(e) {
  function t(l) {
    return jn(l, e);
  }
  if (0 < jr.length) {
    jn(jr[0], e);
    for (var n = 1; n < jr.length; n++) {
      var r = jr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ut !== null && jn(ut, e),
      ct !== null && jn(ct, e),
      dt !== null && jn(dt, e),
      Kn.forEach(t),
      Yn.forEach(t),
      n = 0;
    n < lt.length;
    n++
  )
    ((r = lt[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < lt.length && ((n = lt[0]), n.blockedOn === null); )
    (gu(n), n.blockedOn === null && lt.shift());
}
var tn = et.ReactCurrentBatchConfig,
  el = !0;
function qd(e, t, n, r) {
  var l = D,
    o = tn.transition;
  tn.transition = null;
  try {
    ((D = 1), Ni(e, t, n, r));
  } finally {
    ((D = l), (tn.transition = o));
  }
}
function Zd(e, t, n, r) {
  var l = D,
    o = tn.transition;
  tn.transition = null;
  try {
    ((D = 4), Ni(e, t, n, r));
  } finally {
    ((D = l), (tn.transition = o));
  }
}
function Ni(e, t, n, r) {
  if (el) {
    var l = Do(e, t, n, r);
    if (l === null) (Jl(e, t, r, tl, n), Ss(e, r));
    else if (Yd(l, e, t, n, r)) r.stopPropagation();
    else if ((Ss(e, r), t & 4 && -1 < Kd.indexOf(e))) {
      for (; l !== null; ) {
        var o = fr(l);
        if ((o !== null && fu(o), (o = Do(e, t, n, r)), o === null && Jl(e, t, r, tl, n), o === l))
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Jl(e, t, r, null, n);
  }
}
var tl = null;
function Do(e, t, n, r) {
  if (((tl = null), (e = wi(r)), (e = Ct(e)), e !== null))
    if (((t = $t(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((tl = e), null);
}
function vu(e) {
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
      switch (Fd()) {
        case ki:
          return 1;
        case au:
          return 4;
        case Zr:
        case Vd:
          return 16;
        case uu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var it = null,
  Ei = null,
  Ar = null;
function xu() {
  if (Ar) return Ar;
  var e,
    t = Ei,
    n = t.length,
    r,
    l = "value" in it ? it.value : it.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Ar = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Fr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Sr() {
  return !0;
}
function Es() {
  return !1;
}
function je(e) {
  function t(n, r, l, o, i) {
    ((this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null));
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Sr
        : Es),
      (this.isPropagationStopped = Es),
      this
    );
  }
  return (
    b(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Sr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Sr));
      },
      persist: function () {},
      isPersistent: Sr,
    }),
    t
  );
}
var hn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ci = je(hn),
  dr = b({}, hn, { view: 0, detail: 0 }),
  Jd = je(dr),
  bl,
  Wl,
  Sn,
  kl = b({}, dr, {
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
    getModifierState: _i,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Sn &&
            (Sn && e.type === "mousemove"
              ? ((bl = e.screenX - Sn.screenX), (Wl = e.screenY - Sn.screenY))
              : (Wl = bl = 0),
            (Sn = e)),
          bl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Wl;
    },
  }),
  Cs = je(kl),
  ef = b({}, kl, { dataTransfer: 0 }),
  tf = je(ef),
  nf = b({}, dr, { relatedTarget: 0 }),
  Ql = je(nf),
  rf = b({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lf = je(rf),
  of = b({}, hn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sf = je(of),
  af = b({}, hn, { data: 0 }),
  _s = je(af),
  uf = {
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
  cf = {
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
  df = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ff(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = df[e]) ? !!t[e] : !1;
}
function _i() {
  return ff;
}
var mf = b({}, dr, {
    key: function (e) {
      if (e.key) {
        var t = uf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Fr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? cf[e.keyCode] || "Unidentified"
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
    getModifierState: _i,
    charCode: function (e) {
      return e.type === "keypress" ? Fr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Fr(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  pf = je(mf),
  hf = b({}, kl, {
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
  }),
  zs = je(hf),
  gf = b({}, dr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _i,
  }),
  vf = je(gf),
  xf = b({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yf = je(xf),
  wf = b({}, kl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  kf = je(wf),
  jf = [9, 13, 27, 32],
  zi = Xe && "CompositionEvent" in window,
  Dn = null;
Xe && "documentMode" in document && (Dn = document.documentMode);
var Sf = Xe && "TextEvent" in window && !Dn,
  yu = Xe && (!zi || (Dn && 8 < Dn && 11 >= Dn)),
  Ls = " ",
  Ms = !1;
function wu(e, t) {
  switch (e) {
    case "keyup":
      return jf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ku(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Ut = !1;
function Nf(e, t) {
  switch (e) {
    case "compositionend":
      return ku(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ms = !0), Ls);
    case "textInput":
      return ((e = t.data), e === Ls && Ms ? null : e);
    default:
      return null;
  }
}
function Ef(e, t) {
  if (Ut)
    return e === "compositionend" || (!zi && wu(e, t))
      ? ((e = xu()), (Ar = Ei = it = null), (Ut = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return yu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cf = {
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
function Ps(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cf[e.type] : t === "textarea";
}
function ju(e, t, n, r) {
  (Ja(r),
    (t = nl(t, "onChange")),
    0 < t.length &&
      ((n = new Ci("onChange", "change", null, n, r)), e.push({ event: n, listeners: t })));
}
var $n = null,
  qn = null;
function _f(e) {
  Ru(e, 0);
}
function jl(e) {
  var t = Wt(e);
  if (Qa(t)) return e;
}
function zf(e, t) {
  if (e === "change") return t;
}
var Su = !1;
if (Xe) {
  var Gl;
  if (Xe) {
    var Kl = "oninput" in document;
    if (!Kl) {
      var Ts = document.createElement("div");
      (Ts.setAttribute("oninput", "return;"), (Kl = typeof Ts.oninput == "function"));
    }
    Gl = Kl;
  } else Gl = !1;
  Su = Gl && (!document.documentMode || 9 < document.documentMode);
}
function Rs() {
  $n && ($n.detachEvent("onpropertychange", Nu), (qn = $n = null));
}
function Nu(e) {
  if (e.propertyName === "value" && jl(qn)) {
    var t = [];
    (ju(t, qn, e, wi(e)), ru(_f, t));
  }
}
function Lf(e, t, n) {
  e === "focusin"
    ? (Rs(), ($n = t), (qn = n), $n.attachEvent("onpropertychange", Nu))
    : e === "focusout" && Rs();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return jl(qn);
}
function Pf(e, t) {
  if (e === "click") return jl(t);
}
function Tf(e, t) {
  if (e === "input" || e === "change") return jl(t);
}
function Rf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var $e = typeof Object.is == "function" ? Object.is : Rf;
function Zn(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xo.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function Is(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Os(e, t) {
  var n = Is(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Is(n);
  }
}
function Eu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Eu(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function Cu() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Li(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function If(e) {
  var t = Cu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Eu(n.ownerDocument.documentElement, n)) {
    if (r !== null && Li(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        ((n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        ((r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = Os(n, o)));
        var i = Os(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top));
  }
}
var Of = Xe && "documentMode" in document && 11 >= document.documentMode,
  Ht = null,
  $o = null,
  An = null,
  Ao = !1;
function Ds(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ao ||
    Ht == null ||
    Ht !== Yr(r) ||
    ((r = Ht),
    "selectionStart" in r && Li(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (An && Zn(An, r)) ||
      ((An = r),
      (r = nl($o, "onSelect")),
      0 < r.length &&
        ((t = new Ci("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ht))));
}
function Nr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bt = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionend: Nr("Transition", "TransitionEnd"),
  },
  Yl = {},
  _u = {};
Xe &&
  ((_u = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bt.animationend.animation,
    delete bt.animationiteration.animation,
    delete bt.animationstart.animation),
  "TransitionEvent" in window || delete bt.transitionend.transition);
function Sl(e) {
  if (Yl[e]) return Yl[e];
  if (!bt[e]) return e;
  var t = bt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in _u) return (Yl[e] = t[n]);
  return e;
}
var zu = Sl("animationend"),
  Lu = Sl("animationiteration"),
  Mu = Sl("animationstart"),
  Pu = Sl("transitionend"),
  Tu = new Map(),
  $s =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function yt(e, t) {
  (Tu.set(e, t), Dt(t, [e]));
}
for (var Xl = 0; Xl < $s.length; Xl++) {
  var ql = $s[Xl],
    Df = ql.toLowerCase(),
    $f = ql[0].toUpperCase() + ql.slice(1);
  yt(Df, "on" + $f);
}
yt(zu, "onAnimationEnd");
yt(Lu, "onAnimationIteration");
yt(Mu, "onAnimationStart");
yt("dblclick", "onDoubleClick");
yt("focusin", "onFocus");
yt("focusout", "onBlur");
yt(Pu, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
);
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Af = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function As(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Od(r, t, void 0, e), (e.currentTarget = null));
}
function Ru(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          (As(l, a, c), (o = u));
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          (As(l, a, c), (o = u));
        }
    }
  }
  if (qr) throw ((e = Ro), (qr = !1), (Ro = null), e);
}
function A(e, t) {
  var n = t[Ho];
  n === void 0 && (n = t[Ho] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Iu(t, e, 2, !1), n.add(r));
}
function Zl(e, t, n) {
  var r = 0;
  (t && (r |= 4), Iu(n, e, r, t));
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Jn(e) {
  if (!e[Er]) {
    ((e[Er] = !0),
      Ba.forEach(function (n) {
        n !== "selectionchange" && (Af.has(n) || Zl(n, !1, e), Zl(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Zl("selectionchange", !1, t));
  }
}
function Iu(e, t, n, r) {
  switch (vu(t)) {
    case 1:
      var l = qd;
      break;
    case 4:
      l = Zd;
      break;
    default:
      l = Ni;
  }
  ((n = l.bind(null, t, n, e)),
    (l = void 0),
    !To || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, { passive: l })
        : e.addEventListener(t, n, !1));
}
function Jl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo), u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Ct(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ru(function () {
    var c = o,
      d = wi(n),
      m = [];
    e: {
      var h = Tu.get(e);
      if (h !== void 0) {
        var v = Ci,
          w = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = pf;
            break;
          case "focusin":
            ((w = "focus"), (v = Ql));
            break;
          case "focusout":
            ((w = "blur"), (v = Ql));
            break;
          case "beforeblur":
          case "afterblur":
            v = Ql;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Cs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = tf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = vf;
            break;
          case zu:
          case Lu:
          case Mu:
            v = lf;
            break;
          case Pu:
            v = yf;
            break;
          case "scroll":
            v = Jd;
            break;
          case "wheel":
            v = kf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = sf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = zs;
        }
        var y = (t & 4) !== 0,
          N = !y && e === "scroll",
          p = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var f = c, g; f !== null; ) {
          g = f;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x), p !== null && ((x = Gn(f, p)), x != null && y.push(er(f, x, g)))),
            N)
          )
            break;
          f = f.return;
        }
        0 < y.length && ((h = new v(h, w, null, n, d)), m.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h && n !== Mo && (w = n.relatedTarget || n.fromElement) && (Ct(w) || w[qe]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? Ct(w) : null),
              w !== null && ((N = $t(w)), w !== N || (w.tag !== 5 && w.tag !== 6)) && (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((y = Cs),
            (x = "onMouseLeave"),
            (p = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = zs), (x = "onPointerLeave"), (p = "onPointerEnter"), (f = "pointer")),
            (N = v == null ? h : Wt(v)),
            (g = w == null ? h : Wt(w)),
            (h = new y(x, f + "leave", v, n, d)),
            (h.target = N),
            (h.relatedTarget = g),
            (x = null),
            Ct(d) === c &&
              ((y = new y(p, f + "enter", w, n, d)),
              (y.target = g),
              (y.relatedTarget = N),
              (x = y)),
            (N = x),
            v && w)
          )
            t: {
              for (y = v, p = w, f = 0, g = y; g; g = At(g)) f++;
              for (g = 0, x = p; x; x = At(x)) g++;
              for (; 0 < f - g; ) ((y = At(y)), f--);
              for (; 0 < g - f; ) ((p = At(p)), g--);
              for (; f--; ) {
                if (y === p || (p !== null && y === p.alternate)) break t;
                ((y = At(y)), (p = At(p)));
              }
              y = null;
            }
          else y = null;
          (v !== null && Fs(m, h, v, y, !1), w !== null && N !== null && Fs(m, N, w, y, !0));
        }
      }
      e: {
        if (
          ((h = c ? Wt(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var S = zf;
        else if (Ps(h))
          if (Su) S = Tf;
          else {
            S = Mf;
            var _ = Lf;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (S = Pf);
        if (S && (S = S(e, c))) {
          ju(m, S, n, d);
          break e;
        }
        (_ && _(e, h, c),
          e === "focusout" &&
            (_ = h._wrapperState) &&
            _.controlled &&
            h.type === "number" &&
            Eo(h, "number", h.value));
      }
      switch (((_ = c ? Wt(c) : window), e)) {
        case "focusin":
          (Ps(_) || _.contentEditable === "true") && ((Ht = _), ($o = c), (An = null));
          break;
        case "focusout":
          An = $o = Ht = null;
          break;
        case "mousedown":
          Ao = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Ao = !1), Ds(m, n, d));
          break;
        case "selectionchange":
          if (Of) break;
        case "keydown":
        case "keyup":
          Ds(m, n, d);
      }
      var z;
      if (zi)
        e: {
          switch (e) {
            case "compositionstart":
              var M = "onCompositionStart";
              break e;
            case "compositionend":
              M = "onCompositionEnd";
              break e;
            case "compositionupdate":
              M = "onCompositionUpdate";
              break e;
          }
          M = void 0;
        }
      else
        Ut
          ? wu(e, n) && (M = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (M = "onCompositionStart");
      (M &&
        (yu &&
          n.locale !== "ko" &&
          (Ut || M !== "onCompositionStart"
            ? M === "onCompositionEnd" && Ut && (z = xu())
            : ((it = d), (Ei = "value" in it ? it.value : it.textContent), (Ut = !0))),
        (_ = nl(c, M)),
        0 < _.length &&
          ((M = new _s(M, e, null, n, d)),
          m.push({ event: M, listeners: _ }),
          z ? (M.data = z) : ((z = ku(n)), z !== null && (M.data = z)))),
        (z = Sf ? Nf(e, n) : Ef(e, n)) &&
          ((c = nl(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new _s("onBeforeInput", "beforeinput", null, n, d)),
            m.push({ event: d, listeners: c }),
            (d.data = z))));
    }
    Ru(m, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function nl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    (l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Gn(e, n)),
      o != null && r.unshift(er(e, o, l)),
      (o = Gn(e, t)),
      o != null && r.push(er(e, o, l))),
      (e = e.return));
  }
  return r;
}
function At(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Fs(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      c = a.stateNode;
    if (u !== null && u === r) break;
    (a.tag === 5 &&
      c !== null &&
      ((a = c),
      l
        ? ((u = Gn(n, o)), u != null && i.unshift(er(n, u, a)))
        : l || ((u = Gn(n, o)), u != null && i.push(er(n, u, a)))),
      (n = n.return));
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ff = /\r\n?/g,
  Vf = /\u0000|\uFFFD/g;
function Vs(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ff,
      `
`
    )
    .replace(Vf, "");
}
function Cr(e, t, n) {
  if (((t = Vs(t)), Vs(e) !== t && n)) throw Error(k(425));
}
function rl() {}
var Fo = null,
  Vo = null;
function Bo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Uo = typeof setTimeout == "function" ? setTimeout : void 0,
  Bf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Bs = typeof Promise == "function" ? Promise : void 0,
  Uf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Bs < "u"
        ? function (e) {
            return Bs.resolve(null).then(e).catch(Hf);
          }
        : Uo;
function Hf(e) {
  setTimeout(function () {
    throw e;
  });
}
function eo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(l), Xn(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xn(t);
}
function ft(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Us(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var gn = Math.random().toString(36).slice(2),
  Ue = "__reactFiber$" + gn,
  tr = "__reactProps$" + gn,
  qe = "__reactContainer$" + gn,
  Ho = "__reactEvents$" + gn,
  bf = "__reactListeners$" + gn,
  Wf = "__reactHandles$" + gn;
function Ct(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[Ue])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Us(e); e !== null; ) {
          if ((n = e[Ue])) return n;
          e = Us(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function fr(e) {
  return (
    (e = e[Ue] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Wt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Nl(e) {
  return e[tr] || null;
}
var bo = [],
  Qt = -1;
function wt(e) {
  return { current: e };
}
function F(e) {
  0 > Qt || ((e.current = bo[Qt]), (bo[Qt] = null), Qt--);
}
function $(e, t) {
  (Qt++, (bo[Qt] = e.current), (e.current = t));
}
var xt = {},
  se = wt(xt),
  pe = wt(!1),
  Pt = xt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return ((e = e.childContextTypes), e != null);
}
function ll() {
  (F(pe), F(se));
}
function Hs(e, t, n) {
  if (se.current !== xt) throw Error(k(168));
  ($(se, t), $(pe, n));
}
function Ou(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, zd(e) || "Unknown", l));
  return b({}, n, r);
}
function ol(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || xt),
    (Pt = se.current),
    $(se, e),
    $(pe, pe.current),
    !0
  );
}
function bs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  (n
    ? ((e = Ou(e, t, Pt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(pe),
      F(se),
      $(se, e))
    : F(pe),
    $(pe, n));
}
var Qe = null,
  El = !1,
  to = !1;
function Du(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
function Qf(e) {
  ((El = !0), Du(e));
}
function kt() {
  if (!to && Qe !== null) {
    to = !0;
    var e = 0,
      t = D;
    try {
      var n = Qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Qe = null), (El = !1));
    } catch (l) {
      throw (Qe !== null && (Qe = Qe.slice(e + 1)), su(ki, kt), l);
    } finally {
      ((D = t), (to = !1));
    }
  }
  return null;
}
var Gt = [],
  Kt = 0,
  il = null,
  sl = 0,
  Ne = [],
  Ee = 0,
  Tt = null,
  Ge = 1,
  Ke = "";
function Nt(e, t) {
  ((Gt[Kt++] = sl), (Gt[Kt++] = il), (il = e), (sl = t));
}
function $u(e, t, n) {
  ((Ne[Ee++] = Ge), (Ne[Ee++] = Ke), (Ne[Ee++] = Tt), (Tt = e));
  var r = Ge;
  e = Ke;
  var l = 32 - Oe(r) - 1;
  ((r &= ~(1 << l)), (n += 1));
  var o = 32 - Oe(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    ((o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ge = (1 << (32 - Oe(t) + l)) | (n << l) | r),
      (Ke = o + e));
  } else ((Ge = (1 << o) | (n << l) | r), (Ke = e));
}
function Mi(e) {
  e.return !== null && (Nt(e, 1), $u(e, 1, 0));
}
function Pi(e) {
  for (; e === il; ) ((il = Gt[--Kt]), (Gt[Kt] = null), (sl = Gt[--Kt]), (Gt[Kt] = null));
  for (; e === Tt; )
    ((Tt = Ne[--Ee]),
      (Ne[Ee] = null),
      (Ke = Ne[--Ee]),
      (Ne[Ee] = null),
      (Ge = Ne[--Ee]),
      (Ne[Ee] = null));
}
var ye = null,
  xe = null,
  V = !1,
  Ie = null;
function Au(e, t) {
  var n = Ce(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function Ws(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (xe = ft(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Tt !== null ? { id: Ge, overflow: Ke } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Wo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qo(e) {
  if (V) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Ws(e, t)) {
        if (Wo(e)) throw Error(k(418));
        t = ft(n.nextSibling);
        var r = ye;
        t && Ws(e, t) ? Au(r, n) : ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
      }
    } else {
      if (Wo(e)) throw Error(k(418));
      ((e.flags = (e.flags & -4097) | 2), (V = !1), (ye = e));
    }
  }
}
function Qs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function _r(e) {
  if (e !== ye) return !1;
  if (!V) return (Qs(e), (V = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Wo(e)) throw (Fu(), Error(k(418)));
    for (; t; ) (Au(e, t), (t = ft(t.nextSibling)));
  }
  if ((Qs(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = ft(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = ye ? ft(e.stateNode.nextSibling) : null;
  return !0;
}
function Fu() {
  for (var e = xe; e; ) e = ft(e.nextSibling);
}
function un() {
  ((xe = ye = null), (V = !1));
}
function Ti(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Gf = et.ReactCurrentBatchConfig;
function Nn(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function zr(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)
    )
  );
}
function Gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Vu(e) {
  function t(p, f) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) (t(p, f), (f = f.sibling));
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      (f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling));
    return p;
  }
  function l(p, f) {
    return ((p = gt(p, f)), (p.index = 0), (p.sibling = null), p);
  }
  function o(p, f, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g) : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return (e && p.alternate === null && (p.flags |= 2), p);
  }
  function a(p, f, g, x) {
    return f === null || f.tag !== 6
      ? ((f = ao(g, p.mode, x)), (f.return = p), f)
      : ((f = l(f, g)), (f.return = p), f);
  }
  function u(p, f, g, x) {
    var S = g.type;
    return S === Bt
      ? d(p, f, g.props.children, x, g.key)
      : f !== null &&
          (f.elementType === S ||
            (typeof S == "object" && S !== null && S.$$typeof === nt && Gs(S) === f.type))
        ? ((x = l(f, g.props)), (x.ref = Nn(p, f, g)), (x.return = p), x)
        : ((x = Qr(g.type, g.key, g.props, null, p.mode, x)),
          (x.ref = Nn(p, f, g)),
          (x.return = p),
          x);
  }
  function c(p, f, g, x) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = uo(g, p.mode, x)), (f.return = p), f)
      : ((f = l(f, g.children || [])), (f.return = p), f);
  }
  function d(p, f, g, x, S) {
    return f === null || f.tag !== 7
      ? ((f = Mt(g, p.mode, x, S)), (f.return = p), f)
      : ((f = l(f, g)), (f.return = p), f);
  }
  function m(p, f, g) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return ((f = ao("" + f, p.mode, g)), (f.return = p), f);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case vr:
          return (
            (g = Qr(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = Nn(p, null, f)),
            (g.return = p),
            g
          );
        case Vt:
          return ((f = uo(f, p.mode, g)), (f.return = p), f);
        case nt:
          var x = f._init;
          return m(p, x(f._payload), g);
      }
      if (Ln(f) || yn(f)) return ((f = Mt(f, p.mode, g, null)), (f.return = p), f);
      zr(p, f);
    }
    return null;
  }
  function h(p, f, g, x) {
    var S = f !== null ? f.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return S !== null ? null : a(p, f, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case vr:
          return g.key === S ? u(p, f, g, x) : null;
        case Vt:
          return g.key === S ? c(p, f, g, x) : null;
        case nt:
          return ((S = g._init), h(p, f, S(g._payload), x));
      }
      if (Ln(g) || yn(g)) return S !== null ? null : d(p, f, g, x, null);
      zr(p, g);
    }
    return null;
  }
  function v(p, f, g, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return ((p = p.get(g) || null), a(f, p, "" + x, S));
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case vr:
          return ((p = p.get(x.key === null ? g : x.key) || null), u(f, p, x, S));
        case Vt:
          return ((p = p.get(x.key === null ? g : x.key) || null), c(f, p, x, S));
        case nt:
          var _ = x._init;
          return v(p, f, g, _(x._payload), S);
      }
      if (Ln(x) || yn(x)) return ((p = p.get(g) || null), d(f, p, x, S, null));
      zr(f, x);
    }
    return null;
  }
  function w(p, f, g, x) {
    for (var S = null, _ = null, z = f, M = (f = 0), Q = null; z !== null && M < g.length; M++) {
      z.index > M ? ((Q = z), (z = null)) : (Q = z.sibling);
      var I = h(p, z, g[M], x);
      if (I === null) {
        z === null && (z = Q);
        break;
      }
      (e && z && I.alternate === null && t(p, z),
        (f = o(I, f, M)),
        _ === null ? (S = I) : (_.sibling = I),
        (_ = I),
        (z = Q));
    }
    if (M === g.length) return (n(p, z), V && Nt(p, M), S);
    if (z === null) {
      for (; M < g.length; M++)
        ((z = m(p, g[M], x)),
          z !== null && ((f = o(z, f, M)), _ === null ? (S = z) : (_.sibling = z), (_ = z)));
      return (V && Nt(p, M), S);
    }
    for (z = r(p, z); M < g.length; M++)
      ((Q = v(z, p, M, g[M], x)),
        Q !== null &&
          (e && Q.alternate !== null && z.delete(Q.key === null ? M : Q.key),
          (f = o(Q, f, M)),
          _ === null ? (S = Q) : (_.sibling = Q),
          (_ = Q)));
    return (
      e &&
        z.forEach(function (Me) {
          return t(p, Me);
        }),
      V && Nt(p, M),
      S
    );
  }
  function y(p, f, g, x) {
    var S = yn(g);
    if (typeof S != "function") throw Error(k(150));
    if (((g = S.call(g)), g == null)) throw Error(k(151));
    for (
      var _ = (S = null), z = f, M = (f = 0), Q = null, I = g.next();
      z !== null && !I.done;
      M++, I = g.next()
    ) {
      z.index > M ? ((Q = z), (z = null)) : (Q = z.sibling);
      var Me = h(p, z, I.value, x);
      if (Me === null) {
        z === null && (z = Q);
        break;
      }
      (e && z && Me.alternate === null && t(p, z),
        (f = o(Me, f, M)),
        _ === null ? (S = Me) : (_.sibling = Me),
        (_ = Me),
        (z = Q));
    }
    if (I.done) return (n(p, z), V && Nt(p, M), S);
    if (z === null) {
      for (; !I.done; M++, I = g.next())
        ((I = m(p, I.value, x)),
          I !== null && ((f = o(I, f, M)), _ === null ? (S = I) : (_.sibling = I), (_ = I)));
      return (V && Nt(p, M), S);
    }
    for (z = r(p, z); !I.done; M++, I = g.next())
      ((I = v(z, p, M, I.value, x)),
        I !== null &&
          (e && I.alternate !== null && z.delete(I.key === null ? M : I.key),
          (f = o(I, f, M)),
          _ === null ? (S = I) : (_.sibling = I),
          (_ = I)));
    return (
      e &&
        z.forEach(function (vn) {
          return t(p, vn);
        }),
      V && Nt(p, M),
      S
    );
  }
  function N(p, f, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Bt &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case vr:
          e: {
            for (var S = g.key, _ = f; _ !== null; ) {
              if (_.key === S) {
                if (((S = g.type), S === Bt)) {
                  if (_.tag === 7) {
                    (n(p, _.sibling), (f = l(_, g.props.children)), (f.return = p), (p = f));
                    break e;
                  }
                } else if (
                  _.elementType === S ||
                  (typeof S == "object" && S !== null && S.$$typeof === nt && Gs(S) === _.type)
                ) {
                  (n(p, _.sibling),
                    (f = l(_, g.props)),
                    (f.ref = Nn(p, _, g)),
                    (f.return = p),
                    (p = f));
                  break e;
                }
                n(p, _);
                break;
              } else t(p, _);
              _ = _.sibling;
            }
            g.type === Bt
              ? ((f = Mt(g.props.children, p.mode, x, g.key)), (f.return = p), (p = f))
              : ((x = Qr(g.type, g.key, g.props, null, p.mode, x)),
                (x.ref = Nn(p, f, g)),
                (x.return = p),
                (p = x));
          }
          return i(p);
        case Vt:
          e: {
            for (_ = g.key; f !== null; ) {
              if (f.key === _)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  (n(p, f.sibling), (f = l(f, g.children || [])), (f.return = p), (p = f));
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            ((f = uo(g, p.mode, x)), (f.return = p), (p = f));
          }
          return i(p);
        case nt:
          return ((_ = g._init), N(p, f, _(g._payload), x));
      }
      if (Ln(g)) return w(p, f, g, x);
      if (yn(g)) return y(p, f, g, x);
      zr(p, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = l(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = ao(g, p.mode, x)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return N;
}
var cn = Vu(!0),
  Bu = Vu(!1),
  al = wt(null),
  ul = null,
  Yt = null,
  Ri = null;
function Ii() {
  Ri = Yt = ul = null;
}
function Oi(e) {
  var t = al.current;
  (F(al), (e._currentValue = t));
}
function Go(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function nn(e, t) {
  ((ul = e),
    (Ri = Yt = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), (e.firstContext = null)));
}
function ze(e) {
  var t = e._currentValue;
  if (Ri !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Yt === null)) {
      if (ul === null) throw Error(k(308));
      ((Yt = e), (ul.dependencies = { lanes: 0, firstContext: e }));
    } else Yt = Yt.next = e;
  return t;
}
var _t = null;
function Di(e) {
  _t === null ? (_t = [e]) : _t.push(e);
}
function Uu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Di(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ze(e, r)
  );
}
function Ze(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var rt = !1;
function $i(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Hu(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Ye(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ze(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Di(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ze(e, n)
  );
}
function Vr(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n));
  }
}
function Ks(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (l = o = i) : (o = o.next = i), (n = n.next));
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function cl(e, t, n, r) {
  var l = e.updateQueue;
  rt = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      c = u.next;
    ((u.next = null), i === null ? (o = c) : (i.next = c), (i = u));
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i && (a === null ? (d.firstBaseUpdate = c) : (a.next = c), (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var m = l.baseState;
    ((i = 0), (d = c = u = null), (a = o));
    do {
      var h = a.lane,
        v = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: v,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var w = e,
            y = a;
          switch (((h = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                m = w.call(v, m, h);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (((w = y.payload), (h = typeof w == "function" ? w.call(v, m, h) : w), h == null))
                break e;
              m = b({}, m, h);
              break e;
            case 2:
              rt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (h = l.effects), h === null ? (l.effects = [a]) : h.push(a));
      } else
        ((v = {
          eventTime: v,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = v), (u = m)) : (d = d.next = v),
          (i |= h));
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        ((h = a), (a = h.next), (h.next = null), (l.lastBaseUpdate = h), (l.shared.pending = null));
      }
    } while (!0);
    if (
      (d === null && (u = m),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do ((i |= l.lane), (l = l.next));
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    ((It |= i), (e.lanes = i), (e.memoizedState = m));
  }
}
function Ys(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function")) throw Error(k(191, l));
        l.call(r);
      }
    }
}
var mr = {},
  be = wt(mr),
  nr = wt(mr),
  rr = wt(mr);
function zt(e) {
  if (e === mr) throw Error(k(174));
  return e;
}
function Ai(e, t) {
  switch (($(rr, t), $(nr, e), $(be, mr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : _o(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = _o(t, e)));
  }
  (F(be), $(be, t));
}
function dn() {
  (F(be), F(nr), F(rr));
}
function bu(e) {
  zt(rr.current);
  var t = zt(be.current),
    n = _o(t, e.type);
  t !== n && ($(nr, e), $(be, n));
}
function Fi(e) {
  nr.current === e && (F(be), F(nr));
}
var U = wt(0);
function dl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!"))
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var no = [];
function Vi() {
  for (var e = 0; e < no.length; e++) no[e]._workInProgressVersionPrimary = null;
  no.length = 0;
}
var Br = et.ReactCurrentDispatcher,
  ro = et.ReactCurrentBatchConfig,
  Rt = 0,
  H = null,
  X = null,
  J = null,
  fl = !1,
  Fn = !1,
  lr = 0,
  Kf = 0;
function le() {
  throw Error(k(321));
}
function Bi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Ui(e, t, n, r, l, o) {
  if (
    ((Rt = o),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? Zf : Jf),
    (e = n(r, l)),
    Fn)
  ) {
    o = 0;
    do {
      if (((Fn = !1), (lr = 0), 25 <= o)) throw Error(k(301));
      ((o += 1), (J = X = null), (t.updateQueue = null), (Br.current = em), (e = n(r, l)));
    } while (Fn);
  }
  if (
    ((Br.current = ml),
    (t = X !== null && X.next !== null),
    (Rt = 0),
    (J = X = H = null),
    (fl = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Hi() {
  var e = lr !== 0;
  return ((lr = 0), e);
}
function Be() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (J === null ? (H.memoizedState = J = e) : (J = J.next = e), J);
}
function Le() {
  if (X === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) ((J = t), (X = e));
  else {
    if (e === null) throw Error(k(310));
    ((X = e),
      (e = {
        memoizedState: X.memoizedState,
        baseState: X.baseState,
        baseQueue: X.baseQueue,
        queue: X.queue,
        next: null,
      }),
      J === null ? (H.memoizedState = J = e) : (J = J.next = e));
  }
  return J;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function lo(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      ((l.next = o.next), (o.next = i));
    }
    ((r.baseQueue = l = o), (n.pending = null));
  }
  if (l !== null) {
    ((o = l.next), (r = r.baseState));
    var a = (i = null),
      u = null,
      c = o;
    do {
      var d = c.lane;
      if ((Rt & d) === d)
        (u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action)));
      else {
        var m = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        (u === null ? ((a = u = m), (i = r)) : (u = u.next = m), (H.lanes |= d), (It |= d));
      }
      c = c.next;
    } while (c !== null && c !== o);
    (u === null ? (i = r) : (u.next = a),
      $e(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do ((o = l.lane), (H.lanes |= o), (It |= o), (l = l.next));
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oo(e) {
  var t = Le(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do ((o = e(o, i.action)), (i = i.next));
    while (i !== l);
    ($e(o, t.memoizedState) || (me = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function Wu() {}
function Qu(e, t) {
  var n = H,
    r = Le(),
    l = t(),
    o = !$e(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    bi(Yu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (J !== null && J.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), ir(9, Ku.bind(null, n, r, l, t), void 0, null), ee === null))
      throw Error(k(349));
    Rt & 30 || Gu(n, t, l);
  }
  return l;
}
function Gu(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function Ku(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Xu(t) && qu(e));
}
function Yu(e, t, n) {
  return n(function () {
    Xu(t) && qu(e);
  });
}
function Xu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function qu(e) {
  var t = Ze(e, 1);
  t !== null && De(t, e, 1, -1);
}
function Xs(e) {
  var t = Be();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = qf.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (H.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zu() {
  return Le().memoizedState;
}
function Ur(e, t, n, r) {
  var l = Be();
  ((H.flags |= e), (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r)));
}
function Cl(e, t, n, r) {
  var l = Le();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (X !== null) {
    var i = X.memoizedState;
    if (((o = i.destroy), r !== null && Bi(r, i.deps))) {
      l.memoizedState = ir(t, n, o, r);
      return;
    }
  }
  ((H.flags |= e), (l.memoizedState = ir(1 | t, n, o, r)));
}
function qs(e, t) {
  return Ur(8390656, 8, e, t);
}
function bi(e, t) {
  return Cl(2048, 8, e, t);
}
function Ju(e, t) {
  return Cl(4, 2, e, t);
}
function ec(e, t) {
  return Cl(4, 4, e, t);
}
function tc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nc(e, t, n) {
  return ((n = n != null ? n.concat([e]) : null), Cl(4, 4, tc.bind(null, t, e), n));
}
function Wi() {}
function rc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function lc(e, t) {
  var n = Le();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function oc(e, t, n) {
  return Rt & 21
    ? ($e(n, t) || ((n = cu()), (H.lanes |= n), (It |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Yf(e, t) {
  var n = D;
  ((D = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = ro.transition;
  ro.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((D = n), (ro.transition = r));
  }
}
function ic() {
  return Le().memoizedState;
}
function Xf(e, t, n) {
  var r = ht(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), sc(e)))
    ac(t, n);
  else if (((n = Uu(e, t, n, r)), n !== null)) {
    var l = ue();
    (De(n, e, r, l), uc(n, t, r));
  }
}
function qf(e, t, n) {
  var r = ht(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (sc(e)) ac(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), $e(a, i))) {
          var u = t.interleaved;
          (u === null ? ((l.next = l), Di(t)) : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l));
          return;
        }
      } catch {
      } finally {
      }
    ((n = Uu(e, t, l, r)), n !== null && ((l = ue()), De(n, e, r, l), uc(n, t, r)));
  }
}
function sc(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function ac(e, t) {
  Fn = fl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
}
function uc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n));
  }
}
var ml = {
    readContext: ze,
    useCallback: le,
    useContext: le,
    useEffect: le,
    useImperativeHandle: le,
    useInsertionEffect: le,
    useLayoutEffect: le,
    useMemo: le,
    useReducer: le,
    useRef: le,
    useState: le,
    useDebugValue: le,
    useDeferredValue: le,
    useTransition: le,
    useMutableSource: le,
    useSyncExternalStore: le,
    useId: le,
    unstable_isNewReconciler: !1,
  },
  Zf = {
    readContext: ze,
    useCallback: function (e, t) {
      return ((Be().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: ze,
    useEffect: qs,
    useImperativeHandle: function (e, t, n) {
      return ((n = n != null ? n.concat([e]) : null), Ur(4194308, 4, tc.bind(null, t, e), n));
    },
    useLayoutEffect: function (e, t) {
      return Ur(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ur(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Be();
      return ((t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e);
    },
    useReducer: function (e, t, n) {
      var r = Be();
      return (
        (t = n !== void 0 ? n(t) : t),
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
        (e = e.dispatch = Xf.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Be();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: Xs,
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      return (Be().memoizedState = e);
    },
    useTransition: function () {
      var e = Xs(!1),
        t = e[0];
      return ((e = Yf.bind(null, e[1])), (Be().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = Be();
      if (V) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        Rt & 30 || Gu(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        qs(Yu.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ir(9, Ku.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Be(),
        t = ee.identifierPrefix;
      if (V) {
        var n = Ke,
          r = Ge;
        ((n = (r & ~(1 << (32 - Oe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = Kf++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jf = {
    readContext: ze,
    useCallback: rc,
    useContext: ze,
    useEffect: bi,
    useImperativeHandle: nc,
    useInsertionEffect: Ju,
    useLayoutEffect: ec,
    useMemo: lc,
    useReducer: lo,
    useRef: Zu,
    useState: function () {
      return lo(or);
    },
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      var t = Le();
      return oc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = lo(or)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Wu,
    useSyncExternalStore: Qu,
    useId: ic,
    unstable_isNewReconciler: !1,
  },
  em = {
    readContext: ze,
    useCallback: rc,
    useContext: ze,
    useEffect: bi,
    useImperativeHandle: nc,
    useInsertionEffect: Ju,
    useLayoutEffect: ec,
    useMemo: lc,
    useReducer: oo,
    useRef: Zu,
    useState: function () {
      return oo(or);
    },
    useDebugValue: Wi,
    useDeferredValue: function (e) {
      var t = Le();
      return X === null ? (t.memoizedState = e) : oc(t, X.memoizedState, e);
    },
    useTransition: function () {
      var e = oo(or)[0],
        t = Le().memoizedState;
      return [e, t];
    },
    useMutableSource: Wu,
    useSyncExternalStore: Qu,
    useId: ic,
    unstable_isNewReconciler: !1,
  };
function Te(e, t) {
  if (e && e.defaultProps) {
    ((t = b({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ko(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : b({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var _l = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? $t(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ht(e),
      o = Ye(r, l);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = mt(e, o, l)),
      t !== null && (De(t, e, l, r), Vr(t, e, l)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = ht(e),
      o = Ye(r, l);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = mt(e, o, l)),
      t !== null && (De(t, e, l, r), Vr(t, e, l)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = ht(e),
      l = Ye(n, r);
    ((l.tag = 2),
      t != null && (l.callback = t),
      (t = mt(e, l, r)),
      t !== null && (De(t, e, r, n), Vr(t, e, r)));
  },
};
function Zs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Zn(n, r) || !Zn(l, o)
        : !0
  );
}
function cc(e, t, n) {
  var r = !1,
    l = xt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ze(o))
      : ((l = he(t) ? Pt : se.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? an(e, l) : xt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _l),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Js(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _l.enqueueReplaceState(t, t.state, null));
}
function Yo(e, t, n, r) {
  var l = e.stateNode;
  ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), $i(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (l.context = ze(o))
    : ((o = he(t) ? Pt : se.current), (l.context = an(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ko(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
      t !== l.state && _l.enqueueReplaceState(l, l.state, null),
      cl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308));
}
function fn(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += _d(r)), (r = r.return));
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function io(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Xo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var tm = typeof WeakMap == "function" ? WeakMap : Map;
function dc(e, t, n) {
  ((n = Ye(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (hl || ((hl = !0), (ii = r)), Xo(e, t));
    }),
    n
  );
}
function fc(e, t, n) {
  ((n = Ye(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    ((n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Xo(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Xo(e, t), typeof r != "function" && (pt === null ? (pt = new Set([this])) : pt.add(this)));
        var i = t.stack;
        this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
      }),
    n
  );
}
function ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new tm();
    var l = new Set();
    r.set(t, l);
  } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
  l.has(n) || (l.add(n), (e = hm.bind(null, e, t, n)), t.then(e, e));
}
function ta(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function na(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((t = Ye(-1, 1)), (t.tag = 2), mt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var nm = et.ReactCurrentOwner,
  me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Bu(t, null, n, r) : cn(t, e.child, n, r);
}
function ra(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    nn(t, l),
    (r = Ui(e, t, n, r, o, l)),
    (n = Hi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Je(e, t, l))
      : (V && n && Mi(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function la(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ji(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), mc(e, t, o, r, l))
      : ((e = Qr(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Zn), n(i, r) && e.ref === t.ref))
      return Je(e, t, l);
  }
  return ((t.flags |= 1), (e = gt(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Zn(o, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0)) e.flags & 131072 && (me = !0);
      else return ((t.lanes = e.lanes), Je(e, t, l));
  }
  return qo(e, t, n, r, l);
}
function pc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(qt, ve),
        (ve |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          $(qt, ve),
          (ve |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        $(qt, ve),
        (ve |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(qt, ve),
      (ve |= r));
  return (ae(e, t, l, n), t.child);
}
function hc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qo(e, t, n, r, l) {
  var o = he(n) ? Pt : se.current;
  return (
    (o = an(t, o)),
    nn(t, l),
    (n = Ui(e, t, n, r, o, l)),
    (r = Hi()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Je(e, t, l))
      : (V && r && Mi(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function oa(e, t, n, r, l) {
  if (he(n)) {
    var o = !0;
    ol(t);
  } else o = !1;
  if ((nn(t, l), t.stateNode === null)) (Hr(e, t), cc(t, n, r), Yo(t, n, r, l), (r = !0));
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ze(c))
      : ((c = he(n) ? Pt : se.current), (c = an(t, c)));
    var d = n.getDerivedStateFromProps,
      m = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    (m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== c) && Js(t, i, r, c)),
      (rt = !1));
    var h = t.memoizedState;
    ((i.state = h),
      cl(t, r, i, l),
      (u = t.memoizedState),
      a !== r || h !== u || pe.current || rt
        ? (typeof d == "function" && (Ko(t, n, d, r), (u = t.memoizedState)),
          (a = rt || Zs(t, n, a, r, h, u, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" && i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = c),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), (r = !1)));
  } else {
    ((i = t.stateNode),
      Hu(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Te(t.type, a)),
      (i.props = c),
      (m = t.pendingProps),
      (h = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ze(u))
        : ((u = he(n) ? Pt : se.current), (u = an(t, u))));
    var v = n.getDerivedStateFromProps;
    ((d = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== m || h !== u) && Js(t, i, r, u)),
      (rt = !1),
      (h = t.memoizedState),
      (i.state = h),
      cl(t, r, i, l));
    var w = t.memoizedState;
    a !== m || h !== w || pe.current || rt
      ? (typeof v == "function" && (Ko(t, n, v, r), (w = t.memoizedState)),
        (c = rt || Zs(t, n, c, r, h, w, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = u),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zo(e, t, n, r, o, l);
}
function Zo(e, t, n, r, l, o) {
  hc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return (l && bs(t, n, !1), Je(e, t, o));
  ((r = t.stateNode), (nm.current = t));
  var a = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = cn(t, e.child, null, o)), (t.child = cn(t, null, a, o)))
      : ae(e, t, a, o),
    (t.memoizedState = r.state),
    l && bs(t, n, !0),
    t.child
  );
}
function gc(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? Hs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Hs(e, t.context, !1),
    Ai(e, t.containerInfo));
}
function ia(e, t, n, r, l) {
  return (un(), Ti(l), (t.flags |= 256), ae(e, t, n, r), t.child);
}
var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function vc(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    $(U, l & 1),
    e === null)
  )
    return (
      Qo(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Ml(i, r, 0, null)),
              (e = Mt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ei(n)),
              (t.memoizedState = Jo),
              e)
            : Qi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return rm(e, t, i, r, a, l, n);
  if (o) {
    ((o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling));
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = gt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = gt(a, o)) : ((o = Mt(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ei(n)
          : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = gt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qi(e, t) {
  return (
    (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Lr(e, t, n, r) {
  return (
    r !== null && Ti(r),
    cn(t, e.child, null, n),
    (e = Qi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function rm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = io(Error(k(422)))), Lr(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = Ml({ mode: "visible", children: r.children }, l, 0, null)),
          (o = Mt(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && cn(t, e.child, null, i),
          (t.child.memoizedState = ei(i)),
          (t.memoizedState = Jo),
          o);
  if (!(t.mode & 1)) return Lr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return ((r = a), (o = Error(k(419))), (r = io(o, r, void 0)), Lr(e, t, i, r));
  }
  if (((a = (i & e.childLanes) !== 0), me || a)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      ((l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 && l !== o.retryLane && ((o.retryLane = l), Ze(e, l), De(r, e, l, -1)));
    }
    return (Zi(), (r = io(Error(k(421)))), Lr(e, t, i, r));
  }
  return l.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = gm.bind(null, e)), (l._reactRetry = t), null)
    : ((e = o.treeContext),
      (xe = ft(l.nextSibling)),
      (ye = t),
      (V = !0),
      (Ie = null),
      e !== null &&
        ((Ne[Ee++] = Ge),
        (Ne[Ee++] = Ke),
        (Ne[Ee++] = Tt),
        (Ge = e.id),
        (Ke = e.overflow),
        (Tt = t)),
      (t = Qi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Go(e.return, t, n));
}
function so(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function xc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ae(e, t, r.children, n), (r = U.current), r & 2)) ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if (($(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          ((e = n.alternate), e !== null && dl(e) === null && (l = n), (n = n.sibling));
        ((n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          so(t, !1, l, n, o));
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && dl(e) === null)) {
            t.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
        }
        so(t, !0, n, null, o);
        break;
      case "together":
        so(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Hr(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Je(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (It |= t.lanes), !(n & t.childLanes)))
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      ((e = e.sibling), (n = n.sibling = gt(e, e.pendingProps)), (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function lm(e, t, n) {
  switch (t.tag) {
    case 3:
      (gc(t), un());
      break;
    case 5:
      bu(t);
      break;
    case 1:
      he(t.type) && ol(t);
      break;
    case 4:
      Ai(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ($(al, r._currentValue), (r._currentValue = l));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? vc(e, t, n)
            : ($(U, U.current & 1), (e = Je(e, t, n)), e !== null ? e.sibling : null);
      $(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return xc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        $(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), pc(e, t, n));
  }
  return Je(e, t, n);
}
var yc, ti, wc, kc;
yc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
ti = function () {};
wc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    ((e = t.stateNode), zt(be.current));
    var o = null;
    switch (n) {
      case "input":
        ((l = So(e, l)), (r = So(e, r)), (o = []));
        break;
      case "select":
        ((l = b({}, l, { value: void 0 })), (r = b({}, r, { value: void 0 })), (o = []));
        break;
      case "textarea":
        ((l = Co(e, l)), (r = Co(e, r)), (o = []));
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = rl);
    }
    zo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var a = l[c];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Wn.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((a = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== a && (u != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ""));
            for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
          } else (n || (o || (o = []), o.push(c, n)), (n = u));
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(c, u))
            : c === "children"
              ? (typeof u != "string" && typeof u != "number") || (o = o || []).push(c, "" + u)
              : c !== "suppressContentEditableWarning" &&
                c !== "suppressHydrationWarning" &&
                (Wn.hasOwnProperty(c)
                  ? (u != null && c === "onScroll" && A("scroll", e), o || a === u || (o = []))
                  : (o = o || []).push(c, u));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
kc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!V)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling));
  else
    for (l = e.child; l !== null; )
      ((n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function om(e, t, n) {
  var r = t.pendingProps;
  switch ((Pi(t), t.tag)) {
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
      return (oe(t), null);
    case 1:
      return (he(t.type) && ll(), oe(t), null);
    case 3:
      return (
        (r = t.stateNode),
        dn(),
        F(pe),
        F(se),
        Vi(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (ui(Ie), (Ie = null)))),
        ti(e, t),
        oe(t),
        null
      );
    case 5:
      Fi(t);
      var l = zt(rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (wc(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return (oe(t), null);
        }
        if (((e = zt(be.current)), _r(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[Ue] = t), (r[tr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (A("cancel", r), A("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pn.length; l++) A(Pn[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (A("error", r), A("load", r));
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              (gs(r, o), A("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }), A("invalid", r));
              break;
            case "textarea":
              (xs(r, o), A("invalid", r));
          }
          (zo(n, o), (l = null));
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && Cr(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 && Cr(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Wn.hasOwnProperty(i) && a != null && i === "onScroll" && A("scroll", r);
            }
          switch (n) {
            case "input":
              (xr(r), vs(r, o, !0));
              break;
            case "textarea":
              (xr(r), ys(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = rl);
          }
          ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ya(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = i.createElement(n, { is: r.is }))
                  : ((e = i.createElement(n)),
                    n === "select" &&
                      ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ue] = t),
            (e[tr] = r),
            yc(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((i = Lo(n, r)), n)) {
              case "dialog":
                (A("cancel", e), A("close", e), (l = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (A("load", e), (l = r));
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pn.length; l++) A(Pn[l], e);
                l = r;
                break;
              case "source":
                (A("error", e), (l = r));
                break;
              case "img":
              case "image":
              case "link":
                (A("error", e), A("load", e), (l = r));
                break;
              case "details":
                (A("toggle", e), (l = r));
                break;
              case "input":
                (gs(e, r), (l = So(e, r)), A("invalid", e));
                break;
              case "option":
                l = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = b({}, r, { value: void 0 })),
                  A("invalid", e));
                break;
              case "textarea":
                (xs(e, r), (l = Co(e, r)), A("invalid", e));
                break;
              default:
                l = r;
            }
            (zo(n, l), (a = l));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Za(e, u)
                  : o === "dangerouslySetInnerHTML"
                    ? ((u = u ? u.__html : void 0), u != null && Xa(e, u))
                    : o === "children"
                      ? typeof u == "string"
                        ? (n !== "textarea" || u !== "") && Qn(e, u)
                        : typeof u == "number" && Qn(e, "" + u)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (Wn.hasOwnProperty(o)
                          ? u != null && o === "onScroll" && A("scroll", e)
                          : u != null && gi(e, o, u, i));
              }
            switch (n) {
              case "input":
                (xr(e), vs(e, r, !1));
                break;
              case "textarea":
                (xr(e), ys(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + vt(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && Zt(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = rl);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (oe(t), null);
    case 6:
      if (e && t.stateNode != null) kc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = zt(rr.current)), zt(be.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ue] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ue] = t),
            (t.stateNode = r));
      }
      return (oe(t), null);
    case 13:
      if (
        (F(U),
        (r = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && xe !== null && t.mode & 1 && !(t.flags & 128))
          (Fu(), un(), (t.flags |= 98560), (o = !1));
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o))
              throw Error(k(317));
            o[Ue] = t;
          } else (un(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (oe(t), (o = !1));
        } else (Ie !== null && (ui(Ie), (Ie = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 && (e === null || U.current & 1 ? q === 0 && (q = 3) : Zi())),
          t.updateQueue !== null && (t.flags |= 4),
          oe(t),
          null);
    case 4:
      return (dn(), ti(e, t), e === null && Jn(t.stateNode.containerInfo), oe(t), null);
    case 10:
      return (Oi(t.type._context), oe(t), null);
    case 17:
      return (he(t.type) && ll(), oe(t), null);
    case 19:
      if ((F(U), (o = t.memoizedState), o === null)) return (oe(t), null);
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) En(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = dl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    En(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling));
                return ($(U, (U.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            K() > mn &&
            ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = dl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              En(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return (oe(t), null);
          } else
            2 * K() - o.renderingStartTime > mn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), En(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = K()),
          (t.sibling = null),
          (n = U.current),
          $(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (oe(t), null);
    case 22:
    case 23:
      return (
        qi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ve & 1073741824 && (oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function im(e, t) {
  switch ((Pi(t), t.tag)) {
    case 1:
      return (
        he(t.type) && ll(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        dn(),
        F(pe),
        F(se),
        Vi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (Fi(t), null);
    case 13:
      if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        un();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (F(U), null);
    case 4:
      return (dn(), null);
    case 10:
      return (Oi(t.type._context), null);
    case 22:
    case 23:
      return (qi(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1,
  ie = !1,
  sm = typeof WeakSet == "function" ? WeakSet : Set,
  E = null;
function Xt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        W(e, t, r);
      }
    else n.current = null;
}
function ni(e, t, n) {
  try {
    n();
  } catch (r) {
    W(e, t, r);
  }
}
var aa = !1;
function am(e, t) {
  if (((Fo = el), (e = Cu()), Li(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            c = 0,
            d = 0,
            m = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (a = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (u = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              ((h = m), (m = v));
            for (;;) {
              if (m === e) break t;
              if (
                (h === n && ++c === l && (a = i),
                h === o && ++d === r && (u = i),
                (v = m.nextSibling) !== null)
              )
                break;
              ((m = h), (h = m.parentNode));
            }
            m = v;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vo = { focusedElem: e, selectionRange: n }, el = !1, E = t; E !== null; )
    if (((t = E), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (E = e));
    else
      for (; E !== null; ) {
        t = E;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    N = w.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Te(t.type, y), N);
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 && g.documentElement && g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (x) {
          W(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (E = e));
          break;
        }
        E = t.return;
      }
  return ((w = aa), (aa = !1), w);
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        ((l.destroy = void 0), o !== void 0 && ni(t, n, o));
      }
      l = l.next;
    } while (l !== r);
  }
}
function zl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
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
function ri(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jc(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), jc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null && (delete t[Ue], delete t[tr], delete t[Ho], delete t[bf], delete t[Wf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function Sc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ua(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = rl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (li(e, t, n), e = e.sibling; e !== null; ) (li(e, t, n), (e = e.sibling));
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oi(e, t, n), e = e.sibling; e !== null; ) (oi(e, t, n), (e = e.sibling));
}
var te = null,
  Re = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) (Nc(e, t, n), (n = n.sibling));
}
function Nc(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(wl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || Xt(n, t);
    case 6:
      var r = te,
        l = Re;
      ((te = null),
        tt(e, t, n),
        (te = r),
        (Re = l),
        te !== null &&
          (Re
            ? ((e = te),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : te.removeChild(n.stateNode)));
      break;
    case 18:
      te !== null &&
        (Re
          ? ((e = te),
            (n = n.stateNode),
            e.nodeType === 8 ? eo(e.parentNode, n) : e.nodeType === 1 && eo(e, n),
            Xn(e))
          : eo(te, n.stateNode));
      break;
    case 4:
      ((r = te),
        (l = Re),
        (te = n.stateNode.containerInfo),
        (Re = !0),
        tt(e, t, n),
        (te = r),
        (Re = l));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ie && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          ((o = o.tag), i !== void 0 && (o & 2 || o & 4) && ni(n, t, i), (l = l.next));
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ie && (Xt(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ((r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount());
        } catch (a) {
          W(n, t, a);
        }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), tt(e, t, n), (ie = r))
        : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new sm()),
      t.forEach(function (r) {
        var l = vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      }));
  }
}
function Pe(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((te = a.stateNode), (Re = !1));
              break e;
            case 3:
              ((te = a.stateNode.containerInfo), (Re = !0));
              break e;
            case 4:
              ((te = a.stateNode.containerInfo), (Re = !0));
              break e;
          }
          a = a.return;
        }
        if (te === null) throw Error(k(160));
        (Nc(o, i, l), (te = null), (Re = !1));
        var u = l.alternate;
        (u !== null && (u.return = null), (l.return = null));
      } catch (c) {
        W(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) (Ec(t, e), (t = t.sibling));
}
function Ec(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Pe(t, e), Fe(e), r & 4)) {
        try {
          (Vn(3, e, e.return), zl(3, e));
        } catch (y) {
          W(e, e.return, y);
        }
        try {
          Vn(5, e, e.return);
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 1:
      (Pe(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return));
      break;
    case 5:
      if ((Pe(t, e), Fe(e), r & 512 && n !== null && Xt(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          Qn(l, "");
        } catch (y) {
          W(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && Ga(l, o), Lo(a, i));
            var c = Lo(a, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                m = u[i + 1];
              d === "style"
                ? Za(l, m)
                : d === "dangerouslySetInnerHTML"
                  ? Xa(l, m)
                  : d === "children"
                    ? Qn(l, m)
                    : gi(l, d, m, c);
            }
            switch (a) {
              case "input":
                No(l, o);
                break;
              case "textarea":
                Ka(l, o);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? Zt(l, !!o.multiple, v, !1)
                  : h !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zt(l, !!o.multiple, o.defaultValue, !0)
                      : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tr] = o;
          } catch (y) {
            W(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Pe(t, e), Fe(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        ((l = e.stateNode), (o = e.memoizedProps));
        try {
          l.nodeValue = o;
        } catch (y) {
          W(e, e.return, y);
        }
      }
      break;
    case 3:
      if ((Pe(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Xn(t.containerInfo);
        } catch (y) {
          W(e, e.return, y);
        }
      break;
    case 4:
      (Pe(t, e), Fe(e));
      break;
    case 13:
      (Pe(t, e),
        Fe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Yi = K())),
        r & 4 && ca(e));
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || d), Pe(t, e), (ie = c)) : Pe(t, e),
        Fe(e),
        r & 8192)
      ) {
        if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !d && e.mode & 1))
          for (E = e, d = e.child; d !== null; ) {
            for (m = E = d; E !== null; ) {
              switch (((h = E), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vn(4, h, h.return);
                  break;
                case 1:
                  Xt(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    ((r = h), (n = h.return));
                    try {
                      ((t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount());
                    } catch (y) {
                      W(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Xt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    fa(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (E = v)) : fa(m);
            }
            d = d.sibling;
          }
        e: for (d = null, m = e; ; ) {
          if (m.tag === 5) {
            if (d === null) {
              d = m;
              try {
                ((l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = m.stateNode),
                      (u = m.memoizedProps.style),
                      (i = u != null && u.hasOwnProperty("display") ? u.display : null),
                      (a.style.display = qa("display", i))));
              } catch (y) {
                W(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (d === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (y) {
                W(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) &&
            m.child !== null
          ) {
            ((m.child.return = m), (m = m.child));
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            (d === m && (d = null), (m = m.return));
          }
          (d === m && (d = null), (m.sibling.return = m.return), (m = m.sibling));
        }
      }
      break;
    case 19:
      (Pe(t, e), Fe(e), r & 4 && ca(e));
      break;
    case 21:
      break;
    default:
      (Pe(t, e), Fe(e));
  }
}
function Fe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Qn(l, ""), (r.flags &= -33));
          var o = ua(e);
          oi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = ua(e);
          li(e, a, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      W(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function um(e, t, n) {
  ((E = e), Cc(e));
}
function Cc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Mr;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || ie;
        a = Mr;
        var c = ie;
        if (((Mr = i), (ie = u) && !c))
          for (E = l; E !== null; )
            ((i = E),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? ma(l)
                : u !== null
                  ? ((u.return = i), (E = u))
                  : ma(l));
        for (; o !== null; ) ((E = o), Cc(o), (o = o.sibling));
        ((E = l), (Mr = a), (ie = c));
      }
      da(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (E = o)) : da(e);
  }
}
function da(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || zl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Ys(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ys(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
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
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var m = d.dehydrated;
                    m !== null && Xn(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        ie || (t.flags & 512 && ri(t));
      } catch (h) {
        W(t, t.return, h);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function fa(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (E = n));
      break;
    }
    E = t.return;
  }
}
function ma(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zl(4, t);
          } catch (u) {
            W(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              W(t, l, u);
            }
          }
          var o = t.return;
          try {
            ri(t);
          } catch (u) {
            W(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ri(t);
          } catch (u) {
            W(t, i, u);
          }
      }
    } catch (u) {
      W(t, t.return, u);
    }
    if (t === e) {
      E = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (E = a));
      break;
    }
    E = t.return;
  }
}
var cm = Math.ceil,
  pl = et.ReactCurrentDispatcher,
  Gi = et.ReactCurrentOwner,
  _e = et.ReactCurrentBatchConfig,
  O = 0,
  ee = null,
  Y = null,
  ne = 0,
  ve = 0,
  qt = wt(0),
  q = 0,
  sr = null,
  It = 0,
  Ll = 0,
  Ki = 0,
  Bn = null,
  fe = null,
  Yi = 0,
  mn = 1 / 0,
  We = null,
  hl = !1,
  ii = null,
  pt = null,
  Pr = !1,
  st = null,
  gl = 0,
  Un = 0,
  si = null,
  br = -1,
  Wr = 0;
function ue() {
  return O & 6 ? K() : br !== -1 ? br : (br = K());
}
function ht(e) {
  return e.mode & 1
    ? O & 2 && ne !== 0
      ? ne & -ne
      : Gf.transition !== null
        ? (Wr === 0 && (Wr = cu()), Wr)
        : ((e = D), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : vu(e.type))), e)
    : 1;
}
function De(e, t, n, r) {
  if (50 < Un) throw ((Un = 0), (si = null), Error(k(185)));
  (cr(e, n, r),
    (!(O & 2) || e !== ee) &&
      (e === ee && (!(O & 2) && (Ll |= n), q === 4 && ot(e, ne)),
      ge(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((mn = K() + 500), El && kt())));
}
function ge(e, t) {
  var n = e.callbackNode;
  Qd(e, t);
  var r = Jr(e, e === ee ? ne : 0);
  if (r === 0) (n !== null && js(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && js(n), t === 1))
      (e.tag === 0 ? Qf(pa.bind(null, e)) : Du(pa.bind(null, e)),
        Uf(function () {
          !(O & 6) && kt();
        }),
        (n = null));
    else {
      switch (du(r)) {
        case 1:
          n = ki;
          break;
        case 4:
          n = au;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = uu;
          break;
        default:
          n = Zr;
      }
      n = Ic(n, _c.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function _c(e, t) {
  if (((br = -1), (Wr = 0), O & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (rn() && e.callbackNode !== n) return null;
  var r = Jr(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vl(e, r);
  else {
    t = r;
    var l = O;
    O |= 2;
    var o = Lc();
    (ee !== e || ne !== t) && ((We = null), (mn = K() + 500), Lt(e, t));
    do
      try {
        mm();
        break;
      } catch (a) {
        zc(e, a);
      }
    while (!0);
    (Ii(), (pl.current = o), (O = l), Y !== null ? (t = 0) : ((ee = null), (ne = 0), (t = q)));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Io(e)), l !== 0 && ((r = l), (t = ai(e, l)))), t === 1))
      throw ((n = sr), Lt(e, 0), ot(e, r), ge(e, K()), n);
    if (t === 6) ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !dm(l) &&
          ((t = vl(e, r)), t === 2 && ((o = Io(e)), o !== 0 && ((r = o), (t = ai(e, o)))), t === 1))
      )
        throw ((n = sr), Lt(e, 0), ot(e, r), ge(e, K()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Et(e, fe, We);
          break;
        case 3:
          if ((ot(e, r), (r & 130023424) === r && ((t = Yi + 500 - K()), 10 < t))) {
            if (Jr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              (ue(), (e.pingedLanes |= e.suspendedLanes & l));
              break;
            }
            e.timeoutHandle = Uo(Et.bind(null, e, fe, We), t);
            break;
          }
          Et(e, fe, We);
          break;
        case 4:
          if ((ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Oe(r);
            ((o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o));
          }
          if (
            ((r = l),
            (r = K() - r),
            (r =
              (120 > r
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
                          : 1960 * cm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Uo(Et.bind(null, e, fe, We), r);
            break;
          }
          Et(e, fe, We);
          break;
        case 5:
          Et(e, fe, We);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return (ge(e, K()), e.callbackNode === n ? _c.bind(null, e) : null);
}
function ai(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
    (e = vl(e, t)),
    e !== 2 && ((t = fe), (fe = n), t !== null && ui(t)),
    e
  );
}
function ui(e) {
  fe === null ? (fe = e) : fe.push.apply(fe, e);
}
function dm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!$e(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function ot(e, t) {
  for (
    t &= ~Ki, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Oe(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function pa(e) {
  if (O & 6) throw Error(k(327));
  rn();
  var t = Jr(e, 0);
  if (!(t & 1)) return (ge(e, K()), null);
  var n = vl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Io(e);
    r !== 0 && ((t = r), (n = ai(e, r)));
  }
  if (n === 1) throw ((n = sr), Lt(e, 0), ot(e, t), ge(e, K()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Et(e, fe, We),
    ge(e, K()),
    null
  );
}
function Xi(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    ((O = n), O === 0 && ((mn = K() + 500), El && kt()));
  }
}
function Ot(e) {
  st !== null && st.tag === 0 && !(O & 6) && rn();
  var t = O;
  O |= 1;
  var n = _e.transition,
    r = D;
  try {
    if (((_e.transition = null), (D = 1), e)) return e();
  } finally {
    ((D = r), (_e.transition = n), (O = t), !(O & 6) && kt());
  }
}
function qi() {
  ((ve = qt.current), F(qt));
}
function Lt(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bf(n)), Y !== null))
    for (n = Y.return; n !== null; ) {
      var r = n;
      switch ((Pi(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && ll());
          break;
        case 3:
          (dn(), F(pe), F(se), Vi());
          break;
        case 5:
          Fi(r);
          break;
        case 4:
          dn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          Oi(r.type._context);
          break;
        case 22:
        case 23:
          qi();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Y = e = gt(e.current, null)),
    (ne = ve = t),
    (q = 0),
    (sr = null),
    (Ki = Ll = It = 0),
    (fe = Bn = null),
    _t !== null)
  ) {
    for (t = 0; t < _t.length; t++)
      if (((n = _t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          ((o.next = l), (r.next = i));
        }
        n.pending = r;
      }
    _t = null;
  }
  return e;
}
function zc(e, t) {
  do {
    var n = Y;
    try {
      if ((Ii(), (Br.current = ml), fl)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          (l !== null && (l.pending = null), (r = r.next));
        }
        fl = !1;
      }
      if (
        ((Rt = 0),
        (J = X = H = null),
        (Fn = !1),
        (lr = 0),
        (Gi.current = null),
        n === null || n.return === null)
      ) {
        ((q = 1), (sr = t), (Y = null));
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = ne),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            d = a,
            m = d.tag;
          if (!(d.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var v = ta(i);
          if (v !== null) {
            ((v.flags &= -257), na(v, i, a, o, t), v.mode & 1 && ea(o, c, t), (t = v), (u = c));
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              (y.add(u), (t.updateQueue = y));
            } else w.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              (ea(o, c, t), Zi());
              break e;
            }
            u = Error(k(426));
          }
        } else if (V && a.mode & 1) {
          var N = ta(i);
          if (N !== null) {
            (!(N.flags & 65536) && (N.flags |= 256), na(N, i, a, o, t), Ti(fn(u, a)));
            break e;
          }
        }
        ((o = u = fn(u, a)), q !== 4 && (q = 2), Bn === null ? (Bn = [o]) : Bn.push(o), (o = i));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var p = dc(o, u, t);
              Ks(o, p);
              break e;
            case 1:
              a = u;
              var f = o.type,
                g = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (pt === null || !pt.has(g))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var x = fc(o, a, t);
                Ks(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Pc(n);
    } catch (S) {
      ((t = S), Y === n && n !== null && (Y = n = n.return));
      continue;
    }
    break;
  } while (!0);
}
function Lc() {
  var e = pl.current;
  return ((pl.current = ml), e === null ? ml : e);
}
function Zi() {
  ((q === 0 || q === 3 || q === 2) && (q = 4),
    ee === null || (!(It & 268435455) && !(Ll & 268435455)) || ot(ee, ne));
}
function vl(e, t) {
  var n = O;
  O |= 2;
  var r = Lc();
  (ee !== e || ne !== t) && ((We = null), Lt(e, t));
  do
    try {
      fm();
      break;
    } catch (l) {
      zc(e, l);
    }
  while (!0);
  if ((Ii(), (O = n), (pl.current = r), Y !== null)) throw Error(k(261));
  return ((ee = null), (ne = 0), q);
}
function fm() {
  for (; Y !== null; ) Mc(Y);
}
function mm() {
  for (; Y !== null && !$d(); ) Mc(Y);
}
function Mc(e) {
  var t = Rc(e.alternate, e, ve);
  ((e.memoizedProps = e.pendingProps), t === null ? Pc(e) : (Y = t), (Gi.current = null));
}
function Pc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = im(n, t)), n !== null)) {
        ((n.flags &= 32767), (Y = n));
        return;
      }
      if (e !== null) ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((q = 6), (Y = null));
        return;
      }
    } else if (((n = om(n, t, ve)), n !== null)) {
      Y = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Et(e, t, n) {
  var r = D,
    l = _e.transition;
  try {
    ((_e.transition = null), (D = 1), pm(e, t, n, r));
  } finally {
    ((_e.transition = l), (D = r));
  }
  return null;
}
function pm(e, t, n, r) {
  do rn();
  while (st !== null);
  if (O & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(k(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Gd(e, o),
    e === ee && ((Y = ee = null), (ne = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pr ||
      ((Pr = !0),
      Ic(Zr, function () {
        return (rn(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = _e.transition), (_e.transition = null));
    var i = D;
    D = 1;
    var a = O;
    ((O |= 4),
      (Gi.current = null),
      am(e, n),
      Ec(n, e),
      If(Vo),
      (el = !!Fo),
      (Vo = Fo = null),
      (e.current = n),
      um(n),
      Ad(),
      (O = a),
      (D = i),
      (_e.transition = o));
  } else e.current = n;
  if (
    (Pr && ((Pr = !1), (st = e), (gl = l)),
    (o = e.pendingLanes),
    o === 0 && (pt = null),
    Bd(n.stateNode),
    ge(e, K()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
  if (hl) throw ((hl = !1), (e = ii), (ii = null), e);
  return (
    gl & 1 && e.tag !== 0 && rn(),
    (o = e.pendingLanes),
    o & 1 ? (e === si ? Un++ : ((Un = 0), (si = e))) : (Un = 0),
    kt(),
    null
  );
}
function rn() {
  if (st !== null) {
    var e = du(gl),
      t = _e.transition,
      n = D;
    try {
      if (((_e.transition = null), (D = 16 > e ? 16 : e), st === null)) var r = !1;
      else {
        if (((e = st), (st = null), (gl = 0), O & 6)) throw Error(k(331));
        var l = O;
        for (O |= 4, E = e.current; E !== null; ) {
          var o = E,
            i = o.child;
          if (E.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var c = a[u];
                for (E = c; E !== null; ) {
                  var d = E;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, d, o);
                  }
                  var m = d.child;
                  if (m !== null) ((m.return = d), (E = m));
                  else
                    for (; E !== null; ) {
                      d = E;
                      var h = d.sibling,
                        v = d.return;
                      if ((jc(d), d === c)) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        ((h.return = v), (E = h));
                        break;
                      }
                      E = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var N = y.sibling;
                    ((y.sibling = null), (y = N));
                  } while (y !== null);
                }
              }
              E = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) ((i.return = o), (E = i));
          else
            e: for (; E !== null; ) {
              if (((o = E), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vn(9, o, o.return);
                }
              var p = o.sibling;
              if (p !== null) {
                ((p.return = o.return), (E = p));
                break e;
              }
              E = o.return;
            }
        }
        var f = e.current;
        for (E = f; E !== null; ) {
          i = E;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) ((g.return = i), (E = g));
          else
            e: for (i = f; E !== null; ) {
              if (((a = E), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zl(9, a);
                  }
                } catch (S) {
                  W(a, a.return, S);
                }
              if (a === i) {
                E = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                ((x.return = a.return), (E = x));
                break e;
              }
              E = a.return;
            }
        }
        if (((O = l), kt(), He && typeof He.onPostCommitFiberRoot == "function"))
          try {
            He.onPostCommitFiberRoot(wl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((D = n), (_e.transition = t));
    }
  }
  return !1;
}
function ha(e, t, n) {
  ((t = fn(n, t)),
    (t = dc(e, t, 1)),
    (e = mt(e, t, 1)),
    (t = ue()),
    e !== null && (cr(e, 1, t), ge(e, t)));
}
function W(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (pt === null || !pt.has(r)))
        ) {
          ((e = fn(n, e)),
            (e = fc(t, e, 1)),
            (t = mt(t, e, 1)),
            (e = ue()),
            t !== null && (cr(t, 1, e), ge(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function hm(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (ne & n) === n &&
      (q === 4 || (q === 3 && (ne & 130023424) === ne && 500 > K() - Yi) ? Lt(e, 0) : (Ki |= n)),
    ge(e, t));
}
function Tc(e, t) {
  t === 0 && (e.mode & 1 ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304)) : (t = 1));
  var n = ue();
  ((e = Ze(e, t)), e !== null && (cr(e, t, n), ge(e, n)));
}
function gm(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), Tc(e, n));
}
function vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  (r !== null && r.delete(t), Tc(e, n));
}
var Rc;
Rc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || pe.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((me = !1), lm(e, t, n));
      me = !!(e.flags & 131072);
    }
  else ((me = !1), V && t.flags & 1048576 && $u(t, sl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (Hr(e, t), (e = t.pendingProps));
      var l = an(t, se.current);
      (nn(t, n), (l = Ui(null, t, r, e, l, n)));
      var o = Hi();
      return (
        (t.flags |= 1),
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((o = !0), ol(t)) : (o = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            $i(t),
            (l.updater = _l),
            (t.stateNode = l),
            (l._reactInternals = t),
            Yo(t, r, e, n),
            (t = Zo(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && Mi(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Hr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = ym(r)),
          (e = Te(r, e)),
          l)
        ) {
          case 0:
            t = qo(null, t, r, e, n);
            break e;
          case 1:
            t = oa(null, t, r, e, n);
            break e;
          case 11:
            t = ra(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        qo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        oa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((gc(t), e === null)) throw Error(k(387));
        ((r = t.pendingProps), (o = t.memoizedState), (l = o.element), Hu(e, t), cl(t, r, null, n));
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((l = fn(Error(k(423)), t)), (t = ia(e, t, r, n, l)));
            break e;
          } else if (r !== l) {
            ((l = fn(Error(k(424)), t)), (t = ia(e, t, r, n, l)));
            break e;
          } else
            for (
              xe = ft(t.stateNode.containerInfo.firstChild),
                ye = t,
                V = !0,
                Ie = null,
                n = Bu(t, null, r, n),
                t.child = n;
              n;

            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((un(), r === l)) {
            t = Je(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bu(t),
        e === null && Qo(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Bo(r, l) ? (i = null) : o !== null && Bo(r, o) && (t.flags |= 32),
        hc(e, t),
        ae(e, t, i, n),
        t.child
      );
    case 6:
      return (e === null && Qo(t), null);
    case 13:
      return vc(e, t, n);
    case 4:
      return (
        Ai(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        ra(e, t, r, l, n)
      );
    case 7:
      return (ae(e, t, t.pendingProps, n), t.child);
    case 8:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (ae(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          $(al, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if ($e(o.value, i)) {
            if (o.children === l.children && !pe.current) {
              t = Je(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      ((u = Ye(-1, n & -n)), (u.tag = 2));
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        (d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                          (c.pending = u));
                      }
                    }
                    ((o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Go(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                ((i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Go(i, n, t),
                  (i = o.sibling));
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    ((o.return = i.return), (i = o));
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        (ae(e, t, l.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        nn(t, n),
        (l = ze(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return ((r = t.type), (l = Te(r, t.pendingProps)), (l = Te(r.type, l)), la(e, t, r, l, n));
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Te(r, l)),
        Hr(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), ol(t)) : (e = !1),
        nn(t, n),
        cc(t, r, l),
        Yo(t, r, l, n),
        Zo(null, t, r, !0, e, n)
      );
    case 19:
      return xc(e, t, n);
    case 22:
      return pc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Ic(e, t) {
  return su(e, t);
}
function xm(e, t, n, r) {
  ((this.tag = e),
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
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function Ce(e, t, n, r) {
  return new xm(e, t, n, r);
}
function Ji(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function ym(e) {
  if (typeof e == "function") return Ji(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xi)) return 11;
    if (e === yi) return 14;
  }
  return 2;
}
function gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Qr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ji(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Bt:
        return Mt(n.children, l, o, t);
      case vi:
        ((i = 8), (l |= 8));
        break;
      case yo:
        return ((e = Ce(12, n, t, l | 2)), (e.elementType = yo), (e.lanes = o), e);
      case wo:
        return ((e = Ce(13, n, t, l)), (e.elementType = wo), (e.lanes = o), e);
      case ko:
        return ((e = Ce(19, n, t, l)), (e.elementType = ko), (e.lanes = o), e);
      case ba:
        return Ml(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ua:
              i = 10;
              break e;
            case Ha:
              i = 9;
              break e;
            case xi:
              i = 11;
              break e;
            case yi:
              i = 14;
              break e;
            case nt:
              ((i = 16), (r = null));
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return ((t = Ce(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t);
}
function Mt(e, t, n, r) {
  return ((e = Ce(7, e, r, t)), (e.lanes = n), e);
}
function Ml(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = ba),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ao(e, t, n) {
  return ((e = Ce(6, e, null, t)), (e.lanes = n), e);
}
function uo(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wm(e, t, n, r, l) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Hl(0)),
    (this.expirationTimes = Hl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Hl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null));
}
function es(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new wm(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ce(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    $i(o),
    e
  );
}
function km(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Vt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Oc(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return Ou(e, n, t);
  }
  return t;
}
function Dc(e, t, n, r, l, o, i, a, u) {
  return (
    (e = es(n, r, !0, e, l, o, i, a, u)),
    (e.context = Oc(null)),
    (n = e.current),
    (r = ue()),
    (l = ht(n)),
    (o = Ye(r, l)),
    (o.callback = t ?? null),
    mt(n, o, l),
    (e.current.lanes = l),
    cr(e, l, r),
    ge(e, r),
    e
  );
}
function Pl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = ht(l);
  return (
    (n = Oc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ye(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mt(l, t, i)),
    e !== null && (De(e, l, i, o), Vr(e, l, i)),
    i
  );
}
function xl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ga(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ts(e, t) {
  (ga(e, t), (e = e.alternate) && ga(e, t));
}
function jm() {
  return null;
}
var $c =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ns(e) {
  this._internalRoot = e;
}
Tl.prototype.render = ns.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Pl(e, t, null, null);
};
Tl.prototype.unmount = ns.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Ot(function () {
      Pl(null, e, null, null);
    }),
      (t[qe] = null));
  }
};
function Tl(e) {
  this._internalRoot = e;
}
Tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = pu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < lt.length && t !== 0 && t < lt[n].priority; n++);
    (lt.splice(n, 0, e), n === 0 && gu(e));
  }
};
function rs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function va() {}
function Sm(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = xl(i);
        o.call(c);
      };
    }
    var i = Dc(t, r, e, 0, null, !1, !1, "", va);
    return (
      (e._reactRootContainer = i),
      (e[qe] = i.current),
      Jn(e.nodeType === 8 ? e.parentNode : e),
      Ot(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = xl(u);
      a.call(c);
    };
  }
  var u = es(e, 0, !1, null, null, !1, !1, "", va);
  return (
    (e._reactRootContainer = u),
    (e[qe] = u.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    Ot(function () {
      Pl(t, u, n, r);
    }),
    u
  );
}
function Il(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = xl(i);
        a.call(u);
      };
    }
    Pl(t, i, e, l);
  } else i = Sm(n, t, e, l, r);
  return xl(i);
}
fu = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (ji(t, n | 1), ge(t, K()), !(O & 6) && ((mn = K() + 500), kt()));
      }
      break;
    case 13:
      (Ot(function () {
        var r = Ze(e, 1);
        if (r !== null) {
          var l = ue();
          De(r, e, 1, l);
        }
      }),
        ts(e, 1));
  }
};
Si = function (e) {
  if (e.tag === 13) {
    var t = Ze(e, 134217728);
    if (t !== null) {
      var n = ue();
      De(t, e, 134217728, n);
    }
    ts(e, 134217728);
  }
};
mu = function (e) {
  if (e.tag === 13) {
    var t = ht(e),
      n = Ze(e, t);
    if (n !== null) {
      var r = ue();
      De(n, e, t, r);
    }
    ts(e, t);
  }
};
pu = function () {
  return D;
};
hu = function (e, t) {
  var n = D;
  try {
    return ((D = e), t());
  } finally {
    D = n;
  }
};
Po = function (e, t, n) {
  switch (t) {
    case "input":
      if ((No(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Nl(r);
            if (!l) throw Error(k(90));
            (Qa(r), No(r, l));
          }
        }
      }
      break;
    case "textarea":
      Ka(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Zt(e, !!n.multiple, t, !1));
  }
};
tu = Xi;
nu = Ot;
var Nm = { usingClientEntryPoint: !1, Events: [fr, Wt, Nl, Ja, eu, Xi] },
  Cn = {
    findFiberByHostInstance: Ct,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Em = {
    bundleType: Cn.bundleType,
    version: Cn.version,
    rendererPackageName: Cn.rendererPackageName,
    rendererConfig: Cn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = ou(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Cn.findFiberByHostInstance || jm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      ((wl = Tr.inject(Em)), (He = Tr));
    } catch {}
}
ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nm;
ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!rs(t)) throw Error(k(200));
  return km(e, t, null, n);
};
ke.createRoot = function (e, t) {
  if (!rs(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = $c;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = es(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    Jn(e.nodeType === 8 ? e.parentNode : e),
    new ns(t)
  );
};
ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return ((e = ou(t)), (e = e === null ? null : e.stateNode), e);
};
ke.flushSync = function (e) {
  return Ot(e);
};
ke.hydrate = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Il(null, e, t, !0, n);
};
ke.hydrateRoot = function (e, t, n) {
  if (!rs(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = $c;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Dc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[qe] = t.current),
    Jn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l));
  return new Tl(t);
};
ke.render = function (e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Il(null, e, t, !1, n);
};
ke.unmountComponentAtNode = function (e) {
  if (!Rl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Ot(function () {
        Il(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[qe] = null));
        });
      }),
      !0)
    : !1;
};
ke.unstable_batchedUpdates = Xi;
ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Rl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Il(e, t, n, !1, r);
};
ke.version = "18.3.1-next-f1338f8080-20240426";
function Ac() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ac);
    } catch (e) {
      console.error(e);
    }
}
(Ac(), (Aa.exports = ke));
var Fc = Aa.exports,
  xa = Fc;
((vo.createRoot = xa.createRoot), (vo.hydrateRoot = xa.hydrateRoot));
const ls = "/assets/logo-light-rYlcd_Au.png",
  Vc = [
    { id: "home", label: "Home" },
    { id: "sobre", label: "Sobre nós" },
    { id: "servicos", label: "Produtos" },
    { id: "clientes", label: "Clientes" },
    { id: "planos", label: "Planos" },
    { id: "contato", label: "Contato" },
  ];
function Cm() {
  const [e, t] = j.useState(!1),
    [n, r] = j.useState(!1),
    [l, o] = j.useState(!1),
    i = j.useRef(null),
    a = j.useRef(null),
    u = (c) => {
      const m = document.getElementById(c);
      if (!m) {
        window.location.hash = c;
        return;
      }
      const h = m.getBoundingClientRect().top + window.pageYOffset - 64 - 8;
      (window.history.pushState(null, "", `#${c}`),
        window.scrollTo({ top: h, behavior: "smooth" }));
    };
  return (
    j.useEffect(() => {
      const c = () => o(window.scrollY > 8);
      return (
        c(),
        window.addEventListener("scroll", c, { passive: !0 }),
        () => window.removeEventListener("scroll", c)
      );
    }, []),
    j.useEffect(() => {
      const c = (d) => {
        d.key === "Escape" && (t(!1), r(!1));
      };
      return (
        window.addEventListener("keydown", c),
        () => window.removeEventListener("keydown", c)
      );
    }, []),
    j.useEffect(() => {
      const c = () => {
        (t(!1), r(!1));
      };
      return (
        window.addEventListener("hashchange", c),
        () => window.removeEventListener("hashchange", c)
      );
    }, []),
    j.useEffect(() => {
      if (!n) return;
      const c = (d) => {
        i.current &&
          a.current &&
          !i.current.contains(d.target) &&
          !a.current.contains(d.target) &&
          r(!1);
      };
      return (
        document.addEventListener("mousedown", c),
        () => document.removeEventListener("mousedown", c)
      );
    }, [n]),
    j.useEffect(() => {
      const c = document.body.style.overflow;
      return (
        (document.body.style.overflow = e ? "hidden" : c || ""),
        () => {
          document.body.style.overflow = c || "";
        }
      );
    }, [e]),
    s.jsxs("header", {
      className: [
        "fixed inset-x-0 top-0 z-[9999] h-16 transition-colors",
        l ? "bg-black/85 backdrop-blur border-b border-white/10" : "bg-transparent",
      ].join(" "),
      children: [
        s.jsxs("nav", {
          className:
            "mx-auto max-w-7xl w-full h-full px-4 flex items-center justify-between text-white",
          children: [
            s.jsx("a", {
              href: "#home",
              className: "flex items-center gap-2",
              onClick: (c) => {
                (c.preventDefault(), u("home"), r(!1));
              },
              children: s.jsx("img", { src: ls, alt: "OnRota", className: "h-7 w-auto" }),
            }),
            s.jsx("ul", {
              className: "hidden md:flex items-center gap-6 text-sm",
              children: Vc.map((c) =>
                c.id !== "servicos"
                  ? s.jsx(
                      "li",
                      {
                        children: s.jsx("a", {
                          href: `#${c.id}`,
                          className: "text-white/80 hover:text-[#1da7e5]",
                          onClick: (d) => {
                            (d.preventDefault(), u(c.id), r(!1));
                          },
                          children: c.label,
                        }),
                      },
                      c.id
                    )
                  : s.jsxs(
                      "li",
                      {
                        className: "relative",
                        children: [
                          s.jsxs("button", {
                            ref: i,
                            type: "button",
                            "aria-haspopup": "menu",
                            "aria-expanded": n,
                            onClick: () => r((d) => !d),
                            className:
                              "inline-flex items-center gap-1 text-white/80 hover:text-[#1da7e5]",
                            children: [
                              "Produtos",
                              s.jsx("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 24 24",
                                "aria-hidden": "true",
                                className: `transition-transform ${n ? "rotate-180" : "rotate-0"}`,
                                children: s.jsx("path", {
                                  fill: "currentColor",
                                  d: "M7 10l5 5 5-5z",
                                }),
                              }),
                            ],
                          }),
                          n &&
                            s.jsxs("div", {
                              ref: a,
                              role: "menu",
                              className:
                                "absolute right-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/95 shadow-2xl overflow-hidden z-[10000]",
                              children: [
                                s.jsx("a", {
                                  role: "menuitem",
                                  href: "#servicos",
                                  className:
                                    "block px-4 py-3 text-sm text-white/90 hover:bg-white/10",
                                  onClick: (d) => {
                                    (d.preventDefault(), r(!1), u("servicos"));
                                  },
                                  children: "OnCad",
                                }),
                                s.jsx("a", {
                                  role: "menuitem",
                                  href: "#impact",
                                  className:
                                    "block px-4 py-3 text-sm text-white/90 hover:bg-white/10",
                                  onClick: (d) => {
                                    (d.preventDefault(), r(!1), u("impact"));
                                  },
                                  children: "Integrações",
                                }),
                                s.jsx("a", {
                                  role: "menuitem",
                                  href: "#productdemo",
                                  className:
                                    "block px-4 py-3 text-sm text-white/90 hover:bg-white/10",
                                  onClick: (d) => {
                                    (d.preventDefault(), r(!1), u("productdemo"));
                                  },
                                  children: "Demonstração",
                                }),
                              ],
                            }),
                        ],
                      },
                      "produtos"
                    )
              ),
            }),
            s.jsx("button", {
              className:
                "md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 hover:bg-white/15 transition",
              onClick: () => t((c) => !c),
              "aria-label": "Abrir menu",
              children: s.jsx("svg", {
                width: "22",
                height: "22",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: s.jsx("path", {
                  fill: "#fff",
                  d: "M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z",
                }),
              }),
            }),
          ],
        }),
        s.jsx(_m, { open: e, onClose: () => t(!1), scrollToId: u }),
      ],
    })
  );
}
function _m({ open: e, onClose: t, scrollToId: n }) {
  const [r, l] = j.useState(!1);
  return Fc.createPortal(
    s.jsx("div", {
      className: "md:hidden fixed left-0 right-0 top-0 z-[10000] pointer-events-none",
      children: s.jsxs("div", {
        className: `
          mx-auto max-w-7xl
          origin-top transform transition-all duration-300 ease-out
          ${e ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0"}
          rounded-b-2xl shadow-2xl overflow-hidden
          bg-[#121212]
        `,
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between h-16 px-4 border-b border-white/10",
            children: [
              s.jsx("img", { src: ls, alt: "OnRota", className: "h-7" }),
              s.jsx("button", {
                className:
                  "grid place-items-center w-10 h-10 shrink-0 rounded-xl bg-white/10 hover:bg-white/15",
                onClick: () => {
                  (l(!1), t());
                },
                "aria-label": "Fechar menu",
                children: s.jsx("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  children: s.jsx("path", {
                    fill: "#fff",
                    d: "M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4l-6.3 6.3-1.4-1.4L9.2 12 2.9 5.7l1.4-1.4 6.3 6.3 6.3-6.3z",
                  }),
                }),
              }),
            ],
          }),
          s.jsx("ul", {
            className:
              "px-6 pb-6 space-y-4 text-right uppercase tracking-[0.18em] text-[13px] text-white/90",
            children: Vc.map((o) =>
              o.id !== "servicos"
                ? s.jsx(
                    "li",
                    {
                      children: s.jsx("a", {
                        href: `#${o.id}`,
                        className: "inline-block py-2 hover:text-white transition",
                        onClick: (i) => {
                          (i.preventDefault(), t(), setTimeout(() => n(o.id), 80));
                        },
                        children: o.label,
                      }),
                    },
                    o.id
                  )
                : s.jsxs(
                    "li",
                    {
                      children: [
                        s.jsxs("button", {
                          type: "button",
                          onClick: () => l((i) => !i),
                          className:
                            "w-full inline-flex items-center justify-end gap-2 py-2 hover:text-white transition",
                          "aria-expanded": r,
                          children: [
                            s.jsx("span", { children: "PRODUTOS" }),
                            s.jsx("svg", {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              "aria-hidden": "true",
                              className: `transition-transform ${r ? "rotate-180" : "rotate-0"}`,
                              children: s.jsx("path", {
                                fill: "currentColor",
                                d: "M7 10l5 5 5-5z",
                              }),
                            }),
                          ],
                        }),
                        r &&
                          s.jsxs("div", {
                            className:
                              "mt-1 space-y-1 text-white/85 text-right normal-case tracking-normal text-[14px]",
                            children: [
                              s.jsx("a", {
                                href: "#servicos",
                                className: "block py-2 px-2 rounded-lg hover:bg-white/05",
                                onClick: (i) => {
                                  (i.preventDefault(), t(), setTimeout(() => n("servicos"), 80));
                                },
                                children: "OnCad",
                              }),
                              s.jsx("a", {
                                href: "#impact",
                                className: "block py-2 px-2 rounded-lg hover:bg-white/05",
                                onClick: (i) => {
                                  (i.preventDefault(), t(), setTimeout(() => n("impact"), 80));
                                },
                                children: "Integrações",
                              }),
                              s.jsx("a", {
                                href: "#productdemo",
                                className: "block py-2 px-2 rounded-lg hover:bg-white/05",
                                onClick: (i) => {
                                  (i.preventDefault(), t(), setTimeout(() => n("productdemo"), 80));
                                },
                                children: "Demonstração",
                              }),
                            ],
                          }),
                      ],
                    },
                    "produtos-mobile"
                  )
            ),
          }),
        ],
      }),
    }),
    document.body
  );
}
function zm() {
  const e = (t) => {
    const r = document.getElementById(t);
    if (!r) {
      window.location.hash = t;
      return;
    }
    const l = r.getBoundingClientRect().top + window.pageYOffset - 64 - 8;
    (window.history.pushState(null, "", `#${t}`), window.scrollTo({ top: l, behavior: "smooth" }));
  };
  return s.jsx("footer", {
    className: "bg-black border-t border-white/10",
    children: s.jsx("div", {
      className: "mx-auto max-w-7xl px-4 py-8 md:py-12",
      children: s.jsxs("div", {
        className: `
            flex flex-col items-center text-center gap-4
            md:grid md:grid-cols-3 md:items-center md:text-left md:gap-6
          `,
        children: [
          s.jsxs("div", {
            className: "text-white/70 text-sm",
            children: [
              s.jsxs("div", {
                children: [
                  "© ",
                  new Date().getFullYear(),
                  " OnRota. Todos os direitos reservados.",
                ],
              }),
              s.jsxs("div", {
                className: "mt-1",
                children: [
                  "CNPJ: ",
                  s.jsx("span", { className: "text-white/80", children: "62.762.345/0001-30" }),
                ],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "flex flex-wrap justify-center items-center gap-4 text-sm",
            children: [
              s.jsx("a", {
                href: "#",
                onClick: (t) => t.preventDefault(),
                className: "text-white/80 hover:text-white",
                children: "Política de Privacidade",
              }),
              s.jsx("span", { className: "hidden md:inline text-white/30", children: "•" }),
              s.jsx("a", {
                href: "#",
                onClick: (t) => t.preventDefault(),
                className: "text-white/80 hover:text-white",
                children: "Termos de Uso",
              }),
            ],
          }),
          s.jsx("nav", {
            className: "flex justify-center md:justify-end",
            children: s.jsxs("ul", {
              className: "flex flex-wrap justify-center gap-x-6 gap-y-2 text-white/85 text-sm",
              children: [
                s.jsx("li", {
                  children: s.jsx("a", {
                    href: "#home",
                    className: "hover:text-white",
                    onClick: (t) => {
                      (t.preventDefault(), e("home"));
                    },
                    children: "Home",
                  }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", {
                    href: "#sobre",
                    className: "hover:text-white",
                    onClick: (t) => {
                      (t.preventDefault(), e("sobre"));
                    },
                    children: "Sobre",
                  }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", {
                    href: "#servicos",
                    className: "hover:text-white",
                    onClick: (t) => {
                      (t.preventDefault(), e("servicos"));
                    },
                    children: "Produtos",
                  }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", {
                    href: "#clientes",
                    className: "hover:text-white",
                    onClick: (t) => {
                      (t.preventDefault(), e("clientes"));
                    },
                    children: "Clientes",
                  }),
                }),
                s.jsx("li", {
                  children: s.jsx("a", {
                    href: "#planos",
                    className: "hover:text-white",
                    onClick: (t) => {
                      (t.preventDefault(), e("planos"));
                    },
                    children: "Planos",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function Lm() {
  const [e, t] = j.useState(!1);
  j.useEffect(() => {
    const r = requestAnimationFrame(() => {
      const l = requestAnimationFrame(() => t(!0));
      return () => cancelAnimationFrame(l);
    });
    return () => cancelAnimationFrame(r);
  }, []);
  const n = (r = "") =>
    [
      "transform transition-transform transition-opacity duration-[1500ms]",
      "ease-[cubic-bezier(0.22,1,0.36,1)]",
      "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
      e ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-[100%]",
      "will-change-transform will-change-opacity",
      r,
    ].join(" ");
  return s.jsxs("section", {
    className: `\r
        relative flex items-center overflow-hidden\r
        /* MOBILE: altura proporcional (antes 68vh) */\r
        min-h-[76vh]\r
        /* DESKTOP/TABLET: tela cheia */\r
        md:min-h-screen\r
        bg-no-repeat bg-cover\r
        bg-[position:center] md:bg-[position:right_center]\r
      `,
    style: {
      backgroundImage: "url('/mockups/bg-robot.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundColor: "#121212",
    },
    children: [
      s.jsx("div", {
        "aria-hidden": "true",
        className: "absolute inset-0 pointer-events-none md:hidden",
        style: {
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.92) 6%, rgba(0,0,0,0.78) 36%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.30) 82%, rgba(0,0,0,0.00) 96%)",
        },
      }),
      s.jsx("div", {
        "aria-hidden": "true",
        className: "absolute inset-0 pointer-events-none hidden md:block",
        style: {
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 10%, rgba(0,0,0,0.62) 42%, rgba(0,0,0,0.38) 65%, rgba(0,0,0,0.18) 75%, rgba(0,0,0,0.00) 95%)",
        },
      }),
      s.jsx("div", {
        className: "relative z-10 mx-auto w-full max-w-7xl px-4 py-10 md:py-20 text-white",
        children: s.jsxs("div", {
          className: "max-w-[22rem] sm:max-w-xl md:max-w-3xl space-y-3 md:space-y-6",
          children: [
            s.jsx("p", {
              className: n(
                "delay-[150ms] tracking-tight leading-tight text-[18px] sm:text-[28px] md:text-[24px]"
              ),
              children: "Mais segurança, menos riscos:",
            }),
            s.jsxs("h1", {
              className: n("delay-[300ms] font-extrabold tracking-tight leading-[1.04]"),
              children: [
                s.jsx("span", {
                  className: "block text-[30px] sm:text-[40px] md:text-[48px] sm:whitespace-nowrap",
                  children: "O futuro do transporte",
                }),
                s.jsx("span", {
                  className: "block text-[36px] sm:text-[48px] md:text-[68px] text-[white]",
                  children: "é OnRota.",
                }),
              ],
            }),
            s.jsxs("p", {
              className: n(
                "delay-[450ms] font-semibold text-white/90 text-[14px] md:text-[15px] leading-relaxed md:leading-[1.7] max-w-[65ch]"
              ),
              children: [
                "Combinamos ",
                s.jsx("strong", {
                  className: "font-extrabold text-white",
                  children: "tecnologia antifraude",
                }),
                " ",
                "e ",
                s.jsx("strong", { className: "font-extrabold text-white", children: "automação" }),
                " para eliminar erros",
                s.jsx("br", { className: "hidden md:inline" }),
                " manuais, reduzir custos e aumentar a confiabilidade das suas rotas.",
              ],
            }),
            s.jsxs("div", {
              className: n("delay-[650ms] flex items-center gap-3 pt-1"),
              children: [
                s.jsx("a", {
                  href: "#sobre",
                  className:
                    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-[13px] font-medium bg-[#1da7e5] hover:bg-[#168fc3] focus:outline-none focus:ring-2 focus:ring-white/30",
                  children: "Conhecer mais",
                }),
                s.jsx("a", {
                  href: "#servicos",
                  className:
                    "inline-flex items-center justify-center rounded-lg px-4 py-2.5 border border-white/20 text-white/90 hover:bg-white/10 text-[13px] focus:outline-none focus:ring-2 focus:ring-white/20",
                  children: "Nossos Produtos",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const L = { primary: "#0AA2FF", primaryHover: "#078AE6" },
  ya = "/assets/about-photo-yUATiV9m.png",
  Mm = "/assets/bg-pilar-D2GJWxhv.jpeg",
  Bc = "/assets/missao-DzWTzejy.jpg",
  Uc = "/assets/visao-CjMVPBXG.jpg",
  Hc = "/assets/valores-DM44Ca6C.jpg",
  Hn = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" },
  Pm = { threshold: 0.05, rootMargin: "0px 0px -5% 0px" },
  Tm = { threshold: 0.5, rootMargin: "0px" },
  Rm = { threshold: 0.48, rootMargin: "0px" },
  bc = { threshold: 0.55, rootMargin: "0px 0px -4% 0px" };
function Wc(e = 768) {
  const [t, n] = j.useState(() => (typeof window < "u" ? window.innerWidth < e : !1));
  return (
    j.useEffect(() => {
      var o;
      if (typeof window > "u") return;
      const r = window.matchMedia(`(max-width: ${e - 1}px)`),
        l = () => n(r.matches);
      return (
        l(),
        (o = r.addEventListener) == null || o.call(r, "change", l),
        () => {
          var i;
          return (i = r.removeEventListener) == null ? void 0 : i.call(r, "change", l);
        }
      );
    }, [e]),
    t
  );
}
function ar(e = Hn) {
  const { threshold: t = Hn.threshold, root: n = null, rootMargin: r = Hn.rootMargin } = e || {},
    l = j.useRef(null),
    [o, i] = j.useState(!1);
  return (
    j.useEffect(() => {
      if (!l.current || o) return;
      const a = l.current,
        u = () => {
          const m = a.getBoundingClientRect(),
            h = window.innerHeight || document.documentElement.clientHeight,
            v = window.innerWidth || document.documentElement.clientWidth,
            w = Math.max(m.height, 1),
            N = (Math.min(m.bottom, h) - Math.max(m.top, 0)) / w;
          return m.left < v && m.right > 0 && m.bottom > 0 && m.top < h && N >= t;
        };
      if (u()) {
        i(!0);
        return;
      }
      let c;
      "IntersectionObserver" in window &&
        ((c = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && (i(!0), c.unobserve(a));
          },
          { threshold: t, root: n, rootMargin: r }
        )),
        c.observe(a));
      const d = () => {
        !o &&
          u() &&
          (i(!0),
          window.removeEventListener("scroll", d, { passive: !0 }),
          window.removeEventListener("resize", d));
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (c && c.disconnect(),
            window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d));
        }
      );
    }, [o, t, n, r]),
    { ref: l, inView: o }
  );
}
function Im() {
  j.useEffect(() => {
    const e = () => {
      [Bc, Uc, Hc].forEach((t) => {
        const n = new Image();
        ((n.decoding = "async"), (n.src = t));
      });
    };
    typeof window < "u" &&
      ("requestIdleCallback" in window
        ? window.requestIdleCallback(e, { timeout: 1200 })
        : setTimeout(e, 400));
  }, []);
}
function wa({ dir: e = "down", size: t = "md" }) {
  const n = t === "sm" ? "h-6 md:h-8" : t === "lg" ? "h-12 md:h-16" : "h-8 md:h-12",
    r = e === "up" ? "rotate-180" : "";
  return s.jsx("div", {
    "aria-hidden": !0,
    className: `${n} ${r} bg-gradient-to-b from-transparent to-white`,
  });
}
const Om =
    "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
  os = `transform transition-transform transition-opacity duration-[900ms] ${Om} will-change-transform will-change-opacity`;
function at(e, t, n = "") {
  return [
    os,
    e
      ? "opacity-100 translate-x-0"
      : `opacity-0 ${t === "left" ? "-translate-x-[12%]" : "translate-x-[12%]"}`,
    "will-change-transform",
    n,
  ].join(" ");
}
function Gr(e, t = "", n = "800ms", r = 6) {
  const l = [
      os,
      e ? "opacity-100" : "opacity-0",
      "translate-y-[var(--dy)]",
      "will-change-transform",
      t,
    ].join(" "),
    o = { "--dy": e ? "0px" : `${r}px`, transitionDuration: n };
  return { className: l, style: o };
}
function co(e, t = "", n = 0) {
  const r = [
      os.replace("duration-[900ms]", "duration-[780ms]"),
      e ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-[0.992]",
      "will-change-transform",
      t,
    ].join(" "),
    l = { transitionDelay: e ? `${n}ms` : "0ms", transform: "translateZ(0)" };
  return { className: r, style: l };
}
function Dm() {
  return (
    Im(),
    s.jsxs("section", {
      id: "sobre",
      className: "bg-white text-slate-900",
      children: [
        s.jsx(wa, { dir: "up", size: "md" }),
        s.jsx($m, {}),
        s.jsx(wa, { dir: "down", size: "md" }),
        s.jsx(Am, {}),
        s.jsx(Fm, {}),
      ],
    })
  );
}
function $m() {
  const e = Wc(),
    t = ar(e ? Tm : Hn),
    n = "md:h-[clamp(380px,42vh,520px)] lg:h-[clamp(420px,46vh,560px)]",
    r = ar(bc);
  return s.jsxs("section", {
    ref: t.ref,
    className: "relative overflow-hidden bg-white",
    style: {
      contentVisibility: "auto",
      contain: "layout paint style",
      containIntrinsicSize: "600px 520px",
    },
    children: [
      s.jsx("div", {
        className: "pointer-events-none hidden md:block absolute inset-y-0 left-0 right-1/2",
        children: s.jsx("div", {
          className: "h-full w-full flex items-center justify-center px-6",
          children: s.jsx("div", {
            className: [
              "relative aspect-[16/10] w-full max-w-[600px] overflow-hidden border border-black/5 shadow-sm bg-white/30 backdrop-blur-[1px]",
              at(t.inView, "left"),
            ].join(" "),
            children: s.jsx("img", {
              src: ya,
              alt: "",
              className: "absolute inset-0 w-full h-full object-cover",
              decoding: "async",
              loading: "eager",
              fetchpriority: "high",
            }),
          }),
        }),
      }),
      s.jsx("div", {
        className: "md:hidden mb-2 px-6",
        children: s.jsx("div", {
          ref: r.ref,
          className: [
            "relative aspect-[16/10] w-[80%] max-w-[320px] overflow-hidden border border-black/5 shadow-sm bg-white",
            at(r.inView, "left"),
          ].join(" "),
          children: s.jsx("img", {
            src: ya,
            alt: "Equipe monitorando operações logísticas com a plataforma ONROTA",
            className: "absolute inset-0 w-full h-full object-cover",
            loading: "lazy",
            decoding: "async",
            fetchpriority: "low",
          }),
        }),
      }),
      s.jsx("div", {
        className: `relative mx-auto max-w-7xl px-6 md:px-10 ${n}`,
        children: s.jsxs("div", {
          className:
            "flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8",
          children: [
            s.jsx("div", { className: "hidden md:block basis-1/2 h-full", "aria-hidden": "true" }),
            s.jsx("div", {
              className: at(
                t.inView,
                "right",
                "basis-full md:basis-1/2 h-full flex items-center justify-center"
              ),
              children: s.jsxs("div", {
                className: "w-full max-w-[640px] mx-auto text-left",
                children: [
                  s.jsx("p", {
                    ...Gr(t.inView, "mb-2 text-xs font-semibold tracking-wide text-slate-500"),
                    children: "Sobre nós",
                  }),
                  s.jsxs("h2", {
                    className: at(t.inView, "right", "font-extrabold leading-tight text-slate-900"),
                    style: { fontSize: "clamp(1.6rem,4.5vw,3rem)" },
                    children: [
                      "Tecnologia que gera ",
                      s.jsx("span", { style: { color: L.primary }, children: "confiança" }),
                      " em cada rota.",
                    ],
                  }),
                  s.jsxs("p", {
                    ...Gr(
                      t.inView,
                      "mt-4 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700"
                    ),
                    children: [
                      "Nascemos para dar ",
                      s.jsx("strong", { children: "clareza" }),
                      " às operações: dados confiáveis, decisões objetivas e menos atrito no dia a dia da rota.",
                    ],
                  }),
                  s.jsxs("div", {
                    ...Gr(t.inView, "mt-6 flex flex-wrap gap-3"),
                    children: [
                      s.jsx("a", {
                        href: "#contato",
                        className:
                          "inline-flex items-center justify-center rounded-xl px-4 py-2 text-white text-sm font-medium border transition-colors",
                        style: { backgroundColor: L.primary, borderColor: L.primary },
                        onMouseEnter: (l) =>
                          (l.currentTarget.style.backgroundColor = L.primaryHover),
                        onMouseLeave: (l) => (l.currentTarget.style.backgroundColor = L.primary),
                        children: "Falar com a OnRota",
                      }),
                      s.jsx("a", {
                        href: "#clientes",
                        className:
                          "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium border transition-colors",
                        style: {
                          color: "#0f172a",
                          borderColor: "rgba(2,6,23,0.12)",
                          background: "rgba(2,6,23,0.02)",
                        },
                        onMouseEnter: (l) =>
                          (l.currentTarget.style.background = "rgba(2,6,23,0.05)"),
                        onMouseLeave: (l) =>
                          (l.currentTarget.style.background = "rgba(2,6,23,0.02)"),
                        children: "Nossos clientes",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Am() {
  const e = ar(Hn);
  return s.jsxs("section", {
    ref: e.ref,
    className: "relative overflow-hidden",
    style: {
      contentVisibility: "auto",
      contain: "layout paint style",
      containIntrinsicSize: "600px 420px",
    },
    children: [
      s.jsx("div", {
        className: "absolute inset-0 z-0",
        children: s.jsx("img", {
          src: Mm,
          alt: "",
          className: "w-full h-full object-cover",
          loading: "lazy",
          decoding: "async",
        }),
      }),
      s.jsx("div", {
        className: "absolute inset-0 z-0",
        style: {
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.98) 45%, rgba(0,0,0,0.92) 55%, rgba(0,0,0,0.78) 65%, rgba(0,0,0,0.55) 74%, rgba(0,0,0,0.28) 90%, rgba(0,0,0,0.00) 97%)",
        },
      }),
      s.jsxs("div", {
        className: "relative z-10 mx-auto max-w-7xl px-6 md:px-10 py-12 md:py-16",
        children: [
          s.jsx("p", {
            ...co(e.inView, "text-white/80 text-xs tracking-widest uppercase", 0),
            children: "Nossos Pilares",
          }),
          s.jsxs("h3", {
            ...co(
              e.inView,
              "mt-1 font-extrabold text-white leading-[1.12] tracking-tight text-balance max-w-2xl",
              80
            ),
            style: { fontSize: "clamp(1.8rem,4.2vw,2.8rem)" },
            children: [
              "Segurança em primeiro lugar, inovação que simplifica e eficiência no",
              " ",
              s.jsx("span", { style: { color: L.primary }, children: "transporte" }),
            ],
          }),
          s.jsx("p", {
            ...co(
              e.inView,
              "mt-4 max-w-2xl text-white/85 text-sm md:text-[15.5px] leading-relaxed text-pretty",
              140
            ),
            children:
              "Segurança como base, inovação para simplificar e eficiência para mover a logística com confiança são pilares que sustentam tudo o que construímos.",
          }),
        ],
      }),
    ],
  });
}
function Fm() {
  return s.jsx("section", {
    className: "py-12 md:py-16 bg-white",
    children: s.jsxs("div", {
      className: "space-y-12 md:space-y-16",
      children: [
        s.jsx(fo, {
          img: Bc,
          title: "Missão",
          desc: s.jsxs(s.Fragment, {
            children: [
              s.jsx("p", {
                children:
                  "Promover confiança no transporte brasileiro por meio de tecnologia que antecipa riscos, evita fraudes e dá visibilidade de ponta a ponta. Nossa missão é transformar dados em decisões seguras, automatizando verificações críticas e reduzindo o impacto de erros humanos nas operações diárias.",
              }),
              s.jsx("p", {
                children:
                  "Fazemos isso integrando fontes de informação, aplicando regras inteligentes e monitorando eventos em tempo real. Assim, elevamos a previsibilidade das rotas, reduzimos custos operacionais e garantimos mais transparência para embarcadores, transportadoras e motoristas.",
              }),
            ],
          }),
        }),
        s.jsx(fo, {
          img: Uc,
          reverse: !0,
          title: "Visão",
          desc: s.jsxs(s.Fragment, {
            children: [
              s.jsx("p", {
                children:
                  "Ser a referência em antifraude e automação no transporte rodoviário, definindo o novo padrão de segurança, simplicidade e inteligência do setor. Enxergamos um ecossistema onde cada etapa da contratação à entrega é validada, rastreada e mensurada.",
              }),
              s.jsx("p", {
                children:
                  "Queremos impulsionar um mercado mais confiável, em que a tecnologia reduz barreiras, melhora a experiência dos times operacionais e cria relações de longo prazo baseadas em dados e performance.",
              }),
            ],
          }),
        }),
        s.jsx(fo, {
          img: Hc,
          title: "Valores",
          desc: s.jsxs(s.Fragment, {
            children: [
              s.jsxs("p", {
                children: [
                  "Atuamos com ",
                  s.jsx("strong", { children: "Integridade" }),
                  " em cada interação; perseguimos",
                  " ",
                  s.jsx("strong", { children: "Precisão" }),
                  " nos dados e processos; praticamos",
                  " ",
                  s.jsx("strong", { children: "Inovação contínua" }),
                  " para simplificar o complexo; exercemos",
                  " ",
                  s.jsx("strong", { children: "Responsabilidade" }),
                  " com clientes, parceiros e motoristas; e fortalecemos a ",
                  s.jsx("strong", { children: "Colaboração" }),
                  " para que toda a cadeia logística evolua.",
                ],
              }),
              s.jsx("p", {
                children:
                  "Esses valores orientam nossas escolhas de produto, nossas parcerias e a forma como implementamos cada projeto sempre com foco em resultado, segurança e confiança.",
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function fo({ img: e, reverse: t = !1, title: n, desc: r }) {
  const l = Wc(),
    o = ar(l ? Rm : Pm),
    i = t ? "right-0 left-1/2" : "left-0 right-1/2",
    a = t ? "left" : "right",
    u = "md:h-[clamp(360px,40vh,520px)] lg:h-[clamp(400px,44vh,560px)]",
    c = ar(bc);
  return s.jsxs("section", {
    ref: o.ref,
    className: "relative overflow-hidden bg-white",
    style: {
      contentVisibility: "auto",
      contain: "layout paint style",
      containIntrinsicSize: "600px 480px",
    },
    children: [
      s.jsx("div", {
        className: ["pointer-events-none hidden md:block absolute inset-y-0", i].join(" "),
        children: s.jsx("div", {
          className: "h-full w-full flex items-center justify-center px-6",
          children: s.jsx("div", {
            className: [
              "relative aspect-[16/10] w-full max-w-[560px] overflow-hidden border border-black/5 shadow-sm bg-white/30 backdrop-blur-[1px]",
              at(o.inView, "left"),
            ].join(" "),
            children: s.jsx("img", {
              src: e,
              alt: "",
              className: "absolute inset-0 w-full h-full object-cover",
              loading: "lazy",
              decoding: "async",
            }),
          }),
        }),
      }),
      s.jsx("div", {
        className: "md:hidden mb-3 sm:mb-4 px-6",
        children: s.jsx("div", {
          ref: c.ref,
          className: [
            "relative aspect-[16/10] w-[78%] max-w-[300px] overflow-hidden border border-black/5 shadow-sm bg-white",
            at(c.inView, "left"),
          ].join(" "),
          children: s.jsx("img", {
            src: e,
            alt: typeof n == "string" ? n : "Imagem",
            className: "absolute inset-0 w-full h-full object-cover",
            loading: "lazy",
            decoding: "async",
          }),
        }),
      }),
      s.jsx("div", {
        className: `relative mx-auto max-w-7xl px-6 md:px-10 ${u}`,
        children: s.jsxs("div", {
          className: [
            "flex flex-col md:flex-row h-full items-stretch md:items-center gap-6 md:gap-8",
            t ? "md:flex-row-reverse" : "md:flex-row",
          ].join(" "),
          children: [
            s.jsx("div", { className: "hidden md:block basis-1/2 h-full", "aria-hidden": "true" }),
            s.jsx("div", {
              className: at(
                o.inView,
                a,
                "basis-full md:basis-1/2 h-full flex items-center justify-center"
              ),
              children: s.jsxs("div", {
                className: "w-full max-w-[560px] md:max-w-[640px] mx-auto text-left",
                children: [
                  s.jsx("h3", {
                    className: at(o.inView, a, "font-extrabold leading-tight text-slate-900"),
                    style: { fontSize: "clamp(1.8rem,4vw,2.6rem)" },
                    children: n,
                  }),
                  r
                    ? s.jsx("div", {
                        ...Gr(
                          o.inView,
                          "mt-3 sm:mt-4 text-[15px] md:text-[15.5px] leading-relaxed text-slate-700 space-y-3"
                        ),
                        children: r,
                      })
                    : null,
                ],
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Bm = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) => (r ? r.toUpperCase() : n.toLowerCase())),
  ka = (e) => {
    const t = Bm(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  Qc = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  Um = (e) => {
    for (const t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Hm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bm = j.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: l = "",
      children: o,
      iconNode: i,
      ...a
    },
    u
  ) =>
    j.createElement(
      "svg",
      {
        ref: u,
        ...Hm,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Qc("lucide", l),
        ...(!o && !Um(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [...i.map(([c, d]) => j.createElement(c, d)), ...(Array.isArray(o) ? o : [o])]
    )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ae = (e, t) => {
  const n = j.forwardRef(({ className: r, ...l }, o) =>
    j.createElement(bm, {
      ref: o,
      iconNode: t,
      className: Qc(`lucide-${Vm(ka(e))}`, `lucide-${e}`, r),
      ...l,
    })
  );
  return ((n.displayName = ka(e)), n);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wm = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    ["path", { d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8", key: "bce9hv" }],
    ["path", { d: "M3 10h18", key: "8toen8" }],
    ["path", { d: "m16 20 2 2 4-4", key: "13tcca" }],
  ],
  Qm = Ae("calendar-check-2", Wm);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gm = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Km = Ae("chevron-left", Gm);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ym = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Xm = Ae("chevron-right", Ym);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qm = [
    ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  Zm = Ae("file-text", qm);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jm = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  ep = Ae("message-circle", Jm);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = [
    ["path", { d: "M12 22v-5", key: "1ega77" }],
    ["path", { d: "M9 8V2", key: "14iosj" }],
    ["path", { d: "M15 8V2", key: "18g5xt" }],
    ["path", { d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z", key: "osxo6l" }],
  ],
  np = Ae("plug", tp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  lp = Ae("quote", rp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const op = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  ip = Ae("shield", op);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sp = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  ap = Ae("star", sp);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const up = [
    ["path", { d: "m16 11 2 2 4-4", key: "9rsbq5" }],
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  cp = Ae("user-check", up);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dp = [
    [
      "path",
      {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",
        key: "1ngwbx",
      },
    ],
  ],
  fp = Ae("wrench", dp),
  mp = (e) => s.jsx(Qm, { ...e }),
  pp = (e) => s.jsx(fp, { ...e }),
  hp = (e) => s.jsx(lp, { ...e }),
  gp = (e) => s.jsx(ap, { ...e }),
  vp = (e) => s.jsx(Km, { ...e }),
  xp = (e) => s.jsx(Xm, { ...e }),
  yp = (e) => s.jsx(ep, { ...e }),
  wp = yp,
  Gc = (e) => s.jsx(Zm, { ...e }),
  kp = (e) => s.jsx(cp, { ...e }),
  Kc = (e) => s.jsx(np, { ...e }),
  Yc = (e) => s.jsx(ip, { ...e }),
  B = {
    primary: L == null ? void 0 : L.primary,
    primaryHover: L == null ? void 0 : L.primaryHover,
    text: (L == null ? void 0 : L.text) || "#ffffff",
    textMuted: (L == null ? void 0 : L.textMuted) || "rgba(255,255,255,0.75)",
    bg: (L == null ? void 0 : L.bg) || "#121212",
    panelBg: (L == null ? void 0 : L.panelBg) || "#101216",
    ring: (L == null ? void 0 : L.ring) || "rgba(255,255,255,0.10)",
    cardBg: (L == null ? void 0 : L.cardBg) || "rgba(255,255,255,0.05)",
    cardBgHover: (L == null ? void 0 : L.cardBgHover) || "rgba(255,255,255,0.08)",
    outline: (L == null ? void 0 : L.outline) || "rgba(255,255,255,0.20)",
  };
function jp({ once: e = !0, rootMargin: t = "0px 0px -12% 0px" } = {}) {
  const n = j.useRef(null),
    r = (l) => {
      if (!l) return;
      const o =
        typeof window < "u" &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      ((l.style.opacity = o ? "1" : "0"),
        (l.style.transform = o ? "none" : "translateY(22px)"),
        (l.style.willChange = o ? "auto" : "opacity, transform"),
        !o &&
          (n.current ||
            (n.current = new IntersectionObserver(
              (i) => {
                i.forEach((a) => {
                  var c;
                  const u = a.target;
                  if (a.isIntersecting) {
                    const d = Number(u.dataset.delay || 0);
                    ((u.style.transition = `opacity 520ms cubic-bezier(.22,.61,.36,1) ${d}ms, transform 520ms cubic-bezier(.22,.61,.36,1) ${d}ms`),
                      (u.style.opacity = "1"),
                      (u.style.transform = "none"),
                      e && ((c = n.current) == null || c.unobserve(u)));
                  }
                });
              },
              { root: null, threshold: 0.12, rootMargin: t }
            )),
          n.current.observe(l)));
    };
  return (
    j.useEffect(
      () => () => {
        var l;
        return (l = n.current) == null ? void 0 : l.disconnect();
      },
      []
    ),
    r
  );
}
function Ve({ children: e, className: t = "", delay: n = 0, as: r = "div" }) {
  const l = jp(),
    o = j.useRef(null);
  return (
    j.useEffect(() => {
      o.current && ((o.current.dataset.delay = String(n)), l(o.current));
    }, [l, n]),
    s.jsx(r, {
      ref: o,
      className: t,
      style: { contain: "layout paint", backfaceVisibility: "hidden" },
      children: e,
    })
  );
}
function Sp() {
  const e = { mockup: "/mockups/phone-oncad2.webp", oncadLogo: "/logos/opt/oncad.webp" },
    t = j.useMemo(
      () => [
        {
          icon: s.jsx(Gc, { className: "h-7 w-7", style: { color: B.primary } }),
          title: "OCR em PDFs de CNH e CRLV",
          desc: "Leitura precisa, extraindo campos em segundos.",
        },
        {
          icon: s.jsx(kp, { className: "h-7 w-7", style: { color: B.primary } }),
          title: "Cadastro automático",
          desc: "Preenche motoristas e veículos sem digitação manual.",
        },
        {
          icon: s.jsx(Kc, { className: "h-7 w-7", style: { color: B.primary } }),
          title: "Integração por API",
          desc: "Envio direto ao seu ERP com logs e rastreabilidade.",
        },
        {
          icon: s.jsx(Yc, { className: "h-7 w-7", style: { color: B.primary } }),
          title: "Validações e regras",
          desc: "Padronização e antifraude configuráveis para a operação.",
        },
      ],
      []
    );
  return s.jsx("section", {
    id: "servicos",
    className: "relative py-12 md:py-16 scroll-mt-24 md:scroll-mt-28",
    style: { backgroundColor: B.bg, color: B.text },
    children: s.jsxs("div", {
      className: "mx-auto max-w-7xl px-4",
      children: [
        s.jsxs("div", {
          className: "grid items-center gap-8 md:gap-10 lg:gap-12 md:grid-cols-2",
          children: [
            s.jsxs(Ve, {
              as: "div",
              children: [
                s.jsx(Ve, {
                  as: "div",
                  delay: 40,
                  children: s.jsx("img", {
                    src: e.oncadLogo,
                    alt: "OnCad",
                    className: "h-10 md:h-11 w-auto opacity-90",
                    loading: "lazy",
                    decoding: "async",
                  }),
                }),
                s.jsx(Ve, {
                  as: "h2",
                  delay: 90,
                  className:
                    "mt-3 text-[32px] md:text-[44px] font-extrabold leading-[1.08] tracking-tight",
                  children: "Automatize seu cadastro em minutos com o OnCad.",
                }),
                s.jsx(Ve, {
                  as: "p",
                  delay: 140,
                  className: "mt-4 text-[15px] md:text-[16px] leading-relaxed max-w-xl",
                  style: { color: B.textMuted },
                  children:
                    "Construa um fluxo que elimina digitação manual, valida dados por OCR e integra direto ao seu ERP com rastreabilidade completa.",
                }),
                s.jsxs(Ve, {
                  as: "div",
                  delay: 190,
                  className: "mt-6 flex items-center gap-2 sm:gap-3",
                  children: [
                    s.jsx("a", {
                      href: "#contato",
                      className: `flex-1 md:flex-none inline-flex items-center justify-center rounded-lg\r
               px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold transition`,
                      style: { backgroundColor: B.primary },
                      onMouseEnter: (n) => (n.currentTarget.style.backgroundColor = B.primaryHover),
                      onMouseLeave: (n) => (n.currentTarget.style.backgroundColor = B.primary),
                      children: "Agendar Demo Gratuita",
                    }),
                    s.jsx("a", {
                      href: "#planos",
                      className: `flex-1 md:flex-none inline-flex items-center justify-center rounded-lg\r
               px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm font-semibold transition`,
                      style: {
                        border: `1px solid ${B.outline}`,
                        backgroundColor: "transparent",
                        color: B.text,
                      },
                      onMouseEnter: (n) => (n.currentTarget.style.backgroundColor = B.cardBgHover),
                      onMouseLeave: (n) => (n.currentTarget.style.backgroundColor = "transparent"),
                      children: "Conheça os planos",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx(Ve, {
              as: "div",
              className: "relative text-center",
              delay: 60,
              children: s.jsx("img", {
                src: e.mockup,
                alt: "Mockup do OnCad",
                className:
                  "w-full h-auto md:max-h-[640px] lg:max-h-[720px] object-contain mx-auto select-none pointer-events-none",
                loading: "lazy",
              }),
            }),
          ],
        }),
        s.jsx(Ve, {
          as: "div",
          delay: 60,
          className: "mt-10 md:mt-12",
          children: s.jsxs("div", {
            className: "rounded-3xl p-6 md:p-8 shadow-lg",
            style: { backgroundColor: B.panelBg, outline: `1px solid ${B.ring}`, outlineOffset: 0 },
            children: [
              s.jsx(Ve, {
                as: "h3",
                delay: 100,
                className: "text-center text-[22px] md:text-[26px] font-bold mb-8 md:mb-10",
                children: "Recursos que irão inovar o seu cadastro",
              }),
              s.jsx("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: t.map((n, r) =>
                  s.jsxs(
                    Ve,
                    {
                      delay: 80 + r * 80,
                      className: "rounded-2xl p-5 transition",
                      style: { backgroundColor: B.cardBg, outline: `1px solid ${B.ring}` },
                      onMouseEnter: (l) => (l.currentTarget.style.backgroundColor = B.cardBgHover),
                      onMouseLeave: (l) => (l.currentTarget.style.backgroundColor = B.cardBg),
                      children: [
                        s.jsx("div", { className: "mb-3", children: n.icon }),
                        s.jsx("p", { className: "font-semibold leading-tight", children: n.title }),
                        s.jsx("p", {
                          className: "mt-2 text-sm",
                          style: { color: B.textMuted },
                          children: n.desc,
                        }),
                      ],
                    },
                    r
                  )
                ),
              }),
              s.jsx(Ve, {
                as: "div",
                delay: 120,
                className: "mt-8 md:mt-10 flex justify-center",
                children: s.jsx("a", {
                  href: "#planos",
                  className:
                    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition",
                  style: { backgroundColor: B.primary },
                  onMouseEnter: (n) => (n.currentTarget.style.backgroundColor = B.primaryHover),
                  onMouseLeave: (n) => (n.currentTarget.style.backgroundColor = B.primary),
                  children: "Conhecer planos",
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const Rr = [
  { key: "pianetto", alt: "Cliente Pianetto", w: 220, h: 110, wMobile: 220, hMobile: 110 },
  { key: "boa-viagem", alt: "Cliente Boa Viagem", w: 400, h: 200, wMobile: 400, hMobile: 200 },
  { key: "anderle", alt: "Cliente Anderle", w: 220, h: 110, wMobile: 220, hMobile: 110 },
  { key: "shrlog", alt: "Cliente SHR LOG", w: 220, h: 110, wMobile: 220, hMobile: 110 },
];
function ja({ name: e, alt: t, w: n, h: r, eager: l = !1 }) {
  const o = `/logos/@1x/${e}@1x.webp`,
    i = `/logos/@2x/${e}@2x.webp`,
    a = `/logos/${e}.png`;
  return s.jsxs("picture", {
    children: [
      s.jsx("source", { type: "image/webp", srcSet: `${o} 1x, ${i} 2x` }),
      s.jsx("img", {
        "data-logo": !0,
        src: a,
        alt: t,
        width: n,
        height: r,
        style: { width: `${n}px`, height: `${r}px`, maxWidth: "none" },
        className: "block object-contain mx-auto select-none",
        loading: l ? "eager" : "lazy",
        decoding: "async",
        onError: (u) => {
          u.currentTarget.outerHTML = '<div class="text-slate-400 text-xs">logo indisponível</div>';
        },
      }),
    ],
  });
}
function Np() {
  const [e, t] = j.useState(0),
    n = j.useRef(null),
    r = j.useRef(null),
    l = Rr.length + 1,
    o = (c) => {
      const d = n.current;
      d && d.scrollTo({ left: c * d.clientWidth, behavior: "smooth" });
    },
    i = () => {
      const c = (e - 1 + l) % l;
      (t(c), o(c));
    },
    a = () => {
      const c = (e + 1) % l;
      (t(c), o(c));
    },
    u = () => {
      const c = n.current;
      c &&
        (r.current && clearTimeout(r.current),
        (r.current = setTimeout(() => {
          const d = Math.round(c.scrollLeft / c.clientWidth);
          (t(d), c.scrollTo({ left: d * c.clientWidth, behavior: "smooth" }));
        }, 60)));
    };
  return (
    j.useEffect(() => {
      const c = () => o(e);
      return (window.addEventListener("resize", c), () => window.removeEventListener("resize", c));
    }, [e]),
    s.jsx("section", {
      id: "clientes",
      className: "relative bg-gray-100 text-black scroll-mt-24 md:scroll-mt-28 overflow-hidden",
      children: s.jsxs("div", {
        className: "mx-auto max-w-7xl px-4 py-16 flex flex-col items-center text-center",
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("h2", { className: "text-2xl font-bold", children: "Nossos clientes" }),
              s.jsx("p", {
                className: "mt-2 max-w-2xl mx-auto text-slate-600",
                children: "Algumas marcas que confiam em nossa equipe e tecnologia.",
              }),
            ],
          }),
          s.jsxs("div", {
            className: "mt-10 md:hidden relative w-full max-w-md mx-auto",
            children: [
              s.jsx("div", {
                ref: n,
                onScroll: u,
                className: "overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth",
                style: { WebkitOverflowScrolling: "touch" },
                children: s.jsxs("div", {
                  className: "flex",
                  children: [
                    Rr.map((c, d) =>
                      s.jsx(
                        "div",
                        {
                          className: "min-w-full snap-center flex items-center justify-center",
                          style: { height: 260 },
                          children: s.jsx(ja, {
                            name: c.key,
                            alt: c.alt,
                            w: c.wMobile ?? c.w,
                            h: c.hMobile ?? c.h,
                            eager: d === 0,
                          }),
                        },
                        c.key
                      )
                    ),
                    s.jsx("div", {
                      className: "min-w-full snap-center flex items-center justify-center",
                      style: { height: 260 },
                      children: s.jsx("span", {
                        className: "text-3xl font-semibold text-slate-600 select-none",
                        children: "+38",
                      }),
                    }),
                  ],
                }),
              }),
              s.jsx("button", {
                type: "button",
                onClick: i,
                "aria-label": "Anterior",
                className:
                  "absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center",
                children: s.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: s.jsx("path", { d: "M15 18l-6-6 6-6" }),
                }),
              }),
              s.jsx("button", {
                type: "button",
                onClick: a,
                "aria-label": "Próximo",
                className:
                  "absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-slate-300 bg-white/95 shadow-sm hover:bg-slate-50 w-10 h-10 grid place-items-center",
                children: s.jsx("svg", {
                  viewBox: "0 0 24 24",
                  className: "w-5 h-5",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  children: s.jsx("path", { d: "M9 6l6 6-6 6" }),
                }),
              }),
              s.jsx("div", {
                className: "mt-4 flex justify-center gap-2",
                children: [...Rr, { key: "+38" }].map((c, d) =>
                  s.jsx(
                    "button",
                    {
                      "aria-label": `Ir para slide ${d + 1}`,
                      onClick: () => {
                        (t(d), o(d));
                      },
                      className: `h-2.5 rounded-full transition-all ${e === d ? "w-6 bg-slate-800" : "w-2.5 bg-slate-300"}`,
                    },
                    d
                  )
                ),
              }),
            ],
          }),
          s.jsxs("div", {
            className: "mt-12 hidden md:flex items-center justify-center gap-10 flex-nowrap",
            children: [
              Rr.map((c) =>
                s.jsx(
                  "div",
                  {
                    className: `flex items-center justify-center rounded-2xl bg-white shadow-sm md:border md:border-slate-200 h-40 lg:h-52 p-6 
                ${c.key === "boa-viagem" ? "max-w-[260px]" : "max-w-[360px]"} w-full`,
                    children: s.jsx(ja, { name: c.key, alt: c.alt, w: c.w, h: c.h }),
                  },
                  c.key
                )
              ),
              s.jsx("span", {
                className:
                  "ml-4 text-2xl lg:text-3xl font-semibold text-slate-600 select-none whitespace-nowrap align-middle",
                children: "+38",
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const Ep = [
  { type: "mil", value: 149, label: "cadastros realizados" },
  { type: "mil", value: 1, label: "usuários ativos" },
  { type: "%", value: 96, label: "redução de fraudes" },
  { type: "%", value: 87, label: "tempo de cadastro reduzido" },
  { type: "bi", value: 1, label: "em cargas protegidas contra fraudes" },
];
function Cp(e, t = 0.55) {
  const [n, r] = j.useState(!1);
  return (
    j.useEffect(() => {
      const l = e.current;
      if (!l) return;
      const o = new IntersectionObserver((i) => i.forEach((a) => a.isIntersecting && r(!0)), {
        threshold: t,
      });
      return (o.observe(l), () => o.disconnect());
    }, [e, t]),
    n
  );
}
function _p({ type: e, target: t }) {
  const [n, r] = j.useState(0),
    l = j.useRef(null),
    o = Cp(l, 0.6);
  j.useEffect(() => {
    if (!o) return;
    r(0);
    const a = 900,
      u = performance.now(),
      c = (d) => {
        const m = Math.min(1, (d - u) / a),
          h = 1 - Math.pow(1 - m, 3);
        (r(Math.round(t * h)), m < 1 && requestAnimationFrame(c));
      };
    requestAnimationFrame(c);
  }, [o, t]);
  let i = "";
  return (
    e === "mil" ? (i = `+${n}mil`) : e === "%" ? (i = `${n}%`) : e === "bi" && (i = `+R$${n}B`),
    s.jsx("span", { ref: l, className: "tabular-nums", children: i })
  );
}
function zp() {
  return s.jsx("section", {
    className: "bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28",
    children: s.jsxs("div", {
      className: "mx-auto max-w-7xl px-4 pt-12 md:pt-16 pb-10 md:pb-12",
      children: [
        s.jsx("header", {
          className: "text-center",
          children: s.jsx("h2", {
            className: "text-4xl md:text-5xl font-extrabold tracking-tight",
            children: "Alguns números que nos orgulhamos",
          }),
        }),
        s.jsx("div", {
          className:
            "mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8",
          children: Ep.map(({ type: e, value: t, label: n }, r) => {
            const l = e === "rm" ? "text-[32px] md:text-[40px]" : "text-[36px] md:text-[44px]";
            return s.jsxs(
              "article",
              {
                className: `rounded-2xl bg-slate-50 border border-slate-200 shadow-sm\r
                           px-5 py-6 md:px-6 md:py-7 text-center mx-auto w-full max-w-[260px]`,
                children: [
                  s.jsx("div", {
                    className: `font-extrabold leading-none ${l}`,
                    style: { color: L.primary },
                    children: s.jsx(_p, { type: e, target: t }),
                  }),
                  s.jsx("p", {
                    className:
                      "mt-2.5 md:mt-3 text-slate-800 text-[13px] md:text-[14px] leading-[20px] md:leading-[21px] mx-auto max-w-[220px]",
                    children: n,
                  }),
                ],
              },
              r
            );
          }),
        }),
      ],
    }),
  });
}
const Tn = {
  videoId: "dQw4w9WgXcQ",
  title: "Veja o OnCad em ação",
  description:
    "Descubra como o OnCad simplifica o cadastro de motoristas e veículos: OCR automático, validações inteligentes e integração em tempo real com seu ERP/TMS.",
  bgClass: "bg-[#121212]",
  invert: !1,
};
function Lp(e) {
  const t = e.title || Tn.title,
    n = e.description || Tn.description,
    r = e.bgClass || Tn.bgClass,
    l = e.invert ?? Tn.invert;
  return s.jsx("section", {
    className: `text-white py-10 lg:py-5 ${r}`,
    children: s.jsx("div", {
      className: "mx-auto max-w-6xl px-4",
      children: s.jsxs("div", {
        className: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center md:min-h-[420px] ${l ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`,
        children: [
          s.jsxs("div", {
            className: "w-full max-w-[640px] justify-self-center text-left",
            children: [
              s.jsx("h3", {
                className: "text-3xl md:text-5xl font-extrabold tracking-tight",
                children: t,
              }),
              s.jsx("p", { className: "mt-3 md:mt-4 text-white/90", children: n }),
            ],
          }),
          s.jsx("div", {
            className: "w-full max-w-[680px] justify-self-center shadow-xl",
            children: s.jsx("div", {
              className: "relative h-0 pb-[56.25%] overflow-hidden bg-black",
              children: s.jsx("video", {
                className: "absolute inset-0 h-full w-full object-cover",
                src: "/videos/oncad-demo.mp4",
                poster: "/posters/miniatura.png",
                controls: !0,
                preload: "metadata",
                playsInline: !0,
                children: "Seu navegador não suporta a tag de vídeo.",
              }),
            }),
          }),
        ],
      }),
    }),
  });
}
const Mp = [
    {
      icon: Yc,
      title: "Risco sob controle",
      desc: "Validações automáticas de motorista e veículo (OCR + regras + score de risco) reduzem fraudes e liberam decisões seguras.",
    },
    {
      icon: Gc,
      title: "Menos digitação, mais precisão",
      desc: "Leitura automática de documentos via OCR elimina erros humanos, reduz retrabalho e acelera o cadastro, garantindo evidências de compliance.",
    },
    {
      icon: Kc,
      title: "Integração simples",
      desc: "APIs e Webhooks conectam o ONCAD ao seu ERP/TMS. Status, evidências e eventos fluem automaticamente entre sistemas.",
    },
  ],
  ln = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" },
  mo = { threshold: 0.45, rootMargin: "0px" };
function Pp(e = 768) {
  const [t, n] = j.useState(typeof window < "u" ? window.innerWidth < e : !1);
  return (
    j.useEffect(() => {
      var o;
      if (typeof window > "u") return;
      const r = window.matchMedia(`(max-width: ${e - 1}px)`),
        l = () => n(r.matches);
      return (
        l(),
        (o = r.addEventListener) == null || o.call(r, "change", l),
        () => {
          var i;
          return (i = r.removeEventListener) == null ? void 0 : i.call(r, "change", l);
        }
      );
    }, [e]),
    t
  );
}
function po(e = ln) {
  const { threshold: t = ln.threshold, root: n = null, rootMargin: r = ln.rootMargin } = e || {},
    l = j.useRef(null),
    [o, i] = j.useState(!1);
  return (
    j.useEffect(() => {
      if (!l.current || o) return;
      const a = l.current,
        u = () => {
          const m = a.getBoundingClientRect(),
            h = window.innerHeight || document.documentElement.clientHeight,
            v = window.innerWidth || document.documentElement.clientWidth,
            w = Math.max(m.height, 1),
            N = (Math.min(m.bottom, h) - Math.max(m.top, 0)) / w;
          return m.left < v && m.right > 0 && m.bottom > 0 && m.top < h && N >= t;
        };
      if (u()) {
        i(!0);
        return;
      }
      let c;
      "IntersectionObserver" in window &&
        ((c = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && (i(!0), c.unobserve(a));
          },
          { threshold: t, root: n, rootMargin: r }
        )),
        c.observe(a));
      const d = () => {
        !o &&
          u() &&
          (i(!0),
          window.removeEventListener("scroll", d, { passive: !0 }),
          window.removeEventListener("resize", d));
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (c && c.disconnect(),
            window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d));
        }
      );
    }, [o, t, n, r]),
    { ref: l, inView: o }
  );
}
const Tp =
    "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
  is = `transform-gpu transition-transform transition-opacity duration-[820ms] ${Tp} will-change-transform will-change-opacity`;
function Ir(e, t, n = "") {
  return [
    is,
    e
      ? "opacity-100 translate-x-0"
      : `opacity-0 ${t === "left" ? "-translate-x-[10%]" : "translate-x-[10%]"}`,
    n,
  ].join(" ");
}
function _n(e, t = "", n = "760ms", r = 8) {
  const l = [is, e ? "opacity-100" : "opacity-0", "translate-y-[var(--dy)]", t].join(" "),
    o = { "--dy": e ? "0px" : `${r}px`, transitionDuration: n };
  return { className: l, style: o };
}
function Rp(e, t = "", n = 0) {
  const r = [
      is.replace("duration-[820ms]", "duration-[760ms]"),
      e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      t,
    ].join(" "),
    l = { transitionDelay: e ? `${n}ms` : "0ms" };
  return { className: r, style: l };
}
function Ip({
  headingTop: e = "Por que escolher o ONCAD?",
  headingBottom: t = "Porque por aqui, só há vantagens!",
  cards: n = Mp,
}) {
  const r = Pp(),
    l = po(r ? mo : ln),
    o = po(r ? mo : ln),
    i = po(r ? mo : ln),
    a = {
      primary: L == null ? void 0 : L.primary,
      primaryHover: L == null ? void 0 : L.primaryHover,
    };
  return s.jsx("section", {
    className: "bg-white text-slate-900 scroll-mt-24 md:scroll-mt-28",
    children: s.jsxs("div", {
      className: "mx-auto max-w-7xl px-2 pt-12 md:pt-16 pb-2 md:pb-4",
      children: [
        s.jsxs("header", {
          ref: l.ref,
          className: "text-center mb-10 md:mb-12",
          children: [
            s.jsx("h2", {
              ..._n(l.inView, "text-4xl md:text-5xl font-extrabold tracking-tight"),
              children: e,
            }),
            s.jsx("p", {
              className: Ir(
                l.inView,
                "right",
                "mt-2 text-3xl md:text-4xl font-extrabold tracking-tight"
              ),
              style: { color: a.primary },
              children: t,
            }),
          ],
        }),
        s.jsx("div", {
          ref: o.ref,
          className: "grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8",
          children: n.map(({ icon: u, title: c, desc: d }, m) =>
            s.jsxs(
              "article",
              {
                ...Rp(
                  o.inView,
                  "rounded-2xl p-6 md:p-8 shadow-sm flex flex-col transition-colors",
                  80 + m * 90
                ),
                style: { backgroundColor: a.primary },
                onMouseEnter: (h) => (h.currentTarget.style.backgroundColor = a.primaryHover),
                onMouseLeave: (h) => (h.currentTarget.style.backgroundColor = a.primary),
                children: [
                  s.jsx(u, { ..._n(o.inView, "w-10 h-10 text-white") }),
                  s.jsx("h3", {
                    className: Ir(o.inView, "right", "mt-5 text-2xl font-bold text-white"),
                    children: c,
                  }),
                  s.jsx("p", { ..._n(o.inView, "mt-3 text-white/95 flex-grow"), children: d }),
                  s.jsx("a", {
                    href: "#planos",
                    className: Ir(
                      o.inView,
                      "right",
                      "mt-5 inline-block font-semibold transition-opacity no-underline"
                    ),
                    style: {
                      color: "#fff",
                      opacity: o.inView ? 1 : 0,
                      transitionDelay: o.inView ? `${180 + m * 90}ms` : "0ms",
                    },
                    onMouseEnter: (h) => (h.currentTarget.style.opacity = 0.9),
                    onMouseLeave: (h) => (h.currentTarget.style.opacity = 1),
                    children: "Ver planos",
                  }),
                ],
              },
              c
            )
          ),
        }),
        s.jsxs("div", {
          className: "mt-10 md:mt-12",
          ref: i.ref,
          children: [
            s.jsx("p", {
              ..._n(i.inView, "text-center text-sm md:text-base text-slate-500"),
              children: "Realizamos integrações com os principais sistemas do mercado.",
            }),
            s.jsx("ul", {
              className: Ir(
                i.inView,
                "left",
                `
              mt-6 md:mt-8
              flex flex-nowrap md:flex-wrap
              items-center justify-between md:justify-center
              gap-x-4 md:gap-x-14 gap-y-0 md:gap-y-10
            `
              ),
              children: [
                { src: "/integrations/atua.webp", alt: "Atua" },
                { src: "/integrations/sankhya.webp", alt: "Sankhya" },
                { src: "/integrations/sat.webp", alt: "Sat" },
              ].map((u, c) =>
                s.jsx(
                  "li",
                  {
                    className: "w-1/3 md:w-auto flex items-center justify-center h-16 md:h-32",
                    style: { transitionDelay: i.inView ? `${80 + c * 90}ms` : "0ms" },
                    children: s.jsx("img", {
                      src: u.src,
                      alt: u.alt,
                      ..._n(i.inView, "max-h-full object-contain"),
                      loading: "lazy",
                      decoding: "async",
                    }),
                  },
                  u.alt
                )
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
const Op = [
    {
      id: "starter",
      title: "Starter",
      price: "R$ 850,00",
      priceSuffix: "/mês",
      highlight: "Essencial para começar com segurança",
      description: "Validações confiáveis integrado para sair do processo manual com rapidez.",
      features: [
        "100 cadastros/mês.",
        "5 usuários.",
        "1 integração com Atua, SAT, KMM e outros.",
        "Antifraude essencial + automação básica.",
        "Suporte (SLA em tempo real).",
      ],
    },
    {
      id: "basic",
      title: "Essential",
      price: "R$ 8,97",
      priceSuffix: "/por cadastro",
      highlight: "Mais controle para seu time",
      description: "Automação simples + antifraude e alertas para reduzir erros manuais.",
      features: [
        "minimo 350 cadastros/mês.",
        "12 usuários.",
        "1 integração com Atua, SAT, KMM e outros.",
        "Antifraude com regras + API.",
        "Suporte (SLA em tempo real).",
      ],
      popular: !0,
      badge: "Mais popular",
    },
    {
      id: "pro",
      title: "Pro",
      price: "Sob consulta",
      highlight: "Para empresas de médio e grande porte que precisam de velocidade e segurança",
      description: "Workflows completos, múltiplas integrações e API/Webhooks.",
      features: [
        "Cadastros ilimitados/mês",
        "usuários ilimitados",
        "Integrações múltiplas (Sankhya/Atua/SAT/KMM/outros)",
        "Antifraude avançado + automação",
        "Suporte (SLA full time)",
      ],
    },
  ],
  Dp = ["starter", "basic", "pro"],
  on = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" },
  ho = { threshold: 0.45, rootMargin: "0px" };
function $p(e = 768) {
  const [t, n] = j.useState(typeof window < "u" ? window.innerWidth < e : !1);
  return (
    j.useEffect(() => {
      var o;
      if (typeof window > "u") return;
      const r = window.matchMedia(`(max-width:${e - 1}px)`),
        l = () => n(r.matches);
      return (
        l(),
        (o = r.addEventListener) == null || o.call(r, "change", l),
        () => {
          var i;
          return (i = r.removeEventListener) == null ? void 0 : i.call(r, "change", l);
        }
      );
    }, [e]),
    t
  );
}
function go(e = on) {
  const { threshold: t = on.threshold, root: n = null, rootMargin: r = on.rootMargin } = e || {},
    l = j.useRef(null),
    [o, i] = j.useState(!1);
  return (
    j.useEffect(() => {
      if (!l.current || o) return;
      const a = l.current,
        u = () => {
          const m = a.getBoundingClientRect(),
            h = window.innerHeight || document.documentElement.clientHeight,
            v = window.innerWidth || document.documentElement.clientWidth,
            w = Math.max(m.height, 1),
            N = (Math.min(m.bottom, h) - Math.max(m.top, 0)) / w;
          return m.left < v && m.right > 0 && m.bottom > 0 && m.top < h && N >= t;
        };
      if (u()) {
        i(!0);
        return;
      }
      let c;
      "IntersectionObserver" in window &&
        ((c = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && (i(!0), c.unobserve(a));
          },
          { threshold: t, root: n, rootMargin: r }
        )),
        c.observe(a));
      const d = () => {
        !o &&
          u() &&
          (i(!0),
          window.removeEventListener("scroll", d, { passive: !0 }),
          window.removeEventListener("resize", d));
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (c && c.disconnect(),
            window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d));
        }
      );
    }, [o, t, n, r]),
    { ref: l, inView: o }
  );
}
const Ap =
    "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
  ss = `transform-gpu transition-transform transition-opacity duration-[820ms] ${Ap} will-change-transform will-change-opacity`;
function Rn(e, t, n = "") {
  return [ss, e ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[12%]", n].join(" ");
}
function Se(e, t = "", n = "760ms", r = 8) {
  const l = [ss, e ? "opacity-100" : "opacity-0", "translate-y-[var(--dy)]", t].join(" "),
    o = { "--dy": e ? "0px" : `${r}px`, transitionDuration: n };
  return { className: l, style: o };
}
function Fp(e, t = "", n = 0) {
  const r = [
      ss.replace("duration-[820ms]", "duration-[760ms]"),
      e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      t,
    ].join(" "),
    l = { transitionDelay: e ? `${n}ms` : "0ms" };
  return { className: r, style: l };
}
function Vp({
  id: e,
  title: t,
  price: n,
  priceSuffix: r,
  highlight: l,
  description: o,
  features: i,
  popular: a,
  badge: u,
  enterprise: c,
  inView: d,
  delay: m = 0,
}) {
  const h = c || e === "pro";
  return s.jsxs("div", {
    ...Fp(
      d,
      `
        relative h-full w-full max-w-[420px]
        rounded-2xl border border-white/10 bg-white/5
        shadow-lg overflow-hidden transition
        hover:ring-1 hover:ring-white/20
      `,
      m
    ),
    style: { boxShadow: "0 6px 22px rgba(0,0,0,.18)" },
    children: [
      a &&
        s.jsx("div", {
          ...Se(
            d,
            "absolute right-3 top-3 rounded-full px-2.5 py-1 text-[10px] md:text-xs font-medium text-white"
          ),
          style: {
            ...Se(d).style,
            backgroundColor: L.primary,
            transitionDelay: d ? `${m + 40}ms` : "0ms",
          },
          children: u || "Popular",
        }),
      s.jsxs("div", {
        className: "p-5 md:p-7 flex flex-col h-full min-h-[540px] md:min-h-[580px]",
        children: [
          s.jsxs("div", {
            className: "flex flex-col min-h-[240px] md:min-h-[260px]",
            children: [
              s.jsx("h3", {
                className: Rn(d, "right", "text-lg md:text-xl font-semibold"),
                children: t,
              }),
              h
                ? s.jsx("div", {
                    className: Rn(d, "right", "mt-1 md:mt-2 flex items-baseline gap-1"),
                    children: s.jsx("span", {
                      className: "text-2xl md:text-4xl font-extrabold",
                      children: n,
                    }),
                  })
                : s.jsxs(s.Fragment, {
                    children: [
                      s.jsx("p", {
                        ...Se(d, "mt-1 text-white/70 text-xs md:text-sm"),
                        children: "A partir de",
                      }),
                      s.jsxs("div", {
                        className: Rn(d, "right", "mt-1 md:mt-2 flex items-baseline gap-1"),
                        children: [
                          s.jsx("span", {
                            className: "text-2xl md:text-4xl font-extrabold",
                            children: n,
                          }),
                          r &&
                            s.jsx("span", {
                              className: "text-white/60 text-xs md:text-base",
                              children: r,
                            }),
                        ],
                      }),
                      e === "starter" &&
                        s.jsx("p", {
                          ...Se(d, "mt-1 text-[10px] md:text-xs text-white/50"),
                          children: "*no plano anual",
                        }),
                    ],
                  }),
              s.jsx("p", {
                ...Se(d, "mt-3 md:mt-3 text-sm md:text-base font-semibold"),
                children: l,
              }),
              s.jsx("p", { ...Se(d, "mt-1 text-[13px] md:text-sm text-white/80"), children: o }),
              s.jsx("div", { className: "flex-1" }),
              s.jsx("div", {
                ...Se(d, "mt-2 md:mt-3 flex justify-start"),
                children: s.jsx("a", {
                  href: "#contato",
                  className: `\r
                inline-flex items-center justify-center\r
                rounded-xl px-4 md:px-5 py-2.5 md:py-2\r
                font-semibold text-sm md:text-base\r
                whitespace-nowrap\r
                transition-colors\r
              `,
                  style: { backgroundColor: L.primary, color: "#fff" },
                  onMouseEnter: (v) => (v.currentTarget.style.backgroundColor = L.primaryHover),
                  onMouseLeave: (v) => (v.currentTarget.style.backgroundColor = L.primary),
                  children: h ? "Fale com o Comercial" : "Agendar Demo Gratuita",
                }),
              }),
            ],
          }),
          s.jsx("div", { className: "mt-5 md:mt-6 h-px bg-white/10" }),
          s.jsxs("div", {
            className: "mt-3 md:mt-4",
            children: [
              s.jsx("p", {
                className: Rn(d, "right", "text-sm md:text-base font-semibold"),
                children: "Incluso:",
              }),
              s.jsx("ul", {
                className: "mt-3 space-y-2 text-[13px] md:text-sm text-white/90",
                children: i.map((v, w) => {
                  const y = Se(d, "flex items-start gap-2");
                  return s.jsxs(
                    "li",
                    {
                      ...y,
                      style: { ...y.style, transitionDelay: d ? `${m + 80 + w * 40}ms` : "0ms" },
                      children: [
                        s.jsx("span", {
                          className: "mt-1 inline-block h-1.5 w-1.5 rounded-full",
                          style: { backgroundColor: L.primary },
                        }),
                        s.jsx("span", { children: v }),
                      ],
                    },
                    w
                  );
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Bp() {
  const e = j.useRef(null),
    t = j.useRef([]),
    [n, r] = j.useState(0),
    l = Op.filter((m) => Dp.includes(m.id)),
    o = (m, h = !0) => {
      const v = e.current,
        w = t.current[m];
      if (!v || !w) return;
      const y = w.offsetLeft + w.offsetWidth / 2 - v.clientWidth / 2;
      v.scrollTo({ left: y, behavior: h ? "smooth" : "auto" });
    };
  j.useEffect(() => {
    o(0, !1);
    const m = () => o(n, !1);
    return (window.addEventListener("resize", m), () => window.removeEventListener("resize", m));
  }, []);
  const i = (m) => {
      const h = l.length - 1,
        v = m === "next" ? Math.min(n + 1, h) : Math.max(n - 1, 0);
      (r(v), o(v));
    },
    a = $p(),
    u = go(a ? ho : on),
    c = go(a ? ho : on),
    d = go(a ? ho : on);
  return s.jsx("section", {
    id: "planos",
    className: "relative py-16 md:py-20 bg-[#121212] text-white overflow-x-hidden",
    children: s.jsxs("div", {
      className: "mx-auto max-w-7xl px-4",
      children: [
        s.jsxs("header", {
          ref: u.ref,
          className: "text-center max-w-3xl mx-auto overflow-x-hidden",
          children: [
            s.jsx("h2", {
              ...Se(u.inView, "text-3xl md:text-5xl font-extrabold"),
              children: "Planos OnCad",
            }),
            s.jsx("p", {
              ...Se(u.inView, "mt-3 text-white/80 text-sm md:text-base"),
              children:
                "Escolha o plano ideal para impulsionar seus cadastros e reduzir fraudes dos seus clientes!",
            }),
            s.jsx("div", {
              className: "overflow-x-hidden",
              children: s.jsxs("div", {
                className: Rn(
                  u.inView,
                  "right",
                  "mt-4 flex flex-wrap items-center justify-center gap-2"
                ),
                children: [
                  s.jsxs("span", {
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs md:text-sm",
                    children: [
                      s.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: s.jsx("path", {
                          fill: L.primary,
                          d: "M12 2l7 4v6c0 5-7 10-7 10S5 17 5 12V6l7-4z",
                        }),
                      }),
                      "Garantia de Satisfação de 30 dias",
                    ],
                  }),
                  s.jsxs("span", {
                    className:
                      "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs md:text-sm",
                    children: [
                      s.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: s.jsx("path", {
                          fill: L.primary,
                          d: "M12 1a5 5 0 0 0-5 5v2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm0 2a3 3 0 0 1 3 3v2H9V6a3 3 0 0 1 3-3Z",
                        }),
                      }),
                      "Sem fidelidade em todos os planos",
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "relative mt-8 px-3 sm:px-6",
          children: [
            s.jsx("button", {
              type: "button",
              "aria-label": "Plano anterior",
              onClick: () => i("prev"),
              className: `\r
              md:hidden absolute left-1 top-1/2 -translate-y-1/2 z-10\r
              grid place-items-center w-9 h-9 rounded-full\r
              bg-white/10 hover:bg-white/15 border border-white/15\r
            `,
              children: s.jsx("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: s.jsx("path", {
                  d: "M15 6l-6 6 6 6",
                  stroke: "#fff",
                  strokeWidth: "2",
                  fill: "none",
                }),
              }),
            }),
            s.jsx("button", {
              type: "button",
              "aria-label": "Próximo plano",
              onClick: () => i("next"),
              className: `\r
              md:hidden absolute right-1 top-1/2 -translate-y-1/2 z-10\r
              grid place-items-center w-9 h-9 rounded-full\r
              bg-white/10 hover:bg-white/15 border border-white/15\r
            `,
              children: s.jsx("svg", {
                width: "18",
                height: "18",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: s.jsx("path", {
                  d: "M9 6l6 6-6 6",
                  stroke: "#fff",
                  strokeWidth: "2",
                  fill: "none",
                }),
              }),
            }),
            s.jsx("div", { ref: c.ref, className: "h-1 w-full", "aria-hidden": !0 }),
            s.jsx("div", {
              ref: e,
              className: `\r
              relative flex items-stretch gap-6 overflow-x-auto scroll-smooth no-scrollbar\r
              snap-x snap-mandatory pb-2 justify-start z-0 px-4\r
            `,
              style: { scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" },
              children: l.map((m, h) =>
                s.jsx(
                  "div",
                  {
                    ref: (v) => (t.current[h] = v),
                    "data-card": !0,
                    className: `\r
                  snap-center shrink-0 overflow-visible\r
                  w-[82vw] sm:w-[60vw]\r
                  md:w-[360px] lg:w-[380px]\r
                  flex justify-center\r
                `,
                    children: s.jsx(Vp, { ...m, inView: c.inView, delay: 80 + h * 120 }),
                  },
                  m.id
                )
              ),
            }),
          ],
        }),
        s.jsx("div", {
          ref: d.ref,
          ...Se(d.inView, "mt-10"),
          children: s.jsxs("div", {
            className: "mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4",
            children: [
              s.jsx("div", {
                className:
                  "rounded-2xl border border-white/10 bg-white/5 hover:ring-1 hover:ring-white/20 transition",
                children: s.jsxs("div", {
                  className: "flex items-start gap-3 pl-5 md:pl-6 py-5 md:py-6",
                  style: { paddingRight: "3.25rem" },
                  children: [
                    s.jsx(mp, {
                      size: 20,
                      strokeWidth: 2,
                      color: L.primary,
                      className: "shrink-0 mt-0.5",
                    }),
                    s.jsxs("div", {
                      className: "flex-1 min-w-0 leading-relaxed",
                      children: [
                        s.jsx("strong", {
                          className: "block font-semibold whitespace-nowrap",
                          children: "Teste gratuito por 30 dias",
                        }),
                        s.jsx("p", {
                          className: "text-white/80 text-xs md:text-sm",
                          children: "Experimente o OnCad completo (limitado a 50 cadastros).",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              s.jsx("div", {
                className:
                  "rounded-2xl border border-white/10 bg-white/5 hover:ring-1 hover:ring-white/20 transition",
                children: s.jsxs("div", {
                  className: "flex items-start gap-3 pl-5 md:pl-6 py-5 md:py-6",
                  style: { paddingRight: "2.5rem" },
                  children: [
                    s.jsx(pp, {
                      size: 20,
                      strokeWidth: 2,
                      color: L.primary,
                      className: "shrink-0 mt-0.5",
                    }),
                    s.jsxs("div", {
                      className: "flex-1 min-w-0 leading-relaxed",
                      children: [
                        s.jsx("strong", {
                          className: "block font-semibold",
                          children: "Consultoria gratuita de implementação",
                        }),
                        s.jsx("p", {
                          className: "text-white/80 text-xs md:text-sm",
                          children: "Implantação guiada para acelerar resultados.",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        s.jsx("p", {
          ...Se(d.inView, "mt-8 text-center text-sm text-white/60"),
          children:
            "Para informações sobre planos personalizados para grandes volumes, entre em contato.",
        }),
      ],
    }),
  });
}
const Xc =
    "https://wa.me/556292631996?text=Acabei+de+visitar+o+site+da+ONROTA+e+quero+saber+mais+sobre+o+produto+ONCAD,+e+como+ele+pode+manter+minha+opera%C3%A7%C3%A3o+mais+segura,+eficiente+e+livre+de+fraudes.",
  Up =
    "https://www.google.com/maps/place/Rua+22,+2+-+Quadra+17,+Lote+08,+Casa+2+-+Parque+dos+Buritis,+Rio+Verde+-+GO/@-17.810794,-50.9334382,3a,75y,244.67h,80.05t/data=!3m7!1e1!3m5!1sqOOEFFFSwTdPde42QtIGLw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.951375240312885%26panoid%3DqOOEFFFSwTdPde42QtIGLw%26yaw%3D244.6673240813699!7i16384!8i8192!4m13!1m7!3m6!1s0x9361dc7e652f9431:0xea8ddac3b3ca37c2!2sRua+22,+2+-+Quadra+17,+Lote+08,+Casa+2+-+Parque+dos+Buritis,+Rio+Verde+-+GO!3b1!8m2!3d-17.8105442!4d-50.9334774!3m4!1s0x9361dc7e652f9431:0xea8ddac3b3ca37c2!8m2!3d-17.8105442!4d-50.9334774?authuser=0&entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D",
  Hp = "/assets/appstore-badge-B2f2RYb9.svg",
  bp = "/assets/googleplay-badge-DG61JUj-.png",
  Kr = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" },
  Wp = { threshold: 0.45, rootMargin: "0px" };
function Qp(e = 768) {
  const [t, n] = j.useState(typeof window < "u" ? window.innerWidth < e : !1);
  return (
    j.useEffect(() => {
      var o;
      if (typeof window > "u") return;
      const r = window.matchMedia(`(max-width:${e - 1}px)`),
        l = () => n(r.matches);
      return (
        l(),
        (o = r.addEventListener) == null || o.call(r, "change", l),
        () => {
          var i;
          return (i = r.removeEventListener) == null ? void 0 : i.call(r, "change", l);
        }
      );
    }, [e]),
    t
  );
}
function Gp(e = Kr) {
  const { threshold: t = Kr.threshold, root: n = null, rootMargin: r = Kr.rootMargin } = e || {},
    l = j.useRef(null),
    [o, i] = j.useState(!1);
  return (
    j.useEffect(() => {
      const a = l.current;
      if (!a || o) return;
      const u = () => {
        const m = a.getBoundingClientRect(),
          h = window.innerHeight || document.documentElement.clientHeight,
          v = window.innerWidth || document.documentElement.clientWidth,
          w = Math.max(m.height, 1),
          N = (Math.min(m.bottom, h) - Math.max(m.top, 0)) / w;
        return m.left < v && m.right > 0 && m.bottom > 0 && m.top < h && N >= t;
      };
      if (u()) {
        i(!0);
        return;
      }
      let c;
      "IntersectionObserver" in window &&
        ((c = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && (i(!0), c.unobserve(a));
          },
          { threshold: t, root: n, rootMargin: r }
        )),
        c.observe(a));
      const d = () => {
        !o &&
          u() &&
          (i(!0),
          window.removeEventListener("scroll", d, { passive: !0 }),
          window.removeEventListener("resize", d));
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (c && c.disconnect(),
            window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d));
        }
      );
    }, [o, t, n, r]),
    { ref: l, inView: o }
  );
}
const Kp =
    "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
  Yp = `transform-gpu transition-transform transition-opacity duration-[820ms] ${Kp} will-change-transform will-change-opacity`,
  Sa = (e) => [Yp, e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[10px]"].join(" "),
  Xp = {
    WhatsApp: (e) =>
      s.jsxs("svg", {
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        ...e,
        children: [
          s.jsx("path", {
            d: "M19.1 17.3c-.3-.1-1-.4-1.1-.4s-.3-.1-.5.1c-.1.2-.5.4-.6.5-.1.1-.2.1-.4 0-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.6-1.8-.2-.3 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3 0-.1-.5-1.2-.6-1.6-.2-.4-.3-.3-.5-.3h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.2s.5 1.4.5 1.5c.1.2 1 1.9 2.5 3.2 1.7 1.6 3.2 2 3.6 2.2.4.1.9.1 1.2.1.4 0 1.2-.5 1.3-.9.2-.5.2-1 .1-1.1-.1-.1-.3-.1-.6-.2z",
          }),
          s.jsx("path", {
            d: "M27.6 4.4A14 14 0 0 0 5.5 26.4L4 30.9l4.6-1.5A14 14 0 1 0 27.6 4.4zM16 28a12 12 0 1 1 10.9-6.7A12 12 0 0 1 16 28z",
          }),
        ],
      }),
  };
function qp() {
  const e = Qp(),
    t = Gp(e ? Wp : Kr);
  return s.jsxs("section", {
    id: "contato",
    className: "bg-black",
    children: [
      s.jsxs("div", {
        style: { backgroundColor: L.primary },
        className: "text-center",
        children: [
          s.jsx("div", { ref: t.ref, className: "h-1 w-full", "aria-hidden": !0 }),
          s.jsxs("div", {
            className: "py-10 sm:py-12 md:py-16",
            children: [
              s.jsx("h2", {
                className: Sa(t.inView),
                style: {
                  transitionDelay: (t.inView, "0ms"),
                  color: "#fff",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  fontSize: "clamp(1.25rem, 4.5vw, 2.5rem)",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "48rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                },
                children: "Deseja aumentar a segurança e eficiência do seu cadastro?",
              }),
              s.jsx("p", {
                className: Sa(t.inView),
                style: {
                  transitionDelay: t.inView ? "120ms" : "0ms",
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "clamp(0.875rem, 2.5vw, 1.125rem)",
                  marginTop: "0.5rem",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "42rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                },
                children:
                  "Entre em contato agora mesmo pelos canais abaixo e fale com a nossa equipe.",
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        className: "py-12 md:py-16 mx-auto max-w-7xl px-4",
        children: [
          s.jsxs("div", {
            className: "grid md:grid-cols-3 gap-10 md:gap-16 items-start text-center md:text-left",
            children: [
              s.jsxs("aside", {
                className: "space-y-4 md:mt-6",
                children: [
                  s.jsx("img", {
                    src: ls,
                    alt: "OnRota",
                    className: "h-14 md:h-[72px] w-auto opacity-95 mx-auto md:mx-0",
                  }),
                  s.jsx("p", {
                    className: "text-white/70 text-sm max-w-md mx-auto md:mx-0",
                    children: "Soluções antifraude e automação para transporte rodoviário.",
                  }),
                ],
              }),
              s.jsx("div", {
                className: "text-white/90 text-sm md:text-base md:mt-6",
                children: s.jsxs("div", {
                  className:
                    "flex flex-col md:flex-row md:flex-wrap items-center md:items-start justify-center md:justify-start gap-y-3 gap-x-6",
                  children: [
                    s.jsxs("div", {
                      className: "whitespace-nowrap",
                      children: [
                        s.jsx("span", {
                          className: "text-white font-semibold",
                          children: "Telefone:",
                        }),
                        " ",
                        s.jsx("a", {
                          href: "#",
                          onClick: (n) => n.preventDefault(),
                          className: "hover:underline",
                          style: { color: "#fff" },
                          children: "+55 62 99263-1996",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "whitespace-nowrap",
                      children: [
                        s.jsx("span", {
                          className: "text-white font-semibold",
                          children: "E-mail:",
                        }),
                        " ",
                        s.jsx("a", {
                          href: "mailto:contato@onrota.tech",
                          className: "hover:underline",
                          style: { color: "#fff" },
                          children: "contato@onrota.tech",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "md:basis-full pt-1",
                      children: s.jsxs("a", {
                        href: Xc,
                        target: "_blank",
                        rel: "noreferrer",
                        className:
                          "inline-flex items-center gap-2 rounded-md font-semibold px-4 py-2 text-sm transition",
                        style: { backgroundColor: "#22c55e", color: "#fff" },
                        onMouseEnter: (n) => (n.currentTarget.style.backgroundColor = "#16a34a"),
                        onMouseLeave: (n) => (n.currentTarget.style.backgroundColor = "#22c55e"),
                        children: [s.jsx(Xp.WhatsApp, { className: "w-4 h-4" }), "WhatsApp"],
                      }),
                    }),
                  ],
                }),
              }),
              s.jsxs("div", {
                className: "text-white/90 text-sm md:text-base md:mt-6",
                children: [
                  s.jsxs("div", {
                    children: [
                      s.jsx("span", {
                        className: "text-white font-semibold",
                        children: "Localização:",
                      }),
                      " ",
                      s.jsx("a", {
                        href: Up,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "hover:underline text-white",
                        style: { color: "#fff" },
                        children:
                          "Rua 22, Quadra 17, Lote 08, Casa 2, Parque dos Buritis 2, 75.907-380, Rio Verde - GO.",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "mt-5",
                    children: [
                      s.jsx("p", {
                        className: "text-white/80 text-xs md:text-sm mb-2",
                        children: "Baixe nosso app em sua loja de aplicativos:",
                      }),
                      s.jsxs("div", {
                        className:
                          "flex items-center gap-3 flex-wrap justify-center md:justify-start",
                        children: [
                          s.jsx("a", {
                            href: "https://apps.apple.com/br/app/oncad-cadastro-f%C3%A1cil/id6752832394 ",
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Baixar na App Store",
                            className: "inline-flex",
                            children: s.jsx("img", {
                              src: Hp,
                              alt: "Baixar na App Store",
                              className: "h-9 w-auto object-contain",
                            }),
                          }),
                          s.jsx("a", {
                            href: "https://play.google.com/store/apps/details?id=seuapp",
                            target: "_blank",
                            rel: "noreferrer",
                            "aria-label": "Baixar no Google Play",
                            className: "inline-flex",
                            children: s.jsx("img", {
                              src: bp,
                              alt: "Baixar no Google Play",
                              className: "h-9 w-auto object-contain",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          s.jsx("style", {
            children: `
          #contato a:hover { color: ${L.primary}; }
        `,
          }),
        ],
      }),
    ],
  });
}
const Zp = [
    {
      company: "Pianetto Transportes",
      role: "Diretoria",
      name: "Pianetto",
      quote:
        "Antes do ONCAD, nosso processo de cadastro era um pesadelo. Cada embarcador precisava digitar manualmente dados de cavalo, carreta, CNH do motorista, proprietário e ANTT, além de consultar sites de governo para verificar validade de documentos. Isso consumia tempo, gerava retrabalho e abria brechas para fraudes. Motoristas adulteravam informações como CNHs cassadas registradas como válidas e ainda existia o risco de corrupção interna, quando algum funcionário aprovava dados errados de propósito. O ONCAD eliminou tudo isso em segundos. O sistema faz todas as consultas automaticamente nos órgãos oficiais, valida documentos em menos de um minuto e impede qualquer fraude, seja do motorista ou do colaborador. Hoje trabalhamos com confiança, agilidade e segurança em cada cadastro. Mais do que uma ferramenta, o ONCAD se tornou um escudo contra erros e fraudes, garantindo eficiência e proteção total para a operação",
      logo: "/logos/@1x/pianetto@1x.webp",
      rating: 5,
    },
    {
      company: "Transportadora Boa Viagem",
      role: "Gerente Operacional",
      name: "Boa Viagem",
      quote:
        "O transporte rodoviário exige decisões rápidas e seguras, e muitas vezes não tínhamos esse suporte com os processos antigos. O ONCAD veio para mudar essa realidade. O sistema antifraude foi um divisor de águas, porque eliminou as incertezas que tínhamos nas conferências manuais. Antes, a equipe precisava revisar documentos e cadastros diversas vezes, o que atrasava todo o fluxo. Agora, conseguimos validar tudo em segundos, com muito mais precisão. Além de economizar tempo, reduzimos riscos que poderiam gerar grandes prejuízos. Mais do que uma ferramenta, o ONCAD se tornou um parceiro estratégico no dia a dia da nossa operação.",
      logo: "/logos/@1x/boa-viagem@1x.webp",
      rating: 5,
    },
    {
      company: "Anderle",
      role: "CEO",
      name: "Anderle",
      quote:
        "Adotar o ONCAD foi uma das decisões mais acertadas da nossa empresa. Sempre tivemos preocupação com a segurança dos dados e com a confiabilidade das informações, mas era difícil manter um controle eficiente sem gastar muito tempo e recursos. Desde que implementamos a plataforma, percebemos uma transformação completa: os processos ficaram mais organizados, os cadastros passaram a ser validados automaticamente e nossa equipe ganhou liberdade para focar em tarefas mais estratégicas. Hoje nos sentimos preparados para crescer sem medo de inconsistências, porque sabemos que temos uma base sólida, segura e confiável sustentando nossa operação.",
      logo: "/logos/@1x/anderle@1x.webp",
      rating: 5,
    },
    {
      company: "SHR LOG",
      role: "Gerente Comercial",
      name: "SHR LOG",
      quote:
        "O que mais me surpreendeu no ONCAD foi a facilidade de integração com nosso ERP. Durante anos, nossa rotina foi marcada por planilhas desatualizadas, erros de digitação e processos engessados. Isso gerava retrabalhos constantes e insegurança na hora de tomar decisões. Com a automação que o ONCAD trouxe, conseguimos eliminar quase todos esses gargalos. Hoje temos um fluxo ágil, transparente e confiável, que não apenas agiliza os cadastros, mas também nos permite enxergar de forma clara os pontos de melhoria. Esse ganho de eficiência impactou diretamente nossa produtividade e trouxe muito mais segurança para planejar o futuro.",
      logo: "/logos/@1x/shrlog@1x.webp",
      rating: 5,
    },
  ],
  Jp = { "Boa Viagem": "scale-[1.9] md:scale-[1.6]" };
function eh(e) {
  return e > 1100
    ? "text-[0.82rem] md:text-[0.9rem]"
    : e > 850
      ? "text-[0.86rem] md:text-[0.92rem]"
      : "text-[0.9rem] md:text-[0.95rem]";
}
const bn = { threshold: 0.34, rootMargin: "0px 0px -8% 0px" },
  Na = { threshold: 0.45, rootMargin: "0px" };
function th(e = 768) {
  const [t, n] = j.useState(typeof window < "u" ? window.innerWidth < e : !1);
  return (
    j.useEffect(() => {
      var o;
      if (typeof window > "u") return;
      const r = window.matchMedia(`(max-width:${e - 1}px)`),
        l = () => n(r.matches);
      return (
        l(),
        (o = r.addEventListener) == null || o.call(r, "change", l),
        () => {
          var i;
          return (i = r.removeEventListener) == null ? void 0 : i.call(r, "change", l);
        }
      );
    }, [e]),
    t
  );
}
function Ea(e = bn) {
  const { threshold: t = bn.threshold, root: n = null, rootMargin: r = bn.rootMargin } = e || {},
    l = j.useRef(null),
    [o, i] = j.useState(!1);
  return (
    j.useEffect(() => {
      if (!l.current || o) return;
      const a = l.current,
        u = () => {
          const m = a.getBoundingClientRect(),
            h = window.innerHeight || document.documentElement.clientHeight,
            v = window.innerWidth || document.documentElement.clientWidth,
            w = Math.max(m.height, 1),
            N = (Math.min(m.bottom, h) - Math.max(m.top, 0)) / w;
          return m.left < v && m.right > 0 && m.bottom > 0 && m.top < h && N >= t;
        };
      if (u()) {
        i(!0);
        return;
      }
      let c;
      "IntersectionObserver" in window &&
        ((c = new IntersectionObserver(
          (m) => {
            m[0].isIntersecting && (i(!0), c.unobserve(a));
          },
          { threshold: t, root: n, rootMargin: r }
        )),
        c.observe(a));
      const d = () => {
        !o &&
          u() &&
          (i(!0),
          window.removeEventListener("scroll", d, { passive: !0 }),
          window.removeEventListener("resize", d));
      };
      return (
        window.addEventListener("scroll", d, { passive: !0 }),
        window.addEventListener("resize", d),
        () => {
          (c && c.disconnect(),
            window.removeEventListener("scroll", d),
            window.removeEventListener("resize", d));
        }
      );
    }, [o, t, n, r]),
    { ref: l, inView: o }
  );
}
const nh =
    "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
  as = `transform-gpu transition-transform transition-opacity duration-[820ms] ${nh} will-change-transform will-change-opacity`;
function Ca(e, t, n = "") {
  return [
    as,
    e
      ? "opacity-100 translate-x-0"
      : `opacity-0 ${t === "left" ? "-translate-x-[12%]" : "translate-x-[12%]"}`,
    n,
  ].join(" ");
}
function Ft(e, t = "", n = "760ms", r = 8) {
  const l = [as, e ? "opacity-100" : "opacity-0", "translate-y-[var(--dy)]", t].join(" "),
    o = { "--dy": e ? "0px" : `${r}px`, transitionDuration: n };
  return { className: l, style: o };
}
function rh(e, t = "", n = 0) {
  const r = [
      as.replace("duration-[820ms]", "duration-[760ms]"),
      e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      t,
    ].join(" "),
    l = { transitionDelay: e ? `${n}ms` : "0ms" };
  return { className: r, style: l };
}
function lh({ heading: e = "Quem experimentou, se encantou!", items: t = Zp }) {
  const n = j.useRef(null),
    r = j.useRef([]),
    [l, o] = j.useState(1),
    [i, a] = j.useState(0),
    u = th(),
    c = Ea(u ? Na : bn),
    d = Ea(u ? Na : bn),
    m = () => {
      const N = window.innerWidth;
      return N >= 1024 ? 3 : N >= 768 ? 2 : 1;
    };
  j.useEffect(() => {
    const N = () => o(m());
    return (
      o(m()),
      window.addEventListener("resize", N),
      () => window.removeEventListener("resize", N)
    );
  }, []);
  const h = j.useMemo(() => Math.max(0, Math.ceil(t.length / l) - 1), [t.length, l]),
    v = (N, p = !0) => {
      const f = n.current;
      f && f.scrollTo({ left: f.clientWidth * N, behavior: p ? "smooth" : "auto" });
    },
    w = () => {
      const N = i - 1 < 0 ? h : i - 1;
      (a(N), v(N));
    },
    y = () => {
      const N = i + 1 > h ? 0 : i + 1;
      (a(N), v(N));
    };
  return (
    j.useEffect(() => {
      const N = n.current;
      if (!N) return;
      const p = new IntersectionObserver(
        (f) => {
          const g = f
            .filter((x) => x.isIntersecting)
            .sort((x, S) => S.intersectionRatio - x.intersectionRatio)[0];
          if (g) {
            const x = Number(g.target.getAttribute("data-slide-index")),
              S = Math.floor(x / l);
            a((_) => (_ !== S ? S : _));
          }
        },
        { root: N, threshold: [0.5, 0.6, 0.7] }
      );
      return (r.current.forEach((f) => f && p.observe(f)), () => p.disconnect());
    }, [l, t.length]),
    j.useEffect(() => {
      v(i, !1);
    }, [l]),
    s.jsx("section", {
      className: "bg-gray-100 text-slate-900 scroll-mt-24 md:scroll-mt-28",
      children: s.jsxs("div", {
        className: "mx-auto max-w-7xl px-3 pt-8 md:pt-12 pb-6 md:pb-8",
        children: [
          s.jsx("h2", {
            ref: c.ref,
            ...Ft(c.inView, "text-center text-3xl md:text-4xl font-extrabold tracking-tight"),
            children: e,
          }),
          s.jsxs("div", {
            className: "relative mt-6 md:mt-8",
            children: [
              s.jsx("div", { ref: d.ref, className: "h-1 w-full", "aria-hidden": !0 }),
              s.jsx("div", {
                ref: n,
                ...Ft(d.inView, "overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"),
                style: { ...Ft(d.inView).style, WebkitOverflowScrolling: "touch" },
                children: s.jsx("div", {
                  className: `\r
                grid grid-flow-col\r
                auto-cols-[100%]\r
                md:auto-cols-[calc((100%-0.5rem)/2)]\r
                lg:auto-cols-[calc((100%-1.5rem)/3)]\r
                gap-2.5 lg:gap-3\r
                items-start\r
              `,
                  children: t.map((N, p) => {
                    const f = Jp[N.name] ?? "",
                      g = (N.quote || "").length;
                    return s.jsxs(
                      "article",
                      {
                        "data-slide-index": p,
                        ref: (x) => (r.current[p] = x),
                        ...rh(
                          d.inView,
                          `
                      snap-center snap-always
                      rounded-xl border border-slate-200 bg-white
                      p-4 md:p-5 shadow-sm flex flex-col self-start
                    `,
                          80 + p * 90
                        ),
                        children: [
                          s.jsx(hp, { className: "w-6 h-6", style: { color: L.primary } }),
                          s.jsxs("p", {
                            ...Ft(d.inView, `mt-3 text-slate-700 leading-[1.5] ${eh(g)}`),
                            children: ["“", N.quote, "”"],
                          }),
                          s.jsxs("div", {
                            className: "mt-4 md:mt-5",
                            children: [
                              s.jsx("div", {
                                className: Ca(
                                  d.inView,
                                  "right",
                                  "font-semibold text-slate-900 text-[0.9rem] md:text-[0.95rem]"
                                ),
                                children: N.company,
                              }),
                              s.jsx("div", {
                                ...Ft(d.inView, "text-slate-500 text-[0.78rem] md:text-[0.82rem]"),
                                children: N.role,
                              }),
                              s.jsxs("div", {
                                className: "mt-3.5 flex items-center justify-between gap-2",
                                children: [
                                  s.jsx("div", {
                                    className: Ca(
                                      d.inView,
                                      "left",
                                      "h-7 md:h-8 max-w-[46%] flex items-center"
                                    ),
                                    children: s.jsx("img", {
                                      src: N.logo,
                                      alt: N.name,
                                      className: `h-full w-auto object-contain shrink-0 origin-left ${f}`,
                                      loading: "lazy",
                                      decoding: "async",
                                    }),
                                  }),
                                  s.jsx("div", {
                                    ...Ft(d.inView, "flex items-center gap-[3px] shrink-0"),
                                    children: Array.from({ length: 5 }).map((x, S) =>
                                      s.jsx(
                                        gp,
                                        {
                                          className: "w-[12px] h-[12px]",
                                          style: {
                                            color: S < (N.rating || 5) ? "#facc15" : "#cbd5e1",
                                            fill: S < (N.rating || 5) ? "#facc15" : "none",
                                          },
                                        },
                                        S
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      p
                    );
                  }),
                }),
              }),
              s.jsx("button", {
                type: "button",
                "aria-label": "Anterior",
                onClick: w,
                className: `\r
              place-items-center\r
              absolute -left-2 top-1/2 -translate-y-1/2 z-10\r
              w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm\r
              hover:bg-slate-50\r
            `,
                children: s.jsx(vp, { className: "w-3.5 h-3.5" }),
              }),
              s.jsx("button", {
                type: "button",
                "aria-label": "Próximo",
                onClick: y,
                className: `\r
              place-items-center\r
              absolute -right-2 top-1/2 -translate-y-1/2 z-10\r
              w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm\r
              hover:bg-slate-50\r
            `,
                children: s.jsx(xp, { className: "w-3.5 h-3.5" }),
              }),
              s.jsx("div", {
                className: "mt-4 flex justify-center gap-1",
                children: Array.from({ length: h + 1 }).map((N, p) =>
                  s.jsx(
                    "button",
                    {
                      "aria-label": `Ir para slide ${p + 1}`,
                      onClick: () => {
                        (a(p), v(p));
                      },
                      className: "h-1.5 rounded-full transition-all",
                      style: {
                        width: p === i ? 16 : 6,
                        backgroundColor: p === i ? L.primary : "#cbd5e1",
                      },
                    },
                    p
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    })
  );
}
function oh({
  delayMs: e = 5e3,
  reopenMs: t = null,
  imageSrc: n = "/mockups/homem-segurando-celular.webp",
  imageAlt: r = "Homem segurando um telefone",
  oncadLogoSrc: l = "/logos/opt/oncad.webp",
  oncePerDay: o = !0,
  resetOnClosePage: i = !1,
}) {
  const [a, u] = j.useState(!1),
    [c, d] = j.useState(!1),
    m = j.useRef(null),
    h = "plansPromo_lastShownDate",
    v = () => {
      const y = new Date(),
        N = y.getFullYear(),
        p = String(y.getMonth() + 1).padStart(2, "0"),
        f = String(y.getDate()).padStart(2, "0");
      return `${N}-${p}-${f}`;
    };
  (j.useEffect(() => {
    let y = null;
    try {
      y = localStorage.getItem(h);
    } catch {
      y = null;
    }
    return (
      (!o || y !== v()) &&
        (m.current = setTimeout(() => {
          if ((u(!0), setTimeout(() => d(!0), 10), o))
            try {
              localStorage.setItem(h, v());
            } catch {}
        }, e)),
      () => {
        m.current && clearTimeout(m.current);
      }
    );
  }, [e, o]),
    j.useEffect(() => {
      if (!i) return;
      const y = () => {
        try {
          localStorage.removeItem(h);
        } catch {}
      };
      return (
        window.addEventListener("beforeunload", y),
        () => window.removeEventListener("beforeunload", y)
      );
    }, [i]),
    j.useEffect(() => {
      if (!a) return;
      const y = document.body.style.overflow;
      return (
        (document.body.style.overflow = "hidden"),
        () => {
          document.body.style.overflow = y;
        }
      );
    }, [a]));
  const w = () => {
    (d(!1), setTimeout(() => u(!1), 150));
  };
  return (
    j.useEffect(() => {
      if (!a) return;
      const y = (N) => N.key === "Escape" && w();
      return (
        window.addEventListener("keydown", y),
        () => window.removeEventListener("keydown", y)
      );
    }, [a]),
    a
      ? s.jsxs("div", {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "plans-promo-title",
          className: "fixed inset-0 z-[10050] flex items-center justify-center p-3 md:p-4",
          children: [
            s.jsx("div", {
              className: `absolute inset-0 bg-black/55 md:bg-black/60 backdrop-blur-[2px] transition-opacity duration-150 ${c ? "opacity-100" : "opacity-0"}`,
              onClick: w,
            }),
            s.jsxs("div", {
              className: `
          relative z-[10100] w-full max-w-[56rem]
          overflow-hidden text-white shadow-2xl ring-1 ring-white/10 bg-[#121212]
          rounded-xl md:rounded-2xl
          transition-all duration-200
          ${c ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `,
              onClick: (y) => y.stopPropagation(),
              children: [
                s.jsx("button", {
                  "aria-label": "Fechar",
                  onClick: w,
                  className:
                    "absolute right-2.5 top-2.5 z-30 rounded bg-black/45 hover:bg-black/60 p-1.5 ring-1 ring-white/20",
                  children: s.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 24 24",
                    children: s.jsx("path", {
                      d: "M18 6 6 18M6 6l12 12",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      fill: "none",
                    }),
                  }),
                }),
                s.jsxs("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-[1fr_1.1fr] md:items-stretch md:min-h-[420px]",
                  children: [
                    s.jsx("div", {
                      className: "bg-[#121212] px-6 py-6 md:px-8 md:py-8 flex",
                      children: s.jsxs("div", {
                        className: "my-auto w-full max-w-[34rem]",
                        children: [
                          s.jsx("div", {
                            className: "mb-4",
                            children: s.jsx("img", {
                              src: l,
                              alt: "OnCad",
                              loading: "lazy",
                              decoding: "async",
                              className: `\r
                    w-auto\r
                    h-12 md:h-14\r
                    max-w-[220px] md:max-w-[260px]\r
                    object-contain\r
                    opacity-90\r
                  `,
                            }),
                          }),
                          s.jsx("h3", {
                            id: "plans-promo-title",
                            className:
                              "text-[1.18rem] md:text-[1.45rem] font-extrabold leading-tight",
                            children: "Automatize cadastros. Bloqueie fraudes. Integre seu fluxo.",
                          }),
                          s.jsx("p", {
                            className:
                              "mt-2 text-white/85 text-[0.93rem] md:text-[0.98rem] leading-relaxed",
                            children:
                              "Planos para reduzir erros, acelerar a operação e conectar seus sistemas.",
                          }),
                          s.jsxs("div", {
                            className: "mt-5 flex flex-wrap items-center gap-3",
                            children: [
                              s.jsx("a", {
                                href: "#planos",
                                onClick: w,
                                className:
                                  "inline-flex items-center justify-center rounded-md bg-[#1da7e5] hover:bg-[#168fc3] px-4 py-2 font-semibold text-[0.94rem]",
                                children: "Ver planos →",
                              }),
                              s.jsx("a", {
                                href: "#contato",
                                onClick: w,
                                className:
                                  "inline-flex items-center justify-center rounded-md border border-white/25 bg-white/5 hover:bg-white/10 px-4 py-2 font-semibold text-[0.94rem]",
                                children: "Falar com especialista",
                              }),
                            ],
                          }),
                          s.jsxs("div", {
                            className: "mt-4 flex flex-wrap gap-2",
                            children: [
                              s.jsx("span", {
                                className:
                                  "rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[12px]",
                                children: "Sem fidelidade",
                              }),
                              s.jsx("span", {
                                className:
                                  "rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[12px]",
                                children: "Grátis por 30 dias",
                              }),
                            ],
                          }),
                          s.jsx("p", {
                            className: "mt-4 text-[11.5px] text-white/70",
                            children: "Demonstração guiada em 15 minutos!",
                          }),
                        ],
                      }),
                    }),
                    s.jsx("div", {
                      "aria-label": r,
                      className: "hidden md:block md:min-h-[420px]",
                      style: {
                        backgroundImage: `url(${n})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                      },
                      role: "img",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : null
  );
}
function ih() {
  const e = j.useRef(null),
    [t, n] = j.useState(!1);
  return (
    j.useEffect(() => {
      const r = e.current;
      if (!r) return;
      const l = new IntersectionObserver(
        ([o]) => {
          n(o.isIntersecting);
        },
        { root: null, threshold: 0.25 }
      );
      return (l.observe(r), () => l.disconnect());
    }, []),
    s.jsxs("div", {
      className:
        "min-h-screen w-full overflow-x-hidden overscroll-x-none bg-black text-white selection:bg-indigo-500/40",
      children: [
        s.jsx(Cm, {}),
        s.jsx(oh, {
          delayMs: 5e3,
          imageSrc: "/mockups/homem-segurando-celular.webp",
          imageAlt: "Pessoa segurando um celular",
          oncadLogoSrc: "/logos/opt/oncad.webp",
          oncePerDay: !0,
          resetOnClosePage: !1,
        }),
        s.jsx("div", { id: "home", className: "relative isolate", children: s.jsx(Lm, {}) }),
        s.jsx("div", { id: "sobre", className: "scroll-mt-24", children: s.jsx(Dm, {}) }),
        s.jsx("div", { id: "servicos", className: "scroll-mt-24", children: s.jsx(Sp, {}) }),
        s.jsx("div", { id: "clientes", className: "scroll-mt-24", children: s.jsx(Np, {}) }),
        s.jsx("div", { id: "numbers", className: "scroll-mt-24", children: s.jsx(zp, {}) }),
        s.jsx("div", {
          id: "productdemo",
          className: "scroll-mt-24",
          children: s.jsx(Lp, { ...Tn }),
        }),
        s.jsx("div", { id: "impact", className: "scroll-mt-24", children: s.jsx(Ip, {}) }),
        s.jsx(Bp, {}),
        s.jsx("div", { id: "testimonials", className: "scroll-mt-24", children: s.jsx(lh, {}) }),
        s.jsx("div", { id: "contato", ref: e, className: "scroll-mt-24", children: s.jsx(qp, {}) }),
        s.jsx(zm, {}),
        s.jsx("a", {
          href: Xc,
          target: "_blank",
          rel: "noreferrer noopener",
          "aria-label": "Falar com um especialista no WhatsApp",
          className: [
            "fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9998]",
            "transition-all duration-300 ease-out",
            t ? "opacity-0 translate-y-2 pointer-events-none" : "opacity-100 translate-y-0",
          ].join(" "),
          children: s.jsx("div", {
            className:
              "rounded-full p-4 shadow-xl bg-green-500 hover:scale-105 transition-transform",
            children: s.jsx(wp, { className: "w-6 h-6 text-white" }),
          }),
        }),
      ],
    })
  );
}
vo.createRoot(document.getElementById("root")).render(
  s.jsx(pd.StrictMode, { children: s.jsx(ih, {}) })
);
