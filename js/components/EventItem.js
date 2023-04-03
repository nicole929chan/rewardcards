const EventItem = {
  name: 'EventItem',
  props: ['item'],
  template: `
    <div class="item-box">
      <div class="text-400 title">
        {{ item.title }}
      </div>
      <div class="text-400_ period">
        {{ period }}
      </div>
      <div class="horizon justify-end mt-22 mr-22">
        <div class="points">
          {{ item.points }}
        </div>
        <div class="dot">
          點
        </div>
      </div>
    </div>
  `,
  computed: {
    period() {
      return this.item.s_date + ' - ' + this.item.e_date;
    },
  },
};

export default EventItem;
