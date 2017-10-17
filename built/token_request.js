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
exports.GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
exports.GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
/**
 * Represents an Access Token request.
 * For more information look at:
 * https://tools.ietf.org/html/rfc6749#section-4.1.3
 */
var TokenRequest = /** @class */ (function () {
    function TokenRequest(clientId, redirectUri, 
        // TODO(rahulrav@): Add the ability to infer grant types.
        grantType, code, refreshToken, extras) {
        this.clientId = clientId;
        this.redirectUri = redirectUri;
        this.grantType = grantType;
        this.code = code;
        this.refreshToken = refreshToken;
        this.extras = extras;
    }
    /**
     * Serializes a TokenRequest to a JavaScript object.
     */
    TokenRequest.prototype.toJson = function () {
        return {
            grant_type: this.grantType,
            code: this.code,
            refresh_token: this.refreshToken,
            redirect_uri: this.redirectUri,
            client_id: this.clientId,
            extras: this.extras
        };
    };
    TokenRequest.prototype.toStringMap = function () {
        var map = {
            grant_type: this.grantType,
            client_id: this.clientId,
            redirect_uri: this.redirectUri
        };
        if (this.code) {
            map['code'] = this.code;
        }
        if (this.refreshToken) {
            map['refresh_token'] = this.refreshToken;
        }
        // copy over extras
        if (this.extras) {
            for (var extra in this.extras) {
                if (this.extras.hasOwnProperty(extra) && !map.hasOwnProperty(extra)) {
                    // check before inserting to requestMap
                    map[extra] = this.extras[extra];
                }
            }
        }
        return map;
    };
    TokenRequest.fromJson = function (input) {
        return new TokenRequest(input.client_id, input.redirect_uri, input.grant_type, input.code, input.refresh_token, input.extras);
    };
    return TokenRequest;
}());
exports.TokenRequest = TokenRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbl9yZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBSVUsUUFBQSw2QkFBNkIsR0FBRyxvQkFBb0IsQ0FBQztBQUNyRCxRQUFBLHdCQUF3QixHQUFHLGVBQWUsQ0FBQztBQWN4RDs7OztHQUlHO0FBQ0g7SUFDSyxzQkFDVyxRQUFnQixFQUNoQixXQUFtQjtRQUMxQix5REFBeUQ7UUFDbEQsU0FBaUIsRUFDakIsSUFBYSxFQUNiLFlBQXFCLEVBQ3JCLE1BQWtCO1FBTmxCLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFFbkIsY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsaUJBQVksR0FBWixZQUFZLENBQVM7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFHLENBQUM7SUFFakM7O09BRUc7SUFDSCw2QkFBTSxHQUFOO1FBQ0ssTUFBTSxDQUFDO1lBQ0YsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJLENBQUMsWUFBWTtZQUNoQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN2QixDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDSyxJQUFJLEdBQUcsR0FBYztZQUNoQixVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDMUIsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3hCLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVztTQUNsQyxDQUFDO1FBRUYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDWCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkIsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDOUMsQ0FBQztRQUVELG1CQUFtQjtRQUNuQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNqRSx1Q0FBdUM7b0JBQ3ZDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNyQyxDQUFDO1lBQ04sQ0FBQztRQUNOLENBQUM7UUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2hCLENBQUM7SUFFTSxxQkFBUSxHQUFmLFVBQWdCLEtBQXVCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FDbkIsS0FBSyxDQUFDLFNBQVMsRUFDZixLQUFLLENBQUMsWUFBWSxFQUNsQixLQUFLLENBQUMsVUFBVSxFQUNoQixLQUFLLENBQUMsSUFBSSxFQUNWLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ04sbUJBQUM7QUFBRCxDQUFDLEFBN0RELElBNkRDO0FBN0RZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXHJcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge1N0cmluZ01hcH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgR1JBTlRfVFlQRV9BVVRIT1JJWkFUSU9OX0NPREUgPSAnYXV0aG9yaXphdGlvbl9jb2RlJztcclxuZXhwb3J0IGNvbnN0IEdSQU5UX1RZUEVfUkVGUkVTSF9UT0tFTiA9ICdyZWZyZXNoX3Rva2VuJztcclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBUb2tlbiBSZXF1ZXN0IGFzIEpTT04uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFRva2VuUmVxdWVzdEpzb24ge1xyXG4gICAgIGdyYW50X3R5cGU6IHN0cmluZztcclxuICAgICBjb2RlPzogc3RyaW5nO1xyXG4gICAgIHJlZnJlc2hfdG9rZW4/OiBzdHJpbmcsIHJlZGlyZWN0X3VyaTogc3RyaW5nO1xyXG4gICAgIGNsaWVudF9pZDogc3RyaW5nO1xyXG4gICAgIGV4dHJhcz86IFN0cmluZ01hcDtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIEFjY2VzcyBUb2tlbiByZXF1ZXN0LlxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBsb29rIGF0OlxyXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNjc0OSNzZWN0aW9uLTQuMS4zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgVG9rZW5SZXF1ZXN0IHtcclxuICAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHVibGljIGNsaWVudElkOiBzdHJpbmcsXHJcbiAgICAgICAgIHB1YmxpYyByZWRpcmVjdFVyaTogc3RyaW5nLFxyXG4gICAgICAgICAvLyBUT0RPKHJhaHVscmF2QCk6IEFkZCB0aGUgYWJpbGl0eSB0byBpbmZlciBncmFudCB0eXBlcy5cclxuICAgICAgICAgcHVibGljIGdyYW50VHlwZTogc3RyaW5nLFxyXG4gICAgICAgICBwdWJsaWMgY29kZT86IHN0cmluZyxcclxuICAgICAgICAgcHVibGljIHJlZnJlc2hUb2tlbj86IHN0cmluZyxcclxuICAgICAgICAgcHVibGljIGV4dHJhcz86IFN0cmluZ01hcCkge31cclxuXHJcbiAgICAgLyoqXHJcbiAgICAgICogU2VyaWFsaXplcyBhIFRva2VuUmVxdWVzdCB0byBhIEphdmFTY3JpcHQgb2JqZWN0LlxyXG4gICAgICAqL1xyXG4gICAgIHRvSnNvbigpOiBUb2tlblJlcXVlc3RKc29uIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxyXG4gICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgICAgIHJlZnJlc2hfdG9rZW46IHRoaXMucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgICAgICByZWRpcmVjdF91cmk6IHRoaXMucmVkaXJlY3RVcmksXHJcbiAgICAgICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcclxuICAgICAgICAgICAgICAgZXh0cmFzOiB0aGlzLmV4dHJhc1xyXG4gICAgICAgICAgfTtcclxuICAgICB9XHJcblxyXG4gICAgIHRvU3RyaW5nTWFwKCk6IFN0cmluZ01hcCB7XHJcbiAgICAgICAgICBsZXQgbWFwOiBTdHJpbmdNYXAgPSB7XHJcbiAgICAgICAgICAgICAgIGdyYW50X3R5cGU6IHRoaXMuZ3JhbnRUeXBlLFxyXG4gICAgICAgICAgICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXHJcbiAgICAgICAgICAgICAgIHJlZGlyZWN0X3VyaTogdGhpcy5yZWRpcmVjdFVyaVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgIG1hcFsnY29kZSddID0gdGhpcy5jb2RlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnJlZnJlc2hUb2tlbikge1xyXG4gICAgICAgICAgICAgICBtYXBbJ3JlZnJlc2hfdG9rZW4nXSA9IHRoaXMucmVmcmVzaFRva2VuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIGNvcHkgb3ZlciBleHRyYXNcclxuICAgICAgICAgIGlmICh0aGlzLmV4dHJhcykge1xyXG4gICAgICAgICAgICAgICBmb3IgKGxldCBleHRyYSBpbiB0aGlzLmV4dHJhcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhcy5oYXNPd25Qcm9wZXJ0eShleHRyYSkgJiYgIW1hcC5oYXNPd25Qcm9wZXJ0eShleHRyYSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGJlZm9yZSBpbnNlcnRpbmcgdG8gcmVxdWVzdE1hcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFwW2V4dHJhXSA9IHRoaXMuZXh0cmFzW2V4dHJhXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgIH1cclxuXHJcbiAgICAgc3RhdGljIGZyb21Kc29uKGlucHV0OiBUb2tlblJlcXVlc3RKc29uKTogVG9rZW5SZXF1ZXN0IHtcclxuICAgICAgICAgIHJldHVybiBuZXcgVG9rZW5SZXF1ZXN0KFxyXG4gICAgICAgICAgICAgIGlucHV0LmNsaWVudF9pZCxcclxuICAgICAgICAgICAgICBpbnB1dC5yZWRpcmVjdF91cmksXHJcbiAgICAgICAgICAgICAgaW5wdXQuZ3JhbnRfdHlwZSxcclxuICAgICAgICAgICAgICBpbnB1dC5jb2RlLFxyXG4gICAgICAgICAgICAgIGlucHV0LnJlZnJlc2hfdG9rZW4sXHJcbiAgICAgICAgICAgICAgaW5wdXQuZXh0cmFzKTtcclxuICAgICB9XHJcbn1cclxuIl19