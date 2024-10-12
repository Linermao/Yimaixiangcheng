"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "StartPage",
  setup(__props) {
    const moveX = common_vendor.ref(0);
    let startX = 0;
    let nowX = 0;
    const start = (e) => {
      startX = e.touches[0].clientX;
    };
    const move = (e) => {
      let dis = e.touches[0].clientX - startX;
      moveX.value = nowX + dis;
      if (moveX.value < -50 && nowX != -100) {
        moveX.value = -100;
        nowX = -100;
      }
    };
    const end = () => {
      nowX = moveX.value;
      if (moveX.value > -50) {
        moveX.value = 0;
        nowX = 0;
      } else if (moveX.value < -50) {
        moveX.value = -100;
        nowX = -100;
      }
    };
    const sliderStyle = common_vendor.computed(() => ({
      transform: `translateX(${moveX.value}px)`
    }));
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(start),
        b: common_vendor.o(move),
        c: common_vendor.o(end),
        d: common_vendor.s(sliderStyle.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b12d046"]]);
wx.createPage(MiniProgramPage);
