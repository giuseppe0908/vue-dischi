  Vue.config.devtools = true;
  var app = new Vue({
    el: '#root',
    data: {
      disks: [],
      genere:"",

    },

    mounted(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then((response) =>{
            console.log(response.data.response);
            this.disks = response.data.response;
        //Ordinamento crescente dell'anno di uscita
            this.disks.sort((a,b) => {
                    return a.year - b.year;
            })

          });
    }

  });
