const app = {
  pages: [],
  show: new Event('show'),
  init: function(){
    app.pages = documnet.querySelectorAll('.page');
    app.pages.forEach((pg)=>{
        pg.addEvenlistner('show', app.pageshown);
      })
      document.querySelectorAL
  }
}
