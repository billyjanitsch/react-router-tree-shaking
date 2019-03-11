!(function(modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = (installedModules[moduleId] = {
      i: moduleId,
      l: !1,
      exports: {}
    });
    return (
      modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ),
      (module.l = !0),
      module.exports
    );
  }
  (__webpack_require__.m = modules),
    (__webpack_require__.c = installedModules),
    (__webpack_require__.d = function(exports, name, getter) {
      __webpack_require__.o(exports, name) ||
        Object.defineProperty(exports, name, { enumerable: !0, get: getter });
    }),
    (__webpack_require__.r = function(exports) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(exports, "__esModule", { value: !0 });
    }),
    (__webpack_require__.t = function(value, mode) {
      if ((1 & mode && (value = __webpack_require__(value)), 8 & mode))
        return value;
      if (4 & mode && "object" == typeof value && value && value.__esModule)
        return value;
      var ns = Object.create(null);
      if (
        (__webpack_require__.r(ns),
        Object.defineProperty(ns, "default", { enumerable: !0, value: value }),
        2 & mode && "string" != typeof value)
      )
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      return ns;
    }),
    (__webpack_require__.n = function(module) {
      var getter =
        module && module.__esModule
          ? function() {
              return module.default;
            }
          : function() {
              return module;
            };
      return __webpack_require__.d(getter, "a", getter), getter;
    }),
    (__webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }),
    (__webpack_require__.p = ""),
    __webpack_require__((__webpack_require__.s = 0));
})([
  function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _extends() {
      return (_extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source)
              Object.prototype.hasOwnProperty.call(source, key) &&
                (target[key] = source[key]);
          }
          return target;
        }).apply(this, arguments);
    }
    function isAbsolute(pathname) {
      return "/" === pathname.charAt(0);
    }
    function spliceOne(list, index) {
      for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        list[i] = list[k];
      list.pop();
    }
    __webpack_require__.r(__webpack_exports__);
    var resolve_pathname = function(to) {
      var from =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        toParts = (to && to.split("/")) || [],
        fromParts = (from && from.split("/")) || [],
        isToAbs = to && isAbsolute(to),
        isFromAbs = from && isAbsolute(from),
        mustEndAbs = isToAbs || isFromAbs;
      if (
        (to && isAbsolute(to)
          ? (fromParts = toParts)
          : toParts.length &&
            (fromParts.pop(), (fromParts = fromParts.concat(toParts))),
        !fromParts.length)
      )
        return "/";
      var hasTrailingSlash = void 0;
      if (fromParts.length) {
        var last = fromParts[fromParts.length - 1];
        hasTrailingSlash = "." === last || ".." === last || "" === last;
      } else hasTrailingSlash = !1;
      for (var up = 0, i = fromParts.length; i >= 0; i--) {
        var part = fromParts[i];
        "." === part
          ? spliceOne(fromParts, i)
          : ".." === part
          ? (spliceOne(fromParts, i), up++)
          : up && (spliceOne(fromParts, i), up--);
      }
      if (!mustEndAbs) for (; up--; up) fromParts.unshift("..");
      !mustEndAbs ||
        "" === fromParts[0] ||
        (fromParts[0] && isAbsolute(fromParts[0])) ||
        fromParts.unshift("");
      var result = fromParts.join("/");
      return (
        hasTrailingSlash && "/" !== result.substr(-1) && (result += "/"), result
      );
    };
    "function" == typeof Symbol && Symbol.iterator;
    var isProduction = !0,
      prefix = "Invariant failed";
    var tiny_invariant_esm = function(condition, message) {
      if (!condition)
        throw isProduction
          ? new Error(prefix)
          : new Error(prefix + ": " + (message || ""));
    };
    function addLeadingSlash(path) {
      return "/" === path.charAt(0) ? path : "/" + path;
    }
    function stripBasename(path, prefix) {
      return (function(path, prefix) {
        return new RegExp("^" + prefix + "(\\/|\\?|#|$)", "i").test(path);
      })(path, prefix)
        ? path.substr(prefix.length)
        : path;
    }
    function stripTrailingSlash(path) {
      return "/" === path.charAt(path.length - 1) ? path.slice(0, -1) : path;
    }
    function createPath(location) {
      var pathname = location.pathname,
        search = location.search,
        hash = location.hash,
        path = pathname || "/";
      return (
        search &&
          "?" !== search &&
          (path += "?" === search.charAt(0) ? search : "?" + search),
        hash &&
          "#" !== hash &&
          (path += "#" === hash.charAt(0) ? hash : "#" + hash),
        path
      );
    }
    function createLocation(path, state, key, currentLocation) {
      var location;
      "string" == typeof path
        ? ((location = (function(path) {
            var pathname = path || "/",
              search = "",
              hash = "",
              hashIndex = pathname.indexOf("#");
            -1 !== hashIndex &&
              ((hash = pathname.substr(hashIndex)),
              (pathname = pathname.substr(0, hashIndex)));
            var searchIndex = pathname.indexOf("?");
            return (
              -1 !== searchIndex &&
                ((search = pathname.substr(searchIndex)),
                (pathname = pathname.substr(0, searchIndex))),
              {
                pathname: pathname,
                search: "?" === search ? "" : search,
                hash: "#" === hash ? "" : hash
              }
            );
          })(path)).state = state)
        : (void 0 === (location = _extends({}, path)).pathname &&
            (location.pathname = ""),
          location.search
            ? "?" !== location.search.charAt(0) &&
              (location.search = "?" + location.search)
            : (location.search = ""),
          location.hash
            ? "#" !== location.hash.charAt(0) &&
              (location.hash = "#" + location.hash)
            : (location.hash = ""),
          void 0 !== state &&
            void 0 === location.state &&
            (location.state = state));
      try {
        location.pathname = decodeURI(location.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                location.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : e;
      }
      return (
        key && (location.key = key),
        currentLocation
          ? location.pathname
            ? "/" !== location.pathname.charAt(0) &&
              (location.pathname = resolve_pathname(
                location.pathname,
                currentLocation.pathname
              ))
            : (location.pathname = currentLocation.pathname)
          : location.pathname || (location.pathname = "/"),
        location
      );
    }
    function createTransitionManager() {
      var prompt = null;
      var listeners = [];
      return {
        setPrompt: function(nextPrompt) {
          return (
            (prompt = nextPrompt),
            function() {
              prompt === nextPrompt && (prompt = null);
            }
          );
        },
        confirmTransitionTo: function(
          location,
          action,
          getUserConfirmation,
          callback
        ) {
          if (null != prompt) {
            var result =
              "function" == typeof prompt ? prompt(location, action) : prompt;
            "string" == typeof result
              ? "function" == typeof getUserConfirmation
                ? getUserConfirmation(result, callback)
                : callback(!0)
              : callback(!1 !== result);
          } else callback(!0);
        },
        appendListener: function(fn) {
          var isActive = !0;
          function listener() {
            isActive && fn.apply(void 0, arguments);
          }
          return (
            listeners.push(listener),
            function() {
              (isActive = !1),
                (listeners = listeners.filter(function(item) {
                  return item !== listener;
                }));
            }
          );
        },
        notifyListeners: function() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          listeners.forEach(function(listener) {
            return listener.apply(void 0, args);
          });
        }
      };
    }
    var canUseDOM = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
    function getConfirmation(message, callback) {
      callback(window.confirm(message));
    }
    var PopStateEvent = "popstate",
      HashChangeEvent = "hashchange";
    function getHistoryState() {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    }
    console.log(function(props) {
      void 0 === props && (props = {}), canUseDOM || tiny_invariant_esm(!1);
      var ua,
        globalHistory = window.history,
        canUseHistory =
          ((-1 === (ua = window.navigator.userAgent).indexOf("Android 2.") &&
            -1 === ua.indexOf("Android 4.0")) ||
            -1 === ua.indexOf("Mobile Safari") ||
            -1 !== ua.indexOf("Chrome") ||
            -1 !== ua.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history,
        needsHashChangeListener = !(
          -1 === window.navigator.userAgent.indexOf("Trident")
        ),
        _props = props,
        _props$forceRefresh = _props.forceRefresh,
        forceRefresh = void 0 !== _props$forceRefresh && _props$forceRefresh,
        _props$getUserConfirm = _props.getUserConfirmation,
        getUserConfirmation =
          void 0 === _props$getUserConfirm
            ? getConfirmation
            : _props$getUserConfirm,
        _props$keyLength = _props.keyLength,
        keyLength = void 0 === _props$keyLength ? 6 : _props$keyLength,
        basename = props.basename
          ? stripTrailingSlash(addLeadingSlash(props.basename))
          : "";
      function getDOMLocation(historyState) {
        var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state,
          _window$location = window.location,
          path =
            _window$location.pathname +
            _window$location.search +
            _window$location.hash;
        return (
          basename && (path = stripBasename(path, basename)),
          createLocation(path, state, key)
        );
      }
      function createKey() {
        return Math.random()
          .toString(36)
          .substr(2, keyLength);
      }
      var transitionManager = createTransitionManager();
      function setState(nextState) {
        _extends(history, nextState),
          (history.length = globalHistory.length),
          transitionManager.notifyListeners(history.location, history.action);
      }
      function handlePopState(event) {
        (function(event) {
          void 0 === event.state && navigator.userAgent.indexOf("CriOS");
        })(event) || handlePop(getDOMLocation(event.state));
      }
      function handleHashChange() {
        handlePop(getDOMLocation(getHistoryState()));
      }
      var forceNextPop = !1;
      function handlePop(location) {
        forceNextPop
          ? ((forceNextPop = !1), setState())
          : transitionManager.confirmTransitionTo(
              location,
              "POP",
              getUserConfirmation,
              function(ok) {
                ok
                  ? setState({ action: "POP", location: location })
                  : (function(fromLocation) {
                      var toLocation = history.location,
                        toIndex = allKeys.indexOf(toLocation.key);
                      -1 === toIndex && (toIndex = 0);
                      var fromIndex = allKeys.indexOf(fromLocation.key);
                      -1 === fromIndex && (fromIndex = 0);
                      var delta = toIndex - fromIndex;
                      delta && ((forceNextPop = !0), go(delta));
                    })(location);
              }
            );
      }
      var initialLocation = getDOMLocation(getHistoryState()),
        allKeys = [initialLocation.key];
      function createHref(location) {
        return basename + createPath(location);
      }
      function go(n) {
        globalHistory.go(n);
      }
      var listenerCount = 0;
      function checkDOMListeners(delta) {
        1 === (listenerCount += delta)
          ? (window.addEventListener(PopStateEvent, handlePopState),
            needsHashChangeListener &&
              window.addEventListener(HashChangeEvent, handleHashChange))
          : 0 === listenerCount &&
            (window.removeEventListener(PopStateEvent, handlePopState),
            needsHashChangeListener &&
              window.removeEventListener(HashChangeEvent, handleHashChange));
      }
      var isBlocked = !1,
        history = {
          length: globalHistory.length,
          action: "POP",
          location: initialLocation,
          createHref: createHref,
          push: function(path, state) {
            var location = createLocation(
              path,
              state,
              createKey(),
              history.location
            );
            transitionManager.confirmTransitionTo(
              location,
              "PUSH",
              getUserConfirmation,
              function(ok) {
                if (ok) {
                  var href = createHref(location),
                    key = location.key,
                    state = location.state;
                  if (canUseHistory)
                    if (
                      (globalHistory.pushState(
                        { key: key, state: state },
                        null,
                        href
                      ),
                      forceRefresh)
                    )
                      window.location.href = href;
                    else {
                      var prevIndex = allKeys.indexOf(history.location.key),
                        nextKeys = allKeys.slice(
                          0,
                          -1 === prevIndex ? 0 : prevIndex + 1
                        );
                      nextKeys.push(location.key),
                        (allKeys = nextKeys),
                        setState({ action: "PUSH", location: location });
                    }
                  else window.location.href = href;
                }
              }
            );
          },
          replace: function(path, state) {
            var location = createLocation(
              path,
              state,
              createKey(),
              history.location
            );
            transitionManager.confirmTransitionTo(
              location,
              "REPLACE",
              getUserConfirmation,
              function(ok) {
                if (ok) {
                  var href = createHref(location),
                    key = location.key,
                    state = location.state;
                  if (canUseHistory)
                    if (
                      (globalHistory.replaceState(
                        { key: key, state: state },
                        null,
                        href
                      ),
                      forceRefresh)
                    )
                      window.location.replace(href);
                    else {
                      var prevIndex = allKeys.indexOf(history.location.key);
                      -1 !== prevIndex && (allKeys[prevIndex] = location.key),
                        setState({ action: "REPLACE", location: location });
                    }
                  else window.location.replace(href);
                }
              }
            );
          },
          go: go,
          goBack: function() {
            go(-1);
          },
          goForward: function() {
            go(1);
          },
          block: function(prompt) {
            void 0 === prompt && (prompt = !1);
            var unblock = transitionManager.setPrompt(prompt);
            return (
              isBlocked || (checkDOMListeners(1), (isBlocked = !0)),
              function() {
                return (
                  isBlocked && ((isBlocked = !1), checkDOMListeners(-1)),
                  unblock()
                );
              }
            );
          },
          listen: function(listener) {
            var unlisten = transitionManager.appendListener(listener);
            return (
              checkDOMListeners(1),
              function() {
                checkDOMListeners(-1), unlisten();
              }
            );
          }
        };
      return history;
    });
  }
]);
