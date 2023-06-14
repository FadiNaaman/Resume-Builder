window.addEventListener("DOMContentLoaded", () => {

    let path = window.location.href.split("/")[4];

    let nav = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");

    for(let i = 0; i < nav.length; i++){
        let list = nav[i].getElementsByTagName("a");
        let link;
        //Get the link of each clickable navigation
        if (list.length > 0) {
            link = list[0].href.split("/")[4];
            //Change background color
            if(link == path){
                nav[i].style.backgroundColor = "#77F";
                list[0].style.color = "#FFF";
            } else {
                nav[i].style.backgroundColor = "transparent";
                list[0].style.color = "#777";
            }
        }
    }
});