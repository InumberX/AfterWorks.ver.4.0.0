<template>

<transition
 name="contents"
 appear
>

<div class="works-box">
<div class="inner">
<div class="works-in">

<div class="works-list">

<ul>

<li v-for="(title, i) in titles" v-bind:id="id[i]">
<figure class="img-box">
<img v-bind:src="images[i]" v-bind:alt="title">
</figure>
<dl class="info-box">
<dt>
<a v-bind:href="urls[i]" target="_blank">{{ title }}<i class="icon icon-blank"></i></a>
</dt>
<dd>
<ul class="info-list">
<li v-if="charge[i]">{{ combineByComma(charge[i]) }}</li>
<li v-if="language[i]">{{ combineByComma(language[i]) }}</li>
<li v-if="cms[i]">{{ combineByComma(cms[i]) }}</li>
<li v-if="software[i]">{{ combineByComma(software[i]) }}</li>
</ul>
<p class="info-text" v-html="replaceQuot(texts[i])"></p>
</dd>
</dl>
</li>

</ul>

</div><!-- /.works-list -->

</div><!-- /.works-in -->
</div><!-- /.inner -->
</div><!-- /.works-box -->

</transition>

</template>

<script>
export default {
 props: [
  'id',
  'titles',
  'images',
  'urls',
  'charge',
  'language',
  'cms',
  'software',
  'texts'
 ],
 methods: {
  combineByComma: function(array) {
   let text = ""
   const length = array.length

   for(let i = 0; i < length; i++) {
    text += array[i]
    if(i < (length - 1)) {
     text += ', '
    }
   }

   return text
  },
  replaceQuot: function(value) {
   return value.replace(/&quot;/g, '"')
  }
 }
}
</script>

<style lang="scss" scoped>

/* 実績
*************************************************/

/* SP
*************************************************/
.works-box {
 .works-in {
  .works-list {
   margin: 24px 0 0;
   > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
     border: 4px solid #EAEAEA;
     margin: 16px 0 0;
     padding: 16px;
     figure {
      margin: 0;
      padding: 0;
      img {
       width: 100%;
      }
     }
     dl {
      margin: 0;
      dt {
       margin: 24px 0 0;
       a {
        display: inline-block;
        color: #2E2E2E;
        font-size: 1.6rem;
        .icon-blank {
         width: 12px;
         height: 12px;
         background-size: 12px 12px;
         margin-left: 4px;
        }
       }
      }
      dd {
       margin: 16px 0 0;
       .info-list {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
         font-size: 1.2rem;
        }
       }
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

.works-box {
 .works-in {
  .works-list {
   margin: 24px 0 0;
   > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    > li {
     display: flex;
     align-items: center;
     margin-top: 40px;
     padding: 24px 16px;
     figure {
      width: 40%;
      padding: 0 16px 0 0;
     }
     dl {
      margin: 0;
      width: 60%;
      dt {
       margin: 0;
       a {
        font-size: 2.4rem;
        .icon-blank {
         width: 16px;
         height: 16px;
         background-size: 16px 16px;
         margin-left: 8px;
        }
       }
      }
      dd {
       margin-top: 16px;
       .info-list {
        li {
         font-size: 1.4rem;
        }
       }
      }
     }
    }
   }
  }
 }
}

}

</style>
