const PageIcon = {
  name: 'PageIcon',
  props: ['styles'],
  template: `
    <div class="page-icon" :style="styles">
      <slot>活動</slot>
    </div>
  `,
};

export default PageIcon;
