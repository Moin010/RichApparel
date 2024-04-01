const navWeapper = document.querySelector(".nav-wrapper");
const crossBtn = document.querySelector(".cross-icon");
const hamburgerBtn = document.querySelector(".hamburger-icon");
const sortProductBy = document.getElementById("sortProductBy");
const sizeFilter = document.getElementById("filter-by-size");
const colourFilter = document.getElementById("filter-by-colour");
const fitFilter = document.getElementById("filter-by-fit");
const patternFilter = document.getElementById("filter-by-pattern");
const typeFilter = document.getElementById("filter-by-type");
const shopPageLoader = document.querySelector(".shop-page-loader");

const scrollOnYAxis = navWeapper.scrollHeight;
window.onscroll = () => {
  if (window.scrollY >= scrollOnYAxis) {
    navWeapper.classList.add("page-scrolled");
  } else {
    navWeapper.classList.remove("page-scrolled");
  }
};

// all demo product array

let allDemoProduct = [
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "01",
    productImg: "img/product images/product1.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "02",
    productImg: "img/product images/product2.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "03",
    productImg: "img/product images/product3.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "04",
    productImg: "img/product images/product4.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "05",
    productImg: "img/product images/product5.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "06",
    productImg: "img/product images/product6.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "07",
    productImg: "img/product images/product7.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "08",
    productImg: "img/product images/product8.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "09",
    productImg: "img/product images/product9.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "10",
    productImg: "img/product images/product10.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "11",
    productImg: "img/product images/product11.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "12",
    productImg: "img/product images/product12.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "13",
    productImg: "img/product images/product13.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "14",
    productImg: "img/product images/product14.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "15",
    productImg: "img/product images/product15.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "16",
    productImg: "img/product images/product16.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "17",
    productImg: "img/product images/product17.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "18",
    productImg: "img/product images/product18.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "19",
    productImg: "img/product images/product19.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "20",
    productImg: "img/product images/product20.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "21",
    productImg: "img/product images/product21.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "22",
    productImg: "img/product images/product22.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "23",
    productImg: "img/product images/product23.jpg",
    productLink: "single-product-page.html",
  },
  {
    name: "Apple",
    price: "Apple",
    Size: "Apple",
    Colour: "Large",
    Fit: "Red",
    Pattern: "Red",
    Type: "Red",
    sku: "24",
    productImg: "img/product images/product24.jpg",
    productLink: "single-product-page.html",
  },
];

