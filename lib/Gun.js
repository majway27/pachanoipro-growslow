import Gun from 'gun/gun'
import SEA from 'gun/sea.js'

import 'gun/lib/radix'
import 'gun/lib/radisk'
import 'gun/lib/store'
import 'gun/lib/axe'
import 'gun/lib/rindexed'
import 'gun/lib/webrtc'
import 'gun/lib/bye'
import 'gun/nts'

//'https://pachanoi-pro-relay.netlify.app/',

const peers = [
  'http://localhost:8080/gun',
]

const gun = Gun({ peers, localStorage: false })

const user = gun.user()
// const SEA = Gun.SEA

user.recall({ sessionStorage: true })

export {
  gun,
  SEA,
  user
}
