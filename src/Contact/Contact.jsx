import { useEffect, useState } from "react";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [preferedContactMethod, setPreferedContactMethod] = useState("");
  //   const [newsletterPref, setNewsletterPref] = useState({
  //     newsletter: false,
  //     updates: false,
  //   });
  //   const [country, setCountry] = useState("");
  //   //   useEffect(() => {
  //   //     console.log(name);
  //   //     console.log(newsletterPref);
  //   //     console.log(preferedContactMethod);
  //   //     console.log(country);
  //   //   });
  //   //   const handleContactMethodChange = (e) => {
  //   //     setPreferedContactMethod(e.target.value);
  //   //   };
  //   const handleCheckboxChange = (e) => {
  //     const { name, checked } = e.target;
  //     setNewsletterPref((prev) => ({ ...prev, [name]: [checked] }));
  //   };
  //   const submitForm = (e) => {
  //     console.log("submitted");
  //     console.log(name);
  //     console.log(newsletterPref);
  //     console.log(preferedContactMethod);
  //     console.log(country);
  //     e.preventDefault();
  //   };
  //   return (
  //     <>
  //       <form onSubmit={(e) => submitForm(e)}>
  //         <label>Name</label>
  //         <input
  //           type="text"
  //           name="name"
  //           onChange={(e) => setName(e.target.value)}
  //         />{" "}
  //         <br />
  //         <label>Preferred Contact Method</label> <br />
  //         <label>
  //           <input
  //             type="radio"
  //             name="contactMethod"
  //             value="email"
  //             checked={preferedContactMethod === "email"}
  //             onChange={(e) => setPreferedContactMethod(e.target.value)}
  //           />
  //           Email
  //         </label>
  //         <label>
  //           <input
  //             type="radio"
  //             name="contactMethod"
  //             value="phone"
  //             checked={preferedContactMethod === "phone"}
  //             onChange={(e) => setPreferedContactMethod(e.target.value)}
  //           />
  //           Phone
  //         </label>{" "}
  //         <br />
  //         <label>Newsletter Preferences</label> <br />
  //         <label>
  //           <input
  //             type="checkbox"
  //             name="newsletter"
  //             onChange={handleCheckboxChange}
  //           />
  //           Subscribe to Newsletter
  //         </label>
  //         <label>
  //           <input
  //             type="checkbox"
  //             name="updates"
  //             onChange={handleCheckboxChange}
  //           />
  //           Receive Updates
  //         </label>{" "}
  //         <br />
  //         <label>Choose a Country</label>
  //         <select name="country" onChange={(e) => setCountry(e.target.value)}>
  //           <option value="usa">United States</option>
  //           <option value="canada">Canada</option>
  //           <option value="uk">United Kingdom</option>
  //           <option value="australia">Australia</option>
  //         </select>{" "}
  //         <br />
  //         <button type="submit">Submit</button>
  //       </form>
  //     </>
  //   );

  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    setDetails({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={details.email}
            name="email"
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={details.password}
            name="password"
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
