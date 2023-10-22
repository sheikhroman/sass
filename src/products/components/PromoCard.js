import Link from "next/link";

export default function PromoCard() {
    return (
    <section>
            <div className="">
                <div className="bg-salmon">
                    <h4>Get Instant Access</h4>
                    <p style={{fontSize: '1.2rem'}}>Access this products plus dozens of others when you subcribe.</p>
                </div>
            </div>     
            <Link href="/pricing" className="primary-button">Purchase</Link>
    </section>
    )
}
