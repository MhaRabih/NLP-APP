function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field and give alert if it is not a valid URL
    const URL = document.getElementById('link').value
    console.log("Checking the submitted URL");
	//check if there is no connection
   if (  Client.URLVal(URL)!=true){
	    alert('That URL is not valid make sure to submit a right URL'); 
     } 
 else
     { 
      console.log("::: Form Submitted :::")
	  document.getElementById('results').style.display="none"; 
	  document.getElementById('loader').style.display="block"; 
     fetch('http://localhost:8081/here/'+URL)
       .then(res => res.json())
        .then(function(res) {
			console.log(res.msg);
			if (res.msg ==='NO internet connection'){
	            document.getElementById('results').style.display="block";
	            document.getElementById('agreement').innerHTML="No internet connection";
            }
            else{
		         document.getElementById('loader').style.display="none"; 
                 document.getElementById('agreement').innerHTML = 'Agreement  ⇨  '+res.agreement;
		         document.getElementById('subjectivity').innerHTML = 'Subjectivity  ⇨  '+res.subjectivity;
		         document.getElementById('confidence').innerHTML = 'Confidence  ⇨  ' +res.confidence;
		         document.getElementById('irony').innerHTML = 'Irony  ⇨   '+res.irony;
		         document.getElementById('results').style.display="block";
            }
	    })
   }
}
    


export {
	handleSubmit,
 }
