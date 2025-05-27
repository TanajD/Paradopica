

class LiveCharacter {

    

  constructor(scene, x, y, mode, config) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    
    const { skinTint, top, bottom, eyetype, mouth, hair, accessories, name = [] } = config;

    console.log('LiveCharacter config:', config);


if (mode === 'profile') {
    const type = 'profile';

this.right_hand = scene.add.image(x + 14, y + 85, 'hand_base').setTint(skinTint);
this.torso = scene.add.image(x + 29, y + 72, 'torso_base').setTint(skinTint);
this.head = scene.add.image(x + 14, y + 10, 'head_base').setTint(skinTint);
this.left_hand = scene.add.image(x + 39, y + 85, 'hand_base').setTint(skinTint);

this.eyes = scene.add.image(x + 14, y + 1, eyetype);
this.small_pupil = scene.add.circle(x, y, 5, 0x000000);
this.big_pupil = scene.add.circle(x, y, 5, 0x000000);

this.head.setScale(0.3);
this.torso.setScale(0.3);
this.left_hand.setScale(0.3);
this.right_hand.setScale(0.3);
this.eyes.setScale(0.3);
this.small_pupil.setScale(0.7);
this.big_pupil.setScale(0.7);


// Closed eyes (hidden by default)
this.closedEyes = scene.add.image(x + 14, y + 1, 'eye_closed').setTint(skinTint);
this.closedEyes.setScale(0.3);
this.closedEyes.setVisible(false);


this.startBlinking();


} else if (mode === 'game') {
    const type = 'game';

this.right_hand = scene.add.image(x - 20, y + 27, 'hand_base').setTint(skinTint);
this.torso = scene.add.image(x, y + 25, 'torso_base').setTint(skinTint);
this.head = scene.add.image(x - 15, y - 48, 'head_base').setTint(skinTint);
this.left_feet = scene.add.image(x - 15, y + 50, 'foot_base').setTint(skinTint);
this.right_feet = scene.add.image(x + 5, y + 50, 'foot_base').setTint(skinTint);
this.left_hand = scene.add.image(x + 10, y + 27, 'hand_base').setTint(skinTint);

this.eyes = scene.add.image(x - 15, y - 58, eyetype);
this.small_pupil = scene.add.circle(x, y, 5, 0x000000);
this.big_pupil = scene.add.circle(x, y, 5, 0x000000);


this.head.setScale(0.3);
this.torso.setScale(0.3);
this.left_feet.setScale(0.3);
this.right_feet.setScale(0.3);
this.left_hand.setScale(0.3);
this.right_hand.setScale(0.3);
this.eyes.setScale(0.3);
this.small_pupil.setScale(0.7);
this.big_pupil.setScale(0.7);

} else if (mode === 'friend') {
    const type = 'friend';

this.right_hand = scene.add.image(x - 10, y + 58, 'hand_base').setTint(skinTint);
this.torso = scene.add.image(x + 5, y + 45, 'torso_base').setTint(skinTint);
this.head = scene.add.image(x - 10, y - 10, 'head_base').setTint(skinTint);
this.left_feet = scene.add.image(x - 12, y + 90, 'foot_base').setTint(skinTint);
this.right_feet = scene.add.image(x + 7, y + 90, 'foot_base').setTint(skinTint);
this.left_hand = scene.add.image(x + 15, y + 58, 'hand_base').setTint(skinTint);
this.eyes = scene.add.image(x - 9, y - 17, eyetype);
this.small_pupil = scene.add.circle(x - 27, y - 15, 5, 0x000000);
this.big_pupil = scene.add.circle(x + 5, y - 15, 5, 0x000000);
this.name = scene.add.text(x, y + 95, name, {
  fontSize: '16px',
  fill: '#000000',
  fontFamily: 'Arial',
  align: 'center'
}).setOrigin(0.5, 0.5);

this.head.setScale(0.26);
this.torso.setScale(0.26);
this.left_feet.setScale(0.26);
this.right_feet.setScale(0.26);
this.left_hand.setScale(0.26);
this.right_hand.setScale(0.26);
this.eyes.setScale(0.26);
this.small_pupil.setScale(0.60);
this.big_pupil.setScale(0.60
);

// Closed eyes (hidden by default)
this.closedEyes = scene.add.image(x -9, y - 17, 'eye_closed').setTint(skinTint);
this.closedEyes.setScale(0.26);
this.closedEyes.setVisible(false);

this.container = scene.add.container(x, y);
this.container.add([
  this.torso, this.head,
  this.left_hand, this.right_hand,
  this.left_feet, this.right_feet,
  this.eyes, this.small_pupil, this.big_pupil, this.name,
  this.closedEyes
  // mouth, hair, accessories if you add them later
]);

//this.startIdleAnimation();
//this.startBlinking();


} else if (mode === 'outfit') {
    const type = 'outfit';

this.right_hand = scene.add.image(x - 10, y + 58, 'hand_base').setTint(skinTint);
this.torso = scene.add.image(x + 5, y + 45, 'torso_base').setTint(skinTint);
this.head = scene.add.image(x - 10, y - 10, 'head_base').setTint(skinTint);
this.left_feet = scene.add.image(x - 12, y + 90, 'foot_base').setTint(skinTint);
this.right_feet = scene.add.image(x + 7, y + 90, 'foot_base').setTint(skinTint);
this.left_hand = scene.add.image(x + 15, y + 58, 'hand_base').setTint(skinTint);
this.eyes = scene.add.image(x - 9, y - 17, eyetype);
this.small_pupil = scene.add.circle(x - 5, y - 26, 5, 0x000000);
this.big_pupil = scene.add.circle(x + 15, y, 5, 0x000000);
this.name = scene.add.text(x, y + 95, name, {
  fontSize: '16px',
  fill: '#000000',
  fontFamily: 'Arial',
  align: 'center'
}).setOrigin(0.5, 0.5);

this.head.setScale(0.26);
this.torso.setScale(0.26);
this.left_feet.setScale(0.26);
this.right_feet.setScale(0.26);
this.left_hand.setScale(0.26);
this.right_hand.setScale(0.26);
this.eyes.setScale(0.26);
this.small_pupil.setScale(0.60);
this.big_pupil.setScale(0.60
);

// Closed eyes (hidden by default)
this.closedEyes = scene.add.image(x -9, y - 17, 'eye_closed').setTint(skinTint);
this.closedEyes.setScale(0.26);
this.closedEyes.setVisible(false);

this.container = scene.add.container(x, y);
this.container.add([
  this.torso, this.head,
  this.left_hand, this.right_hand,
  this.left_feet, this.right_feet,
  this.eyes, this.small_pupil, this.big_pupil, this.name,
  this.closedEyes
  // mouth, hair, accessories if you add them later
]);

} else if (mode === 'message') {


this.torso = scene.add.image(x - 20, y - 8, 'torso_base').setTint(skinTint);
this.head = scene.add.image(this.torso.x - 11, this.torso.y - 25, 'head_base').setTint(skinTint);
this.eyes = scene.add.image(this.head.x + 1, this.head.y - 4, eyetype);
this.small_pupil = scene.add.circle(this.head.x - 8.5, this.head.y - 3, 1.5, 0x000000);
this.big_pupil = scene.add.circle(this.head.x + 4, this.head.y - 3, 1.5, 0x000000);


this.head.setScale(0.13);
this.torso.setScale(0.13);

this.eyes.setScale(0.12);

this.container = scene.add.container(x, y);
this.container.add([
  this.torso, this.head,
  this.eyes, this.small_pupil, this.big_pupil
  // mouth, hair, accessories if you add them later
]);

}




