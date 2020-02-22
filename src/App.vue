<template>

  <div>
    <div id="cabecalho" class = "text-center">
       <div class="container" >
          <h1>Conversor de moedas - Comercial</h1>
      </div>
    </div>    

    <div id="linha" color="#f1f1f1" >   
      <div class="container" >
          <div class="row">

            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class = "list-group-item">
                      <conversor moedaA="USD" moedaB="BRL"/>
                    </li>

                    <li class = "list-group-item">
                      <conversor moedaA="CAD" moedaB="BRL"/>
                    </li>

                    <li class = "list-group-item">
                      <conversor moedaA="EUR" moedaB="BRL"/>
                    </li>

                  </ul>
                </div>
              </div>    
            </div>

            <div class="col-md">
              <div class="card">
                <div class="card-body">
                  <ul class="list-group">
                    <li class = "list-group-item">
                      <conversor moedaA="BRL" moedaB="USD"/>
                    </li>

                    <li class = "list-group-item">
                      <conversor moedaA="BRL" moedaB="CAD"/>
                    </li>
                    
                    <li class = "list-group-item">
                      <conversor moedaA="BRL" moedaB="EUR"/>
                    </li>

                  </ul>

              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>   

  </div>
</template>

<script>
import Conversor from "./components/Conversor.vue";

export default {
	name: "App",
	components: {
		Conversor
	}
}
</script>

<style>
  #cabecalho {
    margin-top: 30px;
    margin-bottom: 30px;
  },

#linha{
    padding-top: 30px;
    margin-bottom: 30px;
}

</style>
