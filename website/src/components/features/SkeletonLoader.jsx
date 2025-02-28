import React from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

/**
 * 骨架屏加载组件
 * @description 用于在数据加载时显示占位内容
 * @param {Object} props - 组件属性
 * @param {number} [props.count=1] - 骨架屏数量
 * @param {number} [props.height=20] - 骨架屏高度
 * @param {number} [props.width] - 骨架屏宽度
 * @param {boolean} [props.circle=false] - 是否显示圆形骨架屏
 * @returns {JSX.Element} 骨架屏组件
 */
const SkeletonLoader = ({ count = 1, height = 20, width, circle = false }) => {
  return (
    <div className="skeleton-loader">
      <Skeleton 
        count={count}
        height={height}
        width={width}
        circle={circle}
        baseColor="#f3f3f3"
        highlightColor="#ecebeb"
      />
    </div>
  )
}

SkeletonLoader.propTypes = {
  count: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  circle: PropTypes.bool
}

export default SkeletonLoader
