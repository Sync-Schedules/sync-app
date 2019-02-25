webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portal_users_users_component__ = __webpack_require__("../../../../../src/app/portal/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__portal_portal_home_portal_home_component__ = __webpack_require__("../../../../../src/app/portal/portal-home/portal-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'employees',
        component: __WEBPACK_IMPORTED_MODULE_3__portal_users_users_component__["a" /* EmployeesComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'portal',
        component: __WEBPACK_IMPORTED_MODULE_5__portal_portal_component__["a" /* PortalComponent */]
    },
    {
        path: 'portal-home',
        component: __WEBPACK_IMPORTED_MODULE_7__portal_portal_home_portal_home_component__["a" /* PortalHomeComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_6__profile_profile_component__["a" /* ProfileComponent */],
    },
    {
        path: 'help',
        component: __WEBPACK_IMPORTED_MODULE_8__help_help_component__["a" /* HelpComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap\">\n  <header role=\"banner\">\n    <app-navbar></app-navbar>\n  </header>\n  <main class=\"router\">\n    <router-outlet></router-outlet>\n  </main>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Roboto:400,300,100,500,700);", ""]);
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Roboto+Condensed:400,300,700);", ""]);
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Glegoo);", ""]);
exports.push([module.i, "@import url(//fonts.googleapis.com/css?family=Righteous);", ""]);

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\na {\n  text-decoration: none;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit; }\n\n.page-wrap {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\n.material-icons {\n  color: white;\n  font-family: 'Material Icons', sans-serif;\n  font-weight: 100;\n  font-style: normal;\n  font-size: 36px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.snackBar.open('you are now logged out', 'ok', { duration: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__login_login_bar_login_bar_component__ = __webpack_require__("../../../../../src/app/login/login-bar/login-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__portal_users_users_component__ = __webpack_require__("../../../../../src/app/portal/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__portal_venue_data_venue_data_component__ = __webpack_require__("../../../../../src/app/portal/venue-data/venue-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dialogs_add_venue_add_venue_component__ = __webpack_require__("../../../../../src/app/dialogs/add-venue/add-venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__dialogs_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dialogs/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__dialogs_delete_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared_sync_calendar_sync_calendar_component__ = __webpack_require__("../../../../../src/app/shared/sync-calendar/sync-calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__dialogs_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__portal_nav_nav_component__ = __webpack_require__("../../../../../src/app/portal/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__portal_schedule_schedule_component__ = __webpack_require__("../../../../../src/app/portal/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__dialogs_edit_venue_edit_venue_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-venue/edit-venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__portal_portal_home_portal_home_component__ = __webpack_require__("../../../../../src/app/portal/portal-home/portal-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__dialogs_add_shift_add_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__portal_djs_djs_component__ = __webpack_require__("../../../../../src/app/portal/djs/djs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__portal_shifts_shifts_component__ = __webpack_require__("../../../../../src/app/portal/shifts/shifts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__portal_availabilty_availabilty_component__ = __webpack_require__("../../../../../src/app/portal/availabilty/availabilty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_cal_week_cal_week_component__ = __webpack_require__("../../../../../src/app/shared/cal-week/cal-week.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__dialogs_select_dj_select_dj_component__ = __webpack_require__("../../../../../src/app/dialogs/select-dj/select-dj.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57_angular_calendar__ = __webpack_require__("../../../../angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__dialogs_edit_shift_edit_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-shift/edit-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__dialogs_create_shift_create_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/create-shift/create-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__services_mailer_service__ = __webpack_require__("../../../../../src/app/services/mailer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__help_help_component__ = __webpack_require__("../../../../../src/app/help/help.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































// import { HelpComponent } from './help/help.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';

// import {MasterCalendarModule} from "./master-calendar/master-calendar.module";




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_27__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_28__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__portal_portal_component__["a" /* PortalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__login_login_bar_login_bar_component__["a" /* LoginBarComponent */],
                __WEBPACK_IMPORTED_MODULE_32__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_33__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_34__profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_35__portal_venue_data_venue_data_component__["a" /* VenueDataComponent */],
                __WEBPACK_IMPORTED_MODULE_36__dialogs_add_venue_add_venue_component__["a" /* AddVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_41__dialogs_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_43__dialogs_delete_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__shared_sync_calendar_sync_calendar_component__["a" /* SyncCalendarComponent */],
                __WEBPACK_IMPORTED_MODULE_46__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_47__portal_nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_48__portal_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_54__portal_availabilty_availabilty_component__["a" /* AvailabiltyComponent */],
                __WEBPACK_IMPORTED_MODULE_49__dialogs_edit_venue_edit_venue_component__["a" /* EditVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_50__portal_portal_home_portal_home_component__["a" /* PortalHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_51__dialogs_add_shift_add_shift_component__["a" /* AddShiftComponent */],
                __WEBPACK_IMPORTED_MODULE_31__portal_users_users_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_52__portal_djs_djs_component__["a" /* DjsComponent */],
                __WEBPACK_IMPORTED_MODULE_53__portal_shifts_shifts_component__["a" /* ShiftsComponent */],
                __WEBPACK_IMPORTED_MODULE_54__portal_availabilty_availabilty_component__["a" /* AvailabiltyComponent */],
                __WEBPACK_IMPORTED_MODULE_55__shared_cal_week_cal_week_component__["a" /* CalWeekComponent */],
                __WEBPACK_IMPORTED_MODULE_48__portal_schedule_schedule_component__["b" /* ViewAvailability */],
                __WEBPACK_IMPORTED_MODULE_56__dialogs_select_dj_select_dj_component__["a" /* SelectDjComponent */],
                __WEBPACK_IMPORTED_MODULE_58__dialogs_edit_shift_edit_shift_component__["a" /* EditShiftComponent */],
                __WEBPACK_IMPORTED_MODULE_59__dialogs_create_shift_create_shift_component__["a" /* CreateShiftComponent */],
                __WEBPACK_IMPORTED_MODULE_61__help_help_component__["a" /* HelpComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["o" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["w" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_stepper__["a" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_tooltip__["a" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["k" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["v" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["u" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["m" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["s" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["n" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_57_angular_calendar__["a" /* CalendarModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
                __WEBPACK_IMPORTED_MODULE_37__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_38__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_39__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_44__guards_admin_guard__["a" /* AdminGuard */],
                __WEBPACK_IMPORTED_MODULE_40__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_42_angular2_jwt__["JwtHelper"],
                __WEBPACK_IMPORTED_MODULE_60__services_mailer_service__["a" /* MailerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_36__dialogs_add_venue_add_venue_component__["a" /* AddVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_41__dialogs_add_user_add_user_component__["a" /* AddUserComponent */],
                __WEBPACK_IMPORTED_MODULE_43__dialogs_delete_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_46__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */],
                __WEBPACK_IMPORTED_MODULE_49__dialogs_edit_venue_edit_venue_component__["a" /* EditVenueComponent */],
                __WEBPACK_IMPORTED_MODULE_51__dialogs_add_shift_add_shift_component__["a" /* AddShiftComponent */],
                __WEBPACK_IMPORTED_MODULE_56__dialogs_select_dj_select_dj_component__["a" /* SelectDjComponent */],
                __WEBPACK_IMPORTED_MODULE_59__dialogs_create_shift_create_shift_component__["a" /* CreateShiftComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/add-shift/add-shift.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"close()\" class=\"example-form\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <h1 mat-dialog-title>Add Shift</h1>\n  <mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.venue\" name=\"venue\" placeholder=\"Select a Venue\" required=\"required\">\n        <mat-option *ngFor=\"let venue of venues\" [value]=\"venue\">\n          {{venue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.time\" name=\"time\" placeholder=\"Select a Time\" required=\"required\">\n        <mat-option *ngFor=\"let time of times\" [value]=\"time\">\n          {{time}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.dj\" name=\"dj\" placeholder=\"Select a DJ\" required=\"required\">\n        <mat-option *ngFor=\"let dj of djs\" [disabled]=\"dateClicked == !dj.availability\" [value]=\"dj\">\n          {{dj}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n  </mat-dialog-content>\n\n\n  <mat-dialog-actions fxLayoutAlign=\"center center\">\n    <button [mat-dialog-close]=\"data\" mat-raised-button>Submit</button>\n    <button mat-raised-button type=\"submit\">Cancel</button>\n  </mat-dialog-actions>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/add-shift/add-shift.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/add-shift/add-shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_venue_service__ = __webpack_require__("../../../../../src/app/services/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_moment_adapter__ = __webpack_require__("../../../material-moment-adapter/esm5/material-moment-adapter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var AddShiftComponent = (function () {
    function AddShiftComponent(us, dialog, as, vs, snackBar, router, data) {
        this.us = us;
        this.dialog = dialog;
        this.as = as;
        this.vs = vs;
        this.snackBar = snackBar;
        this.router = router;
        this.data = data;
        this.djs = [];
        this.venues = [];
        this.dates = [];
        this.times = ['12:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'];
    }
    AddShiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.getVenue().subscribe(function (data) {
            _this.venue = data;
            for (var i = 0; i < _this.venue.length; i++) {
                _this.venues.push(_this.venue[i].name);
                console.log(_this.venue[i].name);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.us.getDJ().subscribe(function (data) {
            _this.dj = data;
            for (var i = 0; i < _this.dj.length; i++) {
                _this.djs.push(_this.dj[i].username);
                _this.dates.push(_this.dj[i].availability[i]);
            }
        });
        this.us.getShifts().subscribe(function (data) {
            _this.shift = _this.data;
        });
    };
    AddShiftComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    AddShiftComponent.prototype.checkers = function () {
    };
    AddShiftComponent.prototype.getDayName = function (dateStr, locale) {
        var date = new Date(dateStr);
        var day = this.getDayName(dateStr, "us-EN");
        console.log(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });
    };
    AddShiftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-shift',
            template: __webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_venue_service__["a" /* VenueService */],
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["c" /* DateAdapter */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_material_moment_adapter__["b" /* MomentDateAdapter */], deps: [__WEBPACK_IMPORTED_MODULE_7__angular_material_core__["g" /* MAT_DATE_LOCALE */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_material_core__["f" /* MAT_DATE_FORMATS */], useValue: __WEBPACK_IMPORTED_MODULE_6__angular_material_moment_adapter__["a" /* MAT_MOMENT_DATE_FORMATS */] },
            ],
        }),
        __param(6, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_venue_service__["a" /* VenueService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], Object])
    ], AddShiftComponent);
    return AddShiftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/add-user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onRegisterSubmit()\" class=\"example-form\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <h1 mat-dialog-title>Add User</h1>\n  <mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Name\" required=\"required\"\n             type=\"text\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Last\" required=\"required\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Username\" required=\"required\"\n             type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Email\" required=\"required\"\n             type=\"email\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Password\"\n             required=\"required\" type=\"password\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"user?.role === 'Admin'\" class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"role\" name=\"role\" placeholder=\"Select a role\" required=\"required\">\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n          {{role.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"user?.role === 'Manager'\" class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"role\" name=\"role\" placeholder=\"Select a role\" required=\"required\">\n        <mat-option *ngFor=\"let role of managerViewRoles\" [value]=\"role.value\">\n          {{role.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n  </mat-dialog-content>\n  <mat-dialog-actions fxLayoutAlign=\"center center\">\n    <button mat-raised-button type=\"submit\">Submit</button>\n    <button mat-dialog-close mat-raised-button type=\"button\">Cancel</button>\n  </mat-dialog-actions>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/add-user/add-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/add-user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_mailer_service__ = __webpack_require__("../../../../../src/app/services/mailer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddUserComponent = (function () {
    function AddUserComponent(validateService, authService, snackBar, router, dialog, mail) {
        this.validateService = validateService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.mail = mail;
        this.roles = [
            { value: 'Admin', viewValue: 'Admin' },
            { value: 'Manager', viewValue: 'Manager' },
            { value: 'DJ', viewValue: 'DJ' }
        ];
        this.managerViewRoles = [
            { value: 'Manager', viewValue: 'Manager' },
            { value: 'DJ', viewValue: 'DJ' }
        ];
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AddUserComponent.prototype.sendEmail = function () {
        var mail = {
            name: this.name,
            last: this.last,
            username: this.username,
            password: this.password,
            email: this.email,
            message: this.username,
            role: this.role
        };
        console.log('!!!!MAILING!!!' + this.name, this.last, this.role);
        this.mail.sendEmail(mail).subscribe(function (data) {
            // console.log(mail);
            //
            // if (data.success) {
            //   this.snackBar.open('Email Sent', '', {duration: 3000});
            //   this.dialog.closeAll();
            //   console.log(mail);
            // } else {
            //   this.snackBar.open('Something went wrong', 'try again', {duration: 3000});
            // }
        });
    };
    AddUserComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            last: this.last,
            email: this.email,
            username: this.username,
            password: this.password,
            role: this.role,
            availability: []
        };
        //Require fields
        if (!this.validateService.validateRegister(user)) {
            this.snackBar.open('Please fill all fields', 'close', { duration: 2000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.snackBar.open('Please enter a valid email');
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('Registration Successful', '', { duration: 3000 });
                _this.dialog.closeAll();
                _this.sendEmail();
                console.log(user);
            }
            else {
                _this.snackBar.open('Something went wrong', 'try again', { duration: 3000 });
            }
        });
        // console.log(user);
    };
    AddUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-user',
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_mailer_service__["a" /* MailerService */]],
            template: __webpack_require__("../../../../../src/app/dialogs/add-user/add-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/add-user/add-user.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__services_mailer_service__["a" /* MailerService */]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/add-venue/add-venue.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Venue</h1>\n<form fxLayout=\"column\" (submit)=\"onRegisterSubmit()\" class=\"example-form\" fxLayoutGap=\"20px\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Name\"\n           required=\"required\">\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Address\"\n           required=\"required\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"text\" [(ngModel)]=\"city\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"City\"\n           required=\"required\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <mat-select placeholder=\"Select a state\" [(ngModel)]=\"state\" name=\"state\">\n      <mat-option *ngFor=\"let state of states\" [value]=\"state.value\">\n        {{state.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput #postalCode type=\"number\" maxlength=\"5\" [(ngModel)]=\"zip\" [ngModelOptions]=\"{standalone: true}\"\n           placeholder=\"Zip\" required=\"required\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"number\" [(ngModel)]=\"phone\" maxlength=\"10\" [ngModelOptions]=\"{standalone: true}\"\n           placeholder=\"Phone (###-###-####)\" required=\"required\">\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput type=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Email\"\n           required=\"required\">\n  </mat-form-field>\n\n  <div fxLayoutAlign=\"center center\">\n    <button mat-raised-button type=\"submit\">Submit</button>\n    <button mat-raised-button type=\"button\" mat-dialog-close=\"true\"> Done</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/add-venue/add-venue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/add-venue/add-venue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddVenueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddVenueComponent = (function () {
    function AddVenueComponent(authService, validateService, snackBar, router, dialog) {
        this.authService = authService;
        this.validateService = validateService;
        this.snackBar = snackBar;
        this.router = router;
        this.dialog = dialog;
        this.states = [
            { value: 'MO', viewValue: 'MO' },
            { value: 'IL', viewValue: 'IL' },
            { value: 'Other', viewValue: 'Other' }
        ];
    }
    AddVenueComponent.prototype.ngOnInit = function () {
    };
    AddVenueComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var venue = {
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            phone: this.phone,
            email: this.email
        };
        //Require fields
        if (!this.validateService.validateAddVenue(venue)) {
            this.snackBar.open('Please fill all fields', 'close', { duration: 2000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(venue.email)) {
            this.snackBar.open('Please enter a valid email');
            return false;
        }
        //Register Venue
        this.authService.addVenue(venue).subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('Venue Created!', '', { duration: 3000 });
                _this.dialog.closeAll();
                console.log(venue);
            }
            else {
                _this.snackBar.open('Something went wrong', 'try again', { duration: 3000 });
            }
        });
    };
    AddVenueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-venue',
            template: __webpack_require__("../../../../../src/app/dialogs/add-venue/add-venue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/add-venue/add-venue.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], AddVenueComponent);
    return AddVenueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/create-shift/create-shift.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center\">\n  <mat-card-header>\n    <h1 mat-card-title>Create Shift</h1>\n  </mat-card-header>\n  <mat-card-content>\n    <div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-select [(ngModel)]=\"dj\" name=\"dj\" placeholder=\"Select a DJ\" required=\"required\">\n          <mat-option *ngFor=\"let dj of djs\" [value]=\"dj\">\n            {{dj.username}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <button (click)=\"selectDJ()\" [disabled]=\"dj.username == null\" color=\"primary\" mat-raised-button>Select</button>\n\n    </div>\n  </mat-card-content>\n</mat-card>\n<mat-card *ngIf=\"open == true\">\n  <div fxFlex=\"50\">\n    <h3 mat-card-subtitle>Selecting shift for: {{dj.name}} {{dj.last}}</h3>\n    <h4>Blocked dates:</h4>\n    <div *ngFor=\"let date of dates\" style=\"color: red\">{{date}} </div>\n  </div>\n</mat-card>\n\n<mat-card *ngIf=\"open == true\">\n  <mat-card-header>\n    <h1 mat-card-title>Select Venue, Time, Date</h1>\n  </mat-card-header>\n  <mat-card-content>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select placeholder=\"Select a Venue\" [(ngModel)]=\"venue\" name=\"venue\" required=\"required\">\n        <mat-option *ngFor=\"let venue of venues\" [value]=\"venue\">\n          {{venue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select placeholder=\"Select a Time\" [(ngModel)]=\"time\" name=\"time\" required=\"required\">\n        <mat-option *ngFor=\"let time of times\" [value]=\"time\">\n          {{time}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput matInput\n             [matDatepicker]=\"picker\"\n             placeholder=\"Choose dates\"\n             [(ngModel)]=\"date\"\n             (dateInput)=\"date.getDay()\"\n             [min]=\"minDate\"\n             name=\"date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n\n    <button mat-button color=\"accent\" (click)=\"submitShift()\" [disabled]=\"disable\">Submit</button>\n\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/create-shift/create-shift.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/create-shift/create-shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_venue_service__ = __webpack_require__("../../../../../src/app/services/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateShiftComponent = (function () {
    function CreateShiftComponent(us, as, vs, snack, dialog) {
        this.us = us;
        this.as = as;
        this.vs = vs;
        this.snack = snack;
        this.dialog = dialog;
        this.hasDJ = false;
        this.open = false;
        this.djs = [];
        this.venues = [];
        this.dates = [];
        this.times = ['9:00'];
        this.minDate = new Date();
        this.errorMsg = false;
        this.disable = false;
    }
    CreateShiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getDJ().subscribe(function (data) {
            _this.dj = data;
            for (var i = 0; i < _this.dj.length; i++) {
                _this.djs.push(_this.dj[i]);
            }
            console.log(_this.dates);
        });
        this.vs.getVenue().subscribe(function (data) {
            _this.venue = data;
            for (var i = 0; i < _this.venue.length; i++) {
                _this.venues.push(_this.venue[i].name);
                console.log(_this.venue[i].name);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.us.getShifts().subscribe(function (data) {
            _this.shift = data;
        });
    };
    CreateShiftComponent.prototype.selectDJ = function () {
        this.open = true;
        for (var i = 0; i < this.dj.availability.length; i++) {
            this.dates.push(this.dj.availability[i]);
            console.log(this.dates);
        }
        this.dj.availability.forEach(function (value) {
            console.log("V   " + value);
        });
    };
    CreateShiftComponent.prototype.submitShift = function () {
        var _this = this;
        var d = this.date.getDate();
        function matchesDate(currentValue) {
            return currentValue !== d;
        }
        this.shift = {
            venue: this.venue,
            date: this.date,
            time: this.time,
            dj: this.dj.username,
            hasDJ: this.hasDJ = true
        };
        if (this.dj.availability.every(matchesDate) !== true) {
            this.errorMsg = true;
            this.snack.open("DJ is not available", '', { duration: 2000 });
        }
        else {
            this.as.addShift(this.shift)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snack.open('shift has been added!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snack.open('Shift already exists!', 'Oh no', { duration: 1000 });
                }
            });
        }
    };
    CreateShiftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-shift',
            template: __webpack_require__("../../../../../src/app/dialogs/create-shift/create-shift.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/create-shift/create-shift.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */]])
    ], CreateShiftComponent);
    return CreateShiftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Delete user</h1>\n<mat-dialog-content>\n  <p>Are you sure you want to delete?</p>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"data\">\n    <mat-icon>close</mat-icon>\n    Delete\n  </button>\n  <button mat-button mat-dialog-close> Nevermind</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmDialogComponent = (function () {
    function ConfirmDialogComponent() {
        this.show = false;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/edit-shift/edit-shift.component.html":
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"onEditSubmit()\" action=\"\\app\\send\" class=\"example-form\" fxLayout=\"column\" fxLayoutGap=\"20px\"\n      method=\"post\">\n  <h1 mat-dialog-title>Edit Shift</h1>\n  <br/>\n  <span [(ngModel)]=\"data.venue\" name=\"venue\" placeholder=\"venue\">{{data.venue}}</span>\n  <mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n    <!--<mat-form-field class=\"example-full-width\">\n      <input matInput [(ngModel)]=\"data.venue\" placeholder=\"venue\" name=\"venue\" value=\"{{data.venue}}\">\n    </mat-form-field>-->\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.date\" matInput name=\"date\" placeholder=\"date\" type=\"text\" value=\"{{data.date}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.time\" matInput name=\"time\" placeholder=\"time\" type=\"text\" value=\"{{data.time}}\">\n    </mat-form-field>\n\n  </mat-dialog-content>\n  <mat-dialog-actions fxLayoutAlign=\"center center\">\n    <button [mat-dialog-close]=\"data\" mat-raised-button type=\"submit\">Submit</button>\n    <button mat-dialog-close mat-raised-button type=\"button\">Cancel</button>\n  </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-shift/edit-shift.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-shift/edit-shift.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShiftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditShiftComponent = (function () {
    function EditShiftComponent(as, snackBar, dialog, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditShiftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getShifts().subscribe(function (shift) {
            _this.venue = shift.venue;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditShiftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-shift',
            template: __webpack_require__("../../../../../src/app/dialogs/edit-shift/edit-shift.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/edit-shift/edit-shift.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], EditShiftComponent);
    return EditShiftComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/edit-user/edit-user.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <h1 mat-dialog-title>Edit User</h1>\n  <mat-dialog-content fxLayout=\"column\" fxLayoutAlign=\"center\">\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.name\" matInput name=\"first\" placeholder=\"Name\" value=\"{{data.name}}\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.last\" matInput name=\"last\" placeholder=\"Last\" type=\"text\" value=\"{{data.last}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.username\" matInput name=\"user\" placeholder=\"username\" type=\"text\"\n             value=\"{{data.username}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.email\" matInput name=\"email\" placeholder=\"email\" type=\"email\" value=\"{{data.email}}\">\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"user?.role === 'Admin'\" class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.role\" name=\"role\" placeholder=\"Select a role\">\n        <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n          {{role.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field *ngIf=\"user?.role === 'Manager'\" class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"role\" name=\"role\" placeholder=\"Select a role\" required=\"required\">\n        <mat-option *ngIf=\"user?.role === 'DJ'\" [value]=\"user?.role\">{{user.role}}</mat-option>\n        <mat-option *ngFor=\"let role of managerViewRoles\" [value]=\"role.value\">\n          {{role.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <button (click)=\"changePassword()\" mat-button>Change password</button>\n\n    <mat-form-field *ngIf=\"open == true\" class=\"example-full-width\">\n      <input [(ngModel)]=\"data.password\" [value]=\"data.password\" matInput placeholder=\"password\" type=\"text\">\n    </mat-form-field>\n\n  </mat-dialog-content>\n  <mat-dialog-actions fxLayoutAlign=\"center center\">\n    <button [mat-dialog-close]=\"data\" mat-raised-button type=\"submit\">Submit</button>\n    <button mat-dialog-close mat-raised-button type=\"button\">Cancel</button>\n  </mat-dialog-actions>\n</form>\n\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-user/edit-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-user/edit-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditUserComponent = (function () {
    function EditUserComponent(as, snackBar, dialog, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.open = false;
        this.roles = [
            { value: 'Admin', viewValue: 'Admin' },
            { value: 'Manager', viewValue: 'Manager' },
            { value: 'DJ', viewValue: 'DJ' }
        ];
        this.managerViewRoles = [
            { value: 'Manager', viewValue: 'Manager' },
            { value: 'DJ', viewValue: 'DJ' }
        ];
    }
    EditUserComponent.prototype.changePassword = function () {
        this.open = true;
    };
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    EditUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/edit-venue/edit-venue.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n  <h1 mat-dialog-title>Edit Venue</h1>\n  <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.name\" matInput name=\"name\" placeholder=\"Name\" type=\"text\" value=\"{{data.name}}\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.address\" matInput name=\"address\" placeholder=\"Address\" type=\"text\"\n             value=\"{{data.address}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.city\" matInput name=\"city\" placeholder=\"City\" type=\"text\" value=\"{{data.city}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.state\" name=\"state\" placeholder=\"Select a state\">\n        <mat-option *ngFor=\"let state of states\" [value]=\"state.value\">\n          {{state.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input #postalCode [(ngModel)]=\"data.zip\" matInput maxlength=\"5\" name=\"zip\" placeholder=\"Zip(5 digit)\"\n             type=\"number\" value=\"{{data.zip}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.phone\" matInput maxlength=\"10\" name=\"phone\" placeholder=\"Phone\" type=\"number\"\n             value=\"{{data.phone}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n      <input [(ngModel)]=\"data.email\" matInput name=\"email\" placeholder=\"email\" type=\"email\" value=\"{{data.email}}\">\n    </mat-form-field>\n\n    <div fxLayoutAlign=\"center center\">\n      <button [mat-dialog-close]=\"data\" mat-raised-button type=\"submit\">Submit</button>\n      <button mat-dialog-close=\"true\" mat-raised-button type=\"button\"> Done</button>\n    </div>\n  </mat-dialog-content>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-venue/edit-venue.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/edit-venue/edit-venue.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditVenueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EditVenueComponent = (function () {
    function EditVenueComponent(as, snackBar, dialog, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.states = [
            { value: 'MO', viewValue: 'MO' },
            { value: 'IL', viewValue: 'IL' },
            { value: 'Other', viewValue: 'Other' }
        ];
    }
    EditVenueComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-venue',
            template: __webpack_require__("../../../../../src/app/dialogs/edit-venue/edit-venue.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/edit-venue/edit-venue.component.scss")]
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], EditVenueComponent);
    return EditVenueComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/select-dj/select-dj.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-card-header>\n    <h1 mat-card-title>Select a DJ</h1>\n  </mat-card-header>\n  <mat-card-content>\n    <div>\n      {{data?.venue}}\n    </div>\n    <div>\n      {{data?.day}}\n    </div>\n    <div>\n      {{data?.time}}\n    </div>\n\n    <mat-form-field class=\"example-full-width\">\n      <mat-select [(ngModel)]=\"data.dj\" placeholder=\"Select a role\">\n        <mat-option value=\"\">(none)</mat-option>\n        <mat-option *ngFor=\"let dj of djs\" [value]=\"dj\">\n          {{dj}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n  </mat-card-content>\n  <mat-card-actions>\n    <button [mat-dialog-close]=\"data\" mat-raised-button type=\"submit\">Choose</button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/select-dj/select-dj.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/select-dj/select-dj.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectDjComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SelectDjComponent = (function () {
    function SelectDjComponent(us, dialog, as, snackBar, router, data) {
        this.us = us;
        this.dialog = dialog;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.data = data;
        this.djs = [];
    }
    SelectDjComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getDJ().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.djs.push(data[i].username);
            }
        });
        console.log(this.data.dj);
    };
    SelectDjComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-select-dj',
            template: __webpack_require__("../../../../../src/app/dialogs/select-dj/select-dj.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/select-dj/select-dj.component.scss")]
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */], Object])
    ], SelectDjComponent);
    return SelectDjComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode__ = __webpack_require__("../../../../jwt-decode/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jwt_decode__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function (route) {
        var expectedRole = route.data.expectedRole;
        var token = localStorage.getItem('id_token');
        var tokenPayload = __WEBPACK_IMPORTED_MODULE_3_jwt_decode___default()(token);
        if (!this.authService.isAuthenticated() || tokenPayload.role !== expectedRole) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AdminGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(as, r, snack) {
        this.as = as;
        this.r = r;
        this.snack = snack;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.as.loggedIn()) {
            return true;
        }
        else {
            this.r.navigate(['/login']);
            this.snack.open('You must be logged in to see this', '', { duration: 3000 });
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-card>\n    <mat-card-header>\n      <h1 mat-card-title>Find the user manual here!</h1>\n    </mat-card-header>\n    <mat-card-content>\n      <a href=\"https://docs.google.com/document/d/1boqflauJAs5pIDVztuqul7EfbBJZif-_W8aDvquDlqI\">\n        <button mat-icon-button>\n          <mat-icon>file_copy</mat-icon>\n        </button>\n      </a>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/help/help.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent(as) {
        this.as = as;
    }
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    HelpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-help',
            template: __webpack_require__("../../../../../src/app/help/help.component.html"),
            styles: [__webpack_require__("../../../../../src/app/help/help.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pageview\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <div class=\"landing\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"25px\">\n    <div><img src=\"../../assets/images/Sync.png\"/></div>\n    <div class=\"tag\" fxHide.lt-md fxShow=\"true\"><h1>Schedules made easy.</h1></div>\n    <div>\n      <app-login-bar></app-login-bar>\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\nh1 {\n  color: black;\n  font-size: 76px;\n  font-weight: 100;\n  font-family: 'Dosis', sans-serif;\n  margin: 10px; }\n\n#clubVid {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login-bar/login-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n  <form (submit)=\"onLoginSubmit()\" class=\"example-form\" fxLayoutGap=\"20px\">\n    <div class=\"login-bar\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"25px\">\n      <mat-form-field fxFlex=\"40\">\n        <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Username\" required=\"required\"\n               type=\"text\">\n      </mat-form-field>\n      <mat-form-field fxFlex=\"40\">\n        <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Password\"\n               required=\"required\" type=\"password\">\n      </mat-form-field>\n      <div>\n        <button mat-raised-button type=\"submit\" value=\"login\">LOGIN</button>\n      </div>\n      <div fxFlex=\"20\">\n        <a class=\"forgot-password\" routerLink=\"reset-password\">Forgot Password?</a>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login-bar/login-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.example-form {\n  width: 80%; }\n\n.login-bar .mat-form-field {\n  width: 95%; }\n\n.login-bar .mat-raised-button {\n  color: white;\n  font-weight: 300;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #0BA5DB;\n  box-shadow: #eeeeee;\n  border-radius: 4px;\n  width: auto; }\n\n.login-bar .forgot-password {\n  color: darkblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login-bar/login-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginBarComponent = (function () {
    function LoginBarComponent(validateService, snackBar, router, authService) {
        this.validateService = validateService;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
    }
    LoginBarComponent.prototype.ngOnInit = function () {
    };
    LoginBarComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            role: this.role
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.snackBar.open('You are now logged in', 'close', { duration: 5000 });
                _this.router.navigate(['portal']);
            }
            else {
                _this.snackBar.open(data.msg, 'close', { duration: 5000 });
                _this.router.navigate(['/home']);
            }
        });
    };
    ;
    LoginBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-bar',
            template: __webpack_require__("../../../../../src/app/login/login-bar/login-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login-bar/login-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginBarComponent);
    return LoginBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-card class=\"login-card\" fxFlex>\n    <mat-card-header fxLayoutAlign=\"center center\">\n    <span class=\"sync-logo\">\n      Sync\n    </span>\n    </mat-card-header>\n    <mat-card-content>\n      <form (submit)=\"onLoginSubmit()\" class=\"example-form\" fxLayoutGap=\"30px\">\n        <div class=\"login-bar\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"25px\">\n          <mat-form-field class=\"example-full-width\">\n            <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Username\"\n                   required=\"required\" type=\"text\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Password\"\n                   required=\"required\" type=\"password\">\n          </mat-form-field>\n          <div>\n            <button mat-raised-button type=\"submit\" value=\"login\">LOGIN</button>\n          </div>\n          <div fxFlex=\"20\">\n            <a class=\"forgot-password\" routerLink=\"reset-password\">Forgot Password?</a>\n          </div>\n        </div>\n      </form>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.login-card {\n  margin-top: 60px;\n  width: 75%;\n  height: 100%;\n  border-radius: 5px; }\n  .login-card form .mat-form-field {\n    width: 50%; }\n  .login-card form .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.sync-logo {\n  font-family: Righteous, sans-serif;\n  font-weight: bold;\n  font-size: 48px;\n  letter-spacing: 0;\n  color: #0BA5DB; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(validateService, snackBar, router, authService) {
        this.validateService = validateService;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
            role: this.role
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.snackBar.open('You are now logged in', 'close', { duration: 5000 });
                _this.router.navigate(['portal']);
            }
            else {
                _this.snackBar.open(data.msg, 'close', { duration: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    ;
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z6\" scroll color=\"primary\">\n  <span class=\"sync-logo\" fxLayout=\"row\" fxShow=\"true\">\n    Sync\n  </span>\n\n  <span class=\"example-spacer\"></span>\n\n  <div class=\"nav-menu\" fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" fxShow=\"true\">\n    <button *ngIf=\"authService.loggedIn()\" [matMenuTriggerFor]=\"menu\" class=\"menu\" mat-icon-button>\n      <mat-icon>account_circle</mat-icon>\n    </button>\n  </div>\n</mat-toolbar>\n\n\n<mat-menu #menu=\"matMenu\" xPosition=\"after\">\n  <span mat-menu-item>\n    {{user?.name}}\n  </span>\n  <button mat-menu-item routerLink=\"../portal\">\n    <mat-icon>home</mat-icon>\n    <span>home</span>\n  </button>\n  <button mat-menu-item routerLink=\"../profile\">\n    <mat-icon>person</mat-icon>\n    <span>profile</span>\n  </button>\n  <button mat-menu-item (click)=\"onLogoutClick()\">\n    <mat-icon>exit_to_app</mat-icon>\n    <span>logout</span>\n  </button>\n  <button mat-menu-item routerLink=\"../help\">\n    <mat-icon>help</mat-icon>\n    <button mat-button routerLink=\"help\">help</button>\n  </button>\n</mat-menu>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-spacer {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto; }\n\n.sync-logo {\n  font-family: Righteous, sans-serif;\n  font-weight: bold;\n  font-size: 24px;\n  letter-spacing: 0; }\n\n.mat-toolbar {\n  background-color: white;\n  color: #0BA5DB; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.snackBar.open('you are now logged out', 'ok', { duration: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/availabilty/availabilty.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 fxLayoutAlign=\"center center\" mat-card-title>\n  {{user?.name}} {{user?.last}}'s Availability\n</h1>\n<div class=\"full-height\" fxLayout=\"column\" fxLayoutAlign=\"center start\">\n  <mat-card class=\"content-card\" fxLayout=\"column\" fxLayoutAlign=\"center space-evenly\" fxLayoutGap=\"20px\">\n    <h2 mat-card-title>Select dates to block</h2>\n    <h3 mat-card-subtitle>(choose as many as you'd like...)</h3>\n\n    <mat-card class=\"Info-card\" fxLayout=\"column\">\n      <mat-toolbar color=\"primary\">\n        <span>Edit Availability</span>\n        <span class=\"example-spacer\"></span>\n        <button mat-icon-button [disabled]=\"!disabled\" (click)=\"enable()\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n      </mat-toolbar>\n      <mat-card class=\"profile-attribute\" fxFlex>\n        <form (submit)=\"saveAvailability(user)\" fxLayoutGap=\"30\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput\n                   [matDatepicker]=\"picker\"\n                   placeholder=\"Choose dates\"\n                   [(ngModel)]=\"date\"\n                   (dateInput)=\"getAvail(date)\"\n                   [disabled]=\"disabled\"\n                   [min]=\"minDate\"\n                   name=\"date\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\">\n              <mat-icon matDatepickerToggleIcon>add</mat-icon>\n            </mat-datepicker-toggle>\n            <mat-datepicker #picker touchUi=\"true\"></mat-datepicker>\n          </mat-form-field>\n          <button mat-raised-button color=\"primary\" [disabled]=\"disabled\" type=\"submit\">\n            <mat-icon>send</mat-icon>\n            <span> </span>Submit Availability\n          </button>\n        </form>\n      </mat-card>\n      <mat-card class=\"profile-attribute\" fxFlex>\n        <mat-card class=\"profile-attribute\" *ngFor=\"let date of dates\" style=\"width: 95%; background-color: white\">\n          {{date}} <span class=\"example-spacer\"> </span>\n          <button mat-icon-button>\n            <mat-icon>clear</mat-icon>\n          </button>\n        </mat-card>\n      </mat-card>\n    </mat-card>\n\n    <mat-card class=\"Info-card\" fxLayout=\"column\">\n      <mat-toolbar color=\"warn\">\n        <div fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\n          <mat-icon>not_interested</mat-icon>\n          <h2 mat-card-title> Blocked Dates: </h2>\n        </div>\n      </mat-toolbar>\n      <mat-card class=\"profile-attribute\" fxFlex>\n        <mat-card class=\"profile-attribute\" *ngIf=\"user?.availability\" style=\"width: 95%; background-color: white\">\n          {{user?.availability}} <span class=\"example-spacer\"> </span>\n        </mat-card>\n      </mat-card>\n    </mat-card>\n  </mat-card>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/availabilty/availabilty.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.portalhome {\n  height: 100vh;\n  width: 95%; }\n  .portalhome h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 200;\n    color: #0BA5DB; }\n  .portalhome .wrapper {\n    width: 100%; }\n    .portalhome .wrapper .mat-card-title {\n      color: black;\n      font-family: 'Roboto', sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n\n.mat-sidenav {\n  width: 50%; }\n\n.portal-bar {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px; }\n\n.Info-card {\n  width: 100%;\n  height: 100%; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: auto; }\n  .Info-card h1 {\n    color: white;\n    font-weight: bold; }\n  .Info-card .profile-attribute {\n    width: 100%;\n    background-color: whitesmoke; }\n    .Info-card .profile-attribute .label {\n      width: 100%;\n      background-color: #3f51b5;\n      color: white;\n      border-bottom-right-radius: 5px;\n      border-top-right-radius: 5px; }\n    .Info-card .profile-attribute .info {\n      width: 75%;\n      font-weight: bold;\n      font-size: 16px;\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px; }\n    .Info-card .profile-attribute .warn {\n      background-color: white; }\n    .Info-card .profile-attribute .week {\n      width: 100%; }\n    .Info-card .profile-attribute .date-text {\n      padding: 0;\n      width: 100%;\n      height: 100px;\n      font-size: 12px; }\n      .Info-card .profile-attribute .date-text .mat-card-header {\n        font-family: Righteous, sans-serif;\n        color: #3f51b5; }\n\n.avail-card {\n  width: 100%; }\n  .avail-card .mat-card-header {\n    font-weight: bolder; }\n  .avail-card .day-avail {\n    width: auto; }\n    .avail-card .day-avail .day {\n      width: 50%;\n      font-size: 20px;\n      font-weight: 300; }\n\n.full-height {\n  height: 100%; }\n\n.all {\n  background-color: #3f51b5;\n  color: white; }\n\n.example-spacer {\n  -ms-flex: 1 1 auto;\n      flex: 1 1 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/availabilty/availabilty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvailabiltyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AvailabiltyComponent = (function () {
    function AvailabiltyComponent(as, snackBar) {
        this.as = as;
        this.snackBar = snackBar;
        this.disabled = true;
        this.date = new Date().getDate();
        this.dates = [];
        this.minDate = new Date().getMonth() + 1;
        // maxDate = this.m;
        this.showDates = [];
        // m = new Date().getMonth();
        this.availability = [
            this.dates
        ];
    }
    AvailabiltyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        // console.log(this.maxDate)
    };
    AvailabiltyComponent.prototype.enable = function () {
        this.disabled = false;
        this.dates.length = 0;
    };
    AvailabiltyComponent.prototype.disable = function () {
        this.disabled = true;
    };
    AvailabiltyComponent.prototype.getAvail = function (date) {
        // let month = this.date.getMonth() + 1
        this.dates.push(date.getDate());
        // this.showDates.push(month + '/'+ date.getDate() + '/' + date.getFullYear());
        console.log('Date selected: ' + this.date);
        console.log('Dates selected: ' + this.dates);
    };
    AvailabiltyComponent.prototype.saveAvailability = function (user) {
        var _this = this;
        console.log('USER TEST: ' + 'user:' + user + ' name:' + user.name + ' avail: ' + user.availability);
        this.user.availability = {
            availability: this.dates
        };
        console.log(this.user.availability);
        this.disable();
        this.as.updateUser(this.user._id, this.user.availability)
            .subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('availability has been updated!', 'Cool', { duration: 2000 });
                console.log(_this.user);
                console.log(_this.user.availability);
            }
            else {
                _this.snackBar.open('something went wrong');
            }
        });
        console.log(this.user);
        this.ngOnInit();
    };
    AvailabiltyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-availabilty',
            template: __webpack_require__("../../../../../src/app/portal/availabilty/availabilty.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/availabilty/availabilty.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */]])
    ], AvailabiltyComponent);
    return AvailabiltyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/djs/djs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\" fxLayout=\"row\">\n  <mat-form-field>\n    <mat-icon matPrefix>search</mat-icon>\n    <input (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\" matInput>\n  </mat-form-field>\n  <div>\n    <button (click)=\"openDialog()\" mat-mini-fab>\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n</div>\n\n<div class=\"card-container\">\n  <mat-card *ngFor=\"let dj of djs\">\n\n  </mat-card>\n</div>\n<!--<div class=\"table-container\">-->\n  <!--<mat-table [dataSource]=\"dataSource\" matSort (click)=\"ngOnInit()\">-->\n\n    <!--&lt;!&ndash;<ng-container matColumnDef=\"id\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>&ndash;&gt;-->\n    <!--&lt;!&ndash;<mat-cell *matCellDef=\"let user\">{{user._id}}</mat-cell>&ndash;&gt;-->\n    <!--&lt;!&ndash;</ng-container>&ndash;&gt;-->\n\n    <!--&lt;!&ndash;[Name Column]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"name\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Name</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--&lt;!&ndash;[Last Name Column]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"last\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Last</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.last}}</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--&lt;!&ndash;[Username Column]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"username\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Username</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.username}}</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--&lt;!&ndash;[Email Column]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"email\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Email</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.email}}</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--&lt;!&ndash;[Password Column]&ndash;&gt;-->\n    <!--&lt;!&ndash;<ng-container matColumnDef=\"password\">&ndash;&gt;-->\n    <!--&lt;!&ndash;<mat-header-cell *matHeaderCellDef> Password </mat-header-cell>&ndash;&gt;-->\n    <!--&lt;!&ndash;<mat-cell *matCellDef=\"let user\">{{user.password}}</mat-cell>&ndash;&gt;-->\n    <!--&lt;!&ndash;</ng-container>&ndash;&gt;-->\n\n    <!--&lt;!&ndash;[Role Column]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"role\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> Role</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.role}}</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--&lt;!&ndash;[Actions]&ndash;&gt;-->\n    <!--<ng-container matColumnDef=\"actions\">-->\n      <!--<mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">-->\n        <!--<div fxLayout=\"row\">-->\n          <!--<button mat-button (click)=\"updateUser(user)\">-->\n            <!--<mat-icon>mode_edit</mat-icon>-->\n          <!--</button>-->\n          <!--<button mat-raised-button color=\"warn\" (click)=\"DeleteUser(user._id)\">-->\n            <!--<mat-icon>delete</mat-icon>-->\n          <!--</button>-->\n        <!--</div>-->\n      <!--</mat-cell>-->\n    <!--</ng-container>-->\n\n    <!--<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>-->\n    <!--<mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onRowClicked(row)\"></mat-row>-->\n\n  <!--</mat-table>-->\n  <!--<mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>-->\n<!--</div>-->\n\n\n<!--<div class=\"phone-responsive\" fxShow=\"false\" fxFlex fxShow.lt-md=\"true\" fxLayout=\"column\" fxLayoutAlign=\"center\">-->\n<!--<mat-list>-->\n<!--<mat-list-item *ngFor=\"let user of users\">-->\n<!--<mat-icon mat-list-icon>account_circle</mat-icon>-->\n<!--<h4 mat-line>{{user.name}} {{user.last}}</h4>-->\n<!--</mat-list-item>-->\n<!--</mat-list>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/portal/djs/djs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-card {\n  width: 90%; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n\n.phone-responsive {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/djs/djs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DjsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dialogs/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DjsComponent = (function () {
    function DjsComponent(dialog, us, as, snackBar, router) {
        this.dialog = dialog;
        this.us = us;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['name', 'last', 'username', 'email', 'role', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableDataSource */]();
    }
    DjsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getDJ().subscribe(function (data) { return _this.dataSource.data = data; });
        this.djs = this.dataSource.data;
    };
    DjsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    DjsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DjsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_add_user_add_user_component__["a" /* AddUserComponent */], { width: '500px' });
    };
    DjsComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    DjsComponent.prototype.DeleteUser = function (_id) {
        var _this = this;
        this.as.deleteUser(_id)
            .subscribe(function (data) {
            if (data.success) {
                _this.ngOnInit();
                _this.snackBar.open('User has been deleted', '', { duration: 3000 });
            }
            else {
                _this.snackBar.open('ERROR', '', { duration: 2000 });
            }
        });
        // this.router.navigate(['./admin']);
    };
    DjsComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user, user._id, user.name, user.last);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            width: '500px',
            data: {
                id: user._id,
                name: user.name,
                last: user.last,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.user = {
                name: result.name,
                last: result.last,
                email: result.email,
                username: result.username,
                role: result.role
            };
            _this.id = result.id;
            // console.log('updated user: ' + this.user + ',' + this.id + ',' +this.name + ',' + this.last + ',' + this.username + ',' + this.email + ',' + this.role);
            _this.as.updateUser(result.id, _this.user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('user has been updated!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */])
    ], DjsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */])
    ], DjsComponent.prototype, "sort", void 0);
    DjsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-djs',
            template: __webpack_require__("../../../../../src/app/portal/djs/djs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/djs/djs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], DjsComponent);
    return DjsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [ngStyle]=\"{'background-color': getColor(user?.role)}\" class=\"portal-bar\" color=\"primary\">\n  <span>{{user?.role}}</span></mat-toolbar>\n\n<mat-tab-group>\n  <!--<mat-tab label=\"HOME\" *ngIf=\"user?.role === 'Manager' || user?.role === 'DJ'\"><app-portal-home></app-portal-home></mat-tab>-->\n  <mat-tab label=\"USERS\" *ngIf=\"user?.role === 'Admin'\">\n    <usertable></usertable>\n  </mat-tab>\n  <mat-tab label=\"SCHEDULE\" *ngIf=\"user?.role === 'Manager' || user?.role === 'DJ'\">\n    <app-schedule></app-schedule>\n  </mat-tab>\n  <mat-tab label=\"DJ AVAILABILITY\" *ngIf=\"user?.role === 'Manager'\">\n    <view-avail></view-avail>\n  </mat-tab>\n  <mat-tab label=\"AVAILABILITY\" *ngIf=\"user?.role === 'DJ'\">\n    <app-availabilty></app-availabilty>\n  </mat-tab>\n  <!--<mat-tab label=\"CALENDAR\" *ngIf=\"user?.role === 'Manager'|| user?.role === 'DJ'\"><app-sync-calendar></app-sync-calendar> </mat-tab>-->\n  <mat-tab label=\"VENUES\" *ngIf=\"user?.role === 'Admin' || user?.role ==='Manager'\">\n    <app-venue-data></app-venue-data>\n  </mat-tab>\n  <mat-tab label=\"EMPLOYEES\" *ngIf=\"user?.role === 'Manager'\">\n    <app-djs></app-djs>\n  </mat-tab>\n  <mat-tab label=\"SHIFTS\" *ngIf=\"user?.role === 'Admin'\">\n    <app-shifts></app-shifts>\n  </mat-tab>\n  <!--<mat-tab label =\"cal2\"><app-table-cal></app-table-cal></mat-tab>-->\n\n\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/portal/nav/nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".portal-bar {\n  margin-top: 10px; }\n\nh3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n.mat-tab-label-content {\n  font-size: 18px;\n  background-color: #0BA5DB; }\n\n.mat-card {\n  width: 95%;\n  height: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(as) {
        this.as = as;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.role = profile.role;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavComponent.prototype.getColor = function (user) {
        switch (user) {
            case 'Admin':
                return 'purple';
            case 'Manager':
                return 'green';
            case 'DJ':
                return '#0BA5DB';
        }
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/portal/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal-home/portal-home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container (keydown.escape)=\"sidenav.close()\" fxFlex>\n  <mat-sidenav #sidenav position=\"end\">\n    {{dateClicked}}\n  </mat-sidenav>\n  <div *ngIf=\"user?.role === 'Manager'\" class=\"manager\">\n    <div class=\"portalhome\" fxHide.lt-md fxShow=\"true\">\n      <h1 mat-card-title>Welcome, {{user?.name}}!</h1>\n      <div class=\"wrapper\" fxLayout=\"column\" fxLayoutGap=\"20px\">\n        <div class=\"wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20x\">\n          <mat-card class=\"Info-card\" fxLayout=\"column\">\n            <mat-toolbar color=\"warn\" fxLayoutAlign=\"space-around center\">\n              Alerts\n            </mat-toolbar>\n\n            <mat-card *ngIf=\"this.alert == true\" class=\"profile-attribute\" fxFlex>\n              <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n                <mat-card class=\"label warn\" fxFlex=\"25%\" fxLayoutAlign=\"center center\"\n                          style=\"{background-color: white}\">\n                  <mat-icon color=\"warn\">error</mat-icon>\n                </mat-card>\n                <mat-card (click)=\"ngOnInit()\" class=\"info\">\n                  <h3>Shifts need to be assigned</h3>\n                </mat-card>\n              </mat-card>\n            </mat-card>\n\n          </mat-card>\n          <mat-card class=\"Info-card\">\n            <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n              <button (click)=\"prevWeek()\" mat-icon-button style=\"{color: white}\">\n                <mat-icon>keyboard_arrow_left</mat-icon>\n              </button>\n              <span class=\"p4\">Weekly <!--of {{currentDate.format(\"MMM Do YY\")}}--> </span>\n              <button (click)=\"nextWeek()\" mat-icon-button>\n                <mat-icon>keyboard_arrow_right</mat-icon>\n              </button>\n            </mat-toolbar>\n            <mat-card class=\"profile-attribute\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n              <div class=\"week\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\">\n                <div *ngFor=\"let week of weeks\" class=\"week\" fxLayout=\"row\">\n                  <ng-container *ngFor=\"let day of week\">\n                    <!--Disabled-->\n                    <div *ngIf=\"!isSelectedWeek(day.wDate)\" class=\"week-date disabled\" fxFlex\n                         fxLayoutAlign=\"center center\">\n                      <mat-card class=\"date-text\" fxFlex>\n                        <mat-card-header>\n                          {{ day.wDate.date() }}\n                        </mat-card-header>\n                        <mat-card-content>\n                          fgh\n                        </mat-card-content>\n                      </mat-card>\n                    </div>\n                    <!--Enabled-->\n                    <div (click)=\"selectDate(day)\"\n                         *ngIf=\"isSelectedWeek(day.wDate)\"\n                         [ngClass]=\"{ today: day.today, selected: day.selected }\"\n                         class=\"week-date enabled\"\n                         fxFlex>\n                      <mat-card (click)=\"sidenav.open()\" class=\"date-text\" fxFlex>\n                        <mat-card-header>\n                          <h1 mat-card-title>{{ day.wDate.date() }}</h1>\n                        </mat-card-header>\n                        <mat-card-content fxLayoutAlign=\"center center\">\n                        </mat-card-content>\n                      </mat-card>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </mat-card>\n          </mat-card>\n          <mat-card class=\"Info-card\" fxLayout=\"column\">\n            <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n              Available Shifts\n            </mat-toolbar>\n\n            <mat-card *ngFor=\"let empty of emptyshifts\" class=\"profile-attribute\" fxFlex>\n              <mat-card class=\"info\">\n                {{empty}}\n              </mat-card>\n            </mat-card>\n\n          </mat-card>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"user?.role === 'DJ'\" class=\"djportal\" fxLayoutAlign=\"center\">\n    <div class=\"portalhome\">\n      <h1 mat-card-title>Welcome, {{user?.name}}!</h1>\n      <div class=\"wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20x\">\n        <mat-card class=\"Info-card\">\n          <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n            <button (click)=\"prevWeek()\" mat-icon-button style=\"{color: white}\">\n              <mat-icon>keyboard_arrow_left</mat-icon>\n            </button>\n            <span class=\"p4\">Week of {{currentDate.format(\"MMM Do YY\")}} </span>\n            <button (click)=\"nextWeek()\" mat-icon-button>\n              <mat-icon>keyboard_arrow_right</mat-icon>\n            </button>\n          </mat-toolbar>\n          <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n            <div class=\"week-container\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\">\n              <div *ngFor=\"let week of weeks\" class=\"week\" fxLayout=\"row\">\n                <ng-container *ngFor=\"let day of week\">\n                  <!--Disabled-->\n                  <div *ngIf=\"!isSelectedWeek(day.wDate)\" class=\"week-date disabled\" fxFlex\n                       fxLayoutAlign=\"center center\">\n                    <mat-card class=\"date-text\" fxFlex>\n                      <mat-card-header>\n                        {{ day.wDate.date() }}\n                      </mat-card-header>\n                      <mat-card-content>\n                      </mat-card-content>\n                    </mat-card>\n                  </div>\n                  <!--Enabled-->\n                  <div (click)=\"selectDate(day)\"\n                       *ngIf=\"isSelectedWeek(day.wDate)\"\n                       [ngClass]=\"{ today: day.today, selected: day.selected }\"\n                       class=\"week-date enabled\"\n                       fxFlex>\n                    <mat-card (click)=\"sidenav.open()\" class=\"date-text\" fxFlex>\n                      <mat-card-header>\n                        <h1 mat-card-title>{{ day.wDate.date() }}</h1>\n                        <span> </span>\n                        <h1>{{day.wDate.format('dddd')}}</h1>\n                      </mat-card-header>\n                      <mat-card-content fxLayoutAlign=\"center center\">\n                        <div></div>\n                      </mat-card-content>\n                    </mat-card>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </mat-card>\n        </mat-card>\n\n\n        <mat-card class=\"Info-card\" fxLayout=\"column\">\n          <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n            Available Shifts\n          </mat-toolbar>\n\n          <div class=\"container\" fxFlex fxHide.lt-md fxShow=\"true\">\n\n            <div class=\"example-container mat-elevation-z8\">\n              <mat-table (click)=\"ngOnInit()\" [dataSource]=\"dataSource\" matSort>\n\n                <!--<ng-container matColumnDef=\"id\">-->\n                <!--<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>-->\n                <!--<mat-cell *matCellDef=\"let user\">{{user._id}}</mat-cell>-->\n                <!--</ng-container>-->\n\n                <!--[Name Column]-->\n                <ng-container matColumnDef=\"venue\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Venue</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\">{{shift.venue}}</mat-cell>\n                </ng-container>\n\n                <!--[Last Name Column]-->\n                <ng-container matColumnDef=\"date\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Date</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\">{{shift.date}}</mat-cell>\n                </ng-container>\n\n                <!--[Username Column]-->\n                <ng-container matColumnDef=\"time\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Time</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\">{{shift.time}}</mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"DJ\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> DJ</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\">{{shift.dj}}</mat-cell>\n                </ng-container>\n\n\n                <ng-container matColumnDef=\"pending\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Pending</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\"><span *ngIf=\"shift.pending == true\">(pending)</span></mat-cell>\n                </ng-container>\n\n\n                <!--[Actions]-->\n                <ng-container matColumnDef=\"actions\">\n                  <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n                  <mat-cell *matCellDef=\"let shift\">\n                    <div fxLayout=\"row\">\n                      <button (click)=\"pickUpShift(shift)\" color=\"primary\" mat-icon-button>\n                        <mat-icon>keyboard_arrow_up</mat-icon>\n                      </button>\n                    </div>\n                  </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n              </mat-table>\n              <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n            </div>\n          </div>\n\n\n          <!--<div class=\"mobile\" fxShow=\"false\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\" fxShow.lt-md>-->\n          <!--<div>-->\n          <!--<button color=\"primary\" fxFlex mat-raised-button (click)=\"openDialog()\"><mat-icon>add</mat-icon></button>-->\n          <!--</div>-->\n          <!--<mat-accordion>-->\n          <!--<mat-expansion-panel *ngFor=\"let shift of shifts\">-->\n          <!--<mat-expansion-panel-header>-->\n          <!--<mat-panel-title>-->\n          <!--<h4>{{shift.venue}}</h4>-->\n          <!--</mat-panel-title>-->\n          <!--</mat-expansion-panel-header>-->\n          <!--<div fxLayout=\"row\">-->\n          <!--<div class=\"header\" fxLayout=\"column\" fxFlex=\"25\">-->\n          <!--<span>Date: </span>-->\n          <!--<span>Time: </span>-->\n          <!--</div>-->\n          <!--<div fxLayout=\"column\" fxFlex>-->\n          <!--<span>{{shift.date}}</span>-->\n          <!--<span>{{shift.time}}</span>-->\n          <!--</div>-->\n          <!--</div>-->\n          <!--&lt;!&ndash;<p><b>Role:</b><br>{{user.role}}</p>&ndash;&gt;-->\n          <!--&lt;!&ndash;<p><b>Username:</b><br>{{user.username}}</p>&ndash;&gt;-->\n          <!--&lt;!&ndash;<p><b>Contact:</b><br> </p>&ndash;&gt;-->\n          <!--&lt;!&ndash;<span><mat-icon>email</mat-icon> {{user.email}}</span>&ndash;&gt;-->\n          <!--<mat-action-row>-->\n          <!--<button mat-icon-button color=\"warn\"(click)=\"pickUpShift(shift)\"><mat-icon>get</mat-icon></button>-->\n          <!--</mat-action-row>-->\n          <!--</mat-expansion-panel>-->\n          <!--</mat-accordion>-->\n          <!--</div>-->\n\n\n        </mat-card>\n\n      </div>\n    </div>\n  </div>\n\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal-home/portal-home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.portalhome {\n  height: 100vh;\n  width: 95%; }\n  .portalhome h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 200;\n    color: #0BA5DB; }\n  .portalhome .wrapper {\n    width: 100%; }\n    .portalhome .wrapper .mat-card-title {\n      color: black;\n      font-family: 'Roboto', sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n\n.mat-sidenav {\n  width: 50%; }\n\n.portal-bar {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px; }\n\n.Info-card {\n  width: 100%;\n  height: 100%; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: auto; }\n  .Info-card h1 {\n    color: white;\n    font-weight: bold; }\n  .Info-card .profile-attribute {\n    width: 100%;\n    background-color: whitesmoke; }\n    .Info-card .profile-attribute .label {\n      width: 100%;\n      background-color: #3f51b5;\n      color: white;\n      border-bottom-right-radius: 5px;\n      border-top-right-radius: 5px; }\n    .Info-card .profile-attribute .info {\n      width: 75%;\n      font-weight: bold;\n      font-size: 16px;\n      border-bottom-left-radius: 5px;\n      border-top-left-radius: 5px; }\n    .Info-card .profile-attribute .warn {\n      background-color: white; }\n    .Info-card .profile-attribute .week {\n      width: 100%; }\n    .Info-card .profile-attribute .date-text {\n      padding: 0;\n      width: 100%;\n      height: 100px;\n      font-size: 12px; }\n      .Info-card .profile-attribute .date-text .mat-card-header {\n        font-family: Righteous, sans-serif;\n        color: #3f51b5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal-home/portal-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortalHomeComponent = (function () {
    function PortalHomeComponent(auth, dialog, us, snackBar) {
        this.auth = auth;
        this.dialog = dialog;
        this.us = us;
        this.snackBar = snackBar;
        // date: Date;
        this.open = false;
        this.djs = [];
        this.venues = [];
        this.dayName = __WEBPACK_IMPORTED_MODULE_2_moment__().format('dddd');
        this.date = new Date().getDate();
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.weeks = [];
        this.sortedDates = [];
        this.displayedColumns = ['venue', 'date', 'time', 'DJ', 'actions', 'pending'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatTableDataSource */]();
        this.selectedDates = [];
        this.onSelectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.alert = false;
        this.emptyshifts = [];
        this.daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    }
    PortalHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.applyFilter('true');
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        // console.log(this.dayName);
        // console.log(this.currentDate);
        this.generateWeek();
        this.emptyshifts.length = 0;
        this.us.getShifts().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.shift = data;
            _this.ngOnInit();
        });
    };
    PortalHomeComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    PortalHomeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    PortalHomeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDates &&
            changes.selectedDates.currentValue &&
            changes.selectedDates.currentValue.length > 1) {
            // sort on date changes for better performance when range checking
            this.sortedDates = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](changes.selectedDates.currentValue, function (m) { return m.mDate.valueOf(); });
            this.generateWeek();
        }
    };
    PortalHomeComponent.prototype.isToday = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().isSame(__WEBPACK_IMPORTED_MODULE_2_moment__(date), 'day');
    };
    PortalHomeComponent.prototype.isSelected = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).isSame(selectedDate.wDate, 'day');
        }) > -1;
    };
    PortalHomeComponent.prototype.isSelectedWeek = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).isSame(selectedDate.mDate, 'day');
        });
    };
    PortalHomeComponent.prototype.selectDate = function (date) {
        this.onSelectDate.emit(date);
        console.log(date.wDate.format('dddd'));
        return this.dateClicked = date.wDate.format('dddd MMM Do YYYY');
    };
    //  Actions
    PortalHomeComponent.prototype.prevWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).subtract(1, 'weeks');
        this.generateWeek();
    };
    PortalHomeComponent.prototype.nextWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).add(1, 'weeks');
        this.generateWeek();
    };
    PortalHomeComponent.prototype.firstWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).startOf('month');
        this.generateWeek();
    };
    PortalHomeComponent.prototype.generateWeek = function () {
        var dates = this.fillDates(this.currentDate);
        var days = [];
        while (dates.length > 0) {
            days.push(dates.splice(0, 7));
        }
        this.weeks = days;
    };
    PortalHomeComponent.prototype.fillDates = function (currentMoment) {
        var _this = this;
        var firstOfWeek = __WEBPACK_IMPORTED_MODULE_2_moment__(currentMoment).startOf('week').day();
        var firstDayOfGrid = __WEBPACK_IMPORTED_MODULE_2_moment__(currentMoment).startOf('week').subtract(firstOfWeek, 'days');
        var start = firstDayOfGrid.date();
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](start, start + 7)
            .map(function (date) {
            var d = __WEBPACK_IMPORTED_MODULE_2_moment__(firstDayOfGrid).date(date);
            return {
                today: _this.isToday(d),
                selected: _this.isSelected(d),
                wDate: d,
            };
        });
    };
    PortalHomeComponent.prototype.pickUpShift = function (shift) {
        var _this = this;
        this.shift = {
            dj: this.user.username,
            pending: shift.pending = false
        };
        this.id = shift._id;
        this.auth.updateShift(this.id, this.shift)
            .subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open(shift.dj + ' picked up ' + shift.venue
                    + '!', '', { duration: 300 });
                _this.ngOnInit();
            }
            else {
                _this.snackBar.open('something went wrong');
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PortalHomeComponent.prototype, "selectedDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], PortalHomeComponent.prototype, "onSelectDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatPaginator */])
    ], PortalHomeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatSort */])
    ], PortalHomeComponent.prototype, "sort", void 0);
    PortalHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portal-home',
            template: __webpack_require__("../../../../../src/app/portal/portal-home/portal-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/portal-home/portal-home.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */]])
    ], PortalHomeComponent);
    return PortalHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<div class=\"must-log-in\" *ngIf=\"!authService.loggedIn()\" fxLayout=\"column\" fxLayoutAlign=\"center center\"\n     fxLayoutGap=\"50px\">\n  <h1> You must log in to see this content</h1>\n  <button routerLink=\"../login\" mat-raised-button color=\"primary\">Login</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".portal {\n  background-color: white;\n  padding: 16px;\n  height: 100vh; }\n\nh3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n.mat-tab-label-content {\n  font-size: 18px;\n  background-color: #0BA5DB; }\n\n.mat-card {\n  width: 95%;\n  height: auto; }\n\n.must-log-in {\n  width: 100%;\n  height: 100vh;\n  background-color: whitesmoke; }\n  .must-log-in h1 {\n    color: #777777;\n    font-family: Righteous, sans-serif;\n    font-weight: 500;\n    font-size: x-large; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortalComponent = (function () {
    function PortalComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
    }
    PortalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PortalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__("../../../../../src/app/portal/portal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/portal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxFlex>\n  <!--<mat-card class=\"Info-card\" *ngIf=\"user?.role === 'Manager' \">-->\n  <!--<mat-toolbar class=\"mat-elevation-z6\" color=\"primary\" >-->\n  <!--<span (click)=\"openPanel()\"><u>Assign Shift</u></span><span fxFlex class=\"example-spacer\"> </span><span>-->\n  <!--<button mat-icon-button (click)=\"refresh()\"><mat-icon>refresh</mat-icon></button>-->\n  <!--<button mat-icon-button *ngIf=\"!open\"><mat-icon (click)=\"openPanel()\">keyboard_arrow_down</mat-icon></button>-->\n  <!--<button mat-icon-button *ngIf=\"open\"><mat-icon (click)=\"openPanel()\">keyboard_arrow_up</mat-icon></button></span>-->\n  <!--</mat-toolbar>-->\n  <!--<mat-card-content *ngIf=\"open\">-->\n  <!--<mat-card class=\"profile-attribute\" *ngFor=\"let shift of shifts\" fxLayout=\"row\">-->\n  <!--<mat-card class=\"label\" fxLayoutAlign=\"center center\">-->\n  <!--<mat-icon>work</mat-icon>-->\n  <!--</mat-card>-->\n  <!--<mat-card class=\"info\">-->\n  <!--{{shift}}-->\n  <!--</mat-card>-->\n  <!--<mat-card>-->\n  <!--<mat-select placeholder=\"Select DJ...\" [(ngModel)]=\"dj\">-->\n  <!--<mat-option *ngFor=\"let dj of djs\" [value]=\"dj\">-->\n  <!--{{dj?.username}}-->\n  <!--</mat-option>-->\n  <!--</mat-select>-->\n  <!--</mat-card>-->\n  <!--</mat-card>-->\n  <!--</mat-card-content>-->\n  <!--<mat-toolbar class=\"actions\" *ngIf=\"open\">-->\n  <!--<span fxFlex class=\"example-spacer\"> </span>-->\n  <!--<span>-->\n  <!--<button mat-raised-button (click)=\"getSchedule()\">submit</button>-->\n  <!--</span>-->\n  <!--</mat-toolbar>-->\n  <!--</mat-card>-->\n  <app-shifts></app-shifts>\n\n  <!--<view-avail></view-avail>-->\n\n  <!--DJ-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/schedule/schedule.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-width: 300px; }\n\n::ng-deep .mat-sort-header-arrow.ng-trigger.ng-trigger-arrowPosition {\n  opacity: 0; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  max-height: 500px; }\n\n.mat-card {\n  width: 90%; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n\n.phone-responsive {\n  width: 100%; }\n\n.s-container {\n  height: 100vh; }\n\n.mat-card {\n  width: 200px;\n  border-radius: 5px;\n  font-weight: 300;\n  font-size: 16px; }\n\n.emp-card {\n  background-color: #0BA5DB;\n  color: white; }\n\n.day-card, .card-header {\n  background-color: white;\n  color: #0BA5DB; }\n\n.Info-card {\n  width: auto;\n  height: auto;\n  padding: 16px;\n  margin-top: 20px; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    cursor: pointer; }\n  .Info-card h1 {\n    color: white;\n    font-weight: bold; }\n  .Info-card .profile-attribute {\n    width: auto;\n    padding-top: 5px;\n    padding-bottom: 5px; }\n    .Info-card .profile-attribute .label {\n      width: 20%;\n      background-color: #3f51b5;\n      color: white;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n    .Info-card .profile-attribute .info {\n      width: 75%;\n      font-weight: bold;\n      font-size: 16px;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n      .Info-card .profile-attribute .info .mat-icon {\n        color: #0BA5DB; }\n\n.preferences {\n  width: 100%; }\n\n.actions {\n  border-bottom-right-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #0BA5DB; }\n  .actions .mat-raised-button {\n    background-color: whitesmoke;\n    color: black; }\n\n.container {\n  width: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewAvailability; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_add_shift_add_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_venue_service__ = __webpack_require__("../../../../../src/app/services/venue.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ScheduleComponent = (function () {
    function ScheduleComponent(dialog, us, vs, as, snackBar, router) {
        this.dialog = dialog;
        this.us = us;
        this.vs = vs;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.open = false;
        this.djs = [];
        this.venues = [];
        this.emptyshifts = [];
        this.shiftsv = [];
        this.shiftst = [];
        this.shiftsdt = [];
        this.shiftsdj = [];
        this.shifthd = ['Venue', 'Time', 'Date', 'DJ'];
        this.schedule = [];
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        //GET DJ LIST
        this.us.getDJ().subscribe(function (data) {
            _this.dj = data;
            for (var i = 0; i < data.length; i++) {
                _this.djs.push(data[i]);
            }
        });
        //GET VENUE LIST
        this.vs.getVenue().subscribe(function (data) {
            _this.venue = data;
            for (var i = 0; i < _this.venue.length; i++) {
                _this.venues.push(_this.venue[i].name);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        //GET SHIFT LIST
        this.us.getShifts().subscribe(function (data) {
            _this.shift = data;
            for (var i = 0; data.length; i++) {
                _this.shiftsv.push(_this.shift[i].venue);
                _this.shiftst.push(_this.shift[i].time);
                _this.shiftsdt.push(_this.shift[i].day);
                _this.shiftsdj.push(_this.shift[i].dj);
                if (_this.shift[i].dj === "") {
                    _this.emptyshifts.push(_this.shift[i].venue + ' // ' + _this.shift[i].day + ' // ' + _this.shift[i].time);
                    console.log(_this.emptyshifts);
                }
            }
        });
        //GET PROFILE
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ScheduleComponent.prototype.openDialog = function (shift) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_add_shift_add_shift_component__["a" /* AddShiftComponent */], { width: '500px' });
    };
    ScheduleComponent.prototype.getSchedule = function () {
        console.log(this.shift);
        console.log(this.dj);
    };
    ScheduleComponent.prototype.openPanel = function () {
        this.open = !this.open;
    };
    ScheduleComponent.prototype.refresh = function () {
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */])
    ], ScheduleComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */])
    ], ScheduleComponent.prototype, "sort", void 0);
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-schedule',
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_venue_service__["a" /* VenueService */]],
            template: __webpack_require__("../../../../../src/app/portal/schedule/schedule.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_venue_service__["a" /* VenueService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ScheduleComponent);
    return ScheduleComponent;
}());

