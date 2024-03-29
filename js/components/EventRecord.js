import NavButton from '../utilities/NavButton.js';
import RecordItem from './RecordItem.js';
const EventRecord = {
  name: 'EventRecord',
  components: {
    RecordItem,
    NavButton,
  },
  template: `
    <section class="vertical align-center">
      <div id="item-content">
        <div class="item-title mt-22">
          我的點數紀錄
        </div>
        <div class="text-black">
          <div><span class="points">xx</span> 點 </div>
        </div>
        <div class="record-box bg-white horizon align-center px-22 w-100">
          <div class="w-30 pr-22" style="border-right: 1px solid #E7E4E2;">
            <span>+</span>
            <img src="../img/icons/icon_gold.png" style="width: 32px;" />
            <span class="points">2</span>
          </div>
          <div class="px-22">
            <div class="text-300_">台北101旗艦店</div>
            <div class="text-400_ mt-12">2023/01/01</div>
          </div>
        </div>
      </div>
      <div class="horizon justify-center w-100 mt-44">
        <div class="w-50" @click="toHome">
          <nav-button>集點卡</nav-button>
        </div>
        <div class="w-50">
          <nav-button bgColor="bg-100" textColor="text-300">點數紀錄</nav-button>
        </div>
      </div>
    </section>
  `,
  methods: {
    toHome() {
      this.$router.push({
        name: 'home',
      });
    },
  },
};

export default EventRecord;
