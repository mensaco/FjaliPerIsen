window.App = () => {
    return {

        fjalite: Alpine.$persist([]),

        fjalia: Alpine.$persist(''),

        get Fjalia() {
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
            if (this.fjalite.length == 0) {
                this.reload()
            }
            const i = Math.floor(Math.random() * this.fjalite.length)
            this.fjalia = this.fjalite[i]
            return this.fjalia
        },

        async reload() {
            await this.getfjalite()
            this.changeFjalia()
            this.newfjalia()
        },

        changeFjalia() {
            this.newfjalia
        }
    }
}