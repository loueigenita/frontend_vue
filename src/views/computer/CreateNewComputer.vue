<template>
<hr>
  <h1 class="text-center m-4">ADD ACCESSORIES</h1>
  <div class="container w-50 border border-radius p-4 bg-primary">
    <form @submit="postData">
      <div class="form-group text-black">
        <label for="item">ITEM</label>
        <input
          type="text" class="form-control" v-model="item" id="item"/>
      </div>
      <div class="form-group text-black">
        <label for="manufacturer">MANUFACTURER</label>
        <input type="text" class="form-control" v-model="manufacturer" id="manufacturer" />
      </div>
      <div class="form-group text-black">
        <label for="description">DESCRIPTION</label>
        <input type="text" class="form-control" v-model="description" id="description" />
      </div>
      <div class="form-group text-black">
        <label for="price">PRICE</label>
        <input
          type="text"
          class="form-control"
          v-model="price"
          id="price"
        />
      </div>
      <div class="form-group text-black">
        <label for="quantity">QUANTITY</label>
        <input
          type="text"
          class="form-control"
          v-model="quantity"
          id="quantity"
        />
      </div>

      <button type="submit" class="btn btn-warning mt-4 w-100 text-black">ADD</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "",
      manufacturer: "",
      description: null,
      price: null,
      quantity: null,
    };
  },
  methods: {
    postData(e) {
      e.preventDefault();

      const postData = {
        item: this.item,
        manufacturer: this.manufacturer,
        description: this.description,
        price: this.price,
        quantity: this.quantity,
      };
      console.log(postData);

      fetch("http://127.0.0.1:8000/api/computer-items/store", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then((response) => {
          if (response.status === 200) {
            this.$router.push({ path: "/computer-items" });
          }
        })
        .catch((err) => console.log(err));
    },
    mounted() {
      this.postData();
    },
  },
};
</script>

<style></style>
