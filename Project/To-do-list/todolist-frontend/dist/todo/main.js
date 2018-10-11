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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "\n\n\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/user-management/user-management.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-management/login/login.component */ "./src/app/user-management/login/login.component.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./socket.service */ "./src/app/socket.service.ts");
/* harmony import */ var _socket2_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./socket2.service */ "./src/app/socket2.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'login', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '*', component: _user_management_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] }
                ]),
                _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_3__["UserManagementModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_4__["MenuModule"]
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_10__["AppService"], _http_service__WEBPACK_IMPORTED_MODULE_11__["HttpService"], _socket_service__WEBPACK_IMPORTED_MODULE_12__["SocketService"], _socket2_service__WEBPACK_IMPORTED_MODULE_13__["Socket2Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
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


var AppService = /** @class */ (function () {
    function AppService(http) {
        var _this = this;
        this.http = http;
        this.baseUrl = 'http://todolist-api.mohitnagpure.com/api/v1.0';
        //Delete Account
        this.removeAccount = function (userID) {
            return _this.http.delete(_this.baseUrl + "/deleteuser/" + userID);
        };
    }
    //SIGN-UP Function:
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email)
            .set('textPassword', data.textPassword)
            .set('firstName', data.firstName)
            .set('lastName', data.lastName)
            .set('mobileNumber', data.mobileNumber)
            .set('countryCode', data.countryCode);
        return this.http.post(this.baseUrl + "/signup", params);
    };
    //LOG-IN Function:
    AppService.prototype.loginFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', data.email)
            .set('textPassword', data.textPassword);
        return this.http.post(this.baseUrl + "/login", params);
    };
    //Forgot Password:
    AppService.prototype.forgotPassword = function (email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', email);
        return this.http.post(this.baseUrl + "/restore", params);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}()); //end AppService Class



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        var _this = this;
        this.http = http;
        this.baseURL = "http://todolist-api.mohitnagpure.com/api/v1.0";
        //Creating a new Todo List:
        this.createTodo = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set("name", data.name)
                .set("description", data.description)
                .set("createdBy", data.createdBy);
            return _this.http.post(_this.baseURL + "/create", params);
        };
        //Getting All Todo List:
        this.getAlltodo = function () {
            return _this.http.get(_this.baseURL + "/alltodo");
        };
        //Removing  todo List:
        this.removetodolist = function (id) {
            _this.deleteid = id;
            return _this.http.delete(_this.baseURL + "/delete/" + _this.deleteid);
        };
        //Get Tasks
        this.getTasks = function () {
            return _this.http.get(_this.baseURL + "/alltask");
        };
        //Create A New Task:
        this.createnewtask = function (data) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set("listid", data.listid)
                .set("taskName", data.taskName);
            return _this.http.post(_this.baseURL + "/createtask", params);
        };
        //Delete A single task:
        this.deletesingletask = function (id) {
            _this.deletetask = id;
            return _this.http.delete(_this.baseURL + "/deletetask/" + _this.deletetask);
        };
        //Delete Many Task:
        this.deleteMany = function (id) {
            return _this.http.delete(_this.baseURL + "/deletemany/" + id);
        };
        //Get All Users:
        this.getAllpeople = function () {
            return _this.http.get(_this.baseURL + "/all");
        };
    }
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/menu/friend/friend.component.css":
/*!**************************************************!*\
  !*** ./src/app/menu/friend/friend.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color: black;\n    color: white;\n    padding: 2%;\n    text-align: center;\n  }\n.aside{\n    margin-top:3%;\n    background-color:#f5f5f5;\n    height:100vh;\n    overflow:auto;\n}\n.user{\n    background-color:#7c8ca5;\n    color:black;\n    padding:5%;\n    display:block;\n    width:100%;\n    font-size:1.2em;\n    text-align:center;\n    font-family:sans-serif;\n}\n.name:hover{\n    text-decoration: underline;\n    color:dodgerblue;\n    cursor: pointer;\n}\n.addlist{\n    font-size:1.8em;\n    margin-left:45%;\n    margin-top:2%\n}\n.addlist:hover{\n    color:green;\n    cursor: pointer;\n}\n.tasks{\n    text-transform:capitalize;\n    font-family:sans-serif;\n    font-size:1.3em;\n}\n.trash1{\n    float:right;\n    margin-top:1%;\n}\n.trash1:hover{\n    cursor: pointer;\n    color:red;\n}\n.taskmenu{\n    margin-top:3%;\n\n}\n.textfield{\n    width:90%;\n    display:inline-block;\n    border-top:0;\n    border-left:0;\n    border-right:0;\n    border-bottom:5%;\n    border-color:dodgerblue;\n}\n.sqr{\n    font-size:1.8em;\n    margin-left:1%;\n}\n.sqr:hover{\ncolor:green;\ncursor:pointer;\n}\n.listname{\n    font-size:1.5em;\n    text-transform:uppercase;\n    color:dodgerblue;\n    background:#f5f5f5;\n    text-align:center;\n    margin-top:2%;\n    font-family:Arial, Helvetica, sans-serif;\n}\n.trash2{\n    float: right;\n    font-size:1.1em;\n    color:whitesmoke;\n}\n.trash2:hover{\n    color:red;\n    cursor: pointer;\n}\n.tasklist{\n    margin-top:2%;\n    height:82vh;\n    overflow:auto;\n}\n.taskName{\n    background-color:dodgerblue;\n    color:whitesmoke;\n    padding:2%;\n    font-size:1.2em;\n    font-family:sans-serif;\n    text-transform: capitalize;\n    margin:0.5% 4%;\n}"

/***/ }),

