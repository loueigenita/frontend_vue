<template>
  <div>
    <hr />
    <div class="container">
      <div class="text-center m-4">
        <h1>COMPUTER ACCESSORIES</h1>
      </div>
      <div class="container">
        <table class="table table-striped table-bordered text-center">
          <thead class="bg-primary text-black">
            <tr>
              <th>ITEM</th>
              <th>MANUFACTURER</th>
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th class="text-center">ACTIONS</th>
            </tr>
            
          </thead>
          
          <tbody>
            <tr
              v-for="coms in computer"
              :key="coms.id"
              class="hover-list"
            >
              <td>{{ coms.item }}</td>
              <td>{{ coms.manufacturer }}</td>
              <td>{{ coms.description }}</td>
              <td>{{ coms.price }}</td>
              <td>{{ coms.quantity }}</td>
              <td>
                <router-link
                  :to="{ name: 'view-computer', params: { id: coms.id } }"
                  class="btn btn-success btn-sm"
                  >Open</router-link
                >
                <router-link
                  :to="{
                    name: 'view-computer-edit',
                    params: { id: coms.id },
                  }"
                  class="btn btn-primary btn-sm"
                  >Update</router-link
                >
                <router-link
                  :to="{
                    name: 'view-computer-delete',
                    params: { id: coms.id },
                  }"
                  class="btn btn-danger btn-sm"
                  >Delete</router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      computer: [],
    };
  },
  methods: {
    getData() {
      fetch("http://127.0.0.1:8000/api/computer-items/")
        .then((res) => res.json())
        .then((data) => {
          this.computer = data;
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.hover-list:hover {
  background: rgb(255, 54, 121);
}
</style>
