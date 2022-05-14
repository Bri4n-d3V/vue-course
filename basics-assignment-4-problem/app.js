Vue.createApp({
  data() {
    return {
      styleClass: '',
      showParagraph: true,
      inputBG: '',
    }
  },

  methods: {
    handleVisibility() {
      this.showParagraph = !this.showParagraph;
    }
  },

  computed: {
    dinamicClasses() {
      return {
        user1: this.styleClass === 'user1', 
        user2: this.styleClass === 'user2',
        visible: this.showParagraph,
        hidden: !this.showParagraph,
      }
    }
  }
}).mount('#assignment');