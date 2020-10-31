
// chrome.tabs.getCurrent((tab) => {

//     console.log(tab.url);

//     if (tab.url.inudes("onlinekhabr")) {


//     }




// })



console.log("loaded  llll")
var sideAd = document.getElementsByClassName('top__ads colspan9 flex-box');
console.log(sideAd);


for (let i = 0; i <= sideAd.length; i++) {
    sideAd[i].remove();
}

// var fulWidthBanner = document.getElementsByClassName('okam-each-ad');
// console.log(fulWidthBanner);


// for (let i = 0; i <= fulWidthBanner.length; i++) {
//     fulWidthBanner[i].remove();
// }



// var side = document.getElementsByClassName('add__fullwidth');
// console.log(side);


// for (let i = 0; i <= side.length; i++) {
//     var element = side.item(i).ELEMENT_NODE;
//     side.item(i).parentElement.removeChild(element)

// }



var small_add = document.getElementsByClassName('ok__container');
console.log(small_add);


for (let i = 0; i <= small_add.length; i++) {
    var element = small_add.item(i).ELEMENT_NODE;
    small_add.item(i).parentElement.removeChild(small_add.item(i))

}

var side__add = document.getElementsByClassName('side__add');
console.log(side__add);


if (side__add) {
    for (let i = 0; i <= side__add.length; i++) {
        var element = side__add.item(i).ELEMENT_NODE;
        side__add.item(i).parentElement.removeChild(side__add.item(i))

    }
}


var left__add = document.getElementsByClassName('left__add');
console.log(left__add);


if (left__add) {
    for (let i = 0; i <= left__add.length; i++) {
        var element = left__add.item(i).ELEMENT_NODE;
        left__add.item(i).parentElement.removeChild(left__add.item(i))

    }
}