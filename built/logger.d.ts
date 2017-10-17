export declare const log: (message: string, ...args: any[]) => void;
/**
 * A decorator that can profile a function.
 */
export declare const profile: (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