/***/ "./src/app/menu/friend/friend.component.html":
/*!***************************************************!*\
  !*** ./src/app/menu/friend/friend.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"col-12 header\">\n    <h1>TO-DO-LIST</h1>\n</div>\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/todomenu']\">Friend list</a>\n      </li>\n      <li class=\"nav-item active\">\n              <a class=\"nav-link\">Friend</a>\n          </li>\n     \n\n    </ul>\n  </div>\n</nav>\n\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n           <h4 class=\"modal-title\">Add A New List</h4>\n         <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n           &times;\n         </button>\n        </div>\n\n        <div class=\"modal-body\">\n          <form class=\"form-group\">\n          <label for=\"input\">Name:</label>\n          <input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\">\n          <br>\n      \n          <label for=\"input\">Description:</label>\n          <input [(ngModel)]=\"description\" name=\"description\" type=\"text\" class=\"form-control\">\n       </form>\n        </div>\n\n\n        <div class=\"modal-footer\">\n          <button (click)=addnewList() class=\"btn btn-success text-white\" data-dismiss=\"modal\">Add</button>\n          <button  class=\"btn btn-danger text-white\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <!--SideBar-->\n    <div class=\"col-md-3 aside\">\n     <span class=\"user\">\n       {{friendName}}\n     </span>\n     <div>\n        <i  class=\"fa fa-plus-square addlist\" data-toggle=\"modal\" data-target=\"#myModal\"></i>\n    </div>\n    <hr class=\"lead\">\n\n    <div *ngFor=\"let list of allLists\">\n        <div *ngIf=\"list.group==false&&list.createdBy==friendId\">\n        <p class=\"tasks\">\n            <span class=\"name\" (click)=selectList(list.name,list.id)>\n                <i class=\"fa fa-list-alt\"></i>{{list.name}}\n            </span>\n            <i (click)=deleteList(list.id) class=\"fa fa-trash-o trash1\"></i>\n        </p>\n\n        <small style=\"font-weight:bold ;font-style:sans-serif;\" class=\"text-muted text-sm\">- {{list.description}}</small>\n\n        <hr class=\"lead\">\n        </div>\n    </div>\n    </div>\n   \n\n    <!--Task Menu -->\n    <div class=\"col-md-9 taskmenu\">\n      <div class=\"input\">\n        <input [(ngModel)]=\"taskName\" name =\"taskName\" type=\"text\" class=\"textfield\" placeholder=\"Enter Task\">\n        <i (click)=createTask() class=\"fa fa-plus-square sqr\"></i>\n      </div>\n      <p class=\"listname\">{{listName}}</p> \n      <div class=\"tasklist\">\n      <div *ngFor=\"let task of tasks\">\n          <p class=\"taskName\" *ngIf=\"task.listid==listId\">\n              <input type=\"checkbox\"> {{task.taskName}}\n              <i (click)=deletetask(task.taskid) class=\"fa fa-trash-o trash2\"></i>\n          </p>\n          </div>\n      </div>\n    </div>\n\n\n\n\n      \n  \n  </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/menu/friend/friend.component.ts":
/*!*************************************************!*\
  !*** ./src/app/menu/friend/friend.component.ts ***!
  \*************************************************/