// ====================================================================================================//
// ------------------------------------VIEW AVAILABILITY---------------------------------------------- //
// ====================================================================================================//
var ViewAvailability = (function () {
    function ViewAvailability(us, as, dialog) {
        this.us = us;
        this.as = as;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'last', 'availability'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableDataSource */]();
        this.open = false;
        this.djs = [];
        this.a = [];
    }
    ViewAvailability.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ViewAvailability.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ViewAvailability.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    ViewAvailability.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getDJ().subscribe(function (data) { return _this.dataSource.data = data; });
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */])
    ], ViewAvailability.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */])
    ], ViewAvailability.prototype, "sort", void 0);
    ViewAvailability = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'view-avail',
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_venue_service__["a" /* VenueService */]],
            template: __webpack_require__("../../../../../src/app/portal/schedule/view-avail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */]])
    ], ViewAvailability);
    return ViewAvailability;
}());



/***/ }),

/***/ "../../../../../src/app/portal/schedule/view-avail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"example-header\" fxLayout=\"row\">\n  <mat-form-field>\n    <mat-icon matPrefix>search</mat-icon>\n    <input (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\" matInput>\n  </mat-form-field>\n  <!--<div>-->\n  <!--<button mat-mini-fab (click)=\"openDialog()\"><mat-icon>add</mat-icon></button>-->\n  <!--</div>-->\n</div>\n\n<div class=\"table-container\">\n  <mat-table [dataSource]=\"dataSource\" matSort>\n\n\n    <!--[Name Column]-->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name</mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\n    </ng-container>\n\n    <!--[Last Name Column]-->\n    <ng-container matColumnDef=\"last\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Last</mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">{{user.last}}</mat-cell>\n    </ng-container>\n\n    <!--[Availability Column]-->\n    <ng-container matColumnDef=\"availability\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> N/A</mat-header-cell>\n      <mat-cell *matCellDef=\"let user\">{{user.availability}}</mat-cell>\n    </ng-container>\n\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onRowClicked(row)\"></mat-row>\n\n  </mat-table>\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n\n\n<!--<div class=\"phone-responsive\" fxShow=\"false\" fxFlex fxShow.lt-md=\"true\" fxLayout=\"column\" fxLayoutAlign=\"center\">-->\n<!--<mat-list>-->\n<!--<mat-list-item *ngFor=\"let user of users\">-->\n<!--<mat-icon mat-list-icon>account_circle</mat-icon>-->\n<!--<h4 mat-line>{{user.name}} {{user.last}}</h4>-->\n<!--</mat-list-item>-->\n<!--</mat-list>-->\n<!--</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/portal/shifts/shifts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxFlex fxHide.lt-md fxLayout=\"column\" fxShow=\"true\">\n  <div class=\"example-header\" fxLayout=\"row\">\n    <mat-form-field>\n      <mat-icon matPrefix>search</mat-icon>\n      <input (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\" matInput>\n    </mat-form-field>\n    <div *ngIf=\"user?.role === 'Admin' || user?.role === 'Manager' \">\n      <button (click)=\"openCreate()\" mat-mini-fab>\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table (click)=\"ngOnInit()\" [dataSource]=\"dataSource\" matSort>\n\n      <!--<ng-container matColumnDef=\"id\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user._id}}</mat-cell>-->\n      <!--</ng-container>-->\n\n      <!--[Name Column]-->\n      <ng-container matColumnDef=\"venue\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Venue</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\">{{shift.venue}}</mat-cell>\n      </ng-container>\n\n      <!--[Last Name Column]-->\n      <ng-container matColumnDef=\"date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\">{{shift.date}}</mat-cell>\n      </ng-container>\n\n      <!--[Username Column]-->\n      <ng-container matColumnDef=\"time\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Time</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\">{{shift.time}}</mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"DJ\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> DJ</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\">{{shift.dj}}</mat-cell>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"pending\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Pending</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\"><span *ngIf=\"shift.pending == true\">(pending)</span></mat-cell>\n      </ng-container>\n\n\n      <!--[Actions]-->\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let shift\">\n          <div fxLayout=\"row\">\n            <!--<button mat-icon-button color=\"primary\" *ngIf=\"user?.role === 'Manager'\" (click)=\"addDJ(shift)\"><mat-icon>account_circle</mat-icon></button>-->\n            <button (click)=\"DeleteShift(shift._id)\" *ngIf=\"user?.role === 'Manager' || user?.role === 'Admin'\" color=\"warn\"\n                    mat-icon-button>\n              <mat-icon>delete</mat-icon>\n            </button>\n            <button (click)=\"requestDrop(shift)\" *ngIf=\"user?.role === 'DJ'\" [disabled]=\"shift.pending ==true\" color=\"primary\"\n                    mat-icon-button>\n              <mat-label>Drop</mat-label>\n              <mat-icon>redo</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row (click)=\"onRowClicked(row)\" *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n  </div>\n  <div *ngIf=\n         \"user?.role === 'Manager'\">\n    <button (click)=\"sendSchedule()\" mat-raised-button>Send Email Notifications</button>\n  </div>\n</div>\n\n\n<div class=\"mobile\" fxShow=\"false\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\" fxShow.lt-md>\n  <div>\n    <button color=\"primary\" fxFlex mat-raised-button (click)=\"openDialog()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <mat-accordion>\n    <mat-expansion-panel *ngFor=\"let shift of shifts\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h4>{{shift.venue}}</h4>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div fxLayout=\"row\">\n        <div class=\"header\" fxLayout=\"column\" fxFlex=\"25\">\n          <span>Date: </span>\n          <span>Time: </span>\n        </div>\n        <div fxLayout=\"column\" fxFlex>\n          <span>{{shift.date}}</span>\n          <span>{{shift.time}}</span>\n        </div>\n      </div>\n      <!--<p><b>Role:</b><br>{{user.role}}</p>-->\n      <!--<p><b>Username:</b><br>{{user.username}}</p>-->\n      <!--<p><b>Contact:</b><br> </p>-->\n      <!--<span><mat-icon>email</mat-icon> {{user.email}}</span>-->\n      <mat-action-row>\n        <button mat-icon-button color=\"primary\" (click)=\"updateShift(shift)\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"DeleteShift(shift._id)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/portal/shifts/shifts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-card {\n  width: 90%; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n\n.phone-responsive {\n  width: 100%; }\n\n.container {\n  width: 100%; }\n\n.header {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/shifts/shifts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShiftsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_add_shift_add_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_delete_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dialogs_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dialogs_select_dj_select_dj_component__ = __webpack_require__("../../../../../src/app/dialogs/select-dj/select-dj.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dialogs_create_shift_create_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/create-shift/create-shift.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_mailer_service__ = __webpack_require__("../../../../../src/app/services/mailer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ShiftsComponent = (function () {
    function ShiftsComponent(dialog, us, as, snackBar, router, mailer) {
        this.dialog = dialog;
        this.us = us;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.mailer = mailer;
        this.displayedColumns = ['venue', 'date', 'time', 'DJ', 'actions', 'pending'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableDataSource */]();
        this.date = new Date().getDate();
        this.shifts = [];
        this.dj = '';
        this.pending = false;
    }
    ShiftsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            if (_this.user.role == 'DJ') {
                _this.applyFilter(_this.user.username);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.us.getShifts().subscribe(function (data) {
            _this.dataSource.data = data;
            for (var i = 0; i < data.length; i++) {
                _this.shifts.push(data[i]);
            }
        });
    };
    ShiftsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ShiftsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        console.log(filterValue);
    };
    ShiftsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_add_shift_add_shift_component__["a" /* AddShiftComponent */], { width: '500px' });
    };
    ShiftsComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_10__dialogs_create_shift_create_shift_component__["a" /* CreateShiftComponent */]);
    };
    ShiftsComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    ShiftsComponent.prototype.DeleteShift = function (_id) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_delete_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.as.deleteShift(_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.ngOnInit();
                    _this.snackBar.open('User has been deleted', '', { duration: 3000 });
                }
                else {
                    _this.snackBar.open('ERROR', '', { duration: 2000 });
                }
            });
        });
    };
    ShiftsComponent.prototype.updateShift = function (shift) {
        var _this = this;
        console.log(shift, shift._id, shift.venue, shift.time, shift.day);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_8__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            width: '500px',
            data: {
                id: shift._id,
                venue: shift.venue,
                time: shift.time,
                day: shift.day,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.shift = {
                venue: result.venue,
                time: result.time,
                day: result.day
            };
            _this.id = result.id;
            // console.log('updated user: ' + this.user + ',' + this.id + ',' +this.name + ',' + this.last + ',' + this.username + ',' + this.email + ',' + this.role);
            _this.as.updateShift(result.id, _this.shift)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('user has been updated!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    ShiftsComponent.prototype.addDJ = function (shift) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__dialogs_select_dj_select_dj_component__["a" /* SelectDjComponent */], {
            width: '500px',
            data: {
                id: shift._id,
                venue: shift.venue,
                time: shift.time,
                day: shift.day,
                dj: shift.dj
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.shift = {
                dj: result.dj
            };
            console.log(result.dj);
            _this.id = result.id;
            console.log(_this.id);
            _this.as.updateShift(result.id, _this.shift)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open(result.dj + ' assigned to: ' + result.venue
                        + '!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    ShiftsComponent.prototype.requestDrop = function (shift) {
        var _this = this;
        this.shift = {
            // dj: this.dj,
            pending: this.pending = true
        };
        this.id = shift._id;
        this.as.updateShift(this.id, this.shift)
            .subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open(shift.dj + ' has requested to drop shift at ' + shift.venue, 'Send Request', { duration: 2000 });
                _this.dialog.closeAll();
                // this.sendRequest();
                _this.ngOnInit();
            }
            else {
                _this.snackBar.open('something went wrong');
            }
        });
    };
    ShiftsComponent.prototype.sendSchedule = function () {
        this.mailer.sendSchedule();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */])
    ], ShiftsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */])
    ], ShiftsComponent.prototype, "sort", void 0);
    ShiftsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shifts',
            template: __webpack_require__("../../../../../src/app/portal/shifts/shifts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/shifts/shifts.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_11__services_mailer_service__["a" /* MailerService */]])
    ], ShiftsComponent);
    return ShiftsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxHide.lt-md fxShow=\"true\">\n  <div class=\"example-header\" fxLayout=\"row\">\n    <mat-form-field>\n      <mat-icon matPrefix>search</mat-icon>\n      <input (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\" matInput>\n    </mat-form-field>\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab>\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n  <div class=\"example-container mat-elevation-z8\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!--<ng-container matColumnDef=\"id\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user._id}}</mat-cell>-->\n      <!--</ng-container>-->\n\n      <!--[Name Column]-->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\n      </ng-container>\n\n      <!--[Last Name Column]-->\n      <ng-container matColumnDef=\"last\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Last</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.last}}</mat-cell>\n      </ng-container>\n\n      <!--[Username Column]-->\n      <ng-container matColumnDef=\"username\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Username</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.username}}</mat-cell>\n      </ng-container>\n\n      <!--[Email Column]-->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Email</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.email}}</mat-cell>\n      </ng-container>\n\n      <!--[Password Column]-->\n      <!--<ng-container matColumnDef=\"password\">-->\n      <!--<mat-header-cell *matHeaderCellDef> Password </mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.password}}</mat-cell>-->\n      <!--</ng-container>-->\n\n      <!--[Role Column]-->\n      <ng-container matColumnDef=\"role\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Role</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.role}}</mat-cell>\n      </ng-container>\n\n      <!--[Actions]-->\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">\n          <div fxLayout=\"row\">\n            <button (click)=\"updateUser(user)\" mat-button>\n              <mat-icon>mode_edit</mat-icon>\n            </button>\n            <button (click)=\"DeleteUser(user._id)\" color=\"warn\" mat-raised-button>\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row (click)=\"onRowClicked(row)\" *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n    <button (click)=\"exportUsers()\" mat-icon-button>\n      <mat-icon>file_download</mat-icon>\n    </button>\n  </div>\n</div>\n\n\n<div class=\"mobile\" fxShow=\"false\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\" fxShow.lt-md>\n  <div>\n    <button color=\"primary\" fxFlex mat-raised-button (click)=\"openDialog()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <mat-accordion>\n    <mat-expansion-panel *ngFor=\"let user of users\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h4>{{user.name}} {{user.last}}</h4>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div fxLayout=\"row\">\n        <div class=\"header\" fxLayout=\"column\" fxFlex=\"25\">\n          <span>Role: </span>\n          <span>Username: </span>\n          <span>Contact: </span>\n        </div>\n        <div fxLayout=\"column\" fxFlex>\n          <span>{{user.role}}</span>\n          <span>{{user.username}}</span>\n          <span><a href=\"mailto:{{user.email}}&body=Hello {{user.name}}\">{{user.email}}</a></span>\n        </div>\n      </div>\n      <!--<p><b>Role:</b><br>{{user.role}}</p>-->\n      <!--<p><b>Username:</b><br>{{user.username}}</p>-->\n      <!--<p><b>Contact:</b><br> </p>-->\n      <!--<span><mat-icon>email</mat-icon> {{user.email}}</span>-->\n      <mat-action-row>\n        <button mat-icon-button color=\"primary\" (click)=\"updateVenue(user)\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"DeleteVenue(user._id)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/portal/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-card {\n  width: 90%; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n\n.phone-responsive {\n  width: 100%; }\n\n.header {\n  font-weight: bold; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_add_user_add_user_component__ = __webpack_require__("../../../../../src/app/dialogs/add-user/add-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dialogs_delete_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/dialogs/delete-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_csv__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EmployeesComponent = (function () {
    function EmployeesComponent(dialog, us, as, snackBar, router) {
        this.dialog = dialog;
        this.us = us;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['name', 'last', 'username', 'email', 'role', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatTableDataSource */]();
        this.users = [];
        this.roles = [];
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getUser().subscribe(function (data) {
            _this.dataSource.data = data;
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                _this.users.push(data[i]);
            }
        });
    };
    EmployeesComponent.prototype.getColor = function (user) {
        switch (user) {
            case 'Admin':
                return 'purple';
            case 'Manager':
                return 'green';
            case 'DJ':
                return '#0BA5DB';
        }
    };
    EmployeesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    EmployeesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    EmployeesComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_add_user_add_user_component__["a" /* AddUserComponent */], { width: '500px' });
    };
    EmployeesComponent.prototype.exportUsers = function () {
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: true,
            showTitle: true,
            useBom: true
        };
        new __WEBPACK_IMPORTED_MODULE_9_angular2_csv__["Angular2Csv"](this.users, 'Users', options);
        console.log(this.users);
        console.log(__WEBPACK_IMPORTED_MODULE_9_angular2_csv__["Angular2Csv"]);
    };
    EmployeesComponent.prototype.onRowClicked = function (row) {
        // console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    EmployeesComponent.prototype.DeleteUser = function (_id) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__dialogs_delete_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], {});
        dialogRef.afterClosed().subscribe(function (result) {
            _this.as.deleteUser(_id)
                .subscribe(function (data) {
                if (data.success) {
                    _this.ngOnInit();
                    _this.snackBar.open('User has been deleted', '', { duration: 3000 });
                }
                else {
                    _this.snackBar.open('ERROR', '', { duration: 2000 });
                }
            });
        });
        // this.router.navigate(['./admin']);
    };
    EmployeesComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user, user._id, user.name, user.last);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            width: '500px',
            data: {
                id: user._id,
                name: user.name,
                last: user.last,
                username: user.username,
                email: user.email,
                role: user.role
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.user = {
                name: result.name,
                last: result.last,
                email: result.email,
                username: result.username,
                role: result.role
            };
            _this.id = result.id;
            // console.log('updated user: ' + this.user + ',' + this.id + ',' +this.name + ',' + this.last + ',' + this.username + ',' + this.email + ',' + this.role);
            _this.as.updateUser(result.id, _this.user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('user has been updated!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatPaginator */])
    ], EmployeesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["r" /* MatSort */])
    ], EmployeesComponent.prototype, "sort", void 0);
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usertable',
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]],
            template: __webpack_require__("../../../../../src/app/portal/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/venue-data/venue-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxHide.lt-md fxShow=\"true\">\n  <div class=\"example-header\" fxLayout=\"row\">\n    <mat-form-field>\n      <mat-icon matPrefix>search</mat-icon>\n      <input (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\" matInput>\n    </mat-form-field>\n    <div>\n      <button (click)=\"openDialog()\" mat-mini-fab>\n        <mat-icon>add</mat-icon>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8\">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.name}}</mat-cell>\n      </ng-container>\n\n      <!-- Address Column -->\n      <ng-container matColumnDef=\"address\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Address</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.address}}</mat-cell>\n      </ng-container>\n\n      <!-- City Column -->\n      <ng-container matColumnDef=\"city\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> City</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.city}}</mat-cell>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> State</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.state}}</mat-cell>\n      </ng-container>\n\n      <!--Zip Column-->\n      <ng-container matColumnDef=\"zip\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Zip</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.zip}}</mat-cell>\n      </ng-container>\n\n      <!--Phone Column-->\n      <ng-container matColumnDef=\"phone\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Phone</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.phone}}</mat-cell>\n      </ng-container>\n\n      <!--Email Column-->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Email</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">{{venue.email}}</mat-cell>\n      </ng-container>\n\n      <!--[Actions]-->\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef> Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let venue\">\n          <div fxLayout=\"row\">\n            <button (click)=\"updateVenue(venue)\" mat-button>\n              <mat-icon>mode_edit</mat-icon>\n            </button>\n            <button (click)=\"DeleteVenue(venue._id)\" color=\"warn\" mat-raised-button>\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row (click)=\"onRowClicked(row)\" *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</div>\n\n\n<div class=\"mobile\" fxShow=\"false\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxShow.lt-md>\n  <div>\n    <button color=\"primary\" fxFlex mat-raised-button (click)=\"openDialog()\">\n      <mat-icon>add</mat-icon>\n    </button>\n  </div>\n  <mat-accordion>\n    <mat-expansion-panel *ngFor=\"let venue of venues\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          <h4>{{venue.name}}</h4>\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <p><b>Address:</b><br>{{venue.address}} <br> {{venue.city}}, {{venue.state}} <br> {{venue.zip}}</p>\n      <p><b>Contact:</b><br></p>\n      <span><mat-icon>phone</mat-icon>\n        {{venue.phone}}</span><br>\n      <span><mat-icon>email</mat-icon>\n        {{venue.email}}</span>\n      <mat-action-row>\n        <button mat-icon-button color=\"primary\" (click)=\"updateVenue(venue)\">\n          <mat-icon>mode_edit</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\" (click)=\"DeleteVenue(venue._id)\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </mat-action-row>\n    </mat-expansion-panel>\n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/portal/venue-data/venue-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/venue-data/venue-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_venue_service__ = __webpack_require__("../../../../../src/app/services/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialogs_add_venue_add_venue_component__ = __webpack_require__("../../../../../src/app/dialogs/add-venue/add-venue.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_edit_venue_edit_venue_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-venue/edit-venue.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VenueDataComponent = (function () {
    function VenueDataComponent(dialog, vs, as, snackBar, router) {
        this.dialog = dialog;
        this.vs = vs;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['name', 'address', 'city', 'state', 'zip', 'phone', 'email', 'actions'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["t" /* MatTableDataSource */]();
        this.venues = [];
    }
    VenueDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vs.getVenue().subscribe(function (data) {
            _this.dataSource.data = data;
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                _this.venues.push(data[i]);
            }
        });
    };
    VenueDataComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    VenueDataComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    VenueDataComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__dialogs_add_venue_add_venue_component__["a" /* AddVenueComponent */], { width: '500px' });
        this.ngOnInit();
    };
    VenueDataComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    VenueDataComponent.prototype.DeleteVenue = function (_id) {
        var _this = this;
        this.as.deleteVenue(_id)
            .subscribe(function (data) {
            if (data.success) {
                _this.ngOnInit();
                _this.snackBar.open('Venue has been deleted', '', { duration: 3000 });
            }
            else {
                _this.snackBar.open('Error', 'Close', { duration: 2000 });
            }
        });
        // console.log('Venue', _id, 'has been deleted');
        // this.ngOnInit();
        // return this.as.deleteUser()
    };
    VenueDataComponent.prototype.updateVenue = function (venue) {
        var _this = this;
        // console.log(venue, venue._id, venue.name, venue.last);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_edit_venue_edit_venue_component__["a" /* EditVenueComponent */], {
            width: '500px',
            data: {
                id: venue._id,
                name: venue.name,
                address: venue.address,
                city: venue.city,
                zip: venue.zip,
                phone: venue.phone,
                email: venue.email
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.venue = {
                name: result.name,
                address: result.address,
                city: result.city,
                zip: result.zip,
                phone: result.phone,
                email: result.email
            };
            _this.id = result.id;
            // console.log('updated: ' + this.venue + ',' + this.id + ',' +this.name);
            _this.as.updateVenue(result.id, _this.venue)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('venue has been updated!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatPaginator */])
    ], VenueDataComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSort */])
    ], VenueDataComponent.prototype, "sort", void 0);
    VenueDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-venue-data',
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_venue_service__["a" /* VenueService */]],
            template: __webpack_require__("../../../../../src/app/portal/venue-data/venue-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/venue-data/venue-data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_2__services_venue_service__["a" /* VenueService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], VenueDataComponent);
    return VenueDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [ngStyle]=\"{'background-color': getColor(user?.role)}\" class=\"portal-bar\" color=\"primary\">\n  <span>{{user?.role}}</span></mat-toolbar>\n<mat-tab-group>\n  <mat-tab label=\"Profile\">\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"10px\">\n      <div fxFlex=\"50\">\n        <mat-card class=\"Info-card\">\n          <mat-toolbar [ngStyle]=\"{'background-color': getColor(user?.role)}\">\n            <h1>Profile</h1>\n          </mat-toolbar>\n          <mat-card-content>\n            <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n              <mat-card class=\"label\" fxLayoutAlign=\"center center\">\n                <mat-icon>font_download</mat-icon>\n              </mat-card>\n              <mat-card class=\"info\">\n                <p>{{user?.name}}<span>  </span> {{user?.last}}</p>\n              </mat-card>\n            </mat-card>\n            <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n              <mat-card class=\"label\" fxLayoutAlign=\"center center\">\n                <mat-icon>account_box</mat-icon>\n              </mat-card>\n              <mat-card class=\"info\">\n                {{user?.username}}\n              </mat-card>\n            </mat-card>\n            <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n              <mat-card class=\"label\" fxLayoutAlign=\"center center\">\n                <mat-icon>email</mat-icon>\n              </mat-card>\n              <mat-card class=\"info\">\n                {{user?.email}}\n              </mat-card>\n            </mat-card>\n            <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n              <mat-card class=\"label\" fxLayoutAlign=\"center center\">\n                <mat-icon>work</mat-icon>\n              </mat-card>\n              <mat-card class=\"info\">\n                {{user?.role}}\n              </mat-card>\n            </mat-card>\n          </mat-card-content>\n          <mat-card-actions fxLayoutAlign=\"center center\">\n            <button mat-raised-button fxFlex (click)=\"updateUser(user)\">\n              <mat-icon>mode_edit</mat-icon>\n              <span> </span>Edit\n            </button>\n          </mat-card-actions>\n        </mat-card>\n      </div>\n\n      <!--<div *ngIf=\"user?.role === 'DJ'\" fxFlex=\"50\" fxLayoutGap=\"10px\" fxLayout=\"column\" fxLayoutAlign=\"start center\">-->\n      <!--<mat-card class=\"Info-card preferences\" fxLayout=\"column\">-->\n      <!--<mat-toolbar [ngStyle]=\"{'background-color': getColor(user?.role)}\">-->\n      <!--<h1>Preferences</h1>-->\n      <!--</mat-toolbar>-->\n\n      <!--<mat-card-actions fxLayoutAlign=\"center center\">-->\n      <!--<button mat-raised-button fxFlex (click)=\"updateUser(user)\">-->\n      <!--<mat-icon>save</mat-icon><span> </span>Save-->\n      <!--</button>-->\n      <!--</mat-card-actions>-->\n      <!--</mat-card>-->\n      <!--</div>-->\n      <!--<div *ngIf=\"user?.role === 'Manager'\" fxFlex=\"50\" fxLayoutGap=\"10px\" fxLayout=\"column\">-->\n      <!--<div fxLayout=\"column\">-->\n      <!--<mat-card class=\"Info-card preferences\" fxLayout=\"column\">-->\n      <!--<mat-toolbar [ngStyle]=\"{'background-color': getColor(user?.role)}\">-->\n      <!--<h1>Set Availability Deadline</h1>-->\n      <!--</mat-toolbar>-->\n      <!--<mat-card-content>-->\n      <!--<mat-card class=\"profile-attribute\" fxLayout=\"row\">-->\n      <!--<mat-card-header class=\"info\">-->\n      <!--Set Deadline-->\n      <!--</mat-card-header>-->\n      <!--<div>-->\n      <!--<mat-slide-toggle [(ngModel)]= \"checked\" (change)=\"toggle()\">Yes</mat-slide-toggle>-->\n      <!--</div>-->\n      <!--</mat-card>-->\n      <!--</mat-card-content>-->\n      <!--<div *ngIf=\"checked\" style=\"max-height: 70vh\">-->\n      <!--<mat-card class=\"profile-options\">-->\n      <!--<h2 mat-card-title>Choose Dates: </h2>-->\n      <!--<mat-card-content fxLayout=\"column\">-->\n      <!--<form (submit)=\"onSubmit()\" fxLayout=\"column\">-->\n      <!--&lt;!&ndash;Start&ndash;&gt;-->\n      <!--<mat-form-field>-->\n      <!--<input matInput [matDatepicker]=\"startpicker\" [min]=\"minDate\" placeholder=\"Choose a start date\">-->\n      <!--<mat-datepicker-toggle matSuffix [for]=\"startpicker\"></mat-datepicker-toggle>-->\n      <!--<mat-datepicker #startpicker touchUi=\"true\"></mat-datepicker>-->\n      <!--</mat-form-field>-->\n      <!--&lt;!&ndash;End&ndash;&gt;-->\n      <!--<mat-form-field>-->\n      <!--<input matInput [matDatepicker]=\"endpicker\" [min]=\"minDate\" placeholder=\"Choose end date\">-->\n      <!--<mat-datepicker-toggle matSuffix [for]=\"endpicker\"></mat-datepicker-toggle>-->\n      <!--<mat-datepicker #endpicker touchUi=\"true\"></mat-datepicker>-->\n      <!--</mat-form-field>-->\n\n      <!--<button mat-raised-button type=\"submit\" color=\"primary\">Submit</button>-->\n      <!--</form>-->\n      <!--</mat-card-content>-->\n      <!--</mat-card>-->\n      <!--</div>-->\n      <!--</mat-card>-->\n      <!--</div>-->\n\n      <!--</div>-->\n\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.profile-content {\n  width: auto;\n  height: auto; }\n\n.Info-card {\n  width: auto;\n  height: auto;\n  padding: 16px;\n  margin-top: 20px; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px; }\n  .Info-card h1 {\n    color: white;\n    font-weight: bold; }\n  .Info-card .profile-attribute {\n    width: auto; }\n    .Info-card .profile-attribute .label {\n      width: auto;\n      background-color: #3f51b5;\n      color: white;\n      border-bottom-right-radius: 0;\n      border-top-right-radius: 0; }\n    .Info-card .profile-attribute .info {\n      width: 75%;\n      font-weight: bold;\n      font-size: 16px;\n      border-bottom-left-radius: 0;\n      border-top-left-radius: 0; }\n\n.profile-options {\n  width: auto;\n  height: auto; }\n\n.portal-bar {\n  margin-top: 10px; }\n\n.preferences {\n  width: 100%; }\n\n.avail-card {\n  width: 500px;\n  margin: 16px; }\n  .avail-card .mat-card-header {\n    font-weight: bolder; }\n  .avail-card .day-avail {\n    width: auto; }\n    .avail-card .day-avail .day {\n      width: 50%;\n      font-size: 20px;\n      font-weight: 300; }\n\n.all {\n  background-color: #3f51b5;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_edit_user_edit_user_component__ = __webpack_require__("../../../../../src/app/dialogs/edit-user/edit-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = (function () {
    function ProfileComponent(as, r, dialog, snackBar) {
        this.as = as;
        this.r = r;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.show = false;
        this.checked = false;
        this.date = new Date();
        this.minDate = (this.date);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.getColor = function (user) {
        switch (user) {
            case 'Admin':
                return 'purple';
            case 'Manager':
                return 'green';
            case 'DJ':
                return '#0BA5DB';
        }
    };
    ProfileComponent.prototype.toggle = function () {
        console.log(this.checked);
    };
    ProfileComponent.prototype.onSubmit = function () {
        this.checked = !this.checked;
    };
    ProfileComponent.prototype.updateUser = function (user) {
        var _this = this;
        console.log(user, user._id, user.name, user.last);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_edit_user_edit_user_component__["a" /* EditUserComponent */], {
            width: '500px',
            data: {
                id: user._id,
                name: user.name,
                last: user.last,
                username: user.username,
                email: user.email,
                password: user.password
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.user = {
                name: result.name,
                last: result.last,
                email: result.email,
                username: result.username,
            };
            _this._id = result.id;
            // console.log('updated user: ' + this.user + ',' + this.id + ',' +this.name + ',' + this.last + ',' + this.username + ',' + this.email + ',' + this.role);
            _this.as.updateUser(result.id, _this.user)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('user has been updated!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong');
                }
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatSnackBar */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-form\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <mat-card-header><h1>Register</h1></mat-card-header>\n  <mat-card-content>\n    <form (submit)=\"onRegisterSubmit()\" class=\"example-form\" fxLayoutGap=\"20px\">\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Name\" required=\"required\"\n               type=\"text\">\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"last\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Last\" required=\"required\"\n               type=\"text\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Username\" required=\"required\"\n               type=\"text\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Email\" required=\"required\"\n               type=\"email\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Password\"\n               required=\"required\" type=\"password\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <mat-select [(ngModel)]=\"role\" name=\"role\" placeholder=\"Select a role\">\n          <mat-option *ngFor=\"let role of roles\" [value]=\"role.value\">\n            {{role.viewValue}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n\n      <div fxLayoutAlign=\"center center\">\n        <button mat-raised-button type=\"submit\">Submit</button>\n      </div>\n\n    </form>\n  </mat-card-content>\n  <div fxLayoutAlign=\"center center\">\n    <a class=\"cancel\" routerLink=\"login\">cancel</a>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.example-form {\n  min-width: 150px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-raised-button {\n  width: 100%;\n  background-color: #0BA5DB;\n  color: white;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  border: none; }\n\n.container {\n  width: 95%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, snackBar, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.roles = [
            { value: 'Admin', viewValue: 'Admin' },
            { value: 'Manager', viewValue: 'Manager' },
            { value: 'DJ', viewValue: 'DJ' }
        ];
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            last: this.last,
            email: this.email,
            username: this.username,
            password: this.password,
            role: this.role
        };
        //Require fields
        if (!this.validateService.validateRegister(user)) {
            this.snackBar.open('Please fill all fields', 'close', { duration: 2000 });
            return false;
        }
        //Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.snackBar.open('Please enter a valid email');
            return false;
        }
        //Register User
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('You are now registered and can log in!', '', { duration: 3000 });
                _this.router.navigate(['/login']);
                console.log(user);
            }
            else {
                _this.snackBar.open('Something went wrong', 'try again', { duration: 3000 });
                _this.router.navigate(['/register']);
            }
        });
        // console.log(user);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    //CREATE
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addVenue = function (venue) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/venues/addVenue', venue, {headers: headers})
        return this.http.post('venues/addVenue', venue, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.addShift = function (shift) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/shifts/createshift', shift, {headers: headers})
        return this.http.post('shifts/createshift', shift, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //READ
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/users/profile', {headers: headers})
        return this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUsers = function () {
        // return this.http.get('http://localhost:3000/users/usersList')
        return this.http.get('users/usersList')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDJ = function () {
        // return this.http.get('http://localhost:3000/users/djs')
        return this.http.get('users/djs')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getShifts = function () {
        // return this.http.get('http://localhost:3000/shifts/shifts')
        return this.http.get('shifts/shifts')
            .map(function (res) { return res.json(); });
    };
    //UPDATE
    AuthService.prototype.updateUser = function (id, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/users/update/'+id,body,{headers:headers})
        return this.http.put('users/update/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateVenue = function (id, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/venues/update/'+id,body,{headers:headers})
        return this.http.put('venues/update/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateShift = function (id, body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/shifts/update/'+id,body,{headers:headers})
        return this.http.put('venues/update/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // dropShift(id, body){
    //   let headers = new Headers();
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.put('http://localhost:3000/shifts/update/'+id,body,{headers:headers})
    //   // return this.http.put('shifts/update/'+id,body,{headers:headers})
    //     .map(res => res.json());
    //
    // }
    //DELETE
    AuthService.prototype.deleteVenue = function (id) {
        // return this.http.delete('http://localhost:3000/venues/venue/'+id)
        return this.http.delete('venues/venue/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteUser = function (id) {
        // return this.http.delete('http://localhost:3000/users/user/'+id)
        return this.http.delete('users/user/' + id)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.deleteShift = function (id) {
        // return this.http.delete('http://localhost:3000/shifts/delete/'+id)
        return this.http.delete('shifts/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    //AUTH
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
        return this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('id_token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/mailer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailerService = (function () {
    function MailerService(http) {
        this.http = http;
    }
    MailerService.prototype.sendEmail = function (user) {
        var data = { user: user };
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/mailer/registration',body,{headers:headers})
        return this.http.post('mailer/registration', body, { headers: headers });
    };
    MailerService.prototype.sendSchedule = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('mailer/sendSchedule', { headers: headers });
    };
    MailerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], MailerService);
    return MailerService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        // private serviceUrl = 'http://localhost:3000/users/users';
        // private DjsURL = 'http://localhost:3000/users/djs';
        // private shiftUrl='http://localhost:3000/shifts/shifts';
        this.serviceUrl = 'users/users';
        this.DjsURL = 'users/djs';
        this.shiftUrl = 'shifts/shifts';
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.serviceUrl);
    };
    UserService.prototype.getDJ = function () {
        return this.http.get(this.DjsURL);
    };
    UserService.prototype.getShifts = function () {
        return this.http.get(this.shiftUrl);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        return !(user.name == undefined || user.email == undefined || user.password == undefined);
    };
    ValidateService.prototype.validateAddVenue = function (venue) {
        return !(venue.name == undefined || venue.email == undefined || venue.phone == undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (login) {
        return !(login.username == undefined || login.email == undefined || login.password == undefined);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/app/services/venue.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VenueService = (function () {
    function VenueService(http) {
        this.http = http;
        // private serviceUrl = 'http://localhost:3000/venues/venues';
        this.serviceUrl = 'venues/venues';
    }
    VenueService.prototype.getVenue = function () {
        return this.http.get(this.serviceUrl);
    };
    VenueService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], VenueService);
    return VenueService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/cal-week/cal-week.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20x\">\n  <mat-card class=\"Info-card\">\n    <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n      <button (click)=\"prevWeek()\" mat-icon-button style=\"{color: white}\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"p4\">Week of {{currentDate.format(\"MMM Do YY\")}} </span>\n      <button (click)=\"nextWeek()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </mat-toolbar>\n    <mat-card class=\"profile-attribute\" fxLayout=\"row\">\n      <div class=\"week\" fxFlex fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\">\n        <div *ngFor=\"let week of weeks\" class=\"week\" fxLayout=\"row\">\n          <ng-container *ngFor=\"let day of week\">\n            <!--Disabled-->\n            <div *ngIf=\"!isSelectedWeek(day.wDate)\" class=\"week-date disabled\" fxFlex fxLayoutAlign=\"center center\">\n              <mat-card class=\"date-text\" fxFlex>\n                <mat-card-header>\n                  {{ day.wDate.date() }}\n                </mat-card-header>\n                <mat-card-content>\n                  fgh\n                </mat-card-content>\n              </mat-card>\n            </div>\n            <!--Enabled-->\n            <div (click)=\"selectDate(day)\"\n                 *ngIf=\"isSelectedWeek(day.wDate)\"\n                 [ngClass]=\"{ today: day.today, selected: day.selected }\"\n                 class=\"week-date enabled\"\n                 fxFlex>\n              <mat-card (click)=\"sidenav.open()\" class=\"date-text\" fxFlex>\n                <mat-card-header>\n                  <h1 mat-card-title>{{ day.wDate.date() }}</h1>\n                </mat-card-header>\n                <mat-card-content fxLayoutAlign=\"center center\">\n\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </mat-card>\n  </mat-card>\n\n  <mat-card>\n    <h1 mat-card-title>Pickup Shifts</h1>\n  </mat-card>\n  <mat-card>\n    <h1 mat-card-title>Alerts</h1>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/cal-week/cal-week.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.portalhome {\n  height: 100vh;\n  width: 95%; }\n  .portalhome h1 {\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    font-weight: 200;\n    color: #0BA5DB; }\n  .portalhome .wrapper {\n    width: 100%; }\n    .portalhome .wrapper .mat-card-title {\n      color: black;\n      font-family: 'Roboto', sans-serif;\n      font-size: 16px;\n      font-weight: 500; }\n\n.mat-sidenav {\n  width: 50%; }\n\n.portal-bar {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px; }\n\n.Info-card {\n  width: auto;\n  height: auto; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: auto; }\n  .Info-card .profile-attribute {\n    width: auto;\n    background-color: whitesmoke; }\n    .Info-card .profile-attribute .date-text {\n      padding: 0;\n      width: 120px;\n      height: 100px;\n      font-size: 12px; }\n      .Info-card .profile-attribute .date-text .mat-card-header {\n        font-family: Righteous, sans-serif;\n        color: #3f51b5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/cal-week/cal-week.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalWeekComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalWeekComponent = (function () {
    function CalWeekComponent(auth) {
        this.auth = auth;
        this.dayName = __WEBPACK_IMPORTED_MODULE_2_moment__().format('dddd');
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment__().format('MMM Do YY');
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__();
        this.weeks = [];
        this.sortedDates = [];
        this.selectedDates = [];
        this.onSelectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.daysOfWeek = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    }
    CalWeekComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
        console.log(this.dayName);
        console.log(this.currentDate);
        this.generateWeek();
    };
    CalWeekComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDates &&
            changes.selectedDates.currentValue &&
            changes.selectedDates.currentValue.length > 1) {
            // sort on date changes for better performance when range checking
            this.sortedDates = __WEBPACK_IMPORTED_MODULE_3_lodash__["sortBy"](changes.selectedDates.currentValue, function (m) { return m.mDate.valueOf(); });
            this.generateWeek();
        }
    };
    CalWeekComponent.prototype.isToday = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__().isSame(__WEBPACK_IMPORTED_MODULE_2_moment__(date), 'day');
    };
    CalWeekComponent.prototype.isSelected = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).isSame(selectedDate.wDate, 'day');
        }) > -1;
    };
    CalWeekComponent.prototype.isSelectedWeek = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_2_moment__(date).isSame(selectedDate.mDate, 'day');
        });
    };
    CalWeekComponent.prototype.selectDate = function (date) {
        this.onSelectDate.emit(date);
        console.log(date.wDate.format('dddd'));
        return this.dateClicked = date.wDate.format('dddd');
    };
    //  Actions
    CalWeekComponent.prototype.prevWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).subtract(1, 'weeks');
        this.generateWeek();
    };
    CalWeekComponent.prototype.nextWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).add(1, 'weeks');
        this.generateWeek();
    };
    CalWeekComponent.prototype.firstWeek = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.currentDate).startOf('month');
        this.generateWeek();
    };
    CalWeekComponent.prototype.generateWeek = function () {
        var dates = this.fillDates(this.currentDate);
        var days = [];
        while (dates.length > 0) {
            days.push(dates.splice(0, 7));
        }
        this.weeks = days;
    };
    CalWeekComponent.prototype.fillDates = function (currentMoment) {
        var _this = this;
        var firstOfWeek = __WEBPACK_IMPORTED_MODULE_2_moment__(currentMoment).startOf('week').day();
        var firstDayOfGrid = __WEBPACK_IMPORTED_MODULE_2_moment__(currentMoment).startOf('week').subtract(firstOfWeek, 'days');
        var start = firstDayOfGrid.date();
        return __WEBPACK_IMPORTED_MODULE_3_lodash__["range"](start, start + 7)
            .map(function (date) {
            var d = __WEBPACK_IMPORTED_MODULE_2_moment__(firstDayOfGrid).date(date);
            return {
                today: _this.isToday(d),
                selected: _this.isSelected(d),
                wDate: d,
            };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CalWeekComponent.prototype, "selectedDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CalWeekComponent.prototype, "onSelectDate", void 0);
    CalWeekComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cal-week',
            template: __webpack_require__("../../../../../src/app/shared/cal-week/cal-week.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/cal-week/cal-week.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], CalWeekComponent);
    return CalWeekComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/sync-calendar/sync-calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" fxLayout=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"20px\">\n  <mat-card class=\"Info-card\">\n    <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-around center\">\n      <button (click)=\"prevMonth()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"p4\">{{ currentDate.format('MMMM') }}</span>\n      <button (click)=\"nextMonth()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button (click)=\"prevYear()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span>{{ currentDate.format('YYYY') }}</span>\n      <button (click)=\"nextYear()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </mat-toolbar>\n    <div class=\"profile-attribute\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n      <div *ngFor=\"let name of dayNames\" class=\"week\" fxLayout=\"row\">\n        <mat-card class=\"daynames\" fxLayoutAlign=\"center center\">{{ name }}</mat-card>\n      </div>\n    </div>\n    <mat-card class=\"profile-attribute\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n\n      <div class=\"weeks\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly center\">\n        <div *ngFor=\"let week of weeks\" class=\"week\" fxLayout=\"row\">\n\n          <ng-container *ngFor=\"let day of week\">\n            <div *ngIf=\"!isSelectedMonth(day.mDate)\" class=\"week-date disabled\" fxLayoutAlign=\"center center\">\n              <mat-card class=\"date-text\">{{ day.mDate.date() }}</mat-card>\n            </div>\n            <div (click)=\"selectDate(day)\"\n                 *ngIf=\"isSelectedMonth(day.mDate)\"\n                 [ngClass]=\"{ today: day.today, selected: day.selected }\"\n                 class=\"week-date enabled\">\n              <mat-card class=\"date-text\">\n                <mat-card-header>\n                  {{ day.mDate.date() }}<span fxFlex></span>\n                  <button (click)=\"addShift()\" *ngIf=\"user?.role === 'Manager'\" color=\"accent\" mat-icon-button>\n                    <mat-icon>add</mat-icon>\n                  </button>\n                </mat-card-header>\n                <mat-card-content>\n                  <div *ngIf=\"shift?.date === day.mDate.date()\">hello</div>\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </mat-card>\n  </mat-card>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shared/sync-calendar/sync-calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../material/prebuilt-themes/indigo-pink.css"), "");

// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody,\ndiv {\n  font-family: 'Source Sans Pro', sans-serif;\n  border: 0;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: white; }\n\n[scroll] {\n  position: fixed;\n  top: 0;\n  z-index: 2; }\n\n.prestige-space {\n  height: 10%; }\n\n.mat-card {\n  height: auto;\n  width: 1000px;\n  background: white;\n  border-radius: 5px; }\n  .mat-card .mat-card-title {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 24px;\n    font-weight: 200; }\n  .mat-card .mat-card-subtitle {\n    color: #000;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px;\n    font-weight: 200; }\n\n.mat-divider, .mat-divider-vertical {\n  border: 2px;\n  clear: both;\n  display: block;\n  width: 90%;\n  background-color: #777777;\n  height: 1px; }\n\nrouter-outlet {\n  margin-top: 50px; }\n\n.container {\n  min-height: 100vh; }\n\n.pageview {\n  -ms-flex-direction: column;\n      flex-direction: column;\n  min-height: 100vh; }\n\nmain {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  main > *:not(router-outlet) {\n    -ms-flex: 1;\n        flex: 1;\n    display: block; }\n\n.router {\n  -ms-flex: 1;\n      flex: 1; }\n\n.landing {\n  background-color: white;\n  height: 100vh; }\n  .landing .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    font-size: 16px;\n    font-weight: 300;\n    border-radius: 10px;\n    text-transform: uppercase;\n    font-family: 'Source Sans Pro', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    border: 1px solid #0BA5DB;\n    letter-spacing: 2px; }\n  .landing .login-card-button {\n    width: 500px;\n    padding: 16px 35px;\n    margin-top: 50px; }\n\n::-webkit-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n:-ms-input-placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n::placeholder {\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: left;\n  text-transform: capitalize;\n  padding: 5px; }\n\n.form-field {\n  border-radius: 6px;\n  height: 25px;\n  text-align: left;\n  width: 95%;\n  color: #0BA5DB;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: none;\n  padding: 5px; }\n  .form-field mat-icon {\n    font-size: 16px;\n    font-weight: 400;\n    color: navy; }\n\n.mat-action-row, a {\n  text-decoration: none;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 400; }\n  .mat-action-row .cancel, a .cancel {\n    color: red; }\n  .mat-action-row .forgot-password, a .forgot-password {\n    color: #0BA5DB; }\n\n.login-page {\n  background-color: #0BA5DB;\n  height: 100vh; }\n\n.login-card {\n  width: 400px;\n  border-radius: 5px; }\n\n.form-container {\n  height: 60%;\n  width: 85%; }\n\n.login {\n  margin-top: 60px; }\n  .login .mat-raised-button {\n    color: white;\n    font-weight: 300;\n    font-size: 12px;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    background-color: #0BA5DB;\n    box-shadow: #eeeeee;\n    border-radius: 4px;\n    width: 85%; }\n\n.forgot {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-weight: 300; }\n  .forgot .forgot-username {\n    color: #777777; }\n  .forgot .forgot-password {\n    color: black; }\n\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -ms-flex: 1;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  -ms-flex: 1;\n  flex: 1;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  -ms-flex: 1;\n  flex: 1;\n  -ms-flex-align: end;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-event-title {\n  color: white; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  display: -ms-flexbox;\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  -ms-flex: 1;\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n  width: 100%;\n  border: solid 1px #e1e1e1;\n  overflow-x: scroll;\n  position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n  background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n.cal-day-view .cal-hour-segment {\n  display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n  content: '\\A0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n.cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n  border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n  font-weight: bold;\n  padding-top: 5px;\n  width: 70px;\n  text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n  display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n.cal-day-view .cal-drag-over .cal-hour-segment {\n  background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n  position: absolute; }\n\n.cal-day-view .cal-event {\n  border: solid 1px;\n  padding: 5px;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  height: 100%;\n  box-sizing: border-box; }\n\n.cal-day-view .cal-draggable {\n  cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n  padding: 8px;\n  border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\nh1 {\n  font-family: 'Roboto', sans-serif;\n  font-size: 24px;\n  font-weight: 200;\n  color: #0BA5DB; }\n\n.wrapper {\n  width: 100%; }\n  .wrapper .mat-card-title {\n    color: black;\n    font-family: 'Roboto', sans-serif;\n    font-size: 16px;\n    font-weight: 500; }\n\n.mat-sidenav {\n  width: 50%; }\n\n.portal-bar {\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px; }\n\n.Info-card {\n  width: auto;\n  height: auto; }\n  .Info-card .mat-raised-button {\n    background-color: #0BA5DB;\n    color: white;\n    border-top-right-radius: 0;\n    border-top-left-radius: 0; }\n  .Info-card .mat-toolbar {\n    border-top-right-radius: 5px;\n    border-top-left-radius: 5px;\n    width: auto; }\n  .Info-card h1 {\n    color: white;\n    font-weight: bold; }\n  .Info-card .profile-attribute {\n    width: auto;\n    background-color: whitesmoke; }\n    .Info-card .profile-attribute .daynames {\n      height: auto;\n      width: 100%;\n      font-size: 18px;\n      background-color: #0BA5DB;\n      color: white;\n      font-family: Roboto, \"Helvetica Neue\", sans-serif;\n      border-radius: 0; }\n    .Info-card .profile-attribute .date-text {\n      padding: 0;\n      width: 100%;\n      height: 100px;\n      font-size: 14px; }\n      .Info-card .profile-attribute .date-text .mat-card-header {\n        font-family: Righteous, sans-serif;\n        color: #3f51b5; }\n\n.week-date {\n  width: 100%; }\n  .week-date .disabled {\n    color: #777777;\n    font-family: Righteous, sans-serif; }\n\n.week, .weeks {\n  margin-top: 20px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sync-calendar/sync-calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncCalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_venue_service__ = __webpack_require__("../../../../../src/app/services/venue.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_add_shift_add_shift_component__ = __webpack_require__("../../../../../src/app/dialogs/add-shift/add-shift.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SyncCalendarComponent = (function () {
    function SyncCalendarComponent(vs, us, as, snackBar, dialog) {
        this.vs = vs;
        this.us = us;
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__();
        this.dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.weeks = [];
        this.sortedDates = [];
        this.venues = [];
        this.djs = [];
        this.shifts = [];
        this.date = this.dateClicked;
        this.selectedDates = [];
        this.onSelectDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SyncCalendarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (data) { return _this.user = data.user; });
        this.generateCalendar();
        this.vs.getVenue().subscribe(function (VenueData) {
            _this.venue = VenueData;
            for (var i = 0; i < _this.venue.length; i++) {
                _this.venues.push(_this.venue[i].name);
                // console.log(this.venue[i].name);
            }
        }, function (err) {
            console.log(err);
            return false;
        });
        this.us.getDJ().subscribe(function (DJData) {
            for (var i = 0; i < DJData.length; i++) {
                _this.djs.push(DJData[i].username);
            }
            return _this.dj = DJData;
        });
        this.us.getShifts().subscribe(function (ShiftData) {
            _this.shift = ShiftData;
            for (var i = 0; i < ShiftData.length; i++) {
                _this.shifts.push(ShiftData[i].date);
                console.log(ShiftData[i].date);
            }
            return _this.shift = ShiftData;
        });
    };
    SyncCalendarComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedDates &&
            changes.selectedDates.currentValue &&
            changes.selectedDates.currentValue.length > 1) {
            // sort on date changes for better performance when range checking
            this.sortedDates = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](changes.selectedDates.currentValue, function (m) { return m.mDate.valueOf(); });
            this.generateCalendar();
        }
    };
    // date checkers
    SyncCalendarComponent.prototype.isToday = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__().isSame(__WEBPACK_IMPORTED_MODULE_1_moment__(date), 'day');
    };
    SyncCalendarComponent.prototype.isSelected = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(date).isSame(selectedDate.mDate, 'day');
        }) > -1;
    };
    SyncCalendarComponent.prototype.isSelectedWeek = function (date) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["findIndex"](this.selectedDates, function (selectedDate) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(date).isSame(selectedDate.mDate, 'week');
        }) > -1;
    };
    SyncCalendarComponent.prototype.isSelectedMonth = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).isSame(this.currentDate, 'month');
    };
    SyncCalendarComponent.prototype.selectDate = function (date) {
        this.onSelectDate.emit(date);
        console.log(date.mDate.format('l'));
        return this.dateClicked = date.mDate.format('l');
    };
    SyncCalendarComponent.prototype.addShift = function () {
        var _this = this;
        // console.log(this.v + this.date + this.t + this.d)
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_add_shift_add_shift_component__["a" /* AddShiftComponent */], {
            width: '500px',
            data: {
                venue: this.v,
                date: this.dateClicked,
                time: this.t,
                dj: this.d
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.shift = {
                venue: result.venue,
                date: _this.dateClicked,
                time: result.time,
                dj: result.dj,
            };
            console.log(_this.shift);
            // console.log('updated user: ' + this.user + ',' + this.id + ',' +this.name + ',' + this.last + ',' + this.username + ',' + this.email + ',' + this.role);
            _this.as.addShift(_this.shift)
                .subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('shift has been added!', 'Cool', { duration: 2000 });
                    _this.dialog.closeAll();
                    _this.ngOnInit();
                }
                else {
                    _this.snackBar.open('something went wrong', 'Oh no', { duration: 1000 });
                }
            });
        });
    };
    // actions from calendar
    SyncCalendarComponent.prototype.prevMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).subtract(1, 'months');
        this.generateCalendar();
    };
    SyncCalendarComponent.prototype.nextMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).add(1, 'months');
        this.generateCalendar();
    };
    SyncCalendarComponent.prototype.firstMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).startOf('year');
        this.generateCalendar();
    };
    SyncCalendarComponent.prototype.lastMonth = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).endOf('year');
        this.generateCalendar();
    };
    SyncCalendarComponent.prototype.prevYear = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).subtract(1, 'year');
        this.generateCalendar();
    };
    SyncCalendarComponent.prototype.nextYear = function () {
        this.currentDate = __WEBPACK_IMPORTED_MODULE_1_moment__(this.currentDate).add(1, 'year');
        this.generateCalendar();
    };
    // generate the calendar grid
    SyncCalendarComponent.prototype.generateCalendar = function () {
        var dates = this.fillDates(this.currentDate);
        var weeks = [];
        while (dates.length > 0) {
            weeks.push(dates.splice(0, 7));
        }
        this.weeks = weeks;
    };
    SyncCalendarComponent.prototype.fillDates = function (currentMoment) {
        var _this = this;
        var firstOfMonth = __WEBPACK_IMPORTED_MODULE_1_moment__(currentMoment).startOf('month').day();
        var firstDayOfGrid = __WEBPACK_IMPORTED_MODULE_1_moment__(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
        var start = firstDayOfGrid.date();
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["range"](start, start + 42)
            .map(function (date) {
            var d = __WEBPACK_IMPORTED_MODULE_1_moment__(firstDayOfGrid).date(date);
            return {
                today: _this.isToday(d),
                selected: _this.isSelected(d),
                mDate: d,
            };
        });
    };
    //Form Submit
    SyncCalendarComponent.prototype.onClickSubmit = function () {
        var _this = this;
        this.user = {
            dj: this.dj,
            venue: this.venue,
            date: this.currentDate,
            time: this.time
        };
        this.id = this.user._id;
        console.log(this.user);
        // console.log('updated shift: '+ this.id + ',' +this.user.venue);
        this.as.updateUser(this.id, this.user)
            .subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('venue created!', 'Cool', { duration: 2000 });
                console.log(_this.user);
                _this.ngOnInit();
            }
            else {
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SyncCalendarComponent.prototype, "selectedDates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SyncCalendarComponent.prototype, "onSelectDate", void 0);
    SyncCalendarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sync-calendar',
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */]],
            template: __webpack_require__("../../../../../src/app/shared/sync-calendar/sync-calendar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sync-calendar/sync-calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_venue_service__["a" /* VenueService */], __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MatDialog */]])
    ], SyncCalendarComponent);
    return SyncCalendarComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map