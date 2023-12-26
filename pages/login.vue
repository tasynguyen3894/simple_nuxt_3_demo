<template>
  <div>
    <div>
      <input v-model="username" placeholder="Username" />
    </div>
    <div>
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <div>
      <button @click="login()">Login</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import { getService } from '~/services/factory';

const authService = getService().getAuthService();

const username = ref<string>('');
const password = ref<string>('');

function login() {
  authService.login(username.value, password.value)
    .then(result => {
      console.log(result);
    })
}

</script>
