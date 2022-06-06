const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`;

const container = document.getElementById("voucher_list");

fetch(url).then(function(res){
    return res.json();
})
.then(function(res){
    res = res[0].vouchers;
    append(res);
    // console.log(res);
})
.catch(function(err){
    console.log(err);
})
let data = JSON.parse(localStorage.getItem("purchase")) || [];
function append(res){
    res.forEach(function(el){
        let div = document.createElement("div");
        div.setAttribute("class","voucher");

        let image = document.createElement("img");
        image.src = el.image;
        image.setAttribute("id","img");

        let namee = document.createElement("p");
        namee.innerText = el.name;
        namee.setAttribute("id","namee");

        let price = document.createElement("p");
        price.innerText = el.price;
        price.setAttribute("id","price");

        let button = document.createElement("button");
        button.innerText = "BUY";
        button.setAttribute("class","buy_voucher");
        button.addEventListener("click",function(){
            items(el);
        })

    div.append(image,namee,price,button);
    container.append(div);

    function items(el){
        data.push(el);
        localStorage.setItem("purchase",JSON.stringify(data));
    }
      
})
    
}

    // function items(el){
    //     var user = JSON.parse(localStorage.getItem("user"));
    //     if(user.wallet >= el.price){
    //         user.wallet -= el.price;
    //         localStorage.setItem("user",JSON.stringify(user));
    //         alert("Hurray! purchase successful");
    //         document.getElementById("wallet_balance").innerText = user.wallet;

    //         var purchase = JSON.parse(localStorage.getItem("purchase"));
    //         if(purchase == null){
    //             bag = [];
    //         }
    //         bag.push(el);
    //         localStorage.setItem("purchase",JSON.stringify(bag));
    //     }
    //     else{
    //         alert("Sorry! insufficient balance")
    //     }
    // };
