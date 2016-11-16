var OAUTH_CLIENT_ID = "776189517355-6bjjleaopdes0fe57f8gsf4i1ncgflpb.apps.googleusercontent.com";

var gaConfig = {
  views: [
    {
      'name': 'T',
      'abbr': 'ts',
      'view': '14912375',
      'colors': {
        1: '#fff',
        2: '#1c5976'
      }
    },
    {
      'name': 'W',
      'abbr': 'ws',
      'view': '14554529',
      'colors': {
        1: '#000',
        2: '#fc0'
      }
    },
    {
      'name': 'UJA',
      'abbr': 'uja',
      'view': '74801519',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    },
    {
      'name': 'UAU',
      'abbr': 'uau',
      'view': '74798055',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    },
    {
      'name': 'UTH',
      'abbr': 'uth',
      'view': '74790785',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    },
    {
      'name': 'VHN',
      'abbr': 'vhn',
      'view': '91846327',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    },
    {
      'name': 'IV',
      'abbr': 'iv',
      'view': '125131939',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    },
    {
      'name': 'GE',
      'abbr': 'ge',
      'view': '24119751',
      'colors': {
        1: '#fff',
        2: '#c00'
      }
    }
  ],
  reportRequests: [
    {
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today'
        }
      ],
      metrics: [
        {expression: 'ga:sessions'},
        {expression: 'ga:transactionRevenue'}
      ],
      dimensions:
      [
        {name: "ga:deviceCategory"},
        {name: "ga:browser"},
        {name: "ga:browserVersion"}
      ]
    }
  ]
};