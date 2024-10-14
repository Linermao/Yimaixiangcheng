"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const moveY = common_vendor.ref(-500);
    const blockSwitch = common_vendor.ref(false);
    let startY = 0;
    let nowY = 0;
    const res = common_vendor.index.getSystemInfoSync();
    const moveableHeight = -0.588 * res.windowHeight;
    const ThresholdHeight1 = 0.33 * moveableHeight;
    const ThresholdHeight2 = 0.66 * moveableHeight;
    const start = (e) => {
      startY = e.touches[0].clientY;
    };
    const move = (e) => {
      let dis = e.touches[0].clientY - startY;
      moveY.value = nowY + dis;
      if (nowY == 0 && moveY.value < ThresholdHeight1) {
        moveY.value = moveableHeight;
      } else if (moveY.value < moveableHeight) {
        moveY.value = moveableHeight;
      } else if (nowY != 0 && moveY.value > ThresholdHeight2) {
        moveY.value = 0;
      }
    };
    const end = () => {
      nowY = moveY.value;
      if (nowY >= ThresholdHeight1) {
        moveY.value = 0;
        nowY = 0;
      } else if (nowY <= ThresholdHeight2) {
        moveY.value = moveableHeight;
        nowY = moveableHeight;
      }
    };
    const sliderStyle = common_vendor.computed(() => ({
      transform: `translateY(${moveY.value}px)`
    }));
    const switchBlock = (blockName) => {
      blockSwitch.value = !blockSwitch.value;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0,
        b: common_assets._imports_1,
        c: common_assets._imports_2,
        d: common_assets._imports_3,
        e: common_assets._imports_4,
        f: common_assets._imports_5,
        g: common_assets._imports_6,
        h: common_assets._imports_7,
        i: common_assets._imports_8,
        j: common_assets._imports_9,
        k: common_vendor.o(start),
        l: common_vendor.o(move),
        m: common_vendor.o(end),
        n: common_vendor.s(sliderStyle.value),
        o: !blockSwitch.value
      }, !blockSwitch.value ? {
        p: common_assets._imports_10,
        q: common_vendor.o(switchBlock)
      } : {}, {
        r: blockSwitch.value
      }, blockSwitch.value ? {
        s: common_assets._imports_11,
        t: common_vendor.o(switchBlock)
      } : {}, {
        v: common_vendor.o(start),
        w: common_vendor.o(move),
        x: common_vendor.o(end),
        y: common_vendor.s(sliderStyle.value)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
