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
          Profile
        </q-toolbar-title>
        <span>Profile</span>
        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" elevated>
      <q-list separator>
        <q-item v-for="(item, index) in accessMenu"
                :key="index"
                :to="item.route"
                v-ripple
                clickable>
          <q-avatar><q-icon :name="item.icon"></q-icon></q-avatar>
          <q-item-section>
            <q-item-label class="p-ml-md">{{ item.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer v-model="rightDrawerOpen" side="right" behavior="mobile" elevated>
      <div class="avatarBox row items-center justify-center">
        <q-avatar size="150px" class="over-lapping">
          <q-img :src="profileTemp.avatar" />
        </q-avatar>
      </div>
      <div class="q-pa-md row items-center q-gutter-md justify-center">
        <q-card flat class="text-center">
          <q-card-section class="q-pt-none">
            <q-card-section class="text-h5">Profile</q-card-section>
            <q-separator inset class="q-pt-none" />
            <q-card-section class="text-h5">Username</q-card-section>
            {{ profileTemp.username }}
            <q-separator inset class="q-pt-none" />
            <q-card-section class="text-h5">Email</q-card-section>
            {{ profileTemp.email }}
            <q-separator inset />
          </q-card-section>
        </q-card>
      </div>
      <div class="q-pa-md q-gutter-sm text-center">
        <q-btn class="full-width items-center" label="Update" color="light-blue-1" text-color="cyan-9" @click="showUpdateModal = true" />
        <q-btn class="full-width items-center" label="Logout" color="indigo-2" text-color="teal-7" @click="handleLogout" />
      </div>
    </q-drawer>

    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn class="full-width items-center" label="Turn on Wifi" color="light-blue-1" text-color="cyan-9" v-close-popup />
    </div>

    <q-dialog v-model="showUpdateModal">
      <q-card>
        <q-card-section>
          <div class="text-h6">Update Profile</div>
        </q-card-section>

        <q-card-section>
          <q-input v-model="profileTemp.username" label="Username" filled />
          <q-input v-model="profileTemp.email" label="Email" type="email" filled />
          <q-input v-model="profileTemp.password" label="Password" type="password" filled />
          <q-uploader v-model="profileTemp.avatar" label="Upload Avatar" filled>
            <template v-slot:prepend>
              <q-icon name="cloud_upload" @click.stop.prevent />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click.stop.prevent="profileTemp.avatar = null" class="cursor-pointer" />
            </template>
          </q-uploader>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="red" text-color="white" v-close-popup />
          <q-btn flat label="Update" color="light-blue-1" text-color="cyan-9" @click="updateProfile" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import { accessMenu } from 'components/ts/MenuComponent'
import { profileTemp } from 'components/ts/ProfileComponents'

export default {
  setup() {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)
    const showUpdateModal = ref(false)

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const toggleRightDrawer = () => {
      rightDrawerOpen.value = !rightDrawerOpen.value
    }

    const updateProfile = () => {
      console.log('Profile updated:', profileTemp)
      showUpdateModal.value = false // Close the modal after updating
    }

    const handleLogout = () => {
      console.log('Logout button clicked')
    }

    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      rightDrawerOpen,
      toggleRightDrawer,
      showUpdateModal,
      accessMenu,
      profileTemp,
      updateProfile,
      handleLogout
    }
  }
}
</script>
