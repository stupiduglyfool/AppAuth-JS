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
var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var DEFAULT_SIZE = 1; /** size in bytes */
var HAS_CRYPTO = typeof window !== 'undefined' && !!window.crypto;
var IS_NODE = typeof process === 'object';
function generateRandom(sizeInBytes) {
    if (sizeInBytes === void 0) { sizeInBytes = DEFAULT_SIZE; }
    var buffer = new Uint8Array(sizeInBytes);
    if (HAS_CRYPTO) {
        window.crypto.getRandomValues(buffer);
    }
    else if (IS_NODE) {
        // warning: implicit any
        var crypto_1 = require('crypto');
        var bytes = crypto_1.randomBytes(sizeInBytes);
        // copy
        for (var i = 0; i < bytes.length; i += 1) {
            buffer[i] = bytes[i];
        }
    }
    else {
        // fall back to Math.random() if nothing else is available
        for (var i = 0; i < sizeInBytes; i += 1) {
            buffer[i] = Math.random();
        }
    }
    var state = [];
    for (var i = 0; i < sizeInBytes; i += 1) {
        var index = (buffer[i] % CHARSET.length) | 0;
        state.push(CHARSET[index]);
    }
    return state.join('');
}
exports.generateRandom = generateRandom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyeXB0b191dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILElBQU0sT0FBTyxHQUFHLGdFQUFnRSxDQUFDO0FBQ2pGLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtBQUM1QyxJQUFNLFVBQVUsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksQ0FBQyxDQUFFLE1BQU0sQ0FBQyxNQUFjLENBQUM7QUFDN0UsSUFBTSxPQUFPLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDO0FBRTVDLHdCQUErQixXQUFrQztJQUFsQyw0QkFBQSxFQUFBLDBCQUFrQztJQUM1RCxJQUFJLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLHdCQUF3QjtRQUN4QixJQUFJLFFBQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsUUFBTSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1QyxPQUFPO1FBQ1AsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUN0QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDTixDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSCwwREFBMEQ7UUFDMUQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0IsQ0FBQztJQUNOLENBQUM7SUFDRCxJQUFJLEtBQUssR0FBYSxFQUFFLENBQUM7SUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0IsQ0FBQztBQXhCRCx3Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxyXG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGVcclxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbmNvbnN0IENIQVJTRVQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xyXG5jb25zdCBERUZBVUxUX1NJWkUgPSAxOyAvKiogc2l6ZSBpbiBieXRlcyAqL1xyXG5jb25zdCBIQVNfQ1JZUFRPID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISEod2luZG93LmNyeXB0byBhcyBhbnkpO1xyXG5jb25zdCBJU19OT0RFID0gdHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmFuZG9tKHNpemVJbkJ5dGVzOiBudW1iZXIgPSBERUZBVUxUX1NJWkUpIHtcclxuICAgICBsZXQgYnVmZmVyOiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZUluQnl0ZXMpO1xyXG4gICAgIGlmIChIQVNfQ1JZUFRPKSB7XHJcbiAgICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWZmZXIpO1xyXG4gICAgIH0gZWxzZSBpZiAoSVNfTk9ERSkge1xyXG4gICAgICAgICAgLy8gd2FybmluZzogaW1wbGljaXQgYW55XHJcbiAgICAgICAgICBsZXQgY3J5cHRvID0gcmVxdWlyZSgnY3J5cHRvJyk7XHJcbiAgICAgICAgICBsZXQgYnl0ZXMgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZUluQnl0ZXMpO1xyXG4gICAgICAgICAgLy8gY29weVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICBidWZmZXJbaV0gPSBieXRlc1tpXTtcclxuICAgICAgICAgIH1cclxuICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIE1hdGgucmFuZG9tKCkgaWYgbm90aGluZyBlbHNlIGlzIGF2YWlsYWJsZVxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplSW5CeXRlczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgfVxyXG4gICAgIGxldCBzdGF0ZTogc3RyaW5nW10gPSBbXTtcclxuICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVJbkJ5dGVzOyBpICs9IDEpIHtcclxuICAgICAgICAgIGxldCBpbmRleCA9IChidWZmZXJbaV0gJSBDSEFSU0VULmxlbmd0aCkgfCAwO1xyXG4gICAgICAgICAgc3RhdGUucHVzaChDSEFSU0VUW2luZGV4XSk7XHJcbiAgICAgfVxyXG4gICAgIHJldHVybiBzdGF0ZS5qb2luKCcnKTtcclxufVxyXG4iXX0=