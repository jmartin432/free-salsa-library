// POST: https://connect.mailerlite.com/api/emails/{email_id}/blocks

const insertImageRequestBody = {
  etag: 7,
  type: 'image',
  editor_content: {
    attrs: { 
      src: 'https://storage.mlcdn.com/account_image/2799084/RX6nwnMWvRKCCB5mApcWjpERzffFqRCNCgE0sLR7.png' 
    }
  },
  placement: { 
    position: 'start' 
  }
}

const h1RequestBody = {
  etag,
  type: 'heading',
  editor_content: {
    attrs: { 
      level: 1, 
      textAlign: 'center'
    },
    content: [
      { 
        type: 'text', 
        text: 'Your Event Title' 
      }
    ]
  },
  placement: { 
    position: 'end'
  }
}