(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Flag language selectors-->\n<ng-select class=\"lang-select primary-lang\" [searchable]=\"false\" [items]=\"languages\" [(ngModel)]=\"primaryFlagCode\"\nbindLabel=\"language\" bindValue=\"flagCode\" (change)=\"setPrimaryLanguage($event)\">\n    <ng-template ng-label-tmp let-item=\"item\">\n        <span class=\"flag-icon flag-icon-{{item.flagCode}}\"></span>\n    </ng-template>\n    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n        <span class=\"flag-icon flag-icon-{{item.flagCode}}\"></span>\n    </ng-template>\n</ng-select>\n<ng-select class=\"lang-select secondary-lang\" [searchable]=\"false\" [items]=\"languages\" [(ngModel)]=\"secondaryFlagCode\"\nbindLabel=\"language\" bindValue=\"flagCode\" (change)=\"setSecondaryLanguage($event)\">\n    <ng-template ng-label-tmp let-item=\"item\">\n        <span class=\"flag-icon flag-icon-{{item.flagCode}}\"></span>\n    </ng-template>\n    <ng-template ng-option-tmp let-item=\"item\" let-index=\"index\">\n        <span class=\"flag-icon flag-icon-{{item.flagCode}}\"></span>\n    </ng-template>\n</ng-select>\n<mat-icon color=\"accent\" class=\"toggle-button\" (click)=\"toggleLanguage()\">compare_arrows</mat-icon>\n\n<!--Header-->\n<mat-tab-group [color]=\"header.color\" [backgroundColor]=\"header.background\">\n  <!--Location page-->\n  <mat-tab\n    [label]=\"translateService.primaryTranslation.location\"\n    [matTooltip]=\"translateService.secondaryTranslation.location\"\n> \n    <page-location></page-location>\n  </mat-tab>\n\n  <!--Landmarks page-->\n  <mat-tab\n    [label]=\"translateService.primaryTranslation.landmarks\"\n    [matTooltip]=\"translateService.secondaryTranslation.landmarks\"\n  >\n    <page-landmarks></page-landmarks>\n  </mat-tab>\n  \n  <!--Transportation page-->\n  <mat-tab\n    [label]=\"translateService.primaryTranslation.transportation\"\n    [matTooltip]=\"translateService.secondaryTranslation.transportation\"\n>\n    <page-transportation></page-transportation>\n  </mat-tab>\n\n  <h2>Title</h2>\n</mat-tab-group>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _location_location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location/location */ "./src/app/location/location.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var distanceJSON = __webpack_require__(/*! ./distance-to-from.json */ "./src/app/distance-to-from.json");
var AppComponent = /** @class */ (function () {
    function AppComponent(translateService, locationComponent) {
        this.translateService = translateService;
        this.locationComponent = locationComponent;
        this.title = 'transit-angular';
        this.header = {
            color: "accent",
            background: "primary"
        };
        this.languages = [
            { flagCode: 'cn', langCode: 'zh-Hans', language: 'Chinese' },
            { flagCode: 'iq', langCode: 'ar', language: 'Arabic' },
            { flagCode: 'us', langCode: 'en', language: 'English' },
            { flagCode: 'mx', langCode: 'es', language: 'Spanish' },
            { flagCode: 'fr', langCode: 'fr', language: 'French' },
        ];
        this.distanceList = [];
        // default values
        this.primaryFlagCode = localStorage.getItem('primaryLang') ? lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { langCode: localStorage.getItem('primaryLang') }).flagCode : 'us';
        this.secondaryFlagCode = localStorage.getItem('secondaryLang') ? lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { langCode: localStorage.getItem('secondaryLang') }).flagCode : 'cn';
        this.primaryLang = localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'en';
        this.secondaryLang = localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'zh-Hans';
        this.translateService.generateTranslations();
        this.translateService.primaryTranslation = this.translateService.translations[localStorage.getItem('primaryLang') ? localStorage.getItem('primaryLang') : 'en'];
        this.translateService.secondaryTranslation = this.translateService.translations[localStorage.getItem('secondaryLang') ? localStorage.getItem('secondaryLang') : 'en'];
    }
    AppComponent.prototype.ngOnInit = function () { };
    // use lodash to quickly find element in json with same language code
    AppComponent.prototype.setPrimaryLanguage = function () {
        this.primaryLang = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { flagCode: this.primaryFlagCode })["langCode"];
        this.translateService.primaryTranslation = this.translateService.translations[this.primaryLang];
        localStorage.setItem('primaryLang', this.primaryLang);
    };
    AppComponent.prototype.setSecondaryLanguage = function () {
        this.secondaryLang = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { flagCode: this.secondaryFlagCode })["langCode"];
        this.translateService.secondaryTranslation = this.translateService.translations[this.secondaryLang];
        localStorage.setItem('secondaryLang', this.secondaryLang);
    };
    AppComponent.prototype.toggleLanguage = function () {
        var primary = this.primaryLang; // ptrs to dictionary
        var secondary = this.secondaryLang;
        this.translateService.primaryTranslation = this.translateService.translations[secondary];
        this.translateService.secondaryTranslation = this.translateService.translations[primary];
        localStorage.setItem('primaryLang', secondary); // ptrs to language code
        localStorage.setItem('secondaryLang', primary);
        this.primaryFlagCode = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { langCode: secondary })["flagCode"];
        this.secondaryFlagCode = lodash__WEBPACK_IMPORTED_MODULE_2__["find"](this.languages, { langCode: primary })["flagCode"];
        this.primaryLang = secondary;
        this.secondaryLang = primary;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _location_location__WEBPACK_IMPORTED_MODULE_3__["LocationComponent"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _location_location__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./location/location */ "./src/app/location/location.ts");
