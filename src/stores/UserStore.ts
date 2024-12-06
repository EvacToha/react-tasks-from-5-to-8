import {Instance, types} from "mobx-state-tree"

const Error = types.model({
    type: types.optional(types.string, ""),
    message: types.optional(types.string, ""),
});

export const User = types.model({
    email: types.optional(types.string, ""),
    password: types.optional(types.string, "")
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
    },
    setProp(name: string, value: string) {
        switch (name) {
            case "email":
                self.email = value;
                break;
            case "password":
                self.password = value;
                break;
        }
    }
}));


const UserStore = types.model({
    user: User,
    errors: types.optional(types.array(Error), []),
}).actions((self) => ({
    setUser(email : string, password: string) {
        self.user.setEmail(email);
        self.user.setPassword(password);
    },
    addError(type: string, message: string){
        self.errors.push({type,message});
    },
    clearErrors() {
        self.errors.replace([]);
    }
}))

export type UserStoreType = Instance<typeof userStore>;

export const userStore = UserStore.create({
    user: {},
    errors: [],
});


