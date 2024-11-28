<template>
    <q-layout view="hHh lpr fFf" class="auth-background">
      <q-header elevated class="bg-primary text-white">
        <q-toolbar>
          <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
          Menu

          <q-toolbar-title>
            <q-avatar>
              <img src="images/logo.png">
            </q-avatar>
          </q-toolbar-title>
          <span>Profile</span>
          <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
        <q-list separator>
          <q-item v-for="(item,index) in accessMenu"
          :key="index"
          :to="item.route"
          v-ripple
          clickable="">
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section><q-item-label class="p-ml-md">{{item.name}}</q-item-label></q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
         <div class="avatarBox row items-center justify-center">
          <q-avatar size="150px" class="over-lapping">
            <q-img :src="profileTemp.avatar"/>
          </q-avatar>
         </div>
         <div class="q-pa-md row items-center q-gutter-md justify-center">
            <q-card flat class=text-center>
              <q-card-section class="q-pt-none">
                <q-card-section class="text-h3">Profile</q-card-section>
                <q-separator inset class="q-pt-none"/>
                <q-card-section class="text-h4">Username</q-card-section>
                {{ profileTemp.username }}
                <q-separator inset class="q-pt-none"/>
                <q-card-section class="text-h4">Email</q-card-section>
                {{ profileTemp.email }}
                <q-separator inset/>
            </q-card-section>
          </q-card>
         </div>
         </q-drawer>
         <div class="q-pa-md q-gutter-sm text-center">
          <q-btn class="full-width items-center" label="Update" color="light-blue-6" @click="profileTemp.model = true"/>
          <q-btn class="full-width items-center" label="Logout" color="red" @click="mdiLogout()"/>
         </div>
         <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>

    <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>

    <q-dialog v-model="profileTemp.model" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Update Profile</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="profileTemp.username" autofocus @keyup.enter="prompt = false" label="Your Username" />
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="profileTemp.email" autofocus @keyup.enter="prompt = false" label="Your Email"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-input dense v-model="profileTemp.password" autofocus @keyup.enter="prompt = false" label="Your Password"/>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-file 
                  v-model="profileTemp.newAvatar"
                  filled 
                  bottom-slots 
                  label="avatar"
                   counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click.stop.prevent="profileTemp.newAvatar = null" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                  Field hint
                </template>
              </q-file>
        </q-card-section>
    </q-dialog>
        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Update" @click="update()" />
        </q-card-actions>
      </q-card>
</template>
  </div>
</template>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
    </q-layout>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { accessMenu } from 'components/ts/MenuComponent'
  import { profileTemp } from 'components/ts/ProfileComponents'
  export default {
    setup () {
      const leftDrawerOpen = ref(false)
      const rightDrawerOpen = ref(false)
  
      return {
        leftDrawerOpen,
        toggleLeftDrawer () {
          leftDrawerOpen.value = !leftDrawerOpen.value
        },
  
        rightDrawerOpen,
        toggleRightDrawer () {
          rightDrawerOpen.value = !rightDrawerOpen.value
        },
        accessMenu,
        profileTemp,
        update(){
          console.log(profileTemp.value())
        },
        logout(){
          console.log('logout')
        }
      }
    }
  }
  </script>