
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSKE5ep1Lg3qWw1-oYp57RnTCltCgzwOc",
    authDomain: "projeto-2-cd.firebaseapp.com",
    databaseURL: "https://projeto-2-cd.firebaseio.com",
    storageBucket: "projeto-2-cd.appspot.com",
    messagingSenderId: "111531620339"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('projeto-2-cd');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}

