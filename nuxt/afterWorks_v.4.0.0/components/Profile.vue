<template>

<transition
 name="contents"
>

<div class="profile-box">
<div class="inner">
<div class="profile-in">

<div class="profile-image">
<span><img src="/img/img_logo_nine.svg" alt="N/NE"></span>
</div><!-- /.profile-image -->

<div class="profile-info">

<dl class="name">
<dt>Name</dt>
<dd>{{ name }}</dd>
</dl>

<dl class="certificate">
<dt>Certificate</dt>
<dd>
<ul>
<template v-for="(certificateName, i) in certificateNames" v-if="certificateName">
<li v-if="certificateName">
<a
 v-if="certificateUrls[i]"
 v-bind:href="certificateUrls[i]"
 target="_blank"
>{{ certificateName }}</a>
<span v-else>{{ certificateName }}</span>
</li>
</template>
</ul>
</dd>
</dl>

<dl class="skill">
<dt>Skill</dt>
<dd>
<ul>
<li v-for="(skill, i) in skills" v-if="skill">
{{ skill }}
</li>
</ul>
</dd>
</dl>

<dl class="sns">
<dt>SNS</dt>
<dd><snsList></snsList></dd>
</dl>

</div><!-- /.profile-info -->

</div><!-- /.profile-in -->
</div><!-- /.inner -->
</div><!-- /.profile-box -->

</transition>

</template>

<script>
import SnsList from '~/components/SnsList.vue';

export default {
 props: [
  'name',
  'certificateNames',
  'certificateUrls',
  'skills'
 ],
 components: {
  SnsList: SnsList
 }
}
</script>

<style lang="scss" scoped>

/* プロフィール
*************************************************/

/* SP
*************************************************/
.profile-box {
 .profile-in {
  margin: 32px 0 0;
  .profile-image {
   width: 80px;
   margin: 0 auto;
   span {
    display: block;
    img {
     width: 100%;
    }
   }
  }
  .profile-info {
   margin: 24px 0 0;
   dl {
    display: flex;
    align-items: flex-start;
    margin: 16px 0 0;
    width: 100%;
    dt {
     margin: 0 8px 0 0;
     padding: 0;
     width: 80px;
    }
    dd {
     margin: 0;
     padding: 0;
     width: calc(100% - 80px);
     ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
       &:first-child {
        margin-top: 0;
       }
      }
     }
    }
    &.sns {
     dt {
      padding: 12px 0;
     }
    }
   }
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.profile-box {
 .profile-in {
  margin-top: 80px;
  display: flex;
  align-items: flex-start;
  width: 100%;
  .profile-image {
   width: 120px;
  }
  .profile-info {
   margin-top: 0;
   width: calc(100% - 200px);
   dl {
    margin-top: 24px;
    dt {
     width: 88px;
     margin-right: 16px;
    }
    dd {
     margin: 0;
     width: calc(100% - 104px);
    }
    &.sns {
     dt {
      padding: 10px 0;
     }
    }
    &:first-child {
     margin-top: 0;
    }
   }
  }
 }
}

}

</style>
