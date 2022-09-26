import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
export default function ImagePendingView() {
  return (
    <div className={css.loadwrap}>
      <Circles color="rgb(76, 76, 201)" height={100} width={100} />
    </div>
  );
}
