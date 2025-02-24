import Alpine from "alpinejs";


const asideStore = () =>
    Alpine.store("aside") as { open: boolean; toggle: () => void };
const pricingStore = () =>
    Alpine.store("pricing") as { open: boolean; toggle: () => void };
const newsStore = () =>
    Alpine.store("news") as { open: boolean; toggle: () => void };
const accountStore = () =>
    Alpine.store("account") as { open: boolean; toggle: () => void };
const chatStore = () =>
    Alpine.store("chat") as {
        messages: { from: "user" | "system"; text: string }[];
        user: (msg: string) => void;
        system: (msg: string) => void;
    };

export default () => {
    Alpine.store("aside", {
        open: false,
        toggle() {
            asideStore().open = !asideStore().open;
        },
    });
    Alpine.store("pricing", {
        open: false,
        toggle() {
            pricingStore().open = !pricingStore().open;
        },
    });
    Alpine.store("news", {
        open: false,
        toggle() {
            newsStore().open = !newsStore().open;
        },
    });
    Alpine.store("account", {
        open: false,
        toggle() {
            accountStore().open = !accountStore().open;
        },
    });
    Alpine.store("chat", {
        messages: [
            // { from: "user", text: "test" },
            // { from: "system", text: "hello!" },
        ],
        user(text: string) {
            chatStore().messages.push({
                from: "user",
                text,
            });
            document
                .getElementById("chatmessages")
                ?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
        },
        system(text: string) {
            chatStore().messages.push({
                from: "system",
                text,
            });
            document
                .getElementById("chatmessages")
                ?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
        },
    });
    Alpine.data("form", () => ({
        message: "",
        submit(e: Event) {
            e.preventDefault();
            chatStore().user(this.message);
            setTimeout(() => {
                chatStore().system("Тестовый ответ.");
            }, 500);
            this.message = "";
        },
    }));
};
