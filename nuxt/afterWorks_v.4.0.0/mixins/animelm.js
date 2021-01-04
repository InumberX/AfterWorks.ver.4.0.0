export default {
 data: function () {
  return {
   intsecObsAnimelm: null,
  }
 },
 mounted: function () {
  const self = this
  setTimeout(function () {
   self.setIntsecObs()
  }, 100)
 },
 beforeDestroy: function () {
  this.discardIntsecObs()
 },
 methods: {
  setIntsecObs: function () {
   const self = this
   this.intsecObsAnimelm = new IntersectionObserver(
    function (entries, observer) {
     Array.prototype.forEach.call(entries, function (entry) {
      if (entry.isIntersecting) {
       const target = entry.target
       self.intsecObsAnimelm.unobserve(target)
       const delay = target.getAttribute('data-animelm-delay')
       if (delay != null && delay !== '') {
        ;(function (pram, i) {
         setTimeout(function () {
          pram.classList.add('animelm-active')
         }, i)
        })(target, delay)
       } else {
        target.classList.add('animelm-active')
       }
      }
     })
    },
    {
     rootMargin: '-15% 0px',
    }
   )

   const targets = document.querySelectorAll(
    '.mn-wrap .animelm:not(.animelm-init)'
   )

   for (let i = 0, iLength = targets.length; i < iLength; i = (i + 1) | 0) {
    const target = targets[i]
    target.classList.add('animelm-init')
    this.intsecObsAnimelm.observe(target)
   }
  },
  discardIntsecObs: function () {
   this.intsecObsAnimelm.disconnect()
  },
 },
}
