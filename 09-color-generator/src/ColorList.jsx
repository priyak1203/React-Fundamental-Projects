import SingleColor from './SingleColor';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((colorItem, index) => {
        return <SingleColor key={index} color={colorItem} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
