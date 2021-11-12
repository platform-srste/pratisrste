SystemJS.config({
  browserConfig: {
    "baseURL": "/",
    "bundles": {
      "build.js": [
        "npm:systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
        "npm:history@3.3.0/lib/index.js",
        "npm:history@3.3.0.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:history@3.3.0/lib/Actions.js",
        "npm:history@3.3.0/lib/useQueries.js",
        "npm:history@3.3.0/lib/PathUtils.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:history@3.3.0/lib/LocationUtils.js",
        "npm:invariant@2.2.4/browser.js",
        "npm:invariant@2.2.4.json",
        "npm:history@3.3.0/lib/runTransitionHook.js",
        "npm:query-string@4.3.4/index.js",
        "npm:query-string@4.3.4.json",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:strict-uri-encode@1.1.0/index.js",
        "npm:strict-uri-encode@1.1.0.json",
        "npm:history@3.3.0/lib/useBeforeUnload.js",
        "npm:history@3.3.0/lib/ExecutionEnvironment.js",
        "npm:history@3.3.0/lib/DOMUtils.js",
        "npm:history@3.3.0/lib/useBasename.js",
        "npm:history@3.3.0/lib/createMemoryHistory.js",
        "npm:history@3.3.0/lib/createHistory.js",
        "npm:history@3.3.0/lib/AsyncUtils.js",
        "npm:history@3.3.0/lib/createHashHistory.js",
        "npm:history@3.3.0/lib/HashProtocol.js",
        "npm:history@3.3.0/lib/DOMStateStorage.js",
        "npm:history@3.3.0/lib/BrowserProtocol.js",
        "npm:history@3.3.0/lib/createBrowserHistory.js",
        "npm:history@3.3.0/lib/RefreshProtocol.js"
      ],
      "undefined": [
        "npm:systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js"
      ],
      "corebundle.js": [
        "npm:systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
        "npm:react-treebeard@2.1.0/index.js",
        "npm:react-treebeard@2.1.0.json",
        "npm:react-treebeard@2.1.0/lib/index.js",
        "npm:react-treebeard@2.1.0/lib/themes/default.js",
        "npm:react-treebeard@2.1.0/lib/themes/animations.js",
        "npm:react-treebeard@2.1.0/lib/components/decorators.js",
        "npm:velocity-react@1.4.1/index.js",
        "npm:velocity-react@1.4.1.json",
        "npm:velocity-react@1.4.1/velocity-helpers.js",
        "npm:velocity-react@1.4.1/lib/velocity-animate-shim.js",
        "npm:velocity-animate@1.5.2/velocity.js",
        "npm:velocity-animate@1.5.2.json",
        "npm:lodash@4.17.11/isObject.js",
        "npm:lodash@4.17.11.json",
        "npm:velocity-react@1.4.1/velocity-transition-group.js",
        "npm:react-transition-group@2.5.0/Transition.js",
        "npm:react-transition-group@2.5.0.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:react-transition-group@2.5.0/utils/PropTypes.js",
        "npm:prop-types@15.6.2/index.js",
        "npm:prop-types@15.6.2.json",
        "npm:prop-types@15.6.2/factoryWithThrowingShims.js",
        "npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js",
        "npm:prop-types@15.6.2/factoryWithTypeCheckers.js",
        "npm:prop-types@15.6.2/checkPropTypes.js",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:react-lifecycles-compat@3.0.4/react-lifecycles-compat.cjs.js",
        "npm:react-lifecycles-compat@3.0.4.json",
        "npm:react-dom@16.6.3/index.js",
        "npm:react-dom@16.6.3.json",
        "npm:react-dom@16.6.3/cjs/react-dom.development.js",
        "npm:scheduler@0.11.3/tracing.js",
        "npm:scheduler@0.11.3.json",
        "npm:scheduler@0.11.3/cjs/scheduler-tracing.development.js",
        "npm:scheduler@0.11.3/cjs/scheduler-tracing.production.min.js",
        "npm:scheduler@0.11.3/index.js",
        "npm:scheduler@0.11.3/cjs/scheduler.development.js",
        "npm:scheduler@0.11.3/cjs/scheduler.production.min.js",
        "npm:react@16.6.3/index.js",
        "npm:react@16.6.3.json",
        "npm:react@16.6.3/cjs/react.development.js",
        "npm:react@16.6.3/cjs/react.production.min.js",
        "npm:react-dom@16.6.3/cjs/react-dom.production.min.js",
        "npm:react-transition-group@2.5.0/TransitionGroup.js",
        "npm:react-transition-group@2.5.0/utils/ChildMapping.js",
        "npm:lodash@4.17.11/map.js",
        "npm:lodash@4.17.11/isArray.js",
        "npm:lodash@4.17.11/_baseMap.js",
        "npm:lodash@4.17.11/isArrayLike.js",
        "npm:lodash@4.17.11/isLength.js",
        "npm:lodash@4.17.11/isFunction.js",
        "npm:lodash@4.17.11/_baseGetTag.js",
        "npm:lodash@4.17.11/_objectToString.js",
        "npm:lodash@4.17.11/_getRawTag.js",
        "npm:lodash@4.17.11/_Symbol.js",
        "npm:lodash@4.17.11/_root.js",
        "npm:lodash@4.17.11/_freeGlobal.js",
        "npm:lodash@4.17.11/_baseEach.js",
        "npm:lodash@4.17.11/_createBaseEach.js",
        "npm:lodash@4.17.11/_baseForOwn.js",
        "npm:lodash@4.17.11/keys.js",
        "npm:lodash@4.17.11/_baseKeys.js",
        "npm:lodash@4.17.11/_nativeKeys.js",
        "npm:lodash@4.17.11/_overArg.js",
        "npm:lodash@4.17.11/_isPrototype.js",
        "npm:lodash@4.17.11/_arrayLikeKeys.js",
        "npm:lodash@4.17.11/isTypedArray.js",
        "npm:lodash@4.17.11/_nodeUtil.js",
        "npm:lodash@4.17.11/_baseUnary.js",
        "npm:lodash@4.17.11/_baseIsTypedArray.js",
        "npm:lodash@4.17.11/isObjectLike.js",
        "npm:lodash@4.17.11/_isIndex.js",
        "npm:lodash@4.17.11/isBuffer.js",
        "npm:lodash@4.17.11/stubFalse.js",
        "npm:lodash@4.17.11/isArguments.js",
        "npm:lodash@4.17.11/_baseIsArguments.js",
        "npm:lodash@4.17.11/_baseTimes.js",
        "npm:lodash@4.17.11/_baseFor.js",
        "npm:lodash@4.17.11/_createBaseFor.js",
        "npm:lodash@4.17.11/_baseIteratee.js",
        "npm:lodash@4.17.11/property.js",
        "npm:lodash@4.17.11/_toKey.js",
        "npm:lodash@4.17.11/isSymbol.js",
        "npm:lodash@4.17.11/_isKey.js",
        "npm:lodash@4.17.11/_basePropertyDeep.js",
        "npm:lodash@4.17.11/_baseGet.js",
        "npm:lodash@4.17.11/_castPath.js",
        "npm:lodash@4.17.11/toString.js",
        "npm:lodash@4.17.11/_baseToString.js",
        "npm:lodash@4.17.11/_arrayMap.js",
        "npm:lodash@4.17.11/_stringToPath.js",
        "npm:lodash@4.17.11/_memoizeCapped.js",
        "npm:lodash@4.17.11/memoize.js",
        "npm:lodash@4.17.11/_MapCache.js",
        "npm:lodash@4.17.11/_mapCacheSet.js",
        "npm:lodash@4.17.11/_getMapData.js",
        "npm:lodash@4.17.11/_isKeyable.js",
        "npm:lodash@4.17.11/_mapCacheHas.js",
        "npm:lodash@4.17.11/_mapCacheGet.js",
        "npm:lodash@4.17.11/_mapCacheDelete.js",
        "npm:lodash@4.17.11/_mapCacheClear.js",
        "npm:lodash@4.17.11/_Map.js",
        "npm:lodash@4.17.11/_getNative.js",
        "npm:lodash@4.17.11/_getValue.js",
        "npm:lodash@4.17.11/_baseIsNative.js",
        "npm:lodash@4.17.11/_toSource.js",
        "npm:lodash@4.17.11/_isMasked.js",
        "npm:lodash@4.17.11/_coreJsData.js",
        "npm:lodash@4.17.11/_ListCache.js",
        "npm:lodash@4.17.11/_listCacheSet.js",
        "npm:lodash@4.17.11/_assocIndexOf.js",
        "npm:lodash@4.17.11/eq.js",
        "npm:lodash@4.17.11/_listCacheHas.js",
        "npm:lodash@4.17.11/_listCacheGet.js",
        "npm:lodash@4.17.11/_listCacheDelete.js",
        "npm:lodash@4.17.11/_listCacheClear.js",
        "npm:lodash@4.17.11/_Hash.js",
        "npm:lodash@4.17.11/_hashSet.js",
        "npm:lodash@4.17.11/_nativeCreate.js",
        "npm:lodash@4.17.11/_hashHas.js",
        "npm:lodash@4.17.11/_hashGet.js",
        "npm:lodash@4.17.11/_hashDelete.js",
        "npm:lodash@4.17.11/_hashClear.js",
        "npm:lodash@4.17.11/_baseProperty.js",
        "npm:lodash@4.17.11/identity.js",
        "npm:lodash@4.17.11/_baseMatchesProperty.js",
        "npm:lodash@4.17.11/_matchesStrictComparable.js",
        "npm:lodash@4.17.11/_isStrictComparable.js",
        "npm:lodash@4.17.11/hasIn.js",
        "npm:lodash@4.17.11/_hasPath.js",
        "npm:lodash@4.17.11/_baseHasIn.js",
        "npm:lodash@4.17.11/get.js",
        "npm:lodash@4.17.11/_baseIsEqual.js",
        "npm:lodash@4.17.11/_baseIsEqualDeep.js",
        "npm:lodash@4.17.11/_getTag.js",
        "npm:lodash@4.17.11/_WeakMap.js",
        "npm:lodash@4.17.11/_Set.js",
        "npm:lodash@4.17.11/_Promise.js",
        "npm:lodash@4.17.11/_DataView.js",
        "npm:lodash@4.17.11/_equalObjects.js",
        "npm:lodash@4.17.11/_getAllKeys.js",
        "npm:lodash@4.17.11/_getSymbols.js",
        "npm:lodash@4.17.11/stubArray.js",
        "npm:lodash@4.17.11/_arrayFilter.js",
        "npm:lodash@4.17.11/_baseGetAllKeys.js",
        "npm:lodash@4.17.11/_arrayPush.js",
        "npm:lodash@4.17.11/_equalByTag.js",
        "npm:lodash@4.17.11/_setToArray.js",
        "npm:lodash@4.17.11/_mapToArray.js",
        "npm:lodash@4.17.11/_equalArrays.js",
        "npm:lodash@4.17.11/_cacheHas.js",
        "npm:lodash@4.17.11/_arraySome.js",
        "npm:lodash@4.17.11/_SetCache.js",
        "npm:lodash@4.17.11/_setCacheHas.js",
        "npm:lodash@4.17.11/_setCacheAdd.js",
        "npm:lodash@4.17.11/_Uint8Array.js",
        "npm:lodash@4.17.11/_Stack.js",
        "npm:lodash@4.17.11/_stackSet.js",
        "npm:lodash@4.17.11/_stackHas.js",
        "npm:lodash@4.17.11/_stackGet.js",
        "npm:lodash@4.17.11/_stackDelete.js",
        "npm:lodash@4.17.11/_stackClear.js",
        "npm:lodash@4.17.11/_baseMatches.js",
        "npm:lodash@4.17.11/_getMatchData.js",
        "npm:lodash@4.17.11/_baseIsMatch.js",
        "npm:lodash@4.17.11/omit.js",
        "npm:lodash@4.17.11/_getAllKeysIn.js",
        "npm:lodash@4.17.11/keysIn.js",
        "npm:lodash@4.17.11/_baseKeysIn.js",
        "npm:lodash@4.17.11/_nativeKeysIn.js",
        "npm:lodash@4.17.11/_getSymbolsIn.js",
        "npm:lodash@4.17.11/_getPrototype.js",
        "npm:lodash@4.17.11/_flatRest.js",
        "npm:lodash@4.17.11/_setToString.js",
        "npm:lodash@4.17.11/_shortOut.js",
        "npm:lodash@4.17.11/_baseSetToString.js",
        "npm:lodash@4.17.11/_defineProperty.js",
        "npm:lodash@4.17.11/constant.js",
        "npm:lodash@4.17.11/_overRest.js",
        "npm:lodash@4.17.11/_apply.js",
        "npm:lodash@4.17.11/flatten.js",
        "npm:lodash@4.17.11/_baseFlatten.js",
        "npm:lodash@4.17.11/_isFlattenable.js",
        "npm:lodash@4.17.11/_customOmitClone.js",
        "npm:lodash@4.17.11/isPlainObject.js",
        "npm:lodash@4.17.11/_copyObject.js",
        "npm:lodash@4.17.11/_baseAssignValue.js",
        "npm:lodash@4.17.11/_assignValue.js",
        "npm:lodash@4.17.11/_baseUnset.js",
        "npm:lodash@4.17.11/_parent.js",
        "npm:lodash@4.17.11/_baseSlice.js",
        "npm:lodash@4.17.11/last.js",
        "npm:lodash@4.17.11/_baseClone.js",
        "npm:lodash@4.17.11/isSet.js",
        "npm:lodash@4.17.11/_baseIsSet.js",
        "npm:lodash@4.17.11/isMap.js",
        "npm:lodash@4.17.11/_baseIsMap.js",
        "npm:lodash@4.17.11/_initCloneObject.js",
        "npm:lodash@4.17.11/_baseCreate.js",
        "npm:lodash@4.17.11/_initCloneByTag.js",
        "npm:lodash@4.17.11/_cloneTypedArray.js",
        "npm:lodash@4.17.11/_cloneArrayBuffer.js",
        "npm:lodash@4.17.11/_cloneSymbol.js",
        "npm:lodash@4.17.11/_cloneRegExp.js",
        "npm:lodash@4.17.11/_cloneDataView.js",
        "npm:lodash@4.17.11/_initCloneArray.js",
        "npm:lodash@4.17.11/_copySymbolsIn.js",
        "npm:lodash@4.17.11/_copySymbols.js",
        "npm:lodash@4.17.11/_copyArray.js",
        "npm:lodash@4.17.11/_cloneBuffer.js",
        "npm:lodash@4.17.11/_baseAssignIn.js",
        "npm:lodash@4.17.11/_baseAssign.js",
        "npm:lodash@4.17.11/_arrayEach.js",
        "npm:lodash@4.17.11/isEqual.js",
        "npm:lodash@4.17.11/forEach.js",
        "npm:lodash@4.17.11/_castFunction.js",
        "npm:lodash@4.17.11/extend.js",
        "npm:lodash@4.17.11/assignIn.js",
        "npm:lodash@4.17.11/_createAssigner.js",
        "npm:lodash@4.17.11/_isIterateeCall.js",
        "npm:lodash@4.17.11/_baseRest.js",
        "npm:lodash@4.17.11/each.js",
        "npm:velocity-react@1.4.1/velocity-component.js",
        "npm:radium@0.19.6/lib/index.js",
        "npm:radium@0.19.6.json",
        "npm:radium@0.19.6/lib/resolve-styles.js",
        "npm:exenv@1.2.2/index.js",
        "npm:exenv@1.2.2.json",
        "npm:radium@0.19.6/lib/plugins/index.js",
        "npm:radium@0.19.6/lib/plugins/visited-plugin.js",
        "npm:radium@0.19.6/lib/plugins/resolve-media-queries-plugin.js",
        "npm:radium@0.19.6/lib/plugins/resolve-interaction-styles-plugin.js",
        "npm:radium@0.19.6/lib/plugins/mouse-up-listener.js",
        "npm:radium@0.19.6/lib/plugins/remove-nested-styles-plugin.js",
        "npm:radium@0.19.6/lib/plugins/prefix-plugin.js",
        "npm:radium@0.19.6/lib/prefixer.js",
        "npm:inline-style-prefixer@2.0.5/lib/Prefixer.js",
        "npm:inline-style-prefixer@2.0.5.json",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flexboxOld.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flexboxIE.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/transition.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/unprefixProperty.js",
        "npm:hyphenate-style-name@1.0.2/index.js",
        "npm:hyphenate-style-name@1.0.2.json",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/gradient.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/sizing.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flex.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/grabCursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/zoomCursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/calc.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/position.js",
        "npm:inline-style-prefixer@2.0.5/lib/prefixProps.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/sortPrefixedStyle.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/isPrefixedProperty.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/capitalizeString.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getPrefixedKeyframes.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getBrowserInformation.js",
        "npm:bowser@1.9.4/src/bowser.js",
        "npm:bowser@1.9.4.json",
        "npm:inline-style-prefixer@2.0.5/lib/static/prefixAll.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flexboxOld.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flexboxIE.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/transition.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/prefixProps.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/isPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/gradient.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/joinPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/sizing.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flex.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/cursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/calc.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/position.js",
        "npm:radium@0.19.6/lib/plugins/merge-style-array-plugin.js",
        "npm:radium@0.19.6/lib/plugins/keyframes-plugin.js",
        "npm:radium@0.19.6/lib/plugins/check-props-plugin.js",
        "npm:radium@0.19.6/lib/merge-styles.js",
        "npm:radium@0.19.6/lib/hash.js",
        "npm:radium@0.19.6/lib/get-state-key.js",
        "npm:radium@0.19.6/lib/get-state.js",
        "npm:radium@0.19.6/lib/css-rule-set-to-string.js",
        "npm:radium@0.19.6/lib/map-object.js",
        "npm:radium@0.19.6/lib/camel-case-props-to-dash-case.js",
        "npm:radium@0.19.6/lib/append-px-if-needed.js",
        "npm:radium@0.19.6/lib/append-important-to-each-value.js",
        "npm:radium@0.19.6/lib/keyframes.js",
        "npm:radium@0.19.6/lib/components/style-root.js",
        "npm:radium@0.19.6/lib/components/style-sheet.js",
        "npm:radium@0.19.6/lib/style-keeper.js",
        "npm:radium@0.19.6/lib/enhancer.js",
        "npm:radium@0.19.6/lib/components/style.js",
        "npm:babel-runtime@6.26.0/helpers/inherits.js",
        "npm:babel-runtime@6.26.0.json",
        "npm:babel-runtime@6.26.0/helpers/typeof.js",
        "npm:babel-runtime@6.26.0/core-js/symbol.js",
        "npm:core-js@2.6.1/library/fn/symbol/index.js",
        "npm:core-js@2.6.1.json",
        "npm:core-js@2.6.1/library/modules/_core.js",
        "npm:core-js@2.6.1/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.6.1/library/modules/_wks-define.js",
        "npm:core-js@2.6.1/library/modules/_object-dp.js",
        "npm:core-js@2.6.1/library/modules/_descriptors.js",
        "npm:core-js@2.6.1/library/modules/_fails.js",
        "npm:core-js@2.6.1/library/modules/_to-primitive.js",
        "npm:core-js@2.6.1/library/modules/_is-object.js",
        "npm:core-js@2.6.1/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.6.1/library/modules/_dom-create.js",
        "npm:core-js@2.6.1/library/modules/_global.js",
        "npm:core-js@2.6.1/library/modules/_an-object.js",
        "npm:core-js@2.6.1/library/modules/_wks-ext.js",
        "npm:core-js@2.6.1/library/modules/_wks.js",
        "npm:core-js@2.6.1/library/modules/_uid.js",
        "npm:core-js@2.6.1/library/modules/_shared.js",
        "npm:core-js@2.6.1/library/modules/_library.js",
        "npm:core-js@2.6.1/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.6.1/library/modules/es6.object.to-string.js",
        "npm:core-js@2.6.1/library/modules/es6.symbol.js",
        "npm:core-js@2.6.1/library/modules/_hide.js",
        "npm:core-js@2.6.1/library/modules/_property-desc.js",
        "npm:core-js@2.6.1/library/modules/_object-gops.js",
        "npm:core-js@2.6.1/library/modules/_object-pie.js",
        "npm:core-js@2.6.1/library/modules/_object-gopn.js",
        "npm:core-js@2.6.1/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.6.1/library/modules/_object-keys-internal.js",
        "npm:core-js@2.6.1/library/modules/_shared-key.js",
        "npm:core-js@2.6.1/library/modules/_array-includes.js",
        "npm:core-js@2.6.1/library/modules/_to-absolute-index.js",
        "npm:core-js@2.6.1/library/modules/_to-integer.js",
        "npm:core-js@2.6.1/library/modules/_to-length.js",
        "npm:core-js@2.6.1/library/modules/_to-iobject.js",
        "npm:core-js@2.6.1/library/modules/_defined.js",
        "npm:core-js@2.6.1/library/modules/_iobject.js",
        "npm:core-js@2.6.1/library/modules/_cof.js",
        "npm:core-js@2.6.1/library/modules/_has.js",
        "npm:core-js@2.6.1/library/modules/_object-keys.js",
        "npm:core-js@2.6.1/library/modules/_object-gopd.js",
        "npm:core-js@2.6.1/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.6.1/library/modules/_object-create.js",
        "npm:core-js@2.6.1/library/modules/_html.js",
        "npm:core-js@2.6.1/library/modules/_object-dps.js",
        "npm:core-js@2.6.1/library/modules/_is-array.js",
        "npm:core-js@2.6.1/library/modules/_enum-keys.js",
        "npm:core-js@2.6.1/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.6.1/library/modules/_meta.js",
        "npm:core-js@2.6.1/library/modules/_redefine.js",
        "npm:core-js@2.6.1/library/modules/_export.js",
        "npm:core-js@2.6.1/library/modules/_ctx.js",
        "npm:core-js@2.6.1/library/modules/_a-function.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
        "npm:core-js@2.6.1/library/fn/symbol/iterator.js",
        "npm:core-js@2.6.1/library/modules/web.dom.iterable.js",
        "npm:core-js@2.6.1/library/modules/_iterators.js",
        "npm:core-js@2.6.1/library/modules/es6.array.iterator.js",
        "npm:core-js@2.6.1/library/modules/_iter-define.js",
        "npm:core-js@2.6.1/library/modules/_object-gpo.js",
        "npm:core-js@2.6.1/library/modules/_to-object.js",
        "npm:core-js@2.6.1/library/modules/_iter-create.js",
        "npm:core-js@2.6.1/library/modules/_iter-step.js",
        "npm:core-js@2.6.1/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.6.1/library/modules/es6.string.iterator.js",
        "npm:core-js@2.6.1/library/modules/_string-at.js",
        "npm:babel-runtime@6.26.0/core-js/object/create.js",
        "npm:core-js@2.6.1/library/fn/object/create.js",
        "npm:core-js@2.6.1/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.26.0/core-js/object/set-prototype-of.js",
        "npm:core-js@2.6.1/library/fn/object/set-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/es6.object.set-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/_set-proto.js",
        "npm:babel-runtime@6.26.0/helpers/possibleConstructorReturn.js",
        "npm:babel-runtime@6.26.0/helpers/createClass.js",
        "npm:babel-runtime@6.26.0/core-js/object/define-property.js",
        "npm:core-js@2.6.1/library/fn/object/define-property.js",
        "npm:core-js@2.6.1/library/modules/es6.object.define-property.js",
        "npm:babel-runtime@6.26.0/helpers/classCallCheck.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-prototype-of.js",
        "npm:core-js@2.6.1/library/fn/object/get-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/es6.object.get-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/_object-sap.js",
        "npm:react-treebeard@2.1.0/lib/components/treebeard.js",
        "npm:react-treebeard@2.1.0/lib/components/node.js",
        "npm:react-treebeard@2.1.0/lib/components/header.js",
        "npm:deep-equal@1.0.1/index.js",
        "npm:deep-equal@1.0.1.json",
        "npm:deep-equal@1.0.1/lib/is_arguments.js",
        "npm:deep-equal@1.0.1/lib/keys.js",
        "npm:shallowequal@0.2.2/modules/index.js",
        "npm:shallowequal@0.2.2.json",
        "npm:lodash.keys@3.1.2/index.js",
        "npm:lodash.keys@3.1.2.json",
        "npm:lodash.isarray@3.0.4/index.js",
        "npm:lodash.isarray@3.0.4.json",
        "npm:lodash.isarguments@3.1.0/index.js",
        "npm:lodash.isarguments@3.1.0.json",
        "npm:lodash._getnative@3.9.1/index.js",
        "npm:lodash._getnative@3.9.1.json",
        "npm:babel-runtime@6.26.0/core-js/object/keys.js",
        "npm:core-js@2.6.1/library/fn/object/keys.js",
        "npm:core-js@2.6.1/library/modules/es6.object.keys.js",
        "npm:babel-runtime@6.26.0/core-js/object/assign.js",
        "npm:core-js@2.6.1/library/fn/object/assign.js",
        "npm:core-js@2.6.1/library/modules/es6.object.assign.js",
        "npm:core-js@2.6.1/library/modules/_object-assign.js",
        "npm:babel-runtime@6.26.0/helpers/objectWithoutProperties.js",
        "npm:babel-runtime@6.26.0/helpers/extends.js",
        "npm:react-table@6.8.6/lib/index.js",
        "npm:react-table@6.8.6.json",
        "npm:react-table@6.8.6/lib/propTypes.js",
        "npm:react-table@6.8.6/lib/defaultProps.js",
        "npm:react-table@6.8.6/lib/pagination.js",
        "npm:classnames@2.2.6/index.js",
        "npm:classnames@2.2.6.json",
        "npm:react-table@6.8.6/lib/utils.js",
        "npm:react-table@6.8.6/lib/methods.js",
        "npm:react-table@6.8.6/lib/lifecycle.js",
        "npm:react-select@1.3.0/lib/index.js",
        "npm:react-select@1.3.0.json",
        "npm:react-select@1.3.0/lib/utils/defaultFilterOptions.js",
        "npm:react-select@1.3.0/lib/utils/trim.js",
        "npm:react-select@1.3.0/lib/utils/stripDiacritics.js",
        "npm:react-select@1.3.0/lib/utils/defaultClearRenderer.js",
        "npm:react-select@1.3.0/lib/utils/defaultArrowRenderer.js",
        "npm:react-select@1.3.0/lib/utils/defaultMenuRenderer.js",
        "npm:react-select@1.3.0/lib/Option.js",
        "npm:react-select@1.3.0/lib/utils/blockEvent.js",
        "npm:react-select@1.3.0/lib/Value.js",
        "npm:react-select@1.3.0/lib/Creatable.js",
        "npm:react-select@1.3.0/lib/Select.js",
        "npm:react-input-autosize@2.2.1/lib/AutosizeInput.js",
        "npm:react-input-autosize@2.2.1.json",
        "npm:react-select@1.3.0/lib/AsyncCreatable.js",
        "npm:react-select@1.3.0/lib/Async.js",
        "npm:react-router@3.2.1/lib/index.js",
        "npm:react-router@3.2.1.json",
        "npm:react-router@3.2.1/lib/createMemoryHistory.js",
        "npm:history@3.3.0/lib/createMemoryHistory.js",
        "npm:history@3.3.0.json",
        "npm:history@3.3.0/lib/Actions.js",
        "npm:history@3.3.0/lib/createHistory.js",
        "npm:history@3.3.0/lib/LocationUtils.js",
        "npm:history@3.3.0/lib/PathUtils.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:invariant@2.2.4/browser.js",
        "npm:invariant@2.2.4.json",
        "npm:history@3.3.0/lib/runTransitionHook.js",
        "npm:history@3.3.0/lib/AsyncUtils.js",
        "npm:history@3.3.0/lib/useBasename.js",
        "npm:history@3.3.0/lib/useQueries.js",
        "npm:query-string@4.3.4/index.js",
        "npm:query-string@4.3.4.json",
        "npm:strict-uri-encode@1.1.0/index.js",
        "npm:strict-uri-encode@1.1.0.json",
        "npm:react-router@3.2.1/lib/hashHistory.js",
        "npm:react-router@3.2.1/lib/createRouterHistory.js",
        "npm:react-router@3.2.1/lib/useRouterHistory.js",
        "npm:history@3.3.0/lib/createHashHistory.js",
        "npm:history@3.3.0/lib/HashProtocol.js",
        "npm:history@3.3.0/lib/DOMStateStorage.js",
        "npm:history@3.3.0/lib/DOMUtils.js",
        "npm:history@3.3.0/lib/BrowserProtocol.js",
        "npm:history@3.3.0/lib/ExecutionEnvironment.js",
        "npm:react-router@3.2.1/lib/browserHistory.js",
        "npm:history@3.3.0/lib/createBrowserHistory.js",
        "npm:history@3.3.0/lib/RefreshProtocol.js",
        "npm:react-router@3.2.1/lib/applyRouterMiddleware.js",
        "npm:react-router@3.2.1/lib/routerWarning.js",
        "npm:react-router@3.2.1/lib/RouterContext.js",
        "npm:react-router@3.2.1/lib/RouteUtils.js",
        "npm:react-router@3.2.1/lib/ContextUtils.js",
        "npm:react-router@3.2.1/lib/getRouteParams.js",
        "npm:react-router@3.2.1/lib/PatternUtils.js",
        "npm:create-react-class@15.6.3/index.js",
        "npm:create-react-class@15.6.3.json",
        "npm:create-react-class@15.6.3/factory.js",
        "npm:fbjs@0.8.17/lib/warning.js",
        "npm:fbjs@0.8.17.json",
        "npm:fbjs@0.8.17/lib/emptyFunction.js",
        "npm:fbjs@0.8.17/lib/invariant.js",
        "npm:fbjs@0.8.17/lib/emptyObject.js",
        "npm:react-router@3.2.1/lib/match.js",
        "npm:react-router@3.2.1/lib/RouterUtils.js",
        "npm:react-router@3.2.1/lib/createTransitionManager.js",
        "npm:react-router@3.2.1/lib/matchRoutes.js",
        "npm:react-router@3.2.1/lib/PromiseUtils.js",
        "npm:react-router@3.2.1/lib/AsyncUtils.js",
        "npm:react-router@3.2.1/lib/getComponents.js",
        "npm:react-router@3.2.1/lib/isActive.js",
        "npm:react-router@3.2.1/lib/TransitionUtils.js",
        "npm:react-router@3.2.1/lib/computeChangedRoutes.js",
        "npm:react-router@3.2.1/lib/Route.js",
        "npm:react-router@3.2.1/lib/InternalPropTypes.js",
        "npm:react-router@3.2.1/lib/Redirect.js",
        "npm:react-router@3.2.1/lib/IndexRoute.js",
        "npm:react-router@3.2.1/lib/IndexRedirect.js",
        "npm:react-router@3.2.1/lib/withRouter.js",
        "npm:react-router@3.2.1/lib/PropTypes.js",
        "npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js",
        "npm:hoist-non-react-statics@2.5.5.json",
        "npm:react-router@3.2.1/lib/IndexLink.js",
        "npm:react-router@3.2.1/lib/Link.js",
        "npm:react-router@3.2.1/lib/Router.js",
        "npm:react-router-dom@4.3.1/index.js",
        "npm:react-router-dom@4.3.1.json",
        "npm:react-router-dom@4.3.1/withRouter.js",
        "npm:react-router@4.3.1/withRouter.js",
        "npm:react-router@4.3.1.json",
        "npm:react-router@4.3.1/Route.js",
        "npm:react-router@4.3.1/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:warning@4.0.2/warning.js",
        "npm:warning@4.0.2.json",
        "npm:react-router-dom@4.3.1/matchPath.js",
        "npm:react-router-dom@4.3.1/generatePath.js",
        "npm:react-router@4.3.1/generatePath.js",
        "npm:react-router-dom@4.3.1/Switch.js",
        "npm:react-router@4.3.1/Switch.js",
        "npm:react-router-dom@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/Router.js",
        "npm:history@4.7.2/index.js",
        "npm:history@4.7.2.json",
        "npm:history@4.7.2/createMemoryHistory.js",
        "npm:history@4.7.2/createTransitionManager.js",
        "npm:history@4.7.2/LocationUtils.js",
        "npm:history@4.7.2/PathUtils.js",
        "npm:value-equal@0.4.0/cjs/index.js",
        "npm:value-equal@0.4.0.json",
        "npm:resolve-pathname@2.2.0/cjs/index.js",
        "npm:resolve-pathname@2.2.0.json",
        "npm:history@4.7.2/createHashHistory.js",
        "npm:history@4.7.2/DOMUtils.js",
        "npm:history@4.7.2/createBrowserHistory.js",
        "npm:react-router-dom@4.3.1/Router.js",
        "npm:react-router-dom@4.3.1/Route.js",
        "npm:react-router-dom@4.3.1/Redirect.js",
        "npm:react-router@4.3.1/Redirect.js",
        "npm:react-router-dom@4.3.1/Prompt.js",
        "npm:react-router@4.3.1/Prompt.js",
        "npm:react-router-dom@4.3.1/NavLink.js",
        "npm:react-router-dom@4.3.1/Link.js",
        "npm:react-router-dom@4.3.1/MemoryRouter.js",
        "npm:react-router@4.3.1/MemoryRouter.js",
        "npm:react-router-dom@4.3.1/HashRouter.js",
        "npm:react-router-dom@4.3.1/BrowserRouter.js",
        "npm:react-redux@5.1.1/lib/index.js",
        "npm:react-redux@5.1.1.json",
        "npm:react-redux@5.1.1/lib/connect/connect.js",
        "npm:react-redux@5.1.1/lib/connect/selectorFactory.js",
        "npm:react-redux@5.1.1/lib/connect/verifySubselectors.js",
        "npm:react-redux@5.1.1/lib/utils/warning.js",
        "npm:@babel/runtime@7.1.5/helpers/interopRequireDefault.js",
        "npm:@babel/runtime@7.1.5.json",
        "npm:@babel/runtime@7.1.5/helpers/objectWithoutPropertiesLoose.js",
        "npm:react-redux@5.1.1/lib/connect/mergeProps.js",
        "npm:react-redux@5.1.1/lib/utils/verifyPlainObject.js",
        "npm:react-redux@5.1.1/lib/utils/isPlainObject.js",
        "npm:@babel/runtime@7.1.5/helpers/extends.js",
        "npm:react-redux@5.1.1/lib/connect/mapStateToProps.js",
        "npm:react-redux@5.1.1/lib/connect/wrapMapToProps.js",
        "npm:react-redux@5.1.1/lib/connect/mapDispatchToProps.js",
        "npm:redux@4.0.1/lib/redux.js",
        "npm:redux@4.0.1.json",
        "npm:symbol-observable@1.2.0/lib/index.js",
        "npm:symbol-observable@1.2.0.json",
        "npm:symbol-observable@1.2.0/lib/ponyfill.js",
        "npm:react-redux@5.1.1/lib/utils/shallowEqual.js",
        "npm:react-redux@5.1.1/lib/components/connectAdvanced.js",
        "npm:react-redux@5.1.1/lib/utils/PropTypes.js",
        "npm:react-redux@5.1.1/lib/utils/Subscription.js",
        "npm:react-is@16.7.0/index.js",
        "npm:react-is@16.7.0.json",
        "npm:react-is@16.7.0/cjs/react-is.development.js",
        "npm:react-is@16.7.0/cjs/react-is.production.min.js",
        "npm:hoist-non-react-statics@3.2.1/dist/hoist-non-react-statics.cjs.js",
        "npm:hoist-non-react-statics@3.2.1.json",
        "npm:@babel/runtime@7.1.5/helpers/assertThisInitialized.js",
        "npm:@babel/runtime@7.1.5/helpers/inheritsLoose.js",
        "npm:react-redux@5.1.1/lib/components/Provider.js",
        "npm:@babel/runtime@7.1.5/helpers/interopRequireWildcard.js",
        "npm:react-monaco-editor@0.14.1/lib/index.js",
        "npm:react-monaco-editor@0.14.1.json",
        "npm:react-monaco-editor@0.14.1/lib/diff.js",
        "npm:react-monaco-editor@0.14.1/lib/editor.js",
        "npm:react-materialize@2.4.8/lib/index.js",
        "npm:react-materialize@2.4.8.json",
        "npm:react-materialize@2.4.8/lib/Toast.js",
        "npm:react-materialize@2.4.8/lib/Button.js",
        "npm:react-materialize@2.4.8/lib/idgen.js",
        "npm:react-materialize@2.4.8/lib/Icon.js",
        "npm:react-materialize@2.4.8/lib/constants.js",
        "npm:react-materialize@2.4.8/lib/Tag.js",
        "npm:react-materialize@2.4.8/lib/Chip.js",
        "npm:react-materialize@2.4.8/lib/Tabs.js",
        "npm:react-materialize@2.4.8/lib/Col.js",
        "npm:react-materialize@2.4.8/lib/Row.js",
        "npm:react-materialize@2.4.8/lib/Table.js",
        "npm:react-materialize@2.4.8/lib/Tab.js",
        "npm:react-materialize@2.4.8/lib/Slider.js",
        "npm:react-materialize@2.4.8/lib/Slide.js",
        "npm:react-materialize@2.4.8/lib/SideNavItem.js",
        "npm:react-materialize@2.4.8/lib/UserView.js",
        "npm:react-materialize@2.4.8/lib/SideNav.js",
        "npm:react-materialize@2.4.8/lib/Section.js",
        "npm:react-materialize@2.4.8/lib/SearchForm.js",
        "npm:react-materialize@2.4.8/lib/ProgressBar.js",
        "npm:react-materialize@2.4.8/lib/Preloader.js",
        "npm:react-materialize@2.4.8/lib/Spinner.js",
        "npm:react-materialize@2.4.8/lib/Parallax.js",
        "npm:react-materialize@2.4.8/lib/PaginationButton.js",
        "npm:react-materialize@2.4.8/lib/Pagination.js",
        "npm:react-materialize@2.4.8/lib/Navbar.js",
        "npm:react-materialize@2.4.8/lib/NavItem.js",
        "npm:react-materialize@2.4.8/lib/Modal.js",
        "npm:react-materialize@2.4.8/lib/MenuItem.js",
        "npm:react-materialize@2.4.8/lib/MediaBox.js",
        "npm:react-materialize@2.4.8/lib/Input.js",
        "npm:react-materialize@2.4.8/lib/Footer.js",
        "npm:react-materialize@2.4.8/lib/Dropdown.js",
        "npm:react-materialize@2.4.8/lib/Divider.js",
        "npm:react-materialize@2.4.8/lib/Container.js",
        "npm:react-materialize@2.4.8/lib/CollectionItem.js",
        "npm:react-materialize@2.4.8/lib/Collection.js",
        "npm:react-materialize@2.4.8/lib/CollapsibleItem.js",
        "npm:react-materialize@2.4.8/lib/Collapsible.js",
        "npm:react-materialize@2.4.8/lib/CardTitle.js",
        "npm:react-materialize@2.4.8/lib/CardPanel.js",
        "npm:react-materialize@2.4.8/lib/Card.js",
        "npm:react-materialize@2.4.8/lib/Carousel.js",
        "npm:react-materialize@2.4.8/lib/Breadcrumb.js",
        "npm:react-materialize@2.4.8/lib/Badge.js",
        "npm:react-materialize@2.4.8/lib/Autocomplete.js",
        "npm:react-icon-base@2.1.0/lib/index.js",
        "npm:react-icon-base@2.1.0.json",
        "npm:react-grid-layout@0.16.6/index.js",
        "npm:react-grid-layout@0.16.6.json",
        "npm:react-grid-layout@0.16.6/build/components/WidthProvider.js",
        "npm:react-grid-layout@0.16.6/build/responsiveUtils.js",
        "npm:react-grid-layout@0.16.6/build/utils.js",
        "npm:lodash.isequal@4.5.0/index.js",
        "npm:lodash.isequal@4.5.0.json",
        "npm:jspm-nodelibs-buffer@0.2.3/global.js",
        "npm:jspm-nodelibs-buffer@0.2.3.json",
        "npm:buffer@5.2.1/index.js",
        "npm:buffer@5.2.1.json",
        "npm:ieee754@1.1.12/index.js",
        "npm:ieee754@1.1.12.json",
        "npm:base64-js@1.3.0/index.js",
        "npm:base64-js@1.3.0.json",
        "npm:react-grid-layout@0.16.6/build/ResponsiveReactGridLayout.js",
        "npm:react-grid-layout@0.16.6/build/ReactGridLayout.js",
        "npm:react-grid-layout@0.16.6/build/GridItem.js",
        "npm:react-resizable@1.7.5/index.js",
        "npm:react-resizable@1.7.5.json",
        "npm:react-resizable@1.7.5/build/ResizableBox.js",
        "npm:react-resizable@1.7.5/build/Resizable.js",
        "npm:react-resizable@1.7.5/build/cloneElement.js",
        "npm:react-draggable@3.1.1/dist/react-draggable.js",
        "npm:react-draggable@3.1.1.json",
        "npm:react-ace@6.2.0/lib/index.js",
        "npm:react-ace@6.2.0.json",
        "npm:react-ace@6.2.0/lib/diff.js",
        "npm:diff-match-patch@1.0.4/index.js",
        "npm:diff-match-patch@1.0.4.json",
        "npm:react-ace@6.2.0/lib/split.js",
        "npm:brace@0.11.1/ext/split.js",
        "npm:brace@0.11.1.json",
        "npm:react-ace@6.2.0/lib/editorOptions.js",
        "npm:lodash.get@4.4.2/index.js",
        "npm:lodash.get@4.4.2.json",
        "npm:brace@0.11.1/index.js",
        "npm:react-ace@6.2.0/lib/ace.js",
        "npm:node-blockly@1.0.35/index.js",
        "npm:node-blockly@1.0.35.json",
        "npm:node-blockly@1.0.35/python.js",
        "npm:node-blockly@1.0.35/lib/python_compressed.js",
        "npm:node-blockly@1.0.35/_blockly.js",
        "npm:node-blockly@1.0.35/lib/blocks_compressed.js",
        "npm:jsdom@11.12.0/lib/api.js",
        "npm:jsdom@11.12.0.json",
        "npm:jsdom@11.12.0/package.json",
        "npm:jsdom@11.12.0/lib/jsdom/browser/resource-loader.js",
        "npm:url@0.11.0/url.js",
        "npm:url@0.11.0.json",
        "npm:querystring@0.2.0/index.js",
        "npm:querystring@0.2.0.json",
        "npm:querystring@0.2.0/encode.js",
        "npm:querystring@0.2.0/decode.js",
        "npm:url@0.11.0/util.js",
        "npm:punycode@1.3.2/punycode.js",
        "npm:punycode@1.3.2.json",
        "npm:jspm-nodelibs-url@0.2.1.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-type.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/document-base-url.js",
        "npm:whatwg-url@6.5.0/lib/public-api.js",
        "npm:whatwg-url@6.5.0.json",
        "npm:whatwg-url@6.5.0/lib/urlencoded.js",
        "npm:whatwg-url@6.5.0/lib/infra.js",
        "npm:whatwg-url@6.5.0/lib/url-state-machine.js",
        "npm:tr46@1.0.1/index.js",
        "npm:tr46@1.0.1.json",
        "npm:tr46@1.0.1/lib/mappingTable.json",
        "npm:tr46@1.0.1/lib/regexes.js",
        "npm:punycode@2.1.1/punycode.js",
        "npm:punycode@2.1.1.json",
        "npm:punycode@1.4.1/punycode.js",
        "npm:punycode@1.4.1.json",
        "npm:jspm-nodelibs-punycode@0.2.1.json",
        "npm:whatwg-url@6.5.0/lib/URLSearchParams.js",
        "npm:whatwg-url@6.5.0/lib//URLSearchParams-impl.js",
        "npm:whatwg-url@6.5.0/lib//urlencoded.js",
        "npm:whatwg-url@6.5.0/lib//infra.js",
        "npm:lodash.sortby@4.7.0/index.js",
        "npm:lodash.sortby@4.7.0.json",
        "npm:whatwg-url@6.5.0/lib/utils.js",
        "npm:webidl-conversions@4.0.2/lib/index.js",
        "npm:webidl-conversions@4.0.2.json",
        "npm:whatwg-url@6.5.0/lib/URL.js",
        "npm:whatwg-url@6.5.0/lib//URL-impl.js",
        "npm:whatwg-url@6.5.0/lib//URLSearchParams.js",
        "npm:whatwg-url@6.5.0/lib///URLSearchParams-impl.js",
        "npm:whatwg-url@6.5.0/lib///urlencoded.js",
        "npm:whatwg-url@6.5.0/lib///infra.js",
        "npm:whatwg-url@6.5.0/lib//utils.js",
        "npm:whatwg-url@6.5.0/lib//url-state-machine.js",
        "npm:request@2.88.0/index.js",
        "npm:request@2.88.0.json",
        "npm:request@2.88.0/request.js",
        "npm:safe-buffer@5.1.2/index.js",
        "npm:safe-buffer@5.1.2.json",
        "npm:performance-now@2.1.0/lib/performance-now.js",
        "npm:performance-now@2.1.0.json",
        "npm:request@2.88.0/lib/tunnel.js",
        "npm:tunnel-agent@0.6.0/index.js",
        "npm:tunnel-agent@0.6.0.json",
        "npm:jspm-nodelibs-util@0.2.2/util.js",
        "npm:jspm-nodelibs-util@0.2.2.json",
        "npm:jspm-nodelibs-util@0.2.2/isBufferBrowser.js",
        "npm:jspm-nodelibs-assert@0.2.1/assert.js",
        "npm:jspm-nodelibs-assert@0.2.1.json",
        "npm:jspm-nodelibs-events@0.2.2/events.js",
        "npm:jspm-nodelibs-events@0.2.2.json",
        "npm:jspm-nodelibs-https@0.2.2/https.js",
        "npm:jspm-nodelibs-https@0.2.2.json",
        "npm:stream-http@2.8.3/index.js",
        "npm:stream-http@2.8.3.json",
        "npm:builtin-status-codes@3.0.0/browser.js",
        "npm:builtin-status-codes@3.0.0.json",
        "npm:xtend@4.0.1/immutable.js",
        "npm:xtend@4.0.1.json",
        "npm:stream-http@2.8.3/lib/response.js",
        "npm:inherits@2.0.3/inherits_browser.js",
        "npm:inherits@2.0.3.json",
        "npm:core-util-is@1.0.2/lib/util.js",
        "npm:core-util-is@1.0.2.json",
        "npm:process-nextick-args@2.0.0/index.js",
        "npm:process-nextick-args@2.0.0.json",
        "npm:util-deprecate@1.0.2/browser.js",
        "npm:util-deprecate@1.0.2.json",
        "npm:string_decoder@1.1.1/lib/string_decoder.js",
        "npm:string_decoder@1.1.1.json",
        "npm:isarray@1.0.0/index.js",
        "npm:isarray@1.0.0.json",
        "npm:stream-http@2.8.3/lib/capability.js",
        "npm:stream-http@2.8.3/lib/request.js",
        "npm:to-arraybuffer@1.0.1/index.js",
        "npm:to-arraybuffer@1.0.1.json",
        "npm:jspm-nodelibs-http@0.2.0.json",
        "npm:jspm-nodelibs-tls@0.2.1/tls.js",
        "npm:jspm-nodelibs-tls@0.2.1.json",
        "npm:jspm-nodelibs-net@0.2.1/net.js",
        "npm:jspm-nodelibs-net@0.2.1.json",
        "npm:request@2.88.0/lib/redirect.js",
        "npm:request@2.88.0/lib/multipart.js",
        "npm:isstream@0.1.2/isstream.js",
        "npm:isstream@0.1.2.json",
        "npm:stream-browserify@2.0.1/index.js",
        "npm:stream-browserify@2.0.1.json",
        "npm:jspm-nodelibs-stream@0.2.1.json",
        "npm:combined-stream@1.0.7/lib/combined_stream.js",
        "npm:combined-stream@1.0.7.json",
        "npm:combined-stream@1.0.7/lib/defer.js",
        "npm:delayed-stream@1.0.0/lib/delayed_stream.js",
        "npm:delayed-stream@1.0.0.json",
        "npm:uuid@3.3.2/v4.js",
        "npm:uuid@3.3.2.json",
        "npm:uuid@3.3.2/lib/bytesToUuid.js",
        "npm:uuid@3.3.2/lib/rng-browser.js",
        "npm:request@2.88.0/lib/hawk.js",
        "npm:crypto-browserify@3.12.0/index.js",
        "npm:crypto-browserify@3.12.0.json",
        "npm:randomfill@1.0.4/browser.js",
        "npm:randomfill@1.0.4.json",
        "npm:randombytes@2.0.6/browser.js",
        "npm:randombytes@2.0.6.json",
        "npm:public-encrypt@4.0.3/browser.js",
        "npm:public-encrypt@4.0.3.json",
        "npm:public-encrypt@4.0.3/privateDecrypt.js",
        "npm:public-encrypt@4.0.3/withPublic.js",
        "npm:bn.js@4.11.8/lib/bn.js",
        "npm:bn.js@4.11.8.json",
        "npm:create-hash@1.2.0/browser.js",
        "npm:create-hash@1.2.0.json",
        "npm:cipher-base@1.0.4/index.js",
        "npm:cipher-base@1.0.4.json",
        "npm:string_decoder@0.10.31/index.js",
        "npm:string_decoder@0.10.31.json",
        "npm:jspm-nodelibs-string_decoder@0.2.2.json",
        "npm:sha.js@2.4.11/index.js",
        "npm:sha.js@2.4.11.json",
        "npm:sha.js@2.4.11/sha512.js",
        "npm:sha.js@2.4.11/hash.js",
        "npm:sha.js@2.4.11/sha384.js",
        "npm:sha.js@2.4.11/sha256.js",
        "npm:sha.js@2.4.11/sha224.js",
        "npm:sha.js@2.4.11/sha1.js",
        "npm:sha.js@2.4.11/sha.js",
        "npm:ripemd160@2.0.2/index.js",
        "npm:ripemd160@2.0.2.json",
        "npm:hash-base@3.0.4/index.js",
        "npm:hash-base@3.0.4.json",
        "npm:md5.js@1.3.5/index.js",
        "npm:md5.js@1.3.5.json",
        "npm:browserify-rsa@4.0.1/index.js",
        "npm:browserify-rsa@4.0.1.json",
        "npm:public-encrypt@4.0.3/xor.js",
        "npm:public-encrypt@4.0.3/mgf.js",
        "npm:parse-asn1@5.1.1/index.js",
        "npm:parse-asn1@5.1.1.json",
        "npm:pbkdf2@3.0.17/browser.js",
        "npm:pbkdf2@3.0.17.json",
        "npm:pbkdf2@3.0.17/lib/sync-browser.js",
        "npm:pbkdf2@3.0.17/lib/default-encoding.js",
        "npm:pbkdf2@3.0.17/lib/precondition.js",
        "npm:create-hash@1.2.0/md5.js",
        "npm:pbkdf2@3.0.17/lib/async.js",
        "npm:browserify-aes@1.2.0/browser.js",
        "npm:browserify-aes@1.2.0.json",
        "npm:browserify-aes@1.2.0/modes/list.json",
        "npm:browserify-aes@1.2.0/decrypter.js",
        "npm:evp_bytestokey@1.0.3/index.js",
        "npm:evp_bytestokey@1.0.3.json",
        "npm:browserify-aes@1.2.0/aes.js",
        "npm:browserify-aes@1.2.0/streamCipher.js",
        "npm:browserify-aes@1.2.0/modes/index.js",
        "npm:browserify-aes@1.2.0/modes/ctr.js",
        "npm:browserify-aes@1.2.0/incr32.js",
        "npm:buffer-xor@1.0.3/index.js",
        "npm:buffer-xor@1.0.3.json",
        "npm:browserify-aes@1.2.0/modes/ofb.js",
        "npm:browserify-aes@1.2.0/modes/cfb1.js",
        "npm:browserify-aes@1.2.0/modes/cfb8.js",
        "npm:browserify-aes@1.2.0/modes/cfb.js",
        "npm:browserify-aes@1.2.0/modes/cbc.js",
        "npm:browserify-aes@1.2.0/modes/ecb.js",
        "npm:browserify-aes@1.2.0/authCipher.js",
        "npm:browserify-aes@1.2.0/ghash.js",
        "npm:browserify-aes@1.2.0/encrypter.js",
        "npm:parse-asn1@5.1.1/fixProc.js",
        "npm:parse-asn1@5.1.1/aesid.json",
        "npm:parse-asn1@5.1.1/asn1.js",
        "npm:parse-asn1@5.1.1/certificate.js",
        "npm:asn1.js@4.10.1/lib/asn1.js",
        "npm:asn1.js@4.10.1.json",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/pem.js",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/pem.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/constants/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/constants/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/node.js",
        "npm:minimalistic-assert@1.0.1/index.js",
        "npm:minimalistic-assert@1.0.1.json",
        "npm:asn1.js@4.10.1/lib/asn1/base/buffer.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/reporter.js",
        "npm:asn1.js@4.10.1/lib/asn1/api.js",
        "npm:jspm-nodelibs-vm@0.2.1/vm.js",
        "npm:jspm-nodelibs-vm@0.2.1.json",
        "npm:public-encrypt@4.0.3/publicEncrypt.js",
        "npm:create-ecdh@4.0.3/browser.js",
        "npm:create-ecdh@4.0.3.json",
        "npm:elliptic@6.4.1/lib/elliptic.js",
        "npm:elliptic@6.4.1.json",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/signature.js",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/key.js",
        "npm:hash.js@1.1.7/lib/hash.js",
        "npm:hash.js@1.1.7.json",
        "npm:hash.js@1.1.7/lib/hash/hmac.js",
        "npm:hash.js@1.1.7/lib/hash/utils.js",
        "npm:hash.js@1.1.7/lib/hash/ripemd.js",
        "npm:hash.js@1.1.7/lib/hash/common.js",
        "npm:hash.js@1.1.7/lib/hash/sha.js",
        "npm:hash.js@1.1.7/lib/hash/sha/512.js",
        "npm:hash.js@1.1.7/lib/hash/sha/384.js",
        "npm:hash.js@1.1.7/lib/hash/sha/256.js",
        "npm:hash.js@1.1.7/lib/hash/sha/common.js",
        "npm:hash.js@1.1.7/lib/hash/sha/224.js",
        "npm:hash.js@1.1.7/lib/hash/sha/1.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/signature.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/key.js",
        "npm:hmac-drbg@1.0.1/lib/hmac-drbg.js",
        "npm:hmac-drbg@1.0.1.json",
        "npm:minimalistic-crypto-utils@1.0.1/lib/utils.js",
        "npm:minimalistic-crypto-utils@1.0.1.json",
        "npm:elliptic@6.4.1/lib/elliptic/curves.js",
        "npm:elliptic@6.4.1/lib/elliptic/precomputed/secp256k1.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/edwards.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/mont.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/short.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/base.js",
        "npm:brorand@1.1.0/index.js",
        "npm:brorand@1.1.0.json",
        "npm:elliptic@6.4.1/lib/elliptic/utils.js",
        "npm:elliptic@6.4.1/package.json",
        "npm:browserify-sign@4.0.4/browser/index.js",
        "npm:browserify-sign@4.0.4.json",
        "npm:browserify-sign@4.0.4/browser/algorithms.json",
        "npm:browserify-sign@4.0.4/browser/verify.js",
        "npm:browserify-sign@4.0.4/browser/curves.json",
        "npm:browserify-sign@4.0.4/browser/sign.js",
        "npm:create-hmac@1.1.7/browser.js",
        "npm:create-hmac@1.1.7.json",
        "npm:create-hmac@1.1.7/legacy.js",
        "npm:diffie-hellman@5.0.3/browser.js",
        "npm:diffie-hellman@5.0.3.json",
        "npm:diffie-hellman@5.0.3/lib/dh.js",
        "npm:diffie-hellman@5.0.3/lib/generatePrime.js",
        "npm:miller-rabin@4.0.1/lib/mr.js",
        "npm:miller-rabin@4.0.1.json",
        "npm:diffie-hellman@5.0.3/lib/primes.json",
        "npm:browserify-cipher@1.0.1/browser.js",
        "npm:browserify-cipher@1.0.1.json",
        "npm:browserify-des@1.0.2/modes.js",
        "npm:browserify-des@1.0.2.json",
        "npm:browserify-des@1.0.2/index.js",
        "npm:des.js@1.0.0/lib/des.js",
        "npm:des.js@1.0.0.json",
        "npm:des.js@1.0.0/lib/des/ede.js",
        "npm:des.js@1.0.0/lib/des/cbc.js",
        "npm:des.js@1.0.0/lib/des/des.js",
        "npm:des.js@1.0.0/lib/des/cipher.js",
        "npm:des.js@1.0.0/lib/des/utils.js",
        "npm:browserify-sign@4.0.4/algos.js",
        "npm:jspm-nodelibs-crypto@0.2.1.json",
        "npm:request@2.88.0/lib/oauth.js",
        "npm:oauth-sign@0.9.0/index.js",
        "npm:oauth-sign@0.9.0.json",
        "npm:caseless@0.12.0/index.js",
        "npm:caseless@0.12.0.json",
        "npm:qs@6.5.2/lib/index.js",
        "npm:qs@6.5.2.json",
        "npm:qs@6.5.2/lib/formats.js",
        "npm:qs@6.5.2/lib/parse.js",
        "npm:qs@6.5.2/lib/utils.js",
        "npm:qs@6.5.2/lib/stringify.js",
        "npm:request@2.88.0/lib/auth.js",
        "npm:request@2.88.0/lib/helpers.js",
        "npm:json-stringify-safe@5.0.1/stringify.js",
        "npm:json-stringify-safe@5.0.1.json",
        "npm:request@2.88.0/lib/har.js",
        "npm:extend@3.0.2/index.js",
        "npm:extend@3.0.2.json",
        "npm:har-validator@5.1.3/lib/promise.js",
        "npm:har-validator@5.1.3.json",
        "npm:ajv@6.5.5/lib/refs/json-schema-draft-06.json",
        "npm:ajv@6.5.5.json",
        "npm:har-schema@2.0.0/lib/index.js",
        "npm:har-schema@2.0.0.json",
        "npm:har-schema@2.0.0/lib/timings.json",
        "npm:har-schema@2.0.0/lib/response.json",
        "npm:har-schema@2.0.0/lib/request.json",
        "npm:har-schema@2.0.0/lib/query.json",
        "npm:har-schema@2.0.0/lib/postData.json",
        "npm:har-schema@2.0.0/lib/pageTimings.json",
        "npm:har-schema@2.0.0/lib/page.json",
        "npm:har-schema@2.0.0/lib/log.json",
        "npm:har-schema@2.0.0/lib/header.json",
        "npm:har-schema@2.0.0/lib/har.json",
        "npm:har-schema@2.0.0/lib/entry.json",
        "npm:har-schema@2.0.0/lib/creator.json",
        "npm:har-schema@2.0.0/lib/cookie.json",
        "npm:har-schema@2.0.0/lib/content.json",
        "npm:har-schema@2.0.0/lib/cache.json",
        "npm:har-schema@2.0.0/lib/browser.json",
        "npm:har-schema@2.0.0/lib/beforeRequest.json",
        "npm:har-schema@2.0.0/lib/afterRequest.json",
        "npm:har-validator@5.1.3/lib/error.js",
        "npm:ajv@6.5.5/lib/ajv.js",
        "npm:ajv@6.5.5/lib/refs/json-schema-draft-07.json",
        "npm:ajv@6.5.5/lib/refs/data.json",
        "npm:ajv@6.5.5/lib/compile/error_classes.js",
        "npm:ajv@6.5.5/lib/compile/resolve.js",
        "npm:json-schema-traverse@0.4.1/index.js",
        "npm:json-schema-traverse@0.4.1.json",
        "npm:ajv@6.5.5/lib/compile/schema_obj.js",
        "npm:ajv@6.5.5/lib/compile/util.js",
        "npm:ajv@6.5.5/lib/compile/ucs2length.js",
        "npm:fast-deep-equal@2.0.1/index.js",
        "npm:fast-deep-equal@2.0.1.json",
        "npm:uri-js@4.2.2/dist/es5/uri.all.js",
        "npm:uri-js@4.2.2.json",
        "npm:ajv@6.5.5/lib/keyword.js",
        "npm:ajv@6.5.5/lib/dotjs/custom.js",
        "npm:ajv@6.5.5/lib/compile/async.js",
        "npm:ajv@6.5.5/lib/data.js",
        "npm:ajv@6.5.5/lib/compile/rules.js",
        "npm:ajv@6.5.5/lib/dotjs/index.js",
        "npm:ajv@6.5.5/lib/dotjs/validate.js",
        "npm:ajv@6.5.5/lib/dotjs/uniqueItems.js",
        "npm:ajv@6.5.5/lib/dotjs/required.js",
        "npm:ajv@6.5.5/lib/dotjs/propertyNames.js",
        "npm:ajv@6.5.5/lib/dotjs/properties.js",
        "npm:ajv@6.5.5/lib/dotjs/pattern.js",
        "npm:ajv@6.5.5/lib/dotjs/oneOf.js",
        "npm:ajv@6.5.5/lib/dotjs/not.js",
        "npm:ajv@6.5.5/lib/dotjs/multipleOf.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitProperties.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitLength.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitItems.js",
        "npm:ajv@6.5.5/lib/dotjs/_limit.js",
        "npm:ajv@6.5.5/lib/dotjs/items.js",
        "npm:ajv@6.5.5/lib/dotjs/if.js",
        "npm:ajv@6.5.5/lib/dotjs/format.js",
        "npm:ajv@6.5.5/lib/dotjs/enum.js",
        "npm:ajv@6.5.5/lib/dotjs/dependencies.js",
        "npm:ajv@6.5.5/lib/dotjs/contains.js",
        "npm:ajv@6.5.5/lib/dotjs/const.js",
        "npm:ajv@6.5.5/lib/dotjs/comment.js",
        "npm:ajv@6.5.5/lib/dotjs/anyOf.js",
        "npm:ajv@6.5.5/lib/dotjs/allOf.js",
        "npm:ajv@6.5.5/lib/dotjs/ref.js",
        "npm:ajv@6.5.5/lib/compile/formats.js",
        "npm:fast-json-stable-stringify@2.0.0/index.js",
        "npm:fast-json-stable-stringify@2.0.0.json",
        "npm:ajv@6.5.5/lib/cache.js",
        "npm:ajv@6.5.5/lib/compile/index.js",
        "npm:jspm-nodelibs-querystring@0.2.2/querystring.js",
        "npm:jspm-nodelibs-querystring@0.2.2.json",
        "npm:jspm-nodelibs-fs@0.2.1/fs.js",
        "npm:jspm-nodelibs-fs@0.2.1.json",
        "npm:request@2.88.0/lib/querystring.js",
        "npm:request@2.88.0/lib/getProxyFromURI.js",
        "npm:request@2.88.0/lib/cookies.js",
        "npm:tough-cookie@2.4.3/lib/cookie.js",
        "npm:tough-cookie@2.4.3.json",
        "npm:tough-cookie@2.4.3/lib/permuteDomain.js",
        "npm:tough-cookie@2.4.3/lib/pubsuffix-psl.js",
        "npm:psl@1.1.29/index.js",
        "npm:psl@1.1.29.json",
        "npm:psl@1.1.29/data/rules.json",
        "npm:tough-cookie@2.4.3/package.json",
        "npm:tough-cookie@2.4.3/lib/pathMatch.js",
        "npm:tough-cookie@2.4.3/lib/memstore.js",
        "npm:tough-cookie@2.4.3/lib/store.js",
        "npm:is-typedarray@1.0.0/index.js",
        "npm:is-typedarray@1.0.0.json",
        "npm:form-data@2.3.3/lib/browser.js",
        "npm:form-data@2.3.3.json",
        "npm:forever-agent@0.6.1/index.js",
        "npm:forever-agent@0.6.1.json",
        "npm:mime-types@2.1.21/index.js",
        "npm:mime-types@2.1.21.json",
        "npm:jspm-nodelibs-path@0.2.3/path.js",
        "npm:jspm-nodelibs-path@0.2.3.json",
        "npm:mime-db@1.37.0/index.js",
        "npm:mime-db@1.37.0.json",
        "npm:mime-db@1.37.0/db.json",
        "npm:http-signature@1.2.0/lib/index.js",
        "npm:http-signature@1.2.0.json",
        "npm:http-signature@1.2.0/lib/utils.js",
        "npm:sshpk@1.15.2/lib/index.js",
        "npm:sshpk@1.15.2.json",
        "npm:sshpk@1.15.2/lib/errors.js",
        "npm:assert-plus@1.0.0/assert.js",
        "npm:assert-plus@1.0.0.json",
        "npm:sshpk@1.15.2/lib/identity.js",
        "npm:safer-buffer@2.1.2/safer.js",
        "npm:safer-buffer@2.1.2.json",
        "npm:asn1@0.2.4/lib/index.js",
        "npm:asn1@0.2.4.json",
        "npm:asn1@0.2.4/lib/ber/index.js",
        "npm:asn1@0.2.4/lib/ber/writer.js",
        "npm:asn1@0.2.4/lib/ber/errors.js",
        "npm:asn1@0.2.4/lib/ber/types.js",
        "npm:asn1@0.2.4/lib/ber/reader.js",
        "npm:sshpk@1.15.2/lib/utils.js",
        "npm:tweetnacl@0.14.5/nacl-fast.js",
        "npm:tweetnacl@0.14.5.json",
        "npm:jsbn@0.1.1/index.js",
        "npm:jsbn@0.1.1.json",
        "npm:ecc-jsbn@0.1.2/lib/ec.js",
        "npm:ecc-jsbn@0.1.2.json",
        "npm:sshpk@1.15.2/lib/algs.js",
        "npm:sshpk@1.15.2/lib/key.js",
        "npm:sshpk@1.15.2/lib/formats/dnssec.js",
        "npm:sshpk@1.15.2/lib/dhe.js",
        "npm:ecc-jsbn@0.1.2/index.js",
        "npm:ecc-jsbn@0.1.2/lib/sec.js",
        "npm:sshpk@1.15.2/lib/private-key.js",
        "npm:sshpk@1.15.2/lib/formats/ssh-private.js",
        "npm:bcrypt-pbkdf@1.0.2/index.js",
        "npm:bcrypt-pbkdf@1.0.2.json",
        "npm:sshpk@1.15.2/lib/ssh-buffer.js",
        "npm:sshpk@1.15.2/lib/formats/rfc4253.js",
        "npm:sshpk@1.15.2/lib/formats/pem.js",
        "npm:sshpk@1.15.2/lib/formats/pkcs8.js",
        "npm:sshpk@1.15.2/lib/formats/pkcs1.js",
        "npm:sshpk@1.15.2/lib/formats/auto.js",
        "npm:sshpk@1.15.2/lib/formats/ssh.js",
        "npm:sshpk@1.15.2/lib/ed-compat.js",
        "npm:sshpk@1.15.2/lib/signature.js",
        "npm:sshpk@1.15.2/lib/fingerprint.js",
        "npm:sshpk@1.15.2/lib/certificate.js",
        "npm:sshpk@1.15.2/lib/formats/x509-pem.js",
        "npm:sshpk@1.15.2/lib/formats/x509.js",
        "npm:sshpk@1.15.2/lib/formats/openssh-cert.js",
        "npm:http-signature@1.2.0/lib/verify.js",
        "npm:http-signature@1.2.0/lib/signer.js",
        "npm:jsprim@1.4.1/lib/jsprim.js",
        "npm:jsprim@1.4.1.json",
        "npm:json-schema@0.2.3/lib/validate.js",
        "npm:json-schema@0.2.3.json",
        "npm:verror@1.10.0/lib/verror.js",
        "npm:verror@1.10.0.json",
        "npm:extsprintf@1.3.0/lib/extsprintf.js",
        "npm:extsprintf@1.3.0.json",
        "npm:http-signature@1.2.0/lib/parser.js",
        "npm:aws4@1.8.0/aws4.js",
        "npm:aws4@1.8.0.json",
        "npm:aws4@1.8.0/lru.js",
        "npm:aws-sign2@0.7.0/index.js",
        "npm:aws-sign2@0.7.0.json",
        "npm:browserify-zlib@0.1.4/src/index.js",
        "npm:browserify-zlib@0.1.4.json",
        "npm:browserify-zlib@0.1.4/src/binding.js",
        "npm:pako@0.2.9/lib/zlib/constants.js",
        "npm:pako@0.2.9.json",
        "npm:pako@0.2.9/lib/zlib/inflate.js",
        "npm:pako@0.2.9/lib/zlib/inftrees.js",
        "npm:pako@0.2.9/lib/utils/common.js",
        "npm:pako@0.2.9/lib/zlib/inffast.js",
        "npm:pako@0.2.9/lib/zlib/crc32.js",
        "npm:pako@0.2.9/lib/zlib/adler32.js",
        "npm:pako@0.2.9/lib/zlib/deflate.js",
        "npm:pako@0.2.9/lib/zlib/messages.js",
        "npm:pako@0.2.9/lib/zlib/trees.js",
        "npm:pako@0.2.9/lib/zlib/zstream.js",
        "npm:jspm-nodelibs-zlib@0.2.3.json",
        "npm:whatwg-encoding@1.0.5/lib/whatwg-encoding.js",
        "npm:whatwg-encoding@1.0.5.json",
        "npm:whatwg-encoding@1.0.5/lib/labels-to-names.json",
        "npm:whatwg-encoding@1.0.5/lib/supported-names.json",
        "npm:iconv-lite@0.4.24/lib/index.js",
        "npm:iconv-lite@0.4.24.json",
        "npm:iconv-lite@0.4.24/encodings/index.js",
        "npm:iconv-lite@0.4.24/encodings/dbcs-data.js",
        "npm:iconv-lite@0.4.24/encodings/tables/big5-added.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp950.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp949.json",
        "npm:iconv-lite@0.4.24/encodings/tables/gb18030-ranges.json",
        "npm:iconv-lite@0.4.24/encodings/tables/gbk-added.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp936.json",
        "npm:iconv-lite@0.4.24/encodings/tables/eucjp.json",
        "npm:iconv-lite@0.4.24/encodings/tables/shiftjis.json",
        "npm:iconv-lite@0.4.24/encodings/dbcs-codec.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-data-generated.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-data.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-codec.js",
        "npm:iconv-lite@0.4.24/encodings/utf7.js",
        "npm:iconv-lite@0.4.24/encodings/utf16.js",
        "npm:iconv-lite@0.4.24/encodings/internal.js",
        "npm:iconv-lite@0.4.24/lib/bom-handling.js",
        "npm:html-encoding-sniffer@1.0.2/lib/html-encoding-sniffer.js",
        "npm:html-encoding-sniffer@1.0.2.json",
        "npm:data-urls@1.1.0/lib/parser.js",
        "npm:data-urls@1.1.0.json",
        "npm:data-urls@1.1.0/lib/utils.js",
        "npm:abab@2.0.0/index.js",
        "npm:abab@2.0.0.json",
        "npm:abab@2.0.0/lib/btoa.js",
        "npm:abab@2.0.0/lib/atob.js",
        "npm:whatwg-url@7.0.0/lib/public-api.js",
        "npm:whatwg-url@7.0.0.json",
        "npm:whatwg-url@7.0.0/lib/urlencoded.js",
        "npm:whatwg-url@7.0.0/lib/infra.js",
        "npm:whatwg-url@7.0.0/lib/url-state-machine.js",
        "npm:whatwg-url@7.0.0/lib/URLSearchParams.js",
        "npm:whatwg-url@7.0.0/lib/URLSearchParams-impl.js",
        "npm:whatwg-url@7.0.0/lib/utils.js",
        "npm:whatwg-url@7.0.0/lib/URL.js",
        "npm:whatwg-url@7.0.0/lib/URL-impl.js",
        "npm:whatwg-mimetype@2.2.0/lib/mime-type.js",
        "npm:whatwg-mimetype@2.2.0.json",
        "npm:whatwg-mimetype@2.2.0/lib/utils.js",
        "npm:whatwg-mimetype@2.2.0/lib/serializer.js",
        "npm:whatwg-mimetype@2.2.0/lib/parser.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/documentfeatures.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/vm-shim.js",
        "npm:escodegen@1.11.0/escodegen.js",
        "npm:escodegen@1.11.0.json",
        "npm:escodegen@1.11.0/package.json",
        "npm:source-map@0.6.1/source-map.js",
        "npm:source-map@0.6.1.json",
        "npm:source-map@0.6.1/lib/source-node.js",
        "npm:source-map@0.6.1/lib/util.js",
        "npm:source-map@0.6.1/lib/source-map-generator.js",
        "npm:source-map@0.6.1/lib/mapping-list.js",
        "npm:source-map@0.6.1/lib/array-set.js",
        "npm:source-map@0.6.1/lib/base64-vlq.js",
        "npm:source-map@0.6.1/lib/base64.js",
        "npm:source-map@0.6.1/lib/source-map-consumer.js",
        "npm:source-map@0.6.1/lib/quick-sort.js",
        "npm:source-map@0.6.1/lib/binary-search.js",
        "npm:esutils@2.0.2/lib/utils.js",
        "npm:esutils@2.0.2.json",
        "npm:esutils@2.0.2/lib/keyword.js",
        "npm:esutils@2.0.2/lib/code.js",
        "npm:esutils@2.0.2/lib/ast.js",
        "npm:estraverse@4.2.0/estraverse.js",
        "npm:estraverse@4.2.0.json",
        "npm:estraverse@4.2.0/package.json",
        "npm:acorn-globals@4.3.0/index.js",
        "npm:acorn-globals@4.3.0.json",
        "npm:acorn-walk@6.1.1/dist/walk.js",
        "npm:acorn-walk@6.1.1.json",
        "npm:acorn@6.0.4/dist/acorn.js",
        "npm:acorn@6.0.4.json",
        "npm:acorn@5.7.3/dist/acorn.js",
        "npm:acorn@5.7.3.json",
        "npm:jsdom@11.12.0/lib/jsdom/browser/domtohtml.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/parse5-adapter-serialization.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/internal-constants.js",
        "npm:symbol-tree@3.2.2/lib/SymbolTree.js",
        "npm:symbol-tree@3.2.2.json",
        "npm:symbol-tree@3.2.2/lib/TreeIterator.js",
        "npm:symbol-tree@3.2.2/lib/TreePosition.js",
        "npm:symbol-tree@3.2.2/lib/SymbolTreeNode.js",
        "npm:parse5@4.0.0/lib/index.js",
        "npm:parse5@4.0.0.json",
        "npm:parse5@4.0.0/lib/tree_adapters/htmlparser2.js",
        "npm:parse5@4.0.0/lib/common/html.js",
        "npm:parse5@4.0.0/lib/common/doctype.js",
        "npm:parse5@4.0.0/lib/tree_adapters/default.js",
        "npm:parse5@4.0.0/lib/serializer/index.js",
        "npm:parse5@4.0.0/lib/utils/merge_options.js",
        "npm:parse5@4.0.0/lib/parser/index.js",
        "npm:parse5@4.0.0/lib/common/unicode.js",
        "npm:parse5@4.0.0/lib/common/foreign_content.js",
        "npm:parse5@4.0.0/lib/tokenizer/index.js",
        "npm:parse5@4.0.0/lib/tokenizer/named_entity_data.js",
        "npm:parse5@4.0.0/lib/tokenizer/preprocessor.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/parser_mixin.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/open_element_stack_mixin.js",
        "npm:parse5@4.0.0/lib/utils/mixin.js",
        "npm:parse5@4.0.0/lib/extensions/position_tracking/preprocessor_mixin.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/tokenizer_mixin.js",
        "npm:parse5@4.0.0/lib/parser/formatting_element_list.js",
        "npm:parse5@4.0.0/lib/parser/open_element_stack.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/Window.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/default-stylesheet.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/index.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-filter.js",
        "npm:jsdom@11.12.0/lib/jsdom/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/level3/xpath.js",
        "npm:jsdom@11.12.0/lib/jsdom/level2/style.js",
        "npm:cssstyle@1.1.1/lib/CSSStyleDeclaration.js",
        "npm:cssstyle@1.1.1.json",
        "npm:cssstyle@1.1.1/lib/properties.js",
        "npm:cssstyle@1.1.1/lib/parsers.js",
        "npm:cssstyle@1.1.1/lib/validProperties.js",
        "npm:cssom@0.3.4/lib/index.js",
        "npm:cssom@0.3.4.json",
        "npm:cssom@0.3.4/lib/clone.js",
        "npm:cssom@0.3.4/lib/CSSKeyframesRule.js",
        "npm:cssom@0.3.4/lib/CSSRule.js",
        "npm:cssom@0.3.4/lib/CSSKeyframeRule.js",
        "npm:cssom@0.3.4/lib/CSSStyleDeclaration.js",
        "npm:cssom@0.3.4/lib/parse.js",
        "npm:cssom@0.3.4/lib/CSSDocumentRule.js",
        "npm:cssom@0.3.4/lib/MatcherList.js",
        "npm:cssom@0.3.4/lib/CSSValueExpression.js",
        "npm:cssom@0.3.4/lib/CSSValue.js",
        "npm:cssom@0.3.4/lib/CSSHostRule.js",
        "npm:cssom@0.3.4/lib/CSSFontFaceRule.js",
        "npm:cssom@0.3.4/lib/CSSSupportsRule.js",
        "npm:cssom@0.3.4/lib/CSSMediaRule.js",
        "npm:cssom@0.3.4/lib/MediaList.js",
        "npm:cssom@0.3.4/lib/CSSImportRule.js",
        "npm:cssom@0.3.4/lib/CSSStyleSheet.js",
        "npm:cssom@0.3.4/lib/CSSStyleRule.js",
        "npm:cssom@0.3.4/lib/StyleSheet.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/register-elements.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGSVGElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGSVGElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/WindowEventHandlers-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/create-event-accessor.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/runtime-script-errors.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ErrorEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/ErrorEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ErrorEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/Event-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Event.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGGraphicsElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGTests-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGStringList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGStringList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGListBase.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/svg/basic-types.js",
        "npm:domexception@1.0.1/lib/public-api.js",
        "npm:domexception@1.0.1.json",
        "npm:domexception@1.0.1/lib/DOMException.js",
        "npm:domexception@1.0.1/lib//DOMException-impl.js",
        "npm:domexception@1.0.1/lib//utils.js",
        "npm:domexception@1.0.1/lib//legacy-error-codes.json",
        "npm:domexception@1.0.1/lib/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/strings.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAndSVGElementShared-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMStringMap.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMStringMap-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/validate-names.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/namespaces.js",
        "npm:xml-name-validator@3.0.0/lib/xml-name-validator.js",
        "npm:xml-name-validator@3.0.0.json",
        "npm:xml-name-validator@3.0.0/lib/generated-parser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Attr.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes/Attr-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/focusing.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/form-controls.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NodeList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NodeList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/dates-and-times.js",
        "npm:left-pad@1.3.0/index.js",
        "npm:left-pad@1.3.0.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FocusEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/FocusEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FocusEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/UIEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventTarget.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/EventTarget-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventListenerOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AddEventListenerOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/UIEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/UIEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/GlobalEventHandlers-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ElementCSSInlineStyle-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Element-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NonDocumentTypeChildNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLCollection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLCollection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/ordered-set.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NamedNodeMap.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes/NamedNodeMap-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMTokenList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMTokenList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/named-properties-window.js",
        "npm:jsdom@11.12.0/lib/jsdom/named-properties-tracker.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ChildNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ParentNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/selectors.js",
        "npm:nwsapi@2.0.9/src/nwsapi.js",
        "npm:nwsapi@2.0.9.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Node-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-document-position.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGAnimatedString.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGAnimatedString-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGNumber.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGNumber-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WindowEventHandlers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGGraphicsElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGTests.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/GlobalEventHandlers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ElementCSSInlineStyle.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Element.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ParentNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Node.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/GetRootNodeOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NonDocumentTypeChildNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ChildNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLVideoElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLVideoElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMediaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/not-implemented.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MouseEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/MouseEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MouseEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventModifierInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/EventModifierMixin-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMediaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ElementContentEditable.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ElementContentEditable-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TextTrackKind.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLUnknownElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLUnknownElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLUListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLUListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTrackElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTrackElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTextAreaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTextAreaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/text.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/traversal.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ValidityState.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/constraint-validation/ValidityState-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/constraint-validation/DefaultConstraintValidation-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SelectionMode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTemplateElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTemplateElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableSectionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableSectionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableRowElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableRowElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTitleElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTitleElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTimeElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTimeElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableCaptionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableCaptionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableColElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableColElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableCellElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableCellElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLStyleElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLStyleElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/stylesheets.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/LinkStyle.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/LinkStyle-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSpanElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSpanElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSourceElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSourceElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSelectElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSelectElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptionsCollection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptionsCollection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptGroupElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptGroupElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLScriptElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLScriptElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLQuoteElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLQuoteElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLProgressElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLProgressElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLPreElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLPreElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLPictureElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLPictureElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLParamElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLParamElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLParagraphElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLParagraphElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOutputElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOutputElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLObjectElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLObjectElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLModElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLModElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMeterElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMeterElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMetaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMetaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMenuElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMenuElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMarqueeElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMarqueeElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMapElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMapElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLinkElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLinkElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLIElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLIElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLegendElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLegendElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLabelElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLabelElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLInputElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLInputElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FileList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/FileList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLImageElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLImageElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLIFrameElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLIFrameElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFrameElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/navigation.js",
        "npm:array-equal@1.0.0/index.js",
        "npm:array-equal@1.0.0.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHtmlElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHtmlElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHRElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHRElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHeadElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHeadElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHeadingElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHeadingElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFrameSetElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFrameSetElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFrameElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFormElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFormElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFontElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFontElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFieldSetElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFieldSetElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLEmbedElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLEmbedElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDivElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDivElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDirectoryElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDirectoryElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDialogElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDialogElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDetailsElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDetailsElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDataListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDataListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDataElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDataElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLCanvasElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLCanvasElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLButtonElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLButtonElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBRElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBRElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBodyElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBodyElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBaseElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBaseElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAudioElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAudioElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAreaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAreaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHyperlinkElementUtils-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHyperlinkElementUtils.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAnchorElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAnchorElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Document-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TouchEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/TouchEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TouchEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProgressEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/ProgressEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProgressEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/PopStateEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/PopStateEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/PopStateEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MessageEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/MessageEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MessageEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/KeyboardEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/KeyboardEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/KeyboardEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HashChangeEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/HashChangeEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HashChangeEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CustomEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CustomEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CustomEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NodeIterator.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/NodeIterator-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/helpers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TreeWalker.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/TreeWalker-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NonElementParentNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMImplementation.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMImplementation-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Document.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NonElementParentNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DocumentType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DocumentType-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DocumentFragment.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DocumentFragment-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Text.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Text-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/CharacterData-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CharacterData.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CDATASection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/CDATASection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProcessingInstruction.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ProcessingInstruction-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Comment.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Comment-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Location.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/Location-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/History.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/History-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/htmltodom.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/parse5-adapter-parsing.js",
        "npm:sax@1.2.4/lib/sax.js",
        "npm:sax@1.2.4.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Storage.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/webstorage/Storage-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/StorageEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/StorageEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/StorageEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLHttpRequestUpload.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/XMLHttpRequestUpload-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/XMLHttpRequestEventTarget-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLHttpRequestEventTarget.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FormData.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/FormData-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/File.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/File-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/Blob-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Blob.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BlobPropertyBag.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EndingType.js",
        "npm:os-browserify@0.3.0/browser.js",
        "npm:os-browserify@0.3.0.json",
        "npm:jspm-nodelibs-os@0.2.2.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FilePropertyBag.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMParser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/domparsing/DOMParser-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SupportedType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Performance.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/hr-time/Performance-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Screen.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/Screen-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BarProp.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/BarProp-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WheelEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/WheelEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WheelEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CompositionEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CompositionEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CompositionEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CloseEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CloseEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CloseEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLDocument.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/XMLDocument-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/SessionHistory.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AbortSignal.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/aborting/AbortSignal-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AbortController.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/aborting/AbortController-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Navigator.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/Navigator-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorConcurrentHardware-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorPlugins-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorCookies-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorOnLine-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorLanguage-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorID-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorConcurrentHardware.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorPlugins.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorCookies.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorOnLine.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorLanguage.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorID.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/External.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/External-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/websockets/WebSocket-impl.js",
        "npm:ws@5.2.2/index.js",
        "npm:ws@5.2.2.json",
        "npm:ws@5.2.2/lib/sender.js",
        "npm:ws@5.2.2/lib/constants.js",
        "npm:ws@5.2.2/lib/validation.js",
        "npm:utf-8-validate@4.0.0/index.js",
        "npm:utf-8-validate@4.0.0.json",
        "npm:utf-8-validate@4.0.0/fallback.js",
        "npm:bindings@1.3.0/bindings.js",
        "npm:bindings@1.3.0.json",
        "npm:ws@5.2.2/lib/buffer-util.js",
        "npm:bufferutil@3.0.0/index.js",
        "npm:bufferutil@3.0.0.json",
        "npm:bufferutil@3.0.0/fallback.js",
        "npm:bindings@1.2.1/bindings.js",
        "npm:bindings@1.2.1.json",
        "npm:ws@5.2.2/lib/permessage-deflate.js",
        "npm:async-limiter@1.0.0/index.js",
        "npm:async-limiter@1.0.0.json",
        "npm:ws@5.2.2/lib/receiver.js",
        "npm:ws@5.2.2/lib/websocket-server.js",
        "npm:ws@5.2.2/lib/websocket.js",
        "npm:ws@5.2.2/lib/extension.js",
        "npm:ws@5.2.2/lib/event-target.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WebSocket.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/websockets/WebSocket-impl-browser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BinaryType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FileReader.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/FileReader-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xmlhttprequest.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/json.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xmlhttprequest-symbols.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr-utils.js",
        "npm:jspm-nodelibs-child_process@0.2.1/child_process.js",
        "npm:jspm-nodelibs-child_process@0.2.1.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/post-message.js",
        "npm:jsdom@11.12.0/lib/jsdom/virtual-console.js",
        "npm:w3c-hr-time@1.0.1/index.js",
        "npm:w3c-hr-time@1.0.1.json",
        "npm:w3c-hr-time@1.0.1/lib/clock-is-accurate.js",
        "npm:w3c-hr-time@1.0.1/lib/utils.js",
        "npm:browser-process-hrtime@0.1.3/index.js",
        "npm:browser-process-hrtime@0.1.3.json",
        "npm:w3c-hr-time@1.0.1/lib/performance.js",
        "npm:w3c-hr-time@1.0.1/lib/calculate-clock-offset.js",
        "npm:w3c-hr-time@1.0.1/lib/global-monotonic-clock.js",
        "npm:request-promise-native@1.0.5/lib/rp.js",
        "npm:request-promise-native@1.0.5.json",
        "npm:stealthy-require@1.1.1/lib/index.js",
        "npm:stealthy-require@1.1.1.json",
        "npm:request-promise-core@1.1.1/configure/request2.js",
        "npm:request-promise-core@1.1.1.json",
        "npm:request-promise-core@1.1.1/lib/plumbing.js",
        "npm:lodash@4.17.11/isUndefined.js",
        "npm:lodash@4.17.11/isString.js",
        "npm:request-promise-core@1.1.1/lib/errors.js",
        "npm:pn@1.1.0/fs.js",
        "npm:pn@1.1.0.json",
        "npm:pn@1.1.0/_promisify.js",
        "npm:pn@1.1.0/_promise.js",
        "npm:node-blockly@1.0.35/lib/i18n/en.js",
        "npm:node-blockly@1.0.35/lib/blockly_compressed.js",
        "npm:xmlshim@0.2.3/browser.js",
        "npm:xmlshim@0.2.3.json",
        "npm:node-blockly@1.0.35/lua.js",
        "npm:node-blockly@1.0.35/lib/lua_compressed.js",
        "npm:node-blockly@1.0.35/dart.js",
        "npm:node-blockly@1.0.35/lib/dart_compressed.js",
        "npm:node-blockly@1.0.35/php.js",
        "npm:node-blockly@1.0.35/lib/php_compressed.js",
        "npm:node-blockly@1.0.35/js.js",
        "npm:node-blockly@1.0.35/lib/javascript_compressed.js",
        "npm:namor@1.1.1/dist/index.js",
        "npm:namor@1.1.1.json",
        "npm:namor@1.1.1/dist/is-valid.js",
        "npm:namor@1.1.1/data.json",
        "npm:namor@1.1.1/dist/generate.js",
        "npm:namor@1.1.1/dist/random.js",
        "npm:lodash@4.17.11/lodash.js",
        "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js",
        "npm:isomorphic-fetch@2.2.1.json",
        "npm:whatwg-fetch@2.0.4/fetch.js",
        "npm:whatwg-fetch@2.0.4.json",
        "npm:history@3.3.0/lib/index.js",
        "npm:history@3.3.0/lib/useBeforeUnload.js",
        "npm:graphiql@0.11.11/dist/index.js",
        "npm:graphiql@0.11.11.json",
        "npm:graphiql@0.11.11/dist/components/GraphiQL.js",
        "npm:graphiql@0.11.11/dist/utility/introspectionQueries.js",
        "npm:graphql@14.0.2/index.js",
        "npm:graphql@14.0.2.json",
        "npm:graphql@14.0.2/utilities/index.js",
        "npm:graphql@14.0.2/utilities/findDeprecatedUsages.js",
        "npm:graphql@14.0.2/utilities/TypeInfo.js",
        "npm:graphql@14.0.2/jsutils/find.js",
        "npm:graphql@14.0.2/utilities/typeFromAST.js",
        "npm:graphql@14.0.2/type/definition.js",
        "npm:graphql@14.0.2/utilities/valueFromASTUntyped.js",
        "npm:graphql@14.0.2/language/kinds.js",
        "npm:graphql@14.0.2/jsutils/isInvalid.js",
        "npm:graphql@14.0.2/jsutils/keyValMap.js",
        "npm:graphql@14.0.2/jsutils/keyMap.js",
        "npm:graphql@14.0.2/jsutils/invariant.js",
        "npm:graphql@14.0.2/jsutils/inspect.js",
        "npm:graphql@14.0.2/jsutils/instanceOf.js",
        "npm:graphql@14.0.2/jsutils/defineToStringTag.js",
        "npm:graphql@14.0.2/jsutils/defineToJSON.js",
        "npm:graphql@14.0.2/type/introspection.js",
        "npm:graphql@14.0.2/language/directiveLocation.js",
        "npm:graphql@14.0.2/type/scalars.js",
        "npm:graphql@14.0.2/jsutils/isInteger.js",
        "npm:graphql@14.0.2/jsutils/isFinite.js",
        "npm:graphql@14.0.2/language/printer.js",
        "npm:graphql@14.0.2/language/visitor.js",
        "npm:graphql@14.0.2/utilities/astFromValue.js",
        "npm:graphql@14.0.2/jsutils/objectValues.js",
        "npm:graphql@14.0.2/jsutils/isNullish.js",
        "npm:iterall@1.2.2/index.js",
        "npm:iterall@1.2.2.json",
        "npm:graphql@14.0.2/error/GraphQLError.js",
        "npm:graphql@14.0.2/language/location.js",
        "npm:graphql@14.0.2/error/printError.js",
        "npm:graphql@14.0.2/utilities/findBreakingChanges.js",
        "npm:graphql@14.0.2/utilities/assertValidName.js",
        "npm:graphql@14.0.2/utilities/typeComparators.js",
        "npm:graphql@14.0.2/utilities/separateOperations.js",
        "npm:graphql@14.0.2/utilities/concatAST.js",
        "npm:graphql@14.0.2/utilities/isValidLiteralValue.js",
        "npm:graphql@14.0.2/validation/ValidationContext.js",
        "npm:graphql@14.0.2/validation/rules/ValuesOfCorrectType.js",
        "npm:graphql@14.0.2/jsutils/suggestionList.js",
        "npm:graphql@14.0.2/jsutils/orList.js",
        "npm:graphql@14.0.2/type/schema.js",
        "npm:graphql@14.0.2/type/directives.js",
        "npm:graphql@14.0.2/utilities/isValidJSValue.js",
        "npm:graphql@14.0.2/utilities/coerceValue.js",
        "npm:graphql@14.0.2/utilities/valueFromAST.js",
        "npm:graphql@14.0.2/utilities/schemaPrinter.js",
        "npm:graphql@14.0.2/utilities/lexicographicSortSchema.js",
        "npm:graphql@14.0.2/utilities/extendSchema.js",
        "npm:graphql@14.0.2/language/predicates.js",
        "npm:graphql@14.0.2/validation/validate.js",
        "npm:graphql@14.0.2/validation/specifiedRules.js",
        "npm:graphql@14.0.2/validation/rules/LoneSchemaDefinition.js",
        "npm:graphql@14.0.2/validation/rules/UniqueInputFieldNames.js",
        "npm:graphql@14.0.2/validation/rules/OverlappingFieldsCanBeMerged.js",
        "npm:graphql@14.0.2/validation/rules/VariablesInAllowedPosition.js",
        "npm:graphql@14.0.2/validation/rules/ProvidedRequiredArguments.js",
        "npm:graphql@14.0.2/validation/rules/UniqueArgumentNames.js",
        "npm:graphql@14.0.2/validation/rules/KnownArgumentNames.js",
        "npm:graphql@14.0.2/jsutils/quotedOrList.js",
        "npm:graphql@14.0.2/validation/rules/UniqueDirectivesPerLocation.js",
        "npm:graphql@14.0.2/validation/rules/KnownDirectives.js",
        "npm:graphql@14.0.2/validation/rules/NoUnusedVariables.js",
        "npm:graphql@14.0.2/validation/rules/NoUndefinedVariables.js",
        "npm:graphql@14.0.2/validation/rules/UniqueVariableNames.js",
        "npm:graphql@14.0.2/validation/rules/NoFragmentCycles.js",
        "npm:graphql@14.0.2/validation/rules/PossibleFragmentSpreads.js",
        "npm:graphql@14.0.2/validation/rules/NoUnusedFragments.js",
        "npm:graphql@14.0.2/validation/rules/KnownFragmentNames.js",
        "npm:graphql@14.0.2/validation/rules/UniqueFragmentNames.js",
        "npm:graphql@14.0.2/validation/rules/FieldsOnCorrectType.js",
        "npm:graphql@14.0.2/validation/rules/ScalarLeafs.js",
        "npm:graphql@14.0.2/validation/rules/VariablesAreInputTypes.js",
        "npm:graphql@14.0.2/validation/rules/FragmentsOnCompositeTypes.js",
        "npm:graphql@14.0.2/validation/rules/KnownTypeNames.js",
        "npm:graphql@14.0.2/validation/rules/SingleFieldSubscriptions.js",
        "npm:graphql@14.0.2/validation/rules/LoneAnonymousOperation.js",
        "npm:graphql@14.0.2/validation/rules/UniqueOperationNames.js",
        "npm:graphql@14.0.2/validation/rules/ExecutableDefinitions.js",
        "npm:graphql@14.0.2/type/validate.js",
        "npm:graphql@14.0.2/utilities/buildASTSchema.js",
        "npm:graphql@14.0.2/execution/values.js",
        "npm:graphql@14.0.2/language/parser.js",
        "npm:graphql@14.0.2/language/lexer.js",
        "npm:graphql@14.0.2/language/blockStringValue.js",
        "npm:graphql@14.0.2/error/index.js",
        "npm:graphql@14.0.2/error/formatError.js",
        "npm:graphql@14.0.2/error/locatedError.js",
        "npm:graphql@14.0.2/error/syntaxError.js",
        "npm:graphql@14.0.2/language/source.js",
        "npm:graphql@14.0.2/utilities/buildClientSchema.js",
        "npm:graphql@14.0.2/utilities/introspectionFromSchema.js",
        "npm:graphql@14.0.2/execution/execute.js",
        "npm:graphql@14.0.2/utilities/getOperationRootType.js",
        "npm:graphql@14.0.2/jsutils/promiseReduce.js",
        "npm:graphql@14.0.2/jsutils/isPromise.js",
        "npm:graphql@14.0.2/jsutils/promiseForObject.js",
        "npm:graphql@14.0.2/jsutils/memoize3.js",
        "npm:graphql@14.0.2/utilities/introspectionQuery.js",
        "npm:graphql@14.0.2/utilities/getOperationAST.js",
        "npm:graphql@14.0.2/validation/index.js",
        "npm:graphql@14.0.2/subscription/index.js",
        "npm:graphql@14.0.2/subscription/subscribe.js",
        "npm:graphql@14.0.2/subscription/mapAsyncIterator.js",
        "npm:graphql@14.0.2/execution/index.js",
        "npm:graphql@14.0.2/language/index.js",
        "npm:graphql@14.0.2/type/index.js",
        "npm:graphql@14.0.2/graphql.js",
        "npm:graphiql@0.11.11/dist/utility/elementPosition.js",
        "npm:graphiql@0.11.11/dist/utility/fillLeafs.js",
        "npm:graphiql@0.11.11/dist/utility/find.js",
        "npm:graphiql@0.11.11/dist/utility/debounce.js",
        "npm:graphiql@0.11.11/dist/utility/getSelectedOperationName.js",
        "npm:graphiql@0.11.11/dist/utility/getQueryFacts.js",
        "npm:graphiql@0.11.11/dist/utility/StorageAPI.js",
        "npm:graphiql@0.11.11/dist/utility/CodeMirrorSizer.js",
        "npm:graphiql@0.11.11/dist/components/QueryHistory.js",
        "npm:graphiql@0.11.11/dist/components/HistoryQuery.js",
        "npm:graphiql@0.11.11/dist/utility/QueryStore.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/TypeDoc.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/DefaultValue.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/TypeLink.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/MarkdownContent.js",
        "npm:markdown-it@8.4.2/index.js",
        "npm:markdown-it@8.4.2.json",
        "npm:markdown-it@8.4.2/lib/index.js",
        "npm:markdown-it@8.4.2/lib/presets/commonmark.js",
        "npm:markdown-it@8.4.2/lib/presets/zero.js",
        "npm:markdown-it@8.4.2/lib/presets/default.js",
        "npm:mdurl@1.0.1/index.js",
        "npm:mdurl@1.0.1.json",
        "npm:mdurl@1.0.1/parse.js",
        "npm:mdurl@1.0.1/format.js",
        "npm:mdurl@1.0.1/decode.js",
        "npm:mdurl@1.0.1/encode.js",
        "npm:linkify-it@2.0.3/index.js",
        "npm:linkify-it@2.0.3.json",
        "npm:linkify-it@2.0.3/lib/re.js",
        "npm:uc.micro@1.0.5/categories/P/regex.js",
        "npm:uc.micro@1.0.5.json",
        "npm:uc.micro@1.0.5/categories/Z/regex.js",
        "npm:uc.micro@1.0.5/categories/Cc/regex.js",
        "npm:uc.micro@1.0.5/properties/Any/regex.js",
        "npm:markdown-it@8.4.2/lib/parser_inline.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/state_inline.js",
        "npm:markdown-it@8.4.2/lib/common/utils.js",
        "npm:uc.micro@1.0.5/index.js",
        "npm:uc.micro@1.0.5/categories/Cf/regex.js",
        "npm:markdown-it@8.4.2/lib/common/entities.js",
        "npm:entities@1.1.2/maps/entities.json",
        "npm:entities@1.1.2.json",
        "npm:markdown-it@8.4.2/lib/token.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/text_collapse.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/balance_pairs.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/entity.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/html_inline.js",
        "npm:markdown-it@8.4.2/lib/common/html_re.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/autolink.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/image.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/link.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/emphasis.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/strikethrough.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/backticks.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/escape.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/newline.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/text.js",
        "npm:markdown-it@8.4.2/lib/ruler.js",
        "npm:markdown-it@8.4.2/lib/parser_block.js",
        "npm:markdown-it@8.4.2/lib/rules_block/state_block.js",
        "npm:markdown-it@8.4.2/lib/rules_block/paragraph.js",
        "npm:markdown-it@8.4.2/lib/rules_block/html_block.js",
        "npm:markdown-it@8.4.2/lib/common/html_blocks.js",
        "npm:markdown-it@8.4.2/lib/rules_block/lheading.js",
        "npm:markdown-it@8.4.2/lib/rules_block/heading.js",
        "npm:markdown-it@8.4.2/lib/rules_block/reference.js",
        "npm:markdown-it@8.4.2/lib/rules_block/list.js",
        "npm:markdown-it@8.4.2/lib/rules_block/hr.js",
        "npm:markdown-it@8.4.2/lib/rules_block/blockquote.js",
        "npm:markdown-it@8.4.2/lib/rules_block/fence.js",
        "npm:markdown-it@8.4.2/lib/rules_block/code.js",
        "npm:markdown-it@8.4.2/lib/rules_block/table.js",
        "npm:markdown-it@8.4.2/lib/parser_core.js",
        "npm:markdown-it@8.4.2/lib/rules_core/state_core.js",
        "npm:markdown-it@8.4.2/lib/rules_core/smartquotes.js",
        "npm:markdown-it@8.4.2/lib/rules_core/replacements.js",
        "npm:markdown-it@8.4.2/lib/rules_core/linkify.js",
        "npm:markdown-it@8.4.2/lib/rules_core/inline.js",
        "npm:markdown-it@8.4.2/lib/rules_core/block.js",
        "npm:markdown-it@8.4.2/lib/rules_core/normalize.js",
        "npm:markdown-it@8.4.2/lib/renderer.js",
        "npm:markdown-it@8.4.2/lib/helpers/index.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_title.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_destination.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_label.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/Argument.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SearchResults.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SearchBox.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SchemaDoc.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/FieldDoc.js",
        "npm:graphiql@0.11.11/dist/components/ResultViewer.js",
        "npm:codemirror-graphql@0.6.12/utils/info-addon.js",
        "npm:codemirror-graphql@0.6.12.json",
        "npm:codemirror@5.41.0/lib/codemirror.js",
        "npm:codemirror@5.41.0.json",
        "npm:codemirror-graphql@0.6.12/results/mode.js",
        "npm:graphql-language-service-parser@0.1.14/dist/index.js",
        "npm:graphql-language-service-parser@0.1.14.json",
        "npm:graphql-language-service-parser@0.1.14/dist/onlineParser.js",
        "npm:graphql-language-service-parser@0.1.14/dist/Rules.js",
        "npm:graphql-language-service-parser@0.1.14/dist/RuleHelpers.js",
        "npm:graphql-language-service-parser@0.1.14/dist/CharacterStream.js",
        "npm:codemirror@5.41.0/keymap/sublime.js",
        "npm:codemirror@5.41.0/addon/edit/matchbrackets.js",
        "npm:codemirror@5.41.0/addon/search/searchcursor.js",
        "npm:codemirror@5.41.0/addon/search/jump-to-line.js",
        "npm:codemirror@5.41.0/addon/dialog/dialog.js",
        "npm:codemirror@5.41.0/addon/search/search.js",
        "npm:codemirror@5.41.0/addon/fold/brace-fold.js",
        "npm:codemirror@5.41.0/addon/fold/foldgutter.js",
        "npm:codemirror@5.41.0/addon/fold/foldcode.js",
        "npm:graphiql@0.11.11/dist/components/VariableEditor.js",
        "npm:codemirror-graphql@0.6.12/variables/mode.js",
        "npm:codemirror-graphql@0.6.12/variables/lint.js",
        "npm:codemirror-graphql@0.6.12/utils/jsonParse.js",
        "npm:codemirror-graphql@0.6.12/variables/hint.js",
        "npm:codemirror-graphql@0.6.12/utils/hintList.js",
        "npm:codemirror-graphql@0.6.12/utils/forEachState.js",
        "npm:codemirror@5.41.0/addon/lint/lint.js",
        "npm:codemirror@5.41.0/addon/edit/closebrackets.js",
        "npm:codemirror@5.41.0/addon/hint/show-hint.js",
        "npm:graphiql@0.11.11/dist/utility/onHasCompletion.js",
        "npm:graphiql@0.11.11/dist/components/QueryEditor.js",
        "npm:codemirror-graphql@0.6.12/mode.js",
        "npm:codemirror-graphql@0.6.12/jump.js",
        "npm:codemirror-graphql@0.6.12/utils/jump-addon.js",
        "npm:codemirror-graphql@0.6.12/utils/SchemaReference.js",
        "npm:codemirror-graphql@0.6.12/utils/getTypeInfo.js",
        "npm:codemirror-graphql@0.6.12/info.js",
        "npm:codemirror-graphql@0.6.12/lint.js",
        "npm:graphql-language-service-interface@1.3.2/dist/index.js",
        "npm:graphql-language-service-interface@1.3.2.json",
        "npm:graphql-language-service-interface@1.3.2/dist/GraphQLLanguageService.js",
        "npm:graphql-language-service-utils@1.2.2/dist/index.js",
        "npm:graphql-language-service-utils@1.2.2.json",
        "npm:graphql-language-service-utils@1.2.2/dist/validateWithCustomRules.js",
        "npm:graphql-language-service-utils@1.2.2/dist/Range.js",
        "npm:graphql-language-service-utils@1.2.2/dist/getASTNodeAtPosition.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getDefinition.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getDiagnostics.js",
        "npm:graphql-language-service-parser@1.2.2/dist/index.js",
        "npm:graphql-language-service-parser@1.2.2.json",
        "npm:graphql-language-service-parser@1.2.2/dist/onlineParser.js",
        "npm:graphql-language-service-parser@1.2.2/dist/Rules.js",
        "npm:graphql-language-service-parser@1.2.2/dist/RuleHelpers.js",
        "npm:graphql-language-service-parser@1.2.2/dist/CharacterStream.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getHoverInformation.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getAutocompleteSuggestions.js",
        "npm:graphql-language-service-interface@1.3.2/dist/autocompleteUtils.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getOutline.js",
        "npm:codemirror-graphql@0.6.12/hint.js",
        "npm:codemirror@5.41.0/addon/comment/comment.js",
        "npm:graphiql@0.11.11/dist/utility/normalizeWhitespace.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarSelect.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarMenu.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarGroup.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarButton.js",
        "npm:graphiql@0.11.11/dist/components/ExecuteButton.js",
        "github:systemjs/plugin-css@0.1.37/css.js",
        "github:systemjs/plugin-css@0.1.37.json"
      ],
      "bundles/srsteecore_bundle.js": [
        "npm:systemjs-plugin-babel@0.0.25/plugin-babel.js",
        "npm:systemjs-plugin-babel@0.0.25.json",
        "npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js",
        "npm:react-treebeard@2.1.0/index.js",
        "npm:react-treebeard@2.1.0.json",
        "npm:react-treebeard@2.1.0/lib/index.js",
        "npm:react-treebeard@2.1.0/lib/themes/default.js",
        "npm:react-treebeard@2.1.0/lib/themes/animations.js",
        "npm:react-treebeard@2.1.0/lib/components/decorators.js",
        "npm:velocity-react@1.4.1/index.js",
        "npm:velocity-react@1.4.1.json",
        "npm:velocity-react@1.4.1/velocity-helpers.js",
        "npm:velocity-react@1.4.1/lib/velocity-animate-shim.js",
        "npm:velocity-animate@1.5.2/velocity.js",
        "npm:velocity-animate@1.5.2.json",
        "npm:lodash@4.17.11/isObject.js",
        "npm:lodash@4.17.11.json",
        "npm:velocity-react@1.4.1/velocity-transition-group.js",
        "npm:react-transition-group@2.5.0/Transition.js",
        "npm:react-transition-group@2.5.0.json",
        "npm:jspm-nodelibs-process@0.2.1/process.js",
        "npm:jspm-nodelibs-process@0.2.1.json",
        "npm:react-transition-group@2.5.0/utils/PropTypes.js",
        "npm:prop-types@15.6.2/index.js",
        "npm:prop-types@15.6.2.json",
        "npm:prop-types@15.6.2/factoryWithThrowingShims.js",
        "npm:prop-types@15.6.2/lib/ReactPropTypesSecret.js",
        "npm:prop-types@15.6.2/factoryWithTypeCheckers.js",
        "npm:prop-types@15.6.2/checkPropTypes.js",
        "npm:object-assign@4.1.1/index.js",
        "npm:object-assign@4.1.1.json",
        "npm:react-lifecycles-compat@3.0.4/react-lifecycles-compat.cjs.js",
        "npm:react-lifecycles-compat@3.0.4.json",
        "npm:react-dom@16.6.3/index.js",
        "npm:react-dom@16.6.3.json",
        "npm:react-dom@16.6.3/cjs/react-dom.development.js",
        "npm:scheduler@0.11.3/tracing.js",
        "npm:scheduler@0.11.3.json",
        "npm:scheduler@0.11.3/cjs/scheduler-tracing.development.js",
        "npm:scheduler@0.11.3/cjs/scheduler-tracing.production.min.js",
        "npm:scheduler@0.11.3/index.js",
        "npm:scheduler@0.11.3/cjs/scheduler.development.js",
        "npm:scheduler@0.11.3/cjs/scheduler.production.min.js",
        "npm:react@16.6.3/index.js",
        "npm:react@16.6.3.json",
        "npm:react@16.6.3/cjs/react.development.js",
        "npm:react@16.6.3/cjs/react.production.min.js",
        "npm:react-dom@16.6.3/cjs/react-dom.production.min.js",
        "npm:react-transition-group@2.5.0/TransitionGroup.js",
        "npm:react-transition-group@2.5.0/utils/ChildMapping.js",
        "npm:lodash@4.17.11/map.js",
        "npm:lodash@4.17.11/isArray.js",
        "npm:lodash@4.17.11/_baseMap.js",
        "npm:lodash@4.17.11/isArrayLike.js",
        "npm:lodash@4.17.11/isLength.js",
        "npm:lodash@4.17.11/isFunction.js",
        "npm:lodash@4.17.11/_baseGetTag.js",
        "npm:lodash@4.17.11/_objectToString.js",
        "npm:lodash@4.17.11/_getRawTag.js",
        "npm:lodash@4.17.11/_Symbol.js",
        "npm:lodash@4.17.11/_root.js",
        "npm:lodash@4.17.11/_freeGlobal.js",
        "npm:lodash@4.17.11/_baseEach.js",
        "npm:lodash@4.17.11/_createBaseEach.js",
        "npm:lodash@4.17.11/_baseForOwn.js",
        "npm:lodash@4.17.11/keys.js",
        "npm:lodash@4.17.11/_baseKeys.js",
        "npm:lodash@4.17.11/_nativeKeys.js",
        "npm:lodash@4.17.11/_overArg.js",
        "npm:lodash@4.17.11/_isPrototype.js",
        "npm:lodash@4.17.11/_arrayLikeKeys.js",
        "npm:lodash@4.17.11/isTypedArray.js",
        "npm:lodash@4.17.11/_nodeUtil.js",
        "npm:lodash@4.17.11/_baseUnary.js",
        "npm:lodash@4.17.11/_baseIsTypedArray.js",
        "npm:lodash@4.17.11/isObjectLike.js",
        "npm:lodash@4.17.11/_isIndex.js",
        "npm:lodash@4.17.11/isBuffer.js",
        "npm:lodash@4.17.11/stubFalse.js",
        "npm:lodash@4.17.11/isArguments.js",
        "npm:lodash@4.17.11/_baseIsArguments.js",
        "npm:lodash@4.17.11/_baseTimes.js",
        "npm:lodash@4.17.11/_baseFor.js",
        "npm:lodash@4.17.11/_createBaseFor.js",
        "npm:lodash@4.17.11/_baseIteratee.js",
        "npm:lodash@4.17.11/property.js",
        "npm:lodash@4.17.11/_toKey.js",
        "npm:lodash@4.17.11/isSymbol.js",
        "npm:lodash@4.17.11/_isKey.js",
        "npm:lodash@4.17.11/_basePropertyDeep.js",
        "npm:lodash@4.17.11/_baseGet.js",
        "npm:lodash@4.17.11/_castPath.js",
        "npm:lodash@4.17.11/toString.js",
        "npm:lodash@4.17.11/_baseToString.js",
        "npm:lodash@4.17.11/_arrayMap.js",
        "npm:lodash@4.17.11/_stringToPath.js",
        "npm:lodash@4.17.11/_memoizeCapped.js",
        "npm:lodash@4.17.11/memoize.js",
        "npm:lodash@4.17.11/_MapCache.js",
        "npm:lodash@4.17.11/_mapCacheSet.js",
        "npm:lodash@4.17.11/_getMapData.js",
        "npm:lodash@4.17.11/_isKeyable.js",
        "npm:lodash@4.17.11/_mapCacheHas.js",
        "npm:lodash@4.17.11/_mapCacheGet.js",
        "npm:lodash@4.17.11/_mapCacheDelete.js",
        "npm:lodash@4.17.11/_mapCacheClear.js",
        "npm:lodash@4.17.11/_Map.js",
        "npm:lodash@4.17.11/_getNative.js",
        "npm:lodash@4.17.11/_getValue.js",
        "npm:lodash@4.17.11/_baseIsNative.js",
        "npm:lodash@4.17.11/_toSource.js",
        "npm:lodash@4.17.11/_isMasked.js",
        "npm:lodash@4.17.11/_coreJsData.js",
        "npm:lodash@4.17.11/_ListCache.js",
        "npm:lodash@4.17.11/_listCacheSet.js",
        "npm:lodash@4.17.11/_assocIndexOf.js",
        "npm:lodash@4.17.11/eq.js",
        "npm:lodash@4.17.11/_listCacheHas.js",
        "npm:lodash@4.17.11/_listCacheGet.js",
        "npm:lodash@4.17.11/_listCacheDelete.js",
        "npm:lodash@4.17.11/_listCacheClear.js",
        "npm:lodash@4.17.11/_Hash.js",
        "npm:lodash@4.17.11/_hashSet.js",
        "npm:lodash@4.17.11/_nativeCreate.js",
        "npm:lodash@4.17.11/_hashHas.js",
        "npm:lodash@4.17.11/_hashGet.js",
        "npm:lodash@4.17.11/_hashDelete.js",
        "npm:lodash@4.17.11/_hashClear.js",
        "npm:lodash@4.17.11/_baseProperty.js",
        "npm:lodash@4.17.11/identity.js",
        "npm:lodash@4.17.11/_baseMatchesProperty.js",
        "npm:lodash@4.17.11/_matchesStrictComparable.js",
        "npm:lodash@4.17.11/_isStrictComparable.js",
        "npm:lodash@4.17.11/hasIn.js",
        "npm:lodash@4.17.11/_hasPath.js",
        "npm:lodash@4.17.11/_baseHasIn.js",
        "npm:lodash@4.17.11/get.js",
        "npm:lodash@4.17.11/_baseIsEqual.js",
        "npm:lodash@4.17.11/_baseIsEqualDeep.js",
        "npm:lodash@4.17.11/_getTag.js",
        "npm:lodash@4.17.11/_WeakMap.js",
        "npm:lodash@4.17.11/_Set.js",
        "npm:lodash@4.17.11/_Promise.js",
        "npm:lodash@4.17.11/_DataView.js",
        "npm:lodash@4.17.11/_equalObjects.js",
        "npm:lodash@4.17.11/_getAllKeys.js",
        "npm:lodash@4.17.11/_getSymbols.js",
        "npm:lodash@4.17.11/stubArray.js",
        "npm:lodash@4.17.11/_arrayFilter.js",
        "npm:lodash@4.17.11/_baseGetAllKeys.js",
        "npm:lodash@4.17.11/_arrayPush.js",
        "npm:lodash@4.17.11/_equalByTag.js",
        "npm:lodash@4.17.11/_setToArray.js",
        "npm:lodash@4.17.11/_mapToArray.js",
        "npm:lodash@4.17.11/_equalArrays.js",
        "npm:lodash@4.17.11/_cacheHas.js",
        "npm:lodash@4.17.11/_arraySome.js",
        "npm:lodash@4.17.11/_SetCache.js",
        "npm:lodash@4.17.11/_setCacheHas.js",
        "npm:lodash@4.17.11/_setCacheAdd.js",
        "npm:lodash@4.17.11/_Uint8Array.js",
        "npm:lodash@4.17.11/_Stack.js",
        "npm:lodash@4.17.11/_stackSet.js",
        "npm:lodash@4.17.11/_stackHas.js",
        "npm:lodash@4.17.11/_stackGet.js",
        "npm:lodash@4.17.11/_stackDelete.js",
        "npm:lodash@4.17.11/_stackClear.js",
        "npm:lodash@4.17.11/_baseMatches.js",
        "npm:lodash@4.17.11/_getMatchData.js",
        "npm:lodash@4.17.11/_baseIsMatch.js",
        "npm:lodash@4.17.11/omit.js",
        "npm:lodash@4.17.11/_getAllKeysIn.js",
        "npm:lodash@4.17.11/keysIn.js",
        "npm:lodash@4.17.11/_baseKeysIn.js",
        "npm:lodash@4.17.11/_nativeKeysIn.js",
        "npm:lodash@4.17.11/_getSymbolsIn.js",
        "npm:lodash@4.17.11/_getPrototype.js",
        "npm:lodash@4.17.11/_flatRest.js",
        "npm:lodash@4.17.11/_setToString.js",
        "npm:lodash@4.17.11/_shortOut.js",
        "npm:lodash@4.17.11/_baseSetToString.js",
        "npm:lodash@4.17.11/_defineProperty.js",
        "npm:lodash@4.17.11/constant.js",
        "npm:lodash@4.17.11/_overRest.js",
        "npm:lodash@4.17.11/_apply.js",
        "npm:lodash@4.17.11/flatten.js",
        "npm:lodash@4.17.11/_baseFlatten.js",
        "npm:lodash@4.17.11/_isFlattenable.js",
        "npm:lodash@4.17.11/_customOmitClone.js",
        "npm:lodash@4.17.11/isPlainObject.js",
        "npm:lodash@4.17.11/_copyObject.js",
        "npm:lodash@4.17.11/_baseAssignValue.js",
        "npm:lodash@4.17.11/_assignValue.js",
        "npm:lodash@4.17.11/_baseUnset.js",
        "npm:lodash@4.17.11/_parent.js",
        "npm:lodash@4.17.11/_baseSlice.js",
        "npm:lodash@4.17.11/last.js",
        "npm:lodash@4.17.11/_baseClone.js",
        "npm:lodash@4.17.11/isSet.js",
        "npm:lodash@4.17.11/_baseIsSet.js",
        "npm:lodash@4.17.11/isMap.js",
        "npm:lodash@4.17.11/_baseIsMap.js",
        "npm:lodash@4.17.11/_initCloneObject.js",
        "npm:lodash@4.17.11/_baseCreate.js",
        "npm:lodash@4.17.11/_initCloneByTag.js",
        "npm:lodash@4.17.11/_cloneTypedArray.js",
        "npm:lodash@4.17.11/_cloneArrayBuffer.js",
        "npm:lodash@4.17.11/_cloneSymbol.js",
        "npm:lodash@4.17.11/_cloneRegExp.js",
        "npm:lodash@4.17.11/_cloneDataView.js",
        "npm:lodash@4.17.11/_initCloneArray.js",
        "npm:lodash@4.17.11/_copySymbolsIn.js",
        "npm:lodash@4.17.11/_copySymbols.js",
        "npm:lodash@4.17.11/_copyArray.js",
        "npm:lodash@4.17.11/_cloneBuffer.js",
        "npm:lodash@4.17.11/_baseAssignIn.js",
        "npm:lodash@4.17.11/_baseAssign.js",
        "npm:lodash@4.17.11/_arrayEach.js",
        "npm:lodash@4.17.11/isEqual.js",
        "npm:lodash@4.17.11/forEach.js",
        "npm:lodash@4.17.11/_castFunction.js",
        "npm:lodash@4.17.11/extend.js",
        "npm:lodash@4.17.11/assignIn.js",
        "npm:lodash@4.17.11/_createAssigner.js",
        "npm:lodash@4.17.11/_isIterateeCall.js",
        "npm:lodash@4.17.11/_baseRest.js",
        "npm:lodash@4.17.11/each.js",
        "npm:velocity-react@1.4.1/velocity-component.js",
        "npm:radium@0.19.6/lib/index.js",
        "npm:radium@0.19.6.json",
        "npm:radium@0.19.6/lib/resolve-styles.js",
        "npm:exenv@1.2.2/index.js",
        "npm:exenv@1.2.2.json",
        "npm:radium@0.19.6/lib/plugins/index.js",
        "npm:radium@0.19.6/lib/plugins/visited-plugin.js",
        "npm:radium@0.19.6/lib/plugins/resolve-media-queries-plugin.js",
        "npm:radium@0.19.6/lib/plugins/resolve-interaction-styles-plugin.js",
        "npm:radium@0.19.6/lib/plugins/mouse-up-listener.js",
        "npm:radium@0.19.6/lib/plugins/remove-nested-styles-plugin.js",
        "npm:radium@0.19.6/lib/plugins/prefix-plugin.js",
        "npm:radium@0.19.6/lib/prefixer.js",
        "npm:inline-style-prefixer@2.0.5/lib/Prefixer.js",
        "npm:inline-style-prefixer@2.0.5.json",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flexboxOld.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flexboxIE.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/transition.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/unprefixProperty.js",
        "npm:hyphenate-style-name@1.0.2/index.js",
        "npm:hyphenate-style-name@1.0.2.json",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/gradient.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/sizing.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/flex.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/grabCursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/zoomCursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/calc.js",
        "npm:inline-style-prefixer@2.0.5/lib/plugins/position.js",
        "npm:inline-style-prefixer@2.0.5/lib/prefixProps.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/sortPrefixedStyle.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/isPrefixedProperty.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/capitalizeString.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getPrefixedKeyframes.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/getBrowserInformation.js",
        "npm:bowser@1.9.4/src/bowser.js",
        "npm:bowser@1.9.4.json",
        "npm:inline-style-prefixer@2.0.5/lib/static/prefixAll.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flexboxOld.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flexboxIE.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/transition.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/prefixProps.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/isPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/gradient.js",
        "npm:inline-style-prefixer@2.0.5/lib/utils/joinPrefixedValue.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/sizing.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/flex.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/cursor.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/calc.js",
        "npm:inline-style-prefixer@2.0.5/lib/static/plugins/position.js",
        "npm:radium@0.19.6/lib/plugins/merge-style-array-plugin.js",
        "npm:radium@0.19.6/lib/plugins/keyframes-plugin.js",
        "npm:radium@0.19.6/lib/plugins/check-props-plugin.js",
        "npm:radium@0.19.6/lib/merge-styles.js",
        "npm:radium@0.19.6/lib/hash.js",
        "npm:radium@0.19.6/lib/get-state-key.js",
        "npm:radium@0.19.6/lib/get-state.js",
        "npm:radium@0.19.6/lib/css-rule-set-to-string.js",
        "npm:radium@0.19.6/lib/map-object.js",
        "npm:radium@0.19.6/lib/camel-case-props-to-dash-case.js",
        "npm:radium@0.19.6/lib/append-px-if-needed.js",
        "npm:radium@0.19.6/lib/append-important-to-each-value.js",
        "npm:radium@0.19.6/lib/keyframes.js",
        "npm:radium@0.19.6/lib/components/style-root.js",
        "npm:radium@0.19.6/lib/components/style-sheet.js",
        "npm:radium@0.19.6/lib/style-keeper.js",
        "npm:radium@0.19.6/lib/enhancer.js",
        "npm:radium@0.19.6/lib/components/style.js",
        "npm:babel-runtime@6.26.0/helpers/inherits.js",
        "npm:babel-runtime@6.26.0.json",
        "npm:babel-runtime@6.26.0/helpers/typeof.js",
        "npm:babel-runtime@6.26.0/core-js/symbol.js",
        "npm:core-js@2.6.1/library/fn/symbol/index.js",
        "npm:core-js@2.6.1.json",
        "npm:core-js@2.6.1/library/modules/_core.js",
        "npm:core-js@2.6.1/library/modules/es7.symbol.observable.js",
        "npm:core-js@2.6.1/library/modules/_wks-define.js",
        "npm:core-js@2.6.1/library/modules/_object-dp.js",
        "npm:core-js@2.6.1/library/modules/_descriptors.js",
        "npm:core-js@2.6.1/library/modules/_fails.js",
        "npm:core-js@2.6.1/library/modules/_to-primitive.js",
        "npm:core-js@2.6.1/library/modules/_is-object.js",
        "npm:core-js@2.6.1/library/modules/_ie8-dom-define.js",
        "npm:core-js@2.6.1/library/modules/_dom-create.js",
        "npm:core-js@2.6.1/library/modules/_global.js",
        "npm:core-js@2.6.1/library/modules/_an-object.js",
        "npm:core-js@2.6.1/library/modules/_wks-ext.js",
        "npm:core-js@2.6.1/library/modules/_wks.js",
        "npm:core-js@2.6.1/library/modules/_uid.js",
        "npm:core-js@2.6.1/library/modules/_shared.js",
        "npm:core-js@2.6.1/library/modules/_library.js",
        "npm:core-js@2.6.1/library/modules/es7.symbol.async-iterator.js",
        "npm:core-js@2.6.1/library/modules/es6.object.to-string.js",
        "npm:core-js@2.6.1/library/modules/es6.symbol.js",
        "npm:core-js@2.6.1/library/modules/_hide.js",
        "npm:core-js@2.6.1/library/modules/_property-desc.js",
        "npm:core-js@2.6.1/library/modules/_object-gops.js",
        "npm:core-js@2.6.1/library/modules/_object-pie.js",
        "npm:core-js@2.6.1/library/modules/_object-gopn.js",
        "npm:core-js@2.6.1/library/modules/_enum-bug-keys.js",
        "npm:core-js@2.6.1/library/modules/_object-keys-internal.js",
        "npm:core-js@2.6.1/library/modules/_shared-key.js",
        "npm:core-js@2.6.1/library/modules/_array-includes.js",
        "npm:core-js@2.6.1/library/modules/_to-absolute-index.js",
        "npm:core-js@2.6.1/library/modules/_to-integer.js",
        "npm:core-js@2.6.1/library/modules/_to-length.js",
        "npm:core-js@2.6.1/library/modules/_to-iobject.js",
        "npm:core-js@2.6.1/library/modules/_defined.js",
        "npm:core-js@2.6.1/library/modules/_iobject.js",
        "npm:core-js@2.6.1/library/modules/_cof.js",
        "npm:core-js@2.6.1/library/modules/_has.js",
        "npm:core-js@2.6.1/library/modules/_object-keys.js",
        "npm:core-js@2.6.1/library/modules/_object-gopd.js",
        "npm:core-js@2.6.1/library/modules/_object-gopn-ext.js",
        "npm:core-js@2.6.1/library/modules/_object-create.js",
        "npm:core-js@2.6.1/library/modules/_html.js",
        "npm:core-js@2.6.1/library/modules/_object-dps.js",
        "npm:core-js@2.6.1/library/modules/_is-array.js",
        "npm:core-js@2.6.1/library/modules/_enum-keys.js",
        "npm:core-js@2.6.1/library/modules/_set-to-string-tag.js",
        "npm:core-js@2.6.1/library/modules/_meta.js",
        "npm:core-js@2.6.1/library/modules/_redefine.js",
        "npm:core-js@2.6.1/library/modules/_export.js",
        "npm:core-js@2.6.1/library/modules/_ctx.js",
        "npm:core-js@2.6.1/library/modules/_a-function.js",
        "npm:babel-runtime@6.26.0/core-js/symbol/iterator.js",
        "npm:core-js@2.6.1/library/fn/symbol/iterator.js",
        "npm:core-js@2.6.1/library/modules/web.dom.iterable.js",
        "npm:core-js@2.6.1/library/modules/_iterators.js",
        "npm:core-js@2.6.1/library/modules/es6.array.iterator.js",
        "npm:core-js@2.6.1/library/modules/_iter-define.js",
        "npm:core-js@2.6.1/library/modules/_object-gpo.js",
        "npm:core-js@2.6.1/library/modules/_to-object.js",
        "npm:core-js@2.6.1/library/modules/_iter-create.js",
        "npm:core-js@2.6.1/library/modules/_iter-step.js",
        "npm:core-js@2.6.1/library/modules/_add-to-unscopables.js",
        "npm:core-js@2.6.1/library/modules/es6.string.iterator.js",
        "npm:core-js@2.6.1/library/modules/_string-at.js",
        "npm:babel-runtime@6.26.0/core-js/object/create.js",
        "npm:core-js@2.6.1/library/fn/object/create.js",
        "npm:core-js@2.6.1/library/modules/es6.object.create.js",
        "npm:babel-runtime@6.26.0/core-js/object/set-prototype-of.js",
        "npm:core-js@2.6.1/library/fn/object/set-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/es6.object.set-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/_set-proto.js",
        "npm:babel-runtime@6.26.0/helpers/possibleConstructorReturn.js",
        "npm:babel-runtime@6.26.0/helpers/createClass.js",
        "npm:babel-runtime@6.26.0/core-js/object/define-property.js",
        "npm:core-js@2.6.1/library/fn/object/define-property.js",
        "npm:core-js@2.6.1/library/modules/es6.object.define-property.js",
        "npm:babel-runtime@6.26.0/helpers/classCallCheck.js",
        "npm:babel-runtime@6.26.0/core-js/object/get-prototype-of.js",
        "npm:core-js@2.6.1/library/fn/object/get-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/es6.object.get-prototype-of.js",
        "npm:core-js@2.6.1/library/modules/_object-sap.js",
        "npm:react-treebeard@2.1.0/lib/components/treebeard.js",
        "npm:react-treebeard@2.1.0/lib/components/node.js",
        "npm:react-treebeard@2.1.0/lib/components/header.js",
        "npm:deep-equal@1.0.1/index.js",
        "npm:deep-equal@1.0.1.json",
        "npm:deep-equal@1.0.1/lib/is_arguments.js",
        "npm:deep-equal@1.0.1/lib/keys.js",
        "npm:shallowequal@0.2.2/modules/index.js",
        "npm:shallowequal@0.2.2.json",
        "npm:lodash.keys@3.1.2/index.js",
        "npm:lodash.keys@3.1.2.json",
        "npm:lodash.isarray@3.0.4/index.js",
        "npm:lodash.isarray@3.0.4.json",
        "npm:lodash.isarguments@3.1.0/index.js",
        "npm:lodash.isarguments@3.1.0.json",
        "npm:lodash._getnative@3.9.1/index.js",
        "npm:lodash._getnative@3.9.1.json",
        "npm:babel-runtime@6.26.0/core-js/object/keys.js",
        "npm:core-js@2.6.1/library/fn/object/keys.js",
        "npm:core-js@2.6.1/library/modules/es6.object.keys.js",
        "npm:babel-runtime@6.26.0/core-js/object/assign.js",
        "npm:core-js@2.6.1/library/fn/object/assign.js",
        "npm:core-js@2.6.1/library/modules/es6.object.assign.js",
        "npm:core-js@2.6.1/library/modules/_object-assign.js",
        "npm:babel-runtime@6.26.0/helpers/objectWithoutProperties.js",
        "npm:babel-runtime@6.26.0/helpers/extends.js",
        "npm:react-table@6.8.6/lib/index.js",
        "npm:react-table@6.8.6.json",
        "npm:react-table@6.8.6/lib/propTypes.js",
        "npm:react-table@6.8.6/lib/defaultProps.js",
        "npm:react-table@6.8.6/lib/pagination.js",
        "npm:classnames@2.2.6/index.js",
        "npm:classnames@2.2.6.json",
        "npm:react-table@6.8.6/lib/utils.js",
        "npm:react-table@6.8.6/lib/methods.js",
        "npm:react-table@6.8.6/lib/lifecycle.js",
        "npm:react-select@1.3.0/lib/index.js",
        "npm:react-select@1.3.0.json",
        "npm:react-select@1.3.0/lib/utils/defaultFilterOptions.js",
        "npm:react-select@1.3.0/lib/utils/trim.js",
        "npm:react-select@1.3.0/lib/utils/stripDiacritics.js",
        "npm:react-select@1.3.0/lib/utils/defaultClearRenderer.js",
        "npm:react-select@1.3.0/lib/utils/defaultArrowRenderer.js",
        "npm:react-select@1.3.0/lib/utils/defaultMenuRenderer.js",
        "npm:react-select@1.3.0/lib/Option.js",
        "npm:react-select@1.3.0/lib/utils/blockEvent.js",
        "npm:react-select@1.3.0/lib/Value.js",
        "npm:react-select@1.3.0/lib/Creatable.js",
        "npm:react-select@1.3.0/lib/Select.js",
        "npm:react-input-autosize@2.2.1/lib/AutosizeInput.js",
        "npm:react-input-autosize@2.2.1.json",
        "npm:react-select@1.3.0/lib/AsyncCreatable.js",
        "npm:react-select@1.3.0/lib/Async.js",
        "npm:react-router@3.2.1/lib/index.js",
        "npm:react-router@3.2.1.json",
        "npm:react-router@3.2.1/lib/createMemoryHistory.js",
        "npm:history@3.3.0/lib/createMemoryHistory.js",
        "npm:history@3.3.0.json",
        "npm:history@3.3.0/lib/Actions.js",
        "npm:history@3.3.0/lib/createHistory.js",
        "npm:history@3.3.0/lib/LocationUtils.js",
        "npm:history@3.3.0/lib/PathUtils.js",
        "npm:warning@3.0.0/browser.js",
        "npm:warning@3.0.0.json",
        "npm:invariant@2.2.4/browser.js",
        "npm:invariant@2.2.4.json",
        "npm:history@3.3.0/lib/runTransitionHook.js",
        "npm:history@3.3.0/lib/AsyncUtils.js",
        "npm:history@3.3.0/lib/useBasename.js",
        "npm:history@3.3.0/lib/useQueries.js",
        "npm:query-string@4.3.4/index.js",
        "npm:query-string@4.3.4.json",
        "npm:strict-uri-encode@1.1.0/index.js",
        "npm:strict-uri-encode@1.1.0.json",
        "npm:react-router@3.2.1/lib/hashHistory.js",
        "npm:react-router@3.2.1/lib/createRouterHistory.js",
        "npm:react-router@3.2.1/lib/useRouterHistory.js",
        "npm:history@3.3.0/lib/createHashHistory.js",
        "npm:history@3.3.0/lib/HashProtocol.js",
        "npm:history@3.3.0/lib/DOMStateStorage.js",
        "npm:history@3.3.0/lib/DOMUtils.js",
        "npm:history@3.3.0/lib/BrowserProtocol.js",
        "npm:history@3.3.0/lib/ExecutionEnvironment.js",
        "npm:react-router@3.2.1/lib/browserHistory.js",
        "npm:history@3.3.0/lib/createBrowserHistory.js",
        "npm:history@3.3.0/lib/RefreshProtocol.js",
        "npm:react-router@3.2.1/lib/applyRouterMiddleware.js",
        "npm:react-router@3.2.1/lib/routerWarning.js",
        "npm:react-router@3.2.1/lib/RouterContext.js",
        "npm:react-router@3.2.1/lib/RouteUtils.js",
        "npm:react-router@3.2.1/lib/ContextUtils.js",
        "npm:react-router@3.2.1/lib/getRouteParams.js",
        "npm:react-router@3.2.1/lib/PatternUtils.js",
        "npm:create-react-class@15.6.3/index.js",
        "npm:create-react-class@15.6.3.json",
        "npm:create-react-class@15.6.3/factory.js",
        "npm:fbjs@0.8.17/lib/warning.js",
        "npm:fbjs@0.8.17.json",
        "npm:fbjs@0.8.17/lib/emptyFunction.js",
        "npm:fbjs@0.8.17/lib/invariant.js",
        "npm:fbjs@0.8.17/lib/emptyObject.js",
        "npm:react-router@3.2.1/lib/match.js",
        "npm:react-router@3.2.1/lib/RouterUtils.js",
        "npm:react-router@3.2.1/lib/createTransitionManager.js",
        "npm:react-router@3.2.1/lib/matchRoutes.js",
        "npm:react-router@3.2.1/lib/PromiseUtils.js",
        "npm:react-router@3.2.1/lib/AsyncUtils.js",
        "npm:react-router@3.2.1/lib/getComponents.js",
        "npm:react-router@3.2.1/lib/isActive.js",
        "npm:react-router@3.2.1/lib/TransitionUtils.js",
        "npm:react-router@3.2.1/lib/computeChangedRoutes.js",
        "npm:react-router@3.2.1/lib/Route.js",
        "npm:react-router@3.2.1/lib/InternalPropTypes.js",
        "npm:react-router@3.2.1/lib/Redirect.js",
        "npm:react-router@3.2.1/lib/IndexRoute.js",
        "npm:react-router@3.2.1/lib/IndexRedirect.js",
        "npm:react-router@3.2.1/lib/withRouter.js",
        "npm:react-router@3.2.1/lib/PropTypes.js",
        "npm:hoist-non-react-statics@2.5.5/dist/hoist-non-react-statics.cjs.js",
        "npm:hoist-non-react-statics@2.5.5.json",
        "npm:react-router@3.2.1/lib/IndexLink.js",
        "npm:react-router@3.2.1/lib/Link.js",
        "npm:react-router@3.2.1/lib/Router.js",
        "npm:react-router-dom@4.3.1/index.js",
        "npm:react-router-dom@4.3.1.json",
        "npm:react-router-dom@4.3.1/withRouter.js",
        "npm:react-router@4.3.1/withRouter.js",
        "npm:react-router@4.3.1.json",
        "npm:react-router@4.3.1/Route.js",
        "npm:react-router@4.3.1/matchPath.js",
        "npm:path-to-regexp@1.7.0/index.js",
        "npm:path-to-regexp@1.7.0.json",
        "npm:isarray@0.0.1/index.js",
        "npm:isarray@0.0.1.json",
        "npm:warning@4.0.2/warning.js",
        "npm:warning@4.0.2.json",
        "npm:react-router-dom@4.3.1/matchPath.js",
        "npm:react-router-dom@4.3.1/generatePath.js",
        "npm:react-router@4.3.1/generatePath.js",
        "npm:react-router-dom@4.3.1/Switch.js",
        "npm:react-router@4.3.1/Switch.js",
        "npm:react-router-dom@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/StaticRouter.js",
        "npm:react-router@4.3.1/Router.js",
        "npm:history@4.7.2/index.js",
        "npm:history@4.7.2.json",
        "npm:history@4.7.2/createMemoryHistory.js",
        "npm:history@4.7.2/createTransitionManager.js",
        "npm:history@4.7.2/LocationUtils.js",
        "npm:history@4.7.2/PathUtils.js",
        "npm:value-equal@0.4.0/cjs/index.js",
        "npm:value-equal@0.4.0.json",
        "npm:resolve-pathname@2.2.0/cjs/index.js",
        "npm:resolve-pathname@2.2.0.json",
        "npm:history@4.7.2/createHashHistory.js",
        "npm:history@4.7.2/DOMUtils.js",
        "npm:history@4.7.2/createBrowserHistory.js",
        "npm:react-router-dom@4.3.1/Router.js",
        "npm:react-router-dom@4.3.1/Route.js",
        "npm:react-router-dom@4.3.1/Redirect.js",
        "npm:react-router@4.3.1/Redirect.js",
        "npm:react-router-dom@4.3.1/Prompt.js",
        "npm:react-router@4.3.1/Prompt.js",
        "npm:react-router-dom@4.3.1/NavLink.js",
        "npm:react-router-dom@4.3.1/Link.js",
        "npm:react-router-dom@4.3.1/MemoryRouter.js",
        "npm:react-router@4.3.1/MemoryRouter.js",
        "npm:react-router-dom@4.3.1/HashRouter.js",
        "npm:react-router-dom@4.3.1/BrowserRouter.js",
        "npm:react-redux@5.1.1/lib/index.js",
        "npm:react-redux@5.1.1.json",
        "npm:react-redux@5.1.1/lib/connect/connect.js",
        "npm:react-redux@5.1.1/lib/connect/selectorFactory.js",
        "npm:react-redux@5.1.1/lib/connect/verifySubselectors.js",
        "npm:react-redux@5.1.1/lib/utils/warning.js",
        "npm:@babel/runtime@7.1.5/helpers/interopRequireDefault.js",
        "npm:@babel/runtime@7.1.5.json",
        "npm:@babel/runtime@7.1.5/helpers/objectWithoutPropertiesLoose.js",
        "npm:react-redux@5.1.1/lib/connect/mergeProps.js",
        "npm:react-redux@5.1.1/lib/utils/verifyPlainObject.js",
        "npm:react-redux@5.1.1/lib/utils/isPlainObject.js",
        "npm:@babel/runtime@7.1.5/helpers/extends.js",
        "npm:react-redux@5.1.1/lib/connect/mapStateToProps.js",
        "npm:react-redux@5.1.1/lib/connect/wrapMapToProps.js",
        "npm:react-redux@5.1.1/lib/connect/mapDispatchToProps.js",
        "npm:redux@4.0.1/lib/redux.js",
        "npm:redux@4.0.1.json",
        "npm:symbol-observable@1.2.0/lib/index.js",
        "npm:symbol-observable@1.2.0.json",
        "npm:symbol-observable@1.2.0/lib/ponyfill.js",
        "npm:react-redux@5.1.1/lib/utils/shallowEqual.js",
        "npm:react-redux@5.1.1/lib/components/connectAdvanced.js",
        "npm:react-redux@5.1.1/lib/utils/PropTypes.js",
        "npm:react-redux@5.1.1/lib/utils/Subscription.js",
        "npm:react-is@16.7.0/index.js",
        "npm:react-is@16.7.0.json",
        "npm:react-is@16.7.0/cjs/react-is.development.js",
        "npm:react-is@16.7.0/cjs/react-is.production.min.js",
        "npm:hoist-non-react-statics@3.2.1/dist/hoist-non-react-statics.cjs.js",
        "npm:hoist-non-react-statics@3.2.1.json",
        "npm:@babel/runtime@7.1.5/helpers/assertThisInitialized.js",
        "npm:@babel/runtime@7.1.5/helpers/inheritsLoose.js",
        "npm:react-redux@5.1.1/lib/components/Provider.js",
        "npm:@babel/runtime@7.1.5/helpers/interopRequireWildcard.js",
        "npm:react-monaco-editor@0.14.1/lib/index.js",
        "npm:react-monaco-editor@0.14.1.json",
        "npm:react-monaco-editor@0.14.1/lib/diff.js",
        "npm:react-monaco-editor@0.14.1/lib/editor.js",
        "npm:react-materialize@2.4.8/lib/index.js",
        "npm:react-materialize@2.4.8.json",
        "npm:react-materialize@2.4.8/lib/Toast.js",
        "npm:react-materialize@2.4.8/lib/Button.js",
        "npm:react-materialize@2.4.8/lib/idgen.js",
        "npm:react-materialize@2.4.8/lib/Icon.js",
        "npm:react-materialize@2.4.8/lib/constants.js",
        "npm:react-materialize@2.4.8/lib/Tag.js",
        "npm:react-materialize@2.4.8/lib/Chip.js",
        "npm:react-materialize@2.4.8/lib/Tabs.js",
        "npm:react-materialize@2.4.8/lib/Col.js",
        "npm:react-materialize@2.4.8/lib/Row.js",
        "npm:react-materialize@2.4.8/lib/Table.js",
        "npm:react-materialize@2.4.8/lib/Tab.js",
        "npm:react-materialize@2.4.8/lib/Slider.js",
        "npm:react-materialize@2.4.8/lib/Slide.js",
        "npm:react-materialize@2.4.8/lib/SideNavItem.js",
        "npm:react-materialize@2.4.8/lib/UserView.js",
        "npm:react-materialize@2.4.8/lib/SideNav.js",
        "npm:react-materialize@2.4.8/lib/Section.js",
        "npm:react-materialize@2.4.8/lib/SearchForm.js",
        "npm:react-materialize@2.4.8/lib/ProgressBar.js",
        "npm:react-materialize@2.4.8/lib/Preloader.js",
        "npm:react-materialize@2.4.8/lib/Spinner.js",
        "npm:react-materialize@2.4.8/lib/Parallax.js",
        "npm:react-materialize@2.4.8/lib/PaginationButton.js",
        "npm:react-materialize@2.4.8/lib/Pagination.js",
        "npm:react-materialize@2.4.8/lib/Navbar.js",
        "npm:react-materialize@2.4.8/lib/NavItem.js",
        "npm:react-materialize@2.4.8/lib/Modal.js",
        "npm:react-materialize@2.4.8/lib/MenuItem.js",
        "npm:react-materialize@2.4.8/lib/MediaBox.js",
        "npm:react-materialize@2.4.8/lib/Input.js",
        "npm:react-materialize@2.4.8/lib/Footer.js",
        "npm:react-materialize@2.4.8/lib/Dropdown.js",
        "npm:react-materialize@2.4.8/lib/Divider.js",
        "npm:react-materialize@2.4.8/lib/Container.js",
        "npm:react-materialize@2.4.8/lib/CollectionItem.js",
        "npm:react-materialize@2.4.8/lib/Collection.js",
        "npm:react-materialize@2.4.8/lib/CollapsibleItem.js",
        "npm:react-materialize@2.4.8/lib/Collapsible.js",
        "npm:react-materialize@2.4.8/lib/CardTitle.js",
        "npm:react-materialize@2.4.8/lib/CardPanel.js",
        "npm:react-materialize@2.4.8/lib/Card.js",
        "npm:react-materialize@2.4.8/lib/Carousel.js",
        "npm:react-materialize@2.4.8/lib/Breadcrumb.js",
        "npm:react-materialize@2.4.8/lib/Badge.js",
        "npm:react-materialize@2.4.8/lib/Autocomplete.js",
        "npm:react-icon-base@2.1.0/lib/index.js",
        "npm:react-icon-base@2.1.0.json",
        "npm:react-grid-layout@0.16.6/index.js",
        "npm:react-grid-layout@0.16.6.json",
        "npm:react-grid-layout@0.16.6/build/components/WidthProvider.js",
        "npm:react-grid-layout@0.16.6/build/responsiveUtils.js",
        "npm:react-grid-layout@0.16.6/build/utils.js",
        "npm:lodash.isequal@4.5.0/index.js",
        "npm:lodash.isequal@4.5.0.json",
        "npm:jspm-nodelibs-buffer@0.2.3/global.js",
        "npm:jspm-nodelibs-buffer@0.2.3.json",
        "npm:buffer@5.2.1/index.js",
        "npm:buffer@5.2.1.json",
        "npm:ieee754@1.1.12/index.js",
        "npm:ieee754@1.1.12.json",
        "npm:base64-js@1.3.0/index.js",
        "npm:base64-js@1.3.0.json",
        "npm:react-grid-layout@0.16.6/build/ResponsiveReactGridLayout.js",
        "npm:react-grid-layout@0.16.6/build/ReactGridLayout.js",
        "npm:react-grid-layout@0.16.6/build/GridItem.js",
        "npm:react-resizable@1.7.5/index.js",
        "npm:react-resizable@1.7.5.json",
        "npm:react-resizable@1.7.5/build/ResizableBox.js",
        "npm:react-resizable@1.7.5/build/Resizable.js",
        "npm:react-resizable@1.7.5/build/cloneElement.js",
        "npm:react-draggable@3.1.1/dist/react-draggable.js",
        "npm:react-draggable@3.1.1.json",
        "npm:react-ace@6.2.0/lib/index.js",
        "npm:react-ace@6.2.0.json",
        "npm:react-ace@6.2.0/lib/diff.js",
        "npm:diff-match-patch@1.0.4/index.js",
        "npm:diff-match-patch@1.0.4.json",
        "npm:react-ace@6.2.0/lib/split.js",
        "npm:brace@0.11.1/ext/split.js",
        "npm:brace@0.11.1.json",
        "npm:react-ace@6.2.0/lib/editorOptions.js",
        "npm:lodash.get@4.4.2/index.js",
        "npm:lodash.get@4.4.2.json",
        "npm:brace@0.11.1/index.js",
        "npm:react-ace@6.2.0/lib/ace.js",
        "npm:node-blockly@1.0.35/index.js",
        "npm:node-blockly@1.0.35.json",
        "npm:node-blockly@1.0.35/python.js",
        "npm:node-blockly@1.0.35/lib/python_compressed.js",
        "npm:node-blockly@1.0.35/_blockly.js",
        "npm:node-blockly@1.0.35/lib/blocks_compressed.js",
        "npm:jsdom@11.12.0/lib/api.js",
        "npm:jsdom@11.12.0.json",
        "npm:jsdom@11.12.0/package.json",
        "npm:jsdom@11.12.0/lib/jsdom/browser/resource-loader.js",
        "npm:url@0.11.0/url.js",
        "npm:url@0.11.0.json",
        "npm:querystring@0.2.0/index.js",
        "npm:querystring@0.2.0.json",
        "npm:querystring@0.2.0/encode.js",
        "npm:querystring@0.2.0/decode.js",
        "npm:url@0.11.0/util.js",
        "npm:punycode@1.3.2/punycode.js",
        "npm:punycode@1.3.2.json",
        "npm:jspm-nodelibs-url@0.2.1.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-type.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/document-base-url.js",
        "npm:whatwg-url@6.5.0/lib/public-api.js",
        "npm:whatwg-url@6.5.0.json",
        "npm:whatwg-url@6.5.0/lib/urlencoded.js",
        "npm:whatwg-url@6.5.0/lib/infra.js",
        "npm:whatwg-url@6.5.0/lib/url-state-machine.js",
        "npm:tr46@1.0.1/index.js",
        "npm:tr46@1.0.1.json",
        "npm:tr46@1.0.1/lib/mappingTable.json",
        "npm:tr46@1.0.1/lib/regexes.js",
        "npm:punycode@2.1.1/punycode.js",
        "npm:punycode@2.1.1.json",
        "npm:punycode@1.4.1/punycode.js",
        "npm:punycode@1.4.1.json",
        "npm:jspm-nodelibs-punycode@0.2.1.json",
        "npm:whatwg-url@6.5.0/lib/URLSearchParams.js",
        "npm:whatwg-url@6.5.0/lib//URLSearchParams-impl.js",
        "npm:whatwg-url@6.5.0/lib//urlencoded.js",
        "npm:whatwg-url@6.5.0/lib//infra.js",
        "npm:lodash.sortby@4.7.0/index.js",
        "npm:lodash.sortby@4.7.0.json",
        "npm:whatwg-url@6.5.0/lib/utils.js",
        "npm:webidl-conversions@4.0.2/lib/index.js",
        "npm:webidl-conversions@4.0.2.json",
        "npm:whatwg-url@6.5.0/lib/URL.js",
        "npm:whatwg-url@6.5.0/lib//URL-impl.js",
        "npm:whatwg-url@6.5.0/lib//URLSearchParams.js",
        "npm:whatwg-url@6.5.0/lib///URLSearchParams-impl.js",
        "npm:whatwg-url@6.5.0/lib///urlencoded.js",
        "npm:whatwg-url@6.5.0/lib///infra.js",
        "npm:whatwg-url@6.5.0/lib//utils.js",
        "npm:whatwg-url@6.5.0/lib//url-state-machine.js",
        "npm:request@2.88.0/index.js",
        "npm:request@2.88.0.json",
        "npm:request@2.88.0/request.js",
        "npm:safe-buffer@5.1.2/index.js",
        "npm:safe-buffer@5.1.2.json",
        "npm:performance-now@2.1.0/lib/performance-now.js",
        "npm:performance-now@2.1.0.json",
        "npm:request@2.88.0/lib/tunnel.js",
        "npm:tunnel-agent@0.6.0/index.js",
        "npm:tunnel-agent@0.6.0.json",
        "npm:jspm-nodelibs-util@0.2.2/util.js",
        "npm:jspm-nodelibs-util@0.2.2.json",
        "npm:jspm-nodelibs-util@0.2.2/isBufferBrowser.js",
        "npm:jspm-nodelibs-assert@0.2.1/assert.js",
        "npm:jspm-nodelibs-assert@0.2.1.json",
        "npm:jspm-nodelibs-events@0.2.2/events.js",
        "npm:jspm-nodelibs-events@0.2.2.json",
        "npm:jspm-nodelibs-https@0.2.2/https.js",
        "npm:jspm-nodelibs-https@0.2.2.json",
        "npm:stream-http@2.8.3/index.js",
        "npm:stream-http@2.8.3.json",
        "npm:builtin-status-codes@3.0.0/browser.js",
        "npm:builtin-status-codes@3.0.0.json",
        "npm:xtend@4.0.1/immutable.js",
        "npm:xtend@4.0.1.json",
        "npm:stream-http@2.8.3/lib/response.js",
        "npm:inherits@2.0.3/inherits_browser.js",
        "npm:inherits@2.0.3.json",
        "npm:core-util-is@1.0.2/lib/util.js",
        "npm:core-util-is@1.0.2.json",
        "npm:process-nextick-args@2.0.0/index.js",
        "npm:process-nextick-args@2.0.0.json",
        "npm:util-deprecate@1.0.2/browser.js",
        "npm:util-deprecate@1.0.2.json",
        "npm:string_decoder@1.1.1/lib/string_decoder.js",
        "npm:string_decoder@1.1.1.json",
        "npm:isarray@1.0.0/index.js",
        "npm:isarray@1.0.0.json",
        "npm:stream-http@2.8.3/lib/capability.js",
        "npm:stream-http@2.8.3/lib/request.js",
        "npm:to-arraybuffer@1.0.1/index.js",
        "npm:to-arraybuffer@1.0.1.json",
        "npm:jspm-nodelibs-http@0.2.0.json",
        "npm:jspm-nodelibs-tls@0.2.1/tls.js",
        "npm:jspm-nodelibs-tls@0.2.1.json",
        "npm:jspm-nodelibs-net@0.2.1/net.js",
        "npm:jspm-nodelibs-net@0.2.1.json",
        "npm:request@2.88.0/lib/redirect.js",
        "npm:request@2.88.0/lib/multipart.js",
        "npm:isstream@0.1.2/isstream.js",
        "npm:isstream@0.1.2.json",
        "npm:stream-browserify@2.0.1/index.js",
        "npm:stream-browserify@2.0.1.json",
        "npm:jspm-nodelibs-stream@0.2.1.json",
        "npm:combined-stream@1.0.7/lib/combined_stream.js",
        "npm:combined-stream@1.0.7.json",
        "npm:combined-stream@1.0.7/lib/defer.js",
        "npm:delayed-stream@1.0.0/lib/delayed_stream.js",
        "npm:delayed-stream@1.0.0.json",
        "npm:uuid@3.3.2/v4.js",
        "npm:uuid@3.3.2.json",
        "npm:uuid@3.3.2/lib/bytesToUuid.js",
        "npm:uuid@3.3.2/lib/rng-browser.js",
        "npm:request@2.88.0/lib/hawk.js",
        "npm:crypto-browserify@3.12.0/index.js",
        "npm:crypto-browserify@3.12.0.json",
        "npm:randomfill@1.0.4/browser.js",
        "npm:randomfill@1.0.4.json",
        "npm:randombytes@2.0.6/browser.js",
        "npm:randombytes@2.0.6.json",
        "npm:public-encrypt@4.0.3/browser.js",
        "npm:public-encrypt@4.0.3.json",
        "npm:public-encrypt@4.0.3/privateDecrypt.js",
        "npm:public-encrypt@4.0.3/withPublic.js",
        "npm:bn.js@4.11.8/lib/bn.js",
        "npm:bn.js@4.11.8.json",
        "npm:create-hash@1.2.0/browser.js",
        "npm:create-hash@1.2.0.json",
        "npm:cipher-base@1.0.4/index.js",
        "npm:cipher-base@1.0.4.json",
        "npm:string_decoder@0.10.31/index.js",
        "npm:string_decoder@0.10.31.json",
        "npm:jspm-nodelibs-string_decoder@0.2.2.json",
        "npm:sha.js@2.4.11/index.js",
        "npm:sha.js@2.4.11.json",
        "npm:sha.js@2.4.11/sha512.js",
        "npm:sha.js@2.4.11/hash.js",
        "npm:sha.js@2.4.11/sha384.js",
        "npm:sha.js@2.4.11/sha256.js",
        "npm:sha.js@2.4.11/sha224.js",
        "npm:sha.js@2.4.11/sha1.js",
        "npm:sha.js@2.4.11/sha.js",
        "npm:ripemd160@2.0.2/index.js",
        "npm:ripemd160@2.0.2.json",
        "npm:hash-base@3.0.4/index.js",
        "npm:hash-base@3.0.4.json",
        "npm:md5.js@1.3.5/index.js",
        "npm:md5.js@1.3.5.json",
        "npm:browserify-rsa@4.0.1/index.js",
        "npm:browserify-rsa@4.0.1.json",
        "npm:public-encrypt@4.0.3/xor.js",
        "npm:public-encrypt@4.0.3/mgf.js",
        "npm:parse-asn1@5.1.1/index.js",
        "npm:parse-asn1@5.1.1.json",
        "npm:pbkdf2@3.0.17/browser.js",
        "npm:pbkdf2@3.0.17.json",
        "npm:pbkdf2@3.0.17/lib/sync-browser.js",
        "npm:pbkdf2@3.0.17/lib/default-encoding.js",
        "npm:pbkdf2@3.0.17/lib/precondition.js",
        "npm:create-hash@1.2.0/md5.js",
        "npm:pbkdf2@3.0.17/lib/async.js",
        "npm:browserify-aes@1.2.0/browser.js",
        "npm:browserify-aes@1.2.0.json",
        "npm:browserify-aes@1.2.0/modes/list.json",
        "npm:browserify-aes@1.2.0/decrypter.js",
        "npm:evp_bytestokey@1.0.3/index.js",
        "npm:evp_bytestokey@1.0.3.json",
        "npm:browserify-aes@1.2.0/aes.js",
        "npm:browserify-aes@1.2.0/streamCipher.js",
        "npm:browserify-aes@1.2.0/modes/index.js",
        "npm:browserify-aes@1.2.0/modes/ctr.js",
        "npm:browserify-aes@1.2.0/incr32.js",
        "npm:buffer-xor@1.0.3/index.js",
        "npm:buffer-xor@1.0.3.json",
        "npm:browserify-aes@1.2.0/modes/ofb.js",
        "npm:browserify-aes@1.2.0/modes/cfb1.js",
        "npm:browserify-aes@1.2.0/modes/cfb8.js",
        "npm:browserify-aes@1.2.0/modes/cfb.js",
        "npm:browserify-aes@1.2.0/modes/cbc.js",
        "npm:browserify-aes@1.2.0/modes/ecb.js",
        "npm:browserify-aes@1.2.0/authCipher.js",
        "npm:browserify-aes@1.2.0/ghash.js",
        "npm:browserify-aes@1.2.0/encrypter.js",
        "npm:parse-asn1@5.1.1/fixProc.js",
        "npm:parse-asn1@5.1.1/aesid.json",
        "npm:parse-asn1@5.1.1/asn1.js",
        "npm:parse-asn1@5.1.1/certificate.js",
        "npm:asn1.js@4.10.1/lib/asn1.js",
        "npm:asn1.js@4.10.1.json",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/pem.js",
        "npm:asn1.js@4.10.1/lib/asn1/encoders/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/pem.js",
        "npm:asn1.js@4.10.1/lib/asn1/decoders/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/constants/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/constants/der.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/index.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/node.js",
        "npm:minimalistic-assert@1.0.1/index.js",
        "npm:minimalistic-assert@1.0.1.json",
        "npm:asn1.js@4.10.1/lib/asn1/base/buffer.js",
        "npm:asn1.js@4.10.1/lib/asn1/base/reporter.js",
        "npm:asn1.js@4.10.1/lib/asn1/api.js",
        "npm:jspm-nodelibs-vm@0.2.1/vm.js",
        "npm:jspm-nodelibs-vm@0.2.1.json",
        "npm:public-encrypt@4.0.3/publicEncrypt.js",
        "npm:create-ecdh@4.0.3/browser.js",
        "npm:create-ecdh@4.0.3.json",
        "npm:elliptic@6.4.1/lib/elliptic.js",
        "npm:elliptic@6.4.1.json",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/signature.js",
        "npm:elliptic@6.4.1/lib/elliptic/eddsa/key.js",
        "npm:hash.js@1.1.7/lib/hash.js",
        "npm:hash.js@1.1.7.json",
        "npm:hash.js@1.1.7/lib/hash/hmac.js",
        "npm:hash.js@1.1.7/lib/hash/utils.js",
        "npm:hash.js@1.1.7/lib/hash/ripemd.js",
        "npm:hash.js@1.1.7/lib/hash/common.js",
        "npm:hash.js@1.1.7/lib/hash/sha.js",
        "npm:hash.js@1.1.7/lib/hash/sha/512.js",
        "npm:hash.js@1.1.7/lib/hash/sha/384.js",
        "npm:hash.js@1.1.7/lib/hash/sha/256.js",
        "npm:hash.js@1.1.7/lib/hash/sha/common.js",
        "npm:hash.js@1.1.7/lib/hash/sha/224.js",
        "npm:hash.js@1.1.7/lib/hash/sha/1.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/signature.js",
        "npm:elliptic@6.4.1/lib/elliptic/ec/key.js",
        "npm:hmac-drbg@1.0.1/lib/hmac-drbg.js",
        "npm:hmac-drbg@1.0.1.json",
        "npm:minimalistic-crypto-utils@1.0.1/lib/utils.js",
        "npm:minimalistic-crypto-utils@1.0.1.json",
        "npm:elliptic@6.4.1/lib/elliptic/curves.js",
        "npm:elliptic@6.4.1/lib/elliptic/precomputed/secp256k1.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/index.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/edwards.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/mont.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/short.js",
        "npm:elliptic@6.4.1/lib/elliptic/curve/base.js",
        "npm:brorand@1.1.0/index.js",
        "npm:brorand@1.1.0.json",
        "npm:elliptic@6.4.1/lib/elliptic/utils.js",
        "npm:elliptic@6.4.1/package.json",
        "npm:browserify-sign@4.0.4/browser/index.js",
        "npm:browserify-sign@4.0.4.json",
        "npm:browserify-sign@4.0.4/browser/algorithms.json",
        "npm:browserify-sign@4.0.4/browser/verify.js",
        "npm:browserify-sign@4.0.4/browser/curves.json",
        "npm:browserify-sign@4.0.4/browser/sign.js",
        "npm:create-hmac@1.1.7/browser.js",
        "npm:create-hmac@1.1.7.json",
        "npm:create-hmac@1.1.7/legacy.js",
        "npm:diffie-hellman@5.0.3/browser.js",
        "npm:diffie-hellman@5.0.3.json",
        "npm:diffie-hellman@5.0.3/lib/dh.js",
        "npm:diffie-hellman@5.0.3/lib/generatePrime.js",
        "npm:miller-rabin@4.0.1/lib/mr.js",
        "npm:miller-rabin@4.0.1.json",
        "npm:diffie-hellman@5.0.3/lib/primes.json",
        "npm:browserify-cipher@1.0.1/browser.js",
        "npm:browserify-cipher@1.0.1.json",
        "npm:browserify-des@1.0.2/modes.js",
        "npm:browserify-des@1.0.2.json",
        "npm:browserify-des@1.0.2/index.js",
        "npm:des.js@1.0.0/lib/des.js",
        "npm:des.js@1.0.0.json",
        "npm:des.js@1.0.0/lib/des/ede.js",
        "npm:des.js@1.0.0/lib/des/cbc.js",
        "npm:des.js@1.0.0/lib/des/des.js",
        "npm:des.js@1.0.0/lib/des/cipher.js",
        "npm:des.js@1.0.0/lib/des/utils.js",
        "npm:browserify-sign@4.0.4/algos.js",
        "npm:jspm-nodelibs-crypto@0.2.1.json",
        "npm:request@2.88.0/lib/oauth.js",
        "npm:oauth-sign@0.9.0/index.js",
        "npm:oauth-sign@0.9.0.json",
        "npm:caseless@0.12.0/index.js",
        "npm:caseless@0.12.0.json",
        "npm:qs@6.5.2/lib/index.js",
        "npm:qs@6.5.2.json",
        "npm:qs@6.5.2/lib/formats.js",
        "npm:qs@6.5.2/lib/parse.js",
        "npm:qs@6.5.2/lib/utils.js",
        "npm:qs@6.5.2/lib/stringify.js",
        "npm:request@2.88.0/lib/auth.js",
        "npm:request@2.88.0/lib/helpers.js",
        "npm:json-stringify-safe@5.0.1/stringify.js",
        "npm:json-stringify-safe@5.0.1.json",
        "npm:request@2.88.0/lib/har.js",
        "npm:extend@3.0.2/index.js",
        "npm:extend@3.0.2.json",
        "npm:har-validator@5.1.3/lib/promise.js",
        "npm:har-validator@5.1.3.json",
        "npm:ajv@6.5.5/lib/refs/json-schema-draft-06.json",
        "npm:ajv@6.5.5.json",
        "npm:har-schema@2.0.0/lib/index.js",
        "npm:har-schema@2.0.0.json",
        "npm:har-schema@2.0.0/lib/timings.json",
        "npm:har-schema@2.0.0/lib/response.json",
        "npm:har-schema@2.0.0/lib/request.json",
        "npm:har-schema@2.0.0/lib/query.json",
        "npm:har-schema@2.0.0/lib/postData.json",
        "npm:har-schema@2.0.0/lib/pageTimings.json",
        "npm:har-schema@2.0.0/lib/page.json",
        "npm:har-schema@2.0.0/lib/log.json",
        "npm:har-schema@2.0.0/lib/header.json",
        "npm:har-schema@2.0.0/lib/har.json",
        "npm:har-schema@2.0.0/lib/entry.json",
        "npm:har-schema@2.0.0/lib/creator.json",
        "npm:har-schema@2.0.0/lib/cookie.json",
        "npm:har-schema@2.0.0/lib/content.json",
        "npm:har-schema@2.0.0/lib/cache.json",
        "npm:har-schema@2.0.0/lib/browser.json",
        "npm:har-schema@2.0.0/lib/beforeRequest.json",
        "npm:har-schema@2.0.0/lib/afterRequest.json",
        "npm:har-validator@5.1.3/lib/error.js",
        "npm:ajv@6.5.5/lib/ajv.js",
        "npm:ajv@6.5.5/lib/refs/json-schema-draft-07.json",
        "npm:ajv@6.5.5/lib/refs/data.json",
        "npm:ajv@6.5.5/lib/compile/error_classes.js",
        "npm:ajv@6.5.5/lib/compile/resolve.js",
        "npm:json-schema-traverse@0.4.1/index.js",
        "npm:json-schema-traverse@0.4.1.json",
        "npm:ajv@6.5.5/lib/compile/schema_obj.js",
        "npm:ajv@6.5.5/lib/compile/util.js",
        "npm:ajv@6.5.5/lib/compile/ucs2length.js",
        "npm:fast-deep-equal@2.0.1/index.js",
        "npm:fast-deep-equal@2.0.1.json",
        "npm:uri-js@4.2.2/dist/es5/uri.all.js",
        "npm:uri-js@4.2.2.json",
        "npm:ajv@6.5.5/lib/keyword.js",
        "npm:ajv@6.5.5/lib/dotjs/custom.js",
        "npm:ajv@6.5.5/lib/compile/async.js",
        "npm:ajv@6.5.5/lib/data.js",
        "npm:ajv@6.5.5/lib/compile/rules.js",
        "npm:ajv@6.5.5/lib/dotjs/index.js",
        "npm:ajv@6.5.5/lib/dotjs/validate.js",
        "npm:ajv@6.5.5/lib/dotjs/uniqueItems.js",
        "npm:ajv@6.5.5/lib/dotjs/required.js",
        "npm:ajv@6.5.5/lib/dotjs/propertyNames.js",
        "npm:ajv@6.5.5/lib/dotjs/properties.js",
        "npm:ajv@6.5.5/lib/dotjs/pattern.js",
        "npm:ajv@6.5.5/lib/dotjs/oneOf.js",
        "npm:ajv@6.5.5/lib/dotjs/not.js",
        "npm:ajv@6.5.5/lib/dotjs/multipleOf.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitProperties.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitLength.js",
        "npm:ajv@6.5.5/lib/dotjs/_limitItems.js",
        "npm:ajv@6.5.5/lib/dotjs/_limit.js",
        "npm:ajv@6.5.5/lib/dotjs/items.js",
        "npm:ajv@6.5.5/lib/dotjs/if.js",
        "npm:ajv@6.5.5/lib/dotjs/format.js",
        "npm:ajv@6.5.5/lib/dotjs/enum.js",
        "npm:ajv@6.5.5/lib/dotjs/dependencies.js",
        "npm:ajv@6.5.5/lib/dotjs/contains.js",
        "npm:ajv@6.5.5/lib/dotjs/const.js",
        "npm:ajv@6.5.5/lib/dotjs/comment.js",
        "npm:ajv@6.5.5/lib/dotjs/anyOf.js",
        "npm:ajv@6.5.5/lib/dotjs/allOf.js",
        "npm:ajv@6.5.5/lib/dotjs/ref.js",
        "npm:ajv@6.5.5/lib/compile/formats.js",
        "npm:fast-json-stable-stringify@2.0.0/index.js",
        "npm:fast-json-stable-stringify@2.0.0.json",
        "npm:ajv@6.5.5/lib/cache.js",
        "npm:ajv@6.5.5/lib/compile/index.js",
        "npm:jspm-nodelibs-querystring@0.2.2/querystring.js",
        "npm:jspm-nodelibs-querystring@0.2.2.json",
        "npm:jspm-nodelibs-fs@0.2.1/fs.js",
        "npm:jspm-nodelibs-fs@0.2.1.json",
        "npm:request@2.88.0/lib/querystring.js",
        "npm:request@2.88.0/lib/getProxyFromURI.js",
        "npm:request@2.88.0/lib/cookies.js",
        "npm:tough-cookie@2.4.3/lib/cookie.js",
        "npm:tough-cookie@2.4.3.json",
        "npm:tough-cookie@2.4.3/lib/permuteDomain.js",
        "npm:tough-cookie@2.4.3/lib/pubsuffix-psl.js",
        "npm:psl@1.1.29/index.js",
        "npm:psl@1.1.29.json",
        "npm:psl@1.1.29/data/rules.json",
        "npm:tough-cookie@2.4.3/package.json",
        "npm:tough-cookie@2.4.3/lib/pathMatch.js",
        "npm:tough-cookie@2.4.3/lib/memstore.js",
        "npm:tough-cookie@2.4.3/lib/store.js",
        "npm:is-typedarray@1.0.0/index.js",
        "npm:is-typedarray@1.0.0.json",
        "npm:form-data@2.3.3/lib/browser.js",
        "npm:form-data@2.3.3.json",
        "npm:forever-agent@0.6.1/index.js",
        "npm:forever-agent@0.6.1.json",
        "npm:mime-types@2.1.21/index.js",
        "npm:mime-types@2.1.21.json",
        "npm:jspm-nodelibs-path@0.2.3/path.js",
        "npm:jspm-nodelibs-path@0.2.3.json",
        "npm:mime-db@1.37.0/index.js",
        "npm:mime-db@1.37.0.json",
        "npm:mime-db@1.37.0/db.json",
        "npm:http-signature@1.2.0/lib/index.js",
        "npm:http-signature@1.2.0.json",
        "npm:http-signature@1.2.0/lib/utils.js",
        "npm:sshpk@1.15.2/lib/index.js",
        "npm:sshpk@1.15.2.json",
        "npm:sshpk@1.15.2/lib/errors.js",
        "npm:assert-plus@1.0.0/assert.js",
        "npm:assert-plus@1.0.0.json",
        "npm:sshpk@1.15.2/lib/identity.js",
        "npm:safer-buffer@2.1.2/safer.js",
        "npm:safer-buffer@2.1.2.json",
        "npm:asn1@0.2.4/lib/index.js",
        "npm:asn1@0.2.4.json",
        "npm:asn1@0.2.4/lib/ber/index.js",
        "npm:asn1@0.2.4/lib/ber/writer.js",
        "npm:asn1@0.2.4/lib/ber/errors.js",
        "npm:asn1@0.2.4/lib/ber/types.js",
        "npm:asn1@0.2.4/lib/ber/reader.js",
        "npm:sshpk@1.15.2/lib/utils.js",
        "npm:tweetnacl@0.14.5/nacl-fast.js",
        "npm:tweetnacl@0.14.5.json",
        "npm:jsbn@0.1.1/index.js",
        "npm:jsbn@0.1.1.json",
        "npm:ecc-jsbn@0.1.2/lib/ec.js",
        "npm:ecc-jsbn@0.1.2.json",
        "npm:sshpk@1.15.2/lib/algs.js",
        "npm:sshpk@1.15.2/lib/key.js",
        "npm:sshpk@1.15.2/lib/formats/dnssec.js",
        "npm:sshpk@1.15.2/lib/dhe.js",
        "npm:ecc-jsbn@0.1.2/index.js",
        "npm:ecc-jsbn@0.1.2/lib/sec.js",
        "npm:sshpk@1.15.2/lib/private-key.js",
        "npm:sshpk@1.15.2/lib/formats/ssh-private.js",
        "npm:bcrypt-pbkdf@1.0.2/index.js",
        "npm:bcrypt-pbkdf@1.0.2.json",
        "npm:sshpk@1.15.2/lib/ssh-buffer.js",
        "npm:sshpk@1.15.2/lib/formats/rfc4253.js",
        "npm:sshpk@1.15.2/lib/formats/pem.js",
        "npm:sshpk@1.15.2/lib/formats/pkcs8.js",
        "npm:sshpk@1.15.2/lib/formats/pkcs1.js",
        "npm:sshpk@1.15.2/lib/formats/auto.js",
        "npm:sshpk@1.15.2/lib/formats/ssh.js",
        "npm:sshpk@1.15.2/lib/ed-compat.js",
        "npm:sshpk@1.15.2/lib/signature.js",
        "npm:sshpk@1.15.2/lib/fingerprint.js",
        "npm:sshpk@1.15.2/lib/certificate.js",
        "npm:sshpk@1.15.2/lib/formats/x509-pem.js",
        "npm:sshpk@1.15.2/lib/formats/x509.js",
        "npm:sshpk@1.15.2/lib/formats/openssh-cert.js",
        "npm:http-signature@1.2.0/lib/verify.js",
        "npm:http-signature@1.2.0/lib/signer.js",
        "npm:jsprim@1.4.1/lib/jsprim.js",
        "npm:jsprim@1.4.1.json",
        "npm:json-schema@0.2.3/lib/validate.js",
        "npm:json-schema@0.2.3.json",
        "npm:verror@1.10.0/lib/verror.js",
        "npm:verror@1.10.0.json",
        "npm:extsprintf@1.3.0/lib/extsprintf.js",
        "npm:extsprintf@1.3.0.json",
        "npm:http-signature@1.2.0/lib/parser.js",
        "npm:aws4@1.8.0/aws4.js",
        "npm:aws4@1.8.0.json",
        "npm:aws4@1.8.0/lru.js",
        "npm:aws-sign2@0.7.0/index.js",
        "npm:aws-sign2@0.7.0.json",
        "npm:browserify-zlib@0.1.4/src/index.js",
        "npm:browserify-zlib@0.1.4.json",
        "npm:browserify-zlib@0.1.4/src/binding.js",
        "npm:pako@0.2.9/lib/zlib/constants.js",
        "npm:pako@0.2.9.json",
        "npm:pako@0.2.9/lib/zlib/inflate.js",
        "npm:pako@0.2.9/lib/zlib/inftrees.js",
        "npm:pako@0.2.9/lib/utils/common.js",
        "npm:pako@0.2.9/lib/zlib/inffast.js",
        "npm:pako@0.2.9/lib/zlib/crc32.js",
        "npm:pako@0.2.9/lib/zlib/adler32.js",
        "npm:pako@0.2.9/lib/zlib/deflate.js",
        "npm:pako@0.2.9/lib/zlib/messages.js",
        "npm:pako@0.2.9/lib/zlib/trees.js",
        "npm:pako@0.2.9/lib/zlib/zstream.js",
        "npm:jspm-nodelibs-zlib@0.2.3.json",
        "npm:whatwg-encoding@1.0.5/lib/whatwg-encoding.js",
        "npm:whatwg-encoding@1.0.5.json",
        "npm:whatwg-encoding@1.0.5/lib/labels-to-names.json",
        "npm:whatwg-encoding@1.0.5/lib/supported-names.json",
        "npm:iconv-lite@0.4.24/lib/index.js",
        "npm:iconv-lite@0.4.24.json",
        "npm:iconv-lite@0.4.24/encodings/index.js",
        "npm:iconv-lite@0.4.24/encodings/dbcs-data.js",
        "npm:iconv-lite@0.4.24/encodings/tables/big5-added.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp950.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp949.json",
        "npm:iconv-lite@0.4.24/encodings/tables/gb18030-ranges.json",
        "npm:iconv-lite@0.4.24/encodings/tables/gbk-added.json",
        "npm:iconv-lite@0.4.24/encodings/tables/cp936.json",
        "npm:iconv-lite@0.4.24/encodings/tables/eucjp.json",
        "npm:iconv-lite@0.4.24/encodings/tables/shiftjis.json",
        "npm:iconv-lite@0.4.24/encodings/dbcs-codec.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-data-generated.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-data.js",
        "npm:iconv-lite@0.4.24/encodings/sbcs-codec.js",
        "npm:iconv-lite@0.4.24/encodings/utf7.js",
        "npm:iconv-lite@0.4.24/encodings/utf16.js",
        "npm:iconv-lite@0.4.24/encodings/internal.js",
        "npm:iconv-lite@0.4.24/lib/bom-handling.js",
        "npm:html-encoding-sniffer@1.0.2/lib/html-encoding-sniffer.js",
        "npm:html-encoding-sniffer@1.0.2.json",
        "npm:data-urls@1.1.0/lib/parser.js",
        "npm:data-urls@1.1.0.json",
        "npm:data-urls@1.1.0/lib/utils.js",
        "npm:abab@2.0.0/index.js",
        "npm:abab@2.0.0.json",
        "npm:abab@2.0.0/lib/btoa.js",
        "npm:abab@2.0.0/lib/atob.js",
        "npm:whatwg-url@7.0.0/lib/public-api.js",
        "npm:whatwg-url@7.0.0.json",
        "npm:whatwg-url@7.0.0/lib/urlencoded.js",
        "npm:whatwg-url@7.0.0/lib/infra.js",
        "npm:whatwg-url@7.0.0/lib/url-state-machine.js",
        "npm:whatwg-url@7.0.0/lib/URLSearchParams.js",
        "npm:whatwg-url@7.0.0/lib/URLSearchParams-impl.js",
        "npm:whatwg-url@7.0.0/lib/utils.js",
        "npm:whatwg-url@7.0.0/lib/URL.js",
        "npm:whatwg-url@7.0.0/lib/URL-impl.js",
        "npm:whatwg-mimetype@2.2.0/lib/mime-type.js",
        "npm:whatwg-mimetype@2.2.0.json",
        "npm:whatwg-mimetype@2.2.0/lib/utils.js",
        "npm:whatwg-mimetype@2.2.0/lib/serializer.js",
        "npm:whatwg-mimetype@2.2.0/lib/parser.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/documentfeatures.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/vm-shim.js",
        "npm:escodegen@1.11.0/escodegen.js",
        "npm:escodegen@1.11.0.json",
        "npm:escodegen@1.11.0/package.json",
        "npm:source-map@0.6.1/source-map.js",
        "npm:source-map@0.6.1.json",
        "npm:source-map@0.6.1/lib/source-node.js",
        "npm:source-map@0.6.1/lib/util.js",
        "npm:source-map@0.6.1/lib/source-map-generator.js",
        "npm:source-map@0.6.1/lib/mapping-list.js",
        "npm:source-map@0.6.1/lib/array-set.js",
        "npm:source-map@0.6.1/lib/base64-vlq.js",
        "npm:source-map@0.6.1/lib/base64.js",
        "npm:source-map@0.6.1/lib/source-map-consumer.js",
        "npm:source-map@0.6.1/lib/quick-sort.js",
        "npm:source-map@0.6.1/lib/binary-search.js",
        "npm:esutils@2.0.2/lib/utils.js",
        "npm:esutils@2.0.2.json",
        "npm:esutils@2.0.2/lib/keyword.js",
        "npm:esutils@2.0.2/lib/code.js",
        "npm:esutils@2.0.2/lib/ast.js",
        "npm:estraverse@4.2.0/estraverse.js",
        "npm:estraverse@4.2.0.json",
        "npm:estraverse@4.2.0/package.json",
        "npm:acorn-globals@4.3.0/index.js",
        "npm:acorn-globals@4.3.0.json",
        "npm:acorn-walk@6.1.1/dist/walk.js",
        "npm:acorn-walk@6.1.1.json",
        "npm:acorn@6.0.4/dist/acorn.js",
        "npm:acorn@6.0.4.json",
        "npm:acorn@5.7.3/dist/acorn.js",
        "npm:acorn@5.7.3.json",
        "npm:jsdom@11.12.0/lib/jsdom/browser/domtohtml.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/parse5-adapter-serialization.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/internal-constants.js",
        "npm:symbol-tree@3.2.2/lib/SymbolTree.js",
        "npm:symbol-tree@3.2.2.json",
        "npm:symbol-tree@3.2.2/lib/TreeIterator.js",
        "npm:symbol-tree@3.2.2/lib/TreePosition.js",
        "npm:symbol-tree@3.2.2/lib/SymbolTreeNode.js",
        "npm:parse5@4.0.0/lib/index.js",
        "npm:parse5@4.0.0.json",
        "npm:parse5@4.0.0/lib/tree_adapters/htmlparser2.js",
        "npm:parse5@4.0.0/lib/common/html.js",
        "npm:parse5@4.0.0/lib/common/doctype.js",
        "npm:parse5@4.0.0/lib/tree_adapters/default.js",
        "npm:parse5@4.0.0/lib/serializer/index.js",
        "npm:parse5@4.0.0/lib/utils/merge_options.js",
        "npm:parse5@4.0.0/lib/parser/index.js",
        "npm:parse5@4.0.0/lib/common/unicode.js",
        "npm:parse5@4.0.0/lib/common/foreign_content.js",
        "npm:parse5@4.0.0/lib/tokenizer/index.js",
        "npm:parse5@4.0.0/lib/tokenizer/named_entity_data.js",
        "npm:parse5@4.0.0/lib/tokenizer/preprocessor.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/parser_mixin.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/open_element_stack_mixin.js",
        "npm:parse5@4.0.0/lib/utils/mixin.js",
        "npm:parse5@4.0.0/lib/extensions/position_tracking/preprocessor_mixin.js",
        "npm:parse5@4.0.0/lib/extensions/location_info/tokenizer_mixin.js",
        "npm:parse5@4.0.0/lib/parser/formatting_element_list.js",
        "npm:parse5@4.0.0/lib/parser/open_element_stack.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/Window.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/default-stylesheet.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/index.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-filter.js",
        "npm:jsdom@11.12.0/lib/jsdom/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/level3/xpath.js",
        "npm:jsdom@11.12.0/lib/jsdom/level2/style.js",
        "npm:cssstyle@1.1.1/lib/CSSStyleDeclaration.js",
        "npm:cssstyle@1.1.1.json",
        "npm:cssstyle@1.1.1/lib/properties.js",
        "npm:cssstyle@1.1.1/lib/parsers.js",
        "npm:cssstyle@1.1.1/lib/validProperties.js",
        "npm:cssom@0.3.4/lib/index.js",
        "npm:cssom@0.3.4.json",
        "npm:cssom@0.3.4/lib/clone.js",
        "npm:cssom@0.3.4/lib/CSSKeyframesRule.js",
        "npm:cssom@0.3.4/lib/CSSRule.js",
        "npm:cssom@0.3.4/lib/CSSKeyframeRule.js",
        "npm:cssom@0.3.4/lib/CSSStyleDeclaration.js",
        "npm:cssom@0.3.4/lib/parse.js",
        "npm:cssom@0.3.4/lib/CSSDocumentRule.js",
        "npm:cssom@0.3.4/lib/MatcherList.js",
        "npm:cssom@0.3.4/lib/CSSValueExpression.js",
        "npm:cssom@0.3.4/lib/CSSValue.js",
        "npm:cssom@0.3.4/lib/CSSHostRule.js",
        "npm:cssom@0.3.4/lib/CSSFontFaceRule.js",
        "npm:cssom@0.3.4/lib/CSSSupportsRule.js",
        "npm:cssom@0.3.4/lib/CSSMediaRule.js",
        "npm:cssom@0.3.4/lib/MediaList.js",
        "npm:cssom@0.3.4/lib/CSSImportRule.js",
        "npm:cssom@0.3.4/lib/CSSStyleSheet.js",
        "npm:cssom@0.3.4/lib/CSSStyleRule.js",
        "npm:cssom@0.3.4/lib/StyleSheet.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/register-elements.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGSVGElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGSVGElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/WindowEventHandlers-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/create-event-accessor.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/runtime-script-errors.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ErrorEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/ErrorEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ErrorEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/Event-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Event.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGGraphicsElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGTests-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGStringList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGStringList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGListBase.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/svg/basic-types.js",
        "npm:domexception@1.0.1/lib/public-api.js",
        "npm:domexception@1.0.1.json",
        "npm:domexception@1.0.1/lib/DOMException.js",
        "npm:domexception@1.0.1/lib//DOMException-impl.js",
        "npm:domexception@1.0.1/lib//utils.js",
        "npm:domexception@1.0.1/lib//legacy-error-codes.json",
        "npm:domexception@1.0.1/lib/utils.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/strings.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/SVGElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAndSVGElementShared-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMStringMap.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMStringMap-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/validate-names.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/namespaces.js",
        "npm:xml-name-validator@3.0.0/lib/xml-name-validator.js",
        "npm:xml-name-validator@3.0.0.json",
        "npm:xml-name-validator@3.0.0/lib/generated-parser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Attr.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes/Attr-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/focusing.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/form-controls.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NodeList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NodeList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/dates-and-times.js",
        "npm:left-pad@1.3.0/index.js",
        "npm:left-pad@1.3.0.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FocusEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/FocusEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FocusEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/UIEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventTarget.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/EventTarget-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventListenerOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AddEventListenerOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/UIEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/UIEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/GlobalEventHandlers-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ElementCSSInlineStyle-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Element-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NonDocumentTypeChildNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLCollection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLCollection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/ordered-set.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NamedNodeMap.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/attributes/NamedNodeMap-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMTokenList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMTokenList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/named-properties-window.js",
        "npm:jsdom@11.12.0/lib/jsdom/named-properties-tracker.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ChildNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ParentNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/selectors.js",
        "npm:nwsapi@2.0.9/src/nwsapi.js",
        "npm:nwsapi@2.0.9.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Node-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/node-document-position.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGAnimatedString.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGAnimatedString-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGNumber.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/svg/SVGNumber-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WindowEventHandlers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGGraphicsElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGTests.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SVGElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/GlobalEventHandlers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ElementCSSInlineStyle.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Element.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ParentNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Node.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/GetRootNodeOptions.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NonDocumentTypeChildNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ChildNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLVideoElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLVideoElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMediaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/not-implemented.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MouseEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/MouseEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MouseEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EventModifierInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/EventModifierMixin-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMediaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ElementContentEditable.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ElementContentEditable-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TextTrackKind.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLUnknownElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLUnknownElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLUListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLUListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTrackElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTrackElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTextAreaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTextAreaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/text.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/traversal.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ValidityState.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/constraint-validation/ValidityState-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/constraint-validation/DefaultConstraintValidation-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SelectionMode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTemplateElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTemplateElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableSectionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableSectionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableRowElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableRowElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTitleElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTitleElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTimeElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTimeElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableCaptionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableCaptionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableColElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableColElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLTableCellElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLTableCellElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLStyleElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLStyleElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/stylesheets.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/LinkStyle.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/LinkStyle-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSpanElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSpanElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSourceElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSourceElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLSelectElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLSelectElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptionsCollection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptionsCollection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptGroupElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptGroupElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOptionElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOptionElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLScriptElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLScriptElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLQuoteElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLQuoteElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLProgressElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLProgressElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLPreElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLPreElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLPictureElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLPictureElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLParamElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLParamElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLParagraphElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLParagraphElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOutputElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOutputElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLOListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLOListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLObjectElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLObjectElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLModElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLModElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMeterElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMeterElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMetaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMetaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMenuElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMenuElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMarqueeElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMarqueeElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLMapElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLMapElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLinkElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLinkElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLIElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLIElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLegendElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLegendElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLLabelElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLLabelElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLInputElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLInputElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FileList.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/FileList-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLImageElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLImageElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLIFrameElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLIFrameElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFrameElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/navigation.js",
        "npm:array-equal@1.0.0/index.js",
        "npm:array-equal@1.0.0.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHtmlElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHtmlElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHRElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHRElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHeadElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHeadElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHeadingElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHeadingElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFrameSetElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFrameSetElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFrameElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFormElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFormElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFontElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFontElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLFieldSetElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLFieldSetElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLEmbedElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLEmbedElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDivElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDivElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDirectoryElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDirectoryElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDialogElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDialogElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDetailsElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDetailsElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDataListElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDataListElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLDataElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLDataElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLCanvasElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLCanvasElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLButtonElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLButtonElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBRElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBRElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBodyElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBodyElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLBaseElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLBaseElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAudioElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAudioElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAreaElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAreaElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLHyperlinkElementUtils-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLHyperlinkElementUtils.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HTMLAnchorElement.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/HTMLAnchorElement-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Document-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TouchEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/TouchEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TouchEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProgressEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/ProgressEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProgressEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/PopStateEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/PopStateEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/PopStateEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MessageEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/MessageEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/MessageEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/KeyboardEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/KeyboardEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/KeyboardEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HashChangeEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/HashChangeEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/HashChangeEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CustomEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CustomEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CustomEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NodeIterator.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/NodeIterator-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/helpers.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/TreeWalker.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/traversal/TreeWalker-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/NonElementParentNode-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMImplementation.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DOMImplementation-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Document.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NonElementParentNode.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DocumentType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DocumentType-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DocumentFragment.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/DocumentFragment-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Text.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Text-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/CharacterData-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CharacterData.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CDATASection.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/CDATASection-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/ProcessingInstruction.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/ProcessingInstruction-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Comment.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/Comment-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Location.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/Location-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/History.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/History-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/htmltodom.js",
        "npm:jsdom@11.12.0/lib/jsdom/browser/parse5-adapter-parsing.js",
        "npm:sax@1.2.4/lib/sax.js",
        "npm:sax@1.2.4.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Storage.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/webstorage/Storage-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/StorageEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/StorageEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/StorageEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLHttpRequestUpload.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/XMLHttpRequestUpload-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/XMLHttpRequestEventTarget-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLHttpRequestEventTarget.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FormData.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr/FormData-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/File.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/File-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/Blob-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Blob.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BlobPropertyBag.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/EndingType.js",
        "npm:os-browserify@0.3.0/browser.js",
        "npm:os-browserify@0.3.0.json",
        "npm:jspm-nodelibs-os@0.2.2.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FilePropertyBag.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/DOMParser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/domparsing/DOMParser-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/SupportedType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Performance.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/hr-time/Performance-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Screen.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/Screen-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BarProp.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/BarProp-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WheelEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/WheelEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WheelEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CompositionEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CompositionEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CompositionEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CloseEvent.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/events/CloseEvent-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/CloseEventInit.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/XMLDocument.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/nodes/XMLDocument-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/SessionHistory.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AbortSignal.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/aborting/AbortSignal-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/AbortController.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/aborting/AbortController-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/Navigator.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/Navigator-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorConcurrentHardware-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorPlugins-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorCookies-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorOnLine-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorLanguage-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/navigator/NavigatorID-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorConcurrentHardware.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorPlugins.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorCookies.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorOnLine.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorLanguage.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/NavigatorID.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/External.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/window/External-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/websockets/WebSocket-impl.js",
        "npm:ws@5.2.2/index.js",
        "npm:ws@5.2.2.json",
        "npm:ws@5.2.2/lib/sender.js",
        "npm:ws@5.2.2/lib/constants.js",
        "npm:ws@5.2.2/lib/validation.js",
        "npm:utf-8-validate@4.0.0/index.js",
        "npm:utf-8-validate@4.0.0.json",
        "npm:utf-8-validate@4.0.0/fallback.js",
        "npm:bindings@1.3.0/bindings.js",
        "npm:bindings@1.3.0.json",
        "npm:ws@5.2.2/lib/buffer-util.js",
        "npm:bufferutil@3.0.0/index.js",
        "npm:bufferutil@3.0.0.json",
        "npm:bufferutil@3.0.0/fallback.js",
        "npm:bindings@1.2.1/bindings.js",
        "npm:bindings@1.2.1.json",
        "npm:ws@5.2.2/lib/permessage-deflate.js",
        "npm:async-limiter@1.0.0/index.js",
        "npm:async-limiter@1.0.0.json",
        "npm:ws@5.2.2/lib/receiver.js",
        "npm:ws@5.2.2/lib/websocket-server.js",
        "npm:ws@5.2.2/lib/websocket.js",
        "npm:ws@5.2.2/lib/extension.js",
        "npm:ws@5.2.2/lib/event-target.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/WebSocket.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/websockets/WebSocket-impl-browser.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/BinaryType.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/generated/FileReader.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/file-api/FileReader-impl.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xmlhttprequest.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/helpers/json.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xmlhttprequest-symbols.js",
        "npm:jsdom@11.12.0/lib/jsdom/living/xhr-utils.js",
        "npm:jspm-nodelibs-child_process@0.2.1/child_process.js",
        "npm:jspm-nodelibs-child_process@0.2.1.json",
        "npm:jsdom@11.12.0/lib/jsdom/living/post-message.js",
        "npm:jsdom@11.12.0/lib/jsdom/virtual-console.js",
        "npm:w3c-hr-time@1.0.1/index.js",
        "npm:w3c-hr-time@1.0.1.json",
        "npm:w3c-hr-time@1.0.1/lib/clock-is-accurate.js",
        "npm:w3c-hr-time@1.0.1/lib/utils.js",
        "npm:browser-process-hrtime@0.1.3/index.js",
        "npm:browser-process-hrtime@0.1.3.json",
        "npm:w3c-hr-time@1.0.1/lib/performance.js",
        "npm:w3c-hr-time@1.0.1/lib/calculate-clock-offset.js",
        "npm:w3c-hr-time@1.0.1/lib/global-monotonic-clock.js",
        "npm:request-promise-native@1.0.5/lib/rp.js",
        "npm:request-promise-native@1.0.5.json",
        "npm:stealthy-require@1.1.1/lib/index.js",
        "npm:stealthy-require@1.1.1.json",
        "npm:request-promise-core@1.1.1/configure/request2.js",
        "npm:request-promise-core@1.1.1.json",
        "npm:request-promise-core@1.1.1/lib/plumbing.js",
        "npm:lodash@4.17.11/isUndefined.js",
        "npm:lodash@4.17.11/isString.js",
        "npm:request-promise-core@1.1.1/lib/errors.js",
        "npm:pn@1.1.0/fs.js",
        "npm:pn@1.1.0.json",
        "npm:pn@1.1.0/_promisify.js",
        "npm:pn@1.1.0/_promise.js",
        "npm:node-blockly@1.0.35/lib/i18n/en.js",
        "npm:node-blockly@1.0.35/lib/blockly_compressed.js",
        "npm:xmlshim@0.2.3/browser.js",
        "npm:xmlshim@0.2.3.json",
        "npm:node-blockly@1.0.35/lua.js",
        "npm:node-blockly@1.0.35/lib/lua_compressed.js",
        "npm:node-blockly@1.0.35/dart.js",
        "npm:node-blockly@1.0.35/lib/dart_compressed.js",
        "npm:node-blockly@1.0.35/php.js",
        "npm:node-blockly@1.0.35/lib/php_compressed.js",
        "npm:node-blockly@1.0.35/js.js",
        "npm:node-blockly@1.0.35/lib/javascript_compressed.js",
        "npm:namor@1.1.1/dist/index.js",
        "npm:namor@1.1.1.json",
        "npm:namor@1.1.1/dist/is-valid.js",
        "npm:namor@1.1.1/data.json",
        "npm:namor@1.1.1/dist/generate.js",
        "npm:namor@1.1.1/dist/random.js",
        "npm:lodash@4.17.11/lodash.js",
        "npm:isomorphic-fetch@2.2.1/fetch-npm-browserify.js",
        "npm:isomorphic-fetch@2.2.1.json",
        "npm:whatwg-fetch@2.0.4/fetch.js",
        "npm:whatwg-fetch@2.0.4.json",
        "npm:history@3.3.0/lib/index.js",
        "npm:history@3.3.0/lib/useBeforeUnload.js",
        "npm:graphiql@0.11.11/dist/index.js",
        "npm:graphiql@0.11.11.json",
        "npm:graphiql@0.11.11/dist/components/GraphiQL.js",
        "npm:graphiql@0.11.11/dist/utility/introspectionQueries.js",
        "npm:graphql@14.0.2/index.js",
        "npm:graphql@14.0.2.json",
        "npm:graphql@14.0.2/utilities/index.js",
        "npm:graphql@14.0.2/utilities/findDeprecatedUsages.js",
        "npm:graphql@14.0.2/utilities/TypeInfo.js",
        "npm:graphql@14.0.2/jsutils/find.js",
        "npm:graphql@14.0.2/utilities/typeFromAST.js",
        "npm:graphql@14.0.2/type/definition.js",
        "npm:graphql@14.0.2/utilities/valueFromASTUntyped.js",
        "npm:graphql@14.0.2/language/kinds.js",
        "npm:graphql@14.0.2/jsutils/isInvalid.js",
        "npm:graphql@14.0.2/jsutils/keyValMap.js",
        "npm:graphql@14.0.2/jsutils/keyMap.js",
        "npm:graphql@14.0.2/jsutils/invariant.js",
        "npm:graphql@14.0.2/jsutils/inspect.js",
        "npm:graphql@14.0.2/jsutils/instanceOf.js",
        "npm:graphql@14.0.2/jsutils/defineToStringTag.js",
        "npm:graphql@14.0.2/jsutils/defineToJSON.js",
        "npm:graphql@14.0.2/type/introspection.js",
        "npm:graphql@14.0.2/language/directiveLocation.js",
        "npm:graphql@14.0.2/type/scalars.js",
        "npm:graphql@14.0.2/jsutils/isInteger.js",
        "npm:graphql@14.0.2/jsutils/isFinite.js",
        "npm:graphql@14.0.2/language/printer.js",
        "npm:graphql@14.0.2/language/visitor.js",
        "npm:graphql@14.0.2/utilities/astFromValue.js",
        "npm:graphql@14.0.2/jsutils/objectValues.js",
        "npm:graphql@14.0.2/jsutils/isNullish.js",
        "npm:iterall@1.2.2/index.js",
        "npm:iterall@1.2.2.json",
        "npm:graphql@14.0.2/error/GraphQLError.js",
        "npm:graphql@14.0.2/language/location.js",
        "npm:graphql@14.0.2/error/printError.js",
        "npm:graphql@14.0.2/utilities/findBreakingChanges.js",
        "npm:graphql@14.0.2/utilities/assertValidName.js",
        "npm:graphql@14.0.2/utilities/typeComparators.js",
        "npm:graphql@14.0.2/utilities/separateOperations.js",
        "npm:graphql@14.0.2/utilities/concatAST.js",
        "npm:graphql@14.0.2/utilities/isValidLiteralValue.js",
        "npm:graphql@14.0.2/validation/ValidationContext.js",
        "npm:graphql@14.0.2/validation/rules/ValuesOfCorrectType.js",
        "npm:graphql@14.0.2/jsutils/suggestionList.js",
        "npm:graphql@14.0.2/jsutils/orList.js",
        "npm:graphql@14.0.2/type/schema.js",
        "npm:graphql@14.0.2/type/directives.js",
        "npm:graphql@14.0.2/utilities/isValidJSValue.js",
        "npm:graphql@14.0.2/utilities/coerceValue.js",
        "npm:graphql@14.0.2/utilities/valueFromAST.js",
        "npm:graphql@14.0.2/utilities/schemaPrinter.js",
        "npm:graphql@14.0.2/utilities/lexicographicSortSchema.js",
        "npm:graphql@14.0.2/utilities/extendSchema.js",
        "npm:graphql@14.0.2/language/predicates.js",
        "npm:graphql@14.0.2/validation/validate.js",
        "npm:graphql@14.0.2/validation/specifiedRules.js",
        "npm:graphql@14.0.2/validation/rules/LoneSchemaDefinition.js",
        "npm:graphql@14.0.2/validation/rules/UniqueInputFieldNames.js",
        "npm:graphql@14.0.2/validation/rules/OverlappingFieldsCanBeMerged.js",
        "npm:graphql@14.0.2/validation/rules/VariablesInAllowedPosition.js",
        "npm:graphql@14.0.2/validation/rules/ProvidedRequiredArguments.js",
        "npm:graphql@14.0.2/validation/rules/UniqueArgumentNames.js",
        "npm:graphql@14.0.2/validation/rules/KnownArgumentNames.js",
        "npm:graphql@14.0.2/jsutils/quotedOrList.js",
        "npm:graphql@14.0.2/validation/rules/UniqueDirectivesPerLocation.js",
        "npm:graphql@14.0.2/validation/rules/KnownDirectives.js",
        "npm:graphql@14.0.2/validation/rules/NoUnusedVariables.js",
        "npm:graphql@14.0.2/validation/rules/NoUndefinedVariables.js",
        "npm:graphql@14.0.2/validation/rules/UniqueVariableNames.js",
        "npm:graphql@14.0.2/validation/rules/NoFragmentCycles.js",
        "npm:graphql@14.0.2/validation/rules/PossibleFragmentSpreads.js",
        "npm:graphql@14.0.2/validation/rules/NoUnusedFragments.js",
        "npm:graphql@14.0.2/validation/rules/KnownFragmentNames.js",
        "npm:graphql@14.0.2/validation/rules/UniqueFragmentNames.js",
        "npm:graphql@14.0.2/validation/rules/FieldsOnCorrectType.js",
        "npm:graphql@14.0.2/validation/rules/ScalarLeafs.js",
        "npm:graphql@14.0.2/validation/rules/VariablesAreInputTypes.js",
        "npm:graphql@14.0.2/validation/rules/FragmentsOnCompositeTypes.js",
        "npm:graphql@14.0.2/validation/rules/KnownTypeNames.js",
        "npm:graphql@14.0.2/validation/rules/SingleFieldSubscriptions.js",
        "npm:graphql@14.0.2/validation/rules/LoneAnonymousOperation.js",
        "npm:graphql@14.0.2/validation/rules/UniqueOperationNames.js",
        "npm:graphql@14.0.2/validation/rules/ExecutableDefinitions.js",
        "npm:graphql@14.0.2/type/validate.js",
        "npm:graphql@14.0.2/utilities/buildASTSchema.js",
        "npm:graphql@14.0.2/execution/values.js",
        "npm:graphql@14.0.2/language/parser.js",
        "npm:graphql@14.0.2/language/lexer.js",
        "npm:graphql@14.0.2/language/blockStringValue.js",
        "npm:graphql@14.0.2/error/index.js",
        "npm:graphql@14.0.2/error/formatError.js",
        "npm:graphql@14.0.2/error/locatedError.js",
        "npm:graphql@14.0.2/error/syntaxError.js",
        "npm:graphql@14.0.2/language/source.js",
        "npm:graphql@14.0.2/utilities/buildClientSchema.js",
        "npm:graphql@14.0.2/utilities/introspectionFromSchema.js",
        "npm:graphql@14.0.2/execution/execute.js",
        "npm:graphql@14.0.2/utilities/getOperationRootType.js",
        "npm:graphql@14.0.2/jsutils/promiseReduce.js",
        "npm:graphql@14.0.2/jsutils/isPromise.js",
        "npm:graphql@14.0.2/jsutils/promiseForObject.js",
        "npm:graphql@14.0.2/jsutils/memoize3.js",
        "npm:graphql@14.0.2/utilities/introspectionQuery.js",
        "npm:graphql@14.0.2/utilities/getOperationAST.js",
        "npm:graphql@14.0.2/validation/index.js",
        "npm:graphql@14.0.2/subscription/index.js",
        "npm:graphql@14.0.2/subscription/subscribe.js",
        "npm:graphql@14.0.2/subscription/mapAsyncIterator.js",
        "npm:graphql@14.0.2/execution/index.js",
        "npm:graphql@14.0.2/language/index.js",
        "npm:graphql@14.0.2/type/index.js",
        "npm:graphql@14.0.2/graphql.js",
        "npm:graphiql@0.11.11/dist/utility/elementPosition.js",
        "npm:graphiql@0.11.11/dist/utility/fillLeafs.js",
        "npm:graphiql@0.11.11/dist/utility/find.js",
        "npm:graphiql@0.11.11/dist/utility/debounce.js",
        "npm:graphiql@0.11.11/dist/utility/getSelectedOperationName.js",
        "npm:graphiql@0.11.11/dist/utility/getQueryFacts.js",
        "npm:graphiql@0.11.11/dist/utility/StorageAPI.js",
        "npm:graphiql@0.11.11/dist/utility/CodeMirrorSizer.js",
        "npm:graphiql@0.11.11/dist/components/QueryHistory.js",
        "npm:graphiql@0.11.11/dist/components/HistoryQuery.js",
        "npm:graphiql@0.11.11/dist/utility/QueryStore.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/TypeDoc.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/DefaultValue.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/TypeLink.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/MarkdownContent.js",
        "npm:markdown-it@8.4.2/index.js",
        "npm:markdown-it@8.4.2.json",
        "npm:markdown-it@8.4.2/lib/index.js",
        "npm:markdown-it@8.4.2/lib/presets/commonmark.js",
        "npm:markdown-it@8.4.2/lib/presets/zero.js",
        "npm:markdown-it@8.4.2/lib/presets/default.js",
        "npm:mdurl@1.0.1/index.js",
        "npm:mdurl@1.0.1.json",
        "npm:mdurl@1.0.1/parse.js",
        "npm:mdurl@1.0.1/format.js",
        "npm:mdurl@1.0.1/decode.js",
        "npm:mdurl@1.0.1/encode.js",
        "npm:linkify-it@2.0.3/index.js",
        "npm:linkify-it@2.0.3.json",
        "npm:linkify-it@2.0.3/lib/re.js",
        "npm:uc.micro@1.0.5/categories/P/regex.js",
        "npm:uc.micro@1.0.5.json",
        "npm:uc.micro@1.0.5/categories/Z/regex.js",
        "npm:uc.micro@1.0.5/categories/Cc/regex.js",
        "npm:uc.micro@1.0.5/properties/Any/regex.js",
        "npm:markdown-it@8.4.2/lib/parser_inline.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/state_inline.js",
        "npm:markdown-it@8.4.2/lib/common/utils.js",
        "npm:uc.micro@1.0.5/index.js",
        "npm:uc.micro@1.0.5/categories/Cf/regex.js",
        "npm:markdown-it@8.4.2/lib/common/entities.js",
        "npm:entities@1.1.2/maps/entities.json",
        "npm:entities@1.1.2.json",
        "npm:markdown-it@8.4.2/lib/token.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/text_collapse.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/balance_pairs.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/entity.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/html_inline.js",
        "npm:markdown-it@8.4.2/lib/common/html_re.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/autolink.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/image.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/link.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/emphasis.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/strikethrough.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/backticks.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/escape.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/newline.js",
        "npm:markdown-it@8.4.2/lib/rules_inline/text.js",
        "npm:markdown-it@8.4.2/lib/ruler.js",
        "npm:markdown-it@8.4.2/lib/parser_block.js",
        "npm:markdown-it@8.4.2/lib/rules_block/state_block.js",
        "npm:markdown-it@8.4.2/lib/rules_block/paragraph.js",
        "npm:markdown-it@8.4.2/lib/rules_block/html_block.js",
        "npm:markdown-it@8.4.2/lib/common/html_blocks.js",
        "npm:markdown-it@8.4.2/lib/rules_block/lheading.js",
        "npm:markdown-it@8.4.2/lib/rules_block/heading.js",
        "npm:markdown-it@8.4.2/lib/rules_block/reference.js",
        "npm:markdown-it@8.4.2/lib/rules_block/list.js",
        "npm:markdown-it@8.4.2/lib/rules_block/hr.js",
        "npm:markdown-it@8.4.2/lib/rules_block/blockquote.js",
        "npm:markdown-it@8.4.2/lib/rules_block/fence.js",
        "npm:markdown-it@8.4.2/lib/rules_block/code.js",
        "npm:markdown-it@8.4.2/lib/rules_block/table.js",
        "npm:markdown-it@8.4.2/lib/parser_core.js",
        "npm:markdown-it@8.4.2/lib/rules_core/state_core.js",
        "npm:markdown-it@8.4.2/lib/rules_core/smartquotes.js",
        "npm:markdown-it@8.4.2/lib/rules_core/replacements.js",
        "npm:markdown-it@8.4.2/lib/rules_core/linkify.js",
        "npm:markdown-it@8.4.2/lib/rules_core/inline.js",
        "npm:markdown-it@8.4.2/lib/rules_core/block.js",
        "npm:markdown-it@8.4.2/lib/rules_core/normalize.js",
        "npm:markdown-it@8.4.2/lib/renderer.js",
        "npm:markdown-it@8.4.2/lib/helpers/index.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_title.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_destination.js",
        "npm:markdown-it@8.4.2/lib/helpers/parse_link_label.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/Argument.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SearchResults.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SearchBox.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/SchemaDoc.js",
        "npm:graphiql@0.11.11/dist/components/DocExplorer/FieldDoc.js",
        "npm:graphiql@0.11.11/dist/components/ResultViewer.js",
        "npm:codemirror-graphql@0.6.12/utils/info-addon.js",
        "npm:codemirror-graphql@0.6.12.json",
        "npm:codemirror@5.41.0/lib/codemirror.js",
        "npm:codemirror@5.41.0.json",
        "npm:codemirror-graphql@0.6.12/results/mode.js",
        "npm:graphql-language-service-parser@0.1.14/dist/index.js",
        "npm:graphql-language-service-parser@0.1.14.json",
        "npm:graphql-language-service-parser@0.1.14/dist/onlineParser.js",
        "npm:graphql-language-service-parser@0.1.14/dist/Rules.js",
        "npm:graphql-language-service-parser@0.1.14/dist/RuleHelpers.js",
        "npm:graphql-language-service-parser@0.1.14/dist/CharacterStream.js",
        "npm:codemirror@5.41.0/keymap/sublime.js",
        "npm:codemirror@5.41.0/addon/edit/matchbrackets.js",
        "npm:codemirror@5.41.0/addon/search/searchcursor.js",
        "npm:codemirror@5.41.0/addon/search/jump-to-line.js",
        "npm:codemirror@5.41.0/addon/dialog/dialog.js",
        "npm:codemirror@5.41.0/addon/search/search.js",
        "npm:codemirror@5.41.0/addon/fold/brace-fold.js",
        "npm:codemirror@5.41.0/addon/fold/foldgutter.js",
        "npm:codemirror@5.41.0/addon/fold/foldcode.js",
        "npm:graphiql@0.11.11/dist/components/VariableEditor.js",
        "npm:codemirror-graphql@0.6.12/variables/mode.js",
        "npm:codemirror-graphql@0.6.12/variables/lint.js",
        "npm:codemirror-graphql@0.6.12/utils/jsonParse.js",
        "npm:codemirror-graphql@0.6.12/variables/hint.js",
        "npm:codemirror-graphql@0.6.12/utils/hintList.js",
        "npm:codemirror-graphql@0.6.12/utils/forEachState.js",
        "npm:codemirror@5.41.0/addon/lint/lint.js",
        "npm:codemirror@5.41.0/addon/edit/closebrackets.js",
        "npm:codemirror@5.41.0/addon/hint/show-hint.js",
        "npm:graphiql@0.11.11/dist/utility/onHasCompletion.js",
        "npm:graphiql@0.11.11/dist/components/QueryEditor.js",
        "npm:codemirror-graphql@0.6.12/mode.js",
        "npm:codemirror-graphql@0.6.12/jump.js",
        "npm:codemirror-graphql@0.6.12/utils/jump-addon.js",
        "npm:codemirror-graphql@0.6.12/utils/SchemaReference.js",
        "npm:codemirror-graphql@0.6.12/utils/getTypeInfo.js",
        "npm:codemirror-graphql@0.6.12/info.js",
        "npm:codemirror-graphql@0.6.12/lint.js",
        "npm:graphql-language-service-interface@1.3.2/dist/index.js",
        "npm:graphql-language-service-interface@1.3.2.json",
        "npm:graphql-language-service-interface@1.3.2/dist/GraphQLLanguageService.js",
        "npm:graphql-language-service-utils@1.2.2/dist/index.js",
        "npm:graphql-language-service-utils@1.2.2.json",
        "npm:graphql-language-service-utils@1.2.2/dist/validateWithCustomRules.js",
        "npm:graphql-language-service-utils@1.2.2/dist/Range.js",
        "npm:graphql-language-service-utils@1.2.2/dist/getASTNodeAtPosition.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getDefinition.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getDiagnostics.js",
        "npm:graphql-language-service-parser@1.2.2/dist/index.js",
        "npm:graphql-language-service-parser@1.2.2.json",
        "npm:graphql-language-service-parser@1.2.2/dist/onlineParser.js",
        "npm:graphql-language-service-parser@1.2.2/dist/Rules.js",
        "npm:graphql-language-service-parser@1.2.2/dist/RuleHelpers.js",
        "npm:graphql-language-service-parser@1.2.2/dist/CharacterStream.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getHoverInformation.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getAutocompleteSuggestions.js",
        "npm:graphql-language-service-interface@1.3.2/dist/autocompleteUtils.js",
        "npm:graphql-language-service-interface@1.3.2/dist/getOutline.js",
        "npm:codemirror-graphql@0.6.12/hint.js",
        "npm:codemirror@5.41.0/addon/comment/comment.js",
        "npm:graphiql@0.11.11/dist/utility/normalizeWhitespace.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarSelect.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarMenu.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarGroup.js",
        "npm:graphiql@0.11.11/dist/components/ToolbarButton.js",
        "npm:graphiql@0.11.11/dist/components/ExecuteButton.js",
        "github:systemjs/plugin-css@0.1.37/css.js",
        "github:systemjs/plugin-css@0.1.37.json"
      ],
      "bundles/mmf_bundle.js": [
        "index.js",
        "client/script/mmf/getStore.js",
        "npm:redux-virtual-dom@0.9.3/dist/redux-virtual-dom.js",
        "npm:redux-virtual-dom@0.9.3.json",
        "npm:redux-first-routing@0.3.0/lib/index.js",
        "npm:redux-first-routing@0.3.0.json",
        "npm:redux-first-routing@0.3.0/lib/reducer.js",
        "npm:redux-first-routing@0.3.0/lib/constants.js",
        "npm:redux-first-routing@0.3.0/lib/middleware.js",
        "npm:redux-first-routing@0.3.0/lib/actions.js",
        "npm:query-string@5.1.1/index.js",
        "npm:query-string@5.1.1.json",
        "npm:decode-uri-component@0.2.0/index.js",
        "npm:decode-uri-component@0.2.0.json",
        "npm:redux-first-routing@0.3.0/lib/listener.js",
        "npm:redux-first-routing@0.3.0/lib/history.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/toConsumableArray.js",
        "client/script/mmf/WConnectUtil.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/get.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/defineProperty.js",
        "client/script/mmf/ScriptRunnerUtil.js",
        "client/script/mmf/RootLoader.js",
        "client/script/mmf/ReducerRegistry.js",
        "client/script/mmf/ElementUtil.js",
        "npm:universal-router@7.0.0/index.js",
        "npm:universal-router@7.0.0.json",
        "npm:path-to-regexp@2.4.0/index.js",
        "npm:path-to-regexp@2.4.0.json",
        "component/mmf/RouteComponent/Definition.js",
        "client/script/mmf/$script.js",
        "client/script/mmf/$qry.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js",
        "npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js",
        "client/script/mmf/PreviewLoader.js",
        "client/script/mmf/GraphQLDataUtil.js",
        "client/script/mmf/GetResourceData.js",
        "client/script/mmf/GetResolvedRoutes.js",
        "client/script/mmf/DesignerUtil.js",
        "client/script/mmf/DesignerConstants.js",
        "client/script/mmf/Connect2Store.js",
        "client/script/mmf/BlockDropDownDataUtil.js",
        "client/template/mmf/Vue.js",
        "npm:vue@2.5.21/dist/vue.js",
        "npm:vue@2.5.21.json",
        "client/template/mmf/Snabbdom.js",
        "npm:snabbdom@0.7.3/h.js",
        "npm:snabbdom@0.7.3.json",
        "npm:snabbdom@0.7.3/is.js",
        "npm:snabbdom@0.7.3/vnode.js",
        "npm:snabbdom@0.7.3/modules/eventlisteners.js",
        "npm:snabbdom@0.7.3/modules/style.js",
        "npm:snabbdom@0.7.3/modules/attributes.js",
        "npm:snabbdom@0.7.3/modules/props.js",
        "npm:snabbdom@0.7.3/modules/class.js",
        "npm:snabbdom@0.7.3/snabbdom.js",
        "npm:snabbdom@0.7.3/thunk.js",
        "npm:snabbdom@0.7.3/htmldomapi.js",
        "npm:snabbdom-jsx@0.4.2/snabbdom-jsx.js",
        "npm:snabbdom-jsx@0.4.2.json",
        "client/template/mmf/React.js",
        "npm:react-shadow@16.3.1/dist/react-shadow.js",
        "npm:react-shadow@16.3.1.json",
        "component/mmf/FileSyncMapperList/Definition.js",
        "client/script/persist/MMFAPI.js",
        "npm:react-table@6.8.6/react-table.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/FileSyncer/Definition.js",
        "component/mmf/FileSyncer/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/NewFileSyncConfig/Definition.js",
        "component/mmf/GridContainer/Definition.js",
        "component/mmf/Navigator/Definition.js",
        "component/mmf/GridContainer/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/HomePage/Definition.js",
        "component/mmf/HomePage/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/Link/Definition.js",
        "component/mmf/ListExample/Definition.js",
        "component/mmf/LoginPage/Definition.js",
        "component/mmf/LoginPage/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/MMF_API/Definition.js",
        "component/mmf/NewAction/Definition.js",
        "component/mmf/NewComponentRequires/Definition.js",
        "component/mmf/NewRelationship/Definition.js",
        "component/mmf/NewRoute/Definition.js",
        "component/mmf/NewRouteRequires/Definition.js",
        "component/mmf/NewState/Definition.js",
        "component/mmf/NewTemplate/Definition.js",
        "component/mmf/RegisterPage/Definition.js",
        "component/mmf/RegisterPage/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/ScriptRunner/Definition.js",
        "component/mmf/ScriptRunner/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/StateList/Definition.js"
      ],
      "bundles/studio_bundle.js": [
        "index.js",
        "client/script/studio/StudioUtil.js",
        "client/script/persist/MMFAPI.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/asyncToGenerator.js",
        "npm:systemjs-plugin-babel@0.0.25/regenerator-runtime.js",
        "client/script/studio/StudioFormUtil.js",
        "component/studio/IdeValidation/Definition.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js",
        "component/studio/IdeStateMapper/Definition.js",
        "component/studio/IdeStateMapper/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "client/script/mmf/DesignerConstants.js",
        "component/mmf/NewState/Definition.js",
        "component/studio/ErrorBoundary/Definition.js",
        "component/studio/ErrorBoundary/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "client/script/mmf/GraphQLDataUtil.js",
        "npm:react-icons@2.2.7/lib/fa/close.js",
        "npm:react-icons@2.2.7.json",
        "npm:react-table@6.8.6/react-table.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/studio/IdeFormFields/Definition.js",
        "component/studio/IdeDependency/Definition.js",
        "component/studio/IdeConsole/Definition.js",
        "component/studio/IdeActionMapper/Definition.js",
        "component/studio/IdeActionMapper/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/mmf/NewAction/Definition.js",
        "component/mmf/Navigator/Definition.js",
        "component/studio/AGraphiQLView/Definition.js",
        "component/studio/GraphiQLView/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/studio/GraphiQLView/Definition.js",
        "client/script/mmf/$qry.js",
        "npm:react-icons@2.2.7/lib/fa/arrow-circle-right.js",
        "npm:react-icons@2.2.7/lib/fa/arrow-circle-left.js",
        "component/studio/GraphiqlView/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js",
        "component/studio/GraphiqlView/Definition.js",
        "component/studio/PreviewErrorPage/Definition.js",
        "component/studio/SrsteeIDE/Definition.js"
      ],
      "bundles/blockly_bundle.js": [
        "index.js",
        "client/script/blockly/QueryBlocks.js",
        "client/script/blockly/QueryBlockGenerator.js",
        "client/script/blockly/PageBlocks.js",
        "client/script/blockly/PageBlockGenerator.js",
        "client/script/mmf/DesignerUtil.js",
        "client/script/mmf/DesignerConstants.js",
        "client/script/mmf/GraphQLDataUtil.js",
        "client/script/blockly/MapBlocks.js",
        "client/script/blockly/MapBlockGenerator.js",
        "client/script/blockly/LogicBlocks.js",
        "client/script/blockly/LogicBlockGenerator.js",
        "client/script/blockly/LoadToolbox.js",
        "client/script/blockly/InboundToolbox.js",
        "client/script/blockly/FlowBlocks.js",
        "client/script/blockly/DefaultToolbox.js",
        "client/script/blockly/DataBlocksEventHandlers.js",
        "client/script/blockly/DataBlocks.js",
        "client/script/blockly/DataBlockGenerator.js",
        "client/script/blockly/CoreToolbox.js",
        "client/script/blockly/Blocks.js",
        "component/blockly/BlocklyWorkspace/Definition.js",
        "component/blockly/BlocklyWorkspace/Style.css!github:systemjs/plugin-css@0.1.37/css.js",
        "component/blockly/BlocklyDrawer/Definition.js",
        "component/blockly/BlocklyToolbox/Definition.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/inherits.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/possibleConstructorReturn.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/createClass.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/classCallCheck.js",
        "npm:systemjs-plugin-babel@0.0.25/babel-helpers/extends.js",
        "npm:node-blockly@1.0.35/browser.js",
        "npm:node-blockly@1.0.35/lib/blocks_compressed_browser.js",
        "npm:node-blockly@1.0.35/lib/blockly_compressed_browser.js"
      ]
    }
  },
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  devConfig: {
    "map": {
      "carbon-components-react": "npm:carbon-components-react@7.3.2",
      "carbon-icons": "npm:carbon-icons@7.0.7",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "carbon-components": "npm:carbon-components@10.3.1",
      "babel-plugin-transform-custom-element-classes": "npm:babel-plugin-transform-custom-element-classes@0.1.0",
      "base64-js": "npm:base64-js@1.3.1",
      "downshift": "npm:downshift@1.31.16",
      "entities": "npm:entities@1.1.2",
      "graphql-lodash": "npm:graphql-lodash@1.3.4",
      "history": "npm:history@4.10.1",
      "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2",
      "ieee754": "npm:ieee754@1.1.13",
      "jquery-ui": "npm:jquery-ui@1.12.1",
      "jsdom": "npm:jsdom@11.12.0",
      "lodash.clonedeep": "npm:lodash.clonedeep@4.5.0",
      "lodash.set": "npm:lodash.set@4.3.2",
      "markdown-it": "npm:markdown-it@8.4.2",
      "react-flow-diagram": "npm:react-flow-diagram@2.13.0",
      "react-icons": "npm:react-icons@2.2.7",
      "react-materialize": "npm:react-materialize@latest",
      "react-transition-group": "npm:react-transition-group@2.9.0",
      "systemjs-plugin-vue": "npm:systemjs-plugin-vue@1.2.0",
      "tj/react-click-outside": "github:tj/react-click-outside@1.1.0",
      "warning": "npm:warning@4.0.3",
      "window-or-global": "npm:window-or-global@1.0.1",
      "xtend": "npm:xtend@4.0.2",
      "snabbdom": "npm:snabbdom@0.7.3",
      "flatpickr": "npm:flatpickr@4.6.1",
      "acorn-walk": "npm:acorn-walk@6.1.1",
      "browserify-zlib": "npm:browserify-zlib@0.2.0",
      "crypto-browserify": "npm:crypto-browserify@3.12.0",
      "iconv-lite": "npm:iconv-lite@0.4.24",
      "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5",
      "psl": "npm:psl@1.1.29",
      "tr46": "npm:tr46@1.0.1",
      "velocity-animate": "npm:velocity-animate@1.5.2",
      "@jspm/core": "npm:@jspm/core@1.1.1",
      "iterall": "npm:iterall@1.2.2"
    },
    "packages": {
      "npm:focus-trap-react@6.0.0": {
        "map": {
          "focus-trap": "npm:focus-trap@4.0.2"
        }
      },
      "npm:focus-trap@4.0.2": {
        "map": {
          "xtend": "npm:xtend@4.0.1",
          "tabbable": "npm:tabbable@3.1.2"
        }
      },
      "npm:carbon-components-react@7.3.2": {
        "map": {
          "flatpickr": "npm:flatpickr@4.6.1",
          "invariant": "npm:invariant@2.2.4",
          "classnames": "npm:classnames@2.2.6",
          "react-is": "npm:react-is@16.12.0",
          "warning": "npm:warning@3.0.0",
          "lodash.debounce": "npm:lodash.debounce@4.0.8",
          "lodash.isequal": "npm:lodash.isequal@4.5.0",
          "window-or-global": "npm:window-or-global@1.0.1",
          "downshift": "npm:downshift@1.31.16",
          "focus-trap-react": "npm:focus-trap-react@6.0.0",
          "lodash.omit": "npm:lodash.omit@4.5.0",
          "@carbon/icons-react": "npm:@carbon/icons-react@10.11.0"
        }
      },
      "npm:carbon-components@10.3.1": {
        "map": {
          "carbon-icons": "npm:carbon-icons@7.0.7",
          "flatpickr": "npm:flatpickr@4.6.1",
          "lodash.debounce": "npm:lodash.debounce@4.0.8",
          "warning": "npm:warning@3.0.0"
        }
      },
      "npm:babel-plugin-transform-custom-element-classes@0.1.0": {
        "map": {
          "babel-template": "npm:babel-template@6.26.0"
        }
      },
      "npm:react-flow-diagram@2.13.0": {
        "map": {
          "redux": "npm:redux@3.7.2",
          "react-redux": "npm:react-redux@5.1.1",
          "styled-components": "npm:styled-components@2.4.1"
        }
      },
      "npm:redux@3.7.2": {
        "map": {
          "lodash": "npm:lodash@4.17.20",
          "loose-envify": "npm:loose-envify@1.4.0",
          "symbol-observable": "npm:symbol-observable@1.2.0",
          "lodash-es": "npm:lodash-es@4.17.15"
        }
      },
      "npm:styled-components@2.4.1": {
        "map": {
          "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
          "supports-color": "npm:supports-color@3.2.3",
          "buffer": "npm:buffer@5.6.0",
          "prop-types": "npm:prop-types@15.7.2",
          "stylis": "npm:stylis@3.5.4",
          "fbjs": "npm:fbjs@0.8.17",
          "is-plain-object": "npm:is-plain-object@2.0.4",
          "css-to-react-native": "npm:css-to-react-native@2.3.2"
        }
      },
      "npm:systemjs-plugin-vue@1.2.0": {
        "map": {
          "lru-cache": "npm:lru-cache@4.1.5",
          "vue-template-compiler": "npm:vue-template-compiler@2.5.21",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "falafel": "npm:falafel@1.2.0",
          "cssnano": "npm:cssnano@3.10.0"
        }
      },
      "npm:vue-template-compiler@2.5.21": {
        "map": {
          "de-indent": "npm:de-indent@1.0.2",
          "he": "npm:he@1.2.0"
        }
      },
      "npm:postcss-selector-parser@2.2.3": {
        "map": {
          "indexes-of": "npm:indexes-of@1.0.1",
          "uniq": "npm:uniq@1.0.1",
          "flatten": "npm:flatten@1.0.2"
        }
      },
      "npm:postcss@5.2.18": {
        "map": {
          "js-base64": "npm:js-base64@2.5.0",
          "source-map": "npm:source-map@0.5.7",
          "supports-color": "npm:supports-color@3.2.3",
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:cssnano@3.10.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "has": "npm:has@1.0.3",
          "decamelize": "npm:decamelize@1.2.0",
          "object-assign": "npm:object-assign@4.1.1",
          "autoprefixer": "npm:autoprefixer@6.7.7",
          "defined": "npm:defined@1.0.0",
          "postcss-discard-overridden": "npm:postcss-discard-overridden@0.1.1",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "postcss-discard-empty": "npm:postcss-discard-empty@2.1.0",
          "postcss-discard-unused": "npm:postcss-discard-unused@2.2.3",
          "postcss-calc": "npm:postcss-calc@5.3.1",
          "postcss-minify-params": "npm:postcss-minify-params@1.2.2",
          "postcss-merge-longhand": "npm:postcss-merge-longhand@2.0.2",
          "postcss-normalize-charset": "npm:postcss-normalize-charset@1.1.1",
          "postcss-merge-idents": "npm:postcss-merge-idents@2.1.7",
          "postcss-reduce-initial": "npm:postcss-reduce-initial@1.0.1",
          "postcss-colormin": "npm:postcss-colormin@2.2.2",
          "postcss-convert-values": "npm:postcss-convert-values@2.6.1",
          "postcss-minify-selectors": "npm:postcss-minify-selectors@2.1.1",
          "postcss-discard-comments": "npm:postcss-discard-comments@2.0.4",
          "postcss-discard-duplicates": "npm:postcss-discard-duplicates@2.1.0",
          "postcss-reduce-idents": "npm:postcss-reduce-idents@2.4.0",
          "postcss-minify-font-values": "npm:postcss-minify-font-values@1.0.5",
          "postcss-merge-rules": "npm:postcss-merge-rules@2.1.2",
          "postcss-reduce-transforms": "npm:postcss-reduce-transforms@1.0.4",
          "postcss-ordered-values": "npm:postcss-ordered-values@2.2.3",
          "postcss-unique-selectors": "npm:postcss-unique-selectors@2.0.2",
          "postcss-filter-plugins": "npm:postcss-filter-plugins@2.0.3",
          "postcss-minify-gradients": "npm:postcss-minify-gradients@1.0.5",
          "postcss-zindex": "npm:postcss-zindex@2.2.0",
          "postcss-svgo": "npm:postcss-svgo@2.1.6",
          "postcss-normalize-url": "npm:postcss-normalize-url@3.0.8"
        }
      },
      "npm:falafel@1.2.0": {
        "map": {
          "isarray": "npm:isarray@0.0.1",
          "foreach": "npm:foreach@2.0.5",
          "object-keys": "npm:object-keys@1.1.1",
          "acorn": "npm:acorn@1.2.2"
        }
      },
      "npm:autoprefixer@6.7.7": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "normalize-range": "npm:normalize-range@0.1.2",
          "num2fraction": "npm:num2fraction@1.2.2",
          "browserslist": "npm:browserslist@1.7.7",
          "caniuse-db": "npm:caniuse-db@1.0.30000925"
        }
      },
      "npm:postcss-discard-overridden@0.1.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:browserslist@1.7.7": {
        "map": {
          "caniuse-db": "npm:caniuse-db@1.0.30000925",
          "electron-to-chromium": "npm:electron-to-chromium@1.3.96"
        }
      },
      "npm:postcss-discard-empty@2.1.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-discard-unused@2.2.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-calc@5.3.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
          "reduce-css-calc": "npm:reduce-css-calc@1.3.0"
        }
      },
      "npm:postcss-minify-params@1.2.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "alphanum-sort": "npm:alphanum-sort@1.0.2",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-merge-longhand@2.0.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-normalize-charset@1.1.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-merge-idents@2.1.7": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-reduce-initial@1.0.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-colormin@2.2.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "colormin": "npm:colormin@1.1.2"
        }
      },
      "npm:postcss-convert-values@2.6.1": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-minify-selectors@2.1.1": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "alphanum-sort": "npm:alphanum-sort@1.0.2"
        }
      },
      "npm:postcss-discard-comments@2.0.4": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-reduce-idents@2.4.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-discard-duplicates@2.1.0": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-minify-font-values@1.0.5": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-merge-rules@2.1.2": {
        "map": {
          "browserslist": "npm:browserslist@1.7.7",
          "postcss": "npm:postcss@5.2.18",
          "postcss-selector-parser": "npm:postcss-selector-parser@2.2.3",
          "vendors": "npm:vendors@1.0.2",
          "caniuse-api": "npm:caniuse-api@1.6.1"
        }
      },
      "npm:postcss-reduce-transforms@1.0.4": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-ordered-values@2.2.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-unique-selectors@2.0.2": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "alphanum-sort": "npm:alphanum-sort@1.0.2",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-filter-plugins@2.0.3": {
        "map": {
          "postcss": "npm:postcss@5.2.18"
        }
      },
      "npm:postcss-zindex@2.2.0": {
        "map": {
          "has": "npm:has@1.0.3",
          "postcss": "npm:postcss@5.2.18",
          "uniqs": "npm:uniqs@2.0.0"
        }
      },
      "npm:postcss-minify-gradients@1.0.5": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1"
        }
      },
      "npm:postcss-svgo@2.1.6": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "is-svg": "npm:is-svg@2.1.0",
          "svgo": "npm:svgo@0.7.2"
        }
      },
      "npm:postcss-normalize-url@3.0.8": {
        "map": {
          "postcss": "npm:postcss@5.2.18",
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "is-absolute-url": "npm:is-absolute-url@2.1.0",
          "normalize-url": "npm:normalize-url@1.9.1"
        }
      },
      "npm:is-svg@2.1.0": {
        "map": {
          "html-comment-regex": "npm:html-comment-regex@1.1.2"
        }
      },
      "npm:svgo@0.7.2": {
        "map": {
          "js-yaml": "npm:js-yaml@3.7.0",
          "coa": "npm:coa@1.0.4",
          "colors": "npm:colors@1.1.2",
          "mkdirp": "npm:mkdirp@0.5.1",
          "csso": "npm:csso@2.3.2",
          "sax": "npm:sax@1.2.4",
          "whet.extend": "npm:whet.extend@0.9.9"
        }
      },
      "npm:csso@2.3.2": {
        "map": {
          "source-map": "npm:source-map@0.5.7",
          "clap": "npm:clap@1.2.3"
        }
      },
      "npm:js-yaml@3.7.0": {
        "map": {
          "argparse": "npm:argparse@1.0.10",
          "esprima": "npm:esprima@2.7.3"
        }
      },
      "npm:normalize-url@1.9.1": {
        "map": {
          "object-assign": "npm:object-assign@4.1.1",
          "sort-keys": "npm:sort-keys@1.1.2",
          "prepend-http": "npm:prepend-http@1.0.4",
          "query-string": "npm:query-string@4.3.4"
        }
      },
      "npm:coa@1.0.4": {
        "map": {
          "q": "npm:q@1.5.1"
        }
      },
      "npm:clap@1.2.3": {
        "map": {
          "chalk": "npm:chalk@1.1.3"
        }
      },
      "npm:colormin@1.1.2": {
        "map": {
          "has": "npm:has@1.0.3",
          "color": "npm:color@0.11.4",
          "css-color-names": "npm:css-color-names@0.0.4"
        }
      },
      "npm:sort-keys@1.1.2": {
        "map": {
          "is-plain-obj": "npm:is-plain-obj@1.1.0"
        }
      },
      "npm:color@0.11.4": {
        "map": {
          "clone": "npm:clone@1.0.4",
          "color-string": "npm:color-string@0.3.0",
          "color-convert": "npm:color-convert@1.9.3"
        }
      },
      "npm:color-string@0.3.0": {
        "map": {
          "color-name": "npm:color-name@1.1.3"
        }
      },
      "npm:reduce-css-calc@1.3.0": {
        "map": {
          "balanced-match": "npm:balanced-match@0.4.2",
          "math-expression-evaluator": "npm:math-expression-evaluator@1.2.17",
          "reduce-function-call": "npm:reduce-function-call@1.0.2"
        }
      },
      "npm:caniuse-api@1.6.1": {
        "map": {
          "browserslist": "npm:browserslist@1.7.7",
          "caniuse-db": "npm:caniuse-db@1.0.30000925",
          "lodash.memoize": "npm:lodash.memoize@4.1.2",
          "lodash.uniq": "npm:lodash.uniq@4.5.0"
        }
      },
      "npm:reduce-function-call@1.0.2": {
        "map": {
          "balanced-match": "npm:balanced-match@0.4.2"
        }
      },
      "npm:graphql-lodash@1.3.4": {
        "map": {
          "graphql": "npm:graphql@0.11.7",
          "lodash-es": "npm:lodash-es@4.17.15"
        }
      },
      "npm:graphql@0.11.7": {
        "map": {
          "iterall": "npm:iterall@1.1.3"
        }
      },
      "npm:react-materialize@latest": {
        "map": {
          "classnames": "npm:classnames@2.2.6"
        }
      },
      "npm:react-icons@2.2.7": {
        "map": {
          "react-icon-base": "npm:react-icon-base@2.1.0"
        }
      },
      "npm:supports-color@3.2.3": {
        "map": {
          "has-flag": "npm:has-flag@1.0.0"
        }
      },
      "npm:css-to-react-native@2.3.2": {
        "map": {
          "postcss-value-parser": "npm:postcss-value-parser@3.3.1",
          "camelize": "npm:camelize@1.0.0",
          "css-color-keywords": "npm:css-color-keywords@1.0.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "blacklist": [],
    "plugins": [
      "jspm_packages/npm/babel-plugin-transform-custom-element-classes@0.1.0/lib/index",
      "jspm_packages/npm/babel-plugin-transform-es2015-classes@6.24.1/lib/index"
    ],
    "react": true,
    "stage1": true
  },
  packages: {
    "app": {
      "main": "app.js"
    },
    "npm:react-copy-to-clipboard@5.0.2": {
      "map": {
        "copy-to-clipboard": "npm:copy-to-clipboard@3.3.1",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:copy-to-clipboard@3.3.1": {
      "map": {
        "toggle-selection": "npm:toggle-selection@1.0.6"
      }
    }
  },
  map: {
    "/thirdpartylib": "mylib/",
    "react-copy-to-clipboard": "npm:react-copy-to-clipboard@5.0.2",
    "to-fast-properties": "npm:to-fast-properties@1.0.3",
    "pako": "npm:pako@1.0.11"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "memory-cache": "npm:memory-cache@0.2.0",
    "react-datasheet": "npm:react-datasheet@1.4.8",
    "inherits": "npm:inherits@2.0.3",
    "react-html-parser": "npm:react-html-parser@2.0.2",
    "side-channel": "npm:side-channel@1.0.2",
    "react-custom-scrollbars": "npm:react-custom-scrollbars@4.2.1",
    "deep-equal": "npm:deep-equal@2.0.3",
    "lodash": "npm:lodash@4.17.11",
    "react-is": "npm:react-is@16.12.0",
    "path-to-regexp": "npm:path-to-regexp@1.8.0",
    "tiny-invariant": "npm:tiny-invariant@1.1.0",
    "deepmerge": "npm:deepmerge@4.2.2",
    "core-js": "npm:core-js@2.6.11",
    "graphql-language-service-interface": "npm:graphql-language-service-interface@1.3.2",
    "@babel/runtime": "npm:@babel/runtime@7.8.7",
    "react-trello": "npm:react-trello@2.2.5",
    "redux-actions": "npm:redux-actions@2.6.5",
    "redux-logger": "npm:redux-logger@3.0.6",
    "styled-components": "npm:styled-components@5.1.0",
    "stylis": "npm:stylis@3.5.4",
    "graphql-language-service-parser": "npm:graphql-language-service-parser@1.5.2",
    "@carbon/icons-react": "npm:@carbon/icons-react@10.11.0",
    "redux": "npm:redux@4.0.5",
    "apollo-cache-inmemory": "npm:apollo-cache-inmemory@1.6.6",
    "codemirror": "npm:codemirror@5.51.0",
    "jquery": "npm:jquery@3.5.1",
    "react": "npm:react@16.13.1",
    "react-dom": "npm:react-dom@16.13.1",
    "react-redux": "npm:react-redux@5.1.1",
    "babel-template": "npm:babel-template@6.26.0",
    "@types/async": "npm:@types/async@2.0.50",
    "apollo-client": "npm:apollo-client@2.4.8",
    "babel": "npm:babel-core@5.8.38",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "graphql": "npm:graphql@14.6.0",
    "prop-types": "npm:prop-types@15.7.2",
    "classnames": "npm:classnames@2.2.6",
    "systemjs-plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "acorn": "npm:acorn@6.1.1",
    "debug": "npm:debug@2.6.9",
    "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
    "redux-virtual-dom": "npm:redux-virtual-dom@0.9.3",
    "apollo-upload-client": "npm:apollo-upload-client@10.0.0",
    "react-apollo": "npm:react-apollo@2.3.3",
    "graphql-tag": "npm:graphql-tag@2.10.0",
    "snabbdom-jsx": "npm:snabbdom-jsx@0.4.2",
    "strip-ansi": "npm:strip-ansi@3.0.1",
    "re-resizable": "npm:re-resizable@4.11.0",
    "react-rnd": "npm:react-rnd@9.0.4",
    "react-draggable": "npm:react-draggable@3.1.1",
    "react-render-html": "npm:react-render-html@0.6.0",
    "quill-render": "npm:quill-render@1.0.5",
    "quill": "npm:quill@1.3.6",
    "react-shadow-dom-retarget-events": "npm:react-shadow-dom-retarget-events@1.0.8",
    "react-shadow": "npm:react-shadow@16.3.1",
    "react-table": "npm:react-table@6.8.6",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "react-icon-base": "npm:react-icon-base@2.1.0",
    "bufferutil": "npm:bufferutil@3.0.0",
    "ajv": "npm:ajv@6.5.5",
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
    "bootstrap": "npm:bootstrap@4.1.3",
    "brace": "npm:brace@0.11.1",
    "clipboard": "npm:clipboard@1.7.1",
    "cluster": "npm:jspm-nodelibs-cluster@0.2.1",
    "console": "npm:jspm-nodelibs-console@0.2.3",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "css": "github:systemjs/plugin-css@0.1.37",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.1",
    "dns": "npm:jspm-nodelibs-dns@0.2.1",
    "domain": "npm:jspm-nodelibs-domain@0.2.1",
    "draft-js": "npm:draft-js@0.10.5",
    "fsevents": "npm:fsevents@1.2.4",
    "graphiql": "npm:graphiql@0.11.11",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.2",
    "immutability-helper": "npm:immutability-helper@2.9.1",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "material-ui": "npm:material-ui@0.20.2",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "namor": "npm:namor@1.1.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "node-blockly": "npm:node-blockly@1.0.35",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "popper.js": "npm:popper.js@1.14.5",
    "punycode": "npm:jspm-nodelibs-punycode@0.2.1",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.2",
    "react-ace": "npm:react-ace@6.2.0",
    "react-addons": "npm:react-addons@0.9.1-deprecated",
    "react-calendar-heatmap": "npm:react-calendar-heatmap@1.7.0",
    "react-data-grid": "npm:react-data-grid@3.0.8",
    "react-download-link": "npm:react-download-link@2.2.0",
    "react-downloadbutton": "npm:react-downloadbutton@1.0.0",
    "react-grid-layout": "npm:react-grid-layout@0.16.6",
    "react-hot-loader": "npm:react-hot-loader@4.4.0",
    "react-live": "npm:react-live@1.12.0",
    "react-monaco": "npm:react-monaco@0.1.0-alpha.0",
    "react-monaco-editor": "npm:react-monaco-editor@0.14.1",
    "react-router": "npm:react-router@3.2.6",
    "react-router-config": "npm:react-router-config@1.0.0-beta.4",
    "react-router-dom": "npm:react-router-dom@4.3.1",
    "react-scrollable-list-view": "npm:react-scrollable-list-view@2.0.1",
    "react-select": "npm:react-select@1.3.0",
    "react-treebeard": "npm:react-treebeard@2.1.0",
    "react-wait-for-it": "npm:react-wait-for-it@0.0.4",
    "readline": "npm:jspm-nodelibs-readline@0.2.1",
    "redux-connect": "npm:redux-connect@5.1.0",
    "repl": "npm:jspm-nodelibs-repl@0.2.1",
    "request": "npm:request@2.88.0",
    "source-map": "npm:source-map@0.6.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.2",
    "timers": "npm:jspm-nodelibs-timers@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "tty": "npm:jspm-nodelibs-tty@0.2.1",
    "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "utf-8-validate": "npm:utf-8-validate@4.0.0",
    "v-runtime-template": "npm:v-runtime-template@1.5.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "vue": "npm:vue@2.5.21",
    "webpack": "npm:webpack@3.12.0",
    "ws": "npm:ws@5.2.2",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3",
    "universal-router": "npm:universal-router@7.0.0",
    "redux-first-routing": "npm:redux-first-routing@0.3.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2"
  },
  packages: {
    "npm:acorn@5.7.3": {
      "map": {}
    },
    "npm:ajv@6.5.5": {
      "map": {
        "fast-deep-equal": "npm:fast-deep-equal@2.0.1",
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "json-schema-traverse": "npm:json-schema-traverse@0.4.1",
        "uri-js": "npm:uri-js@4.2.2"
      }
    },
    "npm:entities@1.1.2": {
      "map": {}
    },
    "npm:estraverse@4.2.0": {
      "map": {}
    },
    "npm:json-schema-traverse@0.4.1": {
      "map": {}
    },
    "npm:punycode@1.4.1": {
      "map": {}
    },
    "npm:punycode@2.1.1": {
      "map": {}
    },
    "npm:sax@1.2.4": {
      "map": {}
    },
    "npm:source-map@0.6.1": {
      "map": {}
    },
    "npm:uri-js@4.2.2": {
      "map": {
        "punycode": "npm:punycode@2.1.1"
      }
    },
    "npm:jspm-nodelibs-punycode@0.2.1": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:react-download-link@2.2.0": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:react-wait-for-it@0.0.4": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "react": "npm:react@16.13.1",
        "react-dom": "npm:react-dom@16.13.1",
        "webpack": "npm:webpack@3.12.0"
      }
    },
    "npm:react-treebeard@2.1.0": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "shallowequal": "npm:shallowequal@0.2.2",
        "deep-equal": "npm:deep-equal@1.0.1",
        "velocity-react": "npm:velocity-react@1.4.1",
        "radium": "npm:radium@0.19.6"
      }
    },
    "npm:react-monaco-editor@0.14.1": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "monaco-editor": "npm:monaco-editor@0.10.1"
      }
    },
    "npm:redux-connect@5.1.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "redux-actions": "npm:redux-actions@2.6.5"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2",
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:react-router-dom@4.3.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "invariant": "npm:invariant@2.2.4",
        "react-router": "npm:react-router@4.3.1",
        "warning": "npm:warning@4.0.3",
        "history": "npm:history@4.10.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.2": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-domain@0.2.1": {
      "map": {
        "domain-browser": "npm:domain-browser@1.2.0"
      }
    },
    "npm:jspm-nodelibs-timers@0.2.1": {
      "map": {
        "timers-browserify": "npm:timers-browserify@1.4.2"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.12.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.8.3"
      }
    },
    "npm:react-monaco@0.1.0-alpha.0": {
      "map": {
        "monaco-editor": "npm:monaco-editor@0.8.3"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:@babel/runtime@7.0.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.12.1"
      }
    },
    "npm:clipboard@1.7.1": {
      "map": {
        "select": "npm:select@1.1.2",
        "good-listener": "npm:good-listener@1.2.2",
        "tiny-emitter": "npm:tiny-emitter@2.0.2"
      }
    },
    "npm:fsevents@1.2.4": {
      "map": {
        "node-pre-gyp": "npm:node-pre-gyp@0.10.3",
        "nan": "npm:nan@2.11.1"
      }
    },
    "npm:graphiql@0.11.11": {
      "map": {
        "codemirror": "npm:codemirror@5.51.0",
        "codemirror-graphql": "npm:codemirror-graphql@0.6.12",
        "markdown-it": "npm:markdown-it@8.4.2"
      }
    },
    "npm:history@3.3.0": {
      "map": {
        "invariant": "npm:invariant@2.2.4",
        "warning": "npm:warning@3.0.0",
        "loose-envify": "npm:loose-envify@1.4.0",
        "query-string": "npm:query-string@4.3.4"
      }
    },
    "npm:react-hot-loader@4.4.0": {
      "map": {
        "shallowequal": "npm:shallowequal@1.1.0",
        "source-map": "npm:source-map@0.7.3",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "prop-types": "npm:prop-types@15.7.2",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "global": "npm:global@4.3.2"
      }
    },
    "npm:babel-helper-define-map@6.26.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:stream-http@2.8.3": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "xtend": "npm:xtend@4.0.2",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:babel-template@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.20",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:crypto-browserify@3.12.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.1",
        "randombytes": "npm:randombytes@2.1.0",
        "randomfill": "npm:randomfill@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "public-encrypt": "npm:public-encrypt@4.0.3",
        "create-hmac": "npm:create-hmac@1.1.7",
        "browserify-sign": "npm:browserify-sign@4.2.0",
        "create-ecdh": "npm:create-ecdh@4.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "diffie-hellman": "npm:diffie-hellman@5.0.3"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:react-select@1.3.0": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2",
        "react-input-autosize": "npm:react-input-autosize@2.2.1"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
      }
    },
    "npm:react-transition-group@1.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@3.0.0",
        "chain-function": "npm:chain-function@1.0.1",
        "dom-helpers": "npm:dom-helpers@3.4.0"
      }
    },
    "npm:babel-types@6.26.0": {
      "map": {
        "to-fast-properties": "npm:to-fast-properties@1.0.3",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "esutils": "npm:esutils@2.0.3",
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:babel-traverse@6.26.0": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "invariant": "npm:invariant@2.2.4",
        "lodash": "npm:lodash@4.17.20",
        "globals": "npm:globals@9.18.0",
        "babel-code-frame": "npm:babel-code-frame@6.26.0",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:velocity-react@1.4.1": {
      "map": {
        "react-transition-group": "npm:react-transition-group@2.9.0",
        "lodash": "npm:lodash@4.17.20",
        "prop-types": "npm:prop-types@15.7.2",
        "velocity-animate": "npm:velocity-animate@1.5.2"
      }
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:react-router@4.3.1": {
      "map": {
        "history": "npm:history@4.10.1",
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@4.0.3",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
        "path-to-regexp": "npm:path-to-regexp@1.8.0"
      }
    },
    "npm:radium@0.19.6": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "exenv": "npm:exenv@1.2.2",
        "array-find": "npm:array-find@1.0.0",
        "inline-style-prefixer": "npm:inline-style-prefixer@2.0.5"
      }
    },
    "npm:material-ui@0.20.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-transition-group": "npm:react-transition-group@1.2.1",
        "warning": "npm:warning@3.0.0",
        "lodash.throttle": "npm:lodash.throttle@4.1.1",
        "simple-assign": "npm:simple-assign@0.1.0",
        "keycode": "npm:keycode@2.2.0",
        "inline-style-prefixer": "npm:inline-style-prefixer@3.0.8",
        "react-event-listener": "npm:react-event-listener@0.6.4",
        "lodash.merge": "npm:lodash.merge@4.6.1",
        "recompose": "npm:recompose@0.26.0"
      }
    },
    "npm:node-pre-gyp@0.10.3": {
      "map": {
        "semver": "npm:semver@5.6.0",
        "detect-libc": "npm:detect-libc@1.0.3",
        "npm-packlist": "npm:npm-packlist@1.1.12",
        "mkdirp": "npm:mkdirp@0.5.1",
        "nopt": "npm:nopt@4.0.1",
        "npmlog": "npm:npmlog@4.1.2",
        "rimraf": "npm:rimraf@2.6.2",
        "rc": "npm:rc@1.2.8",
        "needle": "npm:needle@2.2.4",
        "tar": "npm:tar@4.4.8"
      }
    },
    "npm:query-string@4.3.4": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:timers-browserify@1.4.2": {
      "map": {
        "process": "npm:process@0.11.10"
      }
    },
    "npm:shallowequal@0.2.2": {
      "map": {
        "lodash.keys": "npm:lodash.keys@3.1.2"
      }
    },
    "npm:good-listener@1.2.2": {
      "map": {
        "delegate": "npm:delegate@3.2.0"
      }
    },
    "npm:webpack@3.12.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "supports-color": "npm:supports-color@4.5.0",
        "acorn": "npm:acorn@5.7.3",
        "ajv": "npm:ajv@6.5.5",
        "json5": "npm:json5@0.5.1",
        "source-map": "npm:source-map@0.5.7",
        "loader-runner": "npm:loader-runner@2.3.1",
        "acorn-dynamic-import": "npm:acorn-dynamic-import@2.0.2",
        "memory-fs": "npm:memory-fs@0.4.1",
        "json-loader": "npm:json-loader@0.5.7",
        "webpack-sources": "npm:webpack-sources@1.3.0",
        "tapable": "npm:tapable@0.2.8",
        "node-libs-browser": "npm:node-libs-browser@2.1.0",
        "watchpack": "npm:watchpack@1.6.0",
        "escope": "npm:escope@3.6.0",
        "loader-utils": "npm:loader-utils@1.1.0",
        "interpret": "npm:interpret@1.1.0",
        "enhanced-resolve": "npm:enhanced-resolve@3.4.1",
        "ajv-keywords": "npm:ajv-keywords@3.2.0",
        "async": "npm:async@2.6.1",
        "uglifyjs-webpack-plugin": "npm:uglifyjs-webpack-plugin@0.4.6",
        "yargs": "npm:yargs@8.0.2"
      }
    },
    "npm:markdown-it@8.4.2": {
      "map": {
        "entities": "npm:entities@1.1.2",
        "uc.micro": "npm:uc.micro@1.0.6",
        "mdurl": "npm:mdurl@1.0.1",
        "linkify-it": "npm:linkify-it@2.2.0",
        "argparse": "npm:argparse@1.0.10"
      }
    },
    "npm:debug@2.6.9": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:create-hash@1.2.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "md5.js": "npm:md5.js@1.3.5",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:randomfill@1.0.4": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:babel-code-frame@6.26.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@3.0.2",
        "esutils": "npm:esutils@2.0.3"
      }
    },
    "npm:global@4.3.2": {
      "map": {
        "process": "npm:process@0.5.2",
        "min-document": "npm:min-document@2.19.0",
        "node-min-document": "npm:min-document@2.19.0"
      }
    },
    "npm:create-hmac@1.1.7": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "cipher-base": "npm:cipher-base@1.0.4",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:react-input-autosize@2.2.1": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:public-encrypt@4.0.3": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "randombytes": "npm:randombytes@2.1.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.5",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:dom-helpers@3.4.0": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.8.7"
      }
    },
    "npm:diffie-hellman@5.0.3": {
      "map": {
        "randombytes": "npm:randombytes@2.1.0",
        "miller-rabin": "npm:miller-rabin@4.0.1",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:pbkdf2@3.0.17": {
      "map": {
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "ripemd160": "npm:ripemd160@2.0.2",
        "sha.js": "npm:sha.js@2.4.11"
      }
    },
    "npm:react-event-listener@0.6.4": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.0.0",
        "prop-types": "npm:prop-types@15.7.2",
        "warning": "npm:warning@4.0.3"
      }
    },
    "npm:recompose@0.26.0": {
      "map": {
        "fbjs": "npm:fbjs@0.8.17",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@2.5.5",
        "change-emitter": "npm:change-emitter@0.1.6"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:supports-color@4.5.0": {
      "map": {
        "has-flag": "npm:has-flag@2.0.0"
      }
    },
    "npm:codemirror-graphql@0.6.12": {
      "map": {
        "graphql-language-service-parser": "npm:graphql-language-service-parser@0.1.14",
        "graphql-language-service-interface": "npm:graphql-language-service-interface@1.3.2"
      }
    },
    "npm:to-camel-case@1.0.0": {
      "map": {
        "to-space-case": "npm:to-space-case@1.0.0"
      }
    },
    "npm:browserify-cipher@1.0.1": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "browserify-des": "npm:browserify-des@1.0.2"
      }
    },
    "npm:rc@1.2.8": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "strip-json-comments": "npm:strip-json-comments@2.0.1",
        "ini": "npm:ini@1.3.5",
        "deep-extend": "npm:deep-extend@0.6.0"
      }
    },
    "npm:lodash.keys@3.1.2": {
      "map": {
        "lodash._getnative": "npm:lodash._getnative@3.9.1",
        "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
        "lodash.isarray": "npm:lodash.isarray@3.0.4"
      }
    },
    "npm:tar@4.4.8": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "chownr": "npm:chownr@1.1.1",
        "minizlib": "npm:minizlib@1.1.1",
        "yallist": "npm:yallist@3.0.2",
        "fs-minipass": "npm:fs-minipass@1.2.5",
        "minipass": "npm:minipass@2.3.5"
      }
    },
    "npm:needle@2.2.4": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "iconv-lite": "npm:iconv-lite@0.4.24",
        "sax": "npm:sax@1.2.4"
      }
    },
    "npm:inline-style-prefixer@2.0.5": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2",
        "bowser": "npm:bowser@1.9.4"
      }
    },
    "npm:inline-style-prefixer@3.0.8": {
      "map": {
        "css-in-js-utils": "npm:css-in-js-utils@2.0.1",
        "bowser": "npm:bowser@1.9.4"
      }
    },
    "npm:npm-packlist@1.1.12": {
      "map": {
        "ignore-walk": "npm:ignore-walk@3.0.1",
        "npm-bundled": "npm:npm-bundled@1.0.5"
      }
    },
    "npm:create-ecdh@4.0.3": {
      "map": {
        "elliptic": "npm:elliptic@6.5.2",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:nopt@4.0.1": {
      "map": {
        "abbrev": "npm:abbrev@1.1.1",
        "osenv": "npm:osenv@0.1.5"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "supports-color": "npm:supports-color@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:memory-fs@0.4.1": {
      "map": {
        "errno": "npm:errno@0.1.7",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:webpack-sources@1.3.0": {
      "map": {
        "source-map": "npm:source-map@0.6.1",
        "source-list-map": "npm:source-list-map@2.0.1"
      }
    },
    "npm:npmlog@4.1.2": {
      "map": {
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "set-blocking": "npm:set-blocking@2.0.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.5",
        "gauge": "npm:gauge@2.7.4"
      }
    },
    "npm:node-libs-browser@2.1.0": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.2.0",
        "buffer": "npm:buffer@4.9.1",
        "timers-browserify": "npm:timers-browserify@2.0.10",
        "crypto-browserify": "npm:crypto-browserify@3.12.0",
        "domain-browser": "npm:domain-browser@1.2.0",
        "os-browserify": "npm:os-browserify@0.3.0",
        "process": "npm:process@0.11.10",
        "punycode": "npm:punycode@1.4.1",
        "stream-browserify": "npm:stream-browserify@2.0.2",
        "stream-http": "npm:stream-http@2.8.3",
        "url": "npm:url@0.11.0",
        "string_decoder": "npm:string_decoder@1.1.1",
        "path-browserify": "npm:path-browserify@0.0.0",
        "constants-browserify": "npm:constants-browserify@1.0.0",
        "https-browserify": "npm:https-browserify@1.0.0",
        "querystring-es3": "npm:querystring-es3@0.2.1",
        "console-browserify": "npm:console-browserify@1.1.0",
        "events": "npm:events@1.1.1",
        "assert": "npm:assert@1.4.1",
        "util": "npm:util@0.10.3",
        "vm-browserify": "npm:vm-browserify@0.0.4",
        "tty-browserify": "npm:tty-browserify@0.0.0",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:loader-utils@1.1.0": {
      "map": {
        "json5": "npm:json5@0.5.1",
        "emojis-list": "npm:emojis-list@2.1.0",
        "big.js": "npm:big.js@3.2.0"
      }
    },
    "npm:escope@3.6.0": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "esrecurse": "npm:esrecurse@4.2.1",
        "es6-weak-map": "npm:es6-weak-map@2.0.2",
        "es6-map": "npm:es6-map@0.1.5"
      }
    },
    "npm:enhanced-resolve@3.4.1": {
      "map": {
        "memory-fs": "npm:memory-fs@0.4.1",
        "object-assign": "npm:object-assign@4.1.1",
        "tapable": "npm:tapable@0.2.8",
        "graceful-fs": "npm:graceful-fs@4.1.15"
      }
    },
    "npm:async@2.6.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:acorn-dynamic-import@2.0.2": {
      "map": {
        "acorn": "npm:acorn@4.0.13"
      }
    },
    "npm:uglifyjs-webpack-plugin@0.4.6": {
      "map": {
        "source-map": "npm:source-map@0.5.7",
        "webpack-sources": "npm:webpack-sources@1.3.0",
        "uglify-js": "npm:uglify-js@2.8.29"
      }
    },
    "npm:yargs@8.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "require-main-filename": "npm:require-main-filename@1.0.1",
        "camelcase": "npm:camelcase@4.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "os-locale": "npm:os-locale@2.1.0",
        "which-module": "npm:which-module@2.0.0",
        "string-width": "npm:string-width@2.1.1",
        "read-pkg-up": "npm:read-pkg-up@2.0.0",
        "get-caller-file": "npm:get-caller-file@1.0.3",
        "y18n": "npm:y18n@3.2.1",
        "require-directory": "npm:require-directory@2.1.1",
        "cliui": "npm:cliui@3.2.0",
        "yargs-parser": "npm:yargs-parser@7.0.0"
      }
    },
    "npm:rimraf@2.6.2": {
      "map": {
        "glob": "npm:glob@7.1.3"
      }
    },
    "npm:graphql-language-service-interface@1.3.2": {
      "map": {
        "graphql-language-service-parser": "npm:graphql-language-service-parser@1.5.2",
        "graphql-config": "npm:graphql-config@2.0.1",
        "graphql-language-service-utils": "npm:graphql-language-service-utils@1.2.2",
        "graphql-language-service-types": "npm:graphql-language-service-types@1.5.2"
      }
    },
    "npm:md5.js@1.3.5": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:browserify-aes@1.2.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:ripemd160@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "hash-base": "npm:hash-base@3.1.0"
      }
    },
    "npm:browserify-des@1.0.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "des.js": "npm:des.js@1.0.1"
      }
    },
    "npm:sha.js@2.4.11": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:evp_bytestokey@1.0.3": {
      "map": {
        "md5.js": "npm:md5.js@1.3.5",
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:watchpack@1.6.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.15",
        "chokidar": "npm:chokidar@2.0.4",
        "neo-async": "npm:neo-async@2.6.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.9",
        "randombytes": "npm:randombytes@2.1.0"
      }
    },
    "npm:is-plain-object@2.0.4": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:miller-rabin@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.9",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:css-in-js-utils@2.0.1": {
      "map": {
        "hyphenate-style-name": "npm:hyphenate-style-name@1.0.2",
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:min-document@2.19.0": {
      "map": {
        "dom-walk": "npm:dom-walk@0.1.1"
      }
    },
    "npm:osenv@0.1.5": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:to-space-case@1.0.0": {
      "map": {
        "to-no-case": "npm:to-no-case@1.0.2"
      }
    },
    "npm:argparse@1.0.10": {
      "map": {
        "sprintf-js": "npm:sprintf-js@1.0.3"
      }
    },
    "npm:browserify-zlib@0.2.0": {
      "map": {
        "pako": "npm:pako@1.0.11"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "base64-js": "npm:base64-js@1.3.1",
        "ieee754": "npm:ieee754@1.1.13",
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:timers-browserify@2.0.10": {
      "map": {
        "setimmediate": "npm:setimmediate@1.0.5"
      }
    },
    "npm:graphql-language-service-parser@0.1.14": {
      "map": {
        "graphql-language-service-types": "npm:graphql-language-service-types@0.1.14"
      }
    },
    "npm:are-we-there-yet@1.1.5": {
      "map": {
        "delegates": "npm:delegates@1.0.0",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:gauge@2.7.4": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "object-assign": "npm:object-assign@4.1.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "has-unicode": "npm:has-unicode@2.0.1",
        "wide-align": "npm:wide-align@1.1.3",
        "aproba": "npm:aproba@1.2.0",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:minizlib@1.1.1": {
      "map": {
        "minipass": "npm:minipass@2.3.5"
      }
    },
    "npm:glob@7.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimatch": "npm:minimatch@3.0.4",
        "fs.realpath": "npm:fs.realpath@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6"
      }
    },
    "npm:minipass@2.3.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "yallist": "npm:yallist@3.0.2"
      }
    },
    "npm:fs-minipass@1.2.5": {
      "map": {
        "minipass": "npm:minipass@2.3.5"
      }
    },
    "npm:ignore-walk@3.0.1": {
      "map": {
        "minimatch": "npm:minimatch@3.0.4"
      }
    },
    "npm:assert@1.4.1": {
      "map": {
        "util": "npm:util@0.10.3"
      }
    },
    "npm:esrecurse@4.2.1": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0"
      }
    },
    "npm:chokidar@2.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "glob-parent": "npm:glob-parent@3.1.0",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "normalize-path": "npm:normalize-path@2.1.1",
        "readdirp": "npm:readdirp@2.2.1",
        "async-each": "npm:async-each@1.0.1",
        "braces": "npm:braces@2.3.2",
        "anymatch": "npm:anymatch@2.0.0",
        "is-glob": "npm:is-glob@4.0.0",
        "upath": "npm:upath@1.1.0"
      }
    },
    "npm:string-width@2.1.1": {
      "map": {
        "strip-ansi": "npm:strip-ansi@4.0.0",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@2.0.0"
      }
    },
    "npm:cliui@3.2.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "wrap-ansi": "npm:wrap-ansi@2.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:yargs-parser@7.0.0": {
      "map": {
        "camelcase": "npm:camelcase@4.1.0"
      }
    },
    "npm:uglify-js@2.8.29": {
      "map": {
        "yargs": "npm:yargs@3.10.0",
        "source-map": "npm:source-map@0.5.7"
      }
    },
    "npm:graphql-language-service-utils@1.2.2": {
      "map": {
        "graphql-config": "npm:graphql-config@2.0.1",
        "graphql-language-service-types": "npm:graphql-language-service-types@1.5.2"
      }
    },
    "npm:graphql-config@2.0.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "minimatch": "npm:minimatch@3.0.4",
        "graphql-request": "npm:graphql-request@1.8.2",
        "js-yaml": "npm:js-yaml@3.14.0",
        "graphql-import": "npm:graphql-import@0.4.5"
      }
    },
    "npm:errno@0.1.7": {
      "map": {
        "prr": "npm:prr@1.0.1"
      }
    },
    "npm:console-browserify@1.1.0": {
      "map": {
        "date-now": "npm:date-now@0.1.4"
      }
    },
    "npm:vm-browserify@0.0.4": {
      "map": {
        "indexof": "npm:indexof@0.0.1"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.1.0"
      }
    },
    "npm:es6-weak-map@2.0.2": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "es5-ext": "npm:es5-ext@0.10.46"
      }
    },
    "npm:es6-map@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-set": "npm:es6-set@0.1.5",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5",
        "es5-ext": "npm:es5-ext@0.10.46"
      }
    },
    "npm:read-pkg-up@2.0.0": {
      "map": {
        "find-up": "npm:find-up@2.1.0",
        "read-pkg": "npm:read-pkg@2.0.0"
      }
    },
    "npm:os-locale@2.1.0": {
      "map": {
        "lcid": "npm:lcid@1.0.0",
        "mem": "npm:mem@1.1.0",
        "execa": "npm:execa@0.7.0"
      }
    },
    "npm:util@0.10.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:wide-align@1.1.3": {
      "map": {
        "string-width": "npm:string-width@2.1.1"
      }
    },
    "npm:strip-ansi@4.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@3.0.0"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:yargs@3.10.0": {
      "map": {
        "camelcase": "npm:camelcase@1.2.1",
        "cliui": "npm:cliui@2.1.0",
        "decamelize": "npm:decamelize@1.2.0",
        "window-size": "npm:window-size@0.1.0"
      }
    },
    "npm:glob-parent@3.1.0": {
      "map": {
        "is-glob": "npm:is-glob@3.1.0",
        "path-dirname": "npm:path-dirname@1.0.2"
      }
    },
    "npm:d@1.0.0": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.46"
      }
    },
    "npm:es6-iterator@2.0.3": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.46",
        "es6-symbol": "npm:es6-symbol@3.1.1"
      }
    },
    "npm:readdirp@2.2.1": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.15",
        "micromatch": "npm:micromatch@3.1.10",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:es6-set@0.1.5": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.46",
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "event-emitter": "npm:event-emitter@0.3.5"
      }
    },
    "npm:braces@2.3.2": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "array-unique": "npm:array-unique@0.3.2",
        "repeat-element": "npm:repeat-element@1.1.3",
        "snapdragon-node": "npm:snapdragon-node@2.1.1",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "to-regex": "npm:to-regex@3.0.2",
        "arr-flatten": "npm:arr-flatten@1.1.0",
        "split-string": "npm:split-string@3.1.0",
        "snapdragon": "npm:snapdragon@0.8.2",
        "fill-range": "npm:fill-range@4.0.0"
      }
    },
    "npm:minimatch@3.0.4": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.11"
      }
    },
    "npm:anymatch@2.0.0": {
      "map": {
        "normalize-path": "npm:normalize-path@2.1.1",
        "micromatch": "npm:micromatch@3.1.10"
      }
    },
    "npm:es6-symbol@3.1.1": {
      "map": {
        "d": "npm:d@1.0.0",
        "es5-ext": "npm:es5-ext@0.10.46"
      }
    },
    "npm:event-emitter@0.3.5": {
      "map": {
        "es5-ext": "npm:es5-ext@0.10.46",
        "d": "npm:d@1.0.0"
      }
    },
    "npm:execa@0.7.0": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "signal-exit": "npm:signal-exit@3.0.2",
        "npm-run-path": "npm:npm-run-path@2.0.2",
        "get-stream": "npm:get-stream@3.0.0",
        "p-finally": "npm:p-finally@1.0.0",
        "strip-eof": "npm:strip-eof@1.0.0",
        "cross-spawn": "npm:cross-spawn@5.1.0"
      }
    },
    "npm:es5-ext@0.10.46": {
      "map": {
        "es6-iterator": "npm:es6-iterator@2.0.3",
        "es6-symbol": "npm:es6-symbol@3.1.1",
        "next-tick": "npm:next-tick@1.0.0"
      }
    },
    "npm:wrap-ansi@2.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.12.0"
      }
    },
    "npm:normalize-path@2.1.1": {
      "map": {
        "remove-trailing-separator": "npm:remove-trailing-separator@1.1.0"
      }
    },
    "npm:cliui@2.1.0": {
      "map": {
        "wordwrap": "npm:wordwrap@0.0.2",
        "right-align": "npm:right-align@0.1.3",
        "center-align": "npm:center-align@0.1.3"
      }
    },
    "npm:read-pkg@2.0.0": {
      "map": {
        "path-type": "npm:path-type@2.0.0",
        "load-json-file": "npm:load-json-file@2.0.0",
        "normalize-package-data": "npm:normalize-package-data@2.4.0"
      }
    },
    "npm:lcid@1.0.0": {
      "map": {
        "invert-kv": "npm:invert-kv@1.0.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:mem@1.1.0": {
      "map": {
        "mimic-fn": "npm:mimic-fn@1.2.0"
      }
    },
    "npm:find-up@2.1.0": {
      "map": {
        "locate-path": "npm:locate-path@2.0.0"
      }
    },
    "npm:graphql-import@0.4.5": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:is-glob@4.0.0": {
      "map": {
        "is-extglob": "npm:is-extglob@2.1.1"
      }
    },
    "npm:is-glob@3.1.0": {
      "map": {
        "is-extglob": "npm:is-extglob@2.1.1"
      }
    },
    "npm:load-json-file@2.0.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.15",
        "strip-bom": "npm:strip-bom@3.0.0",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:graphql-request@1.8.2": {
      "map": {
        "cross-fetch": "npm:cross-fetch@2.2.2"
      }
    },
    "npm:brace-expansion@1.1.11": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@1.0.0"
      }
    },
    "npm:to-regex@3.0.2": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "safe-regex": "npm:safe-regex@1.1.0",
        "regex-not": "npm:regex-not@1.0.2",
        "define-property": "npm:define-property@2.0.2"
      }
    },
    "npm:snapdragon-node@2.1.1": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "define-property": "npm:define-property@1.0.0",
        "snapdragon-util": "npm:snapdragon-util@3.0.1"
      }
    },
    "npm:fill-range@4.0.0": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "is-number": "npm:is-number@3.0.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "to-regex-range": "npm:to-regex-range@2.1.1"
      }
    },
    "npm:split-string@3.1.0": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2"
      }
    },
    "npm:normalize-package-data@2.4.0": {
      "map": {
        "semver": "npm:semver@5.6.0",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.4",
        "hosted-git-info": "npm:hosted-git-info@2.7.1"
      }
    },
    "npm:snapdragon@0.8.2": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "source-map": "npm:source-map@0.5.7",
        "map-cache": "npm:map-cache@0.2.2",
        "define-property": "npm:define-property@0.2.5",
        "use": "npm:use@3.1.1",
        "source-map-resolve": "npm:source-map-resolve@0.5.2",
        "base": "npm:base@0.11.2"
      }
    },
    "npm:micromatch@3.1.10": {
      "map": {
        "array-unique": "npm:array-unique@0.3.2",
        "braces": "npm:braces@2.3.2",
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "regex-not": "npm:regex-not@1.0.2",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "object.pick": "npm:object.pick@1.3.0",
        "define-property": "npm:define-property@2.0.2",
        "arr-diff": "npm:arr-diff@4.0.0",
        "kind-of": "npm:kind-of@6.0.2",
        "extglob": "npm:extglob@2.0.4",
        "nanomatch": "npm:nanomatch@1.2.13"
      }
    },
    "npm:cross-fetch@2.2.2": {
      "map": {
        "node-fetch": "npm:node-fetch@2.1.2",
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4"
      }
    },
    "npm:locate-path@2.0.0": {
      "map": {
        "p-locate": "npm:p-locate@2.0.0",
        "path-exists": "npm:path-exists@3.0.0"
      }
    },
    "npm:extend-shallow@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:extend-shallow@3.0.2": {
      "map": {
        "is-extendable": "npm:is-extendable@1.0.1",
        "assign-symbols": "npm:assign-symbols@1.0.0"
      }
    },
    "npm:npm-run-path@2.0.2": {
      "map": {
        "path-key": "npm:path-key@2.0.1"
      }
    },
    "npm:path-type@2.0.0": {
      "map": {
        "pify": "npm:pify@2.3.0"
      }
    },
    "npm:cross-spawn@5.1.0": {
      "map": {
        "shebang-command": "npm:shebang-command@1.2.0",
        "which": "npm:which@1.3.1",
        "lru-cache": "npm:lru-cache@4.1.5"
      }
    },
    "npm:is-extendable@1.0.1": {
      "map": {
        "is-plain-object": "npm:is-plain-object@2.0.4"
      }
    },
    "npm:regex-not@1.0.2": {
      "map": {
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "safe-regex": "npm:safe-regex@1.1.0"
      }
    },
    "npm:center-align@0.1.3": {
      "map": {
        "lazy-cache": "npm:lazy-cache@1.0.4",
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:right-align@0.1.3": {
      "map": {
        "align-text": "npm:align-text@0.1.4"
      }
    },
    "npm:fragment-cache@0.2.1": {
      "map": {
        "map-cache": "npm:map-cache@0.2.2"
      }
    },
    "npm:object.pick@1.3.0": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:define-property@2.0.2": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "is-descriptor": "npm:is-descriptor@1.0.2"
      }
    },
    "npm:is-number@3.0.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:snapdragon-util@3.0.1": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:extglob@2.0.4": {
      "map": {
        "array-unique": "npm:array-unique@0.3.2",
        "define-property": "npm:define-property@1.0.0",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "expand-brackets": "npm:expand-brackets@2.1.4"
      }
    },
    "npm:align-text@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2",
        "repeat-string": "npm:repeat-string@1.6.1",
        "longest": "npm:longest@1.0.1"
      }
    },
    "npm:to-regex-range@2.1.1": {
      "map": {
        "is-number": "npm:is-number@3.0.0",
        "repeat-string": "npm:repeat-string@1.6.1"
      }
    },
    "npm:p-locate@2.0.0": {
      "map": {
        "p-limit": "npm:p-limit@1.3.0"
      }
    },
    "npm:nanomatch@1.2.13": {
      "map": {
        "arr-diff": "npm:arr-diff@4.0.0",
        "array-unique": "npm:array-unique@0.3.2",
        "define-property": "npm:define-property@2.0.2",
        "extend-shallow": "npm:extend-shallow@3.0.2",
        "fragment-cache": "npm:fragment-cache@0.2.1",
        "kind-of": "npm:kind-of@6.0.2",
        "object.pick": "npm:object.pick@1.3.0",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "is-windows": "npm:is-windows@1.0.2"
      }
    },
    "npm:source-map-resolve@0.5.2": {
      "map": {
        "atob": "npm:atob@2.1.2",
        "source-map-url": "npm:source-map-url@0.4.0",
        "resolve-url": "npm:resolve-url@0.2.1",
        "urix": "npm:urix@0.1.0",
        "decode-uri-component": "npm:decode-uri-component@0.2.0"
      }
    },
    "npm:safe-regex@1.1.0": {
      "map": {
        "ret": "npm:ret@0.1.15"
      }
    },
    "npm:define-property@0.2.5": {
      "map": {
        "is-descriptor": "npm:is-descriptor@0.1.6"
      }
    },
    "npm:define-property@1.0.0": {
      "map": {
        "is-descriptor": "npm:is-descriptor@1.0.2"
      }
    },
    "npm:validate-npm-package-license@3.0.4": {
      "map": {
        "spdx-correct": "npm:spdx-correct@3.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0"
      }
    },
    "npm:shebang-command@1.2.0": {
      "map": {
        "shebang-regex": "npm:shebang-regex@1.0.0"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.2"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:which@1.3.1": {
      "map": {
        "isexe": "npm:isexe@2.0.0"
      }
    },
    "npm:base@0.11.2": {
      "map": {
        "define-property": "npm:define-property@1.0.0",
        "isobject": "npm:isobject@3.0.1",
        "component-emitter": "npm:component-emitter@1.2.1",
        "pascalcase": "npm:pascalcase@0.1.1",
        "mixin-deep": "npm:mixin-deep@1.3.1",
        "class-utils": "npm:class-utils@0.3.6",
        "cache-base": "npm:cache-base@1.0.1"
      }
    },
    "npm:is-descriptor@0.1.6": {
      "map": {
        "kind-of": "npm:kind-of@5.1.0",
        "is-data-descriptor": "npm:is-data-descriptor@0.1.4",
        "is-accessor-descriptor": "npm:is-accessor-descriptor@0.1.6"
      }
    },
    "npm:is-descriptor@1.0.2": {
      "map": {
        "kind-of": "npm:kind-of@6.0.2",
        "is-data-descriptor": "npm:is-data-descriptor@1.0.0",
        "is-accessor-descriptor": "npm:is-accessor-descriptor@1.0.0"
      }
    },
    "npm:spdx-correct@3.0.2": {
      "map": {
        "spdx-expression-parse": "npm:spdx-expression-parse@3.0.0",
        "spdx-license-ids": "npm:spdx-license-ids@3.0.2"
      }
    },
    "npm:kind-of@3.2.2": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    },
    "npm:expand-brackets@2.1.4": {
      "map": {
        "debug": "npm:debug@2.6.9",
        "define-property": "npm:define-property@0.2.5",
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "regex-not": "npm:regex-not@1.0.2",
        "snapdragon": "npm:snapdragon@0.8.2",
        "to-regex": "npm:to-regex@3.0.2",
        "posix-character-classes": "npm:posix-character-classes@0.1.1"
      }
    },
    "npm:mixin-deep@1.3.1": {
      "map": {
        "is-extendable": "npm:is-extendable@1.0.1",
        "for-in": "npm:for-in@1.0.2"
      }
    },
    "npm:p-limit@1.3.0": {
      "map": {
        "p-try": "npm:p-try@1.0.0"
      }
    },
    "npm:class-utils@0.3.6": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "isobject": "npm:isobject@3.0.1",
        "static-extend": "npm:static-extend@0.1.2",
        "arr-union": "npm:arr-union@3.1.0"
      }
    },
    "npm:spdx-expression-parse@3.0.0": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@3.0.2",
        "spdx-exceptions": "npm:spdx-exceptions@2.2.0"
      }
    },
    "npm:error-ex@1.3.2": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:cache-base@1.0.1": {
      "map": {
        "component-emitter": "npm:component-emitter@1.2.1",
        "isobject": "npm:isobject@3.0.1",
        "collection-visit": "npm:collection-visit@1.0.0",
        "to-object-path": "npm:to-object-path@0.3.0",
        "unset-value": "npm:unset-value@1.0.0",
        "get-value": "npm:get-value@2.0.6",
        "set-value": "npm:set-value@2.0.0",
        "has-value": "npm:has-value@1.0.0",
        "union-value": "npm:union-value@1.0.0"
      }
    },
    "npm:is-data-descriptor@0.1.4": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:is-data-descriptor@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@6.0.2"
      }
    },
    "npm:is-accessor-descriptor@0.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:is-accessor-descriptor@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@6.0.2"
      }
    },
    "npm:static-extend@0.1.2": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "object-copy": "npm:object-copy@0.1.0"
      }
    },
    "npm:to-object-path@0.3.0": {
      "map": {
        "kind-of": "npm:kind-of@3.2.2"
      }
    },
    "npm:unset-value@1.0.0": {
      "map": {
        "isobject": "npm:isobject@3.0.1",
        "has-value": "npm:has-value@0.3.1"
      }
    },
    "npm:object-copy@0.1.0": {
      "map": {
        "define-property": "npm:define-property@0.2.5",
        "kind-of": "npm:kind-of@3.2.2",
        "copy-descriptor": "npm:copy-descriptor@0.1.1"
      }
    },
    "npm:set-value@2.0.0": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "is-extendable": "npm:is-extendable@0.1.1",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "split-string": "npm:split-string@3.1.0"
      }
    },
    "npm:has-value@1.0.0": {
      "map": {
        "get-value": "npm:get-value@2.0.6",
        "isobject": "npm:isobject@3.0.1",
        "has-values": "npm:has-values@1.0.0"
      }
    },
    "npm:has-value@0.3.1": {
      "map": {
        "isobject": "npm:isobject@2.1.0",
        "get-value": "npm:get-value@2.0.6",
        "has-values": "npm:has-values@0.1.4"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:union-value@1.0.0": {
      "map": {
        "set-value": "npm:set-value@0.4.3",
        "arr-union": "npm:arr-union@3.1.0",
        "get-value": "npm:get-value@2.0.6",
        "is-extendable": "npm:is-extendable@0.1.1"
      }
    },
    "npm:collection-visit@1.0.0": {
      "map": {
        "object-visit": "npm:object-visit@1.0.1",
        "map-visit": "npm:map-visit@1.0.0"
      }
    },
    "npm:set-value@0.4.3": {
      "map": {
        "extend-shallow": "npm:extend-shallow@2.0.1",
        "is-extendable": "npm:is-extendable@0.1.1",
        "is-plain-object": "npm:is-plain-object@2.0.4",
        "to-object-path": "npm:to-object-path@0.3.0"
      }
    },
    "npm:object-visit@1.0.1": {
      "map": {
        "isobject": "npm:isobject@3.0.1"
      }
    },
    "npm:map-visit@1.0.0": {
      "map": {
        "object-visit": "npm:object-visit@1.0.1"
      }
    },
    "npm:has-values@1.0.0": {
      "map": {
        "kind-of": "npm:kind-of@4.0.0",
        "is-number": "npm:is-number@3.0.0"
      }
    },
    "npm:kind-of@4.0.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.6"
      }
    },
    "npm:acorn-globals@1.0.9": {
      "map": {
        "acorn": "npm:acorn@2.7.0"
      }
    },
    "npm:acorn-globals@4.3.0": {
      "map": {
        "acorn": "npm:acorn@6.1.1",
        "acorn-walk": "npm:acorn-walk@6.1.1"
      }
    },
    "npm:acorn@2.7.0": {
      "map": {}
    },
    "npm:asn1@0.2.4": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:assert-plus@1.0.0": {
      "map": {}
    },
    "npm:async-limiter@1.0.0": {
      "map": {}
    },
    "npm:asynckit@0.4.0": {
      "map": {}
    },
    "npm:aws-sign2@0.7.0": {
      "map": {}
    },
    "npm:aws4@1.8.0": {
      "map": {}
    },
    "npm:bcrypt-pbkdf@1.0.2": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:browser-process-hrtime@0.1.3": {
      "map": {}
    },
    "npm:browser-request@0.3.3": {
      "map": {}
    },
    "npm:combined-stream@1.0.7": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:cssstyle@0.2.37": {
      "map": {
        "cssom": "npm:cssom@0.3.4"
      }
    },
    "npm:cssstyle@1.1.1": {
      "map": {
        "cssom": "npm:cssom@0.3.4"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:data-urls@1.1.0": {
      "map": {
        "abab": "npm:abab@2.0.0",
        "whatwg-mimetype": "npm:whatwg-mimetype@2.2.0",
        "whatwg-url": "npm:whatwg-url@7.0.0"
      }
    },
    "npm:delayed-stream@1.0.0": {
      "map": {}
    },
    "npm:domexception@1.0.1": {
      "map": {
        "webidl-conversions": "npm:webidl-conversions@4.0.2"
      }
    },
    "npm:ecc-jsbn@0.1.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.1",
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:escodegen@1.11.0": {
      "map": {
        "esprima": "npm:esprima@3.1.3",
        "estraverse": "npm:estraverse@4.2.0",
        "esutils": "npm:esutils@2.0.3",
        "optionator": "npm:optionator@0.8.2"
      }
    },
    "npm:esprima@3.1.3": {
      "map": {}
    },
    "npm:extsprintf@1.3.0": {
      "map": {}
    },
    "npm:forever-agent@0.6.1": {
      "map": {}
    },
    "npm:form-data@2.3.3": {
      "map": {
        "asynckit": "npm:asynckit@0.4.0",
        "combined-stream": "npm:combined-stream@1.0.7",
        "mime-types": "npm:mime-types@2.1.21"
      }
    },
    "npm:getpass@0.1.7": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:har-schema@2.0.0": {
      "map": {}
    },
    "npm:har-validator@5.1.3": {
      "map": {
        "ajv": "npm:ajv@6.5.5",
        "har-schema": "npm:har-schema@2.0.0"
      }
    },
    "npm:html-encoding-sniffer@1.0.2": {
      "map": {
        "whatwg-encoding": "npm:whatwg-encoding@1.0.5"
      }
    },
    "npm:http-signature@1.2.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "jsprim": "npm:jsprim@1.4.1",
        "sshpk": "npm:sshpk@1.15.2"
      }
    },
    "npm:isstream@0.1.2": {
      "map": {}
    },
    "npm:jsdom@11.12.0": {
      "map": {
        "abab": "npm:abab@2.0.0",
        "acorn": "npm:acorn@5.7.3",
        "acorn-globals": "npm:acorn-globals@4.3.0",
        "array-equal": "npm:array-equal@1.0.0",
        "cssom": "npm:cssom@0.3.4",
        "cssstyle": "npm:cssstyle@1.1.1",
        "data-urls": "npm:data-urls@1.1.0",
        "domexception": "npm:domexception@1.0.1",
        "escodegen": "npm:escodegen@1.11.0",
        "html-encoding-sniffer": "npm:html-encoding-sniffer@1.0.2",
        "left-pad": "npm:left-pad@1.3.0",
        "nwsapi": "npm:nwsapi@2.0.9",
        "parse5": "npm:parse5@4.0.0",
        "pn": "npm:pn@1.1.0",
        "request": "npm:request@2.88.0",
        "request-promise-native": "npm:request-promise-native@1.0.5",
        "sax": "npm:sax@1.2.4",
        "symbol-tree": "npm:symbol-tree@3.2.2",
        "tough-cookie": "npm:tough-cookie@2.4.3",
        "w3c-hr-time": "npm:w3c-hr-time@1.0.1",
        "webidl-conversions": "npm:webidl-conversions@4.0.2",
        "whatwg-encoding": "npm:whatwg-encoding@1.0.5",
        "whatwg-mimetype": "npm:whatwg-mimetype@2.2.0",
        "whatwg-url": "npm:whatwg-url@6.5.0",
        "ws": "npm:ws@5.2.2",
        "xml-name-validator": "npm:xml-name-validator@3.0.0"
      }
    },
    "npm:jsdom@6.5.1": {
      "map": {
        "acorn": "npm:acorn@2.7.0",
        "acorn-globals": "npm:acorn-globals@1.0.9",
        "browser-request": "npm:browser-request@0.3.3",
        "cssom": "npm:cssom@0.3.4",
        "cssstyle": "npm:cssstyle@0.2.37",
        "escodegen": "npm:escodegen@1.11.0",
        "htmlparser2": "npm:htmlparser2@3.8.3",
        "nwmatcher": "npm:nwmatcher@1.4.4",
        "parse5": "npm:parse5@1.5.1",
        "symbol-tree": "npm:symbol-tree@3.2.2",
        "tough-cookie": "npm:tough-cookie@2.4.3",
        "whatwg-url-compat": "npm:whatwg-url-compat@0.6.5",
        "xml-name-validator": "npm:xml-name-validator@2.0.1",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0",
        "xtend": "npm:xtend@4.0.1",
        "request": "npm:request@2.88.0",
        "node-request": "npm:request@2.88.0"
      }
    },
    "npm:jsprim@1.4.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "extsprintf": "npm:extsprintf@1.3.0",
        "json-schema": "npm:json-schema@0.2.3",
        "verror": "npm:verror@1.10.0"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2"
      }
    },
    "npm:lodash.sortby@4.7.0": {
      "map": {}
    },
    "npm:mime-db@1.37.0": {
      "map": {}
    },
    "npm:mime-types@2.1.21": {
      "map": {
        "mime-db": "npm:mime-db@1.37.0"
      }
    },
    "npm:node-blockly@1.0.35": {
      "map": {
        "jsdom": "npm:jsdom@11.12.0",
        "xmlshim": "npm:xmlshim@0.2.3"
      }
    },
    "npm:nwmatcher@1.4.4": {
      "map": {}
    },
    "npm:nwsapi@2.0.9": {
      "map": {}
    },
    "npm:oauth-sign@0.9.0": {
      "map": {}
    },
    "npm:optionator@0.8.2": {
      "map": {
        "deep-is": "npm:deep-is@0.1.3",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "levn": "npm:levn@0.3.0",
        "prelude-ls": "npm:prelude-ls@1.1.2",
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0"
      }
    },
    "npm:parse5@1.5.1": {
      "map": {}
    },
    "npm:parse5@4.0.0": {
      "map": {}
    },
    "npm:performance-now@2.1.0": {
      "map": {}
    },
    "npm:pn@1.1.0": {
      "map": {}
    },
    "npm:psl@1.1.29": {
      "map": {}
    },
    "npm:request-promise-core@1.1.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20"
      }
    },
    "npm:request-promise-native@1.0.5": {
      "map": {
        "request-promise-core": "npm:request-promise-core@1.1.1",
        "stealthy-require": "npm:stealthy-require@1.1.1",
        "tough-cookie": "npm:tough-cookie@2.4.3"
      }
    },
    "npm:request@2.88.0": {
      "map": {
        "aws-sign2": "npm:aws-sign2@0.7.0",
        "aws4": "npm:aws4@1.8.0",
        "caseless": "npm:caseless@0.12.0",
        "combined-stream": "npm:combined-stream@1.0.7",
        "extend": "npm:extend@3.0.2",
        "forever-agent": "npm:forever-agent@0.6.1",
        "form-data": "npm:form-data@2.3.3",
        "har-validator": "npm:har-validator@5.1.3",
        "http-signature": "npm:http-signature@1.2.0",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "mime-types": "npm:mime-types@2.1.21",
        "oauth-sign": "npm:oauth-sign@0.9.0",
        "performance-now": "npm:performance-now@2.1.0",
        "qs": "npm:qs@6.5.2",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "tough-cookie": "npm:tough-cookie@2.4.3",
        "tunnel-agent": "npm:tunnel-agent@0.6.0",
        "uuid": "npm:uuid@3.4.0"
      }
    },
    "npm:sshpk@1.15.2": {
      "map": {
        "asn1": "npm:asn1@0.2.4",
        "assert-plus": "npm:assert-plus@1.0.0",
        "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.2",
        "dashdash": "npm:dashdash@1.14.1",
        "ecc-jsbn": "npm:ecc-jsbn@0.1.2",
        "getpass": "npm:getpass@0.1.7",
        "jsbn": "npm:jsbn@0.1.1",
        "safer-buffer": "npm:safer-buffer@2.1.2",
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:tough-cookie@2.4.3": {
      "map": {
        "psl": "npm:psl@1.1.29",
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:tr46@0.0.3": {
      "map": {}
    },
    "npm:tr46@1.0.1": {
      "map": {
        "punycode": "npm:punycode@2.1.1"
      }
    },
    "npm:tunnel-agent@0.6.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:verror@1.10.0": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "extsprintf": "npm:extsprintf@1.3.0"
      }
    },
    "npm:w3c-hr-time@1.0.1": {
      "map": {
        "browser-process-hrtime": "npm:browser-process-hrtime@0.1.3"
      }
    },
    "npm:whatwg-encoding@1.0.5": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.24"
      }
    },
    "npm:whatwg-url-compat@0.6.5": {
      "map": {
        "tr46": "npm:tr46@0.0.3"
      }
    },
    "npm:whatwg-url@6.5.0": {
      "map": {
        "lodash.sortby": "npm:lodash.sortby@4.7.0",
        "tr46": "npm:tr46@1.0.1",
        "webidl-conversions": "npm:webidl-conversions@4.0.2"
      }
    },
    "npm:whatwg-url@7.0.0": {
      "map": {
        "lodash.sortby": "npm:lodash.sortby@4.7.0",
        "tr46": "npm:tr46@1.0.1",
        "webidl-conversions": "npm:webidl-conversions@4.0.2"
      }
    },
    "npm:ws@5.2.2": {
      "map": {
        "async-limiter": "npm:async-limiter@1.0.0"
      }
    },
    "npm:xmlhttprequest@1.8.0": {
      "map": {}
    },
    "npm:xmlshim@0.2.3": {
      "map": {
        "jsdom": "npm:jsdom@6.5.1",
        "libxmljs": "github:znerol/libxmljs@xmlwriter-0.18.0"
      }
    },
    "npm:bufferutil@3.0.0": {
      "map": {
        "nan": "npm:nan@2.5.1",
        "bindings": "npm:bindings@1.2.1",
        "prebuild-install": "npm:prebuild-install@2.1.2"
      }
    },
    "npm:prebuild-install@2.1.2": {
      "map": {
        "pump": "npm:pump@1.0.3",
        "tar-fs": "npm:tar-fs@1.16.3",
        "mkdirp": "npm:mkdirp@0.5.1",
        "npmlog": "npm:npmlog@4.1.2",
        "os-homedir": "npm:os-homedir@1.0.2",
        "xtend": "npm:xtend@4.0.1",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "rc": "npm:rc@1.2.8",
        "minimist": "npm:minimist@1.2.0",
        "noop-logger": "npm:noop-logger@0.1.1",
        "expand-template": "npm:expand-template@1.1.1",
        "github-from-package": "npm:github-from-package@0.0.0",
        "node-abi": "npm:node-abi@2.5.0",
        "simple-get": "npm:simple-get@1.4.3"
      }
    },
    "npm:tar-fs@1.16.3": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "pump": "npm:pump@1.0.3",
        "tar-stream": "npm:tar-stream@1.6.2",
        "chownr": "npm:chownr@1.1.1"
      }
    },
    "npm:pump@1.0.3": {
      "map": {
        "end-of-stream": "npm:end-of-stream@1.4.1",
        "once": "npm:once@1.4.0"
      }
    },
    "npm:end-of-stream@1.4.1": {
      "map": {
        "once": "npm:once@1.4.0"
      }
    },
    "npm:tar-stream@1.6.2": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "end-of-stream": "npm:end-of-stream@1.4.1",
        "bl": "npm:bl@1.2.2",
        "fs-constants": "npm:fs-constants@1.0.0",
        "buffer-alloc": "npm:buffer-alloc@1.2.0",
        "to-buffer": "npm:to-buffer@1.1.1",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:bl@1.2.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:simple-get@1.4.3": {
      "map": {
        "once": "npm:once@1.4.0",
        "xtend": "npm:xtend@4.0.1",
        "unzip-response": "npm:unzip-response@1.0.2",
        "node-unzip-response": "npm:unzip-response@1.0.2"
      }
    },
    "npm:buffer-alloc@1.2.0": {
      "map": {
        "buffer-alloc-unsafe": "npm:buffer-alloc-unsafe@1.1.0",
        "buffer-fill": "npm:buffer-fill@1.0.0"
      }
    },
    "npm:node-abi@2.5.0": {
      "map": {
        "semver": "npm:semver@5.6.0"
      }
    },
    "npm:utf-8-validate@4.0.0": {
      "map": {
        "nan": "npm:nan@2.8.0",
        "bindings": "npm:bindings@1.3.0",
        "prebuild-install": "npm:prebuild-install@2.3.0"
      }
    },
    "npm:prebuild-install@2.3.0": {
      "map": {
        "expand-template": "npm:expand-template@1.1.1",
        "github-from-package": "npm:github-from-package@0.0.0",
        "minimist": "npm:minimist@1.2.0",
        "noop-logger": "npm:noop-logger@0.1.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "node-abi": "npm:node-abi@2.5.0",
        "os-homedir": "npm:os-homedir@1.0.2",
        "npmlog": "npm:npmlog@4.1.2",
        "rc": "npm:rc@1.2.8",
        "tar-fs": "npm:tar-fs@1.16.3",
        "simple-get": "npm:simple-get@1.4.3",
        "pump": "npm:pump@1.0.3",
        "xtend": "npm:xtend@4.0.1",
        "tunnel-agent": "npm:tunnel-agent@0.6.0"
      }
    },
    "npm:react-table@6.8.6": {
      "map": {
        "classnames": "npm:classnames@2.2.6"
      }
    },
    "npm:quill@1.3.6": {
      "map": {
        "parchment": "npm:parchment@1.1.4",
        "quill-delta": "npm:quill-delta@3.6.3",
        "eventemitter3": "npm:eventemitter3@2.0.3",
        "deep-equal": "npm:deep-equal@1.0.1",
        "extend": "npm:extend@3.0.2",
        "clone": "npm:clone@2.1.2"
      }
    },
    "npm:quill-delta@3.6.3": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "extend": "npm:extend@3.0.2",
        "fast-diff": "npm:fast-diff@1.1.2"
      }
    },
    "npm:quill-render@1.0.5": {
      "map": {
        "escape-html": "npm:escape-html@1.0.3",
        "cheerio": "npm:cheerio@0.19.0"
      }
    },
    "npm:cheerio@0.19.0": {
      "map": {
        "dom-serializer": "npm:dom-serializer@0.1.1",
        "htmlparser2": "npm:htmlparser2@3.8.3",
        "entities": "npm:entities@1.1.2",
        "css-select": "npm:css-select@1.0.0",
        "lodash": "npm:lodash@3.10.1"
      }
    },
    "npm:htmlparser2@3.8.3": {
      "map": {
        "entities": "npm:entities@1.0.0",
        "domhandler": "npm:domhandler@2.3.0",
        "domutils": "npm:domutils@1.5.1",
        "domelementtype": "npm:domelementtype@1.3.1",
        "readable-stream": "npm:readable-stream@1.1",
        "node-readable-stream": "npm:readable-stream@1.1"
      }
    },
    "npm:css-select@1.0.0": {
      "map": {
        "domutils": "npm:domutils@1.4.3",
        "boolbase": "npm:boolbase@1.0.0",
        "nth-check": "npm:nth-check@1.0.2",
        "css-what": "npm:css-what@1.0.0"
      }
    },
    "npm:domutils@1.5.1": {
      "map": {
        "dom-serializer": "npm:dom-serializer@0.1.1",
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:domhandler@2.3.0": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:domutils@1.4.3": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.1"
      }
    },
    "npm:nth-check@1.0.2": {
      "map": {
        "boolbase": "npm:boolbase@1.0.0"
      }
    },
    "npm:react-render-html@0.6.0": {
      "map": {
        "parse5": "npm:parse5@3.0.3",
        "react-attr-converter": "npm:react-attr-converter@0.3.1"
      }
    },
    "npm:parse5@3.0.3": {
      "map": {
        "@types/node": "npm:@types/node@10.12.18"
      }
    },
    "npm:react-draggable@3.1.1": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "classnames": "npm:classnames@2.2.6"
      }
    },
    "npm:react-rnd@9.0.4": {
      "map": {
        "tslib": "npm:tslib@1.9.3",
        "react-draggable": "npm:react-draggable@3.0.5",
        "re-resizable": "npm:re-resizable@4.9.3"
      }
    },
    "npm:react-draggable@3.0.5": {
      "map": {
        "classnames": "npm:classnames@2.2.6",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:lru-cache@4.1.5": {
      "map": {
        "yallist": "npm:yallist@2.1.2",
        "pseudomap": "npm:pseudomap@1.0.2"
      }
    },
    "npm:snabbdom-jsx@0.4.2": {
      "map": {
        "snabbdom": "npm:snabbdom@0.7.3"
      }
    },
    "npm:react-apollo@2.3.3": {
      "map": {
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "fbjs": "npm:fbjs@1.0.0",
        "prop-types": "npm:prop-types@15.7.2",
        "invariant": "npm:invariant@2.2.4",
        "lodash.flowright": "npm:lodash.flowright@3.5.0"
      }
    },
    "npm:fbjs@1.0.0": {
      "map": {
        "fbjs-css-vars": "npm:fbjs-css-vars@1.0.2",
        "core-js": "npm:core-js@2.6.11",
        "setimmediate": "npm:setimmediate@1.0.5",
        "object-assign": "npm:object-assign@4.1.1",
        "loose-envify": "npm:loose-envify@1.4.0",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.21",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1"
      }
    },
    "npm:redux-virtual-dom@0.9.3": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1"
      }
    },
    "npm:color-convert@1.9.3": {
      "map": {
        "color-name": "npm:color-name@1.1.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:react-calendar-heatmap@1.7.0": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:draft-js@0.10.5": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.17",
        "immutable": "npm:immutable@3.7.6"
      }
    },
    "npm:react-live@1.12.0": {
      "map": {
        "core-js": "npm:core-js@2.6.11",
        "prop-types": "npm:prop-types@15.7.2",
        "unescape": "npm:unescape@0.2.0",
        "dom-iterator": "npm:dom-iterator@1.0.0",
        "create-react-context": "npm:create-react-context@0.2.3",
        "prismjs": "npm:prismjs@1.6.0",
        "buble": "npm:buble@0.19.7"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "pako": "npm:pako@0.2.9",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:react-ace@6.2.0": {
      "map": {
        "brace": "npm:brace@0.11.1",
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "prop-types": "npm:prop-types@15.7.2",
        "lodash.get": "npm:lodash.get@4.4.2",
        "diff-match-patch": "npm:diff-match-patch@1.0.4"
      }
    },
    "npm:bootstrap@4.1.3": {
      "map": {
        "tether": "github:HubSpot/tether@1.4.4"
      }
    },
    "npm:react-grid-layout@0.16.6": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "react-draggable": "npm:react-draggable@3.1.1",
        "classnames": "npm:classnames@2.2.6",
        "lodash.isequal": "npm:lodash.isequal@4.5.0",
        "react-resizable": "npm:react-resizable@1.7.5"
      }
    },
    "npm:create-react-class@15.6.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "fbjs": "npm:fbjs@0.8.17"
      }
    },
    "npm:react-resizable@1.7.5": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "react-draggable": "npm:react-draggable@3.1.1"
      }
    },
    "npm:create-react-context@0.2.3": {
      "map": {
        "fbjs": "npm:fbjs@0.8.17",
        "gud": "npm:gud@1.0.0"
      }
    },
    "npm:dom-iterator@1.0.0": {
      "map": {
        "component-props": "npm:component-props@1.1.1",
        "component-xor": "npm:component-xor@0.0.4"
      }
    },
    "npm:buble@0.19.7": {
      "map": {
        "acorn": "npm:acorn@6.1.1",
        "chalk": "npm:chalk@2.4.2",
        "minimist": "npm:minimist@1.2.0",
        "os-homedir": "npm:os-homedir@1.0.2",
        "acorn-dynamic-import": "npm:acorn-dynamic-import@4.0.0",
        "acorn-jsx": "npm:acorn-jsx@5.0.1",
        "regexpu-core": "npm:regexpu-core@4.5.4",
        "magic-string": "npm:magic-string@0.25.2"
      }
    },
    "npm:chalk@2.4.2": {
      "map": {
        "ansi-styles": "npm:ansi-styles@3.2.1",
        "supports-color": "npm:supports-color@5.5.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:supports-color@5.5.0": {
      "map": {
        "has-flag": "npm:has-flag@3.0.0"
      }
    },
    "npm:ansi-styles@3.2.1": {
      "map": {
        "color-convert": "npm:color-convert@1.9.3"
      }
    },
    "npm:regexpu-core@4.5.4": {
      "map": {
        "unicode-match-property-ecmascript": "npm:unicode-match-property-ecmascript@1.0.4",
        "regenerate-unicode-properties": "npm:regenerate-unicode-properties@8.0.2",
        "unicode-match-property-value-ecmascript": "npm:unicode-match-property-value-ecmascript@1.1.0",
        "regjsgen": "npm:regjsgen@0.5.0",
        "regenerate": "npm:regenerate@1.4.0",
        "regjsparser": "npm:regjsparser@0.6.0"
      }
    },
    "npm:regenerate-unicode-properties@8.0.2": {
      "map": {
        "regenerate": "npm:regenerate@1.4.0"
      }
    },
    "npm:magic-string@0.25.2": {
      "map": {
        "sourcemap-codec": "npm:sourcemap-codec@1.4.4"
      }
    },
    "npm:unicode-match-property-ecmascript@1.0.4": {
      "map": {
        "unicode-property-aliases-ecmascript": "npm:unicode-property-aliases-ecmascript@1.0.5",
        "unicode-canonical-property-names-ecmascript": "npm:unicode-canonical-property-names-ecmascript@1.0.4"
      }
    },
    "npm:regjsparser@0.6.0": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:hoist-non-react-statics@3.3.2": {
      "map": {
        "react-is": "npm:react-is@16.12.0"
      }
    },
    "npm:warning@4.0.3": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:randombytes@2.1.0": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.2.1"
      }
    },
    "npm:parse-asn1@5.1.5": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.2.0",
        "pbkdf2": "npm:pbkdf2@3.0.17",
        "create-hash": "npm:create-hash@1.2.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "asn1.js": "npm:asn1.js@4.10.1"
      }
    },
    "npm:elliptic@6.5.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "brorand": "npm:brorand@1.1.0",
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:hash.js@1.1.7": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "inherits": "npm:inherits@2.0.4"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.7",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:asn1.js@4.10.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1",
        "inherits": "npm:inherits@2.0.4",
        "bn.js": "npm:bn.js@4.11.9"
      }
    },
    "npm:des.js@1.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.1"
      }
    },
    "npm:react-transition-group@2.9.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4",
        "dom-helpers": "npm:dom-helpers@3.4.0"
      }
    },
    "npm:linkify-it@2.2.0": {
      "map": {
        "uc.micro": "npm:uc.micro@1.0.6"
      }
    },
    "npm:redux-first-routing@0.3.0": {
      "map": {
        "history": "npm:history@4.10.1",
        "query-string": "npm:query-string@5.1.1"
      }
    },
    "npm:query-string@5.1.1": {
      "map": {
        "decode-uri-component": "npm:decode-uri-component@0.2.0",
        "object-assign": "npm:object-assign@4.1.1",
        "immutable": "npm:immutable@3.7.6",
        "fbjs": "npm:fbjs@0.8.17",
        "strict-uri-encode": "npm:strict-uri-encode@1.1.0"
      }
    },
    "npm:universal-router@7.0.0": {
      "map": {
        "path-to-regexp": "npm:path-to-regexp@2.4.0"
      }
    },
    "npm:iconv-lite@0.4.24": {
      "map": {
        "safer-buffer": "npm:safer-buffer@2.1.2"
      }
    },
    "npm:safer-buffer@2.1.2": {
      "map": {}
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.6.0"
      }
    },
    "npm:isomorphic-fetch@2.2.1": {
      "map": {
        "whatwg-fetch": "npm:whatwg-fetch@2.0.4",
        "node-fetch": "npm:node-fetch@1.7.3"
      }
    },
    "npm:string_decoder@1.1.1": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.2"
      }
    },
    "npm:fbjs@0.8.17": {
      "map": {
        "core-js": "npm:core-js@1.2.7",
        "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "setimmediate": "npm:setimmediate@1.0.5",
        "promise": "npm:promise@7.3.1",
        "ua-parser-js": "npm:ua-parser-js@0.7.21"
      }
    },
    "npm:node-fetch@1.7.3": {
      "map": {
        "is-stream": "npm:is-stream@1.1.0",
        "encoding": "npm:encoding@0.1.12"
      }
    },
    "npm:encoding@0.1.12": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.24"
      }
    },
    "npm:promise@7.3.1": {
      "map": {
        "asap": "npm:asap@2.0.6"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:loose-envify@1.4.0": {
      "map": {
        "js-tokens": "npm:js-tokens@4.0.0"
      }
    },
    "npm:safe-buffer@5.1.2": {
      "map": {}
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.2"
      }
    },
    "npm:stream-browserify@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "readable-stream": "npm:readable-stream@2.3.7"
      }
    },
    "npm:history@4.10.1": {
      "map": {
        "value-equal": "npm:value-equal@1.0.1",
        "resolve-pathname": "npm:resolve-pathname@3.0.0",
        "tiny-warning": "npm:tiny-warning@1.0.3",
        "tiny-invariant": "npm:tiny-invariant@1.1.0",
        "@babel/runtime": "npm:@babel/runtime@7.8.7",
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:buffer@5.6.0": {
      "map": {
        "base64-js": "npm:base64-js@1.3.1",
        "ieee754": "npm:ieee754@1.1.13"
      }
    },
    "npm:warning@3.0.0": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:invariant@2.2.4": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "core-js": "npm:core-js@2.6.11",
        "regenerator-runtime": "npm:regenerator-runtime@0.11.1"
      }
    },
    "npm:prop-types@15.7.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "react-is": "npm:react-is@16.13.1"
      }
    },
    "npm:apollo-client@2.4.8": {
      "map": {
        "apollo-link": "npm:apollo-link@1.2.14",
        "zen-observable": "npm:zen-observable@0.8.15",
        "apollo-link-dedup": "npm:apollo-link-dedup@1.0.20",
        "apollo-cache": "npm:apollo-cache@1.1.22",
        "symbol-observable": "npm:symbol-observable@1.2.0",
        "@types/zen-observable": "npm:@types/zen-observable@0.8.0",
        "apollo-utilities": "npm:apollo-utilities@1.0.27"
      }
    },
    "npm:apollo-cache@1.1.22": {
      "map": {
        "apollo-utilities": "npm:apollo-utilities@1.3.3"
      }
    },
    "npm:apollo-utilities@1.0.27": {
      "map": {
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0"
      }
    },
    "npm:apollo-link-dedup@1.0.20": {
      "map": {
        "apollo-link": "npm:apollo-link@1.2.14",
        "tslib": "npm:tslib@1.9.3"
      }
    },
    "npm:apollo-utilities@1.3.3": {
      "map": {
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "@wry/equality": "npm:@wry/equality@0.1.9",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:ts-invariant@0.4.4": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@wry/equality@0.1.9": {
      "map": {
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:react-redux@5.1.1": {
      "map": {
        "@babel/runtime": "npm:@babel/runtime@7.8.7",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "invariant": "npm:invariant@2.2.4",
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "react-is": "npm:react-is@16.13.1",
        "react-lifecycles-compat": "npm:react-lifecycles-compat@3.0.4"
      }
    },
    "npm:apollo-cache-inmemory@1.6.6": {
      "map": {
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.10.0",
        "optimism": "npm:optimism@0.10.3",
        "apollo-cache": "npm:apollo-cache@1.3.5",
        "apollo-utilities": "npm:apollo-utilities@1.3.4"
      }
    },
    "npm:optimism@0.10.3": {
      "map": {
        "@wry/context": "npm:@wry/context@0.4.4"
      }
    },
    "npm:apollo-upload-client@10.0.0": {
      "map": {
        "apollo-link": "npm:apollo-link@1.2.14",
        "apollo-link-http-common": "npm:apollo-link-http-common@0.2.16",
        "extract-files": "npm:extract-files@5.0.1"
      }
    },
    "npm:apollo-cache@1.3.5": {
      "map": {
        "apollo-utilities": "npm:apollo-utilities@1.3.4",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:@wry/context@0.4.4": {
      "map": {
        "@types/node": "npm:@types/node@10.12.18",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:apollo-utilities@1.3.4": {
      "map": {
        "@wry/equality": "npm:@wry/equality@0.1.9",
        "fast-json-stable-stringify": "npm:fast-json-stable-stringify@2.1.0",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:readable-stream@2.3.7": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.4",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.2",
        "string_decoder": "npm:string_decoder@1.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@2.0.1"
      }
    },
    "npm:apollo-link-http-common@0.2.16": {
      "map": {
        "apollo-link": "npm:apollo-link@1.2.14",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:apollo-link@1.2.14": {
      "map": {
        "zen-observable-ts": "npm:zen-observable-ts@0.8.21",
        "apollo-utilities": "npm:apollo-utilities@1.3.4",
        "ts-invariant": "npm:ts-invariant@0.4.4",
        "tslib": "npm:tslib@1.10.0"
      }
    },
    "npm:zen-observable-ts@0.8.21": {
      "map": {
        "tslib": "npm:tslib@1.10.0",
        "zen-observable": "npm:zen-observable@0.8.15"
      }
    },
    "npm:readable-stream@1.1": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.4"
      }
    },
    "npm:@carbon/icons-react@10.11.0": {
      "map": {
        "@carbon/icon-helpers": "npm:@carbon/icon-helpers@10.7.0"
      }
    },
    "npm:react-router@3.2.6": {
      "map": {
        "create-react-class": "npm:create-react-class@15.6.3",
        "invariant": "npm:invariant@2.2.4",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "loose-envify": "npm:loose-envify@1.4.0",
        "react-is": "npm:react-is@16.13.1",
        "prop-types": "npm:prop-types@15.7.2",
        "history": "npm:history@3.3.0",
        "warning": "npm:warning@3.0.0"
      }
    },
    "npm:browserify-sign@4.2.0": {
      "map": {
        "readable-stream": "npm:readable-stream@3.6.0",
        "create-hash": "npm:create-hash@1.2.0",
        "create-hmac": "npm:create-hmac@1.1.7",
        "inherits": "npm:inherits@2.0.4",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "bn.js": "npm:bn.js@5.1.2",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.5.2",
        "parse-asn1": "npm:parse-asn1@5.1.5"
      }
    },
    "npm:readable-stream@3.6.0": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "string_decoder": "npm:string_decoder@1.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:hash-base@3.1.0": {
      "map": {
        "readable-stream": "npm:readable-stream@3.6.0",
        "safe-buffer": "npm:safe-buffer@5.2.1",
        "inherits": "npm:inherits@2.0.4"
      }
    },
    "npm:graphql@14.6.0": {
      "map": {
        "iterall": "npm:iterall@1.2.2"
      }
    },
    "npm:graphql-language-service-parser@1.5.2": {
      "map": {
        "graphql-language-service-types": "npm:graphql-language-service-types@1.5.2",
        "graphql-config": "npm:graphql-config@2.2.1"
      }
    },
    "npm:graphql-language-service-types@1.5.2": {
      "map": {
        "graphql-config": "npm:graphql-config@2.2.1"
      }
    },
    "npm:graphql-config@2.2.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "js-yaml": "npm:js-yaml@3.14.0",
        "minimatch": "npm:minimatch@3.0.4",
        "graphql-request": "npm:graphql-request@1.8.2",
        "graphql-import": "npm:graphql-import@0.7.1"
      }
    },
    "npm:js-yaml@3.14.0": {
      "map": {
        "esprima": "npm:esprima@4.0.1",
        "argparse": "npm:argparse@1.0.10"
      }
    },
    "npm:graphql-import@0.7.1": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "resolve-from": "npm:resolve-from@4.0.0"
      }
    },
    "npm:react-trello@2.2.5": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "classnames": "npm:classnames@2.2.6",
        "immutability-helper": "npm:immutability-helper@2.9.1",
        "autosize": "npm:autosize@4.0.2",
        "uuid": "npm:uuid@3.4.0",
        "trello-smooth-dnd": "npm:trello-smooth-dnd@1.0.0",
        "react-click-outside": "github:tj/react-click-outside@1.1.0",
        "react-popopo": "npm:react-popopo@2.1.9"
      }
    },
    "npm:redux-actions@2.6.5": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "just-curry-it": "npm:just-curry-it@3.1.0",
        "invariant": "npm:invariant@2.2.4",
        "to-camel-case": "npm:to-camel-case@1.0.0",
        "reduce-reducers": "npm:reduce-reducers@0.4.3"
      }
    },
    "npm:react-popopo@2.1.9": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:immutability-helper@2.9.1": {
      "map": {
        "invariant": "npm:invariant@2.2.4"
      }
    },
    "npm:redux-logger@3.0.6": {
      "map": {
        "deep-diff": "npm:deep-diff@0.3.8"
      }
    },
    "npm:@babel/runtime@7.8.7": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.13.5"
      }
    },
    "npm:redux@4.0.5": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "symbol-observable": "npm:symbol-observable@1.2.0"
      }
    },
    "npm:react@16.13.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "prop-types": "npm:prop-types@15.7.2",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:path-to-regexp@1.8.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1"
      }
    },
    "npm:styled-components@5.1.0": {
      "map": {
        "css-to-react-native": "npm:css-to-react-native@3.0.0",
        "shallowequal": "npm:shallowequal@1.1.0",
        "supports-color": "npm:supports-color@5.5.0",
        "hoist-non-react-statics": "npm:hoist-non-react-statics@3.3.2",
        "@emotion/is-prop-valid": "npm:@emotion/is-prop-valid@0.8.8",
        "@babel/helper-module-imports": "npm:@babel/helper-module-imports@7.10.4",
        "@babel/traverse": "npm:@babel/traverse@7.11.0",
        "babel-plugin-styled-components": "npm:babel-plugin-styled-components@1.11.1",
        "@emotion/unitless": "npm:@emotion/unitless@0.7.5",
        "@emotion/stylis": "npm:@emotion/stylis@0.8.5"
      }
    },
    "npm:css-to-react-native@3.0.0": {
      "map": {
        "camelize": "npm:camelize@1.0.0",
        "postcss-value-parser": "npm:postcss-value-parser@4.1.0",
        "css-color-keywords": "npm:css-color-keywords@1.0.0"
      }
    },
    "npm:@babel/traverse@7.11.0": {
      "map": {
        "debug": "npm:debug@4.2.0",
        "globals": "npm:globals@11.12.0",
        "lodash": "npm:lodash@4.17.20",
        "@babel/parser": "npm:@babel/parser@7.11.4",
        "@babel/helper-split-export-declaration": "npm:@babel/helper-split-export-declaration@7.11.0",
        "@babel/helper-function-name": "npm:@babel/helper-function-name@7.10.4",
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/types": "npm:@babel/types@7.11.0",
        "@babel/generator": "npm:@babel/generator@7.11.4"
      }
    },
    "npm:debug@4.2.0": {
      "map": {
        "ms": "npm:ms@2.1.2"
      }
    },
    "npm:@babel/helper-function-name@7.10.4": {
      "map": {
        "@babel/helper-get-function-arity": "npm:@babel/helper-get-function-arity@7.10.4",
        "@babel/template": "npm:@babel/template@7.10.4",
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:@babel/template@7.10.4": {
      "map": {
        "@babel/parser": "npm:@babel/parser@7.11.4",
        "@babel/code-frame": "npm:@babel/code-frame@7.10.4",
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:babel-plugin-styled-components@1.11.1": {
      "map": {
        "@babel/helper-module-imports": "npm:@babel/helper-module-imports@7.10.4",
        "lodash": "npm:lodash@4.17.20",
        "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.18.0",
        "@babel/helper-annotate-as-pure": "npm:@babel/helper-annotate-as-pure@7.10.4"
      }
    },
    "npm:@emotion/is-prop-valid@0.8.8": {
      "map": {
        "@emotion/memoize": "npm:@emotion/memoize@0.7.4"
      }
    },
    "npm:@babel/helper-module-imports@7.10.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:@babel/helper-split-export-declaration@7.11.0": {
      "map": {
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:@babel/helper-get-function-arity@7.10.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:@babel/types@7.11.0": {
      "map": {
        "lodash": "npm:lodash@4.17.20",
        "@babel/helper-validator-identifier": "npm:@babel/helper-validator-identifier@7.10.4",
        "to-fast-properties": "npm:to-fast-properties@2.0.0"
      }
    },
    "npm:@babel/generator@7.11.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.11.0",
        "source-map": "npm:source-map@0.5.7",
        "jsesc": "npm:jsesc@2.5.2"
      }
    },
    "npm:@babel/helper-annotate-as-pure@7.10.4": {
      "map": {
        "@babel/types": "npm:@babel/types@7.11.0"
      }
    },
    "npm:@babel/code-frame@7.10.4": {
      "map": {
        "@babel/highlight": "npm:@babel/highlight@7.10.4"
      }
    },
    "npm:@babel/highlight@7.10.4": {
      "map": {
        "@babel/helper-validator-identifier": "npm:@babel/helper-validator-identifier@7.10.4",
        "js-tokens": "npm:js-tokens@4.0.0",
        "chalk": "npm:chalk@2.4.2"
      }
    },
    "npm:react-dom@16.13.1": {
      "map": {
        "scheduler": "npm:scheduler@0.19.1",
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1",
        "prop-types": "npm:prop-types@15.7.2"
      }
    },
    "npm:scheduler@0.19.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.4.0",
        "object-assign": "npm:object-assign@4.1.1"
      }
    },
    "npm:has@1.0.3": {
      "map": {
        "function-bind": "npm:function-bind@1.1.1"
      }
    },
    "npm:deep-equal@2.0.3": {
      "map": {
        "is-arguments": "npm:is-arguments@1.0.4",
        "regexp.prototype.flags": "npm:regexp.prototype.flags@1.3.0",
        "is-date-object": "npm:is-date-object@1.0.2",
        "is-regex": "npm:is-regex@1.1.1",
        "object.assign": "npm:object.assign@4.1.0",
        "object-keys": "npm:object-keys@1.1.1",
        "es-abstract": "npm:es-abstract@1.17.6",
        "isarray": "npm:isarray@2.0.5",
        "object-is": "npm:object-is@1.1.2",
        "which-typed-array": "npm:which-typed-array@1.1.2",
        "which-collection": "npm:which-collection@1.0.1",
        "side-channel": "npm:side-channel@1.0.2",
        "which-boxed-primitive": "npm:which-boxed-primitive@1.0.1",
        "es-get-iterator": "npm:es-get-iterator@1.1.0"
      }
    },
    "npm:regexp.prototype.flags@1.3.0": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "define-properties": "npm:define-properties@1.1.3"
      }
    },
    "npm:object-is@1.1.2": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "define-properties": "npm:define-properties@1.1.3"
      }
    },
    "npm:object.assign@4.1.0": {
      "map": {
        "object-keys": "npm:object-keys@1.1.1",
        "define-properties": "npm:define-properties@1.1.3",
        "has-symbols": "npm:has-symbols@1.0.1",
        "function-bind": "npm:function-bind@1.1.1"
      }
    },
    "npm:es-abstract@1.17.6": {
      "map": {
        "object-keys": "npm:object-keys@1.1.1",
        "object.assign": "npm:object.assign@4.1.0",
        "is-regex": "npm:is-regex@1.1.1",
        "es-to-primitive": "npm:es-to-primitive@1.2.1",
        "has-symbols": "npm:has-symbols@1.0.1",
        "function-bind": "npm:function-bind@1.1.1",
        "string.prototype.trimend": "npm:string.prototype.trimend@1.0.1",
        "object-inspect": "npm:object-inspect@1.8.0",
        "is-callable": "npm:is-callable@1.2.0",
        "string.prototype.trimstart": "npm:string.prototype.trimstart@1.0.1",
        "has": "npm:has@1.0.3"
      }
    },
    "npm:which-typed-array@1.1.2": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "has-symbols": "npm:has-symbols@1.0.1",
        "function-bind": "npm:function-bind@1.1.1",
        "available-typed-arrays": "npm:available-typed-arrays@1.0.2",
        "is-typed-array": "npm:is-typed-array@1.1.3",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:is-regex@1.1.1": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1"
      }
    },
    "npm:define-properties@1.1.3": {
      "map": {
        "object-keys": "npm:object-keys@1.1.1"
      }
    },
    "npm:es-to-primitive@1.2.1": {
      "map": {
        "is-date-object": "npm:is-date-object@1.0.2",
        "is-callable": "npm:is-callable@1.2.0",
        "is-symbol": "npm:is-symbol@1.0.3"
      }
    },
    "npm:string.prototype.trimend@1.0.1": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "es-abstract": "npm:es-abstract@1.17.6"
      }
    },
    "npm:string.prototype.trimstart@1.0.1": {
      "map": {
        "define-properties": "npm:define-properties@1.1.3",
        "es-abstract": "npm:es-abstract@1.17.6"
      }
    },
    "npm:is-typed-array@1.1.3": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "has-symbols": "npm:has-symbols@1.0.1",
        "available-typed-arrays": "npm:available-typed-arrays@1.0.2",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:available-typed-arrays@1.0.2": {
      "map": {
        "array-filter": "npm:array-filter@1.0.0"
      }
    },
    "npm:is-symbol@1.0.3": {
      "map": {
        "has-symbols": "npm:has-symbols@1.0.1"
      }
    },
    "npm:which-boxed-primitive@1.0.1": {
      "map": {
        "is-symbol": "npm:is-symbol@1.0.3",
        "is-boolean-object": "npm:is-boolean-object@1.0.1",
        "is-number-object": "npm:is-number-object@1.0.4",
        "is-string": "npm:is-string@1.0.5",
        "is-bigint": "npm:is-bigint@1.0.0"
      }
    },
    "npm:es-get-iterator@1.1.0": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "has-symbols": "npm:has-symbols@1.0.1",
        "is-arguments": "npm:is-arguments@1.0.4",
        "isarray": "npm:isarray@2.0.5",
        "is-string": "npm:is-string@1.0.5",
        "is-map": "npm:is-map@2.0.1",
        "is-set": "npm:is-set@2.0.1"
      }
    },
    "npm:which-collection@1.0.1": {
      "map": {
        "is-map": "npm:is-map@2.0.1",
        "is-set": "npm:is-set@2.0.1",
        "is-weakset": "npm:is-weakset@2.0.1",
        "is-weakmap": "npm:is-weakmap@2.0.1"
      }
    },
    "npm:react-custom-scrollbars@4.2.1": {
      "map": {
        "prop-types": "npm:prop-types@15.7.2",
        "dom-css": "npm:dom-css@2.1.0",
        "raf": "npm:raf@3.4.1"
      }
    },
    "npm:raf@3.4.1": {
      "map": {
        "performance-now": "npm:performance-now@2.1.0"
      }
    },
    "npm:dom-css@2.1.0": {
      "map": {
        "add-px-to-style": "npm:add-px-to-style@1.0.0",
        "prefix-style": "npm:prefix-style@2.0.1",
        "to-camel-case": "npm:to-camel-case@1.0.0"
      }
    },
    "npm:side-channel@1.0.2": {
      "map": {
        "es-abstract": "npm:es-abstract@1.17.6",
        "object-inspect": "npm:object-inspect@1.8.0"
      }
    },
    "npm:react-html-parser@2.0.2": {
      "map": {
        "htmlparser2": "npm:htmlparser2@3.10.1"
      }
    },
    "npm:htmlparser2@3.10.1": {
      "map": {
        "inherits": "npm:inherits@2.0.4",
        "domelementtype": "npm:domelementtype@1.3.1",
        "entities": "npm:entities@1.1.2",
        "domhandler": "npm:domhandler@2.3.0",
        "readable-stream": "npm:readable-stream@3.6.0",
        "node-readable-stream": "npm:readable-stream@3.6.0",
        "domutils": "npm:domutils@1.5.1"
      }
    },
    "npm:dom-serializer@0.1.1": {
      "map": {
        "domelementtype": "npm:domelementtype@1.3.1",
        "entities": "npm:entities@1.1.2"
      }
    }
  }
});
