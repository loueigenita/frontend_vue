<template>
  <h1 class="text-center mt-4">Computer Accessories</h1>

  <div class="container w-50 border border-radius p-4 bg-primary">
    <form @submit="postData">
      <div class="form-group text-black">
        <label for="item">Item</label>
        <input
          type="text"
          class="form-control"
          v-model="computer.item"
          id="item"
        />
      </div>
      <div class="form-group text-black">
        <label for="manufacturer">Manufacturer</label>
        <input
          type="text"
          class="form-control"
          v-model="computer.manufacturer"
          id="manufacturer"
        />
      </div>
      <div class="form-group text-black">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          v-model="computer.description"
          id="description"
        />
      </div>
      <div class="form-group text-black">
        <label for="price">Price</label>
        <input
          type="text"
          class="form-control"
          v-model="computer.price"
          id="price"
        />
      </div>
      <div class="form-group text-black">
        <label for="quantity">Quantity</label>
        <input
          type="text"
          class="form-control"
          v-model="computer.quantity"
          id="quantity"
        />
      </div>

      <button type="submit" class="btn btn-success mt-4 w-100">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      computer: [],
    };
  },

  methods: {
    postData(e) {
      e.preventDefault();
      const postData = {
        item: this.computer.item,
        manufacturer: this.computer.manufacturer,
        description: this.computer.description,
        price: this.computer.price,
        quantity: this.computer.quantity,
      };
      console.log("post data");
      console.log(postData);
      console.log("computer");
      console.log(this.computer);

      fetch("http://192.168.43.66:8000/api/computer/edit/" + this.id, {
        method: "PUT",
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
  },
  mounted() {
    fetch("http://192.168.43.66:8000/api/computer/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.computer = data))
      .then((res) => {
        console.log("res");
        console.log(res);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.width {
  width: 30px;
  height: 30px;
}
.hover-list:hover {
  background: rgb(226, 222, 222);
}
</style>
