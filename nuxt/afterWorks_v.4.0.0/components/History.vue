<template>

<transition
 name="contents"
>

<div class="history-box">
<div class="inner">
<div class="history-in">

<div class="history-list">

<dl v-for="(date, i) in dates" v-if="date">
<dt>{{ date }}</dt>
<dd>
<p v-html="titles[i]" class="main-text description"></p>
<span v-if="positions[i]" class="sub-text position">{{ combineByComma(positions[i]) }}</span>
<span v-if="tools[i]" class="sub-text tool">{{ combineByComma(tools[i]) }}</span>
</dd>
</dl>

</div><!-- /.history-list -->

</div><!-- /.history-in -->
</div><!-- /.inner -->
</div><!-- /.history-box -->

</transition>

</template>

<script>
export default {
 props: [
  'dates',
  'titles',
  'positions',
  'tools'
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
  }
 }
}
</script>

<style lang="scss" scoped>

/* 経歴
*************************************************/

/* SP
*************************************************/
.history-box {
 .history-in {
  margin: 32px 0 0;
  .history-list {
   dl {
    display: block;
    margin: 0;
    padding: 0 0 0 80px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    &:before {
     content: '';
     display: block;
     width: 8px;
     height: 8px;
     background-color: #002984;
     border-radius: 50%;
     position: absolute;
     top: 22px;
     left: 36px;
    }
    &:after {
     content: '';
     display: block;
     width: 2px;
     height: 100%;
     background-color: #002984;
     position: absolute;
     top: 22px;
     left: 39px;
    }
    &:last-child {
     overflow: hidden;
    }
    dt {
     margin: 0;
     padding: 16px 0 0;
     width: 100%;
     font-weight: bold;
    }
    dd {
     margin: 0;
     padding: 0 0 16px;
     width: 100%;
     border-bottom: 2px dotted #EAEAEA;
     .main-text {
      margin-top: 8px;
     }
     .sub-text {
      display: block;
      margin-top: 8px;
      font-size: 1.2rem;
      color: #5F5F5F;
     }
    }
   }
  }
 }
}

/* PC
*************************************************/
@media screen and (min-width: 768px) {

.history-box {
 .history-in {
  margin-top: 56px;
  .history-list {
   dl {
    padding-left: 200px;
    &:before {
     width: 12px;
     height: 12px;
     top: 34px;
     left: 94px;
    }
    &:after {
     top: 35px;
     left: 99px;
    }
    &:last-child {
     overflow: hidden;
    }
    dt {
     padding-top: 24px;
    }
    dd {
     padding-bottom: 24px;
     .sub-text {
      font-size: 1.4rem;
     }
    }
   }
  }
 }
}

}

</style>
