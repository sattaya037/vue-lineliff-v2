<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data() {
    return {
      userProfile: null,
      displayName: null,
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
                const userProfile = profile.userId;
                const displayName = profile.displayName;
                 this.userProfile = userProfile;
                 this.displayName = displayName;

                // const statusMessage = profile.statusMessage;
                // const pictureUrl = profile.pictureUrl;
                // const email = this.$liff.getDecodedIDToken().email;
                console.log( this.displayName)
                // console.log(displayName)
                // console.log(statusMessage)
                // console.log(pictureUrl)
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
