class Tab {
  constructor (opt) {
    this.wrap = document.querySelector(opt.id)
    this.tabs = opt.tabs || []
    this.content = opt.content || []
    this.active = opt.active || 0
    this.init()
  }
  init () {
    this.render()
    this.bindEves()
  }
  render () {
    let html = '<ul data-role="tab-list">'
    for (let i=0; i< this.tabs.length; i++) {
      html += '<li data-role="tab-item" class="'+(this.active === i? "active":"")+'">'+ this.tabs[i] +'</li>'
    }
    html += '</ul><div data-role="tab-content">'+ (this.content[this.active]) +'</div>'
    this.wrap.innerHTML = html
    this.bindEves()
  }
  bindEves () {
    this.tabsEle = this.wrap.querySelectorAll('li')
    for (let i=0; i< this.tabs.length; i++) {
      this.tabsEle[i].addEventListener('click', function () {
        if(this.active === i) return
        this.active = i
        this.render()
      }.bind(this), false)
    }
  }
}

class AutoTab extends Tab {
  constructor (opt) {
    super(opt)
    this.autoInit(opt.duration)
  }
  autoInit (duration) {
    setInterval(this.change.bind(this), duration)
  }
  change () {
    this.active += 1
    if(this.active>= this.tabs.length) this.active = 0
    this.render()
  }
}