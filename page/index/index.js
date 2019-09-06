require('./page/index/index.css');
const template = require('./page/index/tpl.html')

export default {
  template,
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addNum() {
      this.count++;
    },
    loopNum() {
      this.count++;
      this.$emit('loopNum', this.count);
      setTimeout(() => {
        this.loopNum();
      }, 1000);
    }
  },
  mounted() {
    this.loopNum();
  }
};