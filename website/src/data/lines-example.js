export const companies = [
  {
    id: 'Hoshino-Railway', //公司ID，一般情况下与 en 保持一致即可，记得把空格改为短横杠
    name: {
      'zh-CN': '星野铁道', //公司简体中文名称
      'zh-HK': '星野鐵道', //公司繁体中文名称
      'en': 'Hoshino Railway', //公司英文名称，必填
    },
    lines: [
      {
        id: 'HH', //线路代码，依据本公司的线路代码填写即可，如若无线路代码，可以与 en 保持一致，记得把空格改为短横杠
        name: {
          'zh-CN': '星野本线', //线路简体中文名称
          'zh-HK': '星野铁道', //线路繁体中文名称
          'en': 'Hoshino Main Line', //线路英文名称，必填
        },
        operationalStatus: 'partialSuspension', //线路状态，必填，可选值：normal（正常运行）、delay（延误）、partialSuspension（部分停运）、termination（直通运转终止）、suspended（停止运行）
        operationalInfo: {
          'zh-CN': '因施工影响，阿拜多斯站至涅普缇努站区间暂停服务', //线路状态简体中文描述
          'zh-HK': '因施工影響，阿拜多斯站至涅普緹努站區間暫停服務', //线路状态繁体中文描述
          'en': 'Due to construction, service between Abydos and Neptuno is suspended', //线路状态英文描述，必填
        },
      },
    ],
  },
];