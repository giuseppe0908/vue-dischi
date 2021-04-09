  Vue.config.devtools = true;
  var app = new Vue({
    el: '#root',
    data: {
      disks: [],
      genere:"",

    },
    // methods:{
    //   roccia:function() {
    //       console.log();
    //       this.disks.forEach((item, i) => {
    //         console.log(item);
    //       this.genere.push(item.genre);
    //       console.log(this.genere);
    //       });
    //
    //   },
    // },




    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((response) =>{
            console.log(response.data.response);
            this.disks = response.data.response;
            
          });
    }

  });
