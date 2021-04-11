const STATUS_KEY = {
  '01': {
    action: 'received_order',
    message: 'Order Received',
    icon: 'store',
  },
  '02': {
    action: 'preparing_order',
    message: 'Preparing Order',
    icon: 'local_shipping',
  },
  '03': {
    action: 'out_for_delivery',
    message: 'Out for Delivery',
    icon: 'local_shipping',
  },
  '04': {
    action: 'completed',
    message: 'Successful',
    icon: 'where_to_vote',
  },
}

export { STATUS_KEY }
