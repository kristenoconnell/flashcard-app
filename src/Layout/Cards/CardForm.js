import React from "react";

function CardForm({ formData, handleChange }) { 

    return (
        <div>
            <label htmlFor="front">
                Front:
                <br />
                <textarea 
                    id="front" 
                    name="front" 
                    value={formData.front} 
                    onChange={handleChange}
                    placeholder="Front of Card"
                    rows="4"
                    style={{ width: "100% "}}
                    required
                    />
            </label>
            <br />
            <label htmlFor="back">
                Back:
                <br />
                <textarea
                    id="back"
                    name="back"
                    value={formData.back}
                    onChange={handleChange}
                    placeholder="Back of Card"
                    rows="4"
                    style={{ width: "100% "}}
                    required
                />
            </label>
        </div>
    )
}

export default CardForm;