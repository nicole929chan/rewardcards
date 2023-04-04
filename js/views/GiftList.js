import PageIcon from '../utilities/PageIcon.js';
import GiftItem from '../components/GiftItem.js';
const GiftList = {
  name: 'GiftList',
  components: {
    GiftItem,
    PageIcon,
  },
  template: `
    <div id="gift-list" class="container">
      <section class="vertical align-center">
        <div class="horizon gap-10 mt-44">
          <div @click="toEvents">
            <page-icon :styles="inactive">
              活動 <span style="align-self: center; padding-left: 6px;">n</span>
            </page-icon>
          </div>
          <page-icon :styles="active">
            禮物券
          </page-icon>
        </div>
        <gift-item v-for="item in items" :key="item.id" :item="item"></gift-item>
      </section>
    </div>
  `,
  data() {
    return {
      items: [
        {
          id: 1,
          title: '抗衰老保養技巧課程',
          s_date: '2023/01/01',
          e_date: '2023/05/20',
          points: 8,
        },
        {
          id: 2,
          title: '美白保養法實戰課程60分鐘 1堂',
          s_date: '2023/01/01',
          e_date: '2023/05/20',
          points: 0,
        },
      ],
    };
  },
  mounted() {
    //
  },
  computed: {
    active() {
      return {
        backgroundColor: '#2C2C2C',
        color: '#fff',
      };
    },
    inactive() {
      return {
        backgroundColor: 'linear-gradient(0deg, #CEC8BC, #CEC8BC)',
        color: '#8C8477',
        border: '1px solid #8C8477',
      };
    },
  },
  methods: {
    toEvents() {
      this.$router.push({
        path: '/',
      });
    },
  },
};

export default GiftList;