/* harmony import */ var _landmarks_landmarks_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./landmarks/landmarks.component */ "./src/app/landmarks/landmarks.component.ts");
/* harmony import */ var _transportation_transportation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transportation/transportation */ "./src/app/transportation/transportation.ts");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// imports













// declarations






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _location_location__WEBPACK_IMPORTED_MODULE_14__["LocationComponent"],
                _landmarks_landmarks_component__WEBPACK_IMPORTED_MODULE_15__["LandmarksComponent"],
                _transportation_transportation__WEBPACK_IMPORTED_MODULE_16__["TransportationComponent"]
            ],
            providers: [_translate_service__WEBPACK_IMPORTED_MODULE_17__["TranslateService"], _location_location__WEBPACK_IMPORTED_MODULE_14__["LocationComponent"], _landmarks_landmarks_component__WEBPACK_IMPORTED_MODULE_15__["LandmarksComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/distance-to-from.json":
/*!***************************************!*\
  !*** ./src/app/distance-to-from.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

module.exports = [{"campus":"East","source":"Neighborhood 1","destination":"Chapel","distanceMi":2,"distanceKm":3.22,"time":15},{"campus":"East","source":"Neighborhood 1","destination":"West Union","distanceMi":1.9,"distanceKm":3.059,"time":13},{"campus":"East","source":"Neighborhood 1","destination":"Perkins Library","distanceMi":1.9,"distanceKm":3.059,"time":13},{"campus":"East","source":"Neighborhood 1","destination":"East Bus Stop","distanceMi":0.3,"distanceKm":0.483,"time":"N/A"},{"campus":"East","source":"Neighborhood 1","destination":"Marketplace","distanceMi":0.1,"distanceKm":0.161,"time":"N/A"},{"campus":"East","source":"Neighborhood 1","destination":"Lilly Library","distanceMi":0.2,"distanceKm":0.322,"time":"N/A"},{"campus":"East","source":"Neighborhood 2","destination":"Chapel","distanceMi":1.7,"distanceKm":2.737,"time":11},{"campus":"East","source":"Neighborhood 2","destination":"West Union","distanceMi":1.7,"distanceKm":2.737,"time":9},{"campus":"East","source":"Neighborhood 2","destination":"Perkins Library","distanceMi":1.7,"distanceKm":2.737,"time":9},{"campus":"East","source":"Neighborhood 2","destination":"East Bus Stop","distanceMi":0.06,"distanceKm":0.0966,"time":"N/A"},{"campus":"East","source":"Neighborhood 2","destination":"Marketplace","distanceMi":0.2,"distanceKm":0.322,"time":"N/A"},{"campus":"East","source":"Neighborhood 2","destination":"Lilly Library","distanceMi":0.2,"distanceKm":0.322,"time":"N/A"},{"campus":"East","source":"Neighborhood 3","destination":"Chapel","distanceMi":1.7,"distanceKm":2.737,"time":12},{"campus":"East","source":"Neighborhood 3","destination":"West Union","distanceMi":1.6,"distanceKm":2.576,"time":10},{"campus":"East","source":"Neighborhood 3","destination":"Perkins Library","distanceMi":1.7,"distanceKm":2.737,"time":10},{"campus":"East","source":"Neighborhood 3","destination":"East Bus Stop","distanceMi":0.3,"distanceKm":0.483,"time":"N/A"},{"campus":"East","source":"Neighborhood 3","destination":"Marketplace","distanceMi":0.5,"distanceKm":0.805,"time":"N/A"},{"campus":"East","source":"Neighborhood 3","destination":"Lilly Library","distanceMi":0.4,"distanceKm":0.644,"time":"N/A"},{"campus":"East","source":"Neighborhood 4","destination":"Chapel","distanceMi":1.8,"distanceKm":2.898,"time":13},{"campus":"East","source":"Neighborhood 4","destination":"West Union","distanceMi":1.7,"distanceKm":2.737,"time":11},{"campus":"East","source":"Neighborhood 4","destination":"Perkins Library","distanceMi":1.7,"distanceKm":2.737,"time":11},{"campus":"East","source":"Neighborhood 4","destination":"East Bus Stop","distanceMi":0.2,"distanceKm":0.322,"time":"N/A"},{"campus":"East","source":"Neighborhood 4","destination":"Marketplace","distanceMi":0.3,"distanceKm":0.483,"time":"N/A"},{"campus":"East","source":"Neighborhood 4","destination":"Lilly Library","distanceMi":0.2,"distanceKm":0.322,"time":"N/A"},{"campus":"East","source":"Neighborhood 5","destination":"Chapel","distanceMi":1.6,"distanceKm":2.576,"time":15},{"campus":"East","source":"Neighborhood 5","destination":"West Union","distanceMi":1.5,"distanceKm":2.415,"time":13},{"campus":"East","source":"Neighborhood 5","destination":"Perkins Library","distanceMi":1.5,"distanceKm":2.415,"time":13},{"campus":"East","source":"Neighborhood 5","destination":"East Bus Stop","distanceMi":0.3,"distanceKm":0.483,"time":"N/A"},{"campus":"East","source":"Neighborhood 5","destination":"Marketplace","distanceMi":0.4,"distanceKm":0.644,"time":"N/A"},{"campus":"East","source":"Neighborhood 5","destination":"Lilly Library","distanceMi":0.3,"distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Craven","destination":"Chapel","distanceMi":"0.1","distanceKm":0.161,"time":"N/A"},{"campus":"West","source":"Craven","destination":"West Union","distanceMi":"0.07","distanceKm":0.11,"time":"N/A"},{"campus":"West","source":"Craven","destination":"Perkins Library","distanceMi":"0.09","distanceKm":0.14,"time":"N/A"},{"campus":"West","source":"Craven","destination":"East Bus Stop","distanceMi":"1.7","distanceKm":2.737,"time":9},{"campus":"West","source":"Craven","destination":"Marketplace","distanceMi":"1.7","distanceKm":2.737,"time":13},{"campus":"West","source":"Craven","destination":"Lilly Library","distanceMi":"1.7","distanceKm":2.737,"time":13},{"campus":"West","source":"Crowell","destination":"Chapel","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Crowell","destination":"West Union","distanceMi":"0.2","distanceKm":0.322,"time":"N/A"},{"campus":"West","source":"Crowell","destination":"Perkins Library","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Crowell","destination":"East Bus Stop","distanceMi":"1.8","distanceKm":2.898,"time":13},{"campus":"West","source":"Crowell","destination":"Marketplace","distanceMi":"2","distanceKm":3.22,"time":15},{"campus":"West","source":"Crowell","destination":"Lilly Library","distanceMi":"1.9","distanceKm":3.059,"time":15},{"campus":"West","source":"Kilgo","destination":"Chapel","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Kilgo","destination":"West Union","distanceMi":"0.1","distanceKm":0.161,"time":"N/A"},{"campus":"West","source":"Kilgo","destination":"Perkins Library","distanceMi":"0.2","distanceKm":0.322,"time":"N/A"},{"campus":"West","source":"Kilgo","destination":"East Bus Stop","distanceMi":"1.7","distanceKm":2.737,"time":12},{"campus":"West","source":"Kilgo","destination":"Marketplace","distanceMi":"1.9","distanceKm":3.059,"time":13},{"campus":"West","source":"Kilgo","destination":"Lilly Library","distanceMi":"1.9","distanceKm":3.059,"time":14},{"campus":"West","source":"Keohane","destination":"Chapel","distanceMi":"0.4","distanceKm":0.644,"time":"N/A"},{"campus":"West","source":"Keohane","destination":"West Union","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Keohane","destination":"Perkins Library","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Keohane","destination":"East Bus Stop","distanceMi":"1.7","distanceKm":2.737,"time":13},{"campus":"West","source":"Keohane","destination":"Marketplace","distanceMi":"1.8","distanceKm":2.898,"time":15},{"campus":"West","source":"Keohane","destination":"Lilly Library","distanceMi":"1.8","distanceKm":2.898,"time":15},{"campus":"West","source":"Edens","destination":"Chapel","distanceMi":"0.4","distanceKm":0.644,"time":"N/A"},{"campus":"West","source":"Edens","destination":"West Union","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Edens","destination":"Perkins Library","distanceMi":"0.4","distanceKm":0.644,"time":"N/A"},{"campus":"West","source":"Edens","destination":"East Bus Stop","distanceMi":"1.6","distanceKm":2.576,"time":14},{"campus":"West","source":"Edens","destination":"Marketplace","distanceMi":"1.7","distanceKm":2.737,"time":16},{"campus":"West","source":"Edens","destination":"Lilly Library","distanceMi":"1.7","distanceKm":2.737,"time":16},{"campus":"West","source":"Wannamaker","destination":"Chapel","distanceMi":"0.4","distanceKm":0.644,"time":"N/A"},{"campus":"West","source":"Wannamaker","destination":"West Union","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Wannamaker","destination":"Perkins Library","distanceMi":"0.3","distanceKm":0.483,"time":"N/A"},{"campus":"West","source":"Wannamaker","destination":"East Bus Stop","distanceMi":"1.8","distanceKm":2.898,"time":14},{"campus":"West","source":"Wannamaker","destination":"Marketplace","distanceMi":"1.9","distanceKm":3.059,"time":16},{"campus":"West","source":"Wannamaker","destination":"Lilly Library","distanceMi":"1.9","distanceKm":3.059,"time":16}];

/***/ }),

