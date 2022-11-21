
AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" }
    },
    init: function () {
      this.handleClickEvents();
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
    },
    handleClickEvents: function () {
      //Cursor 'click' Events
      this.el.addEventListener("click", evt => {
        const comicContainer = document.querySelector("#comic-container");
        const { state } = comicContainer.getAttribute("tour");
  
        if (state === "comic-list") {
          const id = this.el.getAttribute("id");
          const comicId = [
            "captain-america",
            "hulk",
            "spiderman",
            "thor"
          ];
          if (comicId.includes(id)) {
            comicContainer.setAttribute("tour", {
              state: "view",
              selectedCard: id
            });
          }
        }
      });
    },
    handlecomicListState: function () {
      const id = this.el.getAttribute("id");
      const comicId = ["captain-america", "hulk", "spiderman", "thor"];
      if (comicId.includes(id)) {
        const placeContainer = document.querySelector("#comic-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlecomicListState();
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },

    handleViewState: function(){
      const el = this.el; 
      const id = el.getAttribute("id") 
      const comicContainer = document.querySelector("#comic-container")
      const {selectedItemId} = comicContainer.getAttribute("cursor-listener");
      const sideViewcomicId = ["place-1", "place-2", "place-3", "place-4"]
  
      if(sideViewcomicId.includes(id)){
        comicContainer.setAttribute("tour", {
          state: "change-view"
        });
  
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material" , {
          src: `./assets/360_images/${selectedItemId}/${id}.jpg`,
          color:"#fff"
        });
      }
    },
  
  });