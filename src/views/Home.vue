<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="row justify-content-center mt-3">
      <div class="col-4">
        <form @submit.prevent="submit">
          <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="message">
            <div class="input-group-append">
              <button class="btn btn-primary" type="submit" id="button-addon2">Submit</button>
            </div>
          </div>
        </form>
        <div class="card p-3 shadow-sm mt-3">
          <span class="font-weight-bold">Encryption:</span>
          <div class="card-bodd">{{text_encrypt}}</div>
        </div>
        <div class="card p-3 shadow-sm mt-3">
          <span class="font-weight-bold">Decryption:</span>
          <div class="card-bodd">{{text_decrypt}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "/api/user",
      text_encrypt: "",
      text_decrypt: "",
      encryptsecret: "base64:+vk4pJWWklKK2FDjptdOkLME1SQMSYed7zBqIzsON4g="
    };
  },
  mounted() {},
  methods: {
    submit() {
      this.text_encrypt = this.encrypt();
      this.text_decrypt = this.decrypt(this.text_encrypt);
    },
    decrypt(encrypted) {
      var bytes = CryptoJS.AES.decrypt(
        encrypted.toString(),
        this.encryptsecret
      );
      return bytes.toString(CryptoJS.enc.Utf8);
    },
    encrypt() {
      let cryptobject = CryptoJS.AES.encrypt(this.message, this.encryptsecret);
      let encrypted = {
        key: cryptobject.key + "", // don't send this
        iv: cryptobject.iv + "", // don't send this
        salt: cryptobject.salt + "", // don't send this
        ciphertext: cryptobject.ciphertext + "", // don't send this
        str: cryptobject + "" // send or store this
      };
      return encrypted.str;
    }
  }
};
</script>
