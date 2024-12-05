import { types } from "mobx-state-tree"

const User = types.model({
    email: "",
    password: "",
}).views(self => ({
    get user() {
        return {email: self.email, password: self.password};
    }
})).actions((self) => ({
    setEmail(email : string) {
        self.email = email;
    },
    setPassword(password: string) {
        self.password = password;
    }
}));


const UserStore = types.model({
    user: User,
}).actions((self) => ({
    setUser(email : string, password: string) {
        self.user.setEmail(email);
        self.user.setPassword(password);
    }
}))

export const userStore = UserStore.create({
    user: {
        email: "",
        password: "",
    }
});
