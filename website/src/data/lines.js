export const companies = [
  {
    id: 'TradeWind-Subway',
    name: {
      'zh-CN': '信风地铁',
      'zh-HK': '信風地鐵',
      'en': 'TradeWind Subway',
    },
    description: {
      'zh-CN': '信风地铁是连接城市东西部的主要轨道交通系统，以高效、准点著称。',
      'zh-HK': '信風地鐵是連接城市東西部的主要軌道交通系統，以高效、準點著稱。',
      'en': 'TradeWind Subway is the main rail transit system connecting the east and west of the city, known for its efficiency and punctuality.',
    },
    history: {
      'zh-CN': '信风地铁成立于2005年，经过多年发展，已成为城市交通的重要组成部分。',
      'zh-HK': '信風地鐵成立於2005年，經過多年發展，已成為城市交通的重要組成部分。',
      'en': 'TradeWind Subway was established in 2005 and has become an important part of urban transportation after years of development.',
    },
    employees: 5000,
    stations: 45,
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
      'zh-CN': '星野铁道是连接城市与周边地区的重要铁路网络，以舒适、安全著称。',
      'zh-HK': '星野鐵道是連接城市與周邊地區的重要鐵路網絡，以舒適、安全著稱。',
      'en': 'Hoshino Railway is an important railway network connecting the city and surrounding areas, known for its comfort and safety.',
    },
    history: {
      'zh-CN': '星野铁道成立于1998年，经过多年发展，已成为区域交通的重要支柱。',
      'zh-HK': '星野鐵道成立於1998年，經過多年發展，已成為區域交通的重要支柱。',
      'en': 'Hoshino Railway was established in 1998 and has become an important pillar of regional transportation after years of development.',
    },
    employees: 3500,
    stations: 32,
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
      'zh-CN': '新港地铁是城市最新的地铁系统，以现代化、智能化著称。',
      'zh-HK': '新港地鐵是城市最新的地鐵系統，以現代化、智能化著稱。',
      'en': 'MTRSK is the city\'s newest subway system, known for its modernization and intelligence.',
    },
    history: {
      'zh-CN': '新港地铁成立于2015年，是城市轨道交通系统的新生力量。',
      'zh-HK': '新港地鐵成立於2015年，是城市軌道交通系統的新生力量。',
      'en': 'MTRSK was established in 2015 and is a new force in the city\'s rail transit system.',
    },
    employees: 2800,
    stations: 25,
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
