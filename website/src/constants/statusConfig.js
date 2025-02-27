export const STATUS_COLORS = {
  normal: '#52c41a',
  delayed: '#faad14',
  suspended: '#f5222d',
  maintenance: '#1890ff',
  unknown: '#d9d9d9'
}

export const STATUS_LIST = [
  {
    key: 'normal',
    label: 'status.normal',
    color: STATUS_COLORS.normal
  },
  {
    key: 'delayed',
    label: 'status.delayed',
    color: STATUS_COLORS.delayed
  },
  {
    key: 'suspended',
    label: 'status.suspended',
    color: STATUS_COLORS.suspended
  },
  {
    key: 'maintenance',
    label: 'status.maintenance',
    color: STATUS_COLORS.maintenance
  },
  {
    key: 'unknown',
    label: 'status.unknown',
    color: STATUS_COLORS.unknown
  }
]
