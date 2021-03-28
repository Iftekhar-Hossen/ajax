// json file open and data transfer

// let xmlhttp = new XMLHttpRequest()
// xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         var date = (this.responseText)
//         jsonDate(date)
//     }
// }
// xmlhttp.open("GET", "js/data.json", true)
// xmlhttp.send()

// function jsonDate(jsonObj) {
//     // console.log(jsonObj)
//     let jsObj = JSON.parse(jsonObj)
//     for (x in jsObj.person) {
//         var person = jsObj.person
//         // console.log(person[x])
//         for (y in person[x]) {
//             console.log(y + ":" + "\n" + person[x][y] + "\n")

//         }
//     }
// }


// AJAX 


let data = document.getElementById("getData")
data.addEventListener("click", getData)

function getData() {
    let xhr = new XMLHttpRequest
    xhr.open("GET", "data.txt", true)

    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText)
            document.getElementById("iframe").src = `${this.responseText}`
        }
    }
    xhr.send()
}