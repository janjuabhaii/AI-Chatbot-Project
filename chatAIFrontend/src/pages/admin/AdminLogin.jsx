import axios from "axios";
import React, { useState } from "react";
import { Footer } from "../../components/footer";

export const AdminLogin = () => {
    
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
       
        axios.post('api/login', {
            email: data.get('email'),
            password: data.get('password')
        }).
            then((response) => {
                if(response.data.status === "success"){
                    localStorage.setItem('admin', JSON.stringify(response.data.admin));
                    window.location.href = "/admin";
                }
                else{
                    setError(response.data.message);
                }
            })
            
    }

    return (
        <>        <main style={{minHeight: "95%", backgroundColor: "whiteSmoke"}}>
        <section className="gradient-custom">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="text-center mb-5 mt-100 "><img src="../../assets/images/rebot/logo.png" style={{maxHeight: "100px"}} alt="Logo" /></div>
                    <form className="w-50 mx-auto border p-5 bg-white" onSubmit={handleSubmit}>
                    <div className="text-center">
                        <h4 className="mb-5 h3 text-muted">Admin Login</h4>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="email" name="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <input type="password" name="password" id="form2Example2" className="form-control" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>

                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-2">Sign in</button>

                    {error && <div className="text-danger mb-4">{error}</div>}

                    </form>
                </div>
            </div>
        </div>

        </section>
        </main>
        <Footer />
        </>

    )
}