import BaseButton from '../utilities/BaseButton.js';
import NavButton from '../utilities/NavButton.js';
import ProductBox from '../components/ProductBox.js';
const RegularCompaign = {
  name: 'RegularCompaign',
  components: {
    BaseButton,
    NavButton,
    ProductBox,
  },
  template: `
    <div id="compaign">
      <section class="vertical align-center">
        <div id="item-content">
          <div class="item-title mt-22">
            環保集章
          </div>
          <div class="text-black">
            <div>您已累積 <span class="points">xx</span> 點 </div>
            <div>點數到期日每次獲點的到期日相同嗎?</div>
          </div>
          <div class="item-brief mt-22">
            <img src="../img/icons/icon_search.png" />
            <div>
              <div class="brief-title">活動內容</div>
              <div class="brief-text">
                參加環保集章活動，將使用完畢的保養品空罐帶到指定門市回收，即可獲得點數，此次活動旨在鼓勵大家更加注重環境保護，並且通過回收利用來減少浪費，讓每個人都能成為環保行動者，一起為地球盡一份心力，同時也可以通過集點來贏得精美的禮品。
              </div>
            </div>
            <img src="../img/icons/icon_star.png" />
            <div>
              <div class="brief-title">集點方法</div>
              <div class="brief-text">
                凡在門市將保養品等使用完畢之空罐交給櫃檯人員，即可獲得點數，每一空罐都可以換取一定的點數，點數可累積，多換多送。此外也可透過推薦好友參加這個環保活動，獲得額外的點數。
              </div>
            </div>
            <img src="../img/icons/icon_gift.png" />
            <div>
              <div class="brief-title">兌換說明</div>
              <div class="brief-text">
                ※您所累積的點數可用於【兌換禮物券】<br />
                ※本次活動兌換禮物券可查看下方列表<br />
                ※點數折抵現金：不可兌換現金亦無法直接折抵部分消費、或與其他優惠折抵使用<br />
                ※會員點數限本人使用，不得拆開累積或轉讓他人<br />
                ※本公司保有修改內容之權利<br />
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 text-left text-400_c" :style="styles">
          點數兌換
        </div>
        <product-box 
          v-for="product in products" 
          :key="product.id"
          :product="product"
        ></product-box>
        <div class="horizon justify-center mt-44">
          <div>
            <base-button>點我集點</base-button>
          </div>
          <div class="item-description text-300_ m-22">
            ※會員於活動期間內，攜帶空罐至指定門市，即可獲得點數，累積點數可兌換指定品項。
          </div>
        </div>
        <div class="horizon justify-center w-100 mt-22">
          <nav-button>活動說明</nav-button>
          <nav-button bgColor="bg-100" textColor="text-300">點數紀錄</nav-button>
        </div>
      </section>
    </div>
  `,
  data() {
    return {
      products: [
        {
          id: 1,
          pno: 'abc',
          points: 50,
          title: '抗衰老保養技巧課程',
          imagePath: '../img/fake_product_1.png',
        },
        {
          id: 2,
          pno: 'xyz',
          points: 80,
          title: '綠色天然保養品DIY課程',
          imagePath: '../img/fake_product_2.png',
        },
      ],
      styles: {
        padding: '16px 0 0 30px',
        fontSize: '16px',
        fontWeight: '400',
      },
    };
  },
};

export default RegularCompaign;
