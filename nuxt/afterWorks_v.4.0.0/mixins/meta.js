import metaConfig from '~/config/meta';

export default {
  data: function() {
    return {
      pageTitle: '',
      pageTitleEn: ''
    };
  },
  head: function() {
    const path = this.$route.path;
    let meta = {
      title: '',
      meta: [],
      link: []
    };
    let metaTargetNum = 0;

    for (let i = 0, iLength = metaConfig.length; i < iLength; i = (i + 1) | 0) {
      const thisMetaConfig = metaConfig[i];
      if (thisMetaConfig.route === path) {
        metaTargetNum = i;
        break;
      }
    }

    const targetMeta = metaConfig[metaTargetNum];

    meta.title = targetMeta.title;

    if (metaTargetNum === 0) {
      meta.meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: meta.title
      });
      meta.titleTemplate = '';
    } else {
      meta.meta.push({
        hid: 'og:title',
        property: 'og:title',
        content: meta.title + ' | ' + process.env.title
      });
    }

    if (targetMeta.description != null) {
      meta.meta.push({
        hid: 'description',
        name: 'description',
        content: targetMeta.description
      });

      meta.meta.push({
        hid: 'og:description',
        name: 'og:description',
        content: targetMeta.description
      });

      meta.meta.push({
        hid: 'twitter:description',
        name: 'twitter:description',
        content: targetMeta.description
      });
    }

    meta.meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: process.env.url + targetMeta.route
    });

    meta.link.push({
      hid: 'canonical',
      rel: 'canonical',
      href: process.env.url + targetMeta.route
    });

    return meta;
  },
  created: function() {
    this.pageTitle = this.getPageTitle();
    this.pageTitleEn = this.getPageTitleEn();
  },
  methods: {
    getPageTitle: function() {
      let result = '';
      const path = this.$route.path;

      for (
        let i = 0, iLength = metaConfig.length;
        i < iLength;
        i = (i + 1) | 0
      ) {
        const thisMetaConfig = metaConfig[i];
        if (thisMetaConfig.route === path) {
          result = metaConfig[i].title;
          break;
        }
      }
      return result;
    },
    getPageTitleEn: function() {
      let result = '';
      const path = this.$route.path;

      for (
        let i = 0, iLength = metaConfig.length;
        i < iLength;
        i = (i + 1) | 0
      ) {
        const thisMetaConfig = metaConfig[i];
        if (thisMetaConfig.route === path) {
          result = metaConfig[i].titleEn;
          break;
        }
      }
      return result;
    }
  },
  computed: {
    pageKey: function() {
      return this.$route.name;
    }
  }
};
