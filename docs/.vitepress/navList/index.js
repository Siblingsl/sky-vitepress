export const navList = [
    { text: "首页", link: "/" },
    { text: "linux", link: "/docs/pages/linux/index.md" },
    {
        text: "编程语言",
        items: [
            { text: "js", link: "/docs/pages/编程语言/js.md" },
            { text: "nodejs", link: "/docs/pages/编程语言/nodejs.md" },
            { text: "python", link: "/docs/pages/编程语言/python.md" },
            { text: "java", link: "/docs/pages/编程语言/java.md" },
            { text: process.env.VITE_SOME_KEY, link: "/docs/pages/编程语言/java.md" },
        ]
    },
    {
        text: "编程框架",
        items: [
            { text: "前端-vue", link: "/docs/pages/编程框架/vue.md" },
            { text: "前端-react", link: "/docs/pages/编程框架/react.md" },
            { text: "后端-nestjs", link: "/docs/pages/编程框架/nestjs.md" },
            { text: "后端-spring", link: "/docs/pages/编程框架/spring.md" },
            { text: "机器学习-pytorch", link: "/docs/pages/编程框架/pytorch.md" },
        ]
    },
    {
        text: "运维",
        items: [
            { text: "docker", link: "/docs/pages/运维/docker.md" },
            { text: "nginx", link: "/docs/pages/运维/nginx.md" },
            { text: "k8s/k3s", link: "/docs/pages/运维/kubernetes.md" },
            { text: "CI/CD", link: "/docs/pages/运维/ci-cd.md" },
        ]
    },
    {
        text: "大模型",
        items: [
            { text: "chatglm3", link: "/docs/pages/大模型/chatglm3.md" },
        ]
    },
    {
        text: "开发文档",
        items: [
            { text: "sky-next", link: "/docs/pages/开发文档/sky-next.md" },
            { text: "sky-client", link: "/docs/pages/开发文档/sky-client.md" },
            { text: "sky-service", link: "/docs/pages/开发文档/sky-service.md" }
        ]
    },

    { text: "个人之家", link: "http://www.baidu.com" },

]