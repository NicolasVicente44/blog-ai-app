import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* first column */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            dolorem voluptate fugiat! Odit pariatur accusamus excepturi dicta
            perferendis aliquid? A iure similique voluptates eum ea voluptatum
            porro dolorem in sed!
          </p>
          <p>© BLOG OF THE FUTURE - ALL RIGHTS RESERVED</p>
        </div>
        {/* second column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Legal</p>
          <p className="my-5">Financial</p>
          <p className="my-5">Developers</p>
        </div>
        {/* third column */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">blogofthefuture@gmail.com</p>
          <p className="my-5">123 Lakeway Avenue</p>
          <p className="my-5">(333)-333-3333</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
