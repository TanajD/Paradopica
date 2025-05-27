window.outfitRenderData = [ // Pulls from list of saved outfits
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },{
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  },
  {
    name: 'Outfit 1',
    skinTint: 0xfcc89b,
    top: 'shirt_blue',
    bottom: 'pants_black',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_curly_brown'
  },
  {
    name: 'Outfit 2',
    skinTint: 0xa67b5b,
    top: 'shirt_red',
    bottom: 'pants_gray',
    eyetype: 'eye',
    mouth: 'mouth_smile',
    hair: 'hair_afro'
  }
];


class ProfileOutfitScene extends Phaser.Scene {
  constructor() {
    super('ProfileOutfitScene');
  }

  

  preload() {
    this.load.image('torso_base', '../assets/characters/base/torso_base.png');
    this.load.image('head_base', '../assets/characters/base/head_base.png');
    this.load.image('foot_base', '../assets/characters/base/foot_base.png');
    this.load.image('hand_base', '../assets/characters/base/hand_base.png');
    this.load.image('eye', '../assets/characters/base/eye_base.png');
      this.load.image('eye_closed', '../assets/characters/base/eye_base.png')
    this.load.image('shirt_blue', '../assets/characters/clothes/shirt_blue.png');
    this.load.image('shirt_red', '../assets/characters/clothes/shirt_red.png');
    this.load.image('pants_black', '../assets/characters/clothes/pants_black.png');
    this.load.image('pants_gray', '../assets/characters/clothes/pants_gray.png');
    this.load.image('hair_curly_brown', '../assets/characters/hair/hair_curly_brown.png');
    this.load.image('hair_afro', '../assets/characters/hair/hair_afro.png');
    this.load.image('mouth_smile', '../assets/characters/faces/mouth_smile.png');
  }

  create() {
    this.outfits = [];

  const scrollContainer = this.add.container(0, 0);
  this.scrollContainer = scrollContainer;

  const dataList = window.outfitRenderData || [];

  this.outfits = dataList.map((data, i) => {
    const charX = (i - 1) * 60 + 20; // space out avatars
    data.x = charX;
    data.y = 0;

    const fit = new LiveCharacter(this, charX, 32, 'outfit', data);

    // Create a transparent hit area for clicking
const hitArea = this.add.rectangle(charX, 32, 60, 120, 0x000000, 0); // width/height match avatar
fit.container.add(hitArea); // attach to container

    scrollContainer.add(fit.container); // ✅ add full character container
    
    fit.startIdleAnimation();
 
   hitArea.on('pointerover', () => {
  // Show popup preview or enlarge effect
  
  fit.container.setScale(1.1);
  
});

  hitArea.on('pointerout', () => {
   
  fit.container.setScale(1);
  
});


hitArea.setInteractive({ useHandCursor: true });
hitArea.on('pointerdown', () => {

  window.currentOutfitData = data;
refreshAvatar(window.currentOutfitData); // 🎯 live update

});


  return fit;
});


  }

  update() {

     const pointerX = this.input.activePointer.x;
const canvasWidth = this.sys.game.config.width;
const scrollSpeed = 4;
const buffer = 60;

    if (this.game.canvas.matches(':hover')) {

  

if (pointerX < buffer) {
  this.scrollContainer.x += scrollSpeed;
} else if (pointerX > canvasWidth - buffer) {
  this.scrollContainer.x -= scrollSpeed;
}

    }
  // Update eye tracking
  this.outfits.forEach(c => c.update(pointerX, this.input.activePointer.y));
    
  

  }
}

window.ProfileOutfitScene = ProfileOutfitScene;