/*! exports provided: FriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendComponent", function() { return FriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendComponent = /** @class */ (function () {
    function FriendComponent(httpService, toastr) {
        var _this = this;
        this.httpService = httpService;
        this.toastr = toastr;
        //Getting All Task List:
        this.getAllTasklist = function () {
            _this.httpService.getAlltodo().subscribe(function (response) {
                _this.allLists = response.data;
                console.log("response", _this.allLists);
            }, function (err) {
                _this.toastr.error("Error Occured While Retrieving Lists");
            });
        };
        //Selecting List:
        this.selectList = function (name, id) {
            _this.listName = name;
            _this.listId = id;
        };
        //Adding New List:
        this.addnewList = function () {
            var data = {
                name: _this.name,
                description: _this.description,
                createdBy: _this.friendId
            };
            _this.httpService.createTodo(data).subscribe(function (data) {
                _this.toastr.success(data.message);
                _this.getAllTasklist();
            }, function (err) {
                _this.toastr.error("List Not Created");
            });
        };
        //Deleting list:
        this.deleteList = function (id) {
            _this.httpService.removetodolist(id).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
                _this.getAllTasklist();
                _this.listName = "";
            }, function (err) {
                _this.toastr.error("List Not Deleted");
            });
            _this.httpService.deleteMany(id).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
                _this.getAlltask();
            }, function (err) {
                _this.toastr.error("Tasks Not Deleted");
            });
        };
        this.getAlltask = function () {
            _this.httpService.getTasks().subscribe(function (data) {
                _this.tasks = data.data;
                console.log(_this.tasks);
            });
        };
        this.createTask = function () {
            if (_this.listId == "" || _this.listId == undefined || _this.listId == null) {
                _this.toastr.warning("List Not Selected");
            }
            else if (_this.taskName == "" || _this.taskName == undefined || _this.taskName == null) {
                _this.toastr.warning("Task Is empty");
            }
            else {
                var data = {
                    listid: _this.listId,
                    taskName: _this.taskName
                };
                _this.httpService.createnewtask(data).subscribe(function (apiResponse) {
                    _this.toastr.success(apiResponse.message);
                    _this.taskName = "";
                    _this.getAlltask();
                }, function (err) {
                    _this.toastr.error("Unable To Create Task");
                });
            }
        };
        this.deletetask = function (id) {
            _this.httpService.deletesingletask(id).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
                _this.getAlltask();
            }, function (err) {
                _this.toastr.error("Not Deleted");
            });
        };
    }
    FriendComponent.prototype.ngOnInit = function () {
        this.friendId = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("friendId");
        this.friendName = ng2_cookies__WEBPACK_IMPORTED_MODULE_1__["Cookie"].get("friendName");
        this.getAllTasklist();
        this.getAlltask();
    };
    FriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend',
            template: __webpack_require__(/*! ./friend.component.html */ "./src/app/menu/friend/friend.component.html"),
            styles: [__webpack_require__(/*! ./friend.component.css */ "./src/app/menu/friend/friend.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], FriendComponent);
    return FriendComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.module.ts":
/*!*************************************!*\
  !*** ./src/app/menu/menu.module.ts ***!
  \*************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _todohome_todohome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todohome/todohome.component */ "./src/app/menu/todohome/todohome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-user/multi-user.component */ "./src/app/menu/multi-user/multi-user.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/menu/friend/friend.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    { path: 'todomenu', component: _todohome_todohome_component__WEBPACK_IMPORTED_MODULE_2__["TodohomeComponent"] },
                    { path: 'multi-user', component: _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_5__["MultiUserComponent"] },
                    { path: 'friend', component: _friend_friend_component__WEBPACK_IMPORTED_MODULE_6__["FriendComponent"] }
                ]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            declarations: [_todohome_todohome_component__WEBPACK_IMPORTED_MODULE_2__["TodohomeComponent"], _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_5__["MultiUserComponent"], _friend_friend_component__WEBPACK_IMPORTED_MODULE_6__["FriendComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/menu/multi-user/multi-user.component.css":
/*!**********************************************************!*\
  !*** ./src/app/menu/multi-user/multi-user.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color: black;\n    color: white;\n    padding: 2%;\n    text-align: center;\n  }\n.aside{\nbackground: #f5f5f5;\nheight:100vh;\noverflow:auto;\nmargin-top:2%;\n}\n.user{\n    background-color:#7c8ca5;\n    color:black;\n    padding:5%;\n    display:block;\n    width:100%;\n    font-size:1.3em;\n    text-align:center;\n    font-family: sans-serif;\n}\n.addicon{\n    font-size:2em;\n    margin-left:45%;\n    margin-top:1%;\n    margin-bottom:1%\n}\n.addicon:hover{\ncolor:green;\ncursor: pointer;\n}\n.online{\n    text-align:center;\n    margin-top:2%;\n    margin-bottom:2%;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:1.1em;\n    background-color:rgb(50, 179, 50);\n    color:black;\n    padding:1%\n}\n.on-users{\n    font-size:1.1em;\n}\n.onicon{\n    color:green;\n}\n.description{\n    font-size:0.9em;\n    font-family:sans-serif;\n}\n.name{\n    font-size:1.2em;\n    font-family: sans-serif;\n    text-transform:capitalize;\n}\n.name:hover{\ntext-decoration: underline;\ncolor:yellowgreen;\ncursor: pointer;\n\n}\n.trash-2{\n    float:right;\n}\n.trash-2:hover{\n    color:red;\n}\n.maintask{\n    margin-top:2%;\n}\n.textfield{\n    border-top:0;\n    border-left:0;\n    border-right:0;\n    border-radius:3px;\n    border-color:tomato;\n}\n.square2{\n    font-size:1.8em;\n    margin-left:1%;\n}\n.square2:hover{\n    color:green;\n    cursor:pointer;\n}\n.listname{\n    font-size:1.5em;\n    text-transform:uppercase;\n    color:yellowgreen;\n    background:#f5f5f5;\n    text-align:center;\n    margin-top:2%;\n    font-family:Arial, Helvetica, sans-serif;\n}\n.tasks{\n    background-color:yellowgreen;\n    color:whitesmoke;\n    padding:2%;\n    font-size:1.2em;\n    font-family:sans-serif;\n    text-transform: capitalize;\n    margin:0.5% 4%;\n}\n.trash2{\n    float: right;\n    font-size:1.1em;\n    color:whitesmoke;\n}\n.trash2:hover{\n    color:red;\n    cursor: pointer;\n}\n.tasklist{\n    margin-top:2%;\n    height:82vh;\n    overflow:auto;\n}"

/***/ }),

/***/ "./src/app/menu/multi-user/multi-user.component.html":
/*!***********************************************************!*\
  !*** ./src/app/menu/multi-user/multi-user.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"col-12 header\">\n        <h1>TO-DO-LIST</h1>\n    </div>\n\n    <!--Nav Bar-->\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/todomenu']\">Single-User</a>\n                </li>\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link\">Multi-User</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    <!--End Nav Bar-->\n\n    <!--Adding a new task list-->\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Add a New List</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                        &times;\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form class=\"form-group\">\n                        <label for=\"input\">\n                            Name:\n                        </label>\n                        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\" type=\"text\" />\n                        <label for=\"textarea\" style=\"resize: none; margin-top:2%;\">\n                            Description:\n                        </label>\n                        <textarea [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" maxlength=\"150\" placeholder=\"Enter Description\">\n                        </textarea>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"newlist()\">Save</button>\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!--End new task list-->\n\n    <div class=\"row\">\n\n        <!--aside-->\n\n        <div class=\"col-md-3 aside\">\n            <span class=\"user\">\n\n                Multi-User\n            </span>\n            <div>\n                <i class=\"fa fa-plus-square addicon\" data-toggle=\"modal\" data-target=\"#myModal\"></i>\n            </div>\n            <h6 class=\"online\">Online Users:</h6>\n            <div class=\"on-users\" *ngFor=\"let user of users\">\n                <p *ngIf=\"user.userId!=userId\">\n                    <i class=\"fa fa-user onicon\"></i> {{user.fullName}}\n                </p>\n            </div>\n            <hr>\n            <div *ngFor=\"let task of taskList\">\n                <div *ngIf=\"task.group==true\">\n                    <p (click)=selectList(task.id,task.name) class=\"name\">\n                        <span>\n                            <i class=\"fa fa-list-alt\"></i>{{task.name}}\n                        </span>\n                        <i (click)=deletelist(task.id,task.name) class=\"fa fa-trash-o trash-2\"></i>\n                    </p>\n                    <span class=\"description\">- {{task.description}}</span>\n\n                    <br>\n                    <small style=\"font-weight:bold\" class=\"text-muted\">\n                        <i class=\"fa fa-user\"></i> Created By: {{task.createdBy}}</small>\n                    <hr>\n                </div>\n\n            </div>\n        </div>\n\n        <!-- Main task menu -->\n\n        <div class=\"col-md-9 maintask\">\n            <div class=\"input\">\n                <input [(ngModel)]=\"taskName\" name=\"taskName\" style=\"width:90%; display:inline-block\" class=\"textfield\" type=\"text\" placeholder=\"Enter New Task\">\n                <i (click)=addTask() class=\"fa fa-plus-square square2\"></i>\n            </div>\n            <p class=\"listname\">{{listName}}</p>\n            <div class=\"tasklist\">\n                <div *ngFor=\"let task of alltasks\">\n                    <p class=\"tasks\" *ngIf=\"task.listid==listId\">\n                        <input type=\"checkbox\"> {{task.taskName}}\n                        <i (click)=deleteTask(task.taskid) class=\"fa fa-trash-o trash2\"></i>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <!--end task menu-->\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/menu/multi-user/multi-user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu/multi-user/multi-user.component.ts ***!
  \*********************************************************/
/*! exports provided: MultiUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiUserComponent", function() { return MultiUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _socket2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../socket2.service */ "./src/app/socket2.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MultiUserComponent = /** @class */ (function () {
    function MultiUserComponent(socketService, httpService, toastr) {
        var _this = this;
        this.socketService = socketService;
        this.httpService = httpService;
        this.toastr = toastr;
        this.value = true;
        //User Confirmation:
        this.verifyUserConfirmation = function () {
            _this.socketService.verifyUser().subscribe(function (response) {
                _this.socketService.setUser(_this.token);
                console.log("User Is Verified");
            });
        };
        this.onlineUsers = function () {
            _this.socketService.getOnlineUsers().subscribe(function (response) {
                _this.users = response;
                console.log(_this.users);
            });
        };
        //Adding List : 
        this.newlist = function () {
            if (_this.name == undefined || _this.name == "")
                return _this.toastr.warning("Enter Name");
            else {
                var listData = {
                    name: _this.name,
                    description: _this.description,
                    createdBy: _this.userName,
                    group: _this.value
                };
                _this.socketService.createNewList(listData);
            }
        };
        this.newListResponse = function () {
            _this.socketService.createlistresponse().subscribe(function (response) {
                _this.toastr.success(response);
                _this.getAllLists();
            });
        };
        this.getAllLists = function () {
            _this.httpService.getAlltodo().subscribe(function (response) {
                _this.taskList = response.data;
                console.log(_this.taskList);
            });
        };
        //Adding Task:
        this.selectList = function (id, name) {
            _this.listId = id;
            _this.listName = name;
            console.log(_this.listId, _this.listName);
        };
        this.addTask = function () {
            if (_this.listId == "" || _this.listId == undefined || _this.listId == null) {
                return _this.toastr.warning("Select List");
            }
            else { }
            if (_this.taskName == "" || _this.taskName == undefined || _this.taskName == null) {
                return _this.toastr.warning("Enter Task");
            }
            else {
                var data = {
                    listId: _this.listId,
                    taskName: _this.taskName
                };
                _this.socketService.createtask(data);
            }
        };
        this.addTaskresponse = function () {
            _this.socketService.taskResponse().subscribe(function (socketResponse) {
                _this.toastr.info(socketResponse);
                _this.taskName = "";
                _this.getAlltask();
            });
        };
        this.getAlltask = function () {
            _this.httpService.getTasks().subscribe(function (apiResponse) {
                _this.alltasks = apiResponse.data;
                console.log(_this.alltasks);
            });
        };
        this.deleteTask = function (id) {
            var data = {
                id: id,
                name: _this.userName
            };
            _this.socketService.deleteUniqueTask(data);
        };
        this.deleteres = function () {
            _this.socketService.deleteResponse().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
                _this.getAlltask();
            });
        };
        this.deletelist = function (id, name) {
            var data = {
                id: id,
                name: name
            };
            _this.socketService.deletethelist(data);
            _this.httpService.deleteMany(id).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
            }, function (err) {
                console.log(err);
            });
        };
        this.deletelistres = function () {
            _this.socketService.deletelistRes().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
                _this.listName = "";
                _this.listId = "";
                _this.getAllLists();
                _this.getAlltask();
            });
        };
    }
    MultiUserComponent.prototype.ngOnInit = function () {
        this.token = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get('token');
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("id");
        this.userName = ng2_cookies__WEBPACK_IMPORTED_MODULE_2__["Cookie"].get("fullName");
        this.verifyUserConfirmation();
        this.onlineUsers();
        this.getAlltask();
        this.getAllLists();
        this.newListResponse();
        this.addTaskresponse();
        this.deleteres();
        this.deletelistres();
    };
    MultiUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multi-user',
            template: __webpack_require__(/*! ./multi-user.component.html */ "./src/app/menu/multi-user/multi-user.component.html"),
            styles: [__webpack_require__(/*! ./multi-user.component.css */ "./src/app/menu/multi-user/multi-user.component.css")]
        }),
        __metadata("design:paramtypes", [_socket2_service__WEBPACK_IMPORTED_MODULE_1__["Socket2Service"], _http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], MultiUserComponent);
    return MultiUserComponent;
}());



