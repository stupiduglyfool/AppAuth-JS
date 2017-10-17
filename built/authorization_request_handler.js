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
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_utils_1 = require("./crypto_utils");
/**
 * Generates a random number.
 */
function generateRandom() {
    return crypto_utils_1.generateRandom(1);
}
exports.generateRandom = generateRandom;
// TODO(rahulrav@): add more built in parameters.
/* built in parameters. */
exports.BUILT_IN_PARAMETERS = ['redirect_uri', 'client_id', 'response_type', 'state', 'scope'];
/**
 * Defines the interface which is capable of handling an authorization request
 * using various methods (iframe / popup / different process etc.).
 */
var AuthorizationRequestHandler = /** @class */ (function () {
    function AuthorizationRequestHandler(utils) {
        this.utils = utils;
    }
    /**
     * A utility method to be able to build the authorization request URL.
     */
    AuthorizationRequestHandler.prototype.buildRequestUrl = function (configuration, request) {
        // build the query string
        // coerce to any type for convenience
        var requestMap = {
            'redirect_uri': request.redirectUri,
            'client_id': request.clientId,
            'response_type': request.responseType,
            'state': request.state,
            'scope': request.scope
        };
        // copy over extras
        if (request.extras) {
            for (var extra in request.extras) {
                if (request.extras.hasOwnProperty(extra)) {
                    // check before inserting to requestMap
                    if (exports.BUILT_IN_PARAMETERS.indexOf(extra) < 0) {
                        requestMap[extra] = request.extras[extra];
                    }
                }
            }
        }
        var query = this.utils.stringify(requestMap);
        var baseUrl = configuration.authorizationEndpoint;
        var url = baseUrl + "?" + query;
        return url;
    };
    return AuthorizationRequestHandler;
}());
exports.AuthorizationRequestHandler = AuthorizationRequestHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9yZXF1ZXN0X2hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvYXV0aG9yaXphdGlvbl9yZXF1ZXN0X2hhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFLSCwrQ0FBc0U7QUFLdEU7O0dBRUc7QUFDSDtJQUNLLE1BQU0sQ0FBQyw2QkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRkQsd0NBRUM7QUFXRCxpREFBaUQ7QUFDakQsMEJBQTBCO0FBQ2IsUUFBQSxtQkFBbUIsR0FBRyxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVwRzs7O0dBR0c7QUFDSDtJQUNLLHFDQUFtQixLQUF1QjtRQUF2QixVQUFLLEdBQUwsS0FBSyxDQUFrQjtJQUFHLENBQUM7SUFDOUM7O09BRUc7SUFDTyxxREFBZSxHQUF6QixVQUNJLGFBQWdELEVBQ2hELE9BQTZCO1FBQzVCLHlCQUF5QjtRQUN6QixxQ0FBcUM7UUFDckMsSUFBSSxVQUFVLEdBQWM7WUFDdkIsY0FBYyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLFdBQVcsRUFBRSxPQUFPLENBQUMsUUFBUTtZQUM3QixlQUFlLEVBQUUsT0FBTyxDQUFDLFlBQVk7WUFDckMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1lBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSztTQUMxQixDQUFDO1FBRUYsbUJBQW1CO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RDLHVDQUF1QztvQkFDdkMsRUFBRSxDQUFDLENBQUMsMkJBQW1CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQyxDQUFDO2dCQUNOLENBQUM7WUFDTixDQUFDO1FBQ04sQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztRQUNsRCxJQUFJLEdBQUcsR0FBTSxPQUFPLFNBQUksS0FBTyxDQUFDO1FBRWhDLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQVFOLGtDQUFDO0FBQUQsQ0FBQyxBQTNDRCxJQTJDQztBQTNDcUIsa0VBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXHJcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge0F1dGhvcml6YXRpb25SZXF1ZXN0LCBBdXRob3JpemF0aW9uUmVxdWVzdEpzb259IGZyb20gJy4vYXV0aG9yaXphdGlvbl9yZXF1ZXN0JztcclxuaW1wb3J0IHtBdXRob3JpemF0aW9uRXJyb3IsIEF1dGhvcml6YXRpb25FcnJvckpzb24sIEF1dGhvcml6YXRpb25SZXNwb25zZSwgQXV0aG9yaXphdGlvblJlc3BvbnNlSnNvbn0gZnJvbSAnLi9hdXRob3JpemF0aW9uX3Jlc3BvbnNlJztcclxuaW1wb3J0IHtBdXRob3JpemF0aW9uU2VydmljZUNvbmZpZ3VyYXRpb259IGZyb20gJy4vYXV0aG9yaXphdGlvbl9zZXJ2aWNlX2NvbmZpZ3VyYXRpb24nO1xyXG5pbXBvcnQge2dlbmVyYXRlUmFuZG9tIGFzIGNyeXB0b0dlbmVyYXRlUmFuZG9tfSBmcm9tICcuL2NyeXB0b191dGlscyc7XHJcbmltcG9ydCB7bG9nfSBmcm9tICcuL2xvZ2dlcic7XHJcbmltcG9ydCB7UXVlcnlTdHJpbmdVdGlsc30gZnJvbSAnLi9xdWVyeV9zdHJpbmdfdXRpbHMnO1xyXG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgcmFuZG9tIG51bWJlci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbSgpOiBzdHJpbmcge1xyXG4gICAgIHJldHVybiBjcnlwdG9HZW5lcmF0ZVJhbmRvbSgxKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBzdHJ1Y3R1cmFsIHR5cGUgaG9sZGluZyBib3RoIGF1dGhvcml6YXRpb24gcmVxdWVzdCBhbmQgcmVzcG9uc2UuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhvcml6YXRpb25SZXF1ZXN0UmVzcG9uc2Uge1xyXG4gICAgIHJlcXVlc3Q6IEF1dGhvcml6YXRpb25SZXF1ZXN0O1xyXG4gICAgIHJlc3BvbnNlOiBBdXRob3JpemF0aW9uUmVzcG9uc2V8bnVsbDtcclxuICAgICBlcnJvcjogQXV0aG9yaXphdGlvbkVycm9yfG51bGw7XHJcbn1cclxuXHJcbi8vIFRPRE8ocmFodWxyYXZAKTogYWRkIG1vcmUgYnVpbHQgaW4gcGFyYW1ldGVycy5cclxuLyogYnVpbHQgaW4gcGFyYW1ldGVycy4gKi9cclxuZXhwb3J0IGNvbnN0IEJVSUxUX0lOX1BBUkFNRVRFUlMgPSBbJ3JlZGlyZWN0X3VyaScsICdjbGllbnRfaWQnLCAncmVzcG9uc2VfdHlwZScsICdzdGF0ZScsICdzY29wZSddO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIGludGVyZmFjZSB3aGljaCBpcyBjYXBhYmxlIG9mIGhhbmRsaW5nIGFuIGF1dGhvcml6YXRpb24gcmVxdWVzdFxyXG4gKiB1c2luZyB2YXJpb3VzIG1ldGhvZHMgKGlmcmFtZSAvIHBvcHVwIC8gZGlmZmVyZW50IHByb2Nlc3MgZXRjLikuXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQXV0aG9yaXphdGlvblJlcXVlc3RIYW5kbGVyIHtcclxuICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdXRpbHM6IFF1ZXJ5U3RyaW5nVXRpbHMpIHt9XHJcbiAgICAgLyoqXHJcbiAgICAgICogQSB1dGlsaXR5IG1ldGhvZCB0byBiZSBhYmxlIHRvIGJ1aWxkIHRoZSBhdXRob3JpemF0aW9uIHJlcXVlc3QgVVJMLlxyXG4gICAgICAqL1xyXG4gICAgIHByb3RlY3RlZCBidWlsZFJlcXVlc3RVcmwoXHJcbiAgICAgICAgIGNvbmZpZ3VyYXRpb246IEF1dGhvcml6YXRpb25TZXJ2aWNlQ29uZmlndXJhdGlvbixcclxuICAgICAgICAgcmVxdWVzdDogQXV0aG9yaXphdGlvblJlcXVlc3QpIHtcclxuICAgICAgICAgIC8vIGJ1aWxkIHRoZSBxdWVyeSBzdHJpbmdcclxuICAgICAgICAgIC8vIGNvZXJjZSB0byBhbnkgdHlwZSBmb3IgY29udmVuaWVuY2VcclxuICAgICAgICAgIGxldCByZXF1ZXN0TWFwOiBTdHJpbmdNYXAgPSB7XHJcbiAgICAgICAgICAgICAgICdyZWRpcmVjdF91cmknOiByZXF1ZXN0LnJlZGlyZWN0VXJpLFxyXG4gICAgICAgICAgICAgICAnY2xpZW50X2lkJzogcmVxdWVzdC5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgJ3Jlc3BvbnNlX3R5cGUnOiByZXF1ZXN0LnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgICAgJ3N0YXRlJzogcmVxdWVzdC5zdGF0ZSxcclxuICAgICAgICAgICAgICAgJ3Njb3BlJzogcmVxdWVzdC5zY29wZVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAvLyBjb3B5IG92ZXIgZXh0cmFzXHJcbiAgICAgICAgICBpZiAocmVxdWVzdC5leHRyYXMpIHtcclxuICAgICAgICAgICAgICAgZm9yIChsZXQgZXh0cmEgaW4gcmVxdWVzdC5leHRyYXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5leHRyYXMuaGFzT3duUHJvcGVydHkoZXh0cmEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBiZWZvcmUgaW5zZXJ0aW5nIHRvIHJlcXVlc3RNYXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVUlMVF9JTl9QQVJBTUVURVJTLmluZGV4T2YoZXh0cmEpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0TWFwW2V4dHJhXSA9IHJlcXVlc3QuZXh0cmFzW2V4dHJhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsZXQgcXVlcnkgPSB0aGlzLnV0aWxzLnN0cmluZ2lmeShyZXF1ZXN0TWFwKTtcclxuICAgICAgICAgIGxldCBiYXNlVXJsID0gY29uZmlndXJhdGlvbi5hdXRob3JpemF0aW9uRW5kcG9pbnQ7XHJcbiAgICAgICAgICBsZXQgdXJsID0gYCR7YmFzZVVybH0/JHtxdWVyeX1gO1xyXG5cclxuICAgICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgfVxyXG5cclxuICAgICAvKipcclxuICAgICAgKiBNYWtlcyBhbiBhdXRob3JpemF0aW9uIHJlcXVlc3QuXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIGFic3RyYWN0IHBlcmZvcm1BdXRob3JpemF0aW9uUmVxdWVzdChcclxuICAgICAgICAgY29uZmlndXJhdGlvbjogQXV0aG9yaXphdGlvblNlcnZpY2VDb25maWd1cmF0aW9uLFxyXG4gICAgICAgICByZXF1ZXN0OiBBdXRob3JpemF0aW9uUmVxdWVzdCk6IFByb21pc2U8QXV0aG9yaXphdGlvblJlcXVlc3RSZXNwb25zZT47XHJcbn1cclxuIl19