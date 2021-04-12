// dayjs Config
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// import 'dayjs/locale/th'

// dayjs.locale('th')
dayjs.extend(relativeTime)

export { dayjs }
