import { ref } from 'vue'
const profileTemp = ref({
    model: <boolean>false,
    id:<number>0,
    username:<string> 'paniz',
    email:<string> 'paniz@gmail.com',
    avatar:<string> 'images/avatar.png',
    newAvatar:undefined,
    password:<string>'',
    role:<string> 'user'
})
export {profileTemp}