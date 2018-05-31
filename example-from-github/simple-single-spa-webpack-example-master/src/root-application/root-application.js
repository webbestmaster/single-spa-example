import * as singleSpa from 'single-spa';

function pathPrefix(prefix) {
    return function (location) {
        return location.pathname.startsWith(`${prefix}`);
    }
}

singleSpa.registerApplication('app-1', () =>
    import ('../app1/app1.js'), pathPrefix('/app1'));
singleSpa.registerApplication('app-2', () =>
    import ('../app2/app2.js'), pathPrefix('/app2'));
singleSpa.registerApplication('app-3', () =>
    import ('../app3/app3.js'), pathPrefix('/app3'));

singleSpa.start();

