
<template>
  <div>
  <v-container>
      Error
  </v-container>
  </div>
</template>


<script>



export default {
  mounted() {
    console.log("Error-Alert component mounted");
  },
  created() {

  },

  props: {
      errormessages: null,
  },

  data() {
    return {

    };
  },
  methods: {

  }
};
</script>

<style>
</style>
