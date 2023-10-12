<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>

      <q-btn class="flex flex-container" v-for="module in menuModules" :key="module.id" @click="goToModule(module.name)" >
          {{ module.name }}
      </q-btn>

      <q-btn @click="logOut()">Log Out</q-btn>
      
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>

export default {

  data() {

    return {
      leftDrawerOpen : false,
      menuModules: [
        {name: 'Users',id:0 , icon:'', },
        {name: 'Products',id:1 , icon:'', },
        {name: 'Services',id:2 , icon:'', }
        ],
    }
  },
  methods: {
    toggleLeftDrawer() {
        this.leftDrawerOpen = !this.leftDrawerOpen
      },
      goToModule(name) {
        this.$router.push({name: name})
      },
      logOut() {
        this.$router.push({name: 'LoginForm'})
      }
  }
}
  
  
</script>