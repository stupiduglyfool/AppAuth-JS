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
/**
 * Asynchronous storage APIs. All methods return a `Promise`.
 * All methods take the `DOMString`
 * IDL type (as it is the lowest common denominator).
 */
var StorageBackend = /** @class */ (function () {
    function StorageBackend() {
    }
    return StorageBackend;
}());
exports.StorageBackend = StorageBackend;
/**
 * A `StorageBackend` backed by `localstorage`.
 */
var LocalStorageBackend = /** @class */ (function (_super) {
    __extends(LocalStorageBackend, _super);
    function LocalStorageBackend(storage) {
        var _this = _super.call(this) || this;
        _this.storage = storage || window.localStorage;
        return _this;
    }
    LocalStorageBackend.prototype.getItem = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var value = _this.storage.getItem(name);
            if (value) {
                resolve(value);
            }
            else {
                resolve(null);
            }
        });
    };
    LocalStorageBackend.prototype.removeItem = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.removeItem(name);
            resolve();
        });
    };
    LocalStorageBackend.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.clear();
            resolve();
        });
    };
    LocalStorageBackend.prototype.setItem = function (name, value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.setItem(name, value);
            resolve();
        });
    };
    return LocalStorageBackend;
}(StorageBackend));
exports.LocalStorageBackend = LocalStorageBackend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7Ozs7Ozs7Ozs7OztBQWlCSDs7OztHQUlHO0FBQ0g7SUFBQTtJQXNCQSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDO0FBdEJxQix3Q0FBYztBQXdCcEM7O0dBRUc7QUFDSDtJQUF5Qyx1Q0FBYztJQUVsRCw2QkFBWSxPQUEyQjtRQUF2QyxZQUNLLGlCQUFPLFNBRVg7UUFESSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDOztJQUNuRCxDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLElBQVk7UUFBM0IsaUJBU0M7UUFSSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQWMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMzQyxJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25CLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTSx3Q0FBVSxHQUFqQixVQUFrQixJQUFZO1FBQTlCLGlCQUtDO1FBSkksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsT0FBTyxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQUEsaUJBS0M7UUFKSSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQU8sVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNwQyxLQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBRU0scUNBQU8sR0FBZCxVQUFlLElBQVksRUFBRSxLQUFhO1FBQTFDLGlCQUtDO1FBSkksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0lBQ04sMEJBQUM7QUFBRCxDQUFDLEFBdENELENBQXlDLGNBQWMsR0FzQ3REO0FBdENZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XHJcbiAqIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxyXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEEgc3Vic2V0IG9mIHRoZSBgU3RvcmFnZWAgaW50ZXJmYWNlIHdoaWNoIHdlIG5lZWQgZm9yIHRoZSBiYWNrZW5kcyB0byB3b3JrLlxyXG4gKlxyXG4gKiBFc3NlbnRpYWxseSByZW1vdmVzIHRoZSBpbmRleGFibGUgcHJvcGVydGllcyBhbmQgcmVhZG9ubHkgcHJvcGVydGllcyBmcm9tXHJcbiAqIGBTdG9yYWdlYCBpbiBsaWIuZG9tLmQudHMuIFRoaXMgaXMgc28gdGhhdCBhIGN1c3RvbSB0eXBlIGNhbiBleHRlbmQgaXQgZm9yXHJcbiAqIHRlc3RpbmcuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVuZGVybHlpbmdTdG9yYWdlIHtcclxuICAgICByZWFkb25seSBsZW5ndGg6IG51bWJlcjtcclxuICAgICBjbGVhcigpOiB2b2lkO1xyXG4gICAgIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmd8bnVsbDtcclxuICAgICByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZDtcclxuICAgICBzZXRJdGVtKGtleTogc3RyaW5nLCBkYXRhOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQXN5bmNocm9ub3VzIHN0b3JhZ2UgQVBJcy4gQWxsIG1ldGhvZHMgcmV0dXJuIGEgYFByb21pc2VgLlxyXG4gKiBBbGwgbWV0aG9kcyB0YWtlIHRoZSBgRE9NU3RyaW5nYFxyXG4gKiBJREwgdHlwZSAoYXMgaXQgaXMgdGhlIGxvd2VzdCBjb21tb24gZGVub21pbmF0b3IpLlxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0b3JhZ2VCYWNrZW5kIHtcclxuICAgICAvKipcclxuICAgICAgKiBXaGVuIHBhc3NlZCBhIGtleSBgbmFtZWAsIHdpbGwgcmV0dXJuIHRoYXQga2V5J3MgdmFsdWUuXHJcbiAgICAgICovXHJcbiAgICAgcHVibGljIGFic3RyYWN0IGdldEl0ZW0obmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD47XHJcblxyXG4gICAgIC8qKlxyXG4gICAgICAqIFdoZW4gcGFzc2VkIGEga2V5IGBuYW1lYCwgd2lsbCByZW1vdmUgdGhhdCBrZXkgZnJvbSB0aGUgc3RvcmFnZS5cclxuICAgICAgKi9cclxuICAgICBwdWJsaWMgYWJzdHJhY3QgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAvKipcclxuICAgICAgKiBXaGVuIGludm9rZWQsIHdpbGwgZW1wdHkgYWxsIGtleXMgb3V0IG9mIHRoZSBzdG9yYWdlLlxyXG4gICAgICAqL1xyXG4gICAgIHB1YmxpYyBhYnN0cmFjdCBjbGVhcigpOiBQcm9taXNlPHZvaWQ+O1xyXG5cclxuICAgICAvKipcclxuICAgICAgKiBUaGUgc2V0SXRlbSgpIG1ldGhvZCBvZiB0aGUgYFN0b3JhZ2VCYWNrZW5kYCBpbnRlcmZhY2UsXHJcbiAgICAgICogd2hlbiBwYXNzZWQgYSBrZXkgbmFtZSBhbmQgdmFsdWUsIHdpbGwgYWRkIHRoYXQga2V5IHRvIHRoZSBzdG9yYWdlLFxyXG4gICAgICAqIG9yIHVwZGF0ZSB0aGF0IGtleSdzIHZhbHVlIGlmIGl0IGFscmVhZHkgZXhpc3RzLlxyXG4gICAgICAqL1xyXG4gICAgIHB1YmxpYyBhYnN0cmFjdCBzZXRJdGVtKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGBTdG9yYWdlQmFja2VuZGAgYmFja2VkIGJ5IGBsb2NhbHN0b3JhZ2VgLlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUJhY2tlbmQgZXh0ZW5kcyBTdG9yYWdlQmFja2VuZCB7XHJcbiAgICAgcHJpdmF0ZSBzdG9yYWdlOiBVbmRlcmx5aW5nU3RvcmFnZTtcclxuICAgICBjb25zdHJ1Y3RvcihzdG9yYWdlPzogVW5kZXJseWluZ1N0b3JhZ2UpIHtcclxuICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlIHx8IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgZ2V0SXRlbShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ3xudWxsPiB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nfG51bGw+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcclxuICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShudWxsKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBwdWJsaWMgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKG5hbWUpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBjbGVhcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuc3RvcmFnZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICB9XHJcblxyXG4gICAgIHB1YmxpYyBzZXRJdGVtKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5zdG9yYWdlLnNldEl0ZW0obmFtZSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICB9XHJcbn1cclxuIl19