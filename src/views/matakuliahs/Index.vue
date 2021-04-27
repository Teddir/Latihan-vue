<template>
  <div class="home">
    <Slider />
    <hr class="my-3" />
    <router-link class="btn btn-primary" to="/creatematakuliahs"
      >Add matakuliah</router-link
    >
    <table class="table tble-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Nama matakuliah</th>
          <th scope="col">Sks</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(matakuliahs, index) in matakuliah" :key="index">
           <td>{{ matakuliahs.id}}</td>
          <td>{{ matakuliahs.nama_matakuliah}}</td>
          <td>{{ matakuliahs.sks}}</td>

          <td>
            <router-link class="btn btn-success" :to="{name:'Editmatakuliah', params:
            {id:data.id}}">Edit</router-link>

            <button @click.prevent="matakuliahsDelete(data.id)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
// @ is an alias to /src
import { onMounted, ref } from 'vue';
export default {
  
  setup(){
    let matakuliahs = ref([])
    onMounted(() => {
      axios.get('http://127.0.0.1:8000/api/matakuliahs')
      .then(response => {
        matakuliahs.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function matakuliahsDelete(id){
      axios.delete('http://127.0.0.1:8000/api/matakuliahs/${id}')
      .then(()=>{
        let z = this.matakuliahs.map(matakuliahs => matakuliahs.id).indexOf(id);
        this.matakuliahs.splice(z, 1)
      }).catch(error => {
        console.log(error)
      }
      )
    }
    return {
      matakuliahs,
      matakuliahsDelete
    }
}
  
};
</script>