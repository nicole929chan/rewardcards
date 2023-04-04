import BaseButton from '../utilities/BaseButton.js';
import NavButton from '../utilities/NavButton.js';
const EventDetail = {
  name: 'EventDetail',
  props: ['id'],
  components: {
    BaseButton,
    NavButton,
  },
  template: `
    <section class="vertical align-center">
      <div id="item-content">
        <div class="item-title text-400_ mt-22">
          {{ item.title }}
        </div>
        <div class="point-area mt-16">
          <img :src="iconPath(i, true)" v-for="i in fakeRecord.points" :key="i" />
          <img :src="iconPath(i+fakeRecord.points, false)" v-for="i in (total-fakeRecord.points)" :key="i+fakeRecord.points" />
        </div>
        <div class="item-brief mt-22">
          <img src="../img/icons/icon_clock.png" />
          <div>
            <div class="brief-title">集點期間</div>
            <div>{{ period }}</div>
          </div>
          <img src="../img/icons/icon_clock.png" />
          <div>
            <div class="brief-title">兌換期間</div>
            <div>xxx</div>
          </div>
          <img src="../img/icons/icon_gift.png" />
          <div>
            <div class="brief-title">兌換品項</div>
            <div>xxx</div>
          </div>
        </div>

        <div class="horizon justify-center mt-44">
          <div>
            <base-button>點我集點</base-button>
          </div>
          <div class="item-description text-300_ mt-22">
            ※會員於集點期間內，至旗艦店消費滿5000以上，即可獲得1點。集滿10點可兌換指定品項，每人限兌換1次。
          </div>
        </div>
      </div>
      <div class="horizon justify-center w-100 mt-44">
        <nav-button>集點卡</nav-button>
        <nav-button bgColor="bg-100" textColor="text-300">點數紀錄</nav-button>
      </div>
    </section>
  `,
  data() {
    return {
      total: 10,
      item: {
        // fake event
        id: 1,
        title: '限時活動',
        s_date: '2023/01/01',
        e_date: '2023/05/20',
        points: 8,
      },
      fakeRecord: {
        // fake record
        id: 1,
        points: 3,
      },
    };
  },
  mounted() {},
  computed: {
    period() {
      return this.item.s_date + ' - ' + this.item.e_date;
    },
    iconPath() {
      return (position, filled = false) => {
        if (filled) {
          if ((position + 1) % 2 === 0) {
            // 偶數位置
            return '../img/icons/icon_gray.png';
          } else {
            // 奇數位置
            return '../img/icons/icon_gold.png';
          }
        } else {
          if ((position + 1) % 2 === 0) {
            // 偶數位置
            return '../img/icons/icon_blank_gray.png';
          } else {
            // 奇數位置
            return '../img/icons/icon_blank_gold.png';
          }
        }
      };
    },
  },
};

export default EventDetail;