// header templet start
class RichApparelHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- top nav area -->

    <section class="nav-wrapper">
        <div id="nav-area">
          <div class="logo">
            <a href="index.html">
              <span class="text-bold">Rich</span>Apparel
            </a>
          </div>

          <div id="nav">
            <div id="main-nav">
              <ul>
                <li>
                  <a href="#">New</a>
                </li>
                <li>
                  <a href="shop.html">Shop</a>
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
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <rect width="30" height="30" fill="url(#pattern0)" />
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlink:href="#image0_23_4"
                          transform="scale(0.0208333)"
                        />
                      </pattern>
                      <image
                        id="image0_23_4"
                        width="48"
                        height="48"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </li>
                <li>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 24L19.0418 19.0329L24 24ZM21.7895 12.3947C21.7895 14.8864 20.7997 17.276 19.0378 19.0378C17.276 20.7997 14.8864 21.7895 12.3947 21.7895C9.9031 21.7895 7.51351 20.7997 5.75165 19.0378C3.9898 17.276 3 14.8864 3 12.3947C3 9.9031 3.9898 7.51351 5.75165 5.75165C7.51351 3.9898 9.9031 3 12.3947 3C14.8864 3 17.276 3.9898 19.0378 5.75165C20.7997 7.51351 21.7895 9.9031 21.7895 12.3947V12.3947Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9007 6.70191C14.4069 6.25303 14.887 5.76281 15.4287 5.35191C16.5813 4.49372 18.0164 4.10422 19.4447 4.26188C20.873 4.41954 22.1886 5.11264 23.1262 6.20156C23.6467 6.83283 24.0279 7.5669 24.245 8.3557C24.4621 9.1445 24.5101 9.97025 24.386 10.7789C24.1256 12.4961 23.3281 14.0866 22.1078 15.3225C20.5412 17.0274 18.845 18.6085 17.0344 20.0517C16.0615 20.8626 15.0828 21.665 14.1142 22.4809C14.0906 22.5122 14.06 22.5375 14.025 22.555C13.9899 22.5725 13.9513 22.5816 13.9121 22.5816C13.8729 22.5816 13.8343 22.5725 13.7992 22.555C13.7641 22.5375 13.7336 22.5122 13.71 22.4809C12.3338 21.3224 10.9357 20.1893 9.57056 19.0215C7.96989 17.7176 6.49862 16.2624 5.17715 14.6762C4.31494 13.6534 3.72853 12.4271 3.47362 11.1139C2.92603 7.90763 4.63294 5.07263 7.75565 4.36978C8.61806 4.1602 9.51833 4.16199 10.3799 4.37499C11.2415 4.588 12.0389 5.00592 12.7042 5.59322C13.1278 5.94759 13.5151 6.34247 13.9007 6.70191ZM13.9176 8.61722C13.3792 8.03419 12.8755 7.43091 12.3144 6.89006C11.819 6.37398 11.2084 5.98259 10.5326 5.74794C9.85683 5.51329 9.13507 5.44205 8.42644 5.54006C7.63084 5.60945 6.87336 5.91189 6.24875 6.40953C5.62414 6.90718 5.16012 7.57795 4.91475 8.33794C4.66758 9.05053 4.58005 9.80873 4.65834 10.5589C4.73664 11.3091 4.97885 12.0328 5.36784 12.679C6.32515 14.2442 7.53977 15.6365 8.96053 16.7974C10.049 17.7829 11.1771 18.7237 12.295 19.6754C12.8207 20.1234 13.3641 20.5504 13.9057 20.9917C14.0045 20.9225 14.0905 20.871 14.1656 20.8069C15.7519 19.4569 17.3516 18.1305 18.9159 16.7569C19.9798 15.8464 20.9468 14.8285 21.8016 13.7194C22.3385 13.074 22.7326 12.3222 22.9577 11.5134C23.1829 10.7046 23.234 9.85726 23.1077 9.02728C23.0071 8.45827 22.7929 7.91535 22.478 7.4309C22.163 6.94644 21.7537 6.53039 21.2745 6.20754C20.7953 5.88469 20.2559 5.66167 19.6886 5.55178C19.1214 5.44188 18.5377 5.44737 17.9726 5.56791C17.0022 5.76099 16.1151 6.24931 15.4329 6.966C14.9064 7.49841 14.423 8.06456 13.9167 8.61806L13.9176 8.61722Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="23"
                    height="16"
                    viewBox="0 0 23 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0V16H23V0H0ZM3.81535 1.77778H19.1855L11.5 6.91644L3.81535 1.77778ZM1.76923 2.55556L11.0028 8.75022L11.5 9.05511L11.998 8.75022L21.2308 2.55556V14.2222H1.76923V2.55556Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5 12.5C14.8924 12.5 16.2277 11.9469 17.2123 10.9623C18.1969 9.97774 18.75 8.64239 18.75 7.25C18.75 5.85761 18.1969 4.52226 17.2123 3.53769C16.2277 2.55312 14.8924 2 13.5 2C12.1076 2 10.7723 2.55312 9.78769 3.53769C8.80312 4.52226 8.25 5.85761 8.25 7.25C8.25 8.64239 8.80312 9.97774 9.78769 10.9623C10.7723 11.9469 12.1076 12.5 13.5 12.5ZM17 7.25C17 8.17826 16.6313 9.0685 15.9749 9.72487C15.3185 10.3813 14.4283 10.75 13.5 10.75C12.5717 10.75 11.6815 10.3813 11.0251 9.72487C10.3687 9.0685 10 8.17826 10 7.25C10 6.32174 10.3687 5.4315 11.0251 4.77513C11.6815 4.11875 12.5717 3.75 13.5 3.75C14.4283 3.75 15.3185 4.11875 15.9749 4.77513C16.6313 5.4315 17 6.32174 17 7.25ZM24 21.25C24 23 22.25 23 22.25 23H4.75C4.75 23 3 23 3 21.25C3 19.5 4.75 14.25 13.5 14.25C22.25 14.25 24 19.5 24 21.25ZM22.25 21.243C22.2482 20.8125 21.9805 19.5175 20.794 18.331C19.653 17.19 17.5057 16 13.5 16C9.4925 16 7.347 17.19 6.206 18.331C5.0195 19.5175 4.7535 20.8125 4.75 21.243H22.25Z"
                      fill="black"
                    />
                  </svg>
                </li>
                <li>
                  <svg
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_154)">
                      <path
                        d="M17.6221 5.02118C17.6221 4.56353 17.1475 4.20086 16.6728 4.1102H13.7373C13.7373 2.09827 11.083 0.457649 9 0.457649C6.91699 0.457649 4.26269 2.09827 4.26269 4.1102H1.32715C0.852538 4.1102 0.37793 4.47286 0.37793 5.02118V19.6314C0.37793 20.1797 0.755859 20.5424 1.32715 20.5424H16.6728C17.2441 20.5424 17.6221 20.1797 17.6221 19.6314V5.02118ZM9 1.36863C10.6084 1.36863 12.7881 2.55592 12.7881 4.1102H5.21191C5.21191 2.55592 7.48388 1.36863 9 1.36863ZM1.32715 5.02118H16.5806V19.6314H1.32715V5.02118Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_154">
                        <rect width="18" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

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

    <!-- social icon and form area -->
    
    <section id="footer-social-signup-form">
      <div id="social-button-area">
        <div class="social-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.28 0H0.72C0.32175 0 0 0.32175 0 0.72V17.28C0 17.6783 0.32175 18 0.72 18H17.28C17.6783 18 18 17.6783 18 17.28V0.72C18 0.32175 17.6783 0 17.28 0ZM15.201 5.25375H13.7633C12.636 5.25375 12.4178 5.78925 12.4178 6.57675V8.3115H15.1088L14.7578 11.0273H12.4178V18H9.612V11.0295H7.26525V8.3115H9.612V6.309C9.612 3.98475 11.0318 2.718 13.1063 2.718C14.1008 2.718 14.9535 2.79225 15.2033 2.826V5.25375H15.201Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="social-icon">
          <svg
            width="23"
            height="18"
            viewBox="0 0 23 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.1678 2.13818C21.3526 2.48965 20.4654 2.74261 19.5517 2.84113C20.5004 2.2778 21.2108 1.38782 21.5497 0.338176C20.6595 0.867496 19.6842 1.23866 18.6672 1.43522C18.2421 0.981027 17.728 0.6192 17.1569 0.372279C16.5858 0.125359 15.97 -0.00136274 15.3477 1.10514e-05C12.8302 1.10514e-05 10.8055 2.03965 10.8055 4.54261C10.8055 4.89409 10.8481 5.24557 10.9174 5.58374C7.14772 5.38669 3.78565 3.58669 1.55049 0.83078C1.14322 1.52606 0.929799 2.31771 0.932427 3.12338C0.932427 4.69971 1.73431 6.08965 2.95713 6.90711C2.2365 6.87874 1.53276 6.68077 0.903122 6.3293V6.38521C0.903122 8.59261 2.46427 10.4219 4.54492 10.8426C4.15425 10.944 3.75237 10.9959 3.34875 10.997C3.05303 10.997 2.7733 10.9678 2.49091 10.9278C3.06635 12.7278 4.74206 14.0352 6.73745 14.0778C5.1763 15.3 3.22087 16.0189 1.0976 16.0189C0.716637 16.0189 0.364979 16.0056 0 15.963C2.01404 17.2544 4.40372 18 6.97722 18C15.3318 18 19.9033 11.0823 19.9033 5.07782C19.9033 4.88078 19.9033 4.68374 19.89 4.48669C20.7745 3.83965 21.5497 3.03817 22.1678 2.13818Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="social-icon">
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.95 5.324C17.9399 4.56662 17.7981 3.81678 17.531 3.108C17.2993 2.51015 16.9455 1.9672 16.4922 1.51383C16.0388 1.06046 15.4958 0.706651 14.898 0.475C14.1983 0.212357 13.4592 0.0703413 12.712 0.0550001C11.75 0.0120001 11.445 0 9.003 0C6.561 0 6.248 6.70552e-08 5.293 0.0550001C4.54616 0.0704541 3.80735 0.212468 3.108 0.475C2.51006 0.706489 1.96702 1.06024 1.51363 1.51363C1.06024 1.96702 0.706489 2.51006 0.475 3.108C0.211831 3.80713 0.0701232 4.54611 0.056 5.293C0.013 6.256 0 6.561 0 9.003C0 11.445 -7.45058e-09 11.757 0.056 12.713C0.071 13.461 0.212 14.199 0.475 14.9C0.706878 15.4978 1.0609 16.0406 1.51444 16.4938C1.96798 16.947 2.51106 17.3006 3.109 17.532C3.80643 17.8052 4.54537 17.9574 5.294 17.982C6.257 18.025 6.562 18.038 9.004 18.038C11.446 18.038 11.759 18.038 12.714 17.982C13.4612 17.9673 14.2004 17.8256 14.9 17.563C15.4977 17.3311 16.0405 16.9772 16.4938 16.5238C16.9472 16.0705 17.3011 15.5277 17.533 14.93C17.796 14.23 17.937 13.492 17.952 12.743C17.995 11.781 18.008 11.476 18.008 9.033C18.006 6.591 18.006 6.281 17.95 5.324ZM8.997 13.621C6.443 13.621 4.374 11.552 4.374 8.998C4.374 6.444 6.443 4.375 8.997 4.375C10.2231 4.375 11.399 4.86207 12.266 5.72905C13.1329 6.59603 13.62 7.7719 13.62 8.998C13.62 10.2241 13.1329 11.4 12.266 12.267C11.399 13.1339 10.2231 13.621 8.997 13.621ZM13.804 5.282C13.6624 5.28213 13.5222 5.25434 13.3913 5.20021C13.2605 5.14608 13.1416 5.06668 13.0414 4.96655C12.9413 4.86643 12.8619 4.74754 12.8078 4.61669C12.7537 4.48584 12.7259 4.3456 12.726 4.204C12.726 4.0625 12.7539 3.92239 12.808 3.79166C12.8622 3.66093 12.9415 3.54215 13.0416 3.44209C13.1416 3.34204 13.2604 3.26267 13.3912 3.20852C13.5219 3.15437 13.662 3.1265 13.8035 3.1265C13.945 3.1265 14.0851 3.15437 14.2158 3.20852C14.3466 3.26267 14.4654 3.34204 14.5654 3.44209C14.6655 3.54215 14.7448 3.66093 14.799 3.79166C14.8531 3.92239 14.881 4.0625 14.881 4.204C14.881 4.8 14.399 5.282 13.804 5.282Z"
              fill="black"
            />
            <path
              d="M8.99714 12.0011C10.6557 12.0011 12.0001 10.6566 12.0001 8.99812C12.0001 7.33961 10.6557 5.99512 8.99714 5.99512C7.33863 5.99512 5.99414 7.33961 5.99414 8.99812C5.99414 10.6566 7.33863 12.0011 8.99714 12.0011Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div class="signup-form-area">
        <h4>Sign up and get 15% off</h4>
        <form>
          <input class="footer-signup-form" type="text" placeholder="Email" />
          <button class="btn btn-sm">SUBMIT</button>
        </form>
      </div>
    </section>

    <!-- footer link area -->
    <section class="footer-link-area container">
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
    </section>

    <!-- footer copyright -->
    <section class="footer-copyright-area">
      <p>Copyright 2022 ©<span class="text-bold"> RichApparel</span></p>
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

