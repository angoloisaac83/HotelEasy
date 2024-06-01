import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto">
                <div className="flex flex-wrap max-md:p-[25px] justify-between items-center">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold">Contact Us</h4>
                        <p className="mt-2">123 Main Street<br />City, State ZIP<br />Email: info@example.com<br />Phone: 123-456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h4 className="text-xl font-semibold">Links</h4>
                        <ul className="mt-2">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Rooms</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h4 className="text-xl font-semibold">Stay Connected</h4>
                        <div className="mt-2">
                            <a href="#" className="mr-4"><FaFacebookF /></a>
                            <a href="#" className="mr-4"><FaTwitter /></a>
                            <a href="#" className="mr-4"><FaInstagram /></a>
                            <a href="#" className="mr-4"><FaLinkedinIn /></a>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-700 my-6" />
                <p className="text-center">&copy; 2024 HotelEase. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
