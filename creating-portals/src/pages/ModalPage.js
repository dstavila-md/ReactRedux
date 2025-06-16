import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer cursus
        ipsum porta, tincidunt nunc id, fermentum tortor. Aliquam vitae
        scelerisque ex, vel maximus libero. Suspendisse varius justo sed elit
        bibendum, ut dignissim ipsum faucibus. Ut dapibus felis velit, et
        eleifend ante rhoncus sed. Pellentesque volutpat nibh diam, vitae
        imperdiet ipsum euismod et. Fusce lacus enim, suscipit id consequat sit
        amet, pharetra vitae nisl. Nullam eget porta nulla, tempus dapibus
        turpis. Aenean et pharetra ex, vitae vestibulum ex. Sed non pharetra
        quam, ac vulputate ipsum. Quisque interdum, nisi eget consectetur
        cursus, erat ante lobortis leo, quis commodo nunc enim eget massa.
        Curabitur eleifend enim sit amet justo pretium, eu interdum mi semper.
        Nulla ut tempus purus. Praesent orci mauris, facilisis nec nunc eu,
        finibus pulvinar velit. Vivamus finibus diam vel urna vestibulum, non
        porttitor sem scelerisque. Donec felis metus, pretium in maximus eu,
        ornare at ante. Suspendisse potenti. Nullam interdum, arcu a pulvinar
        posuere, turpis urna iaculis libero, vel sollicitudin mauris augue vel
        dolor. Suspendisse varius sagittis tristique. Vivamus risus felis,
        bibendum quis eleifend id, ornare at turpis. Etiam eget tincidunt ante,
        eget vehicula nunc. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Vestibulum ornare ligula vel
        sodales consectetur. Mauris elementum, nibh sed pellentesque
        consectetur, est lectus vehicula magna, rhoncus lobortis sem eros eu
        lacus. Sed et arcu quis orci porta vestibulum et quis elit. Cras vitae
        tempus mi, sed feugiat ex. Praesent sed urna eleifend, elementum elit
        sit amet, faucibus quam. Aliquam a leo a dolor egestas eleifend nec ac
        augue. Quisque non eros tincidunt, facilisis mauris vulputate, aliquet
        nisl. Nulla facilisi. Etiam elit lorem, finibus a tortor sit amet,
        venenatis imperdiet nisl. Aliquam vulputate ante nulla, in tempor leo
        blandit lacinia. Donec mattis elit lorem, a commodo diam cursus vel.
        Vestibulum ornare, turpis a consectetur lobortis, turpis erat tempus
        lectus, a tincidunt dui arcu sodales libero. In lectus arcu, vehicula
        non nisi convallis, ornare euismod orci. Proin posuere erat vitae arcu
        tempor, nec tincidunt dolor molestie. In quis massa justo. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Sed quis tortor quam. Integer sagittis tortor eget nulla
        vestibulum, ut volutpat sapien pharetra. Sed iaculis sapien eget mauris
        blandit posuere. Aliquam sodales porttitor orci, sed semper libero
        tincidunt eu. Sed augue sapien, tincidunt ac rhoncus sed, iaculis eu
        eros. Pellentesque faucibus ante in ante finibus, sit amet sollicitudin
        erat dictum. Nunc cursus consequat sollicitudin. Donec vel risus ac
        felis vehicula pharetra a in turpis. Aenean dictum nibh a commodo
        tempor. Sed pulvinar, nunc ullamcorper scelerisque maximus, leo dolor
        vestibulum elit, eget egestas turpis ante ut orci. Nullam condimentum
        ultricies tempus. Fusce pretium suscipit mi et dictum. Nam rhoncus
        mauris dolor, id feugiat odio feugiat in. In cursus, diam vitae iaculis
        venenatis, arcu ligula pretium turpis, vitae condimentum nisl neque a
        ligula. Sed eu finibus quam. Curabitur porta fermentum magna, a vehicula
        magna sodales et. Nunc lobortis blandit pellentesque. Cras et consequat
        nisl. Cras a hendrerit ex. Integer in egestas felis. Donec fermentum
        ultricies sem, ac suscipit justo bibendum in. Donec lobortis, sem ac
        vulputate pharetra, lacus ligula condimentum magna, ac facilisis urna
        urna quis nunc. Etiam eget gravida ante, quis egestas neque. Donec
        accumsan, dolor sed interdum euismod, turpis ligula aliquet lacus, id
        egestas ligula nibh eget urna. Nulla suscipit lorem in purus dignissim,
        non tristique massa dignissim. Morbi hendrerit ligula turpis. Morbi
        dictum sem eget tortor iaculis, ut pellentesque nibh congue. Maecenas
        eget lacus rhoncus, vestibulum ex non, varius turpis. Aliquam nibh nunc,
        sodales sit amet auctor vitae, finibus non sem. Morbi et scelerisque
        massa. Nullam ultricies, libero sed posuere mollis, risus velit rutrum
        nisi, a lobortis nibh felis nec urna. Duis ac odio congue, posuere enim
        a, sagittis quam. Quisque et mauris pulvinar, tristique ligula ut,
        luctus lacus. Duis eu hendrerit diam, eget rhoncus velit. Nunc bibendum
        id lorem id volutpat. Praesent orci metus, vehicula ut dui vel, laoreet
        faucibus nibh. Cras eu sapien leo. Proin lacinia ultrices massa aliquet
        pharetra. Sed at nisi lectus. Quisque ac consectetur turpis.
      </p>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
