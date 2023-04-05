import BaseButton from '../utilities/BaseButton.js';
import MessageBox from '../utilities/MessageBox.js';
const CompaignProduct = {
  name: 'CompaignProduct',
  props: ['pno'],
  components: {
    BaseButton,
    MessageBox,
  },
  template: `
    <div class="vertical align-center">
      <div class="banner" :style="bgImage">
        <div class="text-right m-22" @click="close">
          <img src="../img/icons/icon_close.png" style="width: 36px;" />
        </div>
        <div class="text-white pl-22" style="font-size: 20px;">兌換禮物券</div>
        <div class="title text-white">{{ product.title }}</div>
        <div :style="pointStyles">
          <span class="points" style="color: #fff;">{{ product.points }}</span>
          <span class="text-white" style="font-size: 16px">點</span>
        </div>
      </div>
      <div class="item-title mt-44">
        說明
      </div>
      <div class="brief-text mt-22 px-22">
        ※此抵用券僅限本人消費兌換使用，單次消費限用1張，不得累計或與其他優惠券合併使用。
      </div>
      <div class="brief-text mt-22 px-22">
        【抵用券兌換須知】
        會員點數限本人使用，有效消費僅能累積於消費本人之會員帳號，不得拆開累積或轉讓予他人累積。
        點數兌換商品不得要求更換現金或其他等值票券。
        會員點數累積無法溯及既往，成為會員之前於REGAL各館的消費，恕無法累積、兌換點數。
        會員點數僅可用於兌換會員專屬之兌換券。
      </div>
      <div style="position: absolute; bottom: 30px;" @click="redeem">
        <base-button>我要兌換</base-button>
      </div>
      <message-box v-show="inProgress">
        <template v-slot:description>
          <div class="text-center" style="position: relative; top: -30px;">
            <div>提醒您</div>
            <div>點數兌換後即不可回復，點數兌換需由服務人員操作。是否使用 x 點兌換1份「抗衰老保養技巧課程」？</div>
          </div>
        </template>
        <template v-slot:buttons>
          <div @click="submit">
            <base-button>兌換</base-button>
          </div>
          <div @click="cancel" class="mt-16">
            <base-button textColor="text-400" bgColor="bg-white">取消</base-button>
          </div>
        </template>
      </message-box>
      <message-box v-show="succeed">
        <template v-slot:icon>
          <img src="../img/icons/icon_r.png" />
        </template>
        <template v-slot:title>
          <div>兌換成功</div>
        </template>
        <template v-slot:description>
          <div class="text-center" style="position: relative; top: -30px;">
            <div>恭喜獲得 1堂「抗衰老保養技巧課程」</div>
          </div>
        </template>
        <template v-slot:buttons>
          <div @click="toGifts">
            <base-button>查看禮物券</base-button>
          </div>
        </template>
      </message-box>
    </div>
  `,
  data() {
    return {
      inProgress: false,
      succeed: false,
      product: {
        id: 1,
        pno: 'abc',
        points: 50,
        title: '抗衰老保養技巧課程',
        imagePath: '../img/fake_product_1.png',
        imageBannerPath: '../img/fake_product_1_banner.png',
      },
    };
  },
  mounted() {
    console.log('@@@', this.pno);
    // console.log('###', this.pno);
  },
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.product.imageBannerPath})`,
      };
    },
    pointStyles() {
      return {
        position: 'absolute',
        right: '28px',
        top: '200px',
      };
    },
  },
  methods: {
    close() {
      this.$router.push({
        name: 'compaign',
      });
    },
    redeem() {
      // 我要兌換
      this.inProgress = true;
    },
    submit() {
      // 確認兌換 (api確認?)
      // 假設成功兌換
      this.inProgress = false;
      this.succeed = true;
    },
    cancel() {
      // 取消兌換
      this.inProgress = false;
    },
    toGifts() {
      this.$router.push({
        name: 'gifts',
      });
    },
  },
};

export default CompaignProduct;
