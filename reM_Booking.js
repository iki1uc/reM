// reM_Booking.js
import { reM_State } from "./reM_State.js";

export function reM_isBookable() {

    // Beispiel-Regel:
    // reM ist nur buchbar, wenn Modus "ACTIVE" oder "READY"
    const allowed = ["ACTIVE", "READY"];

    reM_State.bookable = allowed.includes(reM_State.mode);

    return reM_State.bookable;
}
