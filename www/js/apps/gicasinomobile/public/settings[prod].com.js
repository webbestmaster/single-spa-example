window.GLOBAL_CONFIG = {
    SOURCE_NAME: 'CASINO_MOBILE',
    TARGET:
        location.href.indexOf('target=ANDROID') > -1 || navigator.userAgent.indexOf('AndroidWrapper') > -1 ?
            'ANDROID' :
            location.href.indexOf('target=IOS') > -1 || navigator.userAgent.indexOf('iOSWrapper') > -1 ?
                'IOS' :
                'BROWSER',

    /* flag to show log in console
    [PROD] false or commented */
    DEBUG_MODE: false,

    CDN_URL: null,
    CHINESE_COUNTRIES: ['CN', 'HK', 'MO', 'TW'],
    RECAPTCHA_KEY: '6Lf33QcUAAAAAKsRrO62OO0nXfcx8xRp6RXS_ZZz',
    RIGHT_CURRENCIES: ['AMD', 'AZN', 'BYN', 'KZT', 'KGS', 'MDL', 'RUB', 'TMM', 'TJS', 'UAH', 'UZS'],
    DEFAULT_URL_CODE: 'en',
    GAME_ROUND_ENABLED: false,

    EXTERNAL_LINKS: {
        FOOTER_COMPLIANCE: {
            ANTILLEPHONE_LICENCE: 'https://validator.antillephone.com/validate?domain=www.marathonbet.com'
        },
        FOOTER_LINKS: {
            CONTACT_US: '/{LOCALE}/account/contact-us',
            HELP: '/{LOCALE}/account/help',
            PRIVACY: '/{LOCALE}/account/privacy',
            TERMS: '/{LOCALE}/account/terms',
            RESP_GAMBLING: '/{LOCALE}/account/responsible-gambling'
        },
        SOCIAL_NETWORKS: {
            ZH: {
                WEIBO: 'http://weibo.com/mbet88',
                FACEBOOK: 'https://www.facebook.com/marathonbet',
                TWITTER: 'http://twitter.com/marathonbet',
                YOUTUBE: 'https://www.youtube.com/Marathonbet'
            },
            TW: {
                WEIBO: 'http://weibo.com/mbet88',
                FACEBOOK: 'https://www.facebook.com/marathonbet',
                TWITTER: 'http://twitter.com/marathonbet',
                YOUTUBE: 'https://www.youtube.com/Marathonbet'
            },
            DEFAULT: {
                TWITTER: 'http://twitter.com/marathonbet',
                FACEBOOK: 'https://www.facebook.com/marathonbet'
            }
        },
        REALITY_CHECK: false,
        LOCALIZATION_LINKS: {
            MAIN_SITE_URL: {
                PATTERN: /mgames.([^\/]+).*$/,
                TARGET: 'www.$1/{LOCALE}'
            },
            MOBILE_SITE_URL: {
                PATTERN: /mgames.([^\/]+).*$/,
                TARGET: 'mobile.$1/{LOCALE}'
            },
            HELP_SECTION_URL: {
                PATTERN: /mgames.([^\/]+).*$/,
                TARGET: 'www.$1/{LOCALE}/help'
            },
            UPLOAD_DOC_LINK: '{MAIN_SITE_URL}/uploaddocuments.htm',
            LOGIN_HISTORY_LINK: '{MAIN_SITE_URL}/myaccount/loginhistory.htm',

            SELF_EXCLUSION: '{MOBILE_SITE_URL}/account/self-exclude',
            TIME_OUT: '{MOBILE_SITE_URL}/account/timeout',

            PAYMENT_REDIRECT_LINK: '{MOBILE_SITE_URL}/payment-redirect',

            COMPLAINTS_AND_DISPUTES_HELP: '{HELP_SECTION_URL}/complaints_and_disputes/',
            GENERAL_RULES_HELP: '{HELP_SECTION_URL}/general_rules/',
            LIMIT_SETTINGS_HELP: '{HELP_SECTION_URL}/responsible_gambling/setting_limits/',
            RESP_GAMBLING_HELP: '{HELP_SECTION_URL}/responsible_gambling/',
            PAYMENTS_HELP: '{HELP_SECTION_URL}/payments/',
            BONUSES_HELP: '{HELP_SECTION_URL}/bonuses_and_offers/free_bet/',
            TERMS_HELP: '{HELP_SECTION_URL}/general_rules/company_details/',
            PRIVACY_HELP: '{HELP_SECTION_URL}/privacy_policy/',
            LEGAL_AGREEMENT_TERMS: '{HELP_SECTION_URL}/general_rules/company_details/'
        },
        PAYMENTS_PROTECTION_OF_CUSTOMER_FUNDS: false,
        PAYMENTS_GAMBLING_CONTROL: 'http://www.gamblingcontrol.org/players/',
        GOOGLE_CHROME: 'https://www.google.com/chrome/',
        SERVER_NOT_AVAILABLE_PAGE: {
            ZH: 'server-unavailable-zh.html',
            TW: 'server-unavailable-tw.html',
            RU: 'server-unavailable-ru.html',
            SU: 'server-unavailable-ru.html',
            DEFAULT: 'server-unavailable-com.html'
        },
        PARTNERS: {
            ZH: {
                HIBERNIAN: 'http://www.hibernianfc.co.uk/',
                MALAGACF: 'http://www.malagacf.com/cn'
            },
            TW: {
                HIBERNIAN: 'http://www.hibernianfc.co.uk/',
                MALAGACF: 'http://www.malagacf.com/cn'
            },
            DEFAULT: {
                HIBERNIAN: 'http://www.hibernianfc.co.uk/',
                MALAGACF: 'http://www.malagacf.com/en',
                MANCHESTER: 'http://www.manutd.com/',
                DYNAMO: 'http://fcdynamo.ru'
            }
        },
        PARTNERS_EXCLUDE_COUNTRIES: {
            MANCHESTER: ['US', 'CN', 'MO', 'HK', 'TW'],
            LIVERPOOL: ['AF', 'AU', 'BH', 'BD', 'BT', 'BR', 'BN', 'BU', 'KH', 'CN', 'TP', 'FI', 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KP', 'KR', 'NO', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'NP', 'OM', 'PK', 'PH', 'QA', 'RU', 'SA', 'SG', 'LK', 'SE', 'SY', 'TJ', 'TH', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE']
        },
        ANDROID_APK: {
            PATTERN: /mgames.([^\/]+).*$/,

            /* [PROD]
                TARGET: "www.$1/en/mobile/download/mbetcasino.apk"
            */
            TARGET: 'www.$1/en/mobile/download/mgames.apk'
        },

        /* [PROD]
            ANDROID_APK_VERSION: "9",
        */
        ANDROID_APK_VERSION: '4'
    },

    STATE_MATRIX: {
        DEPOSIT: ['Opened', 'Dormant', 'Inactive'],
        WITHDRAW: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
        HISTORY: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
        PERSONALDETAILS: ['Opened', 'Dormant', 'Inactive', 'SelfExcluded'],
        PLAYERPROTECTION: {
            DEPOSITLOSSLIMITS: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
            SELFEXCLUDE: ['Opened', 'Dormant', 'Inactive', 'Suspended']
        }
    },

    TEMP: {
        SESSION_TIMEOUTS: {
            CURACAO: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140, 180],
            ALDERNEY: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 120, 140, 160, 180]
        }
    },

    COMPLIANCE_FLAGS: {
        COPY_PASTE_RESTRICTION: false
    },

    IM: {
        VIBER: {
            link: 'http://chats.viber.com/marathonbetcomsupport',
            name: 'viber',
            title: 'Viber',
            iconClassName: 'viber',
            acceptableKeys: [['CURACAO', 'su']]
        },
        FACEBOOK_MESSENGER: {
            link: 'https://www.facebook.com/MarathonbetSupport/',
            name: 'facebook',
            title: 'Facebook',
            iconClassName: 'messenger',
            acceptableKeys: [['CURACAO', 'su']]
        },
        TELEGRAM: {
            link: 'https://telegram.me/MarathonbetCOM_support_bot',
            name: 'telegram',
            title: 'Telegram',
            iconClassName: 'telegram',
            acceptableKeys: [['CURACAO', 'su']]
        },
        KIK: {
            link: 'http://kik.me/marathonbetcomchina',
            name: 'kik',
            title: 'KIK',
            iconClassName: 'kik',
            acceptableKeys: [['CURACAO', 'ch'], ['CURACAO', 'tw'], ['CURACAO', 'zh']]
        }
    },

    DRAWER: {
        home: true,
        allGames: true,
        promotions: false,
        liveCasino: true,
        contactUs: true
    },

    TIMEOUT_EXECUTORS: {
        NICKNAME: 300
    },

    NICKNAME_ENABLED: true,

    PERSONAL_DOMAIN_ENABLED: true,
    IOS_PERSONAL_DOMAIN_ENABLED: true,
    ANDROID_PERSONAL_DOMAIN_ENABLED: true,

    REGISTRATION_PAGE: {
        FIELDS: {
            PERSONAL_DETAILS: {
                COUNTRY: {FIELD_NAME: 'country', DEFAULT: 'ES'},
                TITLE: {FIELD_NAME: 'title'},
                FIRST_NAME: {FIELD_NAME: 'firstname'},
                MIDDLE_NAME: {FIELD_NAME: 'middlename', OPTIONAL: true},
                LAST_NAME: {FIELD_NAME: 'lastname'},
                LAST_NAME2: {FIELD_NAME: 'lastname2', OPTIONAL: true},
                CHINESE_NAME: {FIELD_NAME: 'chinese_name', COUNTRY: ['CN', 'HK', 'MO', 'TW']},
                BIRTH_DATE: {FIELD_NAME: 'birthdate'},
                GENDER: {FIELD_NAME: 'gender'},
                HOUSE_NUMBER: {FIELD_NAME: 'house_number'},
                STREET: {FIELD_NAME: 'street'},
                POSTAL_CODE: {FIELD_NAME: 'postalcode'},
                ADDRESS: {FIELD_NAME: 'addressLine'},
                CITY: {FIELD_NAME: 'city'},
                LOCATION_GROUP: {FIELD_NAME: 'province', OPTIONAL: true},
                PHONE: {FIELD_NAME: 'phone'},
                NICKNAME: {FIELD_NAME: 'nickname'}
            },
            PREFERENCES: {
                EMAIL: {FIELD_NAME: 'email'},
                PWD: {FIELD_NAME: 'pwd'},
                PWD_HELP: {FIELD_NAME: 'pwd_help'},
                SECRET_QUESTION: {FIELD_NAME: 'secret_question'},
                SECRET_ANSWER: {FIELD_NAME: 'secret_answer'},
                PREFERENCES_HELP: {FIELD_NAME: 'preferences_help'},
                CURRENCY: {FIELD_NAME: 'currency', DEFAULT: 'EUR'},
                CURRENCY_HELP: {FIELD_NAME: 'currency_help'}
            }
        }
    },

    SECURE_3D: {
        ENABLED: true,
        COUNTRY_IDS: [178],
        TIME_OFFSET: 1209600000
    },

    REALM_LIST: {
        prod: {
            gaming: {
                gate: '/casino/mobile/',
                baseURL: '/',
                iforium: {
                    gameflexUrl: null,
                    gateway: '/casino-gateway/gi/',
                    platformKey: 'l008',
                    brandID: 18,
                    defaultLangCode: 'en'
                }
            },
            gateway: {
                url: '',
                path: 'sportsbook-casino-gateway',
                version: 'v1'
            },
            host: null,
            port: null,
            context: 'euroweb',
            protocol: null,
            defaultUser: {}
        }
    }
};
