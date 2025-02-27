export const companies = [
  {
    id: 'TradeWind-Subway',
    name: {
      'zh-CN': '信风地铁',
      'zh-HK': '信風地鐵',
      'en': 'TradeWind Subway',
    },
    description: {
      'zh-CN': '信风地铁创立于2015年，是安林系轨道交通企业，目前主营业务为铁路建设及运营方面的顾问。',
      'zh-HK': '信風地鐵創立於2015年，是安林系軌道運輸企業，目前主營業務為鐵路建設及營運的顧問。',
      'en': 'Founded in 2015, TradeWind Subway is a rail transit enterprise under the Anlin Group. Its main business is currently consulting on railway construction and operations.',
    },
    lines: [],
    services: {
      'zh-CN': ['地铁运营', '车站商业', '广告服务'],
      'zh-HK': ['地鐵運營', '車站商業', '廣告服務'],
      'en': ['Subway operation', 'Station commerce', 'Advertising services'],
    },
  },
  {
    id: 'Hoshino-Railway',
    name: {
      'zh-CN': '星野铁道',
      'zh-HK': '星野鐵道',
      'en': 'Hoshino Railway',
    },
    description: {
      'zh-CN': '星野铁道是信风地铁子公司，目前主要运营连接 KR 星野城、南岸中心、博南等地的轨道交通线路。',
      'zh-HK': '星野鐵道是信風地鐵子公司，目前主要營運連接 KR 星野城、南岸中心、博南等地的軌道運輸線路。',
      'en': 'Hoshino Railway is a subsidiary of Tradewind Subway. It currently operates rail transit lines connecting KR Hoshino City, Nan`an Center, Bonin, etc.',
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
    description: {
      'zh-CN': '新港地铁目前有两条轨道交通线路。',
      'zh-HK': '新港地鐵目前有兩條軌道運輸線路。',
      'en': 'MTRSK currently has two rail transit lines.',
    },
    services: {
      'zh-CN': ['地铁运营', '智能服务', '旅游咨询'],
      'zh-HK': ['地鐵運營', '智能服務', '旅遊諮詢'],
      'en': ['Subway operation', 'Smart services', 'Tourism consultation'],
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
