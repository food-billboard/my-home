import mitt from 'mitt'

export enum EVENT {
  // 交互点检测
  MARKER_RAY_CASTER = "MARKER_RAY_CASTER",
  // 普通three实例共享
  THREE_INSTANCE_TICK = "THREE_INSTANCE_TICK"
}

export const emitter = mitt()

