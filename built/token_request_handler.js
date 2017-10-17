"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
var query_string_utils_1 = require("./query_string_utils");
var token_response_1 = require("./token_response");
var xhr_1 = require("./xhr");
/**
 * The default token request handler.
 */
var BaseTokenRequestHandler = /** @class */ (function () {
    function BaseTokenRequestHandler(requestor, utils) {
        if (requestor === void 0) { requestor = new xhr_1.JQueryRequestor(); }
        if (utils === void 0) { utils = new query_string_utils_1.BasicQueryStringUtils(); }
        this.requestor = requestor;
        this.utils = utils;
    }
    BaseTokenRequestHandler.prototype.isTokenResponse = function (response) {
        return response.error === undefined;
    };
    BaseTokenRequestHandler.prototype.performRevokeTokenRequest = function (configuration, request) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.requestor.xhr({
                            url: configuration.revocationEndpoint,
                            method: 'POST',
                            dataType: 'json',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            data: request.toJson()
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BaseTokenRequestHandler.prototype.performTokenRequest = function (configuration, request) {
        return __awaiter(this, void 0, void 0, function () {
            var response, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.requestor.xhr({
                                url: configuration.tokenEndpoint,
                                method: 'POST',
                                dataType: 'json',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                data: this.utils.stringify(request.toStringMap())
                            })];
                    case 1:
                        response = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        ex_1 = _a.sent();
                        throw ex_1;
                    case 3:
                        if (!this.isTokenResponse(response))
                            throw new errors_1.AppAuthError(response.error, token_response_1.TokenError.fromJson(response));
                        return [2 /*return*/, token_response_1.TokenResponse.fromJson(response)];
                }
            });
        });
    };
    return BaseTokenRequestHandler;
}());
exports.BaseTokenRequestHandler = BaseTokenRequestHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVxdWVzdF9oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3Rva2VuX3JlcXVlc3RfaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0gsbUNBQXNDO0FBRXRDLDJEQUE2RTtBQUc3RSxtREFBOEY7QUFFOUYsNkJBQWlEO0FBa0JqRDs7R0FFRztBQUNIO0lBQ0ssaUNBQ29CLFNBQTRDLEVBQzVDLEtBQXFEO1FBRHJELDBCQUFBLEVBQUEsZ0JBQTJCLHFCQUFlLEVBQUU7UUFDNUMsc0JBQUEsRUFBQSxZQUE4QiwwQ0FBcUIsRUFBRTtRQURyRCxjQUFTLEdBQVQsU0FBUyxDQUFtQztRQUM1QyxVQUFLLEdBQUwsS0FBSyxDQUFnRDtJQUFHLENBQUM7SUFFckUsaURBQWUsR0FBdkIsVUFBd0IsUUFDYztRQUNqQyxNQUFNLENBQUUsUUFBMkIsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO0lBQzdELENBQUM7SUFHSywyREFBeUIsR0FBL0IsVUFDSSxhQUFnRCxFQUNoRCxPQUEyQjs7Ozs0QkFDbkIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQVU7NEJBQ3BDLEdBQUcsRUFBRSxhQUFhLENBQUMsa0JBQWtCOzRCQUNyQyxNQUFNLEVBQUUsTUFBTTs0QkFDZCxRQUFRLEVBQUUsTUFBTTs0QkFDaEIsT0FBTyxFQUFFLEVBQUMsY0FBYyxFQUFFLG1DQUFtQyxFQUFDOzRCQUM5RCxJQUFJLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRTt5QkFDMUIsQ0FBQyxFQUFBOzRCQU5GLHNCQUFPLFNBTUwsRUFBQzs7OztLQUNQO0lBRUsscURBQW1CLEdBQXpCLFVBQ0ksYUFBZ0QsRUFDaEQsT0FBcUI7Ozs7Ozs7d0JBSUoscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQW1DO2dDQUNqRSxHQUFHLEVBQUUsYUFBYSxDQUFDLGFBQWE7Z0NBQ2hDLE1BQU0sRUFBRSxNQUFNO2dDQUNkLFFBQVEsRUFBRSxNQUFNO2dDQUNoQixPQUFPLEVBQUUsRUFBQyxjQUFjLEVBQUUsbUNBQW1DLEVBQUM7Z0NBQzlELElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7NkJBQ3JELENBQUMsRUFBQTs7d0JBTkYsUUFBUSxHQUFHLFNBTVQsQ0FBQzs7Ozt3QkFFSCxNQUFNLElBQUUsQ0FBQzs7d0JBR2QsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUMvQixNQUFNLElBQUkscUJBQVksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLDJCQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBRTNFLHNCQUFPLDhCQUFhLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFDOzs7O0tBQzVDO0lBQ04sOEJBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XHJcbiAqIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxyXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQge0FwcEF1dGhFcnJvcn0gZnJvbSAnLi9lcnJvcnMnO1xyXG5pbXBvcnQge2xvZ30gZnJvbSAnLi9sb2dnZXInO1xyXG5pbXBvcnQge0Jhc2ljUXVlcnlTdHJpbmdVdGlscywgUXVlcnlTdHJpbmdVdGlsc30gZnJvbSAnLi9xdWVyeV9zdHJpbmdfdXRpbHMnO1xyXG5pbXBvcnQge1Jldm9rZVRva2VuUmVxdWVzdH0gZnJvbSAnLi9yZXZva2VfdG9rZW5fcmVxdWVzdCc7XHJcbmltcG9ydCB7VG9rZW5SZXF1ZXN0fSBmcm9tICcuL3Rva2VuX3JlcXVlc3QnO1xyXG5pbXBvcnQge1Rva2VuRXJyb3IsIFRva2VuRXJyb3JKc29uLCBUb2tlblJlc3BvbnNlLCBUb2tlblJlc3BvbnNlSnNvbn0gZnJvbSAnLi90b2tlbl9yZXNwb25zZSc7XHJcbmltcG9ydCB7U3RyaW5nTWFwfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHtKUXVlcnlSZXF1ZXN0b3IsIFJlcXVlc3Rvcn0gZnJvbSAnLi94aHInO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIGludGVyZmFjZSB3aGljaCBjYW4gbWFrZSBhIHRva2VuIHJlcXVlc3QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuUmVxdWVzdEhhbmRsZXIge1xyXG4gICAgIC8qKlxyXG4gICAgICAqIFBlcmZvcm1zIHRoZSB0b2tlbiByZXF1ZXN0LCBnaXZlbiB0aGUgc2VydmljZSBjb25maWd1cmF0aW9uLlxyXG4gICAgICAqL1xyXG4gICAgIHBlcmZvcm1Ub2tlblJlcXVlc3QoY29uZmlndXJhdGlvbjogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLCByZXF1ZXN0OiBUb2tlblJlcXVlc3QpOlxyXG4gICAgICAgICBQcm9taXNlPFRva2VuUmVzcG9uc2U+O1xyXG5cclxuICAgICBwZXJmb3JtUmV2b2tlVG9rZW5SZXF1ZXN0KFxyXG4gICAgICAgICBjb25maWd1cmF0aW9uOiBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgIHJlcXVlc3Q6IFJldm9rZVRva2VuUmVxdWVzdCk6IFByb21pc2U8Ym9vbGVhbj47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCB0b2tlbiByZXF1ZXN0IGhhbmRsZXIuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQmFzZVRva2VuUmVxdWVzdEhhbmRsZXIgaW1wbGVtZW50cyBUb2tlblJlcXVlc3RIYW5kbGVyIHtcclxuICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHVibGljIHJlYWRvbmx5IHJlcXVlc3RvcjogUmVxdWVzdG9yID0gbmV3IEpRdWVyeVJlcXVlc3RvcigpLFxyXG4gICAgICAgICBwdWJsaWMgcmVhZG9ubHkgdXRpbHM6IFF1ZXJ5U3RyaW5nVXRpbHMgPSBuZXcgQmFzaWNRdWVyeVN0cmluZ1V0aWxzKCkpIHt9XHJcblxyXG4gICAgIHByaXZhdGUgaXNUb2tlblJlc3BvbnNlKHJlc3BvbnNlOiBUb2tlblJlc3BvbnNlSnNvbnxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2tlbkVycm9ySnNvbik6IHJlc3BvbnNlIGlzIFRva2VuUmVzcG9uc2VKc29uIHtcclxuICAgICAgICAgIHJldHVybiAocmVzcG9uc2UgYXMgVG9rZW5FcnJvckpzb24pLmVycm9yID09PSB1bmRlZmluZWQ7XHJcbiAgICAgfVxyXG5cclxuXHJcbiAgICAgYXN5bmMgcGVyZm9ybVJldm9rZVRva2VuUmVxdWVzdChcclxuICAgICAgICAgY29uZmlndXJhdGlvbjogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLFxyXG4gICAgICAgICByZXF1ZXN0OiBSZXZva2VUb2tlblJlcXVlc3QpIHtcclxuICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3Rvci54aHI8Ym9vbGVhbj4oe1xyXG4gICAgICAgICAgICAgICB1cmw6IGNvbmZpZ3VyYXRpb24ucmV2b2NhdGlvbkVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJywgIC8vIGFkZGluZyBpbXBsaWNpdCBkYXRhVHlwZVxyXG4gICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfSxcclxuICAgICAgICAgICAgICAgZGF0YTogcmVxdWVzdC50b0pzb24oKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBhc3luYyBwZXJmb3JtVG9rZW5SZXF1ZXN0KFxyXG4gICAgICAgICBjb25maWd1cmF0aW9uOiBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgIHJlcXVlc3Q6IFRva2VuUmVxdWVzdCkge1xyXG4gICAgICAgICAgbGV0IHJlc3BvbnNlOiBUb2tlblJlc3BvbnNlSnNvbnxUb2tlbkVycm9ySnNvbjtcclxuXHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IHRoaXMucmVxdWVzdG9yLnhocjxUb2tlblJlc3BvbnNlSnNvbnxUb2tlbkVycm9ySnNvbj4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogY29uZmlndXJhdGlvbi50b2tlbkVuZHBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsICAvLyBhZGRpbmcgaW1wbGljaXQgZGF0YVR5cGVcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnfSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLnV0aWxzLnN0cmluZ2lmeShyZXF1ZXN0LnRvU3RyaW5nTWFwKCkpXHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBjYXRjaCAoZXgpIHtcclxuICAgICAgICAgICAgICAgdGhyb3cgZXg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGlzLmlzVG9rZW5SZXNwb25zZShyZXNwb25zZSkpXHJcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBBcHBBdXRoRXJyb3IocmVzcG9uc2UuZXJyb3IsIFRva2VuRXJyb3IuZnJvbUpzb24ocmVzcG9uc2UpKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gVG9rZW5SZXNwb25zZS5mcm9tSnNvbihyZXNwb25zZSk7XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==