
// Round A Number 

const roundnum = () => {

    let inputval = document.getElementById("inp1").value;
    let convert = Number(inputval);
    let rnd = Math.round(convert);
    document.getElementById("spn1").innerHTML = "The Rounded Number is :" + " " + rnd;
    getttime();

}


// Find Index of Entered Character From A String

const find = () => {

    let  str1 = document.getElementById("inp1").value;
    let charac =  prompt("Please Enter Character/Word To Find");

    if (charac == ""){
        alert ("Please Enter Character/Word To Find");
        return;
    }

    let newstr1 = str1.toLowerCase();
    let newcharac = charac.toLowerCase();

    let find = newstr1.indexOf(newcharac);

    document.getElementById("spn1").innerHTML = "The Original String :" + " " + str1 + "<br>" + "Character/Word To Find :" + " " + charac + "<br>" + "The Entered Character is at index :" + " " + find;
    getttime();

}

// This Method is only for Strings
// Replace A Character/Word In A String And Returns A New String

const replace = () => {

    let str1 = document.getElementById("inp1").value;

    let wordtoreplace = prompt("Enter Character/Word To Replace");
    if (wordtoreplace == ""){
        alert ("Please Enter Something To Replace");
        return;
    }

    let wordtobereplaced = prompt ("Enter Character/Word To Be Replaced");
    if(wordtobereplaced == ""){
        alert ("Please Enter What To Replace With");
        return;
    }

    let done = str1.replace(wordtoreplace , wordtobereplaced);

    document.getElementById("spn1").innerHTML = "The Original String is :" + " " + str1 + "<br>" + "The Character/Word To Replace :" + " " + wordtoreplace + "<br>" + "The Character/Word To Be Replaced :" + " " + wordtobereplaced + "<br>" + "The New String is :" + " " + done;

    getttime();

}

// Get Hours And Minutes Whenever The Above Buttons Will Be Clicked 

function getttime () {

    let v = new Date();
    let gettime = v.getHours() + ":" + v.getMinutes();
    if (v.getHours() < 9){
       let gettime0 = "0"+v.getHours() + ":" +v.getMinutes();
       document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime0;
    }

    else if (v.getMinutes() < 9){
        let gettime1 = v.getHours() + ":" + "0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime1;
    }

    else if (v.getHours() && v.getMinutes() < 9){
        let gettime2 = "0"+v.getHours() + ":" + "0"+v.getMinutes();
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime2;
     }

    else {
        document.getElementById ("spn2").innerHTML = "You clicked the button at" + " "+gettime;
    }

}
