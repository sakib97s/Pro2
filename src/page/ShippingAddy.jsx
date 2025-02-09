import { Link } from "react-router-dom"
import Container from "../components/Container"
import Bannerreusable from "../components/reusable/Bannerreusable"

const ShippingAddy = ({ headline, pname, home, page }) => {
    return (
        <section>
            <Bannerreusable headline='Shipping address' pname='Shipping address' home='Home' page='Page' />
            <Container className='mb-10 flex justify-between'>
                <div className="w-[60%] py-10 px-[30px] bg-[#F8F8FD] rounded-md drop-shadow-md">
                    <div className="flex justify-between items-center mb-10">
                        <h4 className="font-jose font-bold text-[18px] text-[#1D3178]">Contact Information</h4>
                        <div className="flex items-center">
                            <p className="font-lato font-medium text-[14px] text-[#C1C8E1]">Already have an account?</p>
                            <Link className="font-lato font-medium text-[14px] text-[#C1C8E1] hover:text-[#FB2E86] ease-in-out duration-500" to='/login'>Log in</Link>
                        </div>
                    </div>
                    <div className="border-b-[2px] border-[#BFC6E0]">
                        <input type="text" placeholder="Email or mobile phone number" className="border-none w-full bg-[#F8F8FD] focus:ring-[#FB2E86] focus:border-[#FB2E86] placeholder:font-lato placeholder:font-semibold placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-semibold text-[15px] text-[#000]" />
                    </div>
                    <div className="flex items-center py-10">
                        <input type="checkbox" name="" id="" className="checked:bg-[#19D16F] focus:ring-[#19D16F] focus:border-[#19D16F] border-[#19D16F]" />
                        <p className="font-lato font-medium text-[12px] text-[#8A91AB] pl-[10px]">Keep me up to date on news and excluive offers</p>
                    </div>
                    <div className="">
                        <h4 className="font-jose font-bold text-[18px] text-[#1D3178]">Shipping address</h4>
                        <div className="flex justify-between my-5">
                            <div className="border-b-[2px] border-[#BFC6E0] w-[48%]">
                                <input type="text" placeholder="First name" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                            <div className="border-b-[2px] border-[#BFC6E0] w-[48%]">
                                <input type="text" placeholder="Last name (optional)" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                        </div>
                        <div className="border-b-[2px] border-[#BFC6E0] my-5">
                            <input type="text" placeholder="Address" className="w-full border-none focus:ring-[#FB2E86] focus:border-[#FB2E86] bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                        </div>
                        <div className="border-b-[2px] border-[#BFC6E0] my-5">
                            <input type="text" placeholder="Appaetnentment,suit,e.t.c (optinal)" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                        </div>
                        <div className="border-b-[2px] border-[#BFC6E0] my-5">
                            <input type="text" placeholder="City" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                        </div>
                        <div className="flex justify-between my-5">
                            <div className="border-b-[2px] border-[#BFC6E0] w-[48%]">
                                <input type="text" placeholder="Bangladesh" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                            <div className="border-b-[2px] border-[#BFC6E0] w-[48%]">
                                <input type="text" placeholder="Postal Code" className="w-full focus:ring-[#FB2E86] focus:border-[#FB2E86] border-none bg-[#F8F8FD] placeholder:font-lato placeholder:font-medium placeholder:text-[14px] pl-0 placeholder:text-[#C1C8E1] font-lato font-medium text-[15px] text-[#000]" />
                            </div>
                        </div>
                    </div>
                    <Link to="/login"><button className="font-jose font-semibold text-[16px] text-[#fff] py-[12px] px-[24px] border-[1px] border-[#FB2E86] bg-[#FB2E86] rounded-md mt-10">Continue Shipping</button></Link>
                </div>
                <div className="w-[25%]">
                    <div className="p-[30px] bg-[#F4F4FC] rounded-md drop-shadow-md">
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Subtotals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£219.00</p>
                        </div>
                        <div className="border-b-[3px] border-[#E8E6F1] flex justify-between items-center my-7">
                            <h6 className="font-lato font-semibold text-[18px] text-[#1D3178]">Totals:</h6>
                            <p className="font-lato font-normal text-[16px] text-[#15245E]">£325.00</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="" id="" className="checked:bg-[#19D16F] checked:border-[#19D16F] border-[#19D16F]" />
                            <p className="font-lato font-normal text-[12px] text-[#8A91AB] pl-[10px]">Shipping & taxes calculated at checkout</p>
                        </div>
                        <Link to='/Order-Complete'><button className="font-lato font-bold text-[14px] text-[#fff] py-[10px] border border-[#19D16F] bg-[#19D16F] w-full text-center rounded-md mt-10">Proceed To Checkout</button></Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default ShippingAddy