/***/ "./src/app/landmarks/landmarks.component.ts":
/*!**************************************************!*\
  !*** ./src/app/landmarks/landmarks.component.ts ***!
  \**************************************************/
/*! exports provided: LandmarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandmarksComponent", function() { return LandmarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../translate.service */ "./src/app/translate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var distanceJSON = __webpack_require__(/*! ../distance-to-from.json */ "./src/app/distance-to-from.json");
var LandmarksComponent = /** @class */ (function () {
    function LandmarksComponent(translateService) {
        this.translateService = translateService;
        this.myLocation = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
        this.distanceList = localStorage.getItem('distanceList') ? JSON.parse(localStorage.getItem('distanceList')) : null;
    }
    LandmarksComponent.prototype.ngOnInit = function () {
        this.getDistances();
    };
    LandmarksComponent.prototype.getDistances = function () {
        var myLoc = localStorage.getItem('myLocation') ? localStorage.getItem('myLocation') : 'N/A';
        for (var i = 0; i < distanceJSON.length; i++) {
            if (distanceJSON[i].source === myLoc) {
                this.distanceList.push(distanceJSON[i]);
            }
        }
        console.log(this.distanceList);
        localStorage.setItem('distanceList', JSON.stringify(this.distanceList));
        return this.distanceList;
    };
    LandmarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-landmarks',
            template: __webpack_require__(/*! ./landmarks.html */ "./src/app/landmarks/landmarks.html")
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LandmarksComponent);
    return LandmarksComponent;
}());



