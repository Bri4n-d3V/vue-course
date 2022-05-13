Vue.createApp({
  data() {
    return {
      message1: '',
      message2: '',
    };
  },

  methods: {
    alert() {
      window.alert("That's an alert!!");
    },

    output1({ target: { value } }) {
      return this.message1 = value;
    },

    output2({ target: { value } }) {
      return this.message2 = value;
    },
  },
}).mount('#assignment');
