<template>
        <div class="conversor" >
            <div class = "text-center">
                <h2> <span class="badge badge-info"> {{moedaA}} Para {{moedaB}}</span> </h2>
            </div>

            <b-input-group class="mt-3">
                <b-form-input type="text" 
                                v-model="moedaA_value"
                                v-bind:placeholder="moedaA"/>
                <b-input-group-append>
                <b-button variant="success" v-on:click="converter"  >Venda</b-button>
                <b-button variant="info" v-on:click="converter('compra')" > Compra </b-button>
                </b-input-group-append>
            </b-input-group>


            <div class = "text-center">
                <h2>  <span class="badge badge-success"> {{moedaB_value}} </span></h2>
            </div>
    </div>
</template>

<script>
export default {
	name: "Conversor",
	props: ["moedaA", "moedaB"],
	data(){
		return{
			moedaA_value : "",
			moedaB_value : 0
		}
	},
	methods:{
		converter(tipoCompra){

			console.log(tipoCompra);
			//API só retorna os valores das moedas para Real "USD-BRL" . Adicionado varificação para alterar a ordem das moedas caso a moedaA seja REAL
			let converteReal = this.moedaA == "BRL";

			let de_para = converteReal ? de_para = this.moedaB + "-" + this.moedaA 
				: de_para = this.moedaA + "-" + this.moedaB;

			let url = "https://economia.awesomeapi.com.br/all/" + de_para;

            
			console.log(url);

			let moedaConversao = converteReal?this.moedaB : this.moedaA;

			fetch(url)
				.then(res => {
					return res.json()
				})
				.then(json => {
					let cotacaoCompra = json[moedaConversao].bid;
					let cotacaoVenda = json[moedaConversao].ask;

					let cotacao = tipoCompra == "compra" ? cotacaoCompra : cotacaoVenda

					if(converteReal){
						this.moedaB_value = (parseFloat(this.moedaA_value) / cotacao ).toFixed(2)
					}else{
						this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(2)
					}
                        
				})
		}
	}
    
}
</script>

<style scoped>
    .conversor{
        padding:30px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        padding-bottom: 30px  ;
        background-color: #f1f1f1;
    }

</style>