/***/ }),

/***/ "./src/app/menu/todohome/todohome.component.css":
/*!******************************************************!*\
  !*** ./src/app/menu/todohome/todohome.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color: black;\n    color: white;\n    padding: 2%;\n    text-align: center;\n  }\n  .navbar{\n    cursor: pointer;\n  }\n  .aside{\n    background:  #f5f5f5;\n    height:100vh;\n    overflow:auto;\n    margin-top:2%;\n}\n  h5{\n    font-weight: bold;\n    color:black;\n    background:#f5f5f5;\n    padding:1%;\n}\n  .list{\n    list-style-type: square;\n    display:inline-block;\n    \n}\n  .user{\n    background-color:#7c8ca5;\n    color:black;\n    padding:5%;\n    display:block;\n    width:100%;\n    font-size:1.2em;\n    text-align:center;\n    font-family:sans-serif;\n}\n  .all{\n    font-size:1.3em;\n    margin:3vh 0;\n}\n  .tasks{\n    text-transform:capitalize;\n    font-family:sans-serif;\n    font-size:1.3em;\n}\n  .tasks:hover{\n    cursor:pointer;\n    text-decoration:underline;\n}\n  .fasquare{\n    text-align: center;\n    font-size:2.2em;\n    margin-left:43%;\n    margin-top:3%;\n}\n  .fasquare:hover{\n    color:red;\n    cursor:pointer;\n}\n  .fa-user{\n    margin-right:1%;\n    font-size:1.4em;\n}\n  .trash1{\n    color: red;;\n    float:right;\n    margin-top:1%;\n    font-size:1.2em;\n}\n  .fa-trash-o:hover{\n    cursor:pointer;\n    color:red;\n}\n  .input{\n    margin-top:3%;\n}\n  .textfield{\n    border-top:none;\n    border-left:none;\n    border-right:none;\n    border-bottom:3px solid #9966ff;\n}\n  .square2{\n    font-size:2em;\n    margin-left:1%;\n}\n  .square2:hover{\ncolor:red;\ncursor:pointer;\n}\n  .tasklist{\n    margin-top:2%;\n    overflow:auto;\n    height:82vh;\n}\n  .listname{\n    font-size:1.5em;\n    text-transform:uppercase;\n    color:black;\n    background:#7c8ca5;\n    text-align:center;\n    margin-top:2%;\n    font-family:Arial, Helvetica, sans-serif;\n}\n  .taskName{\n    background-color:#7c8ca5;\n    color:black;\n    padding:2%;\n    font-size:1.2em;\n    font-family:sans-serif;\n    text-transform: capitalize;\n    margin:0.5% 4%;\n}\n  .trash2{\n    float: right;\n    font-size:1.1em;\n    color:whitesmoke;\n}\n  .trash2:hover{\n    color:red;\n}"

/***/ }),

