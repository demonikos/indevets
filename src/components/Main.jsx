import css from './Main.module.css';

export const Main = () => {
    return (
        <div className={css.Header}>
            <p>IndeVets</p>

            <p className={css.HeaderLinks}>Veterinarians</p>
            <p className={css.HeaderLinks}>Hospitals</p>
            <p className={css.HeaderLinks}>Why IndeVets?</p>
            <button>Login</button>
        </div>
    );
}