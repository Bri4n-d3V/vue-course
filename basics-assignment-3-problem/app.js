Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },

  methods: {
    add(num) {
      this.result += num;
    },
  },

  computed: {
    handleResult() {
      if (this.result < 37) {
        return "Not there yet";

      } else if (this.result === 37) {
        return this.result;

      } else {
        return "Too much!";
      }
    },
  },

  watch: {
    handleResult() {
      console.log("watch");
      const that = this;

        setTimeout(() => {
          that.result = 0;
        }, 2000);
    },
  },
}).mount("#assignment");
