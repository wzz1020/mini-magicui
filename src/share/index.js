Component({
  data: {
    appId: '',
  },
  props: {
    name: '',
    des: '',
    icon: '',
    pageUrl: '',
    shareList: [],
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
          // console.log(JSON.stringfy(res))
        },
        fail: () => {
          // console.log(JSON.stringfy(res))
        },
      });
    },
  },
});
