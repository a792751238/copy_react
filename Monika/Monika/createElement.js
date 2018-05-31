/**
 * Created by fuhuo on 2018/5/25.
 */


/**
 * 该方法在写jsx的时候会自动调用
 * argument(tag,attr,child1,child2,...child(n))
 */
function createElement(tag, attr, ...children) {
    return {
        tag,
        attr,
        children,
    }
}

export {
    createElement,
}