import { WebPlugin } from '@capacitor/core';
import { AppleLoginPlugin } from './definitions';

export class AppleLoginWeb extends WebPlugin implements AppleLoginPlugin {
  constructor() {
    super({
      name: 'AppleLogin',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const AppleLogin = new AppleLoginWeb();

export { AppleLogin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AppleLogin);
