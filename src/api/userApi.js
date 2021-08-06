import restApi from "@/config/http";

export default class UserApi {
    getUsers() {
        return restApi({
            method: "GET",
            url: "/users"
        });
    }

    getUser(id) {
        return restApi({
            method: "GET",
            url: `/users/${id}`
        });
    }

    createUser() {
        return restApi({
            method: "POST",
            url: "/users"
        });
    }

    updateUser(id) {
        return restApi({
            method: "PUT",
            url: `/users/${id}`
        });
    }

    deleteUser(id) {
        return restApi({
            method: "DELETE",
            url: `/users/${id}`
        });
    }
}

export const UserService = new UserApi();