<template>
    <q-page-container>
      <q-page class="window-width window-height row justify-center items-center">
        <div class="columns">
          <div class="row">
            <h5 class="text-h5 text-white q-my-md">Welcome to Open World</h5>
          </div>
          <div class="row">
            <q-card square bordered class="q-pa-lg w-400">
              <q-card-section>
                <q-form class="q-gutter-md"/>
                    <q-input
                    v-model="registerParameter.name"
                    square
                    clearable
                    type="text"
                    label="First & Last name"
                  />
                  <q-input
                    v-model="registerParameter.username"
                    square
                    clearable
                    type="email"
                    label="Email"
                  />
                  <q-input
                    v-model="registerParameter.password"
                    square
                    clearable
                    type="password"
                    label="Password"
                  />
                  <q-file 
                  v-model="registerParameter.avatar"
                  filled 
                  bottom-slots 
                  label="avatar"
                   counter>
                <template v-slot:prepend>
                  <q-icon name="cloud_upload" @click.stop.prevent />
                </template>
                <template v-slot:append>
                  <q-icon name="close" @click.stop.prevent="registerParameter.avatar = null" class="cursor-pointer" />
                </template>

                <template v-slot:hint>
                  Field hint
                </template>
              </q-file>
              </q-card-section>
              <q-card-section>
                <q-btn
                  @click="register()"
                  unelevated
                  color="light-blue-1"
                  text-color="cyan-9"
                  size="lg"
                  class="full-width"
                  label="register"
                />
                <q-btn
                  @click="login()"
                  unelevated
                  color="indigo-2"
                  text-color="teal-7"
                  size="lg"
                  class="full-width q-mt-sm"
                  label="login"
                    />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  const registerParameter = ref({
    name: <string>'',
    username: <string>'',
    password: <string>'',
    avatar:'',
  });
  const router = useRouter();
  const register = () => {
    console.log(
      registerParameter.value.name,
      registerParameter.value.username, 
      registerParameter.value.password,
      registerParameter.value.avatar,);
  };
  const login = () => {
    router.replace({ name: 'login' });
  };
  </script>
  