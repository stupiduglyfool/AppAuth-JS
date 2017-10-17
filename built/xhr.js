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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = require("./errors");
/**
 * An class that abstracts away the ability to make an XMLHttpRequest.
 */
var Requestor = /** @class */ (function () {
    function Requestor() {
    }
    return Requestor;
}());
exports.Requestor = Requestor;
/**
 * Uses $.ajax to makes the Ajax requests.
 */
var JQueryRequestor = /** @class */ (function (_super) {
    __extends(JQueryRequestor, _super);
    function JQueryRequestor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JQueryRequestor.prototype.xhr = function (settings) {
        // NOTE: using jquery to make XHR's as whatwg-fetch requires
        // that I target ES6.
        var xhr = $.ajax(settings);
        return new Promise(function (resolve, reject) {
            xhr.then(function (data, textStatus, jqXhr) {
                resolve(data);
            }, function (jqXhr, textStatus, error) {
                reject(new errors_1.AppAuthError(error));
            });
        });
    };
    return JQueryRequestor;
}(Requestor));
exports.JQueryRequestor = JQueryRequestor;
/**
 * Should be used only in the context of testing. Just uses the underlying
 * Promise to mock the behavior of the Requestor.
 */
var TestRequestor = /** @class */ (function (_super) {
    __extends(TestRequestor, _super);
    function TestRequestor(promise) {
        var _this = _super.call(this) || this;
        _this.promise = promise;
        return _this;
    }
    TestRequestor.prototype.xhr = function (settings) {
        return this.promise; // unsafe cast
    };
    return TestRequestor;
}(Requestor));
exports.TestRequestor = TestRequestor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3hoci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOzs7Ozs7Ozs7Ozs7QUFFSCxtQ0FBc0M7QUFFdEM7O0dBRUc7QUFDSDtJQUFBO0lBQTZGLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBOUYsSUFBOEY7QUFBeEUsOEJBQVM7QUFFL0I7O0dBRUc7QUFDSDtJQUFxQyxtQ0FBUztJQUE5Qzs7SUFnQkEsQ0FBQztJQWZJLDZCQUFHLEdBQUgsVUFBTyxRQUE0QjtRQUM5Qiw0REFBNEQ7UUFDNUQscUJBQXFCO1FBQ3JCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0IsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFJLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsR0FBRyxDQUFDLElBQUksQ0FDSixVQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxDQUFDLElBQVMsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsRUFDRCxVQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsS0FBSztnQkFDcEIsTUFBTSxDQUFDLElBQUkscUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ04sc0JBQUM7QUFBRCxDQUFDLEFBaEJELENBQXFDLFNBQVMsR0FnQjdDO0FBaEJZLDBDQUFlO0FBa0I1Qjs7O0dBR0c7QUFDSDtJQUFtQyxpQ0FBUztJQUN2Qyx1QkFBbUIsT0FBcUI7UUFBeEMsWUFDSyxpQkFBTyxTQUNYO1FBRmtCLGFBQU8sR0FBUCxPQUFPLENBQWM7O0lBRXhDLENBQUM7SUFDRCwyQkFBRyxHQUFILFVBQU8sUUFBNEI7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBRSxjQUFjO0lBQ3pDLENBQUM7SUFDTixvQkFBQztBQUFELENBQUMsQUFQRCxDQUFtQyxTQUFTLEdBTzNDO0FBUFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxyXG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGVcclxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7QXBwQXV0aEVycm9yfSBmcm9tICcuL2Vycm9ycyc7XHJcblxyXG4vKipcclxuICogQW4gY2xhc3MgdGhhdCBhYnN0cmFjdHMgYXdheSB0aGUgYWJpbGl0eSB0byBtYWtlIGFuIFhNTEh0dHBSZXF1ZXN0LlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlcXVlc3RvciB7IGFic3RyYWN0IHhocjxUPihzZXR0aW5nczogSlF1ZXJ5QWpheFNldHRpbmdzKTogUHJvbWlzZTxUPjsgfVxyXG5cclxuLyoqXHJcbiAqIFVzZXMgJC5hamF4IHRvIG1ha2VzIHRoZSBBamF4IHJlcXVlc3RzLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEpRdWVyeVJlcXVlc3RvciBleHRlbmRzIFJlcXVlc3RvciB7XHJcbiAgICAgeGhyPFQ+KHNldHRpbmdzOiBKUXVlcnlBamF4U2V0dGluZ3MpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICAgIC8vIE5PVEU6IHVzaW5nIGpxdWVyeSB0byBtYWtlIFhIUidzIGFzIHdoYXR3Zy1mZXRjaCByZXF1aXJlc1xyXG4gICAgICAgICAgLy8gdGhhdCBJIHRhcmdldCBFUzYuXHJcbiAgICAgICAgICBjb25zdCB4aHIgPSAkLmFqYXgoc2V0dGluZ3MpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgIHhoci50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgKGRhdGEsIHRleHRTdGF0dXMsIGpxWGhyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSBhcyBUKTtcclxuICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAoanFYaHIsIHRleHRTdGF0dXMsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgQXBwQXV0aEVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gdGhlIGNvbnRleHQgb2YgdGVzdGluZy4gSnVzdCB1c2VzIHRoZSB1bmRlcmx5aW5nXHJcbiAqIFByb21pc2UgdG8gbW9jayB0aGUgYmVoYXZpb3Igb2YgdGhlIFJlcXVlc3Rvci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBUZXN0UmVxdWVzdG9yIGV4dGVuZHMgUmVxdWVzdG9yIHtcclxuICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvbWlzZTogUHJvbWlzZTxhbnk+KSB7XHJcbiAgICAgICAgICBzdXBlcigpO1xyXG4gICAgIH1cclxuICAgICB4aHI8VD4oc2V0dGluZ3M6IEpRdWVyeUFqYXhTZXR0aW5ncyk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZTsgIC8vIHVuc2FmZSBjYXN0XHJcbiAgICAgfVxyXG59XHJcbiJdfQ==