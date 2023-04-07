const { createApp } = Vue;

createApp({
  data() {
    return {
      indexgu: 0,

      gundamlist: [
        {
          name: "Beguir",
          image: "img/1.webp",
        },

        {
          name: "Aerial",
          image: "img/2.JPG",
        },

        {
          name: "Pharact",
          image: "img/3.jpeg",
        },

        {
          name: "Heindree",
          image: "img/4.jpg",
        },

        {
          name: "Dilanza",
          image: "img/5.webp",
        },
      ],
    };
  },

  methods: {

// Da bindare al bottone per fa scrorrere le immagini
    imgNext() {
      if (this.indexgu < this.gundamlist.length - 1) {
        this.indexgu++;
      } else {
        this.indexgu = 0;
      }
    }

  }

}).mount("#app");
