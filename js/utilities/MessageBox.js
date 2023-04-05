const MessageBox = {
  name: 'MessageBox',
  template: `
      <div>
        <div class="overlay"></div>
        <div class="message-box bg-white text-300_ vertical align-center justify-between">
          <slot name="icon"></slot>
          <span class="message-title">
            <slot name="title"></slot>
          </span>
          <span class="message-text">
            <slot name="description"></slot>
          </span>
          <div>
            <slot name="buttons"></slot>
          </div>
        </div>
      </div>
    `,
};

export default MessageBox;
