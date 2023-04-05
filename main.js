const input = document.querySelector(".input1");
const button = document.querySelector(".input2");
var count = 0;
function handlesubmit() {
  if (input.value == "") {
    alert("ALEEERT !!!!!!!!!!!!!!!!");
  } else {
    const taskcontainer = document.querySelector(".task-container");
    taskcontainer.innerHTML += `
     <div class="task">
        <p>
        &#149;  
         <span>${input.value}</span>
        
        </p>
          
      
          <input
            name="cssCheckbox"
            id="demo_opt_${count}"
            type="checkbox"
            class="css-checkbox check"
         
          />
          <label for="demo_opt_${count}"></label>
       
      </div>
  
  
  `;
    count++;
    input.value = "";
    const checks = document.querySelectorAll(".check");
    checks.forEach((check) => {
      check.addEventListener("click", (event) => {
        event.target.parentNode.classList.toggle("finished");
      });
    });
  }
}
button.addEventListener("click", handlesubmit);
input.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    handlesubmit();
  }
});
