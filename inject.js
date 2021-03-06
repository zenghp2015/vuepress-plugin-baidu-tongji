module.exports = ({ router }) => {
  if (process.env.NODE_ENV === 'production' && HM_ID && typeof window !== 'undefined') {
    window._hmt = window._hmt || [];
    (function() {
      const hm = document.createElement('script')
      hm.src = 'https://hm.baidu.com/hm.js?' + HM_ID
      const s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()
    router.afterEach(function (to) {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }
}