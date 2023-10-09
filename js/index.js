


window.App = () => {
    return {
        fjalite: Alpine.$persist([]),
        allUppercase: Alpine.$persist(false),
        async getfjalite() {
            const r = await fetch("/json/data.json")
            const j = await r.json()
            this.fjalite = j.l1
            return j.l1
        }
        ,
        get fjalia() {
            if (this.fjalite.length == 0) {
                this.getfjalite()
            }
            const i = Math.floor(Math.random() * this.fjalite.length)
            const fjalia = this.fjalite[i]
            if(this.allUppercase){
                return fjalia.toUpperCase()
            }
            return fjalia
        },
        f: this.getfjalite
    }
}