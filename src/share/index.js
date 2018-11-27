Component({
  data: {
  },
  props: {
    appId: '',
    name: '',
    des: '',
    icon: '',
    pageUrl: '',
    shareList: []
  },
  methods: {
    share() {
      my.navigateToMiniProgram({
        appId: this.data.appId,
        envVersion: 'develop',
        extraData: {
          name: this.props.name,
          des: this.props.des,
          icon: this.props.icon,
          pageUrl: this.props.pageUrl,
          shareList: this.props.shareList,
        },
        success: () => {
        },
        fail: () => {
        },
      });
    },
  },
});
