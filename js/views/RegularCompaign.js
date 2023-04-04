import BaseButton from '../utilities/BaseButton.js';
import NavButton from '../utilities/NavButton.js';
const RegularCompaign = {
  name: 'RegularCompaign',
  components: {
    BaseButton,
    NavButton,
  },
  template: `
    <div id="compaign">
      <section class="vertical align-center">
        <div id="item-content">
          <div class="item-title text-400_ mt-22">
            環保集章
          </div>
          <div class="mt-22">
            您已累積 xx 點
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
        <div class="horizon justify-center w-100 mt-44">
          <nav-button>活動說明</nav-button>
          <nav-button bgColor="bg-100" textColor="text-300">點數紀錄</nav-button>
        </div>
      </section>
    </div>
  `,
};

export default RegularCompaign;
