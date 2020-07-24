function add_todo(){
    var new_item = document.getElementById("new_item")
    var list = document.getElementById("todo_list")
    var new_li = document.createElement("li")
    var del = document.createElement("button")
    del.appendChild(document.createTextNode("DELETE"))
    del.setAttribute("onclick","del(this)")
    del.setAttribute("id","del")
    var edt = document.createElement("button")
    edt.appendChild(document.createTextNode("EDIT"))
    edt.setAttribute("onclick","edt(this)")
    edt.setAttribute("id","edt")
    new_li.appendChild(document.createTextNode(new_item.value))
    new_li.appendChild(del)
    new_li.appendChild(edt)
    list.appendChild(new_li)
    document.getElementById("new_item").value = ""
    
}
function del_all(){
    var list = document.getElementById("todo_list")
   list.innerHTML = ""
}

function del(d){
d.parentNode.remove()
}

function edt(e){
var edt_item = e.parentNode.firstChild
var take_item = document.createElement("input")
take_item.setAttribute('type','text')
take_item.value = edt_item.nodeValue
e.parentNode.replaceChild(take_item,edt_item)
ok_btn = document.createElement("button")
ok_btn.appendChild(document.createTextNode("OK"))
ok_btn.setAttribute("id","ok")
e.parentNode.replaceChild(ok_btn,e.parentNode.lastChild)
ok_btn.setAttribute("onclick","edited(this)")
}

function edited(ed){
var old_val = ed.parentNode.firstChild
var new_item = document.createTextNode(old_val.value)
ed.parentNode.replaceChild(new_item,old_val)
edt_btn = document.createElement("button")
edt_btn.appendChild(document.createTextNode("EDIT"))
edt_btn.setAttribute("id","edt")
ed.parentNode.replaceChild(edt_btn,ed.parentNode.lastChild)
edt_btn.setAttribute("onclick","edt(this)")

}

