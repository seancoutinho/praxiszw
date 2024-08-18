import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link>
                </li>
                <li className="dropdown"><Link href="/services">Services</Link>
                    <ul>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/bookkeeping">Bookkeeping & Accounting</Link></li>
                        <li><Link href="/forensic-audit">Forensic Audit</Link></li>
                        <li><Link href="/financial-advices">Financial Advice</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="about-us">Learn More</Link>
                    <ul>
                        <li><Link href="/team">Team</Link>
                        </li>
                        <li><Link href="/about-us">About Us</Link></li>
                        {/* <li><Link href="/career">Career</Link></li> */}
                        <li><Link href="/faq">FAQ’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                    </ul>
                </li>
                {/* <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li> */}
                <li><Link href="#">Blog</Link>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
