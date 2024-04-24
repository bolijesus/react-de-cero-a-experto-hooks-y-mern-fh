import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle = 'La tierra explota' }) => {

    return (
        <>
            <h1>{title}</h1>
            <p>Subtitulo: {subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 'KABUM'
}