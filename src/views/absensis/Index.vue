<template>
  <div class="home">
    <!-- <Slider /> -->
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/createabsensis"
      >Add absensi</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">absensi_id</th>
          <th scope="col">waktu_absensi</th>
          <th scope="col">mahasiswa_id</th>
          <th scope="col">matakuliah_id</th>
          <th scope="col">keterangan</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(absensi, index) in absensis" :key="index">
          <td>{{ absensi.id }}</td>
          <td>{{ absensi.waktu_absen }}</td>
          <td>{{ absensi.mahasiswa_id }}</td>
          <td>{{ absensi.matakuliah_id }}</td>
          <td>{{ absensi.keterangan }}</td>

          <td>
            <router-link
              class="btn btn-success"
              :to="{ name: 'Editabsensi', params: { id: absensi.id } }"
              >Edit</router-link
            >
            <button
              @click.prevent="absensisDelete(absensi.id)"
              class="btn btn-danger"
            >
              delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
import { onMounted, ref } from "vue";
export default {
  setup() {
    let absensis = ref([]);
    onMounted(() => {
      axios
        .get("http://127.0.0.1:8000/api/absensis")
        .then((response) => {
          console.log(response.data.data);
          absensis.value = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    function absensisDelete(id) {
      axios
        .delete(`http://127.0.0.1:8000/api/absensis/delete/${id}`)
        .then(() => {
          let z = this.absensis.map((absensis) => absensis.id).indexOf(id);
          this.absensis.splice(z, 1);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      absensis,
      absensisDelete,
    };
  },
};
</script>