window.currentOutfitData = {
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  }


class ProfileAvatarScene extends Phaser.Scene {
  constructor() {
    super('ProfileAvatarScene');
  }

  

  preload() {
  // Base character parts (grayscale)
  this.load.image('torso_base', '../assets/characters/base/torso_base.png');
  this.load.image('head_base', '../assets/characters/base/head_base.png');
  this.load.image('foot_base', '../assets/characters/base/foot_base.png');
  this.load.image('hand_base', '../assets/characters/base/hand_base.png');

  // Eye components
  this.load.image('eye', '../assets/characters/base/eye_base.png');
  this.load.image('eye_closed', '../assets/characters/base/eye_base.png')

  // Optional: placeholder for top, bottom, hair, mouth
  this.load.image('shirt_blue', '../assets/characters/clothes/shirt_blue.png');
  this.load.image('pants_black', '../assets/characters/clothes/pants_black.png');
  this.load.image('hair_curly_brown', '../assets/characters/hair/hair_curly_brown.png');
  this.load.image('mouth_smile', '../assets/characters/faces/mouth_smile.png');
}

  create() {
  const playerData = window.currentOutfitData || {
    skinTint: 0xffcc99,
    top: 'shirt_blue' || null,
    bottom: 'pants_black' || null,
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown',
    accessories: []
  };

  this.livePlayer = new LiveCharacter(this, 64, 64, 'profile', playerData);
}


  update() {
this.livePlayer.update(this.input.activePointer.x, this.input.activePointer.y);

}

}

window.ProfileAvatarScene = ProfileAvatarScene;