/***/ "./src/app/menu/todohome/todohome.component.html":
/*!*******************************************************!*\
  !*** ./src/app/menu/todohome/todohome.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n    <div class=\"col-12 header\">\n        <h1>TO-DO-LIST</h1>\n    </div>\n    <!--Navigation Bar-->\n\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n            aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item active\">\n                    <a class=\"nav-link \">SIngle User</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/multi-user']\">Multi User</a>\n                </li>\n                <li class=\"nav-item \">\n                    <a class=\"nav-link\" data-toggle=\"modal\" data-target=\"#friend-list\">Friend List</a>\n\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" (click)=logout()>Logout</a>\n                </li>\n\n            </ul>\n        </div>\n    </nav>\n    <!--Social Modal-->\n\n    <div id=\"friend-list\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Friend-List</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                        &times;\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"container-fluid\">\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <h5>All Users:</h5>\n                                <div *ngFor=\"let user of users\">\n                                    <p *ngIf=\"userId!=user.userId\">\n                                        <li class=\"list\">{{user.firstName}} {{user.lastName}}</li>\n                                        <button style=\"margin-left:1%; color: white;\" class=\"btn btn-secondary\" (click)=sendreq(user.userId)>Request</button>\n                                    </p>\n                                </div>\n                                <h5>Requests:</h5>\n                                <div *ngFor=\"let user of users\">\n                                    <div *ngFor=\"let req of user.requests\">\n                                        <p *ngIf=\"userId==req.receiverId\">\n                                            <li class=\"list\">{{req.senderName}}</li>\n                                            <button style=\"margin:0 1%;\" class=\"btn btn-success\" (click)=acceptreq(req.senderId,req.senderName)>Accept</button>\n                                            <button class=\"btn btn-danger\" (click)=rejectreq(req.senderId)>Reject</button>\n                                        </p>\n                                    </div>\n                                </div>\n                                <h5>Friends:</h5>\n                                <div *ngFor=\"let user of users\">\n                                    <div *ngIf=\"userId==user.userId\">\n                                        <p *ngFor=\"let frnd of user.friends\">\n                                            <li class=\"list\" style=\"font-size:1.1em\"> {{frnd.friendName}}\n                                                <button (click)=friendView(frnd.friendName,frnd.friendId) data-dismiss=\"modal\" [routerLink]=\"['/friend']\" class=\"btn btn-success btn-sm\">View</button>\n                                            </li>\n                                            <i (click)=deletefriend(frnd.friendId) style=\"margin-left:2%\" class=\"fa fa-trash-o\"></i>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!--Modal to add Task List-->\n\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Add a New List</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                        &times;\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form class=\"form-group\">\n                        <label for=\"input\">\n                            Name:\n                        </label>\n                        <input [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"Enter Name\" type=\"text\" />\n                        <label for=\"textarea\" style=\"resize: none; margin-top:2%;\">\n                            Description:\n                        </label>\n                        <textarea [(ngModel)]=\"description\" name=\"description\" class=\"form-control\" maxlength=\"150\" placeholder=\"Enter Description\">\n\n                                </textarea>\n                    </form>\n                </div>\n                <div class=\"modal-footer\">\n                    <button class=\"btn btn-md text-white bg-success\" data-dismiss=\"modal\" (click)=\"newtodo()\">Save</button>\n                    <button class=\"btn btn-md text-white bg-danger\" data-dismiss=\"modal\">Close</button>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n    <!--  SideBar   -->\n\n    <div class=\"row\">\n        <div class=\"col-md-3 aside\">\n            <span class=\"user\">\n                Welcome! {{username}}</span>\n            <div>\n                <i class=\"fa fa-plus-square fasquare\" data-toggle=\"modal\" data-target=\"#myModal\"></i>\n            </div>\n            <hr class=\"lead\">\n            <div *ngFor=\"let res of response\">\n                <div *ngIf=\"res.group==false\">\n                    <p class=\"tasks\">\n                        <span (click)=selectlist(res.id,res.name)>\n                            <i class=\"fa fa-list-alt\"></i>{{res.name}}\n                        </span>\n                        <i class=\"fa fa-trash-o trash1\" (click)=deletetodoList(res.id)></i>\n                    </p>\n\n                    <small style=\"font-weight:bold ;font-style:sans-serif;\" class=\"text-muted text-sm\">- {{res.description}}</small>\n\n                    <hr class=\"lead\">\n                </div>\n            </div>\n        </div>\n\n        <!--Task Menu -->\n        <div class=\"col-md-9\">\n            <div class=\"input\">\n                <input [(ngModel)]=\"task\" name=\"task\" style=\"width:90%; display:inline-block\" class=\"textfield\" type=\"text\" placeholder=\"Enter New Task\">\n                <i (click)=createtask() class=\"fa fa-plus-square square2\"></i>\n            </div>\n            <div>\n                <p class=\"listname\">{{listname}}</p>\n                <div class=\"tasklist\">\n                    <div *ngFor=\"let task of taskdata\">\n                        <p class=\"taskName\" *ngIf=\"task.listid==listId\">\n                            <input type=\"checkbox\"> {{task.taskName}}\n                            <i (click)=deletetask(task.taskid) class=\"fa fa-trash-o trash2\"></i>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/menu/todohome/todohome.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/menu/todohome/todohome.component.ts ***!
  \*****************************************************/
