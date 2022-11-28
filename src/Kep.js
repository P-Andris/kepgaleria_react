import './Kep.css';

function Kep(props) {
    function kepreKattintas() {
        console.log(props.kepObj);
        props.kepreKattintasFuggveny(props.kepObj);
    }

    return (
        <div className="Kep">
            <h3>{props.kepObj.cim}</h3>
            <img src={props.kepObj.utvonal} alt={props.kepObj.cim} onClick={kepreKattintas} />
        </div>
    );
}

export default Kep;