/***/ }),

/***/ "./src/app/landmarks/landmarks.html":
/*!******************************************!*\
  !*** ./src/app/landmarks/landmarks.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container landmarks\">\n  <div class=\"locations-row-container location-center\">\n      <button mat-raised-button \n        color=\"primary\" \n        class=\"landmark-button east\" \n        [matTooltip]=\"translateService.secondaryTranslation.landmarks\"\n      >\n        {{translateService.primaryTranslation.landmarks}}\n      </button>\n      <button mat-raised-button\n        color=\"primary\"\n        class=\"landmark-button west\"\n        matTooltip=\"{{translateService.secondaryTranslation.food}}/{{translateService.secondaryTranslation.dining}}\"\n      >\n        {{translateService.primaryTranslation.food}}/{{translateService.primaryTranslation.dining}}\n      </button>\n      <button mat-raised-button\n        color=\"primary\"\n        class=\"landmark-button central\"\n        [matTooltip]=\"translateService.secondaryTranslation.residenceHalls\"\n      >\n        {{translateService.primaryTranslation.residenceHalls}}\n      </button>\n  </div>\n</div>\n\n<div class=\"flex-container\">\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/chapel.png\">\n      <h3>{{distanceList[0].destination}}</h3>\n      <p>\n        {{distanceList[0].time}} mins | {{distanceList[0].distanceMi}} mi | {{distanceList[0].distanceKm}} km\n      </p>\n    </div>\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/wu.png\">\n      <h3>{{distanceList[1].destination}}</h3>\n      <p>\n        {{distanceList[1].time}} mins | {{distanceList[1].distanceMi}} mi | {{distanceList[1].distanceKm}} km\n      </p>\n    </div>\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/west-dorm.png\">\n      <h3>{{distanceList[2].destination}}</h3>\n      <p>\n        {{distanceList[2].time}} mins | {{distanceList[2].distanceMi}} mi | {{distanceList[2].distanceKm}} km\n      </p></div>\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/baldwin.png\">\n      <h3>{{distanceList[3].destination}}</h3>\n      <p>\n        {{distanceList[3].time}} mins | {{distanceList[3].distanceMi}} mi | {{distanceList[3].distanceKm}} km\n      </p>\n    </div>\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/marketplace.png\">\n      <h3>{{distanceList[4].destination}}</h3>\n      <p>\n        {{distanceList[4].time}} mins | {{distanceList[4].distanceMi}} mi | {{distanceList[4].distanceKm}} km\n      </p>\n    </div>\n    <div class=\"landmark-container\">\n      <img class=\"flex-grid-elem\" src=\"../../www/imgs/east-dorm.png\">\n      <h3>{{distanceList[5].destination}}</h3>\n      <p>\n        {{distanceList[5].time}} mins | {{distanceList[5].distanceMi}} mi | {{distanceList[5].distanceKm}} km\n      </p></div>  \n</div>\n\n<!-- <mat-grid-tile\n  *ngFor=\"let tile of tiles\"\n  [colspan]=\"tile.cols\"\n  [rowspan]=\"tile.rows\"\n  [style.background]=\"tile.color\">\n{{tile.text}}\n</mat-grid-tile> -->"

/***/ }),

