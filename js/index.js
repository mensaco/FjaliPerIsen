window.App = () => {
    return {

        ix : -1,
        fjalite: Alpine.$persist([]),

        fjalia: Alpine.$persist(''),

        get Fjalia() {
            if (this.fjalite.length == 0) {
                this.reload()
            }
            return this.allUppercase ? this.fjalia.toUpperCase() : this.fjalia
        },

        allUppercase: Alpine.$persist(false),

        async getfjalite() {
            const r = await fetch("/json/data.json?r=" + Math.random())
            const j = await r.json()
            this.fjalite = j.l1
            return j.l1
        },

        get newfjalia() {
            if(this.ix == -1){
                this.ix = Math.floor(Math.random() * this.fjalite.length)
            }
            this.ix = (this.ix+1) % this.fjalite.length
            //const i = Math.floor(Math.random() * this.fjalite.length)
            this.fjalia = this.fjalite[this.ix]
            return this.fjalia
        },

        async reload() {
            await this.getfjalite()
            this.changeFjalia()
        },

        changeFjalia() {            
            this.newfjalia
        }
    }
}