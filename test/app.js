new Vue({
  el: '#app',
  data: {
    stations: [
      { id: 1, name: 'Nakano', time: 2 },
      { id: 2, name: 'Ochiai', time: 4 },
      { id: 3, name: 'Takadanobaba', time: 6 },
      { id: 4, name: 'Waseda', time: 8 },
      { id: 5, name: 'Kagurazaka', time: 10 },
      { id: 6, name: 'Iidabashi', time: 12 },
      { id: 7, name: 'Kudanshita', time: 14 },
      { id: 8, name: 'Takebashi', time: 16 },
      { id: 9, name: 'Otemachi', time: 18 },
      { id: 10, name: 'Nihombashi', time: 20 },
      { id: 11, name: 'Kayabacho', time: 22 },
      { id: 12, name: 'Monzen-Nakacho', time: 24 },
      { id: 13, name: 'Kiba', time: 26 },
      { id: 14, name: 'Toyocho', time: 28 },
      { id: 15, name: 'Minami-Sunamachi', time: 30 },
      { id: 16, name: 'Nishi-Kasai', time: 32 },
      { id: 17, name: 'Kasai', time: 34 },
      { id: 18, name: 'Urayasu', time: 36 },
      { id: 19, name: 'Minami-Gyotoku', time: 38 },
      { id: 20, name: 'Gyotoku', time: 40 },
      { id: 21, name: 'Myoden', time: 42 },
      { id: 22, name: 'Baraki-Nakayama', time: 44 },
      { id: 23, name: 'Nishi-Funabashi', time: 46 }
    ],
    lineInfo: {
      description: 'The Tozai Line is a subway line operated by Tokyo Metro in Tokyo, Japan. It connects Nakano Station in Nakano, Tokyo to Nishi-Funabashi Station in Funabashi, Chiba.',
      totalStations: 23,
      totalDistance: 30.8
    }
  }
});