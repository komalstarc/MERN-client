import React , {useState} from "react";

export default function Login(){
    const [uname,setUname] = useState();
    const [pass, setPass] = useState();
    return(
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="enter name" value={uname} />
                <br/><br/>
                <input type="text" placeholder="enter password" value={pass} />
                <br/><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}