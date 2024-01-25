window.App = () => {
    return {

        ix : -1,

        gjuha:Alpine.$persist('sq'),

        fjalite: Alpine.$persist([]),

        fjalia: Alpine.$persist(''),

        get FontSize() {
            if(this.fjalia.length > 60){
                return "text-[4.0vw]"
            }
            if(this.fjalia.length > 120){
                return "text-[3.0vw]"
            }
            if(this.fjalia.length > 180){
                return "text-[2.0vw]"
            }

            return "text-[6.0vw]"
        },

        get Fjalia() {
            if (this.fjalite.length == 0) {
                this.reload()
            }
            return this.allUppercase ? this.fjalia.toUpperCase() : this.fjalia
        },

        allUppercase: Alpine.$persist(false),

        async getfjalite() {
            const r = await fetch("/json/data."+this.gjuha+".json?r=" + Math.random())
            const j = await r.json()
            this.fjalite = j.l1
            return j.l1
        },

        get newfjalia() {
            if(this.ix == -1){
                this.ix = Math.floor(Math.random() * this.fjalite.length)
            }
            this.ix = (this.ix+1) % this.fjalite.length
            this.fjalia = this.fjalite[this.ix]
            return this.fjalia
        },

        async reload() {
            await this.getfjalite()
            this.changeFjalia()
        },

        changeFjalia() {            
            this.newfjalia
        },

        ndërroGjuhen(){
            const gjuhet = {
                "sq":"de",
                "de":"en",
                "en":"sq"
            }
            this.gjuha = gjuhet[this.gjuha]
            this.reload()
        }

    }
}