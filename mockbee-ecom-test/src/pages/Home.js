import {IMAGES} from "../images/images"
const Home = () => {
    return (
        <>
        <header>
        <div className ="header-container">
            <nav className="main-nav">
                <a href="index.html">
                    <h1 className="logo">AssetPoint</h1>
                </a>
                <div className="search-bar br-sm">
                    <span className="material-icons">search</span>
                    <input type="text" placeholder="search" />
                </div>
                <ul className="right-nav">
                    <li><a href="./pages/auth/login.html" className="btn btn-primary">Login</a></li>
                    <li>
                        <div className="badge-ctn mg-sm">
                            <a href="./pages/wishlist-management/wishlist.html">
                                <span className="material-icons">favorite_border</span>
                                <span className="badge-icon br-full badge-count fw-bold">6</span>
                            </a>
                        </div>
                        </li>
                    <li>
                        <div className="badge-ctn mg-sm">
                            <a href="./pages/cart-management/cart-manage.html">
                                <span className="material-icons">shopping_cart</span>
                                <span className="badge-icon br-full badge-count badge-count fw-bold">3</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    {/* <!-- main wrapper container --> */}
    <section className="container">
        {/* <!-- hero --> */}
        <div className="hero-ctn">
            <div className="hero-txt">
                <h1>Discover the best personal finance content through timeless books by top authors</h1>
                <div className="hero-btn">
                    <a href="./pages/product-listing/product-listing.html" className="btn btn-primary cta-btn">Get Started</a>
                </div>
            </div>
            <div className="hero-img">
                <img className="img-responsive" src={IMAGES.heroImg} alt="hero-image" />
            </div>
        </div>

        {/* <!-- categories --> */}
        <div className="category-ctn">
            <h2 className="text-center mg-lg">Featured Categories</h2>
            <div className="category">
                <div className="category-single">
                    <img className="img-responsive" src={IMAGES.selfHelp} alt="category-self-help" />
                    <div className="image-overlay">
                        <p className="fw-bold">Self Help</p>
                    </div>
                </div>
                <div className="category-single">
                    <img className="img-responsive" src={IMAGES.stock} alt="category-stock" />
                    <div className="image-overlay">
                        <p className="fw-semibold">Stock Investing</p>
                    </div>
                </div>
                <div className="category-single">
                    <img className="img-responsive" src={IMAGES.realEstate} alt="category-real-estate" />
                    <div className="image-overlay">
                        <p className="fw-bold">Real Estate Invetsing</p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- week book --> */}
        <h2 className="text-center mg-lg">Book of the Week</h2>
        <div className="weekly-book-ctn">
            <div className="weekly-book-img">
                <img className="img-responsive" src={IMAGES.book1} alt="book-of-the-week" />
            </div>
            <div className="weekly-book-txt">
                <h2 className="mg-bottom-md">The Psychology of Money: Timeless lessons on wealth, greed, and happiness</h2>
                <h3 className="weekly-book-author">by Morgan Housel</h3>
                <a href="./pages/single-product-page/single-product.html" className="btn btn-primary cta-btn">Read More</a>
            </div>
        </div>
    </section>

    <footer>
        <p>Made by Pratik Devle</p>
        <div className="footer-links">
            <a href="https://github.com/Pratik1005"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/pratik-devle-296184160"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://twitter.com/DevlePratik"><i className="fab fa-twitter"></i></a>
        </div>
        <p className="copyright">© 2022 AssetPoint</p>
    </footer>
        </>
    );
}

export {Home};