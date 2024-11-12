import { nanoid } from 'nanoid';
import SingleColor from './SingleColor';

const ColorList = ({ colors }) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const id = nanoid();
        return <SingleColor key={id} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
