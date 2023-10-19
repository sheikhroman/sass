import { supabase } from "supabase"

export default function ProductPage() {
    return <div>Products Page</div>
}
export async function getStaticPaths() {
    const { data: products } = await supabase.from('product').select('slug')
    const getStaticPaths = products.map(product=> ({
        params: {
            slug: product.slug
        }
    }))
    return {
        paths: [{ params: { slug: "1" } }, { params: { id: "2" } }],
        fallback: false,
    }
}
export async function getStaticProps(context) {
    context.params.slug
    return {
        props: {post:{}},
    }
}