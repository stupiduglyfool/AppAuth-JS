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
var BasicQueryStringUtils = /** @class */ (function () {
    function BasicQueryStringUtils() {
    }
    BasicQueryStringUtils.prototype.parse = function (input, useHash) {
        if (useHash) {
            return this.parseQueryString(input.hash);
        }
        else {
            return this.parseQueryString(input.search);
        }
    };
    BasicQueryStringUtils.prototype.parseQueryString = function (query) {
        var result = {};
        // if anything starts with ?, # or & remove it
        query = query.trim().replace(/^(\?|#|&)/, '');
        var params = query.split('&');
        for (var i = 0; i < params.length; i += 1) {
            var param = params[i]; // looks something like a=b
            var parts = param.split('=');
            if (parts.length >= 2) {
                var key = decodeURIComponent(parts.shift());
                var value = parts.length > 0 ? parts.join('=') : null;
                if (value) {
                    result[key] = decodeURIComponent(value);
                }
            }
        }
        return result;
    };
    BasicQueryStringUtils.prototype.stringify = function (input) {
        var encoded = [];
        for (var key in input) {
            if (input.hasOwnProperty(key) && input[key]) {
                encoded.push(encodeURIComponent(key) + "=" + encodeURIComponent(input[key]));
            }
        }
        return encoded.join('&');
    };
    return BasicQueryStringUtils;
}());
exports.BasicQueryStringUtils = BasicQueryStringUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnlfc3RyaW5nX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3F1ZXJ5X3N0cmluZ191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQWNIO0lBQUE7SUFxQ0EsQ0FBQztJQXBDSSxxQ0FBSyxHQUFMLFVBQU0sS0FBbUIsRUFBRSxPQUFpQjtRQUN2QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEQsQ0FBQztJQUNOLENBQUM7SUFFRCxnREFBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUN6QixJQUFJLE1BQU0sR0FBYyxFQUFFLENBQUM7UUFDM0IsOENBQThDO1FBQzlDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkMsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUUsMkJBQTJCO1lBQ25ELElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixJQUFJLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFHLENBQUMsQ0FBQztnQkFDN0MsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDdEQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdDLENBQUM7WUFDTixDQUFDO1FBQ04sQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbkIsQ0FBQztJQUVELHlDQUFTLEdBQVQsVUFBVSxLQUFnQjtRQUNyQixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDM0IsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNuQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxJQUFJLENBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLFNBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFHLENBQUMsQ0FBQTtZQUNqRixDQUFDO1FBQ04sQ0FBQztRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTiw0QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXHJcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge0xvY2F0aW9uTGlrZSwgU3RyaW5nTWFwfSBmcm9tICcuL3R5cGVzJztcclxuXHJcblxyXG4vKipcclxuICogUXVlcnkgU3RyaW5nIFV0aWxpdGllcy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVlcnlTdHJpbmdVdGlscyB7XHJcbiAgICAgc3RyaW5naWZ5KGlucHV0OiBTdHJpbmdNYXApOiBzdHJpbmc7XHJcbiAgICAgcGFyc2UocXVlcnk6IExvY2F0aW9uTGlrZSwgdXNlSGFzaD86IGJvb2xlYW4pOiBTdHJpbmdNYXA7XHJcbiAgICAgcGFyc2VRdWVyeVN0cmluZyhxdWVyeTogc3RyaW5nKTogU3RyaW5nTWFwO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzaWNRdWVyeVN0cmluZ1V0aWxzIGltcGxlbWVudHMgUXVlcnlTdHJpbmdVdGlscyB7XHJcbiAgICAgcGFyc2UoaW5wdXQ6IExvY2F0aW9uTGlrZSwgdXNlSGFzaD86IGJvb2xlYW4pIHtcclxuICAgICAgICAgIGlmICh1c2VIYXNoKSB7XHJcbiAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnNlUXVlcnlTdHJpbmcoaW5wdXQuaGFzaCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJzZVF1ZXJ5U3RyaW5nKGlucHV0LnNlYXJjaCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfVxyXG5cclxuICAgICBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5OiBzdHJpbmcpOiBTdHJpbmdNYXAge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdDogU3RyaW5nTWFwID0ge307XHJcbiAgICAgICAgICAvLyBpZiBhbnl0aGluZyBzdGFydHMgd2l0aCA/LCAjIG9yICYgcmVtb3ZlIGl0XHJcbiAgICAgICAgICBxdWVyeSA9IHF1ZXJ5LnRyaW0oKS5yZXBsYWNlKC9eKFxcP3wjfCYpLywgJycpO1xyXG4gICAgICAgICAgbGV0IHBhcmFtcyA9IHF1ZXJ5LnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmFtcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICBsZXQgcGFyYW0gPSBwYXJhbXNbaV07ICAvLyBsb29rcyBzb21ldGhpbmcgbGlrZSBhPWJcclxuICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gcGFyYW0uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJ0cy5zaGlmdCgpISk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRba2V5XSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgIH1cclxuXHJcbiAgICAgc3RyaW5naWZ5KGlucHV0OiBTdHJpbmdNYXApIHtcclxuICAgICAgICAgIGxldCBlbmNvZGVkOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgZm9yIChsZXQga2V5IGluIGlucHV0KSB7XHJcbiAgICAgICAgICAgICAgIGlmIChpbnB1dC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGlucHV0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkLnB1c2goYCR7ZW5jb2RlVVJJQ29tcG9uZW50KGtleSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0W2tleV0pfWApXHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBlbmNvZGVkLmpvaW4oJyYnKTtcclxuICAgICB9XHJcbn1cclxuIl19