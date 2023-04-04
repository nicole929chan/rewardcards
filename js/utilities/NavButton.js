const NavButton = {
  name: 'NavButton',
  props: {
    textColor: {
      type: String,
      default: 'text-black',
    },
    bgColor: {
      type: String,
      default: 'bg-200',
    },
  },
  template: `
    <div class="nav-button horizon justify-center align-center" :class="[textColor, bgColor]">
      <slot>集點卡</slot>
    </div>
  `,
};

export default NavButton;
