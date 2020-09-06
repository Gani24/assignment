(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");



class AppComponent {
    constructor() {
        this.title = 'Practice works';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _body_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body/datatable/datatable.component */ "./src/app/body/datatable/datatable.component.ts");
/* harmony import */ var _body_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/mobile/mobile.component */ "./src/app/body/mobile/mobile.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _body_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"],
        _body_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _body_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_5__["DatatableComponent"],
                    _body_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/body/datatable/datatable.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/body/datatable/datatable.component.ts ***!
  \*******************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mobile/mobile.component */ "./src/app/body/mobile/mobile.component.ts");



class DatatableComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $("#myInput").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        });
    }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(); };
DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["app-datatable"]], decls: 244, vars: 0, consts: [[1, "container-fluid", "web_view"], ["id", "myInput", "type", "text", "placeholder", "Search", 1, "search"], [1, "clearfix"], [2, "border-radius", "5px 0 0 5px"], [2, "border-radius", "0px 5px 5px 0px"], ["id", "myTable", 1, "gfg"], ["data-toggle", "modal", "data-target", "#myModal1"], [1, "geeks"], [1, "mobile_view", 2, "display", "none"], ["id", "myModal1", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel1", 1, "modal", "right", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["src", "assets/close-icon.svg"], ["id", "myModalLabel1", 1, "modal-title"], [1, "modal-body"], [1, "user_icon"], ["src", "assets/user-icon.jpg"], [1, "user_name"], [1, "personal_details"], [1, "diabate_score"], [1, "diabate"], [1, "address"], [1, "graph", 2, "display", "none"], ["src", "assets/graph-static.svg"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Email ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Age");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last Appointment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Aishwaraya rajesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "0944366810");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Raghu Ram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "9855658455");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Ramakrishna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "6584789256");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sahithi Netadibilli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "956823655");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sailaja Naidu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "9584551355");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Santhosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "9887623458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Raghu Ram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "9855658455");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Ramakrishna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "6584789256");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sahithi Netadibilli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "956823655");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sailaja Naidu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "9584551355");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Santhosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "9887623458");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "26");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sep 11,2019, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "11:30pm to 12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "app-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "Patient Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Aishwaraya rajesh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "69 Years, Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Phone Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "+1 123456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Email ID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Height (in Inches): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "5\"8\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "Weight (in kgs): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "62 kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Blood Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "B +ve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Diabates Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "3/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Diabates Score:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "table", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Osteoporosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Ongoing Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Heart Defect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Incurable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "957,21ST,Stanford,CT,USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Overall Health Curve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_mobile_mobile_component__WEBPACK_IMPORTED_MODULE_1__["MobileComponent"]], styles: [".web_view[_ngcontent-%COMP%] {\r\n    margin-top: 80px;\r\n  }\r\n  .web_view[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #555;\r\n    text-transform: uppercase;\r\n  }\r\n  table[_ngcontent-%COMP%] { \r\n    \r\n    width: 100%;\r\n}\r\n  th[_ngcontent-%COMP%] { \r\n    background-color:#e1e6ed; \r\n    Color:#5a5b5d; \r\n    font-weight: 600;\r\n    padding: 15px 24px !important;\r\n}\r\n  th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] { \r\n    width:218px; \r\n    text-align:left; \r\n    color: #555;\r\n    padding: 0px 0 0 25px;\r\n  \r\n}\r\n  .geeks[_ngcontent-%COMP%] { \r\n    border-right:hidden; \r\n}\r\n  tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(5)   span[_ngcontent-%COMP%] {\r\n  color:#adadad;\r\n  \r\n}\r\n  tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\r\n  color: #3f6aec;\r\n  \r\n}\r\n  tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:nth-child(3) {\r\n  text-decoration: underline;\r\n}\r\n  .gfg[_ngcontent-%COMP%] { \r\n    border-collapse:separate; \r\n    border-spacing:0 15px; \r\n}\r\n  .gfg[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  padding: 4px 0;\r\n  \r\n  display: inherit;\r\n    border-radius: 9px;\r\n    margin-bottom: 10px;\r\n    width: 100%;\r\n    cursor: pointer;\r\n}\r\n  .gfg[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 5px 2px 5px #dedede;\r\n}\r\n  .search[_ngcontent-%COMP%] {\r\n  padding: 7px 10px;\r\n  width: 35%;\r\n  float: right;\r\n background: url('search.png') no-repeat 97% 50%;\r\n  background-color: #dedddd;\r\n  border: none;\r\n  border-radius: 4px;\r\n  color: #555;\r\n}\r\n  hr[_ngcontent-%COMP%] {\r\n  margin-top: 10px !important;\r\n  margin-bottom: 10px !important;\r\n}\r\n  \r\n  .modal.right[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  margin: auto;\r\n  width: 350px;\r\n  height: 100%;\r\n  transform: translate3d(0%, 0, 0);\r\n  margin: 66px 6px 0 0;\r\n}\r\n  .modal.right[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  overflow-y: auto;\r\n}\r\n  .modal.right[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n  padding: 15px 15px 80px;\r\n}\r\n  .modal.right.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  right: -320px;\r\n  transition: opacity 0.3s linear, right 0.3s ease-out;\r\n}\r\n  .modal.right.fade.in[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n  right: 0;\r\n}\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n  border-radius: 0;\r\n  border: none;\r\n}\r\n  .modal-header[_ngcontent-%COMP%] {\r\n  border-bottom-color: #EEEEEE;\r\n  background-color: #FAFAFA;\r\n}\r\n  .user_icon[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n}\r\n  .user_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\nfloat: left;\r\n  width: 50px;\r\n  margin-right: 10px;\r\n}\r\n  .user_icon[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%] {\r\npadding-top: 2px;\r\ncolor:#555;\r\n}\r\n  .user_icon[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\nmargin: 3px 0;\r\n}\r\n  .modal-body[_ngcontent-%COMP%] {\r\npadding: 0 !important;\r\n}\r\n  .personal_details[_ngcontent-%COMP%] {\r\nborder-collapse: collapse;\r\nwidth: 100%;\r\n}\r\n  .personal_details[_ngcontent-%COMP%], .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .personal_details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\nborder: 1px solid #cccccc;\r\nborder-left: none;\r\n    border-right: none;\r\n}\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\nwidth: 92%;\r\npadding: 10px 15px;\r\nborder-right: 1px solid #ccc;\r\n}\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\nwidth: 100%;\r\npadding: 10px 15px;\r\n}\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\ncolor: #ababab;\r\nfont-size: 12px;\r\n}\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\npadding: 6px 15px;\r\n}\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%] {\r\n  padding: 5px 15px 18px 15px;\r\n}\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)   td[_ngcontent-%COMP%]:nth-child(2) {\r\nfont-size: 12px;\r\ncolor: green;\r\nline-height: 10px;\r\n}\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%]:nth-child(2) {\r\nfont-size: 12px;\r\ncolor: maroon;\r\nline-height: 10px;\r\n}\r\n  .diabate_score[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\nfont-size: 12px;\r\npadding-left: 15px;\r\ncolor: #ababab;\r\nmargin: 13px 0px 0;\r\n}\r\n  .diabate[_ngcontent-%COMP%] {\r\nborder-bottom: 1px solid #cccccc;\r\nwidth: 100%;\r\n}\r\n  .address[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\r\ncolor: #ababab;\r\nfont-size: 12px;\r\n}\r\n  .address[_ngcontent-%COMP%] {\r\npadding: 15px;\r\nline-height: 23px;\r\nborder-bottom: 1px solid #cccccc;\r\n}\r\n  .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\nmargin: 0;\r\ncolor: #555;\r\n}\r\n  .graph[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  float: left;\r\n  text-align: right;\r\n}\r\n  .graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin-left: 45px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  line-height: 25px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){\r\n  color: #3f6aec;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n  height: 15px;\r\n  background-color: #3f6aec;\r\n  display: inline-block;\r\n  border-radius: 10px;\r\n  top: 2px;\r\n  position: relative;\r\n  margin-right: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9kYXRhdGFibGUvZGF0YXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkVBQUU7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGdDQUFnQztJQUNoQyxXQUFXO0FBQ2Y7RUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztFQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCOztBQUV6QjtFQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0VBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCO0VBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDO0VBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7RUFDQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7RUFDQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGVBQWU7QUFDbkI7RUFDQTtFQUNFLCtCQUErQjtBQUNqQztFQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixZQUFZO0NBQ2IsK0NBQTZEO0VBQzVELHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtFQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQztFQU1BLHFCQUFxQjtFQUNyQjtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFJUixnQ0FBZ0M7RUFDcEMsb0JBQW9CO0FBQ3RCO0VBR0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0VBR0E7RUFDRSx1QkFBdUI7QUFDekI7RUFFQTtFQUNFLGFBQWE7RUFJTCxvREFBb0Q7QUFDOUQ7RUFFQTtFQUNFLFFBQVE7QUFDVjtFQUVBLDRCQUE0QjtFQUM1QjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7RUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUNBO0FBQ0EsV0FBVztFQUNULFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7RUFDQTtBQUNBLGdCQUFnQjtBQUNoQixVQUFVO0FBQ1Y7RUFDQTtBQUNBLGFBQWE7QUFDYjtFQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0VBQ0E7QUFDQSx5QkFBeUI7QUFDekIsV0FBVztBQUNYO0VBRUE7QUFDQSx5QkFBeUI7QUFDekIsaUJBQWlCO0lBQ2Isa0JBQWtCO0FBQ3RCO0VBRUE7QUFDQSxVQUFVO0FBQ1Ysa0JBQWtCO0FBQ2xCLDRCQUE0QjtBQUM1QjtFQUNBO0FBQ0EsV0FBVztBQUNYLGtCQUFrQjtBQUNsQjtFQUNBO0FBQ0EsY0FBYztBQUNkLGVBQWU7QUFDZjtFQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7RUFDQTtBQUNBLGVBQWU7QUFDZixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCO0VBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQjtFQUNBO0FBQ0EsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCO0VBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsV0FBVztBQUNYO0VBQ0E7QUFDQSxjQUFjO0FBQ2QsZUFBZTtBQUNmO0VBQ0E7QUFDQSxhQUFhO0FBQ2IsaUJBQWlCO0FBQ2pCLGdDQUFnQztBQUNoQztFQUNBO0FBQ0EsU0FBUztBQUNULFdBQVc7QUFDWDtFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0VBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLGNBQWM7QUFDaEI7RUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgLndlYl92aWV3IHtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgfVxyXG4gIC53ZWJfdmlldyBoMyB7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gIHRhYmxlIHsgXHJcbiAgICAvKiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IFxyXG50aCB7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTFlNmVkOyBcclxuICAgIENvbG9yOiM1YTViNWQ7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjRweCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxudGgsIHRkIHsgXHJcbiAgICB3aWR0aDoyMThweDsgXHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7IFxyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBwYWRkaW5nOiAwcHggMCAwIDI1cHg7XHJcbiAgXHJcbn0gXHJcbi5nZWVrcyB7IFxyXG4gICAgYm9yZGVyLXJpZ2h0OmhpZGRlbjsgXHJcbn0gXHJcbnRyIHRkOm50aC1jaGlsZCg1KSBzcGFuIHtcclxuICBjb2xvcjojYWRhZGFkO1xyXG4gIC8qIGZvbnQtc2l6ZTogMTJweDsgKi9cclxufVxyXG50ciB0ZDpudGgtY2hpbGQoMykge1xyXG4gIGNvbG9yOiAjM2Y2YWVjO1xyXG4gIC8qIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAqL1xyXG59XHJcbnRyOmhvdmVyIHRkOm50aC1jaGlsZCgzKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmdmZyB7IFxyXG4gICAgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBcclxuICAgIGJvcmRlci1zcGFjaW5nOjAgMTVweDsgXHJcbn0gXHJcbi5nZmcgdHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogNHB4IDA7XHJcbiAgLyogaGVpZ2h0OiA2MHB4OyAqL1xyXG4gIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmdmZyB0cjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDJweCA1cHggI2RlZGVkZTtcclxufVxyXG4uc2VhcmNoIHtcclxuICBwYWRkaW5nOiA3cHggMTBweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvc2VhcmNoLnBuZykgbm8tcmVwZWF0IDk3JSA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGRkZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcbmhyIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyotLSBNb2RhbCBwb3B1cCAtLS0qL1xyXG4ubW9kYWwucmlnaHQgLm1vZGFsLWRpYWxvZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuICBtYXJnaW46IDY2cHggNnB4IDAgMDtcclxufVxyXG5cclxuXHJcbi5tb2RhbC5yaWdodCAubW9kYWwtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcblxyXG4ubW9kYWwucmlnaHQgLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDE1cHggMTVweCA4MHB4O1xyXG59XHJcblxyXG4ubW9kYWwucmlnaHQuZmFkZSAubW9kYWwtZGlhbG9nIHtcclxuICByaWdodDogLTMyMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgcmlnaHQgMC4zcyBlYXNlLW91dDtcclxuICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXIsIHJpZ2h0IDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhciwgcmlnaHQgMC4zcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGFsLnJpZ2h0LmZhZGUuaW4gLm1vZGFsLWRpYWxvZyB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIC0tLS0tIE1PREFMIFNUWUxFIC0tLS0tICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VFRUVFRTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG59XHJcbi51c2VyX2ljb24ge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuLnVzZXJfaWNvbiBpbWcge1xyXG5mbG9hdDogbGVmdDtcclxuICB3aWR0aDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnVzZXJfaWNvbiAudXNlcl9uYW1lIHtcclxucGFkZGluZy10b3A6IDJweDtcclxuY29sb3I6IzU1NTtcclxufVxyXG4udXNlcl9pY29uIC51c2VyX25hbWUgaDR7XHJcbm1hcmdpbjogM3B4IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxucGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wZXJzb25hbF9kZXRhaWxzIHtcclxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wZXJzb25hbF9kZXRhaWxzLCAucGVyc29uYWxfZGV0YWlscyB0ZCwgLnBlcnNvbmFsX2RldGFpbHMgdGgge1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG5ib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnBlcnNvbmFsX2RldGFpbHMgdGQ6bnRoLWNoaWxkKDEpe1xyXG53aWR0aDogOTIlO1xyXG5wYWRkaW5nOiAxMHB4IDE1cHg7XHJcbmJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XHJcbn1cclxuLnBlcnNvbmFsX2RldGFpbHMgdGQ6bnRoLWNoaWxkKDIpIHtcclxud2lkdGg6IDEwMCU7XHJcbnBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG4ucGVyc29uYWxfZGV0YWlscyB0ZCBzcGFuIHtcclxuY29sb3I6ICNhYmFiYWI7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGlhYmF0ZSB0ciB0ZCB7XHJcbnBhZGRpbmc6IDZweCAxNXB4O1xyXG59XHJcbi5kaWFiYXRlIHRyOm50aC1jaGlsZCgyKSB0ZCB7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggMThweCAxNXB4O1xyXG59XHJcbi5kaWFiYXRlIHRyOm50aC1jaGlsZCgxKSB0ZDpudGgtY2hpbGQoMikge1xyXG5mb250LXNpemU6IDEycHg7XHJcbmNvbG9yOiBncmVlbjtcclxubGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpYWJhdGUgdHI6bnRoLWNoaWxkKDIpIHRkOm50aC1jaGlsZCgyKSB7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuY29sb3I6IG1hcm9vbjtcclxubGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuLmRpYWJhdGVfc2NvcmUgaDQge1xyXG5mb250LXNpemU6IDEycHg7XHJcbnBhZGRpbmctbGVmdDogMTVweDtcclxuY29sb3I6ICNhYmFiYWI7XHJcbm1hcmdpbjogMTNweCAwcHggMDtcclxufVxyXG4uZGlhYmF0ZSB7XHJcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG4uYWRkcmVzcyBzbWFsbHtcclxuY29sb3I6ICNhYmFiYWI7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYWRkcmVzcyB7XHJcbnBhZGRpbmc6IDE1cHg7XHJcbmxpbmUtaGVpZ2h0OiAyM3B4O1xyXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcclxufVxyXG4uYWRkcmVzcyBwIHtcclxubWFyZ2luOiAwO1xyXG5jb2xvcjogIzU1NTtcclxufVxyXG4uZ3JhcGgge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmdyYXBoIHVsIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uZ3JhcGggaW1nIHtcclxuICBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG4uZ3JhcGggdWwgbGkge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuLmdyYXBoIHVsIGxpOm50aC1jaGlsZCgzKXtcclxuICBjb2xvcjogIzNmNmFlYztcclxufVxyXG4uZ3JhcGggdWwgbGkgc3BhbiB7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjZhZWM7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdG9wOiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datatable',
                templateUrl: './datatable.component.html',
                styleUrls: ['./datatable.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/body/mobile/mobile.component.ts":
/*!*************************************************!*\
  !*** ./src/app/body/mobile/mobile.component.ts ***!
  \*************************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MobileComponent {
    constructor() { }
    ngOnInit() {
        $(document).ready(function () {
            $("#myInput1").on("keyup", function () {
                var value = $(this).val().toLowerCase();
                $("#myTable tr").filter(function () {
                    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
                });
            });
        });
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 224, vars: 0, consts: [[1, "container-fluid", 2, "margin-top", "133px"], ["id", "myInput1", "type", "text", "placeholder", "Search", 1, "search"], ["id", "myTable"], ["data-toggle", "modal", "data-target", "#myModal2"], ["id", "myModal2", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel2", 1, "modal", "right", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "user_icon"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], ["src", "../../assets/back-arrow.PNG"], ["src", "../../assets/user-icon.jpg"], [1, "user_name"], [1, "personal_details"], [1, "diabate_score"], [1, "diabate"], [1, "clearfix"], [1, "address"], [1, "graph"], ["src", "../../../assets/graph-static.svg"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Adom Cole ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "69 Years,Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Last Attended:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " 5 Apr,2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Adam Cole");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "69 Years, Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Phone Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "+1 123456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Email ID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "coleadam@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Height (in Inches): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "5\"8\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Weight (in kgs): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "62 kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Blood Group: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "B +ve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Diabates Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "3/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Diabates Score:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "table", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Osteoporosis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Ongoing Treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Heart Defect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Incurable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "957,21ST,Stanford,CT,USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Overall Health Curve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Patient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".search[_ngcontent-%COMP%] {\r\n    padding: 7px 10px;\r\n    width: 100%;\r\n    margin-top: 20px;\r\n   background: url('search.png') no-repeat 97% 50%;\r\n    background-color: #dedddd;\r\n    border: none;\r\n    border-radius: 4px;\r\n  }\r\n  #myTable[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n      color:#555;\r\n      margin-top: 20px;\r\n  }\r\n  #myTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n      background-color: #ffffff;\r\n      border-bottom: 1px solid #cccccc;\r\n      \r\n  }\r\n  #myTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 20px 15px;\r\n    line-height: 30px;\r\n  }\r\n  #myTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      font-size: 13px;\r\n      color: #ababab;\r\n  }\r\n  \r\n  .modal.right[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    margin: auto;\r\n     width: 100%; \r\n    height: 100%;\r\n    transform: translate3d(0%, 0, 0);\r\n    \r\n  }\r\n  .modal.right[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    overflow-y: auto;\r\n  }\r\n  .modal.right[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n    padding: 15px 15px 80px;\r\n    color: #555;\r\n  }\r\n  .modal.right.fade[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    right: -320px;\r\n    transition: opacity 0.3s linear, right 0.3s ease-out;\r\n  }\r\n  .modal.right.fade.in[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%] {\r\n    right: 0;\r\n  }\r\n  \r\n  .modal-content[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n    border: none;\r\n  }\r\n  .modal-header[_ngcontent-%COMP%] {\r\n    border-bottom-color: #EEEEEE;\r\n    background-color: #FAFAFA;\r\n  }\r\n  .user_icon[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n  }\r\n  .user_icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  float: left;\r\n    width: 50px;\r\n    margin-right: 10px;\r\n  }\r\n  .user_icon[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%] {\r\n  padding-top: 2px;\r\n  color:#555;\r\n  }\r\n  .user_icon[_ngcontent-%COMP%]   .user_name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n  margin: 3px 0;\r\n  }\r\n  .modal-body[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n  }\r\n  .personal_details[_ngcontent-%COMP%] {\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n  }\r\n  .personal_details[_ngcontent-%COMP%], .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .personal_details[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  border: 1px solid #cccccc;\r\n  }\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){\r\n  width: 92%;\r\n  padding: 10px 15px;\r\n  }\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n  width: 100%;\r\n  padding: 10px 15px;\r\n  }\r\n  .personal_details[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #ababab;\r\n  font-size: 12px;\r\n  }\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 6px 15px;\r\n  }\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)   td[_ngcontent-%COMP%]:nth-child(2) {\r\n  font-size: 12px;\r\n  color: green;\r\n  line-height: 10px;\r\n  }\r\n  .diabate[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%]:nth-child(2) {\r\n  font-size: 12px;\r\n  color: maroon;\r\n  line-height: 10px;\r\n  }\r\n  .diabate_score[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  padding-left: 15px;\r\n  color: #ababab;\r\n  margin: 13px 0px 0;\r\n  padding-bottom: 10px;\r\n  }\r\n  .diabate[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  }\r\n  .address[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{\r\n  color: #ababab;\r\n  font-size: 12px;\r\n  }\r\n  .address[_ngcontent-%COMP%] {\r\n  padding: 15px;\r\n  line-height: 23px;\r\n  border-bottom: 1px solid #cccccc;\r\n  }\r\n  .address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: #555;\r\n  }\r\n  .user_icon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 25px;\r\n    position: relative;\r\n    top: 12px;\r\n}\r\n  .diabate_score[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ccc;\r\n    padding-bottom: 20px;\r\n}\r\n  .graph[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    float: left;\r\n    text-align: right;\r\n}\r\n  .graph[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-left: 45px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n    line-height: 25px;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3){\r\n    color: #3f6aec;\r\n}\r\n  .graph[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: #3f6aec;\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    top: 2px;\r\n    position: relative;\r\n    margin-right: 6px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9keS9tb2JpbGUvbW9iaWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtHQUNqQiwrQ0FBNkQ7SUFDNUQseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFDQTtNQUNJLFdBQVc7TUFDWCxVQUFVO01BQ1YsZ0JBQWdCO0VBQ3BCO0VBQ0E7TUFDSSx5QkFBeUI7TUFDekIsZ0NBQWdDOztFQUVwQztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO01BQ0ksZUFBZTtNQUNmLGNBQWM7RUFDbEI7RUFFQSxxQkFBcUI7RUFDdkI7SUFDSSxlQUFlO0lBQ2YsWUFBWTtLQUNYLFdBQVc7SUFDWixZQUFZO0lBSVIsZ0NBQWdDO0lBQ3BDLDBCQUEwQjtFQUM1QjtFQUdBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjtFQUdBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFdBQVc7RUFDYjtFQUVBO0lBQ0UsYUFBYTtJQUlMLG9EQUFvRDtFQUM5RDtFQUVBO0lBQ0UsUUFBUTtFQUNWO0VBRUEsNEJBQTRCO0VBQzVCO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDtFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7RUFDQSxXQUFXO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0VBQ0EsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjtFQUNBO0VBQ0EsYUFBYTtFQUNiO0VBRUE7RUFDQSxxQkFBcUI7RUFDckI7RUFDQTtFQUNBLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1g7RUFFQTtFQUNBLHlCQUF5QjtFQUN6QjtFQUVBO0VBQ0EsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQjtFQUNBO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUNsQjtFQUNBO0VBQ0EsY0FBYztFQUNkLGVBQWU7RUFDZjtFQUNBO0VBQ0EsaUJBQWlCO0VBQ2pCO0VBQ0E7RUFDQSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQjtFQUNBO0VBQ0EsZUFBZTtFQUNmLGFBQWE7RUFDYixpQkFBaUI7RUFDakI7RUFDQTtFQUNBLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEI7RUFDQTtFQUNBLHNDQUFzQztFQUN0QyxXQUFXO0VBQ1g7RUFDQTtFQUNBLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7RUFDQTtFQUNBLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDO0VBQ0E7RUFDQSxTQUFTO0VBQ1QsV0FBVztFQUNYO0VBRUY7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtFQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4QjtFQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0VBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCO0VBQ0E7SUFDSSxpQkFBaUI7QUFDckI7RUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7RUFDQTtJQUNJLGNBQWM7QUFDbEI7RUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9ib2R5L21vYmlsZS9tb2JpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvc2VhcmNoLnBuZykgbm8tcmVwZWF0IDk3JSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZGRkO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAjbXlUYWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjojNTU1O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICAjbXlUYWJsZSB0ciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICBcclxuICB9XHJcbiAgI215VGFibGUgdHIgdGQge1xyXG4gICAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gICNteVRhYmxlIHRyIHRkIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGNvbG9yOiAjYWJhYmFiO1xyXG4gIH1cclxuXHJcbiAgLyotLSBNb2RhbCBwb3B1cCAtLS0qL1xyXG4ubW9kYWwucmlnaHQgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAlLCAwLCAwKTtcclxuICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwJSwgMCwgMCk7XHJcbiAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCUsIDAsIDApO1xyXG4gICAgLyogbWFyZ2luOiA2NnB4IDZweCAwIDA7ICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5tb2RhbC5yaWdodCAubW9kYWwtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubW9kYWwucmlnaHQgLm1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDgwcHg7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLnJpZ2h0LmZhZGUgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICByaWdodDogLTMyMHB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAtby10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgbGluZWFyLCByaWdodCAwLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwucmlnaHQuZmFkZS5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAvKiAtLS0tLSBNT0RBTCBTVFlMRSAtLS0tLSAqL1xyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI0VFRUVFRTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgfVxyXG4gIC51c2VyX2ljb24ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbiAgLnVzZXJfaWNvbiBpbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIC51c2VyX2ljb24gLnVzZXJfbmFtZSB7XHJcbiAgcGFkZGluZy10b3A6IDJweDtcclxuICBjb2xvcjojNTU1O1xyXG4gIH1cclxuICAudXNlcl9pY29uIC51c2VyX25hbWUgaDR7XHJcbiAgbWFyZ2luOiAzcHggMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnBlcnNvbmFsX2RldGFpbHMge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZXJzb25hbF9kZXRhaWxzLCAucGVyc29uYWxfZGV0YWlscyB0ZCwgLnBlcnNvbmFsX2RldGFpbHMgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIC5wZXJzb25hbF9kZXRhaWxzIHRkOm50aC1jaGlsZCgxKXtcclxuICB3aWR0aDogOTIlO1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcbiAgLnBlcnNvbmFsX2RldGFpbHMgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5wZXJzb25hbF9kZXRhaWxzIHRkIHNwYW4ge1xyXG4gIGNvbG9yOiAjYWJhYmFiO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmRpYWJhdGUgdHIgdGQge1xyXG4gIHBhZGRpbmc6IDZweCAxNXB4O1xyXG4gIH1cclxuICAuZGlhYmF0ZSB0cjpudGgtY2hpbGQoMSkgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAuZGlhYmF0ZSB0cjpudGgtY2hpbGQoMikgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IG1hcm9vbjtcclxuICBsaW5lLWhlaWdodDogMTBweDtcclxuICB9XHJcbiAgLmRpYWJhdGVfc2NvcmUgaDQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgY29sb3I6ICNhYmFiYWI7XHJcbiAgbWFyZ2luOiAxM3B4IDBweCAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAuZGlhYmF0ZSB7XHJcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHNtYWxse1xyXG4gIGNvbG9yOiAjYWJhYmFiO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmFkZHJlc3Mge1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgfVxyXG4gIC5hZGRyZXNzIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzU1NTtcclxuICB9XHJcbiAgXHJcbi51c2VyX2ljb24gYnV0dG9uIHNwYW4gaW1nIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMnB4O1xyXG59XHJcbi5kaWFiYXRlX3Njb3JlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmdyYXBoIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmdyYXBoIHVsIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmdyYXBoIGltZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcclxufVxyXG4uZ3JhcGggdWwgbGkge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcbi5ncmFwaCB1bCBsaTpudGgtY2hpbGQoMyl7XHJcbiAgICBjb2xvcjogIzNmNmFlYztcclxufVxyXG4uZ3JhcGggdWwgbGkgc3BhbiB7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjZhZWM7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdG9wOiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _body_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../body/datatable/datatable.component */ "./src/app/body/datatable/datatable.component.ts");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 26, vars: 0, consts: [[1, "navbar", "navbar-inverse"], [1, "container-fluid"], [1, "navbar-header", "logo", "col-md-5", "col-sm-4"], ["src", "assets/vista-name-right.svg", 1, "navbar-brand"], [1, "head_nav"], [1, "mobile_head", 2, "display", "none"], [1, "navbar-header"], [1, "nav", "navbar-nav", "navbar-right"], ["src", "assets/doctor-image.jpg"], [1, "nav", "nav-tabs"], ["data-toggle", "tab", "href", "#tab1"], [1, "active"], ["data-toggle", "tab", "href", "#tab2"], [1, "nav", "navbar-nav", "navbar-right", "logo_right"], [1, "clearfix"], [1, "tab-content"], ["id", "tab1", 1, "tab-pane", "fade"], ["id", "tab2", 1, "tab-pane", "fade", "in", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "My Appointments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My Patients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-datatable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_body_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]], styles: [".navbar-inverse[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    border-color: #ffffff;\r\n    box-shadow: 5px 2px 5px #dedede;\r\n    border-radius: 0;\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\n.navbar-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    padding: 7px 22px;\r\n    margin-top: 4px;\r\n}\r\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    padding: 12px 17px;\r\n}\r\n.navbar-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 38px;\r\n}\r\n.navbar-right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tpadding: 12px 17px;\r\n}\r\n.navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navbar-inverse[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n    color: #3f6aec;\r\n    border-bottom:2px solid #3f6aec;\r\n\r\n}\r\n.active[_ngcontent-%COMP%] {\r\n    color: #3f6aec;\r\n    border-bottom:2px solid #3f6aec;\r\n}\r\n.navbar-center[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n.navbar-center[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    padding: 15px 17px !important;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n\tbackground: none;\r\n\t\r\n}\r\n#tab1[_ngcontent-%COMP%], #tab2[_ngcontent-%COMP%] {\r\nborder-bottom: 0 !important;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] {\r\nfloat: left;\r\nmargin-top: 10px;\r\nborder: none;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .nav-tabs[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\ncolor: #337ab7;\r\nborder: none;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {\r\n    padding-bottom: 10px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover {\r\n    padding-bottom: 10px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\ncolor: #555555;\r\nborder: none;\r\nfont-size: 15px;\r\n}\r\n.nav-tabs[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n    border-color: #ffffff;\r\n    \r\n    color: #3f6aec;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0NBQ0Msa0JBQWtCO0FBQ25CO0FBQ0E7OztJQUdJLGNBQWM7SUFDZCwrQkFBK0I7O0FBRW5DO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0NBQ0MsZ0JBQWdCOztBQUVqQjtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsV0FBVztBQUNYLGdCQUFnQjtBQUNoQixZQUFZO0FBQ1o7QUFDQTs7O0FBR0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtBQUNBLGNBQWM7QUFDZCxZQUFZO0FBQ1osZUFBZTtBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLGNBQWM7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1pbnZlcnNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3gtc2hhZG93OiA1cHggMnB4IDVweCAjZGVkZWRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uYXZiYXItaGVhZGVyIGltZyB7XHJcbiAgICBwYWRkaW5nOiA3cHggMjJweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG4ubmF2YmFyLWludmVyc2UgLm5hdmJhci1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE3cHg7XHJcbn1cclxuLm5hdmJhci1yaWdodCBsaSBpbWcge1xyXG4gICAgd2lkdGg6IDM4cHg7XHJcbn1cclxuLm5hdmJhci1yaWdodCBsaSB7XHJcblx0cGFkZGluZzogMTJweCAxN3B4O1xyXG59XHJcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaSBhOmZvY3VzLCBcclxuLm5hdmJhci1pbnZlcnNlIC5uYXZiYXItbmF2IGxpIGE6aG92ZXIsXHJcbi5uYXZiYXItaW52ZXJzZSAubmF2YmFyLW5hdiBsaSBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzNmNmFlYztcclxuICAgIGJvcmRlci1ib3R0b206MnB4IHNvbGlkICMzZjZhZWM7XHJcblxyXG59XHJcbi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMzZjZhZWM7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjM2Y2YWVjO1xyXG59XHJcbi5uYXZiYXItY2VudGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm5hdmJhci1jZW50ZXIgbGkgYSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE3cHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2LXRhYnM+bGk+YTpob3ZlciB7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcclxufVxyXG4jdGFiMSxcclxuI3RhYjIge1xyXG5ib3JkZXItYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi10YWJzIHtcclxuZmxvYXQ6IGxlZnQ7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbmJvcmRlcjogbm9uZTtcclxufVxyXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmEsIFxyXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6Zm9jdXMsIFxyXG4ubmF2LXRhYnM+bGkuYWN0aXZlPmE6aG92ZXIge1xyXG5jb2xvcjogIzMzN2FiNztcclxuYm9yZGVyOiBub25lO1xyXG59XHJcbi5uYXYtdGFicz5saSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4ubmF2LXRhYnM+bGk6aG92ZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLm5hdi10YWJzIGxpIGEge1xyXG5jb2xvcjogIzU1NTU1NTtcclxuYm9yZGVyOiBub25lO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuLm5hdi10YWJzPmxpPmE6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzZjZhZWM7ICovXHJcbiAgICBjb2xvcjogIzNmNmFlYztcclxuICAgIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\Angular_assignments\practice\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map