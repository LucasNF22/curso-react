import PropTypes from 'prop-types';

export const FirstApp = ( {
  
  title, 
  subtitle,
  name

} ) => {
  

  return (
    <>
      <h3>{ title }</h3>
      <div>{ subtitle }</div>
      <div>{ name }</div>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
  title: 'No Hay Titulo',
  subtitle: 'No Hay Subtitulo',
  name: 'Lucas Fiorentino'
}