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
              <q-form class="q-gutter-md">
                <q-input
                  v-model="loginParameter.username"
                  square
                  clearable
                  type="email"
                  label="Email"
                />
                <q-input
                  v-model="loginParameter.password"
                  square
                  clearable
                  type="password"
                  label="Password"
                />
              </q-form>
            </q-card-section>
            <q-card-section>
              <q-btn
                @click="login()"
                unelevated
                color="light-blue-1"
                text-color="cyan-9"
                size="lg"
                class="full-width"
                label="login"
              />
              <q-btn
                @click="register()"
                unelevated
                color="indigo-2"
                text-color="teal-7"
                size="lg"
                class="full-width q-mt-sm"
                label="register"
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
const loginParameter = ref({
  username: <string>'',
  password: <string>'',
});
const login = () => {
  console.log(loginParameter.value.username, loginParameter.value.password);
};
const router = useRouter();
const register = () => {
  router.replace({ name: 'register' });
};
</script>
