<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title" style="color: blue">Add absensi</h5>
      <form class="row g-3" @submit.prevent="store">
        <!-- <div class="col-md-6">
      <label for="inputEmail4" class="form-label">id</label>
      <input type="number" class="form-control" id="inputEmail4" 
      v-model="absensis.id" />
      <div class="alert alert-danger" v-if="validation.id">
        {{ validation.id[0] }}
      </div>
    </div> -->
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label">Waktu Absen</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="absensis.waktu_absen"
          />
          <div class="alert alert-danger" v-if="validation.waktu_absen">
            {{ validation.waktu_absen }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">ID Mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="absensis.mahasiswa_id"
          />
          <div class="alert alert-danger" v-if="validation.mahasiswa_id">
            {{ validation.mahasiswa_id }}
          </div>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">ID Matakuliah</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            v-model="absensis.matakuliah_id"
          />
          <div class="alert alert-danger" v-if="validation.matakuliah_id">
            {{ validation.matakuliah_id }}
          </div>
        </div>
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label">Keterangan</label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            v-model="absensis.keterangan"
          />
          <div class="alert alert-danger" v-if="validation.keterangan">
            {{ validation.keterangan }}
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const absensis = reactive({
      id: "",
      waktu_absen: "",
      mahasiswa_id: "",
      matakuliah_id: "",
      keterangan: "",
    });
    const validation = ref([]);
    const router = useRouter();
    function store() {
      let id = absensis.id;
      let waktu_absen = absensis.waktu_absen;
      let mahasiswa_id = absensis.mahasiswa_id;
      let matakuliah_id = absensis.matakuliah_id;
      let keterangan = absensis.keterangan;
      axios
        .post("http://127.0.0.1:8000/api/absensis/create", {
          id: id,
          waktu_absen: waktu_absen,
          mahasiswa_id: mahasiswa_id,
          matakuliah_id: matakuliah_id,
          keterangan: keterangan,
        })
        .then(() => {
          router.push({
            name: "Absensi",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      absensis,
      validation,
      router,
      store,
    };
  },
};
</script>