Vue.createApp({
  data() {
    return {
      name: 'Brian',
      age: 27,
      randomNumber: Math.random().toFixed(2),
      randomImages: 'https://picsum.photos/300/?random',
    };
  },
  methods: {
    agePlusFive() {
      return this.age + 5;
    }
  },
}).mount('#assignment');