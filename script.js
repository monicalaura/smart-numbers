let factN = document.querySelector('#factN'); // div of number fact
let factY = document.querySelector('#factY'); // div of year fact
let factTextN = document.querySelector('#factTextN'); 
let factTextY = document.querySelector('#factTextY');
//get inputs for number & year
let numberInput = document.querySelector('#numberInput');
let yearInput = document.querySelector('#yearInput');
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

numberInput.addEventListener('input', getNumberFetch);
yearInput.addEventListener('input', getYearFetch);

//get Fact Ajax


	// Fetch with Fetch API
    function getNumberFetch(){
      let number = numberInput.value;
	  console.log(number);
    
	    
      if(number != ''){	 
     fetch(' https://apiproxy.nsuchy.me/proxy.php?url= http://numbersapi.com'/ +number)
        .then(response => response.text())
        .then(data => {		  
          factN.style.display = 'block';
          factTextN.innerText = data;
		  console.log(data);
        })
        .catch(err => console.log(err)); 
      }
    }

	
	// Fetch with Fetch API
    function getYearFetch(){
      let year = yearInput.value;
      
      if(year != ''){
        fetch('https://apiproxy.nsuchy.me/proxy.php?url= http://numbersapi.com/'+year)
        .then(response => response.text())
        .then(data => {
          factY.style.display = 'block';
          factTextY.innerText = data;
        })
        .catch(err => console.log(err)); 
      }
    }
