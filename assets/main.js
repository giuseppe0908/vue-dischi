  Vue.config.devtools = true;
  var app = new Vue({
    el: '#root',
    data: {
      disks: [],
      genereoption: [],
      genere:"",
      flag: false,

    },

    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((response) =>{
            console.log(response.data.response);
            this.disks = response.data.response;

            this.disks.forEach((item, i) => {
              if (!this.genereoption.includes(item.genre)) {
                  this.genereoption.push(item.genre);
              }
            });

          });
    },
    methods: {
      ordinamento: function () {
        this.flag = !this.flag;
        if (this.flag) {
          //Ordinamento crescente dell'anno di uscita
              this.disks.sort((a,b) =>  a.year - b.year);
        }else {
          this.disks.sort((a,b) =>  b.year - a.year);                                 
        }
      }
    }

  });
