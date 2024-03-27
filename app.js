const navWeapper = document.querySelector(".nav-wrapper");
const crossBtn = document.querySelector(".cross-icon");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const sortProductBy = document.getElementById("sortProductBy");
const sizeFilter = document.getElementById("filter-by-size");
const colourFilter = document.getElementById("filter-by-colour");
const fitFilter = document.getElementById("filter-by-fit");
const patternFilter = document.getElementById("filter-by-pattern");
const typeFilter = document.getElementById("filter-by-type");

// header templet start
class RichApparelHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- top nav area -->

    <section class="nav-wrapper">
      <div id="nav-area">
        <div class="logo"><span class="text-bold">Rich</span>Apparel</div>

        <div id="nav">
          <div id="main-nav">
            <ul>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Cashmere</a>
              </li>
              <li>
                <a href="#">SmileyWorld</a>
              </li>
              <li>
                <a href="#">Case Bears</a>
              </li>
              <li>
                <a href="#">Lifestyle</a>
              </li>
            </ul>
          </div>

          <div id="icon-nav">
            <ul>
              <li>
                <img src="img/uk.svg" alt="" />
              </li>
              <li>
                <img src="img/search.svg" alt="" />
              </li>
              <li>
                <img src="img/heart.svg" alt="" />
              </li>
              <li>
                <img src="img/message.svg" alt="" />
              </li>
              <li>
                <img src="img/person.svg" alt="" />
              </li>
              <li>
                <img src="img/cart.svg" alt="" />
                <span id="product-added-menu-counter">0</span>
              </li>
            </ul>
          </div>
          <div class="cross-icon">
            <img src="img/cross-icon.png" alt="" />
          </div>
        </div>
        <div class="hamburger-icon">
          <img src="img/hamburger-icon.png" alt="" />
        </div>
      </div>
    </section>

    `;
  }
}

customElements.define("rich-apparel-header", RichApparelHeader);
// header templet end

// footer templet end
class RichApparelFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
   
    <!-- footer area start -->

    <!-- horizontal line before sign up form -->
    <section>
      <div id="horizontal-line-before-footer-form">
        <hr />
      </div>
    </section>

    <!-- social icon and form area -->
    <section>
      <div id="footer-social-signup-form">
        <div id="social-button-area">
          <div class="social-icon">
            <img src="img/facebook-black.svg" alt="" />
          </div>
          <div class="social-icon">
            <img src="img/twiter-black.svg" alt="" />
          </div>
          <div class="social-icon">
            <img src="img/instagram-black.svg" alt="" />
          </div>
        </div>
        <div class="signup-form-area">
          <h4>Sign up and get 15% off</h4>
          <form>
            <input class="footer-signup-form" type="text" placeholder="Email" />
            <button class="btn btn-sm">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>

    <!-- horizontal line after sign up form -->
    <section>
      <div id="horizontal-line-after-footer-form">
        <hr />
      </div>
    </section>

    <!-- footer link area -->
    <section>
      <div class="footer-link-area container">
        <div class="footer-link-col-1">
          <h5>Customer Services</h5>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Delivery & Returns</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy & Cookie Policy</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Klarna</a>
            </li>
          </ul>
        </div>
        <div class="footer-link-col-2">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <h6>Customer Service</h6>
            </li>
            <li>
              <p>+44 (0) 207 0164312</p>
            </li>
            <li>
              <p>Email Us</p>
            </li>
            <li>
              <h6>Wholesale Enquiries</h6>
            </li>
            <li>
              <p>+44 (0) 207 0164312</p>
            </li>
          </ul>
        </div>
        <div class="footer-link-col-3">
          <h5>Information</h5>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">What is Cashmere?</a>
            </li>
            <li>
              <a href="#">Our Supply Chain</a>
            </li>
            <li>
              <a href="#">Brand Values</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Sweater Fit Guide</a>
            </li>
            <li>
              <a href="#">Cashmere Care Guide</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- footer copyright -->
    <section>
      <div class="footer-copyright-area">
        <p>Copyright 2022 ©<span class="text-bold"> RichApparel</span></p>
      </div>
    </section>
    <!-- footer area end -->


    `;
  }
}

customElements.define("rich-apparel-footer", RichApparelFooter);
// footer templet start

// shop page drop down

function shopPageSortDropdown() {
  console.log(sortProductBy.value);
}

function shopPageFilterSizeDropdown() {
  console.log(sizeFilter.value);
}

function shopPageFilterColourDropdown() {
  console.log(colourFilter.value);
}

function shopPageFilterFitDropdown() {
  console.log(fitFilter.value);
}

function shopPageFilterPatternDropdown() {
  console.log(patternFilter.value);
}

function shopPageFilterTypeDropdown() {
  console.log(typeFilter.value);
}

// shop page drop down end

// Mobile nav buttons start
hamburgerBtn.addEventListener("click", () => {
  navWeapper.classList.add("mobile-nav");
});
crossBtn.addEventListener("click", () => {
  navWeapper.classList.remove("mobile-nav");
});

// Mobile nav buttons end

// slick slider start

// home hero slider

$("#hero-slider-1").slick({
  dots: false,
  arrows: true,
  prevArrow:
    '<img class="left-arrow-white hero-slider-1-arrow" src="img/left-arrow-white.svg" alt=""/>',
  nextArrow:
    '<img class="right-arrow-white hero-slider-1-arrow" src="img/right-arrow-white.svg" alt=""/>',
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// home page image scroll
$(".image-carousel-1").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<img class="left-arrow-black image-carousel-arrow" src="img/left-arrow-black.svg" alt=""/>',
  nextArrow:
    '<img class="right-arrow-black image-carousel-arrow" src="img/right-arrow-black.svg" alt=""/>',
  responsive: [
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 499,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
});

// slick slider end
