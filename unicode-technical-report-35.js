function format(date, str_j){
    let resultat_j = String(str_j);
    let date_j = new Date(date);

    if (resultat_j.includes("yyyy")){
        resultat_j = resultat_j.replace(/yyyy/g, Math.abs(date_j.getFullYear()).toString().padStart(4, "0"))
    } else {
        resultat_j = resultat_j.replace(/y/g, Math.abs(date_j.getFullYear()))
    }


    if (resultat_j.includes("dd")){
        resultat_j = resultat_j.replace(/dd/g, date_j.getDate().toString().padStart(2, "0"))
    }else {
        resultat_j = resultat_j.replace(/d/g, date_j.getDate().toString())
    }
    if (resultat_j.includes("hh")){
        resultat_j = resultat_j.replace(/hh/g, String(H(date_j)).padStart(2, "0"))
    }else{
        resultat_j = resultat_j.replace(/h/g, H(date_j))
    }

    if (resultat_j.includes("mm")){
        resultat_j = resultat_j.replace(/mm/g, date_j.getMinutes().toString().padStart(2, "0"))
    }else {
        resultat_j = resultat_j.replace(/m/g, date_j.getMinutes())
    }

    if (resultat_j.includes("MMMM")){
        resultat_j = resultat_j.replace(/MMMM/g, monthsLong[date_j.getMonth()])
    } else if (resultat_j.includes("MMM")){
         resultat_j = resultat_j.replace(/MMM/g, months[date_j.getMonth()])
    } else if (resultat_j.includes("MM")){
         resultat_j = resultat_j.replace(/MM/g, (date_j.getMonth()+1).toString().padStart(2, "0"))
    } else {
        resultat_j = resultat_j.replace(/M/g, (date_j.getMonth()+1).toString())
    }

    if (resultat_j.includes("EEEE")){
        resultat_j = resultat_j.replace(/EEEE/g, daysLong[date_j.getDay()])
    } else {
        resultat_j = resultat_j.replace(/E/g, days[date_j.getDay()])
    }

    if (str_j.includes("a")){
        resultat_j =  resultat_j.replace(/a/g, a(date_j))
    }
    resultat_j = resultat_j.replace(/ss/g, date_j.getSeconds().toString().padStart(2, "0"))
    resultat_j = resultat_j.replace(/s/g, date_j.getSeconds())
    
    resultat_j = resultat_j.replace(/HH/g, date_j.getHours().toString().padStart(2, "0"))
    resultat_j = resultat_j.replace(/H/g, date_j.getHours())

    resultat_j = resultat_j.replace(/GGGG/g, gggg(date_j))
    resultat_j = resultat_j.replace(/G/g, g(date_j))
    

    return resultat_j
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const daysLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function H(date_j){
    var hours = date_j.getHours();
    return hours%12
}

function a(date_j){
    var hours = date_j.getHours();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    return ampm
}

function gggg(date_j){
    let resultat_j = ""
    if (date_j.getFullYear() > 0){
        resultat_j = "Anno Domini"
    } else {
        resultat_j = "Before Christ"
    }
    return resultat_j
}

function g(date_j){
    let resultat_j = ""
    if (date_j.getFullYear() > 0){
        resultat_j = "AD"
    }else {
        resultat_j = "BC"
    }
    return resultat_j
}