 // Unique character pieces
    //this.top = scene.add.image(x, y, top);
   // this.bottom = scene.add.image(x, y + 25, bottom);
   // this.mouth = scene.add.image(x, y - 15, mouth);
   // this.hair = scene.add.image(x, y - 40, hair);

    // Optional accessories
   /* this.accessories = accessories.map(key =>
      scene.add.image(x, y, key)
    );*/

    // Store all for easy cleanup
   



    }
/*
trackEyesTo(pointer, scene) {
  if (!this.small_pupil || !this.big_pupil || !pointer || !scene) return;

  const canvas = scene.game.canvas;
  const rect = canvas.getBoundingClientRect();

  // STEP 1: Pointer position relative to canvas
  const pointerCanvasX = (pointer.x - rect.left) * (canvas.width / rect.width);
  const pointerCanvasY = (pointer.y - rect.top) * (canvas.height / rect.height);

  // STEP 2: Character container position WITHIN scroll container
  const scrollOffsetX = scene.scrollContainer?.x ?? 0;
  const scrollOffsetY = scene.scrollContainer?.y ?? 0;

  const containerGlobalX = this.container.x + scrollOffsetX;
  const containerGlobalY = this.container.y + scrollOffsetY;

  // STEP 3: Pointer position RELATIVE to character
  const relativeX = pointerCanvasX - containerGlobalX;
  const relativeY = pointerCanvasY - containerGlobalY;

  // STEP 4: Eye positions
  const leftEyeX = this.x - 27;
  const leftEyeY = this.y - 15;
  const rightEyeX = this.x + 5;
  const rightEyeY = this.y - 15;

  const movePupil = (eyeX, eyeY, pupil, limit) => {
    const dx = relativeX - eyeX;
    const dy = relativeY - eyeY;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(limit, Math.hypot(dx, dy));
    pupil.setPosition(
      eyeX + Math.cos(angle) * dist,
      eyeY + Math.sin(angle) * dist
    );
  };

  movePupil(leftEyeX, leftEyeY, this.small_pupil, 4.75);
  movePupil(rightEyeX, rightEyeY, this.big_pupil, 6.5);
}

*/






