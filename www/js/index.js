// @flow

import {start as singleSpaStart, registerApplication} from 'single-spa';
import {type ModuleType} from './../types/single-spa';
import {pathPrefix} from './helper';

registerApplication(
    'app-1',
    (): Promise<ModuleType> => import('./app-1/app-loader.js'),
    pathPrefix('/app-1')
);

singleSpaStart();

console.log('++');
