import { AuthorizationRequest } from './authorization_request';
import { AuthorizationError, AuthorizationResponse } from './authorization_response';
import { AuthorizationServiceConfiguration } from './authorization_service_configuration';
import { QueryStringUtils } from './query_string_utils';
/**
 * Generates a random number.
 */
export declare function generateRandom(): string;
/**
 * Represents a structural type holding both authorization request and response.
 */
export interface AuthorizationRequestResponse {
    request: AuthorizationRequest;
    response: AuthorizationResponse | null;
    error: AuthorizationError | null;
}
export declare const BUILT_IN_PARAMETERS: string[];
/**
 * Defines the interface which is capable of handling an authorization request
 * using various methods (iframe / popup / different process etc.).
 */
export declare abstract class AuthorizationRequestHandler {
    utils: QueryStringUtils;
    constructor(utils: QueryStringUtils);
    /**
     * A utility method to be able to build the authorization request URL.
     */
    protected buildRequestUrl(configuration: AuthorizationServiceConfiguration, request: AuthorizationRequest): string;
    /**
     * Makes an authorization request.
     */
    abstract performAuthorizationRequest(configuration: AuthorizationServiceConfiguration, request: AuthorizationRequest): Promise<AuthorizationRequestResponse>;
}
