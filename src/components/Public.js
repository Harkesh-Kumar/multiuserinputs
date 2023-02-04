import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Kumar Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Cebu City, kumar Repairs  provides a trained staff ready to meet your gadgets repair needs.</p>
                <address className="public__addr">
                    Kumar Repairs<br />
                    555 Foo Drive<br />
                    Cebu City, Cebu 6000<br />
                    <a href="tel:+639568955115">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Kumar</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public