// shop page pagination start

let array = [];
let arrayLength = 0;
let activePageDisplaiedProduct = 6; //table Size
let startIndex = 1;
let endIndex = 0;
let currentIndex = 1;
let maxIndex = 0;

// set and remove active class
function heilightIndexButton() {
  startIndex = (currentIndex - 1) * activePageDisplaiedProduct + 1;
  endIndex = startIndex + activePageDisplaiedProduct - 1;
  if (endIndex > arrayLength) {
    endIndex = arrayLength;
  }

  $(".index-buttons button").removeClass("active");
  $(`.index-buttons button[index="${currentIndex}"]`).addClass("active");
  displayProducts();
}

// add products in dom

function displayProducts() {
  $("#product-card-area .product-card").remove();
  let firstProduct = startIndex - 1;
  let lastProduct = endIndex;

  for (let i = firstProduct; i < lastProduct; i++) {
    let productCard = array[i];

    // console.log(productCard);

    let injectProduct = `
    
      <div class="product-card">
        <a href="${productCard.productLink}">
          <div class="product-img">
            <img src="${productCard.productImg}" />
            <svg
              class="product-like" 
              width="27"
              height="27"
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9007 6.70191C14.4069 6.25303 14.887 5.76281 
                15.4287 5.35191C16.5813 4.49372 18.0164 4.10422 
                19.4447 4.26188C20.873 4.41954 22.1886 5.11264 
                23.1262 6.20156C23.6467 6.83283 24.0279 7.5669 24.245 
                8.3557C24.4621 9.1445 24.5101 9.97025 24.386 
                10.7789C24.1256 12.4961 23.3281 14.0866 22.1078 
                15.3225C20.5412 17.0274 18.845 18.6085 17.0344 
                20.0517C16.0615 20.8626 15.0828 21.665 14.1142 
                22.4809C14.0906 22.5122 14.06 22.5375 14.025 
                22.555C13.9899 22.5725 13.9513 22.5816 13.9121 
                22.5816C13.8729 22.5816 13.8343 22.5725 13.7992 
                22.555C13.7641 22.5375 13.7336 22.5122 13.71 
                22.4809C12.3338 21.3224 10.9357 20.1893 9.57056 
                19.0215C7.96989 17.7176 6.49862 16.2624 5.17715 
                14.6762C4.31494 13.6534 3.72853 12.4271 3.47362 
                11.1139C2.92603 7.90763 4.63294 5.07263 7.75565 
                4.36978C8.61806 4.1602 9.51833 4.16199 10.3799 
                4.37499C11.2415 4.588 12.0389 5.00592 12.7042 
                5.59322C13.1278 5.94759 13.5151 6.34247 13.9007 
                6.70191ZM13.9176 8.61722C13.3792 8.03419 12.8755 
                7.43091 12.3144 6.89006C11.819 6.37398 11.2084 
                5.98259 10.5326 5.74794C9.85683 5.51329 9.13507 
                5.44205 8.42644 5.54006C7.63084 5.60945 6.87336 
                5.91189 6.24875 6.40953C5.62414 6.90718 5.16012 
                7.57795 4.91475 8.33794C4.66758 9.05053 4.58005 
                9.80873 4.65834 10.5589C4.73664 11.3091 4.97885 
                12.0328 5.36784 12.679C6.32515 14.2442 7.53977 
                15.6365 8.96053 16.7974C10.049 17.7829 11.1771 
                18.7237 12.295 19.6754C12.8207 20.1234 13.3641 
                20.5504 13.9057 20.9917C14.0045 20.9225 14.0905 
                20.871 14.1656 20.8069C15.7519 19.4569 17.3516 
                18.1305 18.9159 16.7569C19.9798 15.8464 20.9468 
                14.8285 21.8016 13.7194C22.3385 13.074 22.7326 
                12.3222 22.9577 11.5134C23.1829 10.7046 23.234 
                9.85726 23.1077 9.02728C23.0071 8.45827 22.7929 
                7.91535 22.478 7.4309C22.163 6.94644 21.7537 
                6.53039 21.2745 6.20754C20.7953 5.88469 20.2559 
                5.66167 19.6886 5.55178C19.1214 5.44188 18.5377 
                5.44737 17.9726 5.56791C17.0022 5.76099 16.1151 
                6.24931 15.4329 6.966C14.9064 7.49841 14.423 8.06456 
                13.9167 8.61806L13.9176 8.61722Z"
                fill="black"
              />
            </svg>

          </div>
          <div class="product-details">
            <div class="product-name-with-details">
              <h4>${productCard.name}</h4>
              <p>More Colours Available</p>
            </div>
            <div class="product-price"> £${productCard.price}</div>
          </div>
        </a>
      </div>

    `;

    $("#product-card-area").append(injectProduct);
  }
}

