import Pokemon from "./Pokemon"

export default function ModalContent () {


    
    return (
        <>
        <h4>Name of crime selected</h4>
        <p>api. on a foggy day near...</p>
        
        <fieldset>
            <legend>Which Pokemon Detective can solve this mystery?</legend>

            <div className="Pokemon-radio-option">
                <label for="pokemon1">1</label>
                <input type="radio" id="pokemon1" name="detective" value="pokemon1"
                    checked />
            </div>

            <div className="Pokemon-radio-option">
                <label for="pokemon2">2</label>
                <input type="radio" id="pokemon2" name="detective" value="pokemon2" />
            </div>

            <div className="Pokemon-radio-option">
                <label for="pokemon3">3</label>
                <input type="radio" id="pokemon3" name="detective" value="pokemon3" />
            </div>

            <div className="Pokemon-radio-option">
                <label for="pokemon4">4</label>
                <input type="radio" id="pokemon4" name="detective" value="pokemon4" />
            </div>

            <div className="Pokemon-radio-option">
                <label for="pokemon5">5</label>
                <input type="radio" id="pokemon5" name="detective" value="pokemon4" />
            </div>

            <div className="Pokemon-radio-submit-button">
                <button type="submit">Confirm Pokemon</button>
            </div>
        </fieldset>
        </>
    )
}

{/* <form>
<label>
Is going:
<input
    name="isGoing"
    type="checkbox"
    checked={this.state.isGoing}
    onChange={this.handleInputChange} />
</label>
<br />
<label>
Number of guests:
<input
    name="numberOfGuests"
    type="number"
    value={this.state.numberOfGuests}
    onChange={this.handleInputChange} />
</label>
</form> */}