const areasUrl = "http://localhost:3000/areas/";

export function patchArea(updatedArea){
    fetch(areasUrl + updatedArea.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({area: updatedArea})
        // ^^^need to send a top level key because backend uses strong params
    })
}


export function postArea(newArea){
    fetch(areasUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ area: newArea })
            // ^^^need to send a top level key because backend uses strong params
    })
}

export function deleteArea(id){
    fetch(areasUrl + id, { method: "Delete" })
}