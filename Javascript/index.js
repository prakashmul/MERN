const classes = document.getElementsByClassName("example");
        classes[2].style.background = "red";
        classes[2].style.color = "white";
        classes[2].innerHTML = "This coming from JS";

        function addNumber() {
            setTimeout(() => {
                window.alert("This is a alert message")
            } , 1000);

            document.getElementById("js").innerHTML = "Hello Number";
        }

        //Quantity
        let Quantity = document.getElementById("quantity").innerHTML = 0;
        function decreaseProduct() {
            Quantity--
            if (Quantity <= 0){
                const res = document.getElementById("dec").disabled = true
                window.alert("Quantity cannot be less than 0")
            } else {
                document.getElementById("quantity").innerHTML = Quantity
            }
        }

        function increaseProduct(){
            Quantity++
            const res = document.getElementById("dec").disabled = false
            document.getElementById("quantity").innerHTML = Quantity
        }