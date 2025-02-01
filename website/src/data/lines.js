export const companies = [
  {
    id: 'TradeWind-Subway',
    name: {
      en: 'TradeWind Subway',
      zh: '信风地铁',
    },
    description: {
      en: 'TradeWind Subway is a leading provider of metro services in the region.',
      zh: '信风地铁是该地区领先的地铁服务提供商。',
    },
    lines: [],
  },
  {
    id: 'Hoshino-Railway',
    name: {
      en: 'Hoshino Railway',
      zh: '星野铁道',
    },
    description: {
      en: 'Hoshino Railway is a leading provider of metro services in the region.',
      zh: '星野铁道是该地区领先的地铁服务提供商。',
    },
    lines: [
      {
        id: 'HH',
        name: {
          en: 'Hoshino Main Line',
          zh: '星野本线',
        },
        operationalStatus: 'partialSuspension',
        operationalInfo: {
          en: 'Due to construction, service between Abydos and Neptuno is suspended',
          zh: '因施工影响，阿拜多斯站至涅普缇努站区间暂停服务',
        },
      },
      {
        id: 'HS',
        name: {
          en: 'Shiroko Line',
          zh: '白子线',
        },
        operationalStatus: 'normal',
        operationalInfo: {
          en: 'Operating normally',
          zh: '正常运营',
        },
      },
      {
        id: 'HK',
        name: {
          en: 'Kuchinashi Line',
          zh: '栀子线',
        },
        operationalStatus: 'suspended',
        operationalInfo: {
          en: 'Kuchinashi Line under construction in its entirety',
          zh: '栀子线全线修建中',
        },
      },
    ],
  },
];