/*! exports provided: TodohomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodohomeComponent", function() { return TodohomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../http.service */ "./src/app/http.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../socket.service */ "./src/app/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodohomeComponent = /** @class */ (function () {
    function TodohomeComponent(httpService, socketService, toastr, router) {
        var _this = this;
        this.httpService = httpService;
        this.socketService = socketService;
        this.toastr = toastr;
        this.router = router;
        this.response = [];
        //Navigate To Login:
        this.gotologin = function () {
            _this.router.navigate(['/login']);
        };
        //Adding A New Todo list:
        this.newtodo = function () {
            if (!_this.name) {
                _this.toastr.warning("Name is required");
            }
            else {
                var values = {
                    name: _this.name,
                    description: _this.description,
                    createdBy: _this.createdBy
                };
                _this.httpService.createTodo(values).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.info("Task-List Created");
                        _this.name = "";
                        _this.description = "";
                        _this.response = [];
                        _this.getAlltodoList();
                    }
                }, function (error) {
                    console.log("Error Occured");
                });
            }
        };
        //Deleting a todolist:
        this.deletetodoList = function (id) {
            _this.httpService.removetodolist(id).subscribe(function (apiResponse) {
                console.log(apiResponse);
                ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('listid');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('listname');
                _this.listname = "";
                _this.toastr.success(apiResponse.message);
                _this.response = [];
                _this.getAlltodoList();
            }, function (err) {
                _this.toastr.error("Unable to Delete Blog");
            });
            _this.httpService.deleteMany(id).subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse.message);
                ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('listid');
                ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('listname');
                _this.getAlltasks();
            }, function (err) {
                _this.toastr.error("Error Occured");
            });
        };
        //Getting Alltodolist:
        this.getAlltodoList = function () {
            console.log(_this.response);
            _this.httpService.getAlltodo().subscribe(function (apiResponse) {
                for (var index in apiResponse.data) {
                    if (apiResponse.data[index].createdBy == _this.userId)
                        _this.response.push(apiResponse.data[index]);
                    else
                        console.log("Does Not Match");
                }
                console.log(_this.response);
            }, function (err) {
                console.log("Error Occured");
            });
        };
        //Selecting A List:
        this.selectlist = function (listid, listname) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set("listid", listid);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set("listname", listname);
            _this.listname = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("listname");
            _this.listId = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("listid");
            _this.toastr.success(_this.listname + " Selected");
        };
        //Getting All Tasks:
        this.getAlltasks = function () {
            _this.httpService.getTasks().subscribe(function (apiResponse) {
                _this.taskdata = apiResponse.data;
                console.log(_this.taskdata);
            }, function (err) {
                console.log(err);
            });
        };
        //Creating A New Task:
        this.createtask = function () {
            if (_this.listId == undefined) {
                return _this.toastr.warning("Select Task List");
            }
            else {
            }
            if (_this.task == undefined || _this.task == "" || _this.task == null) {
                return _this.toastr.warning("Task Cannot be empty");
            }
            else {
                var data = {
                    listid: _this.listId,
                    taskName: _this.task
                };
                _this.httpService.createnewtask(data).subscribe(function (apiResponse) {
                    _this.task = "";
                    _this.getAlltasks();
                    _this.toastr.success("Task Created");
                }, function (err) {
                    _this.toastr.error("Error Occured");
                });
            }
        };
        //Deleting A Task:
        this.deletetask = function (id) {
            _this.httpService.deletesingletask(id).subscribe(function (apiResponse) {
                if (apiResponse.status == 200) {
                    _this.toastr.success(apiResponse.message);
                    _this.getAlltasks();
                }
            }, function (err) {
                console.log(err);
                _this.toastr.error("Unable to delete");
            });
        };
        //Getting All Users From Database:
        this.getAllUsers = function () {
            _this.httpService.getAllpeople().subscribe(function (apiResponse) {
                _this.users = apiResponse.data;
                console.log(_this.users);
            });
        };
        //Logout:
        this.logout = function () {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete("listid");
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete("listname");
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('fullName');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('id');
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete("token");
            _this.gotologin();
        };
        //Sending The Request:
        this.sendreq = function (id) {
            var data = {
                receiverId: id,
                senderId: _this.userId,
                senderName: _this.username
            };
            _this.socketService.sendrequest(data);
        };
        //Rejecting The Request:
        this.rejectreq = function (id) {
            var data = {
                receiverId: _this.userId,
                senderId: id,
            };
            _this.socketService.rejectrequest(data);
        };
        //Accepting The Request:
        this.acceptreq = function (id, name) {
            var data = {
                senderId: id,
                receiverId: _this.userId,
                receiverName: _this.username,
                senderName: name
            };
            _this.socketService.acceptrequest(data);
        };
        //Deleting A Friend:
        this.deletefriend = function (id) {
            var data = {
                friendId: id,
                myId: _this.userId
            };
            _this.socketService.unfriend(data);
        };
        //Viewing Friend:
        this.friendView = function (name, id) {
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set("friendId", id);
            ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].set("friendName", name);
        };
        //Response of Friend Requests:
        this.firstResponse = function () {
            _this.socketService.responseFirst().subscribe(function (apiResponse) {
                _this.toastr.error(apiResponse);
            });
        };
        this.secondResponse = function () {
            _this.socketService.responseSecond().subscribe(function (apiResponse) {
                _this.toastr.error(apiResponse);
            });
        };
        this.rejectRes = function () {
            _this.socketService.rejectresponse().subscribe(function (apiResponse) {
                _this.toastr.warning("Request Rejected");
                _this.getAllUsers();
            });
        };
        this.acceptRes = function () {
            _this.socketService.acceptresponse().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
                _this.getAllUsers();
            });
        };
        this.saveRequest = function () {
            _this.socketService.savereq().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
            });
        };
        this.deleteresponse = function () {
            _this.socketService.unfrndResponse().subscribe(function (apiResponse) {
                _this.toastr.success(apiResponse);
                _this.getAllUsers();
            });
        };
    }
    TodohomeComponent.prototype.ngOnInit = function () {
        this.getAlltodoList();
        this.username = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("fullName");
        this.userId = ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("id");
        this.createdBy = this.userId;
        this.getAlltasks();
        this.getAllUsers();
        this.firstResponse();
        this.secondResponse();
        this.rejectRes();
        this.acceptRes();
        this.saveRequest();
        this.deleteresponse();
    };
    TodohomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todohome',
            template: __webpack_require__(/*! ./todohome.component.html */ "./src/app/menu/todohome/todohome.component.html"),
            styles: [__webpack_require__(/*! ./todohome.component.css */ "./src/app/menu/todohome/todohome.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TodohomeComponent);
    return TodohomeComponent;
}());



/***/ }),

