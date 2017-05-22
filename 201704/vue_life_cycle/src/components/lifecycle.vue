<template>
    <div class="wrapper">
        <div style="float: left; width: 40%; paddingLeft: 10%;">
            <h2>vue生命周期</h2>
            {{ message }}
            <button @click="message = 'message updated'">update message</button>
            <router-link to="/test">jump out</router-link>
            <br><br><br><br><br>
            <h2>路由钩子函数</h2>
            <router-link :to="{path: '/lifecycle', query: {active: 1}}">refresh1</router-link>
            <router-link :to="{path: '/lifecycle', query: {active: 2}}">refresh2</router-link>        
            <br><br><br><br><br>
            <h2>activated</h2>
            <!-- <keep-alive> -->
                <component :is="comp"></component>
            <!-- </keep-alive> -->
            <button @click="comp == 'first' ? comp = 'second' : comp = 'first'">change component</button>
        </div>
        <div style="float: left; width: 50%;">
            <img src="https://cn.vuejs.org/images/lifecycle.png" alt="" style="width: 100%;">
        </div>
    </div>
</template>

<script>
    import first from './first'
    import second from './second'
    export default {
        components: {
            first,
            second
        },
        data() {
            return {
                message: 'this is a message',
                comp: 'first'
            }
        },
        beforeRouteEnter(to, from, next) {
            console.log("%c%s", "color:red",'----- parent beforeRouteEnter -----')
            console.log(to)
            console.log(from)
            console.log(this)
            next()

        },
        beforeRouteUpdate(to, from, next) {
            console.log("%c%s", "color:red",'----- parent beforeRouteUpdate -----')
            console.log(to)
            console.log(from)
            next()            
        },
        beforeRouteLeave(to, from, next) {
            console.log("%c%s", "color:red",'----- parent beforeRouteLeave -----')
            console.log(to)
            console.log(from)
            console.log(this)
            next()            
        },
        beforeCreate() {
            console.log("%c%s", "color:red",'----- parent beforeCreate -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
        },
        created() {
            console.log("%c%s", "color:red",'----- parent created -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
        },
        beforeMount() {
            console.log("%c%s", "color:red",'----- parent beforeMount -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
            console.log(this.$el)
        },
        mounted() {
            console.log("%c%s", "color:red",'----- parent mounted -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
            console.log(this.$el)
        },
        beforeUpdate() {
            console.log("%c%s", "color:red",'----- parent beforeUpdate -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
            console.log(this.$el)
        },
        updated() {
            console.log("%c%s", "color:red",'----- parent updated -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
            console.log(this.$el)
        },
        beforeDestroy() {
            console.log("%c%s", "color:red",'----- parent beforeDestroy -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)
        },
        destroyed() {
            console.log("%c%s", "color:red",'----- parent destroyed -----')
            console.log('this.$el = ' + this.$el)
            console.log('this.$data = ' + this.$data)
            console.log('this.message = ' + this.message)            
        },
        methods: {
            destory() {
                this.$destroy()
            }
        }
    }
</script>