/***/ "./src/app/location/location.html":
/*!****************************************!*\
  !*** ./src/app/location/location.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"locations-row-container\">\n        <label class=\"location-label\" [matTooltip]=\"translateService.secondaryTranslation.selectLocation\">\n          {{translateService.primaryTranslation.selectLocation}}:\n        </label>\n        <button mat-raised-button [matTooltip]=\"translateService.secondaryTranslation.east\" color=\"primary\" class=\"location-button east\" (click)=\"updateDropdown(campuses.east.name)\">\n          {{translateService.primaryTranslation.east}}\n        </button>\n        <button mat-raised-button [matTooltip]=\"translateService.secondaryTranslation.west\" color=\"primary\" class=\"location-button west\"  (click)=\"updateDropdown(campuses.west.name)\">\n          {{translateService.primaryTranslation.west}}\n        </button>\n        <button mat-raised-button [matTooltip]=\"translateService.secondaryTranslation.central\" color=\"primary\" class=\"location-button central\" (click)=\"updateDropdown(campuses.central.name)\">\n          {{translateService.primaryTranslation.central}}\n        </button>\n    </div>\n\n    <div class=\"dorms-row-container\">\n      <label class=\"dorm-label\" [matTooltip]=\"translateService.secondaryTranslation.selectDorm\">\n        {{translateService.primaryTranslation.selectDorm}}:\n      </label>\n      <form class=\"dorm-form\">\n          <mat-form-field class=\"example-full-width\">\n            <input type=\"text\" [placeholder]=\"translateService.primaryTranslation.pickOne\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n            <mat-autocomplete #auto=\"matAutocomplete\">\n              <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n                {{option}}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n        </form>\n      <button\n        mat-raised-button\n        color=\"primary\"\n        class=\"button submit-button\"\n        (click)=\"submitLocation()\"\n        [matTooltip]=\"translateService.secondaryTranslation.submit\"\n      >\n        {{translateService.primaryTranslation.submit}}\n      </button>\n    </div>  \n\n    <div>\n      <label class=\"dorm-label\" (display)=\"myLocation\" [matTooltip]=\"translateService.secondaryTranslation.defaultLocation\">\n        {{translateService.primaryTranslation.defaultLocation}}: {{myLocation}}\n      </label>\n    </div>\n  \n      <div>\n        <a target=\"_blank\" class='button' href='https://duke.qualtrics.com/jfe/form/SV_0GOyAghD2OJSsGV'>Report Incorrect Translation</a>\n       </div>\n    <div>\n      <a target='_blank' class=\"button\" href='https://duke.qualtrics.com/jfe/form/SV_5nJNoy1K1ZtyN2l'>Feedback</a>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/location/location.scss":
/*!****************************************!*\
  !*** ./src/app/location/location.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/location/location.ts":
/*!**************************************!*\
  !*** ./src/app/location/location.ts ***!
  \**************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _translate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../translate.service */ "./src/app/translate.service.ts");
