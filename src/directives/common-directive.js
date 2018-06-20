export default {
  mouseaction: {
    bind (el, binding, vnode) {
      el.addEventListener('mouseenter', vnode.context.mouseenter)
      el.addEventListener('mouseleave', vnode.context.mouseleave)
    },
    unbind (el, binding, vnode) {
      el.removeEventListener('mouseenter', vnode.context.mouseenter)
      el.removeEventListener('mouseleave', vnode.context.mouseleave)
    },
  }
};
