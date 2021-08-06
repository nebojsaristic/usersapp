<template>
    <div>
        <!-- <pre>{{users}}</pre> -->
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" >
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td><button @click="openUserDetails(user.id)">Details</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { UserService } from "@/api/userApi"

export default {
    data() {
        return {
            users: [],
        }
    },

    methods: {
        getAllUsers,
        openUserDetails,

    },

    beforeMount() {
        this.getAllUsers()
    }
}

async function getAllUsers() {
    const { data } = await UserService.getUsers();
    this.users = data.data;
}

function openUserDetails(id) {
    this.$router.push({ 
        name: "EditUser",
        params: {
            id: id
        }
    })
}

</script>