/* harmony import */ var _landmarks_landmarks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../landmarks/landmarks.component */ "./src/app/landmarks/landmarks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var distanceJSON = __webpack_require__(/*! ../distance-to-from.json */ "./src/app/distance-to-from.json");
var LocationComponent = /** @class */ (function () {
    function LocationComponent(translateService, landmarks) {
        this.translateService = translateService;
        this.landmarks = landmarks;
        // global vars
        this.campuses = {
            east: {
                name: "east",
                options: ['Neighborhood 1', 'Neighborhood 2', 'Neighborhood 3', 'Neighborhood 4', 'Neighborhood 5']
            },
            west: {
                name: "west",
                options: ['Craven', 'Crowell', 'Edens', 'Few', 'Keohane', 'Kilgo', 'Wannamaker']
            },
            central: {
                name: "central",
                options: ['TBA']
            }
        };
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.myLocation = null;
        this.options = this.campuses.east.options;
        this.distanceList = [];
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
    };
    LocationComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    LocationComponent.prototype.updateDropdown = function (campus) {
        this.options = this.campuses[campus].options;
        this.ngOnInit();
    };
    LocationComponent.prototype.submitLocation = function () {
        console.log("nowww im here");
        this.myLocation = this.myControl.value;
        localStorage.setItem('myLocation', this.myControl.value);
        // // update distance list
        // let distanceList = localStorage.getItem('distanceList') ? localStorage.getItem('distanceList') : null;
        // if (distanceList){
        //   let newDistanceList: any[] = [];
        //   for (let i = 0; i < distanceJSON.length; i++){
        //     if (distanceJSON[i].source === this.myLocation){
        //       newDistanceList.push(distanceJSON[i]);
        //     }
        //   }
        //   localStorage.setItem('distanceList', JSON.stringify(newDistanceList));
        //   this.landmarks.updateDistanceView();
        //   console.log(localStorage);
        // }
        return this.myLocation;
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-location',
            template: __webpack_require__(/*! ./location.html */ "./src/app/location/location.html"),
            styles: [__webpack_require__(/*! ./location.scss */ "./src/app/location/location.scss")]
        }),
        __metadata("design:paramtypes", [_translate_service__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _landmarks_landmarks_component__WEBPACK_IMPORTED_MODULE_4__["LandmarksComponent"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/translate.service.ts":
/*!**************************************!*\
  !*** ./src/app/translate.service.ts ***!
  \**************************************/
/*! exports provided: TranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TranslateService = /** @class */ (function () {
    function TranslateService(http) {
        this.http = http;
        this.subscriptionKey = '2143d6e1024f4580a1007aa5f8ee334c';
        this.host = 'https://api.cognitive.microsofttranslator.com';
        this.path = '/translate?api-version=3.0';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Ocp-Apim-Subscription-Key', this.subscriptionKey)
            .set('X-ClientTraceId', this._getGuid());
        this.translations = {
            'en': {},
            'ar': {},
            'zh-Hans': {},
            'fr': {},
            'es': {}
        };
        this.phrases = [
            { code: 'location', text: 'Location' },
            { code: 'landmarks', text: 'Landmarks' },
            { code: 'transportation', text: 'Transportation' },
            { code: 'east', text: 'East' },
            { code: 'west', text: 'West' },
            { code: 'central', text: 'Central' },
            { code: 'submit', text: 'Submit' },
            { code: 'food', text: 'Food' },
            { code: 'dining', text: 'Dining' },
            { code: 'residenceHalls', text: 'Residence Halls' },
            { code: 'selectLocation', text: 'Select your location' },
            { code: 'selectDorm', text: 'Select your dorm' },
            { code: 'defaultLocation', text: 'Your default location is set to' },
            { code: 'pickOne', text: 'Pick one' },
            { code: 'transInfo', text: 'Learn more about transportation options on campus:' },
            { code: 'dukeBus', text: 'Duke Bus System' },
            { code: 'transloc', text: 'Transloc: Bus Tracking App' },
            { code: 'parking', text: 'Parking on Campus' },
            { code: 'altTransport', text: 'Alternate Transportation' }
        ];
    }
    TranslateService.prototype._getGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    TranslateService.prototype.translate = function (content, source, dest) {
        var params = "&from=" + source + ("&to=" + dest);
        var url = "" + this.host + this.path + params;
        var body = [{ 'Text': " " + content + " " }];
        return this.http.post(url, body, { headers: this.headers })
            .subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    TranslateService.prototype.generateTranslations = function () {
        var _this = this;
        var params = '&from=en&to=zh-Hans&to=ar&to=en&to=es&to=fr'; // TODO: fill w/ all supported langs
        var url = "" + this.host + this.path + params;
        var body = this.phrases;
        return this.http.post(url, body, { headers: this.headers })
            .subscribe(function (res) {
            console.log("POST call successful value returned in body", res);
            res.forEach(function (element, index) {
                _this.translations["zh-Hans"][_this.phrases[index].code] = element.translations[0].text; // map translation to key on Chinese dictionary
                _this.translations.ar[_this.phrases[index].code] = element.translations[1].text;
                _this.translations.en[_this.phrases[index].code] = element.translations[2].text;
                _this.translations.es[_this.phrases[index].code] = element.translations[3].text;
                _this.translations.fr[_this.phrases[index].code] = element.translations[4].text;
            });
            console.log(_this.translations);
            localStorage.setItem('translations', _this.translations.toString());
        }, function (response) {
            console.log("POST call in error", response);
        }, function () {
            console.log("The POST observable is now completed.");
        });
    };
    TranslateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());



/***/ }),

/***/ "./src/app/transportation/transportation.html":
/*!****************************************************!*\
  !*** ./src/app/transportation/transportation.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container landmarks\">\n    <h2>Learn more about transportation options on campus:</h2>\n  </div>\n  \n  <div class=\"flex-container\">\n      <div class=\"landmark-container\">\n        <img class=\"flex-grid-elem\" src=\"../../www/imgs/dukebus.png\">\n        <p class=\"flex-grid-elem\">\n          <a href=\"https://parking.duke.edu/buses\" target=\"_blank\">Duke Bus System</a>\n        </p>\n         <!--Replace dynamic translatable-->\n      </div>\n      \n      <div class=\"landmark-container\">\n        <img class=\"flex-grid-elem\" src=\"../../www/imgs/transloc.png\">\n          <p class=\"flex-grid-elem\">\n            <a href=\"http://duke.transloc.com/\" target=\"_blank\">Transloc: Bus Tracking App</a>\n          </p>\n      </div>\n\n      <div class=\"landmark-container\">\n        <img class=\"flex-grid-elem\" src=\"../../www/imgs/parking.png\">\n        <p class=\"flex-grid-elem\">\n            <a href=\"https://parking.duke.edu/parking\" target=\"_blank\">Parking on Campus</a>\n          </p>\n      </div>\n\n      <div class=\"landmark-container\">\n        <img class=\"flex-grid-elem\" src=\"../../www/imgs/bikes.png\">\n        <p class=\"flex-grid-elem\">\n            <a href=\"https://parking.duke.edu/alternative/bicycling/bike-sharing\" target=\"_blank\">Alternate Transportation</a>\n          </p>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/transportation/transportation.ts":
/*!**************************************************!*\
  !*** ./src/app/transportation/transportation.ts ***!
  \**************************************************/
/*! exports provided: TransportationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportationComponent", function() { return TransportationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransportationComponent = /** @class */ (function () {
    function TransportationComponent() {
    }
    TransportationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-transportation',
            template: __webpack_require__(/*! ./transportation.html */ "./src/app/transportation/transportation.html")
        }),
        __metadata("design:paramtypes", [])
    ], TransportationComponent);
    return TransportationComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alobaidizt/dev/tmp/delete-me-transit/translate-transit/transit-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map