setInterval(function (){
    document.getElementById("scroller").style.transform = "translateY(-8rem)";

    setTimeout(function up1() {
        document.getElementById("scroller").style.transform = "translateY(-16rem)";
    }, 500);

    setTimeout(function up2() {
                document.getElementById("scroller").style.transform = "translateY(-17rem)";
            }, 500);
            
    setTimeout(function up3() {
                        document.getElementById("scroller").style.transform = "translateY(0rem)";
                    }, 2000);
        }
    ,3000);