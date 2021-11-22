var app = new Vue({
  el: '#app',
  data: {
    mails:[],
    isError:false,
    visible:false,
  },

  mounted(){
    for(let i=0; i<10; i++){
      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response)=>{
        console.log(response)
        const data= response.data;
        console.log(data);
        this.mails.push(data.response) ;
        if(this.mails.length===10){
          this.visible=true;
        }
      })
      .catch((error)=>{
        console.log(error)
        this.isError=true
      })
    }
  }
})