/***/ "./src/app/socket.service.ts":
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.baseUrl = "http://todolist-api.mohitnagpure.com/";
        //Handshake
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.baseUrl);
        //Sending Request:
        this.sendrequest = function (data) {
            _this.socket.emit("request", data);
        };
        this.responseFirst = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("responseA", function (data) {
                    observer.next(data);
                });
            });
        };
        this.responseSecond = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("responseB", function (data) {
                    observer.next(data);
                });
            });
        };
        this.savereq = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("savereq", function (data) {
                    observer.next(data);
                });
            });
        };
        this.rejectresponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("rejecting", function (data) {
                    observer.next(data);
                });
            });
        };
        this.acceptresponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("accepting", function (data) {
                    observer.next(data);
                });
            });
        };
        //Rejecting Request:
        this.rejectrequest = function (data) {
            _this.socket.emit("reject", data);
        };
        //Accepting Request:
        this.acceptrequest = function (data) {
            _this.socket.emit("accept", data);
        };
        //Removing Friend:
        this.unfriend = function (data) {
            _this.socket.emit("unfriend", data);
        };
        this.unfrndResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                _this.socket.on("removed", function (data) {
                    observer.next(data);
                });
            });
        };
    }
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/socket2.service.ts":
/*!************************************!*\
  !*** ./src/app/socket2.service.ts ***!
  \************************************/
/*! exports provided: Socket2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Socket2Service", function() { return Socket2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Socket2Service = /** @class */ (function () {
    function Socket2Service() {
        var _this = this;
        this.baseurl = "http://todolist-api.mohitnagpure.com/";
        //Authentication Section:
        this.verifyUser = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("verify-user", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        this.setUser = function (token) {
            _this.socket.emit("set-user", token);
        };
        this.getOnlineUsers = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("onlineUsers", function (socketData) {
                    observer.next(socketData);
                });
            });
        };
        //Creating A New List:
        this.createNewList = function (listData) {
            _this.socket.emit("createList", listData);
        };
        this.createlistresponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createList-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Creating A New Task:
        this.createtask = function (data) {
            _this.socket.emit("createtask", data);
        };
        this.taskResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on("createtask-res", function (data) {
                    observer.next(data);
                });
            });
        };
        //Deleting A Task:
        this.deleteUniqueTask = function (data) {
            _this.socket.emit('deleteTask', data);
        };
        this.deleteResponse = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('deleteResponse', function (data) {
                    observer.next(data);
                });
            });
        };
        // Deleting A List
        this.deletethelist = function (data) {
            _this.socket.emit("deletelist", data);
        };
        this.deletelistRes = function () {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
                _this.socket.on('deletelistres', function (data) {
                    observer.next(data);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.baseurl);
    }
    Socket2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], Socket2Service);
    return Socket2Service;
}());



/***/ }),

/***/ "./src/app/user-management/forgot-password/forgot-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/user-management/forgot-password/forgot-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color:black;\n    font-size:1.5em;\n    font-family:Arial, Helvetica, sans-serif;\n    text-align: center;\n    color:white;\n    padding:25px;\n    font-weight: bold;\n    margin-bottom: 5px;\n    }\n    #button{\n        margin:0 1%;\n    }\n    .back{\n        font-size:1.2em;\n        font-weight:bold;\n    }\n    .field{\n        margin-top:5vh;\n    }"

/***/ }),

/***/ "./src/app/user-management/forgot-password/forgot-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/user-management/forgot-password/forgot-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 header\">\n      To Do List\n    </div>\n    <div class=\"col-12\">\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n          aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/login']\"> Login</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/signup']\">Sign-Up</a>\n            </li>\n          <li>\n            <a class=\"nav-link active\">Forgot Password</a>\n          </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n\n\n    <div class=\"col-12 field\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"email\">\n            Enter Your Email Address :\n          </label>\n          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\n        </div>\n        <button class=\"btn bg-secondary text-white\" (click)=forgotPassword()>Recover</button>\n      </form>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user-management/forgot-password/forgot-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/user-management/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(toastr, appService) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.forgotPassword = function () {
            if (!_this.email) {
                _this.toastr.warning("Email Is Mandatory");
            }
            else {
                _this.appService.forgotPassword(_this.email).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        _this.toastr.success(apiResponse.message);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error(" Connection Error Took Place");
                });
            }
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () { };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/user-management/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user-management/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/user-management/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-management/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n\tbackground-color:black;\n\tfont-size:1.5em;\n\tfont-family: \"Raleway\",Helvetica,sans-serif;\n\tfont-weight: bold;\n\ttext-align: center;\n\tcolor:white;\n\tpadding:25px;\n\t\n\t}\nbody {\n    padding-top: 90px;\n}\n.panel-login {\n    border-color: #ccc;\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\n}\n.panel-login>.panel-heading {\n\tcolor: #00415d;\n\tbackground-color: #fff;\n\tborder-color: #fff;\n\ttext-align:center;\n}\n.panel-login>.panel-heading a{\n\ttext-decoration: none;\n\tcolor: #666;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\ttransition: all 0.1s linear;\n}\n.panel-login>.panel-heading a.active{\n\tcolor:black;\n\tfont-size: 18px;\n}\n.panel-login>.panel-heading hr{\n\tmargin-top: 10px;\n\tmargin-bottom: 0px;\n\tclear: both;\n\tborder: 0;\n\theight: 1px;\n\t\n}\n.input[type=\"email\"] {\n\theight: 45px;\n\tborder: 1px solid #ddd;\n\tfont-size: 16px;\n\ttransition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n\toutline:none;\n\tbox-shadow: none;\n\tborder-color: #ccc;\n}\n.btn-login {\n\tbackground-color: #59B2E0;\n\toutline: none;\n\tcolor: #fff;\n\tfont-size: 14px;\n\theight: auto;\n\tfont-weight: normal;\n\tpadding: 14px 0;\n\ttext-transform: uppercase;\n\tborder-color: #59B2E6;\n}\n.btn-login:hover,\n.btn-login:focus {\n\tcolor: #fff;\n\tbackground-color:blue;\n\tborder-color: blue;\n}\n.forgot-password {\n\ttext-decoration: underline;\n\tcolor: #888;\n}\n.forgot-password:hover,\n.forgot-password:focus {\n\ttext-decoration: underline;\n\tcolor: rgb(8, 0, 0);\n}\n\n\n"

/***/ }),

