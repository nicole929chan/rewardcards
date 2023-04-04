const GiftItem = {
  name: 'GiftItem',
  props: ['item'],
  template: `
    <div class="gift-box">
      <div class="text-400_ title">
        {{ item.title }}
      </div>
      <div class="text-400_ period">
        使用期限 {{ period }}
      </div>
      <div class="horizon justify-end mt-22 mr-22">
        <div class="gift_from text-300_" style="margin-top: 16px;">
          環保集章獲得
        </div>
      </div>
    </div>
  `,
  computed: {
    period() {
      return this.item.e_date;
    },
  },
};

export default GiftItem;
