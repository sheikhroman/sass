import Link from "next/link";

export default function ProductCard({product}) {
    return (
        <article className="product-card">
            <Link href={`/products/${product.slug}`}>
                <img src={`/assets/${product.slug}.png`} alt="{product.name}" />
            </Link>
            <header>
                <p>{product.name}</p>
            </header>
            <footer>
                <Link href={`/products/${product.slug}`} className="more">
                    
                </Link>
                <div className="">
                    <span className="pill">product.category</span>
                </div>
            </footer>
        </article>
    )
}
