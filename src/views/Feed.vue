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
       axios.get('https://demo.mock-be-ocpp-diz.cf/health').then((data) => {
        console.log(data)
       }).catch((error) => {
        console.log(error)
       })
    }
  }
}
</script>