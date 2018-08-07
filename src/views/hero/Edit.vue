<template>
    <div>
        <h2 class="sub-header">修改英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">修改名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="修改名称" value="xxx">
          </div>
          <div class="form-group">
            <label for="gender">修改性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="gender" placeholder="修改性别" value="xxx">
          </div>
          <button type="submit" @click.prevent="handleEdit" class="btn btn-success">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
  props:['id'],
  created() {
      axios
      .get(`http://localhost:3000/heroes/${this.id}`)
      .then((response)=>{
          if (response.status === 200) {
              this.formData = response.data
          }
      })
      .catch((err)=>{
          console.log(err);
          
      })
  },
  data() {
    return {
      formData: {
        name: "",
        gender: ""
      }
    };
  },
  methods: {
    handleEdit() {
      axios
        .put(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then(response => {
          if (response.status === 200) {
              this.$router.push('/hero')
          } else {
              alert('添加失败');
          }
        })
        .catch((err) => {
            console.log(err);
            
        });
    }
  }
};
</script>

<style>

</style>
