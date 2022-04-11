<template>
  <section class="login-form-container">
      <h1>Ingresa a tu Sitio de tareas</h1>
    <form @submit.prevent="checkUserLogin" method="POST">
        <div class="data-form-container">
          <label for="name-user">Usuario:</label>
          <br />
          <input v-model="user" type="text" name="name-user" class="field"/>
        </div>
        <div class="data-form-container">
          <label for="password-user">Contraseña:</label>
          <br />
          <input v-model="password" type="password" name="password-user" class="field" />
        </div>
        <button class="btn">Enviar</button>
    </form>
  </section>
</template>

<script>

export default {
    data(){
        return {
            user : '',
            password : '',
        }
    },
    methods : {
        checkUserLogin(){
            if(localStorage.users){
                let users = JSON.parse( localStorage.getItem('users') )
                let result = users.find( user => user.user === this.user && user.password === this.password)
                console.log(result);
                return (result) ? this.$router.push('/tasks') : alert('No esta registado')
            }
            return alert('Vacio Users')
        }
    },
    beforeCreate(){
        const list = [
            {
                user : 'julian',
                password : 'prueba'
            },
            {
                user : 'admin',
                password : 'admin'
            }
        ]
        localStorage.setItem('users', JSON.stringify(list) )
    }
};
</script>

<style scoped>
form {
    margin: 0 auto;
    background-color: white;
    color: black;
    font-size: 1.2rem;
    border-radius: 8px;
    padding: 20px;
    width: 350px;
    box-shadow: 5px 19px 38px rgba(255, 255, 255, 0.1);
}

.field {
    border: solid 1px #ccc;
    padding: 8px;
    margin: 15px 0;
    border-radius: 10px;
    width: 320px;
}

.field:focus {
    border-color: #ccf;
}

.btn {
    border-radius: 3px;
    display: inline-block;
    padding: 15px 20px;
    margin: 20px 10px;
    color: white;
    background-color: #3cc93a;
    border: none;
    cursor: pointer;
}

.btn:hover {
    background-color: #37b839;
}
</style>