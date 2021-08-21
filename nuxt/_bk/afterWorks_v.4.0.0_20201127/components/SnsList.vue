<template>
<div class="sns-list" v-bind:class="className">
<ul>
<li v-for="(list, i) in snsList">
<a v-bind:href="list.url" v-bind:title="list.name" target="_blank" rel="noopener"><i class="icon" v-bind:class="list.class"></i></a>
</li>
</ul>
</div><!-- /.sns-box -->
</template>

<script>
export default {
 props: [
  'className'
 ],
 data: function () {
  return {
   snsList: [
    {
     name: 'Twitter',
     class: 'icon-twitter',
     url: 'https://twitter.com/InumberX'
    },
    {
     name: 'Instagram',
     class: 'icon-instagram',
     url: 'https://www.instagram.com/inumberx/'
    },
    {
     name: 'GitHub',
     class: 'icon-github',
     url: 'https://github.com/InumberX'
    },
    {
     name: 'YouTube',
     class: 'icon-youtube',
     url: 'https://www.youtube.com/channel/UCjd4GJBAQ1eIs-dXPEBbYng'
    },
    {
     name: 'Qiita',
     class: 'icon-qiita',
     url: 'https://qiita.com/inumberx'
    },
    {
     name: 'note',
     class: 'icon-note',
     url: 'https://note.mu/inumberx'
    },
    {
     name: 'Behance',
     class: 'icon-behance',
     url: 'https://www.behance.net/inumberx21ac'
    },
    {
     name: 'pixiv',
     class: 'icon-pixiv',
     url: 'https://www.pixiv.net/member.php?id=2146818'
    }
   ]
  }
 }
}
</script>

<style lang="scss" scoped>

/* SNSリスト
*************************************************/

/* SP
*************************************************/
.sns-list {
 ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  li {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   width: 40px;
   a {
    display: block;
    padding: 8px;
    &:hover {
     opacity: 0.7;
    }
    .icon {
     width: 24px;
     height: 24px;
     display: block;
     margin: 0 auto;
     background-size: contain;
    }
   }
  }
 }
 &.footer {
  ul {
   justify-content: center;
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.sns-list {
 ul {
  li {
   width: 56px;
  }
 }
}

}

</style>
