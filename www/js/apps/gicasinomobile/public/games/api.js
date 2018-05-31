!(function (a) {
    a.gameflexExpressBootstrap = {
        expressLibraryModuleBuilder: null,
        expressHelperClass: null,
        gameflexGameLaunchApiAdapterBuilder: null,
        geoClassBuilders: {},
        geoClasses: {},
        widgetClassBuilders: {},
        widgetClasses: {},
        desktopProviderClassBuilders: {},
        desktopProviderClasses: {},
        mobileProviderClassBuilders: {},
        mobileProviderClasses: {},
        initialise(b) {
            a.gameflexExpressLibrary = this.expressLibraryModuleBuilder(b), delete a.gameflexExpressBootstrap;
        }
    };
})(window), (function (a) {
    a.gameflexGameLaunchApiAdapterBuilder = function (a) {
        function b() {
            this.getGameProviderListDesktop = function (a, b, e) {
                let f = d + 'games/getGameProvidersDesktop', g = {languagecode: a};

                c.ajax(f, {data: g}, b, e);
            }, this.getGameProviderListMobile = function (a, b, e) {
                let f = d + 'games/getGameProvidersMobile', g = {languagecode: a};

                c.ajax(f, {data: g}, b, e);
            }, this.getGameListDesktop = function (a, b, e, f) {
                let g = d + 'games/getGameListDesktop', h = {languagecode: a, gameproviderid: b};

                c.ajax(g, {data: h}, e, f);
            }, this.getGameListMobile = function (a, b, e, f) {
                let g = d + 'games/getGameListMobile', h = {languagecode: a, gameproviderid: b};

                c.ajax(g, {data: h}, e, f);
            };
        }

        var c = a.expressHelper, d = a.apiUrl;

        return new b();
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.balanceClass = function (a) {
        function b(a) {
            let b = (a.geo, a.widget), d = a.state;

            this.reload = function () {
                d.features.game.balance.canReloadBalance && b.postMessage(c, 'reload', {});
            };
        }

        var c = (a.expressHelper, 'geo.game.balance');

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.definitionClass = function (a) {
        function b(a) {
            const b = (a.geo, a.state);

            b.game.definition = {
                gameID: a.launchResult.gameParameters.GameID,
                gameProviderID: a.launchResult.gameParameters.GameProviderID,
                title: a.launchResult.gameParameters.Title
            }, this.get = function () {
                return b.game.definition;
            };
        }

        a.expressHelper;
        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.dimensionsClass = function (a) {
        function b(a) {
            function b(b) {
                if (c.isGameMessage(b, a.gameflexOriginUrl, f, a.widgetName)) {
                    const h = b.data.message;

                    switch (b.data.key) {
                        case 'dimensions-changed':
                            e.game.dimensions = {
                                aspectRatio: h.AspectRatio,
                                defaultWidth: h.DefaultWidth,
                                defaultHeight: h.DefaultHeight,
                                minimumWidth: h.MinimumWidth,
                                minimumHeight: h.MinimumHeight,
                                maximumWidth: h.MaximumWidth,
                                maximumHeight: h.MaximumHeight
                            }, g && g({dimensions: this.get(), gameflexEngageObject: d});
                    }
                }
            }

            var d = a.geo, e = a.state, f = 'geo.game.dimensions';

            e.game.dimensions = {
                aspectRatio: a.launchResult.gameParameters.AspectRatio,
                defaultWidth: a.launchResult.gameParameters.DefaultWidth,
                defaultHeight: a.launchResult.gameParameters.DefaultHeight,
                minimumWidth: a.launchResult.gameParameters.MinimumWidth,
                minimumHeight: a.launchResult.gameParameters.MinimumHeight,
                maximumWidth: a.launchResult.gameParameters.MaximumWidth,
                maximumHeight: a.launchResult.gameParameters.MaximumHeight
            };
            var g = null;

            this.get = function () {
                return e.game.dimensions;
            }, this.resize = function () {
            }, this.events = {
                attachChangeListener(a) {
                    g = a;
                }
            }, window.addEventListener('message', c.proxy(b, this), !1);
        }

        var c = a.expressHelper;

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.gameClass = function (b) {
        function c(b) {
            const c = (b.geo, b.state);

            c.game = {}, this.definition = new a.geoClasses.definitionClass(b), this.dimensions = new a.geoClasses.dimensionsClass(b), this.balance = new a.geoClasses.balanceClass(b);
        }

        b.expressHelper;
        return c;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.featuresClass = function (a) {
        function b(a) {
            const b = (a.geo, a.state);

            b.features = c.extend({}, d), this.get = function () {
                return b.features;
            };
        }

        var c = a.expressHelper, d = {game: {balance: {canReloadBalance: !1}, dimensions: {canResize: !0}}};

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.geoClassBuilders.gameflexEngageObjectClass = function (b) {
        function c(b) {
            let c = {}, e = d.extend({}, b, {geo: this, state: c});

            this.features = new a.geoClasses.featuresClass(e), this.game = new a.geoClasses.gameClass(e);
        }

        var d = b.expressHelper;

        return c;
    };
})(window.gameflexExpressBootstrap), (function (a, b) {
    b.expressHelperClass = (function () {
        function b(b) {
            this.proxy = a.proxy, this.extend = a.extend, this.createIframe = function (b) {
                const c = a('<iframe />', b);

                return c.get()[0];
            }, this.removeElement = function (b) {
                a(b).remove();
            }, this.append = function (b, c) {
                a(b).append(c);
            }, this.isGameMessage = function (a, b, c, d) {
                return a.origin === b && a.data.message && a.data.namespace && a.data.key && a.data.namespace === c && a.data.message.windowName === d ? !0 : !1;
            }, this.ajax = function (b, c, d, e) {
                let f = a.extend({type: 'GET', dataType: 'jsonp', timeout: 3e4, cache: !1}, c), g = a.ajax(b, f);

                return d && g.done(d), e && g.fail(e), g;
            }, this.getScript = function (b, c, d) {
                d || (d = !0);
                const e = a.ajax(b, {type: 'GET', dataType: 'script', cache: d});

                return e.done(c), e;
            };
        }

        return b;
    })();
})(jQuery, window.gameflexExpressBootstrap), (function (a) {
    a.desktopProviderClassBuilders.embeddedGameObjectProvider = function (a) {
        function b(a) {
            let b = a.launchParameters, c = a.engageObject;

            a.launchResult;
            this.render = function () {
                b.success(c, b);
            };
        }

        a.expressHelper;
        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.desktopProviderClassBuilders.betGamesTvProvider = function (a) {
        function b(a) {
            let b = a.launchParameters, d = a.engageObject, e = a.launchResult;

            this.render = function () {
                var a = a || [];

                a.push(['server', e.gameParameters.ProductionServer]), a.push(['partner', e.gameParameters.PartnerCode]), a.push(['token', e.gameParameters.SessionToken]), a.push(['language', e.gameParameters.LanguageCode]), a.push(['timezone', e.gameParameters.TimeZone]), a.push(['is_mobile', e.gameParameters.IsMobile]), c.getScript(e.gameParameters.ProductionServer + '/design/client/js/betgames.js', function () {
                    c.append(b.gameContainer, '<div id="betgames_div_iframe"></div>'), BetGames.frame(a), b.success(d, b);
                });
            };
        }

        var c = a.expressHelper;

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.desktopProviderClassBuilders.providerFactory = function (b) {
        function c() {
            this.create = function (b, c) {
                switch (b) {
                    case 38:
                        return new a.desktopProviderClasses.betGamesTvProvider(c);
                    default:
                        return new a.desktopProviderClasses.embeddedGameObjectProvider(c);
                }
            };
        }

        b.expressHelper;
        return new c();
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.widgetClassBuilders.desktop = function (b) {
        function c(b) {
            function c(a) {
                return v ? !1 : (v = !0, x = a, !0);
            }

            function e() {
                const a = h('sessionTicket');

                o = s.createIframe(a), o.style.display = 'none', s.append(x.gameContainer, o);
            }

            function f() {
                const a = h('sessionToken');

                o = s.createIframe(a), o.style.display = 'none', s.append(x.gameContainer, o);
            }

            function g() {
                const a = h('guest');

                o = s.createIframe(a), o.style.display = 'none', s.append(x.gameContainer, o);
            }

            function h(a) {
                let b = i(), c = r.getConfiguration(), d = c.controllersUrl;

                d += a + '/?', d += 'platformkey=' + c.platformKey, d += '&brandid=' + c.brandID, d += '&languagecode=' + x.languageCode, d += '&channelid=Desktop', d += '&gameid=' + x.gameID, d += '&mode=' + x.mode, x.sessionToken && (d += '&sessiontoken=' + x.sessionToken), x.sessionTicket && (d += '&sessionticket=' + x.sessionTicket), x.currencyCode && (d += '&currencycode=' + x.currencyCode), c.domainLaunchUrl && (d += '&domainlaunchurl=' + c.domainLaunchUrl), x.widgetLaunchApiUrl && (d += '&widgetlaunchapiurl=' + x.widgetLaunchApiUrl), d += '&domainoriginurl=' + c.operatorOriginUrl, d += '&options=' + encodeURIComponent(JSON.stringify(b)), console.log(d);
                const e = {id: q, name: q, src: d, width: 10, height: 10, scrolling: 'no', frameborder: 0};

                return e;
            }

            function i() {
                let a = {}, b = $.extend({}, d);

                return x.timeZone && (b.TimeZone = x.timeZone), a.gameLaunchApiParameters = b, a;
            }

            function j(a) {
                l(a);
                const b = w.create(a.gameParameters.GameProviderID, {
                    launchParameters: x,
                    launchResult: a,
                    engageObject: u
                });

                b.render();
            }

            function k(a) {
                o && s.removeElement(o), x.error(a, x);
            }

            function l(a) {
                if (!u) {
                    let b = r.getConfiguration(), c = new t({
                        widgetID: p,
                        widgetName: q,
                        widget: n,
                        launchResult: a,
                        gameflexOriginUrl: b.gameflexOriginUrl
                    });

                    u = c;
                }
            }

            function m(a) {
                const b = r.getConfiguration();

                if (a.origin === b.gameflexOriginUrl && r.isControllerMessage(a.data) && a.data.message.windowName === q) {
                    switch (a.data.key) {
                        case 'desktop-game-launch-success':
                            j(a.data.message);
                            break;
                        case 'game-launch-error':
                            k(a.data.message.errors);
                            break;
                        case 'loader-error':
                            k();
                    }
                }
            }

            var n = this, o = null, p = b.widgetID, q = 'GameflexWidget-' + p, r = b.expressLibrary, s = b.expressHelper, t = b.engageObjectClass, u = null, v = !1, w = a.desktopProviderClasses.providerFactory, x = null;

            this.launchBySessionTicket = function (a) {
                c(a) && e();
            }, this.launchBySessionToken = function (a) {
                c(a) && f();
            }, this.launchGuest = function (a) {
                c(a) && g();
            }, this.postMessage = function (a, b, c) {
                const d = {namespace: a, key: b, message: c};

                o && o.contentWindow && o.contentWindow.postMessage(d, r.getConfiguration().gameflexOriginUrl);
            }, window.addEventListener('message', m, !1);
        }

        var d = (b.expressHelper, {
            TimeZone: (function () {
                let a = (new Date()).getTimezoneOffset();

                return a = -1 * a, a /= 60, a.toString();
            })()
        });

        return c;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.mobileProviderClassBuilders.defaultRedirectProvider = function (a) {
        function b(a) {
            const b = (a.launchParameters, a.launchResult);

            this.render = function () {
                window.location.href = b.gameParameters.Url;
            };
        }

        a.expressHelper;
        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.mobileProviderClassBuilders.betGamesTvProvider = function (a) {
        function b(a) {
            const b = (a.launchParameters, a.launchResult);

            this.render = function () {
                var a = a || [];

                a.push(['server', b.gameParameters.ProductionServer]), a.push(['partner', b.gameParameters.PartnerCode]), a.push(['token', b.gameParameters.SessionToken]), a.push(['language', b.gameParameters.LanguageCode]), a.push(['timezone', b.gameParameters.TimeZone]), a.push(['is_mobile', b.gameParameters.IsMobile]), c.getScript(b.gameParameters.ProductionServer + '/design/client/js/betgames.js', function () {
                    BetGames.frame(a);
                });
            };
        }

        var c = a.expressHelper;

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.mobileProviderClassBuilders.netEntProvider = function (a) {
        function b(a) {
            let b = a.launchParameters, d = a.launchResult, e = d.gameParameters, f = null;

            this.render = function () {
                c.getScript(e.GameInclusionConfiguration.StaticServer + '/gameinclusion/library/gameinclusion.js').done($.proxy(this.callbacks.inclusionLibraryLoaded, this)), f = window.setTimeout($.proxy(this.callbacks.checkInclusionScriptLoadedCallback, this), 3e3);
            }, this.launchUsingInclusion = function () {
                let a = e.GameInclusionConfiguration, b = {
                    gameId: a.GameCode,
                    sessionId: a.SessionID,
                    staticServer: a.StaticServer,
                    gameServer: a.GameServer,
                    language: a.LanguageCode,
                    walletMode: a.WalletMode,
                    mobileParams: {lobbyUrl: a.LobbyUrl, depositAvailable: a.DepositAvailable}
                };

                window.netent.launch(b, $.proxy(this.callbacks.inclusionGameLaunchSuccess, this), $.proxy(this.callbacks.inclusionGameLaunchError, this));
            }, this.notifyError = function (a) {
                b.error(a);
            }, this.callbacks = {
                inclusionLibraryLoaded(a, b, c) {
                    window.clearTimeout(f), window.netent ? this.launchUsingInclusion() : this.notifyError();
                }, inclusionGameLaunchSuccess(a) {
                }, inclusionGameLaunchError(a) {
                    const b = [];

                    a.code && b.push({
                        Description: 'Error Code: ' + a.code,
                        Code: 'GameInclusionErrorCode'
                    }), a.message && b.push({
                        Description: ' Message: ' + a.message,
                        Code: 'GameInclusionMessage'
                    }), this.notifyError(b);
                }, checkInclusionScriptLoadedCallback() {
                    this.notifyError();
                }
            };
        }

        var c = a.expressHelper;

        return b;
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.mobileProviderClassBuilders.providerFactory = function (b) {
        function c() {
            this.create = function (b, c) {
                switch (b) {
                    case 7:
                        return new a.mobileProviderClasses.netEntProvider(c);
                    case 38:
                        return new a.mobileProviderClasses.betGamesTvProvider(c);
                    default:
                        return new a.mobileProviderClasses.defaultRedirectProvider(c);
                }
            };
        }

        b.expressHelper;
        return new c();
    };
})(window.gameflexExpressBootstrap), (function (a) {
    a.widgetClassBuilders.mobile = function (b) {
        function c(b) {
            function c(a) {
                return s ? !1 : (s = !0, t = a, !0);
            }

            function e() {
                const a = h('sessionTicket');

                m = q.createIframe(a), m.style.display = 'none', q.append(t.gameContainer, m);
            }

            function f() {
                const a = h('sessionToken');

                m = q.createIframe(a), m.style.display = 'none', q.append(t.gameContainer, m);
            }

            function g() {
                const a = h('guest');

                m = q.createIframe(a), m.style.display = 'none', q.append(t.gameContainer, m);
            }

            function h(a) {
                let b = i(), c = p.getConfiguration(), d = c.controllersUrl;

                d += a + '/?', d += 'brandid=' + c.brandID, d += '&languagecode=' + t.languageCode, d += '&channelid=Mobile', d += '&gameid=' + t.gameID, d += '&mode=' + t.mode, t.sessionToken && (d += '&sessiontoken=' + t.sessionToken), t.sessionTicket && (d += '&sessionticket=' + t.sessionTicket), t.currencyCode && (d += '&currencycode=' + t.currencyCode), c.domainLaunchUrl && (d += '&domainlaunchurl=' + c.domainLaunchUrl), t.widgetLaunchApiUrl && (d += '&widgetlaunchapiurl=' + t.widgetLaunchApiUrl), d += '&domainoriginurl=' + c.operatorOriginUrl, d += '&lobbyurl=' + t.lobbyUrl, t.cashierUrl && (d += '&cashierurl=' + t.cashierUrl), d += '&options=' + encodeURIComponent(JSON.stringify(b));
                const e = {id: o, name: o, src: d, width: 10, height: 10, scrolling: 'no', frameborder: 0};

                return e;
            }

            function i() {
                let a = {}, b = $.extend({}, d);

                return t.timeZone && (b.TimeZone = t.timeZone), a.gameLaunchApiParameters = b, a;
            }

            function j(a) {
                const b = r.create(a.gameParameters.GameProviderID, {launchParameters: t, launchResult: a});

                b.render();
            }

            function k(a) {
                m && q.removeElement(m), t.error(a, t);
            }

            function l(a) {
                const b = p.getConfiguration();

                if (a.origin === b.gameflexOriginUrl && p.isControllerMessage(a.data) && a.data.message.windowName === o) {
                    switch (a.data.key) {
                        case 'mobile-game-launch-success':
                            j(a.data.message);
                            break;
                        case 'game-launch-error':
                            k(a.data.message.errors);
                            break;
                        case 'loader-error':
                            k();
                    }
                }
            }

            var m = null, n = b.widgetID, o = 'GameflexWidget-' + n, p = b.expressLibrary, q = b.expressHelper, r = a.mobileProviderClasses.providerFactory, s = !1, t = null;

            this.launchBySessionTicket = function (a) {
                c(a) && e();
            }, this.launchBySessionToken = function (a) {
                c(a) && f();
            }, this.launchGuest = function (a) {
                c(a) && g();
            }, window.addEventListener('message', l, !1);
        }

        var d = (b.expressHelper, {
            TimeZone: (function () {
                let a = (new Date()).getTimezoneOffset();

                return a = -1 * a, a /= 60, a.toString();
            })()
        });

        return c;
    };
})(window.gameflexExpressBootstrap), (function (a, b) {
    b.expressLibraryModuleBuilder = function (a) {
        function c() {
            let b = a.gameflexOriginUrl;

            b.substr(-1) === '/' && (b = b.substr(0, b.length - 1));
            let c = a.operatorOriginUrl;

            c.substr(-1) === '/' && (c = c.substr(0, c.length - 1)), j.platformKey = a.platformKey, j.brandID = a.brandID, j.controllersUrl = a.controllersUrl, j.gameflexOriginUrl = b, j.operatorOriginUrl = c, j.domainLaunchUrl = a.domainLaunchUrl, j.apiUrl = a.apiUrl;
            const f = {
                getConfiguration() {
                    return j;
                }, isControllerMessage(a) {
                    return g(a);
                }
            };

            this.gameProviders = new function () {
                this.getListDesktop = function (a) {
                    i.gameflexGameLaunchApiAdapter.getGameProviderListDesktop(a.languageCode, a.success, a.error);
                }, this.getListMobile = function (a) {
                    i.gameflexGameLaunchApiAdapter.getGameProviderListMobile(a.languageCode, a.success, a.error);
                };
            }(), this.games = new function () {
                this.getListDesktop = function (a) {
                    i.gameflexGameLaunchApiAdapter.getGameListDesktop(a.languageCode, a.gameProviderID, a.success, a.error);
                }, this.getListMobile = function (a) {
                    i.gameflexGameLaunchApiAdapter.getGameListMobile(a.languageCode, a.gameProviderID, a.success, a.error);
                }, this.launchDesktopForRealBySessionToken = function (a) {
                    const b = d(f);

                    a.mode = 'Real', b.launchBySessionToken(a);
                }, this.launchDesktopForFunBySessionToken = function (a) {
                    const b = d(f);

                    a.mode = 'Fun', b.launchBySessionToken(a);
                }, this.launchMobileForRealBySessionToken = function (a) {
                    const b = e(f);

                    a.mode = 'Real', b.launchBySessionToken(a);
                }, this.launchMobileForFunBySessionToken = function (a) {
                    const b = e(f);

                    a.mode = 'Fun', b.launchBySessionToken(a);
                }, this.launchDesktopForRealBySessionTicket = function (a) {
                    const b = d(f);

                    a.mode = 'Real', b.launchBySessionTicket(a);
                }, this.launchDesktopForFunBySessionTicket = function (a) {
                    const b = d(f);

                    a.mode = 'Fun', b.launchBySessionTicket(a);
                }, this.launchMobileForRealBySessionTicket = function (a) {
                    const b = e(f);

                    a.mode = 'Real', b.launchBySessionTicket(a);
                }, this.launchMobileForFunBySessionTicket = function (a) {
                    const b = e(f);

                    a.mode = 'Fun', b.launchBySessionTicket(a);
                }, this.launchDesktopForFun = function (a) {
                    const b = d(f);

                    a.mode = 'Fun', b.launchGuest(a);
                }, this.launchMobileForFun = function (a) {
                    const b = e(f);

                    a.mode = 'Fun', b.launchGuest(a);
                };
            }();
        }

        function d(a) {
            let b = h(), c = new i.widgetClasses.desktop({
                widgetID: b,
                expressLibrary: a,
                expressHelper: i.expressHelper,
                engageObjectClass: i.engageObjectClass
            });

            return f(b, c), c;
        }

        function e(a) {
            let b = h(), c = new i.widgetClasses.mobile({
                widgetID: b,
                expressLibrary: a,
                expressHelper: i.expressHelper,
                engageObjectClass: i.engageObjectClass
            });

            return f(b, c), c;
        }

        function f(a, b) {
            i.widgets[a] = b;
        }

        function g(a) {
            return a && a.namespace && a.key && a.namespace === 'gel.controller' ? !0 : !1;
        }

        function h() {
            return i.widgetID++, i.widgetID;
        }

        var i = {
                widgetID: 0,
                widgetClasses: null,
                expressHelper: null,
                engageObjectClass: null,
                gameflexGameLaunchApiAdapter: null,
                widgets: {}
            }, j = {
                platformKey: null,
                brandID: null,
                controllersUrl: null,
                gameflexOriginUrl: null,
                operatorOriginUrl: null,
                apiUrl: null
            };

        i.widgetClasses = b.widgetClasses, i.expressHelper = new b.expressHelperClass(), i.gameflexGameLaunchApiAdapter = new b.gameflexGameLaunchApiAdapterBuilder({
            expressHelper: i.expressHelper,
            apiUrl: a.apiUrl
        });
        for (var k in b.geoClassBuilders) {
            if (b.geoClassBuilders.hasOwnProperty(k)) {
                const l = b.geoClassBuilders[k];

                b.geoClasses[k] = l({expressHelper: i.expressHelper});
            }
        }
        for (k in b.widgetClassBuilders) {
            if (b.widgetClassBuilders.hasOwnProperty(k)) {
                const m = b.widgetClassBuilders[k];

                b.widgetClasses[k] = m({expressHelper: i.expressHelper});
            }
        }
        for (k in b.desktopProviderClassBuilders) {
            if (b.desktopProviderClassBuilders.hasOwnProperty(k)) {
                const n = b.desktopProviderClassBuilders[k];

                b.desktopProviderClasses[k] = n({expressHelper: i.expressHelper});
            }
        }
        for (k in b.mobileProviderClassBuilders) {
            if (b.mobileProviderClassBuilders.hasOwnProperty(k)) {
                const o = b.mobileProviderClassBuilders[k];

                b.mobileProviderClasses[k] = o({expressHelper: i.expressHelper});
            }
        }
        i.engageObjectClass = b.geoClasses.gameflexEngageObjectClass;
        const p = new c();

        return p;
    };
})(window, window.gameflexExpressBootstrap);
