Vue.createApp({
  data() {
    return {
      inputTask: "",
      tasks: [],
      showList: "visible",
      buttonCaption: "Hide List",
    };
  },

  methods: {
    addTask() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    },

    changeVisibility() {
      if (this.showList === "visible") {
        this.showList = "hidden";
        this.buttonCaption = "Show List";
      } else {
        this.showList = "visible";
        this.buttonCaption = "Hide List";
      }
    },
  },
}).mount("#assignment");
