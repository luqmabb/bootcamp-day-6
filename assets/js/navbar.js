let close = true
function openNav() {
    if(close){
        document.getElementById('sideNav').style = 'display: block;';
        close = false
    }else if(!close){
        document.getElementById('sideNav').style = 'display: none;';
        close = true
    }
}
