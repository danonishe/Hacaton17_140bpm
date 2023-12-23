<template>
  <div
    class="block__plase" :style="{ backgroundColor: selected ? 'red' : 'green' }" @click="toggleSelection"
  >
    <img :src="imageSrc" alt="Изображение" />
    <p>{{ title }}</p>
  </div>
</template>
  
  <script>
export default { 
  data() {
    return {
      selected: false,
    };
  },
  name: "my-plase",
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    toggleSelection() {
      console.log("click");
      console.log(selected)
      this.selected = !this.selected; // Toggles the selected property

      if (this.selected) {
        // Emits the "addPlace" event with the component's ID
        this.$emit("addPlace", this.id);
      } else {
        // Emits the "removePlace" event with the component's ID
        this.$emit("removePlace", this.id);
      }
    },
  },
};
</script>
  
  <style lang="scss">
@import "@/assets/layout/index.scss";

.block__plase {
  width: 75px;
  height: 90px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
  background-color: $plaseColor;
  position: relative;
}
.block__plase p {
  position: absolute;
  bottom: 3px;
  padding-bottom: 0;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
  align-items: center;
}
.block__plase img {
  padding: 8px 0px 3px 0px;
  width: 50px;
}
.block__plase {
  color: #fff;
  font-size: 11px;
  margin: auto;
  margin-bottom: 12px;
}
</style>
  