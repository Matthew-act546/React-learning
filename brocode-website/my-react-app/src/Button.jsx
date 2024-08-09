function Button() {

    // INLINE STYLING METHOD 3
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        display: "block",
        margin: "40px auto",
    }

    const divStyle = {
        width: "300px",
        height: "400px",
        border: "1px black solid",
        margin: "0 auto",
        padding: "20px",
    }

    // function createP(text) {
    //     let p = document.createElement("p");
    //     const r =document.getElementsByClassName('hi')[0].appendChild(p.innerHTML = text)
    //     return p
    // }



    let count = 0;
    const handleClick = (names) => { 
        if(count < 3) {
            count++;
            console.log(`Stop! You click me ${names}, ${count} times`);
        } else {
            console.log(`OUCH!!! You maniac ${names} you've been clicking my abs`);
        }
    };


    const handleClick2 = (name) => console.log(`OUCH ${name}! STOP!!!`);

    const handleClick3 = (e) => e.target.textContent = "OUCH!";
    return( 
        <>
            <button style={styles} onDoubleClick={(e) => handleClick3(e)}>Click me</button>
            <div className="hi" style={divStyle}></div>
        </>
    );
}

export default Button