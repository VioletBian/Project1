
var arr_country = ["Choose a country", "China", "Japan", "Italy", "America", "Australia", "England"];
var arr_city = [
    ["Choose a city"],
    ['Shanghai', 'Jiangsu', 'Beijing', 'Guangzhou','Hangzhou','Wuhan'],
    ['Tokyo', 'Osaka', 'Kamakura'],
    ['Rome', 'Milan', 'Venice', 'Florence'],
    ['New York', 'San Francisco', 'Washington','California','Ohio'],
    ['Sydney', 'Melbourne', 'Canberra'],
    ['London', 'Birmingham', 'Glasgow', 'Manchester']
];
function id$(x) {
    return document.getElementById(x);
}
function class$(y){
    return document.getElementsByClassName(y);
}


//遍历的添加国家数据
for (var i = 0; i < arr_country.length; i++) {
    var op = document.createElement("option");
    op.innerText = arr_country[i];
    id$("country").appendChild(op);
}
//设置默认值
var on = document.createElement("option");
on.innerText = arr_city[0];
id$("city").appendChild(on);

id$("country").onchange = function (){
    console.log("selectedIndex= " + this.selectedIndex);
    //selectedIndex表示选中的索引值
    var index = this.selectedIndex;

    //添加前先删除sp
    id$("city").innerHTML = "";
    //遍历的添加城市数据
    for (var i = 0; i < arr_city[index].length; i++) {
        var sp = document.createElement("option");
        sp.innerText = arr_city[index][i];
        id$("city").appendChild(sp);
    }
}


function hotCountrySelector(){
    for (var i = 0; i < arr_country.length; i++){
        if (arr_country[i] == this.innerText){
            var options = id$("country").children;
            options[i].selected=true;
            break;
        }
    }

}
