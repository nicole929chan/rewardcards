import EventItem from '../components/EventItem.js';
import PageIcon from '../utilities/PageIcon.js';
const EventList = {
  name: 'EventList',
  components: {
    EventItem,
    PageIcon,
  },
  template: `
    <div id="event-list" class="container">
      <section class="vertical align-center">
        <div class="horizon gap-10">
          <page-icon :styles="active">
            活動 <span style="align-self: center; padding-left: 6px;">{{ items.length }}</span>
          </page-icon>
          <div @click="toGifts">
            <page-icon :styles="inactive">禮物券</page-icon>
          </div>
        </div>
        <event-item v-for="item in items" :key="item.id" :item="item"></event-item>
      </section>
    </div>
  `,
  data() {
    return {
      items: [
        {
          id: 1,
          title: '限時活動',
          s_date: '2023/01/01',
          e_date: '2023/05/20',
          points: 8,
        },
        {
          id: 2,
          title: '環保集章',
          s_date: '2023/01/01',
          e_date: '2023/05/20',
          points: 0,
        },
      ],
    };
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
    toGifts() {
      this.$router.push({
        name: 'gifts',
      });
    },
  },
};

export default EventList;
