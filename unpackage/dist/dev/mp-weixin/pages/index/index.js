"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const moveY = common_vendor.ref(0);
    const titleMoveY = common_vendor.ref(0);
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
        titleMoveY.value = moveY.value * 0.3;
      } else if (moveY.value < moveableHeight) {
        moveY.value = moveableHeight;
      } else if (nowY != 0 && moveY.value > ThresholdHeight2) {
        moveY.value = 0;
        titleMoveY.value = 0;
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
    const titleSliderStyle = common_vendor.computed(() => ({
      transform: `translateY(${titleMoveY.value}px)`
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
        i: common_vendor.s(titleSliderStyle.value),
        j: common_assets._imports_8,
        k: common_assets._imports_9,
        l: common_vendor.o(start),
        m: common_vendor.o(move),
        n: common_vendor.o(end),
        o: common_vendor.s(sliderStyle.value),
        p: !blockSwitch.value
      }, !blockSwitch.value ? {
        q: common_assets._imports_10,
        r: common_vendor.o(switchBlock)
      } : {}, {
        s: blockSwitch.value
      }, blockSwitch.value ? {
        t: common_assets._imports_11,
        v: common_vendor.o(switchBlock)
      } : {}, {
        w: !blockSwitch.value
      }, !blockSwitch.value ? {} : {}, {
        x: blockSwitch.value
      }, blockSwitch.value ? {} : {}, {
        y: !blockSwitch.value
      }, !blockSwitch.value ? {
        z: common_vendor.o(switchBlock)
      } : {}, {
        A: blockSwitch.value
      }, blockSwitch.value ? {
        B: common_vendor.o(switchBlock)
      } : {}, {
        C: common_assets._imports_12,
        D: common_assets._imports_13,
        E: common_assets._imports_14,
        F: common_assets._imports_15,
        G: !blockSwitch.value
      }, !blockSwitch.value ? {} : {}, {
        H: blockSwitch.value
      }, blockSwitch.value ? {} : {}, {
        I: common_vendor.o(start),
        J: common_vendor.o(move),
        K: common_vendor.o(end),
        L: common_vendor.s(sliderStyle.value)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
