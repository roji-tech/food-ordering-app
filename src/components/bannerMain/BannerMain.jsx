import React from "react";
import BannerMainContainer from "./bannerMainStyle";
import img from "../../imgs/bon1.png";

const BannerMain = () => {
  return (
    <BannerMainContainer>
      <div className="left">
        <h1>
          Order food anytime,
          <br /> anywhere
        </h1>
        <small>
          Browse from our list of specials to place your order and have food
          <br /> delivered to you in no time. Affordable, tasty and fast!
        </small>
        <div className="buttons">
          <button>
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.43518 0.538176C1.10727 0.930248 0.941696 1.43287 0.972384 1.94308V24.0592C0.941607 24.5694 1.10719 25.072 1.43518 25.4641L1.50918 25.5362L13.8982 13.1473V12.855L1.50918 0.465576L1.43518 0.538176Z"
                fill="url(#paint0_linear_0_1)"
              />
              <path
                d="M18.0278 17.2787L13.8984 13.1473V12.855L18.0288 8.72461L18.1219 8.77771L23.0147 11.5578C24.4123 12.3518 24.4123 13.651 23.0147 14.4455L18.1219 17.2256L18.0278 17.2787Z"
                fill="url(#paint1_linear_0_1)"
              />
              <path
                d="M18.1216 17.2251L13.8981 13.0012L1.43506 25.4641C1.71983 25.7153 2.08348 25.8589 2.46302 25.8701C2.84256 25.8813 3.21406 25.7594 3.51316 25.5255L18.1216 17.2251Z"
                fill="url(#paint2_linear_0_1)"
              />
              <path
                d="M18.1216 8.77706L3.51316 0.476657C3.21406 0.242751 2.84256 0.120844 2.46302 0.132058C2.08348 0.143272 1.71983 0.286899 1.43506 0.538057L13.8981 13.0011L18.1216 8.77706Z"
                fill="url(#paint3_linear_0_1)"
              />
              <path
                opacity="0.2"
                d="M18.0285 17.1321L3.51316 25.3794C3.22557 25.5983 2.87458 25.7178 2.51315 25.7197C2.15172 25.7216 1.79947 25.6059 1.50956 25.3901L1.43506 25.4646L1.50906 25.5367L1.50956 25.5362C1.79942 25.7521 2.15169 25.8679 2.51315 25.866C2.87461 25.864 3.22562 25.7445 3.51316 25.5255L18.1216 17.2251L18.0285 17.1321Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M1.43516 25.3185C1.10728 24.9264 0.941709 24.4238 0.972361 23.9136V24.0597C0.941691 24.5699 1.10726 25.0725 1.43516 25.4646L1.50966 25.3901L1.43516 25.3185Z"
                fill="black"
              />
              <path
                opacity="0.12"
                d="M23.0147 14.2988L18.0288 17.132L18.1219 17.225L23.0147 14.4449C23.3025 14.32 23.5516 14.1202 23.736 13.8663C23.9203 13.6125 24.0333 13.3138 24.063 13.0015C24.0011 13.2843 23.8742 13.5488 23.6922 13.774C23.5102 13.9992 23.2783 14.1789 23.0147 14.2988Z"
                fill="black"
              />
              <path
                opacity="0.25"
                d="M3.51356 0.623343L23.0148 11.7033C23.2784 11.8232 23.5105 12.0029 23.6925 12.2282C23.8744 12.4535 24.0013 12.7182 24.0631 13.0011C24.0335 12.6887 23.9207 12.3899 23.7363 12.1359C23.5519 11.8819 23.3027 11.6821 23.0148 11.5572L3.51356 0.477243C2.11596 -0.316857 0.972656 0.342743 0.972656 1.94354V2.08964C0.972656 0.488943 2.11596 -0.170657 3.51356 0.623343Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1"
                  x1="12.7995"
                  y1="1.70989"
                  x2="-3.98289"
                  y2="18.4923"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#00A0FF" />
                  <stop offset="0.00657" stop-color="#00A1FF" />
                  <stop offset="0.2601" stop-color="#00BEFF" />
                  <stop offset="0.5122" stop-color="#00D2FF" />
                  <stop offset="0.7604" stop-color="#00DFFF" />
                  <stop offset="1" stop-color="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1"
                  x1="24.8344"
                  y1="13.0017"
                  x2="0.637519"
                  y2="13.0017"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFE000" />
                  <stop offset="0.4087" stop-color="#FFBD00" />
                  <stop offset="0.7754" stop-color="#FFA500" />
                  <stop offset="1" stop-color="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1"
                  x1="15.8266"
                  y1="15.2963"
                  x2="-6.93167"
                  y2="38.0546"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF3A44" />
                  <stop offset="1" stop-color="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_0_1"
                  x1="-1.70301"
                  y1="-6.82376"
                  x2="8.45951"
                  y2="3.33876"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#32A071" />
                  <stop offset="0.0685" stop-color="#2DA771" />
                  <stop offset="0.4762" stop-color="#15CF74" />
                  <stop offset="0.8009" stop-color="#06E775" />
                  <stop offset="1" stop-color="#00F076" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text">
              <p>GET IT ON</p>
              <p className="text2">Google Play</p>
            </div>
          </button>

          <button>
            <svg
              width="18"
              height="23"
              viewBox="0 0 18 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.7973 12.3006C14.8081 11.4659 15.0298 10.6475 15.4418 9.92158C15.8538 9.19563 16.4428 8.58569 17.1539 8.14851C16.7021 7.50335 16.1062 6.97241 15.4134 6.59786C14.7205 6.22331 13.9499 6.01546 13.1627 5.99083C11.4835 5.81457 9.85552 6.99566 8.99981 6.99566C8.12754 6.99566 6.81004 6.00833 5.39131 6.03752C4.47364 6.06717 3.57929 6.33403 2.79541 6.81208C2.01154 7.29014 1.36486 7.9631 0.918393 8.76539C-1.01561 12.1138 0.426982 17.0349 2.27959 19.7415C3.20649 21.0668 4.28977 22.5473 5.70722 22.4948C7.09428 22.4372 7.61232 21.6103 9.28662 21.6103C10.9454 21.6103 11.4314 22.4948 12.8776 22.4614C14.366 22.4372 15.3038 21.1302 16.1981 19.7923C16.8641 18.8479 17.3766 17.8042 17.7166 16.6997C16.8518 16.334 16.1139 15.7218 15.5948 14.9395C15.0757 14.1572 14.7983 13.2394 14.7973 12.3006Z"
                fill="white"
              />
              <path
                d="M12.0659 4.21083C12.8774 3.23663 13.2772 1.98445 13.1804 0.720215C11.9406 0.850435 10.7953 1.44299 9.97283 2.37982C9.57069 2.83749 9.26269 3.36993 9.06645 3.9467C8.8702 4.52347 8.78956 5.13326 8.82912 5.74121C9.44926 5.7476 10.0628 5.61319 10.6234 5.3481C11.1841 5.08301 11.6773 4.69416 12.0659 4.21083Z"
                fill="white"
              />
            </svg>
            <div className="text">
              <p className="smallT">Download on the</p>
              <p className="text2">App Store</p>
            </div>
          </button>
        </div>
      </div>
      <div className="right">
        <img src={img} alt="" />
      </div>
    </BannerMainContainer>
  );
};

export default BannerMain;
