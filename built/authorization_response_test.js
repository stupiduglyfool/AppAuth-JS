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
var authorization_response_1 = require("./authorization_response");
describe('Authorization Response Tests', function () {
    var code = 'code';
    var state = 'state';
    it('Constructing an Authorization Response should work', function () {
        var response = new authorization_response_1.AuthorizationResponse(code, state);
        expect(response).not.toBeNull();
        expect(response.code).toBe(code);
        expect(response.state).toBe(state);
    });
    it('toJson() and fromJson() should work', function () {
        var response = new authorization_response_1.AuthorizationResponse(code, state);
        var json = response.toJson();
        expect(json).not.toBeNull();
        expect(json.code).toBe(code);
        expect(json.state).toBe(state);
        var newResponse = authorization_response_1.AuthorizationResponse.fromJson(json);
        expect(newResponse).not.toBeNull();
        expect(newResponse.code).toBe(code);
        expect(newResponse.state).toBe(state);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXphdGlvbl9yZXNwb25zZV90ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2F1dGhvcml6YXRpb25fcmVzcG9uc2VfdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7OztHQVlHOztBQUVILG1FQUErRDtBQUUvRCxRQUFRLENBQUMsOEJBQThCLEVBQUU7SUFFcEMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztJQUV0QixFQUFFLENBQUMsb0RBQW9ELEVBQUU7UUFDcEQsSUFBSSxRQUFRLEdBQUcsSUFBSSw4Q0FBcUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRTtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLDhDQUFxQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN0RCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLFdBQVcsR0FBRyw4Q0FBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQyxDQUFDLENBQUMsQ0FBQztBQUVSLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXHJcbiAqIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyXHJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcblxyXG5pbXBvcnQge0F1dGhvcml6YXRpb25SZXNwb25zZX0gZnJvbSAnLi9hdXRob3JpemF0aW9uX3Jlc3BvbnNlJztcclxuXHJcbmRlc2NyaWJlKCdBdXRob3JpemF0aW9uIFJlc3BvbnNlIFRlc3RzJywgKCkgPT4ge1xyXG5cclxuICAgICBjb25zdCBjb2RlID0gJ2NvZGUnO1xyXG4gICAgIGNvbnN0IHN0YXRlID0gJ3N0YXRlJztcclxuXHJcbiAgICAgaXQoJ0NvbnN0cnVjdGluZyBhbiBBdXRob3JpemF0aW9uIFJlc3BvbnNlIHNob3VsZCB3b3JrJywgKCkgPT4ge1xyXG4gICAgICAgICAgbGV0IHJlc3BvbnNlID0gbmV3IEF1dGhvcml6YXRpb25SZXNwb25zZShjb2RlLCBzdGF0ZSk7XHJcbiAgICAgICAgICBleHBlY3QocmVzcG9uc2UpLm5vdC50b0JlTnVsbCgpO1xyXG4gICAgICAgICAgZXhwZWN0KHJlc3BvbnNlLmNvZGUpLnRvQmUoY29kZSk7XHJcbiAgICAgICAgICBleHBlY3QocmVzcG9uc2Uuc3RhdGUpLnRvQmUoc3RhdGUpO1xyXG4gICAgIH0pO1xyXG5cclxuICAgICBpdCgndG9Kc29uKCkgYW5kIGZyb21Kc29uKCkgc2hvdWxkIHdvcmsnLCAoKSA9PiB7XHJcbiAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBuZXcgQXV0aG9yaXphdGlvblJlc3BvbnNlKGNvZGUsIHN0YXRlKTtcclxuICAgICAgICAgIGxldCBqc29uID0gcmVzcG9uc2UudG9Kc29uKCk7XHJcbiAgICAgICAgICBleHBlY3QoanNvbikubm90LnRvQmVOdWxsKCk7XHJcbiAgICAgICAgICBleHBlY3QoanNvbi5jb2RlKS50b0JlKGNvZGUpO1xyXG4gICAgICAgICAgZXhwZWN0KGpzb24uc3RhdGUpLnRvQmUoc3RhdGUpO1xyXG4gICAgICAgICAgbGV0IG5ld1Jlc3BvbnNlID0gQXV0aG9yaXphdGlvblJlc3BvbnNlLmZyb21Kc29uKGpzb24pO1xyXG4gICAgICAgICAgZXhwZWN0KG5ld1Jlc3BvbnNlKS5ub3QudG9CZU51bGwoKTtcclxuICAgICAgICAgIGV4cGVjdChuZXdSZXNwb25zZS5jb2RlKS50b0JlKGNvZGUpO1xyXG4gICAgICAgICAgZXhwZWN0KG5ld1Jlc3BvbnNlLnN0YXRlKS50b0JlKHN0YXRlKTtcclxuICAgICB9KTtcclxuXHJcbn0pO1xyXG4iXX0=