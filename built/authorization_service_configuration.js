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
var xhr_1 = require("./xhr");
/**
 * The standard base path for well-known resources on domains.
 * See https://tools.ietf.org/html/rfc5785 for more information.
 */
var WELL_KNOWN_PATH = '.well-known';
/**
 * The standard resource under the well known path at which an OpenID Connect
 * discovery document can be found under an issuer's base URI.
 */
var OPENID_CONFIGURATION = 'openid-configuration';
/**
 * Configuration details required to interact with an authorization service.
 */
var AuthorizationServiceConfiguration = /** @class */ (function () {
    function AuthorizationServiceConfiguration(authorizationEndpoint, tokenEndpoint, revocationEndpoint) {
        this.authorizationEndpoint = authorizationEndpoint;
        this.tokenEndpoint = tokenEndpoint;
        this.revocationEndpoint = revocationEndpoint;
    }
    AuthorizationServiceConfiguration.prototype.toJson = function () {
        return {
            authorization_endpoint: this.authorizationEndpoint,
            token_endpoint: this.tokenEndpoint,
            revocation_endpoint: this.revocationEndpoint
        };
    };
    AuthorizationServiceConfiguration.fromJson = function (json) {
        return new AuthorizationServiceConfiguration(json.authorization_endpoint, json.token_endpoint, json.revocation_endpoint);
    };
    AuthorizationServiceConfiguration.fetchFromIssuer = function (openIdIssuerUrl, requestor) {
        return __awaiter(this, void 0, void 0, function () {
            var fullUrl, requestorToUse, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fullUrl = openIdIssuerUrl + "/" + WELL_KNOWN_PATH + "/" + OPENID_CONFIGURATION;
                        requestorToUse = requestor || new xhr_1.JQueryRequestor();
                        return [4 /*yield*/, requestorToUse.xhr({ url: fullUrl, dataType: 'json' })];
                    case 1:
                        json = _a.sent();
                        return [2 /*return*/, AuthorizationServiceConfiguration.fromJson(json)];
                }
            });
        });
    };
    return AuthorizationServiceConfiguration;
}());
exports.AuthorizationServiceConfiguration = AuthorizationServiceConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVILDZCQUFpRDtBQVlqRDs7O0dBR0c7QUFDSCxJQUFNLGVBQWUsR0FBRyxhQUFhLENBQUM7QUFFdEM7OztHQUdHO0FBQ0gsSUFBTSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQztBQUVwRDs7R0FFRztBQUNIO0lBQ0ssMkNBQ1cscUJBQTZCLEVBQzdCLGFBQXFCLEVBQ3JCLGtCQUEwQjtRQUYxQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQVE7UUFDN0Isa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFRO0lBQUcsQ0FBQztJQUV6QyxrREFBTSxHQUFOO1FBQ0ssTUFBTSxDQUFDO1lBQ0Ysc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNsRCxjQUFjLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDbEMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtTQUNoRCxDQUFDO0lBQ1AsQ0FBQztJQUVNLDBDQUFRLEdBQWYsVUFBZ0IsSUFBMkM7UUFFdEQsTUFBTSxDQUFDLElBQUksaUNBQWlDLENBQ3hDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFWSxpREFBZSxHQUE1QixVQUE2QixlQUF1QixFQUFFLFNBQXFCOzs7Ozs7d0JBQ2hFLE9BQU8sR0FBTSxlQUFlLFNBQUksZUFBZSxTQUFJLG9CQUFzQixDQUFDO3dCQUUxRSxjQUFjLEdBQUcsU0FBUyxJQUFJLElBQUkscUJBQWUsRUFBRSxDQUFDO3dCQUUvQyxxQkFBTSxjQUFjLENBQUMsR0FBRyxDQUMvQixFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLEVBQUE7O3dCQURqQyxJQUFJLEdBQUcsU0FDMEI7d0JBRXJDLHNCQUFPLGlDQUFpQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQzs7OztLQUM1RDtJQUNOLHdDQUFDO0FBQUQsQ0FBQyxBQTlCRCxJQThCQztBQTlCWSw4RUFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxyXG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGVcclxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7SlF1ZXJ5UmVxdWVzdG9yLCBSZXF1ZXN0b3J9IGZyb20gJy4veGhyJztcclxuXHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24gYXMgYSBKU09OIG9iamVjdC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uSnNvbiB7XHJcbiAgICAgYXV0aG9yaXphdGlvbl9lbmRwb2ludDogc3RyaW5nO1xyXG4gICAgIHRva2VuX2VuZHBvaW50OiBzdHJpbmc7XHJcbiAgICAgcmV2b2NhdGlvbl9lbmRwb2ludDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVGhlIHN0YW5kYXJkIGJhc2UgcGF0aCBmb3Igd2VsbC1rbm93biByZXNvdXJjZXMgb24gZG9tYWlucy5cclxuICogU2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM1Nzg1IGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gKi9cclxuY29uc3QgV0VMTF9LTk9XTl9QQVRIID0gJy53ZWxsLWtub3duJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgc3RhbmRhcmQgcmVzb3VyY2UgdW5kZXIgdGhlIHdlbGwga25vd24gcGF0aCBhdCB3aGljaCBhbiBPcGVuSUQgQ29ubmVjdFxyXG4gKiBkaXNjb3ZlcnkgZG9jdW1lbnQgY2FuIGJlIGZvdW5kIHVuZGVyIGFuIGlzc3VlcidzIGJhc2UgVVJJLlxyXG4gKi9cclxuY29uc3QgT1BFTklEX0NPTkZJR1VSQVRJT04gPSAnb3BlbmlkLWNvbmZpZ3VyYXRpb24nO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gZGV0YWlscyByZXF1aXJlZCB0byBpbnRlcmFjdCB3aXRoIGFuIGF1dGhvcml6YXRpb24gc2VydmljZS5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24ge1xyXG4gICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICBwdWJsaWMgYXV0aG9yaXphdGlvbkVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICAgICAgIHB1YmxpYyB0b2tlbkVuZHBvaW50OiBzdHJpbmcsXHJcbiAgICAgICAgIHB1YmxpYyByZXZvY2F0aW9uRW5kcG9pbnQ6IHN0cmluZykge31cclxuXHJcbiAgICAgdG9Kc29uKCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgYXV0aG9yaXphdGlvbl9lbmRwb2ludDogdGhpcy5hdXRob3JpemF0aW9uRW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgIHRva2VuX2VuZHBvaW50OiB0aGlzLnRva2VuRW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgIHJldm9jYXRpb25fZW5kcG9pbnQ6IHRoaXMucmV2b2NhdGlvbkVuZHBvaW50XHJcbiAgICAgICAgICB9O1xyXG4gICAgIH1cclxuXHJcbiAgICAgc3RhdGljIGZyb21Kc29uKGpzb246IEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbkpzb24pOlxyXG4gICAgICAgICBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24ge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb24oXHJcbiAgICAgICAgICAgICAganNvbi5hdXRob3JpemF0aW9uX2VuZHBvaW50LCBqc29uLnRva2VuX2VuZHBvaW50LCBqc29uLnJldm9jYXRpb25fZW5kcG9pbnQpO1xyXG4gICAgIH1cclxuXHJcbiAgICAgc3RhdGljIGFzeW5jIGZldGNoRnJvbUlzc3VlcihvcGVuSWRJc3N1ZXJVcmw6IHN0cmluZywgcmVxdWVzdG9yPzogUmVxdWVzdG9yKSB7XHJcbiAgICAgICAgICBjb25zdCBmdWxsVXJsID0gYCR7b3BlbklkSXNzdWVyVXJsfS8ke1dFTExfS05PV05fUEFUSH0vJHtPUEVOSURfQ09ORklHVVJBVElPTn1gO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHJlcXVlc3RvclRvVXNlID0gcmVxdWVzdG9yIHx8IG5ldyBKUXVlcnlSZXF1ZXN0b3IoKTtcclxuXHJcbiAgICAgICAgICBsZXQganNvbiA9IGF3YWl0IHJlcXVlc3RvclRvVXNlLnhocjxBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb25Kc29uPihcclxuICAgICAgICAgICAgICB7dXJsOiBmdWxsVXJsLCBkYXRhVHlwZTogJ2pzb24nfSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbi5mcm9tSnNvbihqc29uKTtcclxuICAgICB9XHJcbn1cclxuIl19