import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white px-12 pb-10 text-black">
      <div className="mb-24 flex flex-col sm:flex-row items-start sm:gap-28 gap-8">
        <img src="/logo.svg" alt="" className="w-[328px] h-[84px]"></img>
        <div>
          <h3 className="mb-2 font-bold text-lg">Address</h3>
          <p>
            JSS Academy of Technical Education,
            <br />
            Sector-62, Noida,
            <br />
            Uttar Pradesh,
            <br />
            India
            <br />
            Pincode - 201301
          </p>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-lg">Get In Touch</h3>
          <div className="flex gap-[1px]">
            <Link to="mailto:officialquanta@gmail.com">
              officialquanta@gmail.com
            </Link>
            <img
              src="/arrow_up_right.svg"
              alt=""
              className="w-[20px] h-[20px]"
            ></img>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-bold text-lg">Socials</h3>
          <div className="flex flex-col">
            <Link to="/">Instagram</Link>
            <Link to="/">LinkedIn</Link>
            <Link to="/">Discord</Link>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>© 2023 JSS Quanta</div>

        <Link to="/zealicon" className="flex gap-[1px]">
          <img
            src="/arrow_up_left.svg"
            alt=""
            className="w-[20px] h-[20px]"
          ></img>
          <p>Get To Top</p>
        </Link>
      </div>
    </footer>
  );
}
