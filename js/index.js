
window.App = () => {
    return {
        fjalite: Alpine.$persist([]),
        allUppercase: Alpine.$persist(false),
        async getfjalite() {
            const r = await fetch("/json/data.json?r="+Math.random())
            const j = await r.json()
            this.fjalite = j.l1
            return j.l1
        }
        ,
        get fjalia() {
            if (this.fjalite.length == 0) {
                this.reload()
            }
            const i = Math.floor(Math.random() * this.fjalite.length)
            const fj = this.fjalite[i]
            if(this.allUppercase){
                return fj.toUpperCase()
            }
            return fj
        },
        f: this.getfjalite,
        async reload(){
            await this.getfjalite()
        },
        changeFjalia(){
            this.allUppercase = !this.allUppercase
            this.allUppercase = !this.allUppercase
        }
    }
}