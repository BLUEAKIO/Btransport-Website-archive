export const companies = [
  {
    id: 'TradeWind-Subway',
    name: {
      'zh-Hans': '信风地铁',
      'zh-Hant': '信風地鐵',
      'en': 'TradeWind Subway',
    },
    lines: [],
  },
  {
    id: 'Hoshino-Railway',
    name: {
      'zh-Hans': '星野铁道',
      'zh-Hant': '星野鐵道',
      'en': 'Hoshino Railway',
    },
    lines: [
      {
        id: 'HH',
        name: {
          'zh-Hans': '星野本线',
          'zh-Hant': '星野铁道',
          'en': 'Hoshino Main Line',
        },
        operationalStatus: 'partialSuspension',
        operationalInfo: {
          'zh-Hans': '因施工影响，阿拜多斯站至涅普缇努站区间暂停服务',
          'zh-Hant': '因施工影響，阿拜多斯站至涅普緹努站區間暫停服務',
          'en': 'Due to construction, service between Abydos and Neptuno is suspended',
        },
      },
      {
        id: 'HS',
        name: {
          'zh-Hans': '白子线',
          'zh-Hant': '白子綫',
          'en': 'Shiroko Line',
        },
        operationalStatus: 'normal',
        operationalInfo: {
          'zh-Hans': '正常运营',
          'zh-Hant': '正常運營',
          'en': 'Operating normally',
        },
      },
      {
        id: 'HK',
        name: {
          'zh-Hans': '栀子线',
          'zh-Hant': '梔子線',
          'en': 'Kuchinashi Line',
        },
        operationalStatus: 'suspended',
        operationalInfo: {
          'zh-Hans': '栀子线全线修建中',
          'zh-Hant': '梔子線全線興建中',
          'en': 'Kuchinashi Line under construction in its entirety',
        },
      },
    ],
  },
];