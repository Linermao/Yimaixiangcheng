"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "StartPage",
  setup(__props) {
    const moveX = common_vendor.ref(0);
    common_vendor.computed(() => ({
      transform: `translateX(${moveX.value}px)`
    }));
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1b12d046"]]);
wx.createPage(MiniProgramPage);
