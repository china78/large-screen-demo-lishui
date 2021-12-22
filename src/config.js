export default {
  container: {
    width: 1920, // (必选)容器宽度；如 1920，
    height: 1080, // (必选)容器高度；如 1080，
    scaleType: 'FULL_SCREEN',
  },
  map: {
    style: { left: 0, top: 0, width: '100%', height: '100%' },
    mode: 'fixed'
  },
  topChart: {
    id: 'headerChart',
    style: { left: 0, top: 0, width: '100%', height: 100 },
    transition: {
      anim: 'slide',
      from: 'top',
      timeout: 300,
      delay: 100
    },
    contentStyle: { background: 'rgba(255, 255, 255, 0)' },
    mode: 'adaptWidth'
  },
  leftChart: {
    id: 'leftChart',
    style: { left: 0, top: 0, bottom: 0, width: 400, marginTop: 20 },
    transition: {
      anim: 'slide',
      from: 'left',
      timeout: 300,
      delay: 100,
    },
    contentStyle: { background: 'rgba(255, 255, 255, 0)' },
    relations: {
      layoutBelow: 'headerChart',
      // layoutAbove: 'bottomChart'
    },
    mode: 'scaleXFix',
  },
  rightChart: {
    id: 'rightChart',
    style: { right: 0, top: 0, bottom: 0, width: 400, marginTop: 20 },
    transition: {
      anim: 'slide',
      from: 'right',
      timeout: 300,
      delay: 100,
    },
    contentStyle: { background: 'rgba(255, 255, 255, 0)' },
    relations: {
      layoutBelow: 'headerChart',
      // toRightOf: 'bottomChart',
    },
    mode: 'scaleXFix',
  },
  bottomChart: {
    id: 'bottomChart',
    style: { bottom: 0, left: 0, right: 0, height: '160px' },
    transition: {
      anim: 'slide',
      from: 'bottom',
      timeout: 250
    },
    mode: 'scaleYFix',
    contentStyle: { background: 'rgba(255, 255, 255, 0)' },
    relations: {
      toRightOf: 'leftChart',
      toLeftOf: 'rightChart',
    }
  }
}