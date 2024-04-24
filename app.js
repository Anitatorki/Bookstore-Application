const app = Vue.createApp({
    //data, functions, Methods, 
   data() {
       return {
        x:0,
        y:0,
        showBooks: true,
           title: "wild",
              author: "Cheryl Strayed",
              age: 35
       }
   },
   methods: {
    changeShowBooks() {
           this.showBooks = !title.showBooks
       },
       handleEvent() {
           console.log("event")
       },

       handleMouseMove(e) {
        this.x = e.offsetX
        this.y = e.offsetY
   }
})

app.mount('#app')