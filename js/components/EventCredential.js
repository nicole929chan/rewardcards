import BaseButton from '../utilities/BaseButton.js';
import MessageBox from '../utilities/MessageBox.js';
const EventCredential = {
  name: 'EventCredential',
  components: { BaseButton, MessageBox },
  template: `
    <section class="vertical align-center">
      <div class="mt-22">
        QRCode
      </div>
      <div>
        <input type="text" placeholder="請輸入通行碼" />
      </div>
      <div style="position: absolute; bottom: 30px;">
        <div @click="submit">
          <base-button>送出</base-button>
        </div>
        <div class="item-description text-300_ mt-22">
          ※掃描後請輸入店家提供之通行碼並按下送出。
        </div>
      </div>
      <message-box v-show="succeed">
        <template v-slot:icon>
          <img src="../img/icons/icon_gold.png" />
        </template>
        <template v-slot:title>
          <div>集點成功</div>
        </template>
        <template v-slot:description>
          <div class="text-center" style="position: relative; top: -30px;">
            <div>恭喜獲得點數 x 點</div>
          </div>
        </template>
        <template v-slot:buttons>
          <div @click="toEvent">
            <base-button>關閉</base-button>
          </div>
        </template>
      </message-box>
    </section>
  `,
  data() {
    return {
      succeed: false,
    };
  },
  mounted() {
    //
  },
  methods: {
    submit() {
      //
    },
    toEvent() {
      this.$router.push({
        name: 'event-detail',
        params: {
          id: this.$route.params.id,
        },
      });
    },
  },
};

export default EventCredential;
