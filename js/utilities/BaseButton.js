const BaseButton = {
  name: 'BaseButton',
  props: {
    textColor: {
      type: String,
      default: 'text-white',
    },
    bgColor: {
      type: String,
      default: 'bg-400',
    },
  },
  template: `
    <div class="base-button border-400 horizon justify-center align-center" :class="[textColor, bgColor]">
      <slot>確認</slot>
    </div>
  `,
};

export default BaseButton;
