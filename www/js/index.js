// @flow

import {start as singleSpaStart, registerApplication} from 'single-spa';
import {type ModuleType} from './../flow-types/single-spa';
import {pathPrefix} from './helper';

registerApplication(
    'euroweb-mobile',
    (): Promise<ModuleType> => import('./apps/euroweb-mobile/app-loader.js'),
    pathPrefix('/euroweb-mobile')
);

registerApplication(
    'gicasinomobile',
    (): Promise<ModuleType> => import('./apps/gicasinomobile/app-loader.js'),
    pathPrefix('/gicasinomobile')
);

singleSpaStart();

console.log('SingleSpa has been started...');
