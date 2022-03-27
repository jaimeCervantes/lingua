export default function LlamaIllustration({ src, styles }) {
  return (
    <img
      src={src}
      style={{
        display: 'block',
        minWidth: '100px',
        maxWidth: '500px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '-8%',
        ...styles
      }}
    />
  );
}