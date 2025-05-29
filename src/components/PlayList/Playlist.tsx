import styles from './PlayList.module.css';
import { data
    
 } from '@/app/data';
 import Track from '../Track/Track';

export default function PlayList (){
    return(<div className={styles.content__playlist}>
  {data.map((item) => {
    return <Track key={item._id} item={item} />;
  })}
</div>
)
}



