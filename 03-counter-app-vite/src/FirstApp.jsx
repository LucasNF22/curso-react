import PropTypes from 'prop-types';

export const FirstApp = ( {
  
  title, 
  subtitle,
  name

} ) => {
  

  return (
    <>
      <h1 data-testid="test-title" > { title } </h1>
      <h3>{ subtitle }</h3>
      <h3>{ subtitle }</h3>
      <p>{ name }</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number,
}

FirstApp.defaultProps = {
  //title: 'No Hay Titulo',
  subtitle: 'No Hay Subtitulo',
  name: 'Lucas Fiorentino'
}