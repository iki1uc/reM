// reM_Register.js
import { reM_State } from "./reM_State.js";

export async function reM_register() {

    const csv = await fetch("./re-zustand-modi-9-4.csv")
        .then(r => r.text())
        .then(t => t.split("\n").map(x => x.trim()).filter(Boolean));

    // Beispiel: erster Eintrag = aktueller Modus
    reM_State.mode = csv[0] || "UNDEFINED";
    reM_State.registered = true;

    return reM_State;
}
