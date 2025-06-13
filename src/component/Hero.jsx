

// login status function
const LoginStatus = (status) => {
    if (status) {
        return "Logged In";
    } else {
        return "Logged Out";
    }
}


const Hero = () => {
    let marks=80;
    let students = ['John', 'Jane', 'Doe', 'Alice', 'Bob'];
    let status = true; // true for logged in, false for logged out
  return (
    <div className="hero">
      <div className="hero-content">
       <img width={300} src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"></img>
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and connect with our community.</p>
        <button className="btn">Get Started</button>
      </div>


    {marks >=80 ? <h1>Brillint Result</h1> : <h1>Need to improve</h1>}



{/* immediately invoked function */}


{(

() => {
    let marks = 90;
    if (marks >= 80) {
        return <h1>Excellent Result</h1>;
    } else {
        return <h1>Need to improve</h1>;
    }

}


)()}

{/* immediately invoked function end */}



{/* loop in jsx start */}
<ol>

{
   
 
   students.map((student,index)=>{
        return <li key={index.toString}>{student}</li>;
    })
}

</ol>


{/* loop in jsx end */}


{/* conditional rendering start */}


<h1>Login status</h1>
<button>{LoginStatus(status)}</button>





{/* conditional rendering end */}






    </div>
  );
}
export default Hero;