// reseting the variables for the calculations

function preLoadCalculations(changedArray) {
  if (changedArray) {
    array = changedArray;
  } else {
    array = allDemoProduct;
  }
  arrayLength = array.length;
  maxIndex = arrayLength / activePageDisplaiedProduct;

  if (arrayLength % activePageDisplaiedProduct > 0) {
    maxIndex++;
  }
}

// use buttons to travers pagination
function prevPage() {
  if (currentIndex > 1) {
    currentIndex--;
    heilightIndexButton();
    shopPageLoaderDisplay();
  }
}
function nextPage() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    heilightIndexButton();
    shopPageLoaderDisplay();
  }
}
function indexPageMove(index) {
  currentIndex = parseInt(index);
  heilightIndexButton();
  shopPageLoaderDisplay();
}

// display pagination buttons

function displayIndexButtons() {
  preLoadCalculations();

  $(".index-buttons button").remove();
  $(".index-buttons").append(
    `<button onclick="prevPage()"><img src="img/left-arrow.png" alt="" /></button>`
  );

  for (let i = 1; i <= maxIndex; i++) {
    $(".index-buttons").append(
      `<button onclick="indexPageMove(${i})" index="${i}">${i}</button>`
    );
  }

  $(".index-buttons").append(
    `<button onclick="nextPage()"><img src="img/right-arrow.png" alt="" /></button>`
  );
  heilightIndexButton();
}

displayIndexButtons();

// shop page pagination end

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

// single product page accordian start

let accordion = document.getElementsByClassName("accordion");
// let accordionCount;

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// single product page accordian end

// shop page loader start
// variable = shopPageLoader

function shopPageLoaderDisplay() {
  document.body.classList.add("faded-body");
  shopPageLoader.classList.add("loaderDisplayShow");

  setTimeout(removeLoaderDisplayShow, 200);
  function removeLoaderDisplayShow() {
    document.body.classList.remove("faded-body");
    shopPageLoader.classList.remove("loaderDisplayShow");
  }
}

// shop page loader end

// test

let dekhao;

function pingPong(hello) {
  if (hello) {
    dekhao = `"hello ache" ${hello}`;
  } else {
    dekhao = "hello nai";
  }
  console.log(dekhao);
}
pingPong("s");
