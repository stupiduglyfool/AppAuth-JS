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
/**
 * Represents a revoke token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc7009#section-2.1
 */
var RevokeTokenRequest = /** @class */ (function () {
    function RevokeTokenRequest(token, tokenTypeHint, clientId, clientSecret) {
        this.token = token;
        this.tokenTypeHint = tokenTypeHint;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }
    /**
     * Serializes a TokenRequest to a JavaScript object.
     */
    RevokeTokenRequest.prototype.toJson = function () {
        var json = { token: this.token };
        if (this.tokenTypeHint) {
            json['token_type_hint'] = this.tokenTypeHint;
        }
        if (this.clientId) {
            json['client_id'] = this.clientId;
        }
        if (this.clientSecret) {
            json['client_secret'] = this.clientSecret;
        }
        return json;
    };
    RevokeTokenRequest.fromJson = function (input) {
        return new RevokeTokenRequest(input.token, input.token_type_hint, input.client_id, input.client_secret);
    };
    return RevokeTokenRequest;
}());
exports.RevokeTokenRequest = RevokeTokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2b2tlX3Rva2VuX3JlcXVlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvcmV2b2tlX3Rva2VuX3JlcXVlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFpQkg7Ozs7R0FJRztBQUNIO0lBQ0ssNEJBQ1csS0FBYSxFQUNiLGFBQTZCLEVBQzdCLFFBQWlCLEVBQ2pCLFlBQXFCO1FBSHJCLFVBQUssR0FBTCxLQUFLLENBQVE7UUFDYixrQkFBYSxHQUFiLGFBQWEsQ0FBZ0I7UUFDN0IsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBUztJQUFHLENBQUM7SUFFcEM7O09BRUc7SUFDSCxtQ0FBTSxHQUFOO1FBQ0ssSUFBSSxJQUFJLEdBQTJCLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUV2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ2xELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMvQyxDQUFDO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNqQixDQUFDO0lBRU0sMkJBQVEsR0FBZixVQUFnQixLQUE2QjtRQUN4QyxNQUFNLENBQUMsSUFBSSxrQkFBa0IsQ0FDekIsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25GLENBQUM7SUFDTix5QkFBQztBQUFELENBQUMsQUFoQ0QsSUFnQ0M7QUFoQ1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXHJcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG4vKipcclxuICogU3VwcG9ydGVkIHRva2VuIHR5cGVzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUb2tlblR5cGVIaW50ID0gJ3JlZnJlc2hfdG9rZW4nfCdhY2Nlc3NfdG9rZW4nO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIFRva2VuIFJlcXVlc3QgYXMgSlNPTi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV2b2tlVG9rZW5SZXF1ZXN0SnNvbiB7XHJcbiAgICAgdG9rZW46IHN0cmluZztcclxuICAgICB0b2tlbl90eXBlX2hpbnQ/OiBUb2tlblR5cGVIaW50O1xyXG4gICAgIGNsaWVudF9pZD86IHN0cmluZztcclxuICAgICBjbGllbnRfc2VjcmV0Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHJldm9rZSB0b2tlbiByZXF1ZXN0LlxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBsb29rIGF0OlxyXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNzAwOSNzZWN0aW9uLTIuMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFJldm9rZVRva2VuUmVxdWVzdCB7XHJcbiAgICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgIHB1YmxpYyB0b2tlbjogc3RyaW5nLFxyXG4gICAgICAgICBwdWJsaWMgdG9rZW5UeXBlSGludD86IFRva2VuVHlwZUhpbnQsXHJcbiAgICAgICAgIHB1YmxpYyBjbGllbnRJZD86IHN0cmluZyxcclxuICAgICAgICAgcHVibGljIGNsaWVudFNlY3JldD86IHN0cmluZykge31cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICogU2VyaWFsaXplcyBhIFRva2VuUmVxdWVzdCB0byBhIEphdmFTY3JpcHQgb2JqZWN0LlxyXG4gICAgICAqL1xyXG4gICAgIHRvSnNvbigpIHtcclxuICAgICAgICAgIGxldCBqc29uOiBSZXZva2VUb2tlblJlcXVlc3RKc29uID0ge3Rva2VuOiB0aGlzLnRva2VufTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy50b2tlblR5cGVIaW50KSB7XHJcbiAgICAgICAgICAgICAgIGpzb25bJ3Rva2VuX3R5cGVfaGludCddID0gdGhpcy50b2tlblR5cGVIaW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmNsaWVudElkKSB7XHJcbiAgICAgICAgICAgICAgIGpzb25bJ2NsaWVudF9pZCddID0gdGhpcy5jbGllbnRJZDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jbGllbnRTZWNyZXQpIHtcclxuICAgICAgICAgICAgICAganNvblsnY2xpZW50X3NlY3JldCddID0gdGhpcy5jbGllbnRTZWNyZXQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIGpzb247XHJcbiAgICAgfVxyXG5cclxuICAgICBzdGF0aWMgZnJvbUpzb24oaW5wdXQ6IFJldm9rZVRva2VuUmVxdWVzdEpzb24pIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgUmV2b2tlVG9rZW5SZXF1ZXN0KFxyXG4gICAgICAgICAgICAgIGlucHV0LnRva2VuLCBpbnB1dC50b2tlbl90eXBlX2hpbnQsIGlucHV0LmNsaWVudF9pZCwgaW5wdXQuY2xpZW50X3NlY3JldCk7XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==