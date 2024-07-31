import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link>
                    <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="/services1">Services</Link>
                    <ul>
                        <li><Link href="/tax-management">Tax Management</Link></li>
                        <li><Link href="/strategy-planning">Strategy & Planning</Link></li>
                        <li><Link href="/program-manager">Program Manager</Link></li>
                        <li><Link href="/investment-policy">Investment Policy</Link></li>
                        <li><Link href="/financial-advices">Financial Advices</Link></li>
                        <li><Link href="/insurance-strategy">Insurance Strategy</Link></li>
                    </ul>
                </li>
                {/* <li className="dropdown"><Link href="#">Pages</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Team</Link>
                            <ul>
                                <li><Link href="/team">Team Member</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/about-us">About Us</Link></li>
                        <li><Link href="/pricing-table">Pricing Table</Link></li>
                        <li><Link href="/career">Career</Link></li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link href="#">Shop</Link>
                    <ul>
                        <li><Link href="/shop">Products</Link></li>
                        <li><Link href="/product-details">Product Details</Link></li>
                        <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                        <li><Link href="/checkout">Checkout</Link></li>
                    </ul>
                </li> */}
                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-2">Blog Standard</Link></li>
                        <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    )
}
