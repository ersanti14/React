import React from "react";

const MiBoton = () => {
    const eventBton =() => {
        alert("Ay me tocaste")
    }
    return (
        <div className="text-center bg-red-600 p-3">
            <button className="bg-slate-700 p-2 rounded-md text-white w-72 h-14" onClick={eventBton}>
                <p className="text-center text-white">Preciona Clic</p>
            </button>

        </div>
    );
}
export default MiBoton