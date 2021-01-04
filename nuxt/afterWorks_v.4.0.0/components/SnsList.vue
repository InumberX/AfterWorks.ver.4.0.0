<template>
  <div class="sns-list-box">
    <ul class="sns-items">
      <li class="sns-item" v-for="(item, i) in items" :key="item.name">
        <a
          :href="item.url"
          target="_blank"
          rel="noopener"
          :title="item.name"
          :aria-label="item.name"
          class="sns-link"
        >
          <i class="icon" :class="item.className"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SnsList',
  data: function () {
    return {
      items: [
        {
          name: 'Twitter',
          className: 'is-twitter',
          url: 'https://twitter.com/InumberX',
        },
        {
          name: 'Instagram',
          className: 'is-instagram',
          url: 'https://www.instagram.com/inumberx/',
        },
        {
          name: 'GitHub',
          className: 'is-github',
          url: 'https://github.com/InumberX',
        },
        {
          name: 'YouTube',
          className: 'is-youtube',
          url: 'https://www.youtube.com/channel/UCjd4GJBAQ1eIs-dXPEBbYng',
        },
        {
          name: 'Qiita',
          className: 'is-qiita',
          url: 'https://qiita.com/inumberx',
        },
        {
          name: 'note',
          className: 'is-note',
          url: 'https://note.mu/inumberx',
        },
        {
          name: 'Behance',
          className: 'is-behance',
          url: 'https://www.behance.net/inumberx21ac',
        },
        {
          name: 'pixiv',
          className: 'is-pixiv',
          url: 'https://www.pixiv.net/member.php?id=2146818',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
// 変数
@import '~assets/css/_common/variable';

.sns-items {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sns-item {
  margin: 0;
}
.sns-link:not(:root) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 56px;
  height: 56px;
  font-size: 1.8rem;
  transition: 0.3s opacity;
  .icon {
    color: $color-tx--main;
  }
  &:hover {
    .icon {
      color: $palette-blue--2;
    }
  }
}
.hd-sns-box {
  margin-top: 24px;
  opacity: 0;
  transition: 0.6s opacity;
  &.animelm-active {
    opacity: 1;
  }
}
.ft-sns-box {
  margin-top: 40px;
  .sns-link:not(:root) {
    .icon {
      color: $palette-white--0;
    }
    &:hover {
      opacity: 0.6;
      .icon {
        color: $palette-white--0;
      }
    }
  }
}
@media screen and (min-width: $bp--sm), print {
  .sns-link:not(:root) {
    width: 64px;
    height: 64px;
    font-size: 2.2rem;
  }
}
@media screen and (min-width: $bp--md), print {
  .sns-link:not(:root) {
    width: 72px;
    height: 72px;
    font-size: 2.6rem;
  }
}
</style>
