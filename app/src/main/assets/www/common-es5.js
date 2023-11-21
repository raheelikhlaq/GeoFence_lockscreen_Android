(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./src/app/modules/forms/common/question-base.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/forms/common/question-base.ts ***!
  \*******************************************************/
/*! exports provided: QuestionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBase", function() { return QuestionBase; });
var QuestionBase = /** @class */ (function () {
    function QuestionBase(options) {
        if (options === void 0) { options = {}; }
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
    QuestionBase.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return QuestionBase;
}());



/***/ }),

/***/ "./src/app/modules/forms/common/question-dropdown.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/forms/common/question-dropdown.ts ***!
  \***********************************************************/
/*! exports provided: DropdownQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownQuestion", function() { return DropdownQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/modules/forms/common/question-base.ts");


var DropdownQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DropdownQuestion, _super);
    function DropdownQuestion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlType = 'dropdown';
        return _this;
    }
    return DropdownQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"]));



/***/ }),

/***/ "./src/app/modules/forms/common/question-textbox.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/forms/common/question-textbox.ts ***!
  \**********************************************************/
/*! exports provided: TextboxQuestion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextboxQuestion", function() { return TextboxQuestion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _question_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./question-base */ "./src/app/modules/forms/common/question-base.ts");


var TextboxQuestion = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextboxQuestion, _super);
    function TextboxQuestion() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.controlType = 'textbox';
        return _this;
    }
    return TextboxQuestion;
}(_question_base__WEBPACK_IMPORTED_MODULE_1__["QuestionBase"]));



/***/ }),

/***/ "./src/services/chat.service.ts":
/*!**************************************!*\
  !*** ./src/services/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var ChatService = /** @class */ (function () {
    function ChatService(http, storage) {
        this.http = http;
        this.storage = storage;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this._headers = this._headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    ChatService.prototype.getChats = function (id, uid) {
        if (uid != 'guest') {
            var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/conversation/' + id + '/' + uid;
            return this.http.get(api);
        }
        else {
            var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/conversation/' + id;
            return this.http.get(api);
        }
    };
    ChatService.prototype.save_message = function (body) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/message';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    ChatService.prototype.get_messages = function (id) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/messages/' + id;
        return this.http.get(api);
    };
    ChatService.prototype.get_bible_messages = function (body) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/biblegetmessages';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    ChatService.prototype.savebiblemessage = function (body) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/savebiblemessage';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    ChatService.prototype.savegroupmember = function (body) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/chatroom/groupmember';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/services/my-contribution.service.ts":
/*!*************************************************!*\
  !*** ./src/services/my-contribution.service.ts ***!
  \*************************************************/
/*! exports provided: MyContributionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContributionService", function() { return MyContributionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");





var MyContributionService = /** @class */ (function () {
    function MyContributionService(http, storage) {
        this.http = http;
        this.storage = storage;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this._headers = this._headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    MyContributionService.prototype.getGivingType = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/givingtype';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.getPaymentDetails = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/get_donorsources';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.getEpicPayTemplate = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/get_eptpl';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.removePaymentSource = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/delete_source';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.makePayment = function (body, is_guest) {
        var api;
        if (is_guest === false) {
            api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/process_payment';
        }
        else if (is_guest === true) {
            api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/process_payment_guest';
        }
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.createPledge = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/createpledge';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.createPledge_guest = function (body) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/guestcreatepledge';
        return this.http.post(api, JSON.parse(body), { headers: this._headers });
    };
    MyContributionService.prototype.checkCaptcha = function (token) {
        var api = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_end_point + '/givings/checkCaptcha/' + token;
        return this.http.get(api);
    };
    MyContributionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
    ]; };
    MyContributionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])
    ], MyContributionService);
    return MyContributionService;
}());



/***/ }),

/***/ "./src/services/word-press.service.ts":
/*!********************************************!*\
  !*** ./src/services/word-press.service.ts ***!
  \********************************************/
/*! exports provided: WordPressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordPressService", function() { return WordPressService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_modules_forms_common_question_textbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/forms/common/question-textbox */ "./src/app/modules/forms/common/question-textbox.ts");
/* harmony import */ var src_app_modules_forms_common_question_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/forms/common/question-dropdown */ "./src/app/modules/forms/common/question-dropdown.ts");







var WordPressService = /** @class */ (function () {
    function WordPressService(http, storage) {
        this.http = http;
        this.storage = storage;
        this._headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this._headers = this._headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        this.vimeochannelheader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        this.vimeochannelheader = this.vimeochannelheader.append('Authorization', 'Bearer 691b7c3ec98036571b366cc6c8d5b037');
        this.vimeochannelheader = this.vimeochannelheader.append('Content-Type', 'application/json');
    }
    WordPressService.prototype.getContent = function (data) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_end_point + '/Content/content';
        // let api = "https://s3729.churchbase.site/feed/?post_type=wpfc_sermon&full=1";
        // -> let api = 'https://s2818.churchbase.io/feed/?post_type=wpfc_sermon&full=1';
        return this.http.post(api, data);
    };
    // TODO: get from a remote source of question metadata
    WordPressService.prototype.getQuestions = function (data) {
        var questions = [
            new src_app_modules_forms_common_question_dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownQuestion"]({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),
            new src_app_modules_forms_common_question_textbox__WEBPACK_IMPORTED_MODULE_5__["TextboxQuestion"]({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),
            new src_app_modules_forms_common_question_textbox__WEBPACK_IMPORTED_MODULE_5__["TextboxQuestion"]({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 4
            }),
            new src_app_modules_forms_common_question_textbox__WEBPACK_IMPORTED_MODULE_5__["TextboxQuestion"]({
                key: 'image',
                label: 'Image',
                type: 'file',
                order: 2
            })
        ];
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_end_point + '/content/formsData';
        return this.http.post(api, data);
        // return of(questions.sort((a, b) => a.order - b.order));
    };
    WordPressService.prototype.saveForm = function (data) {
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_end_point + '/content/saveForm';
        return this.http.post(api, data);
    };
    WordPressService.prototype.saveFiles = function (data) {
        var file_headers;
        file_headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        file_headers = file_headers.append('Content-Type', 'multipart/form-data; boundary=----WebKitFormBoundaryuL67FWkv1CA');
        var api = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api_end_point + '/contentcms/uploadFile';
        return this.http.post(api, data, { headers: file_headers });
    };
    WordPressService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
    ]; };
    WordPressService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], WordPressService);
    return WordPressService;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map