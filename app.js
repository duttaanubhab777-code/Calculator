let input = document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnText = e.target.innerHTML.trim();
        
        if (btnText === "=") {
            if (string !== "") { // ফাঁকা অবস্থায় = চাপলে যেন এরর না আসে
                try {
                    string = String(eval(string));
                    input.value = string;
                } catch (error) {
                    // ভুল ইনপুট দিলে (যেমন 5/*5) Error দেখাবে
                    input.value = "Error";
                    string = "";
                }
            }
        } 
        else if (btnText === "AC") {
            string = "";
            input.value = ""; // ভ্যালু পুরোপুরি ফাঁকা করে দেওয়া হলো, ফলে Placeholder "0" দেখা যাবে
        } 
        else if (btnText === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else if (btnText === "%") {
            if (string !== "") {
                try {
                    string = String(eval(string) / 100);
                    input.value = string;
                } catch (error) {
                    input.value = "Error";
                    string = "";
                }
            }
        }
        else {
            // যদি আগে থেকে Error লেখা থাকে, তাহলে নতুন নম্বরে চাপলে আগেরটা মুছে যাবে
            if (input.value === "Error") {
                string = btnText;
            } else {
                string += btnText;
            }
            input.value = string;
        }
    });
});



