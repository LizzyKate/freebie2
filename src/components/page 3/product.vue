<template>
<div class="container mt-5">
  <div class="row">
    <div class="col">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight imahe">
      <img src="/img/imahe.png" v-if="!currentProduct.image">
      <img v-if="currentProduct.image" v-bind:src="('/img/' + currentProduct.image)"/>
  </div>
  <div class="bd-highlight mt-5">
      <div class="d-flex flex-row bd-highlight justify-content-between tiger2">
  <div class="bd-highlight tiger " v-for="(product, i) in itemsOne" :key="i">
      <img v-bind:src="('/img/' + product)"/>
  </div>
  
</div>
  </div>
</div>
    </div>
    <div class="col">
      <div class="d-flex flex-column bd-highlight ">
  <div class=" bd-highlight max">
      <h2 v-if="!currentProduct.name">Max Product Name</h2>
      <h2 v-if="currentProduct.name">{{currentProduct.name}}</h2>
      <p v-if="!currentProduct.color">BLUE & WHITE</p>
      <p v-if="currentProduct.color">{{currentProduct.color.toUpperCase()}}</p>
      <h2 v-if="!currentProduct.price">$140</h2>
      <h2 v-if="currentProduct.price">{{'$' + currentProduct.price}}</h2>
      <div class=" mt-5">
        <button type="button" class="btn btn-lg butt">ADD TO CART</button>
    </div>
  </div>
  <div class="bd-highlight london mt-5">Delivery from <strong class="strong">London</strong>, 3-4 week delivery</div>
  <div class=" bd-highlight mt-5 describe">
      <h6>Description</h6>
      <p class="w-75">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the.</p>
      <div class="d-flex flex-column bd-highlight mb-3" >
  <div class="bd-highlight">
    <div class="d-flex flex-row bd-highlight mb-3 " v-for="(read, i) in note" :key="i">
  <div class=" bd-highlight">
    <i class="fas fa-circle tire"></i>
  </div>
  <div class="bd-highlight entire w-50 ml-3 ">{{read}}</div>
    </div>
  </div>
      </div>
  </div>
</div>
    </div>
  </div>
</div>
</template>

<script>



export default {
   
    data () {
    return {
      itemsOne:['blanket_product_04_large@2x.png', '2016-10-16_2048_large.png', 'blanket_product_04_large@2x.png', '2016-10-16_2048_large.png'],

      note:['A wonderful serenity has taken possession of my entire like these sweet mornings.', 'A wonderful serenity has taken possession of my entire like these sweet mornings.'],

      items :[
        {
          name:'Hyde Product Name',
          id:1,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_04_large@2x.png'
        },
        {
           name:'Hyde Product Name',
           id:2,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'2016-10-16_2048_large.png'
        },
        {
           name:'Hyde Product Name',
           id:3,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_03_large@2x.png'
        },
        {
          name:'Hyde Product Name',
          id:4,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_04_large@2x.png'
        },
        {
           name:'Hyde Product Name',
           id:5,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'2016-10-16_2048_large.png'
        },
        {
           name:'Hyde Product Name',
           id:6,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_03_large@2x.png'
        },
           {
          name:'Hyde Product Name',
          id:7,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_04_large@2x.png'
        },
        {
           name:'Hyde Product Name',
           id:8,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'2016-10-16_2048_large.png'
        },
        {
           name:'Hyde Product Name',
           id:9,
          price:'140.99',
          color:'blue and white',
          order:'Order Now',
          image:'blanket_product_03_large@2x.png'
        }
      ],

      currentProduct:{}
    }
  },

  mounted() {
    // const firstIdea = () => {
    let id = this.$route.params.id; 
    this.currentProduct = this.items.find(e => {
      return e.id === +id;
    });
    // }
    // const secondIdea = () => {
    //   let id = this.$route.params.id;
    //   this.currentProduct = this.itemThree.find(e => {
    //     return e.id === +id;
    //   })
    // }
    //  
  }
  }
</script>

<style>

</style>
