


const Hero = () => {
    let marks=80;
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

    </div>
  );
}
export default Hero;