<template>
    Feed<br/>
    <button @click="callBackEnd">clickme</button>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    callBackEnd: () => {
       axios.get('http://localhost:9005/health').then((data) => {
        console.log(data)
       }).catch((error) => {
        console.log(error)
       })
    }
  }
}
</script>