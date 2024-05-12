

const Blog = () => {
    return (
        <div className="mt-24 ">
            <h1 className="text-center font-lato font-bold text-4xl md:text-5xl py-4">About Information</h1>
           <div>
           <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl  font-lato font-bold">
  What is an access token and refresh token? How do they work and where should
we store them on the client side?

  </div>
  <div className="collapse-content"> 
    <p className="font-lato ">Access tokens and refresh tokens are components of the OAuth 2.0 authentication protocol, commonly used in modern web applications to authorize access to resources on behalf of a user without sharing their credentials.</p>
    <p className="font-lato mt-5"><span className="font-lato font-bold">Access Token:</span><br />

An access token is a credential used by a client to access protected resources on an API server.
It is usually a string that represents the authorization granted to the client and is issued by the authorization server after successful authentication and authorization.</p>
    <p className="font-lato mt-5"><span className="font-lato font-bold">Refresh Token:</span><br />

    A refresh token is a special token used to obtain a new access token after the current access token expires.
Refresh tokens are long-lived compared to access tokens and are used to maintain authentication sessions.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-lato font-bold">
  - What is express js? What is Nest JS?
  </div>
  <div className="collapse-content"> 
    <p className="font-lato pb-2">Express.js is a tool for making websites and applications with Node.js. It helps developers build web things easily. It’s famous for using simple code and letting developers do many things with it.</p>
    <p className="font-lato pt-2">NestJS is a NodeJS framework that is used for building scalable server-side applications. With NestJS, you can have readable and predictable code, all thanks to TypeScript, which makes it more popular. </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-lato font-bold">
  Explain my website code
  </div>
  <div className="collapse-content"> 
    <p>
        <li className="pt-2 pb-2 font-lato">Navbar from Daisy UI: You're using the Navbar component from Daisy UI, a component library for Vue.js and React. This Navbar likely contains navigation links and possibly a logo or other branding elements.</li>
        <li className="pt-2 pb-2 font-lato">Swiper Slider: You've integrated the Swiper Slider component, a popular library for creating touch-friendly sliders and carousels. This component allows you to display images or other content in a slide format that users can swipe through.</li>
        <li className="pt-2 pb-2 font-lato">Firebase Authentication: You're using Firebase Authentication to allow users to sign up and log in to your website. This likely involves creating user accounts using Firebase's authentication services and managing user sessions.</li>
        <li className="pt-2 pb-2 font-lato">MongoDB for Job Data: You're storing job data in a MongoDB database. This involves creating a MongoDB database schema for job listings and using MongoDB queries to add, retrieve, update, and delete job listings.</li>
        <li className="pt-2 pb-2 font-lato">CRUD Operations with Axios: You've implemented CRUD (Create, Read, Update, Delete) functionality for job listings using Axios. This allows users to add new job listings, view existing listings, update job details, and delete listings.</li>
        <li className="pt-2 pb-2 font-lato">JWT is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling signed or encrypted integrity protection, respectively.</li>
        <li className="pt-2 pb-2 font-lato">Tanstack Query is a data-fetching library for React that provides a powerful and flexible API for fetching, caching, synchronizing, and updating server state in your application..</li>




    </p>
  </div>
</div>
           </div>
        </div>
    );
};

export default Blog;