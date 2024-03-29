import React from 'react'

export default function Footer() {
  return (
<footer className="text-center lg:text-left bg-blue-900 text-gray-100 relative z-50">

  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="">
        <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          ">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
            className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
            </path>
          </svg>
          weGuide You
        </h6>
        <p>
           Ipsum has been the industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and scrambled it to m
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Products
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-white">Work</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-white">Know Us</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-white">Lorem</a>
        </p>
        <p>
          <a href="#!" className="text-white">Pay</a>
        </p>
      </div>
      <div className="">
        <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Useful links
        </h6>
        <p className="mb-4">
          <a href="#!" className="text-white">Pricing</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-white">Settings</a>
        </p>
        <p className="mb-4">
          <a href="#!" className="text-white">Orders</a>
        </p>
        <p>
          <a href="#!" className="text-white">Help</a>
        </p>
      </div>
      <div className="">
        {/* <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
          Contact
        </h6> */}
        <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path fill="currentColor"
              d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
            </path>
          </svg>
          Indore Madhya pradesh
        </p>
        {/* <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
            </path>
          </svg>
          weGuide@gmail.com
        </p> */}
        {/* <p className="flex items-center justify-center md:justify-start mb-4">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
            </path>
          </svg>
          +022 2576 2345
        </p>
        <p className="flex items-center justify-center md:justify-start">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="print"
            className="w-4 mr-4" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z">
            </path>
          </svg>
          +91 9877653765
        </p> */}
        <div className="col-span-2 pt-8 pr-5 md:pt-2">
                <p className="font-bold uppercase ">Subscribe to our Newsletter</p>
                <p className="py-4">The latest news, articles, ans resources, sent to your inbox weekly.</p>
                <form className="flex flex-col sm:flex-row">
                    <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Enter your email"/>
                    <button className="p-2 mb-4 bg-zinc-100 text-blue-900 rounded-md font-semibold hover:bg-gray-100">Subscribe</button>
                </form>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center p-6 bg-gray-200">
    <span>© 2022 Copyright: </span>
    <a className="text-gray-600 font-semibold" >weGuide- Onwards and Upwards</a>
  </div>
</footer>
  )
}
