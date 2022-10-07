export const conversationSchema = {
    name: 'conversations',
    type: 'document',
    title: 'Conversation',
    fields: [
        {
            name: 'roomName',
            type: 'string',
            title: 'Room Name'
        },
        {
            name: 'RoomId',
            type: 'string',
            title: 'Room Id'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'isDm',
            type: 'boolean',
            title: 'Is DM?'
        },
        {
            name: 'userReference',
            type: 'reference',
            to: [{ type: 'users' }]
        }
    ]
}