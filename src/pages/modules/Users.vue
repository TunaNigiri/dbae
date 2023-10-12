<template>
    <h1 class="flex flex-center">Users</h1>
    <div class="flex flex-container">
      <q-btn class="" v-for="role in menuRoles" :key="role.id" @click="showUsers(role.id)"  >
          {{ role.name }}
      </q-btn>
    </div>
    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        flat bordered
        :rows="displayUsers.length > 0 ? displayUsers : users "
        :columns="columns"
        row-key="idx"
        virtual-scroll
        :virtual-scroll-item-size="5"
        :virtual-scroll-sticky-size-start="5"
        :pagination="pagination"
        :rows-per-page-options="[0]"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="idx" :props="props">
              {{ props.row.idx }}
            </q-td>
            <q-td key="name" :props="props">
              {{ props.row.name }}
            </q-td>
            <q-td key="email" :props="props">
              {{ props.row.email }}
            </q-td>
            <q-td key="dni" :props="props">
              {{ props.row.dni }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
</template>

<script>
    export default {
        name: 'Users',
         
        data() {
          return {
            
            menuRoles: [
              {name: 'All',id:0 , icon:'', },
              {name: 'Employees',id:1 , icon:'', },
              {name: 'Clients',id:2 , icon:'', },
              {name: 'Suppliers',id:3 , icon:'', }
            ],
            columns: [
              { name: 'idx', label: '#', field: 'idx' },
              { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
              { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
              { name: 'dni', align: 'center', label: 'DNI', field: 'dni', sortable: true },
            ],
            users: [  { idx: 0, name: 'Antu Eyaralar', email: 'antu.eyaralar@dbae.com', dni: '00000000', rolId:1 },
              { idx: 1, name: 'Daniel Bulacio', email: 'daniel.bulacio@dbae.com', dni: '00000000', rolId:2 },
              { idx: 2, name: 'User Test', email: 'user.test@dbae.com', dni: '00000000', rolId:3 },
            ],
            pagination: { rowsPerPage: 0 },

            displayUsers: [],
          }
        },

        methods: {
          showUsers(id) {
            
            this.displayUsers = this.users.filter((u) => u.rolId == id)  
            console.log(this.displayUsers)        
          },
        }
    }
</script>