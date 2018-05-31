!(function () {
    function a(a, b) {
        return a ? (b ? a.substr(-1) === '/' && (a = a.substr(0, a.length - 1)) : a.substr(-1) !== '/' && (a += '/'), a) : null;
    }

    let b = 'v1', c = 'media/1-3-25/@@VERSION/scripts/', d = 'media/1-3-25/@@VERSION/scripts/express/gameflexExpressLibrary', e = (function () {
            function a(a) {
                return a && a.attributes.src && a.attributes.src.value.indexOf('gameflexExpressLibraryLoader') != -1 ? !0 : !1;
            }

            var b = document.currentScript;

            if (a(b)) {
                return b;
            }
            for (let c = document.getElementsByTagName('script'), d = 0; d < c.length; d++) {
                var b = c[d];

                if (a(b)) {
                    return b;
                }
            }
            return null;
        })(), f = null;

    if (e) {
        const g = e.attributes.src;

        f = g.value.split('?')[0], f = f.replace(new RegExp('express/gameflexExpressLibraryLoader.js', 'g'), ''), f = a(f);
    }
    const h = ['express/gameflexExpressBootstrap.js', 'express/adapters/gameflexGameLaunchApiAdapter.js', 'express/engage/game/balance.js', 'express/engage/game/definition.js', 'express/engage/game/dimensions.js', 'express/engage/game/game.js', 'express/engage/features.js', 'express/engage/gameflexEngageObject.js', '%gameflexExpressHelper%', 'express/widgets/desktop/providers/embeddedGameObjectProvider.js', 'express/widgets/desktop/providers/betGamesTvProvider.js', 'express/widgets/desktop/providers/providerFactory.js', 'express/widgets/desktop/desktop.js', 'express/widgets/mobile/providers/defaultRedirectProvider.js', 'express/widgets/mobile/providers/betGamesTvProvider.js', 'express/widgets/mobile/providers/netEntProvider.js', 'express/widgets/mobile/providers/providerFactory.js', 'express/widgets/mobile/mobile.js', 'express/gameflexExpressLibrary.js', 'config/environmentConfig.js'];

    window.gameflexExpressLibraryLoader = {
        load(e) {
            function g() {
                function a(a) {
                    return $.ajax(a, {type: 'GET', dataType: 'script', cache: !0});
                }

                if (e.debug) {
                    for (var b = [], c = 0; c < h.length; c++) {
                        let d = h[c];

                        d === '%gameflexExpressHelper%' && (d = n('express/gameflexExpressHelper')), b.push(a(o(f, d)));
                    }
                    const g = $.when(...b);

                    g.done(function () {
                        i();
                    });
                } else {
                    const j = a(t);

                    j.done(function (b, c, d) {
                        const e = a(o(f, 'config/environmentConfig.js'));

                        e.done(function (a, b, c) {
                            i();
                        });
                    });
                }
            }

            function i() {
                const a = m(window.gameflexExpressBootstrap.environmentConfiguration.internalApi.baseUrl);

                window.gameflexExpressBootstrap.initialise({
                    platformKey: e.platformKey,
                    brandID: e.brandID,
                    gameflexOriginUrl: r,
                    operatorOriginUrl: s,
                    domainLaunchUrl: p,
                    controllersUrl: q,
                    apiUrl: a
                });
            }

            function j(a) {
                let b = a.indexOf('://') + 3, c = a.substring(0, b), d = a.substring(b).split('/')[0];

                return c + d;
            }

            function k() {
                return window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
            }

            function l(a) {
                let c = d.replace(new RegExp('@@VERSION', 'g'), b);

                return window.jQuery && window.$ && window.jQuery === window.$ && (c += '-jQuery.js'), a + c;
            }

            function m(a) {
                return a.substr(0, 1) === '/' ? r + a : a;
            }

            function n(a) {
                return window.jQuery && window.$ && window.jQuery === window.$ && (a += '-jQuery.js'), a;
            }

            function o(a, d) {
                const e = c.replace(new RegExp('@@VERSION', 'g'), b);

                return a + e + d;
            }

            if (e.version && (b = e.version), !f) {
                if (!e.libraryUrl) {
                    throw 'Invalid Gameflex Express configuration.  libraryUrl is required';
                }
                f = a(e.libraryUrl);
            }
            var p = a(e.domainLaunchUrl), q = p;

            q || (q = f), q = a(q + b + '/controllers'), p && (p = a(p + b + '/controllers/games'));
            var r = j(q), s = k(q), t = l(f);

            if (e.debug && (console.log('domainLaunchUrl = %s', p), console.log('librariesUrl = %s', f), console.log('controllersUrl = %s', q), console.log('gameflexOriginUrl = %s', r), console.log('operatorOriginUrl = %s', s), console.log('expressLibraryUrl = %s', t)), !window.jQuery || !window.$ || window.jQuery !== window.$) {
                throw 'UI Library Not Supported';
            }
            g();
        }
    };
})();
