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
var flags_1 = require("./flags");
exports.log = function (message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (flags_1.IS_LOG) {
        var length_1 = args ? args.length : 0;
        if (length_1 > 0) {
            console.log.apply(console, [message].concat(args));
        }
        else {
            console.log(message);
        }
    }
};
/**
 * A decorator that can profile a function.
 */
exports.profile = function (target, propertyKey, descriptor) {
    // return as-is
    return flags_1.IS_PROFILE ? performProfile(target, propertyKey, descriptor) : descriptor;
};
// check to see if native support for profiling is available.
var NATIVE_PROFILE_SUPPORT = typeof window !== 'undefined' && !!window.performance && !!console.profile;
var performProfile = function (target, propertyKey, descriptor) {
    var originalCallable = descriptor.value;
    // name must exist
    var name = originalCallable.name || 'anonymous function';
    if (NATIVE_PROFILE_SUPPORT) {
        descriptor.value = function (args) {
            console.profile(name);
            var startTime = window.performance.now();
            var result = originalCallable.call.apply(originalCallable, [this || window].concat(args));
            var duration = window.performance.now() - startTime;
            console.log(name + " took " + duration + " ms");
            console.profileEnd();
            return result;
        };
    }
    else {
        descriptor.value = function (args) {
            exports.log("Profile start " + name);
            var start = Date.now();
            var result = originalCallable.call.apply(originalCallable, [this || window].concat(args));
            var duration = Date.now() - start;
            exports.log("Profile end " + name + " took " + duration + " ms.");
            return result;
        };
    }
    return descriptor;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILGlDQUEyQztBQUU5QixRQUFBLEdBQUcsR0FBRyxVQUFDLE9BQWU7SUFBRSxjQUFjO1NBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztRQUFkLDZCQUFjOztJQUM5QyxFQUFFLENBQUMsQ0FBQyxjQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxRQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsUUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWixPQUFPLENBQUMsR0FBRyxPQUFYLE9BQU8sR0FBSyxPQUFPLFNBQUssSUFBSSxHQUFFO1FBQ25DLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNOLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRjs7R0FFRztBQUNVLFFBQUEsT0FBTyxHQUFHLFVBQUMsTUFBVyxFQUFFLFdBQW1CLEVBQUUsVUFBOEI7SUFFbkYsZUFBZTtJQUNmLE1BQU0sQ0FBQyxrQkFBVSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0FBRXRGLENBQUMsQ0FBQztBQUVGLDZEQUE2RDtBQUM3RCxJQUFNLHNCQUFzQixHQUN4QixPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFFL0UsSUFBTSxjQUFjLEdBQUcsVUFBQyxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtJQUVuRixJQUFJLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDeEMsa0JBQWtCO0lBQ2xCLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLElBQUksSUFBSSxvQkFBb0IsQ0FBQztJQUV6RCxFQUFFLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFTLElBQVc7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksT0FBckIsZ0JBQWdCLEdBQU0sSUFBSSxJQUFJLE1BQU0sU0FBSyxJQUFJLEVBQUMsQ0FBQztZQUM1RCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFJLElBQUksY0FBUyxRQUFRLFFBQUssQ0FBQyxDQUFDO1lBQzNDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQyxLQUFLLEdBQUcsVUFBUyxJQUFXO1lBQ2xDLFdBQUcsQ0FBQyxtQkFBaUIsSUFBTSxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksT0FBckIsZ0JBQWdCLEdBQU0sSUFBSSxJQUFJLE1BQU0sU0FBSyxJQUFJLEVBQUMsQ0FBQztZQUM1RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLFdBQUcsQ0FBQyxpQkFBZSxJQUFJLGNBQVMsUUFBUSxTQUFNLENBQUMsQ0FBQztZQUNoRCxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ25CLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XHJcbiAqIGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxyXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxyXG4gKiBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtJU19MT0csIElTX1BST0ZJTEV9IGZyb20gJy4vZmxhZ3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZyA9IChtZXNzYWdlOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgaWYgKElTX0xPRykge1xyXG4gICAgICAgICAgbGV0IGxlbmd0aCA9IGFyZ3MgPyBhcmdzLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlLCAuLi5hcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIGRlY29yYXRvciB0aGF0IGNhbiBwcm9maWxlIGEgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZSA9ICh0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB7XHJcblxyXG4gICAgIC8vIHJldHVybiBhcy1pc1xyXG4gICAgIHJldHVybiBJU19QUk9GSUxFID8gcGVyZm9ybVByb2ZpbGUodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcikgOiBkZXNjcmlwdG9yO1xyXG5cclxufTtcclxuXHJcbi8vIGNoZWNrIHRvIHNlZSBpZiBuYXRpdmUgc3VwcG9ydCBmb3IgcHJvZmlsaW5nIGlzIGF2YWlsYWJsZS5cclxuY29uc3QgTkFUSVZFX1BST0ZJTEVfU1VQUE9SVCA9XHJcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhIXdpbmRvdy5wZXJmb3JtYW5jZSAmJiAhIWNvbnNvbGUucHJvZmlsZTtcclxuXHJcbmNvbnN0IHBlcmZvcm1Qcm9maWxlID0gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHtcclxuXHJcbiAgICAgbGV0IG9yaWdpbmFsQ2FsbGFibGUgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgIC8vIG5hbWUgbXVzdCBleGlzdFxyXG4gICAgIGxldCBuYW1lID0gb3JpZ2luYWxDYWxsYWJsZS5uYW1lIHx8ICdhbm9ueW1vdXMgZnVuY3Rpb24nO1xyXG5cclxuICAgICBpZiAoTkFUSVZFX1BST0ZJTEVfU1VQUE9SVCkge1xyXG4gICAgICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKGFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUucHJvZmlsZShuYW1lKTtcclxuICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG9yaWdpbmFsQ2FsbGFibGUuY2FsbCh0aGlzIHx8IHdpbmRvdywgLi4uYXJncyk7XHJcbiAgICAgICAgICAgICAgIGxldCBkdXJhdGlvbiA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gdG9vayAke2R1cmF0aW9ufSBtc2ApO1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLnByb2ZpbGVFbmQoKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH07XHJcbiAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbihhcmdzOiBhbnlbXSkge1xyXG4gICAgICAgICAgICAgICBsb2coYFByb2ZpbGUgc3RhcnQgJHtuYW1lfWApO1xyXG4gICAgICAgICAgICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gb3JpZ2luYWxDYWxsYWJsZS5jYWxsKHRoaXMgfHwgd2luZG93LCAuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xyXG4gICAgICAgICAgICAgICBsb2coYFByb2ZpbGUgZW5kICR7bmFtZX0gdG9vayAke2R1cmF0aW9ufSBtcy5gKTtcclxuICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgIH07XHJcbiAgICAgfVxyXG5cclxuICAgICByZXR1cm4gZGVzY3JpcHRvcjtcclxufTtcclxuIl19