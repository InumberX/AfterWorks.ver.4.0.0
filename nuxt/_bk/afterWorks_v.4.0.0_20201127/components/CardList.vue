<template>

<transition
 name="contents"
 appear
>

<div class="card-list-box">
<div class="inner">
<div class="card-list">
<ul>
<li v-for="(title, i) in titles" v-if="title"  class="s-magic-fadein">
<div class="card-list-in" v-bind:class="classes[i]">
<div class="card-list-cnt">
<div class="title-box">
<h4><span class="icon-box"><i class="icon" v-bind:class="'icon-' + classes[i]"></i></span><em>{{title}}</em></h4>
</div>
<div class="text-box">
<p>{{ texts[i] }}</p>
</div>
</div>
<div class="btn-box" v-if="links">
<nuxt-link v-bind:to="'/' + links[i] + '/'" class="btn-m1 btn-arrow-right">{{ linkTexts[i] }}</nuxt-link>
</div>
</div><!-- /.card-list-in -->
</li>
</ul>
</div><!-- /.card-list -->
</div><!-- /.inner -->
</div><!-- /.card-list-box -->

</transition>

</template>

<script>
export default {
 props: [
  'titles',
  'texts',
  'classes',
  'links',
  'linkTexts'
 ]
}
</script>

<style lang="scss" scoped>

/* コンテンツタイトル
*************************************************/

/* SP
*************************************************/
.card-list-box {
 .card-list {
  ul {
   margin: 40px 0 0;
   padding: 0;
   list-style: none;
   li {
    margin: 24px 0 0;
    padding: 0;
    box-sizing: border-box;
    .card-list-in {
     border: 2px solid #EAEAEA;
     padding: 24px 16px;
     box-sizing: border-box;
     .title-box {
      h4 {
       margin: 0;
       font-size: 2.0rem;
       text-align: center;
       em {
        display: block;
        margin: 16px auto 0;
       }
       .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #EAEAEA;
        overflow: hidden;
        .icon-about {
         width: 80px;
         height: 80px;
         background-size: 72px 72px;
         background-position: bottom center;
        }
        .icon-works {
         width: 80px;
         height: 80px;
         background-size: 80px 80px;
         background-position: bottom -6px center;
        }
       }
      }
     }
     .btn-box {
      .btn-m1 {
       margin-top: 16px;
      }
     }
    }
   }
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.card-list-box {
 .card-list {
  ul {
   margin: 40px 0 0;
   display: flex;
   flex-wrap: wrap;
   li {
    width: 50%;
    margin-top: 16px;
    &:nth-child(odd) {
     padding-right: 8px;
    }
    &:nth-child(even) {
     padding-left: 8px;
    }
    .card-list-in {
     padding: 24px;
     height: 100%;
     display: flex;
     flex-wrap: wrap;
     align-items: flex-start;
     .title-box {
      width: 100%;
      h4 {
       font-size: 2.4rem;
       .icon-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 120px;
        .icon-about {
         width: 120px;
         height: 120px;
         background-size: 112px 112px;
        }
        .icon-works {
         width: 120px;
         height: 120px;
         background-size: 120px 120px;
        }
       }
      }
     }
     .text-box {
      width: 100%;
     }
     .btn-box {
      width: 100%;
      align-self: flex-end;
      .btn-m1 {
       margin-top: 24px;
      }
     }
    }
   }
  }
 }
}

}

</style>
