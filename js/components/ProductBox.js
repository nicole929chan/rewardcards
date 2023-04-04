const ProductBox = {
  name: 'ProductBox',
  props: ['product'],
  template: `
    <div class="product-box mt-16" :style="bgImage" @click="toProduct">
     <div class="product-overlay horizon align-center justify-around text-white">
        <div>
          {{ product.title }}
        </div>
        <div>
          <span class="points" style="color: #fff;">{{ product.points }}</span> 點
       </div>
     </div>
    </div>
  `,
  computed: {
    bgImage() {
      return {
        backgroundImage: `url(${this.product.imagePath})`,
      };
    },
  },
  methods: {
    toProduct() {
      this.$router.push({
        name: 'compaign-product',
        params: {
          pno: this.product.pno,
        },
      });
    },
  },
};

export default ProductBox;
