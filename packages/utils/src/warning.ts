import { logger } from './logger'

export function error(condition: boolean, format: string, ...args: any[]) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning message argument')
  }

  if (!condition) {
    let argIndex = 0
    const message = format.replace(/%s/g, () => args[argIndex++])
    throw new Error(message)
  }
}

export function warning(condition: boolean, format: string, ...args: any[]) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning message argument')
    }

    if (!condition) {
      let argIndex = 0
      const message = format.replace(/%s/g, () => args[argIndex++])
      logger.error(message)
      return
    }
  }
}
