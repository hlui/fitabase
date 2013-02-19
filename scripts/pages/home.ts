$("./body") {
  add_class("mw_home")
  
  insert("div", class: "mw_loading") {
    insert("img", src: asset("images/ajax.gif"))
  }
}