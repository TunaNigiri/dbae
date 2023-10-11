<template>
    <h1 class="flex flex-center">Users</h1>
    <div class="q-pa-md">
      <q-table
        style="height: 400px"
        flat bordered
        title="Users"
        :rows="data"
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
            columns: [
              { name: 'idx', label: '#', field: 'idx' },
              { name: 'name', label: 'Name', align: 'left', field: 'name', sortable: true },
              { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
              { name: 'dni', align: 'center', label: 'DNI', field: 'dni', sortable: true },
            ],
            data: [
              { idx: 0, name: 'Antu Eyaralar', email: 'antu.eyaralar@dbae.com', dni: '00000000' },
              { idx: 1, name: 'Daniel Bulacio', email: 'daniel.bulacio@dbae.com', dni: '00000000' },
              { idx: 2, name: 'User Test', email: 'user.test@dbae.com', dni: '00000000' },
            ],
            pagination: { rowsPerPage: 0 },
          }
        }
    }
</script>