/***/ "./src/app/user-management/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-management/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 header\">\n            To Do List\n        </div>\n    </div>\n    <div class=\"row\">\n\n        <div class=\"col-12 login\">\n            <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n                    aria-label=\"Toggle navigation\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n                <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\">Login</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" [routerLink]=\"['/signup']\">Sign-Up</a>\n                        </li>\n\n\n                    </ul>\n                </div>\n            </nav>\n\n            <p class=\"para\">Email:</p>\n            <div class=\"input-group mb-3\">\n\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"\n                    placeholder=\"Enter Your Email\">\n            </div>\n            <p class=\"para\">Password:</p>\n            <div class=\"input-group mb-3\">\n\n                <input type=\"password\" class=\"form-control\" [(ngModel)]=\"textPassword\" name=\"textPassword\" aria-label=\"Default\" aria-describedby=\"inputGroup-sizing-default\"\n                    placeholder=\"Enter Your Password\">\n            </div>\n            <button class=\"btn bg-success text-white\" (click)=login()>Log-In</button>\n            <br>\n            <a [routerLink]=\"['/forgot']\" style=\"font-weight: bold; color: black\">Forgot Password?</a>\n            <br>\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/user-management/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-management/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies */ "./node_modules/ng2-cookies/index.js");
/* harmony import */ var ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(toastr, router, appService) {
        var _this = this;
        this.toastr = toastr;
        this.router = router;
        this.appService = appService;
        this.movetoMenu = function () {
            _this.router.navigate(['/todomenu']);
        };
        this.login = function () {
            if (!_this.email) {
                _this.toastr.warning("Enter Your Email");
            }
            else if (!_this.textPassword) {
                _this.toastr.warning("Enter Your Password");
            }
            else {
                var data = {
                    email: _this.email,
                    textPassword: _this.textPassword
                };
                _this.appService.loginFunction(data).subscribe(function (apiResponse) {
                    if (apiResponse.status == 200) {
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('id', apiResponse.data.userId);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('fullName', apiResponse.data.userDetails.firstName + " " + apiResponse.data.userDetails.lastName);
                        ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('token', apiResponse.data.token);
                        _this.toastr.success("Login Successfull");
                        setTimeout(function () {
                            _this.movetoMenu();
                        }, 2000);
                    }
                }, function (err) {
                    if (err.error.message) {
                        _this.toastr.error(err.error.message);
                    }
                    else {
                        _this.toastr.error("Connection Error");
                    }
                });
            }
        };
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user-management/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user-management/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-management/sign-up/sign-up.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user-management/sign-up/sign-up.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    background-color:black;\n    font-size:1.5em;\n    font-family:Arial, Helvetica, sans-serif;\n    text-align: center;\n    color:white;\n    padding:25px;\n    font-weight: bold;\n    }\n\n.back{\n    margin:4vh;\n    font-family:Arial, Helvetica, sans-serif;\n}\n\nlabel{\n    font-weight:bold;\n    color:black;\n    font-size: 1.1em;\n    font-family: Arial, Helvetica, sans-serif;\n    \n}\n\n.field{\n    margin-bottom:5vh;\n}\n\n.select{\n    width:150px;\n    margin-bottom:2%;\n    font-size:12px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight:Bold;\n}"

/***/ }),

/***/ "./src/app/user-management/sign-up/sign-up.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user-management/sign-up/sign-up.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n    <div class=\"col-12 header\">\n      To Do List\n    </div>\n\n  </div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">\n            <span style=\"font-weight: bold\"> Already have an account: </span> Login</a>\n\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/signup']\">Sign-Up</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div class=\"row\">\n\n\n    <div class=\"col-12 field\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Enter Your Email\" required>\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input type=\"password\" [(ngModel)]='textPassword' name=\"textPassword\" class=\"form-control\" placeholder=\"Enter Your Password\"\n            required/>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"firstName\">First Name:</label>\n          <input type=\"text\" [(ngModel)]=\"firstName\" name=\"firstName\" class=\"form-control\" placeholder=\"Enter First-Name\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"lastName\">Last Name:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\" placeholder=\"Enter Your Last-Name\" required>\n        </div>\n        <div class=\"form-group\">\n\n          <label for=\"mobileNumber\">Phone:</label>\n          <br>\n          <select class=\"select\" [(ngModel)]=\"countryCode\" name=\"countryCode\">\n            <option *ngFor=\"let y of codes\">\n              {{y.name}} ({{y.code}})\n            </option>\n          </select>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"mobileNumber\" name=\"mobileNumber\" placeholder=\"Enter Mobile Number\"\n            required>\n        </div>\n\n      </form>\n      <button class='btn bg-primary text-white' (click)=signup()>Sign-Up</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-management/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user-management/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(toastr, appService, router, http) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
        this.http = http;
        this.codes = [];
        this.gotoLogin = function () {
            _this.router.navigate(['/login']);
        };
        this.signup = function () {
            if (!_this.email) {
                _this.toastr.warning("Enter Your Email");
            }
            else if (!_this.textPassword) {
                _this.toastr.warning("Enter Your Password");
            }
            else if (!_this.firstName) {
                _this.toastr.warning("Enter Your First Name");
            }
            else if (!_this.lastName) {
                _this.toastr.warning("Enter Your Last Name");
            }
            else if (!_this.mobileNumber) {
                _this.toastr.warning("Enter Your Mobile Number");
            }
            else {
                var data = {
                    email: _this.email,
                    textPassword: _this.textPassword,
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    mobileNumber: _this.mobileNumber,
                    countryCode: _this.countryCode
                };
                _this.appService.signupFunction(data).subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status == 200) {
                        _this.toastr.success("Sign-Up Successful");
                        setTimeout(function () {
                            _this.gotoLogin();
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error("Error Occured");
                });
            }
        };
        this.getCode = function () {
            _this.http.get("https://api.jsonbin.io/b/5b13cc87c2e3344ccd96cb9b").subscribe(function (data) {
                _this.codes = data.countries;
                console.log(_this.codes);
            }, function (error) {
                console.log("Error Occured", error);
                _this.toastr.error("Error Occured");
            });
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.getCode();
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user-management/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user-management/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user-management/user-management.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-management/user-management.module.ts ***!
  \***********************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/user-management/sign-up/sign-up.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-management/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/user-management/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    { path: "signup", component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
                    { path: "forgot", component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"] },
                ]),
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordComponent"],]
        })
    ], UserManagementModule);
    return UserManagementModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\cw\Desktop\New folder\todolist-frontend-master\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map