"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AuthenticationService_1 = require("../services/AuthenticationService");
var PostDataService = (function () {
    function PostDataService(http, auth) {
        this.http = http;
        this.auth = auth;
    }
    PostDataService.prototype.postData = function (url, body) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'JWT ' + this.auth.getToken() });
        return this.http.post(url, body, { headers: headers })
            .toPromise();
    };
    PostDataService.prototype.handleError = function (error) {
        console.error('Error occurred', error);
        return Promise.reject(error.message || error);
    };
    return PostDataService;
}());
PostDataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, AuthenticationService_1.AuthenticationService])
], PostDataService);
exports.PostDataService = PostDataService;
//# sourceMappingURL=post-data.service.js.map