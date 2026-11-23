import GioiThieuView from '@/views/web/GioiThieuView';
import MGioiThieuView from '@/views/mob/MGioiThieuView';

export default function AboutScreen() {
  return (
    <>
      <div className="v-web">
        <GioiThieuView vm={{}} />
      </div>
      <div className="v-mob">
        <MGioiThieuView vm={{}} />
      </div>
    </>
  );
}
