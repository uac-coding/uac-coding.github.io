export const GoogleSlides = ({ url }) => (
  <div style={{ position: 'relative', paddingBottom: '58%', height: 0, overflow: 'hidden' }}>
    <iframe
      src={url}
      frameBorder="0"
      width="100%"
      // height="569"
      className='x:mt-5'
      allowFullScreen
      mozallowfullscreen="true"
      webkitallowfullscreen="true"
      style={{ position: 'absolute', top: 0, left: 0, width: '95%', height: '100%' }}
    />
  </div>
)