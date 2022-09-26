import Style  from "./Relogio.module.scss"

export default function Relogio(){
    return(
        <>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioDivisao}>:</span>
            <span className={Style.relogioNumero}>0</span>
            <span className={Style.relogioNumero}>0</span>
        </>
    )
}