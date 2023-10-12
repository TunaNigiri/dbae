<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> 
          D4BAE
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer class="cajon" show-if-above v-model="leftDrawerOpen" side="left" bordered>
        <span>
          <q-btn class="cajon1" v-for="module in menuModules" :key="module.id" @click="goToModule(module.name)" >
              {{ module.name }}
          </q-btn>
        </span>
        
        <q-btn class="cajon2" @click="logOut()">Log Out</q-btn>

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

<style>
.cajon {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh !important;
}
.cajon1 {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.cajon2 {
  width: 100%;
}
</style>