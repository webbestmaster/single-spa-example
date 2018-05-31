window.GLOBAL_CONFIG = {
    /* source for server calls */
    SOURCE_NAME: "MOBILE",
    /* check to identify hybrid or html5 apps. Possible values: ANDROID, IOS, BROWSER */
    TARGET: (
        (location.href.indexOf('target=ANDROID') > -1 || navigator.userAgent.indexOf('AndroidWrapper') > -1)
          ? "ANDROID"
          : (location.href.indexOf('target=IOS') > -1 || navigator.userAgent.indexOf('iOSWrapper') > -1)
            ? "IOS"
            : "BROWSER"
    ), //ANDROID, IOS, BROWSER
    /* link to CDN resources
    [PROD] "https://mobile.mbstatic.org" */
    CDN_URL: null,
    /* flag to show log in console
    [PROD] false or commented */
    DEBUG_MODE: true,
    DEFAULT_URL_CODE: "en",
    DEFAULT_CURRENCY: "EUR",
    RESULTS_ENABLED: true,
    RESULTS_API_TIMEOUT: 180000,
    RESULTS_RETRY_TIMEOUT: 5000,
    /* configuration for RECAPTCHA, RECAPTCHA is hidden if attribute is commented
    [PROD] commented */
    RECAPTCHA_KEY: "6Lf33QcUAAAAAKsRrO62OO0nXfcx8xRp6RXS_ZZz",
    RIGHT_CURRENCIES: ["AMD", "AZN", "BYN", "KZT", "KGS", "MDL", "RUB", "TMM", "TJS", "UAH", "UZS"],
    LOCALYTICS_KEY: "a1d5fd00bb03cfdc19fd5f6-7f6ea50e-b632-11e6-ece0-0060fc2b0982",
    TSUPIS: true,
    IM: {
      FACEBOOK_MESSENGER: {
        "link": "https://www.facebook.com/MarathonbetUKSupport/",
        "name": "facebook",
        "title": "Facebook",
        "iconClassName": "Facebook",
        //In acceptableKeys follow style [jurisdiction, localization] it is necessary for performance
        //If localization is not presented in key than any permitted
        //now it's not work in the opposite direction
        "acceptableKeys": [
          ["ALDERNEY"],
          ["CURACAO", "su"],
          ["CURACAO", "en"]
        ],
      },
      TELEGRAM: {
        "link": "https://telegram.me/MarathonbetUKSupport_bot/",
        "name": "telegram",
        "title": "Telegram",
        "iconClassName": "Telegram",
        "acceptableKeys": [
          ["ALDERNEY"],
          ["CURACAO", "su"],
          ["CURACAO", "en"]
        ]
      },
      KIK: {
        "link": "http://kik.me/marathonbetcomchina",
        "name": "kik",
        "title": "KIK",
        "iconClassName": "Kik",
        // zh need for all chinese localizations
        "acceptableKeys": [
          ["CURACAO", "ch"],
          ["CURACAO", "tw"],
          ["CURACAO", "zh"]
        ]
      },
      WHATSAPP: {
        "text": "+4367761752934",
        "name": "whatsapp",
        "title": "Whatsapp",
        "target": "_self",
        "modal": "whatsapp",
        "iconClassName": "Whatsapp",
        "acceptableKeys": [
          ["ALDERNEY"]
        ]
      }
    },
    /* settings for Registration page */
    REGISTRATION_PAGE: {

      // RUSSIA
      // FIELDS: {
      //   PERSONAL_DETAILS: [
      //     'COUNTRY',
      //     'FIRST_NAME',
      //     'LAST_NAME',
      //     'BIRTH_DATE',
      //     'CITY',
      //     'STREET',
      //     'HOUSE_NUMBER',
      //     'POSTAL_CODE',
      //     'PHONE',
      //     'NICKNAME',
      //   ],
      //   PREFERENCES: [
      //     'EMAIL',
      //     'PWD',
      //     'PWD_HELP',
      //     'SECRET_QUESTION',
      //     'SECRET_ANSWER',
      //     'PREFERENCES_HELP',
      //     'CURRENCY',
      //     'CURRENCY_HELP',
      //     'TIME_ZONE',
      //     'ODDS_TYPE',
      //   ],
      // },

      // BELARUS
      /*FIELDS: {
        PERSONAL_DETAILS: [
          'COUNTRY',
          'TITLE',
          'FIRST_NAME',
          'LAST_NAME',
          'MIDDLE_NAME',
          'CHINESE_NAME',
          'BIRTH_DATE',
          'HOUSE_NUMBER',
          'STREET',
          'POSTAL_CODE',
          'ADDRESS',
          'CITY',
          'PHONE',
          'NICKNAME'
        ],
        PREFERENCES: [
          'EMAIL',
          'PWD',
          'PWD_HELP',
          'SECRET_QUESTION',
          'SECRET_ANSWER',
          'PREFERENCES_HELP',
          'CURRENCY',
          'CURRENCY_HELP',
          'TIME_ZONE',
          'ODDS_TYPE'
        ]
      },*/

      // NOTE: CURACAO
      /*FIELDS: {
        PERSONAL_DETAILS: [
          'COUNTRY',
          'TITLE',
          'FIRST_NAME',
          'LAST_NAME',
          'CHINESE_NAME',
          'BIRTH_DATE',
          'HOUSE_NUMBER',
          'STREET',
          'POSTAL_CODE',
          'ADDRESS',
          'CITY',
          'PHONE',
          'NICKNAME',
        ],
        PREFERENCES: [
          'EMAIL',
          'PWD',
          'PWD_HELP',
          'SECRET_QUESTION',
          'SECRET_ANSWER',
          'PREFERENCES_HELP',
          'CURRENCY',
          'CURRENCY_HELP'
        ]
      },*/

      // NOTE: ALDERNEY
      /*FIELDS: {
        PERSONAL_DETAILS: [
          'COUNTRY',
          'TITLE',
          'FIRST_NAME',
          'LAST_NAME',
          'BIRTH_DATE',
          'HOUSE_NUMBER',
          'POSTAL_CODE',
          'ADDRESS',
          'CITY',
          'PHONE',
          'NICKNAME',
        ],
        PREFERENCES: [
          'EMAIL',
          'PWD',
          'PWD_HELP',
          'SECRET_QUESTION',
          'SECRET_ANSWER',
          'PREFERENCES_HELP',
          'CURRENCY',
          'CURRENCY_HELP'
        ]
      },*/

      // NOTE: SPAIN
      FIELDS: {
        PERSONAL_DETAILS: [
          'COUNTRY',
          'TITLE',
          'FIRST_NAME',
          'LAST_NAME',
          'LAST_NAME2',
          'BIRTH_DATE',
          'GENDER',
          'STREET',
          'HOUSE_NUMBER',
          'POSTAL_CODE',
          'ADDRESS',
          'CITY',
          'SPAIN_LOCATION',
          'PHONE',
          'NICKNAME',
        ],
        PREFERENCES: [
          'EMAIL',
          'PWD',
          'PWD_HELP',
          'SECRET_QUESTION',
          'SECRET_ANSWER',
          'PREFERENCES_HELP',
          'CURRENCY',
          'CURRENCY_HELP'
        ],
        IDENTITY_DOCUMENT: [
          'SPAIN_DOCUMENT_TYPE',
          'SPAIN_DOCUMENT_NUMBER',
          'SPAIN_NATIONALITY',
          'SPAIN_FISCAL_RESIDENCE',
          'SPAIN_IDENTITY_HELP',
        ]
      },

      // NOTE: ITALY
      /*FIELDS: {
        PERSONAL_DETAILS: [
          'COUNTRY',
          'TITLE',
          'FIRST_NAME',
          'LAST_NAME',
          'CHINESE_NAME',
          'BIRTH_DATE',
          'GENDER',
          'HOUSE_NUMBER',
          'STREET',
          'POSTAL_CODE',
          'ADDRESS',
          'ITALY_PROVINCE',
          'ITALY_MUNITIPALITY',
          'PHONE',
          'NICKNAME',

          'ITALY_TAX_CODE',
          'ITALY_BIRTH_PROVINCE',
          'ITALY_BIRTH_MUNITIPALITY',
          'ITALY_MONTHLY_DEPOSIT_LIMIT',
          'ITALY_WEEKLY_DEPOSIT_LIMIT'
        ],
        PREFERENCES: [
          'EMAIL',
          'PWD',
          'PWD_HELP',
          'SECRET_QUESTION',
          'SECRET_ANSWER',
          'PREFERENCES_HELP',
          'CURRENCY',
          'CURRENCY_HELP'
        ],
        IDENTITY_DOCUMENT: [
          'ITALY_DOCUMENT_NUMBER',
          'ITALY_DOCUMENT_TYPE',
          'ITALY_ISSUE_AUTHORITY',
          'ITALY_ISSUE_PLACE',
          'ITALY_EXPIRY_DATE',
          'ITALY_ISSUE_DATE'
        ]
      },*/
      FORBIDDEN_REGEXP: {
        FIRST_NAME: /[^А-Яа-яёЁ -]*/g,
        LAST_NAME: /[^А-Яа-яёЁ -]*/g,
        LAST_NAME2: /[^А-Яа-яёЁ -]*/g,
        ADDRESS: /[^0-9А-Яа-яёЁ -.]*/g,
        SECRET_ANSWER: /[^0-9А-Яа-яёЁ -]*/g,
        CITY: /[^А-Яа-яёЁ -.]*/g,
        STREET: /[^0-9А-Яа-яёЁ -.]*/g,
        POSTAL_CODE: /[^0-9]*/g,
      },
      PHONE: {
        MASK: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
        PLACEHOLDER: "+7 (___) ___-__-__"
      },

      SMS_CODE: {
        MASK: [/[a-zA-Z0-9]/, ' ', /[a-zA-Z0-9]/, ' ', /[a-zA-Z0-9]/, ' ', /[a-zA-Z0-9]/, ' ', /[a-zA-Z0-9]/, ' ', /[a-zA-Z0-9]/],
        PLACEHOLDER: "_ _ _ _ _ _"
      },

      DOCUMENT: {
        MASK: [/\d/, /\d/, '-', /\d/, /\d/, '-',  /\d/, /\d/, /\d/, /\d/, /\d/, /\d/],
        PLACEHOLDER: "__-__-______"
      },

      LINKS: ["EXTERNAL_LINKS.LOCALIZATION_LINKS.TERMS_HELP", "EXTERNAL_LINKS.LOCALIZATION_LINKS.PRIVACY_HELP" /*,"EXTERNAL_LINKS.LOCALIZATION_LINKS.ABOUT_HELP","EXTERNAL_LINKS.LOCALIZATION_LINKS.COOKIES_HELP","registration.checkbox.agreement.link.age","registration.checkbox.agreement.link.identification"*/ ],
      MU_LINKS: ["EXTERNAL_LINKS.LOCALIZATION_LINKS.MU_PRIVACY", "EXTERNAL_LINKS.LOCALIZATION_LINKS.PRIVACY_HELP", "EXTERNAL_LINKS.LOCALIZATION_LINKS.MU_GROUPS", "EXTERNAL_LINKS.LOCALIZATION_LINKS.MU_PARTNERS"],
      MU_OFFERS: [
        'MU_COMMERCIAL_PARTNER',
        'MU_GROUP',
        'MU_LANDING_TERMS'
      ],
      REDIRECT_TOP_COUNTRIES: ['GB', 'RU', 'ES', 'CN'],
      CHINESE_NAME_COUNTRIES: ['CN', 'HK', 'MO', 'TW'],
      //REQUIRED_FIELDS: ['SPAIN_LOCATION'],
      DEFAULT_COUNTRY_SELECTED: 'RU',
      LOCKED_FIELDS: ['COUNTRY', 'CURRENCY']
    },
    AUTOMATIC_ADDRESS_SEARCH: {
      SPAIN_SEARCH: ['ES'],
      BRITAIN_SEARCH: ['GB']
    },
    /* jurisdiction-specific compliance flags */
    COMPLIANCE_FLAGS: {
      /* to show check-boxes on login page to remember login/password */
      REMEMBER_LOGIN: true,
      REMEMBER_PASSWORD: true,
      /* to do copy-paste restriction for email and password fields; if false - it is light restriction just for login page; if true - it is strong restricrion for all pages */
      COPY_PASTE_RESTRICTION: true,
      /* to show player protection functionality */
      PLAYER_PROTECTION_LIMITS_DEPOSIT: true,
      PLAYER_PROTECTION_LIMITS_LOST: true,
      GAMBLING_TEST: false,
      SELF_EXCLUDE: true,
      SELF_EXCLUDE_EXTERNAL: true,
      TIMEOUT: true,
      DEPOSIT_WITHDRAW: true,
      /* to show gambling commission section on deposit/limits page*/
      PAYMENTS_PROTECTION_OF_CUSTOMER_FUNDS: false,
      /* to show Bet unique number; by default just Bet number
      [PROD] SPAIN: true */
      BET_UNIQUE_NUMBER: false,
      PWD_CHANGE_HISTORY: true
    },
    CONNECTION_LOST_DELAY: 500,
    TIMEOUT_EXECUTORS: {
      CHECK_BETS: 300,
      CHECK_BET_SLIP: 700,
      BETSLIP_INPUTS: 300,
      NICKNAME: 300
    },
    EXTERNAL_LINKS: {
      /* desktop site link configuration */
      DESKTOP_RW: {
        PATTERN: /mmob.([^\/]+).*$/,
        TARGET: "www.$1/{LOCALE}/skipmobile",
      },
      /* social networks links (depends on jurisdiction)*/
      SOCIAL_NETWORKS: {
        ZH: {
          WEIBO: "http://weibo.com/mbet88",
          FACEBOOK: "https://www.facebook.com/marathonbet",
          TWITTER: "http://twitter.com/marathonbet",
          YOUTUBE: "https://www.youtube.com/Marathonbet",
        },
        TW: {
          WEIBO: "http://weibo.com/mbet88",
          FACEBOOK: "https://www.facebook.com/marathonbet",
          TWITTER: "http://twitter.com/marathonbet",
          YOUTUBE: "https://www.youtube.com/Marathonbet",
        },
        SU: {
        },
        DEFAULT: {
          TWITTER: "http://twitter.com/marathonbet",
          FACEBOOK: "https://www.facebook.com/marathonbet",
          YOUTUBE: "https://www.youtube.com/Marathonbet",
        }
      },
      /* footer partners links */
      FOOTER_PARTNERS: {
        ZH: {
          MALAGACF: "http://www.malagacf.com/cn",
          HIBERNIAN: "http://www.hibernianfc.co.uk",
        },
        TW: {
          MALAGACF: "http://www.malagacf.com/cn",
          HIBERNIAN: "http://www.hibernianfc.co.uk",
        },
        ES: {
          MALAGACF: "http://www.malagacf.com/es",
          //LIVERPOOL: "http://www.liverpoolfc.com/",
          HIBERNIAN: "http://www.hibernianfc.co.uk/",
          MANCHESTER: "http://www.espanol.manutd.com/",
        },
        DEFAULT: {
          MALAGACF: "http://www.malagacf.com/en",
          //LIVERPOOL: "http://www.liverpoolfc.com/",
          HIBERNIAN: "http://www.hibernianfc.co.uk/",
          MANCHESTER: "http://www.manutd.com/",
          DYNAMO: "http://fcdynamo.ru",
          //TOTTENHAM: "http://www.tottenhamhotspur.com/home/",
          //MIDDLESBROUGH :"http://www.mfc.co.uk/",
          //DERBYCOUNTRY :"http://www.dcfc.co.uk/",
        },
      },
      FOOTER_PARTNERS_EXCLUDE_COUNTRIES: {
        MANCHESTER: ['US', 'CN', 'MO', 'HK', 'TW'],
        LIVERPOOL: ['AF', 'AU', 'BH', 'BD', 'BT', 'BR', 'BN', 'BU', 'KH', 'CN', 'TP', 'FI', 'IN', 'ID', 'IR', 'IQ', 'IL', 'JP', 'JO', 'KZ', 'KP', 'KR', 'NO', 'KW', 'KG', 'LA', 'LB', 'MY', 'MV', 'MN', 'NP', 'OM', 'PK', 'PH', 'QA', 'RU', 'SA', 'SG', 'LK', 'SE', 'SY', 'TJ', 'TH', 'TR', 'TM', 'AE', 'UZ', 'VN', 'YE']
      },
      /* footer compliance links */
      FOOTER_COMPLIANCE: {
        /* icon links */
        /* CURACAO links */
        AUTO_EXCLUSION: "http://www.dgojuego.minhap.gob.es/{locale}/rgiaj",
        CURACAO_LICENCE: "http://200.124.131.5/pages/validate.php?lid=8048-P11",
        ANTILLEPHONE_LICENCE: "https://validator.antillephone.com/validate?domain=www.marathonbet.com",
      },
      /* footer links */
      FOOTER_LINKS: {
        ABOUT: "account/help/about",
        PRIVACY: "account/privacy",
        HELP: "account/help",
        CONTACT_US: "account/contact-us",
        PAYMENTS: "account/payments",
        MOBILE_APPS: "download-app",
        DESKTOP_SITE: "EXTERNAL_LINKS.DESKTOP_RW",
        OUR_PARTNERS: "account/partners",
        PARTNERSHIP_HISTORY: "account/partnership-history",
        COOKIES: "account/cookies-policy",

        TERMS: "account/terms",
        RESP_GAMBLING: "account/responsible-gambling",
      },
      LOYALTY_IMAGES: {
        PATTERN: /testmobile.([^\/]+).*$/,
        TARGET: "www.$1/cdn/bonus/images/"
      },
      /* links for localization keys into application */
      LOCALIZATION_LINKS: {
        /* main links */
        MAIN_SITE_URL: {
          PATTERN: /mmob.([^\/]+).*$/,
          TARGET: "www.$1/{LOCALE}"
        },
        HELP_SECTION_URL: {
          PATTERN: /mmob.([^\/]+).*$/,
          TARGET: "www.$1/{LOCALE}/help"
        },
        COMPLAINTS_AND_DISPUTES_HELP: "{HELP_SECTION_URL}/complaints_and_disputes/",
        PARTNERS_HELP: "{MAIN_SITE_URL}/partners.htm",
        PARTNERS_HISTORY_HELP: "{MAIN_SITE_URL}/partners.htm?partnerName=liverpool",
        GENERAL_RULES_HELP: "{HELP_SECTION_URL}/general_rules/",
        LIMIT_SETTINGS_HELP: "{HELP_SECTION_URL}/responsible_gambling/setting_limits/",
        PAYMENTS_HELP: "{HELP_SECTION_URL}/payments/",
        PAYMENTS_HELP_TSUPIS: "{HELP_SECTION_URL}/payments/tsupis/",
        PAYMENTS_VOUCHER_HELP: "{HELP_SECTION_URL}/payments/voucher",
        FREEBETS_HELP: "{HELP_SECTION_URL}/bonuses_and_offers/free_bet/",
        BONUSES_HELP: "{HELP_SECTION_URL}/bonuses_and_offers/advance_bonus_bets/",
        MULTIPLE_ACCOUNTS_HELP: "{HELP_SECTION_URL}/general_rules/multiple_accounts/",
        TERMS_HELP: "{HELP_SECTION_URL}/general_rules/company_details/",
        GENERAL_HELP: "{HELP_SECTION_URL}",
        ABOUT_HELP: "{HELP_SECTION_URL}/about/",
        COOKIES_HELP: "{HELP_SECTION_URL}/cookies_policy/",
        CONTACTS_HELP: "{HELP_SECTION_URL}/contact_us/",
        PRIVACY_HELP: "{HELP_SECTION_URL}/privacy_policy/",
        RESP_GAMBLING_HELP: "{HELP_SECTION_URL}/responsible_gambling/",
        VIPBETS_HELP: "{HELP_SECTION_URL}/betting_rules/vipbets/",
        LIVE_BETTING: "{HELP_SECTION_URL}/betting_rules/live_betting_limits/",
        UPLOAD_DOC_LINK: "{MAIN_SITE_URL}/uploaddocuments.htm",
        LOGIN_HISTORY_LINK: "{MAIN_SITE_URL}/myaccount/loginhistory.htm",
        REGISTRATION_LINK: "{MAIN_SITE_URL}/join.htm",
        DEPOSIT_LINK: "{MAIN_SITE_URL}/deposit.htm",
        WITHDRAW_LINK: "{MAIN_SITE_URL}/withdraw.htm",
        LIVE_ANIMATION_WIDGET_LINK: "https://www.marathonbet.com/en/live/animation/widget.htm",
        LIVE_ANIMATION_STATS_LINK: "https://www.marathonbet.com/en/live/animation/statistic.htm",
        PAYMENTS_PROTECTION_OF_CUSTOMER_FUNDS: "http://www.gamblingcommission.gov.uk/Consumers/Protection-of-customer-funds.aspx",
        PAYMENTS_GAMBLING_CONTROL: "http://www.gamblingcontrol.org/players/",
        SELF_EXCLUDE_EXTERNAL: "http://www.dgojuego.minhap.gob.es/en/rgiaj",
        ACCESS_TO_MB_DESKTOP: {
          PATTERN: /mmob.([^\/.]+).*$/,
          TARGET: "www.$1.es/{LOCALE}/siteaccess.htm"
        },
        MU_PRIVACY: "http://www.manutd.com/en/General-Footer-Section/Privacy-Policy.aspx",
        MU_GROUPS: "http://www.manutd.com/en/General-Footer-Section/Privacy-Policy.aspx?filter=companies",
        MU_PARTNERS: "http://www.manutd.com/en/General-Footer-Section/Privacy-Policy.aspx?filter=partners",
        SOURCE: {
          WEB: {
            PATTERN: /mmob.([^\/]+).*$/,
            TARGET: "www.old.$1/{LOCALE}"
          },
          EUROWEB: {
            PATTERN: /mmob.([^\/]+).*$/,
            TARGET: "www.$1/{LOCALE}"
          },
          HEADSHOT: "https://www.headshotbets.com/"
        },
        LOYALTY_RULES_HELP: "{HELP_SECTION_URL}/loyalty_program/loyalty_rules/",
        LOYALTY_FAQ_HELP: "{HELP_SECTION_URL}/loyalty_program/loyalty_faq/",
        ALDERNEY_LINKS: {
          TERMS_HELP: "{HELP_SECTION_URL}/terms_and_conditions/",
          GENERAL_RULES_HELP: "{HELP_SECTION_URL}/terms_and_conditions/",
          MULTIPLE_ACCOUNTS_HELP: "{HELP_SECTION_URL}/terms_and_conditions/opening_an_account/",
          COMPLAINTS_AND_DISPUTES_HELP: "{HELP_SECTION_URL}/terms_and_conditions/complaints/",
          HELP: "{HELP_SECTION_URL}/terms_and_conditions/"
        },
        SPAIN_LINKS: {
          HELP: "{HELP_SECTION_URL}/terms_and_conditions/",
        },
      },
      /* configuration for Casino app, Casino functionality is hidden if attribute is commented */
      CASINO_APP: {
        APP_URL: {
          PATTERN: /mobile.([^\/]+).*$/,
          TARGET: "mgames.$1/#/{LOCALE}/",
          LOBBY_PATH: "games/lobby"
        },
        SCHEME: "marmmobc"
      },
      /* link to download chrome browser */
      GOOGLE_CHROME: "https://www.google.com/chrome/",
      /* address of maintenance page (depends on jurisdiction) and contact data for it */
      SERVER_NOT_AVAILABLE_PAGE: {
        ZH: "server-unavailable-zh.html",
        TW: "server-unavailable-tw.html",
        DEFAULT: "server-unavailable-com.html"
      },
      /* link to download ANDROID apk (depends on jurisdiction) */
      ANDROID_APK: {
        PATTERN: /mmob.([^\/]+).*$/,
        TARGET: "www.$1/en/mobile/download/marathonbet.apk"
      },
      /* version of actual ANDROID apk (depends on jurisdiction) */
      ANDROID_APK_VERSION: "7",
      /* link to application on AppStore (depends on jurisdiction) */
      IOS_APP_ID: "https://itunes.apple.com/ua/app/marathonbet/id731960907?mt=8",
      /* link to get jockey's silks for HR functionality */
      HORSE_RACING_IMAGE_URL: "https://web.mbstatic.org/horse-racing/",
      /* link to bonus service. TEST ONLY*/
      BONUS_SERVICE: "http://proxy1-euroweb.cur.local:8181/bonus/"
    },
    /* state matrix settings */
    STATE_MATRIX: {
      DEPOSIT: ['Opened', 'Dormant', 'Inactive'],
      WITHDRAW: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
      HISTORY: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
      PERSONALDETAILS: ['Opened', 'Dormant', 'Inactive', 'SelfExcluded'],
      PLAYERPROTECTION: {
        DEPOSITLOSSLIMITS: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
        SELFEXCLUDE: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded'],
        TIMEOUT: ['Opened', 'Dormant', 'Inactive', 'Suspended', 'SelfExcluded']
      },
      BETTING: ['Opened', 'Dormant', 'Inactive']
    },
    /* Timeout for API calls*/
    API_CALL_TIMEOUT: 30000,
    ANIMATION_LOAD_TIMEOUT: 15000,
    LIVE_DELAY_ATTEMPTS: 5,
    HIDE_LOCAL_PHONE_NUMBER: false,
    HIDE_GLOBAL_PHONE_NUMBER: false,
    /* Player protection timeout: lits of items in dropdown in days */
    TIMEOUT_LIST: [1, 2, 7, 14, 21, 28, 35, 42],
    /* TreeIDs of limited tournaments for streaming(NBA, MLB) and allowed bitrate */
    LIVE_STREAM_LIMITED_TOURNAMENTS: {
      46034: 550 * 1024,
      21231: 512 * 1024
    },
    LIVE_STREAM_SOURCES: ['Unas', 'SportRadar', 'Perform'],
    PCI_DSS: "https://service3-euroweb.cur.local:8799/forms-provider/",
    DEPOSIT_PAYMENT_SOURCES: [
      'moneyBookers',
      'ecoPayz',
      'neteller',
      'cryptoPay',
      'bankCardMastercard',
      'bankCardVisa',
      'bankCardMaestro',
      'bankCardMir',
      'yandex',
      'qiwi',
      'webMoney',
      'bankTransferRu',
      'bankTransfer',
      'sdpay',
      'cop',
      'paySafeCard',
      'accentpay',
      'handybank',
      'trustly',
      'entropay',
      'qiwiTrm',
      'voucher',
      'cupisBankCard',
      'cupisQiwi'
    ],
    WITHDRAW_PAYMENT_SOURCES: [
      'moneyBookers',
      'ecoPayz',
      'neteller',
      'cryptoPay',
      'bankCardMastercard',
      'bankCardVisa',
      'bankCardMaestro',
      'bankCardMir',
      'yandex',
      'qiwi',
      'webMoney',
      'bankTransferRu',
      'bankTransfer',
      'sdpay',
      'cop',
      'paySafeCard',
      'trustly',
      'entropay',
      'cupisBankCard',
      'qiwiTrm',
      'cupisQiwi'
    ],
    ALWAYS_ALLOW_PAYMENT_SYSTEMS: [
      'qiwiTrm',
      'comepay',
      'soyuzTelecom',
      'handybank',
      'bankTransferRu',
      'bankTransfer',
    ],
    /* List currencies and showing payment icons */
    SHOWING_PAYMENT_ICONS: {
      CNY: ['sdpay', 'cop'],
      OTHER_CURRENCIES: [
        'moneyBookers',
        'ecoPayz',
        'neteller',
        'cryptoPay',
        'bankCardMastercard',
        'bankCardVisa',
        'bankCardMaestro',
        'bankCardMir',
        'yandex',
        'qiwi',
        'webMoney',
        'bankTransferRu',
        'bankTransfer',
        'sdpay',
        'cop',
        'paySafeCard',
        'accentpay',
        'handybank',
        'trustly',
        'entropay',
        'qiwiTrm',
        'cupisBankCard',
      ]
    },
    LOYALTY: {
      ENABLED: true
    },
    EXTEND_SESSION: {
      POPUP_TIMEOUT: 30000, // Time interval for session to terminate since popup is shown
      POPUP_OFFSET: 2000, // Offset for click in last moment
      UPDATE_TIMEOUT: 60000 // Time interval for session to update by click for "frequently clicking" users
    },
    SECURE_3D: {
      ENABLED: true,
      COUNTRY_IDS: [178],
      TIME_OFFSET: 1209600000
    },
    TABLE_EXPIRATION_TIME: 1000 * 60 * 5, // Table expiration time in millis
    DEFAULT_COEFFICIENT_TYPE: 'DECIMAL', // Default coefficient type, for table in settings response
    NICKNAME_ENABLED: true,
    STATISTICS_ENABLED: true,
    PRIMARY_SPORTS: ["Football", "Tennis", "Ice Hockey", "Basketball", "Volleyball", "Table Tennis", "e-Sports", "Baseball", "Badminton", "Cricket", "Beach Volleyball", "Futsal", "MMA", "Water Polo"],
    REALM_LIST: {
      prod: {
        gateway: {
          url: "https://testmobile.marathonbet.com",
          path: "mobile-gate",
          version: "v1"
        },
        host: "testmobile.marathonbet.com",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {}
      },
      test2: {
        gateway: {
          url: "https://test-mobile2-repl.mhd.local",
          path: "mobile-gate",
          version: "v1"
        },
        host: "test-mobile2-repl.mhd.local",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {}
      },
      test1: {
        gateway: {
          url: "https://test-mobile1-repl.mhd.local",
          path: "mobile-gate",
          version: "v1"
        },
        host: "test-mobile1-repl.mhd.local",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {}
      },
      test1_old: {
        gateway: {
          url: "https://test1-mobile.cur.local",
          path: "mobile-gate",
          version: "v1"
        },
        host: "test1-mobile.cur.local",
        port: "8280",
        context: "",
        protocol: "http",
        defaultUser: {
          //  login: "2@mail.com",
          // password: "Password134"
        }
      },
      test2_old: {
        gateway: {
          url: "https://test2-mobile.cur.local",
          path: "mobile-gate",
          version: "v1"
        },
        host: "euroweb2-euroweb.cur.local",
        port: "8280",
        context: "",
        protocol: "http",
        defaultUser: {
          //  login: "2@mail.com",
          // password: "Password134"
        }
      },
      test3: {
        host: "euroweb3-euroweb.cur.local",
        port: "8280",
        context: "",
        protocol: "http",
        defaultUser: {
          // login: "2@mail.com",
          // password: "Password134"
        }
      },
      test4: {
        gateway: {
          url: "https://test4-mobile.cur.local",
          path: "mobile-gate",
          version: "v1"
        },
        host: "test4-mobile.cur.local",
        port: "8280",
        context: "",
        protocol: "http",
        defaultUser: {
          //login: "2@mail.com",
          //password: "Password134"
        }
      },
      local: {
        host: "localhost",
        port: "8080",
        context: "euroweb",
        protocol: "http",
        defaultUser: {
          login: "2@mail.com",
          password: "Password134"
        }
      },
      couk: {
        gateway: {
          url: "https://mobile.marathonbet.co.uk",
          path: "mobile-gate",
          version: "v1"
        },
        host: "mobile.marathonbet.co.uk",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {
          //login: "",
          //password: ""
        }
      },
      es: {
        gateway: {
          url: "https://mobile.marathonbet.es",
          path: "mobile-gate",
          version: "v1"
        },
        host: "mobile.marathonbet.es",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {}
      },
      com: {
        gateway: {
          url: "https://mobile.marathonbet.com",
          path: "mobile-gate",
          version: "v1"
        },
        host: "mobile.marathonbet.com",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {
          //login: "",
          //password: ""
        }
      },
      preprod: {
        gateway: {
          url: "https://testmobile.marathonbet.com",
          path: "mobile-gate",
          version: "v1"
        },
        host: "testmobile.marathonbet.com",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {
          login: "",
          password: ""
        }
      },
      preprod_uk: {
        gateway: {
          url: "https://testmobile.marathonbet.co.uk",
          path: "mobile-gate",
          version: "v1"
        },
        host: "testmobile.marathonbet.co.uk",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {}
      },
      preprod_es: {
        gateway: {
          url: "https://testmobile.mbet.es",
          path: "mobile-gate",
          version: "v1"
        },
        host: "testmobile.mbet.es",
        port: null,
        context: "euroweb",
        protocol: "https",
        defaultUser: {
          login: "",
          password: ""
        }
      }
    },
    PROMO_BANNER: {
      CURACAO: [
        {
          key: 'casino',
          url: "games/category/cat_live-casino",
          locales: ['en', 'su', 'zh', 'tw']
        },
        {
          key: 'top_games',
          url: "games/category/topgames",
          locales: ['en', 'su', 'zh', 'tw']
        },
        {
          key: 'slots',
          url: "games/category/cat_slots",
          locales: ['en', 'su', 'zh', 'tw']
        }
      ],
      ALDERNEY: [
        {
          key: 'casino',
          url: "game-list/livegames/",
          locales: ['en']
        },
        {
          key: 'top_games',
          url: "game-list/mobile_top_games/",
          locales: ['en']
        },
        {
          key: 'slots',
          url: "game-list/slots_mobileuk/",
          locales: ['en']
        }
      ]
    }
  };
