import React from 'react';

function Form () {
    return (
        <div>
            <h3>Nous envoyer un email</h3>
            <form>
                <label>Votre Nom :
                    <input type="text" name="name" />
                </label>
                <label>Votre email :
                    <input type="text" name="email" /> 
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}

export default Form;
