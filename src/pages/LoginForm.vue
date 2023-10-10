<template>
  <q-page class="flex flex-center">
    <div class="wrapper">
      <h3 class="flex flex-center q-ml-lg">DBAE</h3>
        <q-form class="flex-center">
          
          <div class="flex flex-col flex-center q-mr-sm">
            <q-icon size="lg"  name="person"/>
            <q-input class="q-pa-none" rounded outlined v-model="this.inputName" label=""  />
          </div>
          <div class="flex flex-center q-mr-sm">
            <q-icon size="lg"  name="key"/>
            <q-input rounded outlined v-model="this.inputPassword" type="password" label="" />
          </div>
          <div class="flex flex-center">
            <q-btn class="q-ml-lg q-mt-md" @click="login()" label="Login">
              <q-popup-proxy>
                <q-banner class="flex flex-center" >
                  <template v-slot:avatar>
                      <q-icon name="warning" color="primary" />
                       </template>
                      Invalid Password or Username
                  </q-banner>
              </q-popup-proxy>

            </q-btn>
          </div>
        </q-form>
    </div>
  </q-page>
</template>

<script>

import { defineAsyncComponent} from 'vue';

    export default {
        
        data() {
            return {
                password: "1234",
                userName: "Alberto",
                loginButton: "Login",
                disableButton: false,
                inputName: "",
                inputPassword: "",
                popUpColor: "",
                popUpText: ""
            }
        },
        methods: {
            login() {
                this.disableButton = true
                if (this.inputName === this.userName && this.inputPassword === this.password){
                    this.loginButton = "Loading"
                    this.$router.push({name: 'homePage'})
                    this.popUpText = "Bienvenido"
                }
                else {
                   
                    this.disableButton = false
                    this.inputName = ""
                    this.inputPassword = ""
                    this.popUpColor = "red"
                    this.popUpText = "Login incorrecto"
                }           
            }
        },
        components: {
            // PopUp: defineAsyncComponent(() => import ('./PopUp.vue'))
        }
    }


</script>

<style>

.q-placeholder{
  padding:0 !important;
}

</style>
