import React from "react";

function DeckForm({ formData, handleChange }) {

    return (
        <form>
            <label htmlFor="name">
                Name:
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    class="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    style={{ width: "auto"}}
                    required
                    />
            </label>
            <br />
            <label htmlFor="description">
                Description:
                <br />
                <textarea
                    id="description"
                    name="description"
                    class="form-control"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    style={{ width: "100%"}}
                    required
                />
            </label>
        </form>
    )

}

export default DeckForm;