import { WebPlugin } from '@capacitor/core';
import { AppleLoginPlugin } from './definitions';
export declare class AppleLoginWeb extends WebPlugin implements AppleLoginPlugin {
    constructor();
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}
declare const AppleLogin: AppleLoginWeb;
export { AppleLogin };
