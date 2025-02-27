export const companies = [
  {
    id: 'TradeWind-Subway',
    name: {
      'zh-CN': '信风地铁',
      'zh-HK': '信風地鐵',
      'en': 'TradeWind Subway',
    },
    lines: [],
  },
  {
    id: 'Hoshino-Railway',
    name: {
      'zh-CN': '星野铁道',
      'zh-HK': '星野鐵道',
      'en': 'Hoshino Railway',
    },
    lines: [
      {
        id: 'HH',
        name: {
          'zh-CN': '星野本线',
          'zh-HK': '星野铁道',
          'en': 'Hoshino Main Line',
        },
        operationalStatus: 'partialSuspension',
        operationalInfo: {
          'zh-CN': '因施工影响，阿拜多斯站至涅普缇努站区间暂停服务',
          'zh-HK': '因施工影響，阿拜多斯站至涅普緹努站區間暫停服務',
          'en': 'Due to construction, service between Abydos and Neptuno is suspended',
        },
      },
      {
        id: 'HS',
        name: {
          'zh-CN': '白子线',
          'zh-HK': '白子綫',
          'en': 'Shiroko Line',
        },
        operationalStatus: 'normal',
        operationalInfo: {
          'zh-CN': '正常运营',
          'zh-HK': '正常運營',
          'en': 'Operating normally',
        },
      },
      {
        id: 'HK',
        name: {
          'zh-CN': '栀子线',
          'zh-HK': '梔子線',
          'en': 'Kuchinashi Line',
        },
        operationalStatus: 'suspended',
        operationalInfo: {
          'zh-CN': '栀子线全线修建中',
          'zh-HK': '梔子線全線興建中',
          'en': 'Kuchinashi Line under construction in its entirety',
        },
      },
    ],
  },
  {
    id: 'MTRSK',
    name: {
      'zh-CN': '新港地铁',
      'zh-HK': '新港地鐵',
      'en': 'MTRSK',
    },
    lines: [
      {
        id: 'SK',
        name: {
          'zh-CN': '新港线',
          'zh-HK': '新港綫',
          'en': 'San Kong Line',
        },
        operationalStatus: 'normal',
        operationalInfo: {
          'zh-CN': '正常运营',
          'zh-HK': '正常運營',
          'en': 'Operating normally',
        },
      },
      {
        id: 'SH', 
        name: {
          'zh-CN': '新北线',
          'zh-HK': '新北綫',
          'en': 'SK Hokkaido Line',
        },
        operationalStatus: 'normal',
        operationalInfo: {
          'zh-CN': '正常运营',
          'zh-HK': '正常運營',
          'en': 'Operating normally',
        },
      },
      
    ],
  },
];