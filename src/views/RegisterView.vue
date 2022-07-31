<template>
  <body>
    <div class="col-md-4 col-md-offset-4 fadeInDown" id="register">
      <section id="inner-wrapper" class="register">
        <form v-on:submit.prevent="onInput">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"
                ><i class="fa fa-envelope"> </i
              ></span>
               <p class="form-label">El nombre de usuario debe ser mayor a 10 caracteres y menor de 35</p>
              <input type="text"
                class="form-control"
                minlength="10" maxlength="35" id="nombre"  @keyup="validarNombre"
                name="username"
                v-model="user.username"
                placeholder="Nombre de usuario"
                required
              />
              <div
                v-show="submited && !$v.username.required"
                style="color: red"
              >
                Debe ingresar nombre de usuario
                <p class="errorForm">{{ mensajeNombre }}</p>
              </div>
            </div>
          </div>
          
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"
                ><i class="fa fa-envelope"> </i
              ></span>
              <input
                type="email"
                @keyup="validarMail"
                class="form-control"
                placeholder="Email"
                name="email"
                v-model="user.email"
                required
              />
            </div>
            <div>
              <p class="errorForm">{{ mensajeMail }}</p>
            </div>
          </div>
       
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-key"> </i></span>
               <p class="form-label">Incluir una mayúscula, un caracter especial (!#$..) y un número</p>
              <p class="form-label">La contraseña debe ser de 5 caracteres como minimo y 10 como maximo respetando los parametros anteriores</p>
              <input
                type="password"
                minlength="5" maxlength="10" class="form-control" @keyup="validarPassword"
                
                name="password"
                v-model="user.password"
                placeholder="Contraseña"
                required
              />
              <div
                v-show="submited && !$v.password.required"
                style="color: red"
              >
                Debe ingresar contraseña
                <p class="errorForm">{{ mensajePassword }}</p>
              </div>
            </div>
          </div>
          <hr>
          <div class="form-group">
            <span class="perfil">Selecciona como quieres registrarte! </span>
            <div class="input-group selectRol">
              <select name="rol" id="rol" v-model="user.role" required>
                <option value="ADMIN">Administrador</option>
                <option value="USER">Usuario</option>
              </select>
            </div>
          </div>
          <hr>
          <button type="submit" id="botonregister" class="btn btn-success btn-block">
            Registrarse!
          </button>
        </form>
      </section>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import { required } from "vuelidate/lib/validators";
export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
        role: ["USER", "ADMIN"],
      },
      mensajeNombre: "",
      mensajeMail: "",
      mensajePassword: "",
      submited: false,
    };
  },

  methods: {
    onInput(event, inputName) {
      this.submited = true;
      this[inputName] = event.target.value;
      axios
        .post(
          "https://623b33f32e056d1037eee13e.mockapi.io/desafio-coder/usuarios",
          this.user
        )
        .then(this.$router.push("/"));
    },
    checkForm() {
      return (
        this.validarNombre() &&
        this.validarMail() &&
        this.validarPassword()
      );
    },
    validarNombre() {
      let regex1 = /^([A-Za]{0}?[A-Za']+[\s])+([A-Za]{0}?[A-Za'])+[\s]?([A-Za]{0}?[A-Za'])?$/;
      if (regex1.test(this.usuario.username)) {
        this.mensajeNombre = "Nombre valido";
        return true;
      } else {
        this.mensajeNombre = "Nombre inválido";
        return false;
      }
    },
    validarMail() {
      let regex2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (regex2.test(this.usuario.email)) {
        this.mensajeMail = "";
        return true;
      } else {
        this.mensajeMail = "Email inválido";
        return false;
      }
    },
    validarPassword() {
      let regex3 = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (regex3.test(this.usuario.password)) {
        this.mensajePassword = "";
        return true;
      } else {
        this.mensajePassword = "Clave inválida";
        return false;
      }
    },
  },
  validations: {
    username: {
      required,
    },
    password: {
      required,
    },
  },
};
</script>

<style scoped>;
#register {
  -webkit-perspective: 1000px;
  -moz-perspective: 1000px;
  perspective: 1000px;
  margin-top: 50px;
  margin-left: 33%;
  background-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}
.register {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.register .form-group {
  margin-bottom: 17px;
}
.register .form-control,
.register .btn {
  border-radius: 0;
}

.register .btn {
  text-transform: uppercase;
  letter-spacing: 3px;

}
.input-group-addon {
  border-radius: 0;
  color: #fff;
  background: #f3aa0c;
  border: #f3aa0c;
}
.forgot {
  font-size: 16px;
}
.forgot a {
  color: rgb(175, 52, 52);
}
.forgot a:hover {
  color: #2b2b2b;
}

input[type="text"],
input[type="password"],
input[type="email"] {
  background: rgb(231, 231, 231);
  border: none;
  color: #000000;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
}

#inner-wrapper,
#contact-us .contact-form,
#contact-us .our-address {
  color: #000000;
  font-size: 19px;
  line-height: 1.7em;
  font-weight: 300;
  padding: 50px;
 background: rgb(255, 255, 255);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.774),
    0 2px 10px 0 rgba(0, 0, 0, 0.829);
  margin-bottom: 100px;
  border-radius: 10px;
}
.input-group-addon {
  border-radius: 0;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: #fff;
  background: #f3aa0c;
  border: #f3aa0c;
  border-right-color: rgb(243, 170, 12);
  border-right-style: none;
  border-right-width: medium;
}

.selectRol {
  width: 20%;
  border: 2px solid rgba(0, 0, 0, 0.658);
  background-color: rgba(255, 255, 255, 0.753);
}

#rol {
  width: 100%;
}

.perfil {
  display: block;
  float: left;
  padding-right: 8%;
  color: #000000;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.errorForm{
    color:rgb(255, 0, 0);
    font-size: 20px;
}
#botonregister{
 background: linear-gradient(135deg, orange 60%, cyan)
}
body{
  background-color: #ffffff;
}
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
</style>