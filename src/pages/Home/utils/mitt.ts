import mitt from 'mitt'

export enum EVENT {
  MARKER_RAY_CASTER = "MARKER_RAY_CASTER" 
}

export const emitter = mitt()

