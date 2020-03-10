<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="{{}}"> -->
    <!-- <img v-bind:src="imageUrl"/> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
        <h3>Home</h3>
        <h3>{{displayName}}</h3>
        <h5>{{statusMessage}}</h5>

    <nav>
        <!-- <router-link to='/'>Home</router-link> -->
        <router-link to='/register'>page1</router-link>
        <router-link to='/login'>page2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      userProfile: null,
      displayName: null,
      imageUrl:null,
      statusMessage:null
    }
  },
  beforeCreate(){
        this.$liff.init({
           liffId: "1653924762-Wmvo8BAG"
        })
        .then(() => {
          if(!this.$liff.isLoggedIn()){
              this.$liff.login(); 
              console.log("liff")
          }else{
            console.log("not login")
            this.$liff.getProfile().then(profile => {
                // const userProfile = profile.userId;
                // const displayName = profile.displayName;
                 this.userProfile = profile.userId;
                 this.displayName = profile.displayName;
                 this.imageUrl = profile.pictureUrl
                 this.statusMessage = profile.statusMessage
                // const statusMessage = profile.statusMessage;
                // const email = this.$liff.getDecodedIDToken().email;
                // console.log(displayName)
                // console.log(statusMessage)
                // console.log(email)

              }).catch(
                err => console.error(err)
              );

          }
            // start to use LIFF's api
            
        })
  }




  // name: 'App',
  // components: {
  //   HelloWorld
  // }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
