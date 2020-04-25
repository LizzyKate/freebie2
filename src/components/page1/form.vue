<template>
  <div class="design p-2">
    <nav class="navbar fill justify-content-between align-items-center m-5">
      <h3 class="mb-0 sign ml-5">
        Sign Up Now for our Discount
        <br />Product
      </h3>
      <form class="form-inline" ref="form">
        <input
          class="form-control mr-sm-2 py-4 pr-5 transparent"
          placeholder="mailto@youmail.com"
          aria-label="Search" type="email"
        />
        <button class="btn click my-2 my-sm-0 px-5" type="submit" value="submit" v-on:click.prevent = "submit()">Submit</button>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    submit(){
      if (this.$refs.form[0].value === ''){
         console.log('i submitted')
        alert("Please Your Email Is Required")
      } else{
        console.log("i am free")
      }
    }
  }
};
</script>

<style>
</style>
