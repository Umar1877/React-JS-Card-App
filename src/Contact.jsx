import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const formSubmit = (event) => {
        event.preventDefault(); 
        alert(
            `My name is ${data.fullname}.My mobile number is ${data.phone}.email is ${data.email}. Here is what i want to say ${data.msg}`
        )
    };

    return (
        <>
            
        
            <div className="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput3" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={data.msg} onChange={InputEvent} rows="3"></textarea>
                            </div>
                            <div className="col-12">
                                <button className="bt" type="submit">Submit form</button>
                            </div>
                        </form><div class="spacer"></div>

                        </div>
                </div>
            </div>
        </>
    );
};

export default Contact;


