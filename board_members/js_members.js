
function template(array) {
    for (let i = 0; i < array.length; i++) {
        if (i == 0) {
            document.getElementsByClassName('selected-board').innerHTML = "";
            code = ``;
        }
        var code = code +
            `
        <div class="heads-info-container">
            <div class="heads-photo-container">
                <a href="" target="_blank">
                    <img
                        class="club-head-image"
                        src="${array[i].Image}"
                    />
                </a>
            </div>      
            <div class="heads-info-container">
                <h3 class="head-name">${array[i].Name}</h3>
                <p class="head-subname" >${array[i].Subname}</p>
            </div>
        </div>`
    }
    return code;
}

window.onload = function () {
    document.getElementById('selected-board').innerHTML = template(info_zero);
}


function selector() {
    var a = document.getElementById("year").value;

    if (a == "21_22") {
        document.getElementById('selected-board').innerHTML = template(info_zero);
    }
    else if (a == "20_21") {
        document.getElementById('selected-board').innerHTML = template(info_one);
    }
    else if (a == "19_20") {
        document.getElementById('selected-board').innerHTML = template(info_two);
    }
    else if (a == "18_19") {
        document.getElementById('selected-board').innerHTML = template(info_three);
    }
    else if (a == "17_18") {
        document.getElementById('selected-board').innerHTML = template(info_four);
    }
    else {
        document.getElementById("selected-board").innerHTML = " AN ERROR HAS OCCURED ";
    }
}