/*
trackEyesTo(pointer, scene) {
  if (!this.small_pupil || !this.big_pupil || !pointer || !scene) return;

  // Convert pointer to world coordinates using the current Phaser scene
  const world = scene.cameras.main.getWorldPoint(pointer.x - 162, pointer.y - 26);

  // Define eye centers based on your fixed eye layout from the constructor
  const leftEyeX = this.x - 27;
  const leftEyeY = this.y - 15;
  const rightEyeX = this.x + 5;
  const rightEyeY = this.y - 15;

  // Function to calculate pupil position
  const movePupil = (eyeX, eyeY, pupil, limit) => {
    const dx = world.x - eyeX;
    const dy = world.y - eyeY;
    const angle = Math.atan2(dy, dx);
    const dist = Math.min(limit, Math.hypot(dx, dy));
    const offsetX = Math.cos(angle) * dist;
    const offsetY = Math.sin(angle) * dist;
    pupil.setPosition(eyeX + offsetX, eyeY + offsetY);
  };

  movePupil(leftEyeX, leftEyeY, this.small_pupil, 4.75);
  movePupil(rightEyeX, rightEyeY, this.big_pupil, 6.5);
}*/






    startIdleAnimation() {
  // Stop old tween if it exists
  if (this.idleTweens) {
    this.idleTweens.forEach(tween => tween.stop());
  }

  this.idleTweens = [];

  const partsToMove = [
    { target: this.head, offset: 1 },
    { target: this.torso, offset: 0.5 },
    { target: this.left_hand, offset: 1 },
    { target: this.right_hand, offset: 1 },
    { target: this.hair, offset: 1 }
  ];

  partsToMove.forEach(({ target, offset }) => {
    const tween = this.scene.tweens.add({
      targets: target,
      y: `+=${offset}`,
      yoyo: true,
      duration: 800 + Math.random() * 500,
      repeat: -1,
      ease: 'sine.inOut'
    });
    this.idleTweens.push(tween);
  });
}

startBlinking() {
  const blink = () => {
    this.closedEyes.setVisible(true);

    this.scene.time.delayedCall(200, () => {
      this.closedEyes.setVisible(false);
    });

    // Schedule next blink randomly between 2–5 seconds
    this.scene.time.delayedCall(2000 + Math.random() * 10000, blink);
  };

  blink(); // start blinking loop
}


    startWalking() {
  this.walkTween = this.scene.tweens.add({
  targets: [
    this.left_feet, this.right_feet,
    this.left_hand, this.right_hand,
    this.torso, this.head, this.eyes,
    this.small_pupil, this.big_pupil
  ],
  y: '+=2',
  yoyo: true,
  duration: 200,
  repeat: -1,
  ease: 'sine.inOut'
});


}

stopWalking() {
  if (this.walkTween) {
    this.walkTween.stop();
    this.parts.forEach(p => p.y = Math.round(p.y)); // snap back to clean position
  }
}


    update(mouseX, mouseY, type) {

    

        
  const blimit = 6.5;
  const sxlimit = 4.5;
  const sylimit = 5;


  const updateSPupil = (eyeX, eyeY, pupilSprite) => {
    const dx = mouseX - eyeX;
    const dy = mouseY - eyeY;
    const angle = Math.atan2(dy, dx);
    const offsetX = Math.cos(angle) * sxlimit;
    const offsetY = Math.sin(angle) * sylimit;
    pupilSprite.setPosition(eyeX + offsetX, eyeY + offsetY);
  };

  const updateBPupil = (eyeX, eyeY, pupilSprite) => {
    const dx = mouseX - eyeX;
    const dy = mouseY - eyeY;
    const angle = Math.atan2(dy, dx);
    const offsetX = Math.cos(angle) * blimit;
    const offsetY = Math.sin(angle) * blimit;
    pupilSprite.setPosition(eyeX + offsetX, eyeY + offsetY);
  };

  // These are the eyes you defined
  updateSPupil(this.eyes.x - 20, this.eyes.y + 2, this.small_pupil);
  updateBPupil(this.eyes.x + 12, this.eyes.y + 2, this.big_pupil);



}

  destroy() {
    this.parts.forEach(sprite => sprite.destroy());
  }
}

window.LiveCharacter = LiveCharacter;

