function time12to24(str){
    if (str[5]=="P" || str[6]=="P"){
    console.log(Number(str.substr(0,5).split(":")[0])+12+":"+str.substr(0,5).split(":")[1]);
    }
    else {
        console.log(str.substr(0,5));
    }
}
time12to24("08:45 AM")