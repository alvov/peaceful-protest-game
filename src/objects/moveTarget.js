// @flow

export class MoveTarget {
  constructor ({ target, shouldStop, callback }) {
    this.target = target
    this.shouldStop = shouldStop || this.shouldWait
    this.callback = callback

    this.stoped = false
  }

  update (prefab) {
    if (this.stoped) {
      return false
    } else if (this.shouldStop(prefab, this.target)) {
      prefab.stop()
      return stop()
    } else if (this.shouldWait(prefab)) {
      prefab.stop()
    } else {
      prefab.setVelocity(this.target)
    }

    return true
  }

  stop (prefab) {
    this.stoped = true
    this.callback && this.callback()

    return false
  }

  shouldWait (prefab) {
    const fuzzyEqual = prefab.game.math.fuzzyEqual
    const prefabCenter = prefab.sprite.body.center
    const target = this.target

    return fuzzyEqual(target.x, prefabCenter.x, 1) && fuzzyEqual(target.y, prefabCenter.y, 1)
  }
}

export default MoveTarget
