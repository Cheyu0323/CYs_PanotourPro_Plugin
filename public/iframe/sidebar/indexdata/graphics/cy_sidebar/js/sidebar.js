function sidebarShowClick(id){
    document.querySelector("#" + id).classList.add('active');
}
function sidebarHideClick(id){
    document.querySelector("#" + id).classList.remove('active');
}
function sidebarToggleClick(id){
    document.querySelector("#" + id).classList.toggle('active');
}
function sidebarShowChild(id){
    document.querySelectorAll('.' + id).forEach(element => {
        element.classList.remove('isHide');
    });
}
function sidebarHideChild(id){
    document.querySelectorAll('.' + id).forEach(element => {
        element.classList.add('isHide');
    });
}
function sidebarHideChildAll(){
    document.querySelectorAll('.child').forEach(element => {
        element.classList.add('isHide');
    });
}
function sidebarClearClickActive(){
    document.querySelectorAll('.click').forEach(element => {
        element.classList.remove('active');
    });
}
function sidebarClearAllClickActive(){
    document.querySelectorAll('.click').forEach(element => {
        element.classList.remove('active');
    });
}
function sidebarHtmldecode(input){
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
}