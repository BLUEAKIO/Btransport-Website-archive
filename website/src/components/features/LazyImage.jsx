import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

/**
 * 图片懒加载组件
 * @description 实现图片的懒加载功能，在图片加载完成前显示占位符
 * @param {Object} props - 组件属性
 * @param {string} props.src - 图片地址
 * @param {string} props.alt - 图片alt文本
 * @param {Object} [props.style] - 图片样式
 * @returns {JSX.Element} 图片懒加载组件
 */
const LazyImage = ({ src, alt, style }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => setLoaded(true)
  }, [src])

  return loaded ? (
    <img 
      src={src}
      alt={alt}
      style={style}
      loading="lazy"
    />
  ) : (
    <div style={{ 
      ...style,
      backgroundColor: '#f3f3f3'
    }} />
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  style: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    objectFit: PropTypes.string,
    // 其他样式属性
  })
}

export default LazyImage
