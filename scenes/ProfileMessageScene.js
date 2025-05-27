



class ProfileMessageScene extends Phaser.Scene {
  constructor() {
    super('ProfileMessageScene');
  }

  preload() {
    const preloadImage = (key, path) => {
      if (!this.textures.exists(key)) {
        this.load.image(key, path);
      }
    };

    preloadImage('torso_base', '../assets/characters/base/torso_base.png');
    preloadImage('head_base', '../assets/characters/base/head_base.png');
    preloadImage('foot_base', '../assets/characters/base/foot_base.png');
    preloadImage('hand_base', '../assets/characters/base/hand_base.png');
    preloadImage('eye', '../assets/characters/base/eye_base.png');
    preloadImage('mouth_smile', '../assets/characters/faces/mouth_smile.png');

    const messages = window.messageData || [];
    messages.forEach(msg => {
      const a = msg.avatarData || {};
      if (a.top) preloadImage(a.top, `../assets/characters/clothes/${a.top}.png`);
      if (a.bottom) preloadImage(a.bottom, `../assets/characters/clothes/${a.bottom}.png`);
      if (a.hair) preloadImage(a.hair, `../assets/characters/hair/${a.hair}.png`);
    });
  }

  create() {
    const messages = window.messageData || [];
    const spacingY = 74;
    const avatarSize = 64;

    this.scrollContainer = this.add.container(0, 0);

    messages.forEach((msg, i) => {
      const y = i * spacingY;
      const avatarX = 32;
      const avatarY = y + avatarSize / 2;

      // Create a circular mask shape at (0,0)
      const maskGraphics = this.make.graphics({ x: 0, y: 0, add: false });
      maskGraphics.fillStyle(0xffffff);
      maskGraphics.fillCircle(32, 32, 32); // local space
      const maskKey = `msg-mask-${i}`;
      maskGraphics.generateTexture(maskKey, 64, 64);
      maskGraphics.destroy();

      // Create the mask image at correct world space
      const maskImage = this.add.image(avatarX, avatarY, maskKey).setVisible(false);
      this.scrollContainer.add(maskImage);
      const mask = maskImage.createBitmapMask();

      // Create the avatar and apply mask
      const avatar = new LiveCharacter(this, avatarX, avatarY, 'message', msg.avatarData);
      avatar.parts.forEach(part => part.setMask(mask));
      this.scrollContainer.add(avatar.container);

      // Message box
      const box = this.add.rectangle(64, y + 6, 360, 64, 0xffffff, 0.85)
        .setOrigin(0, 0)
        .setStrokeStyle(1, 0xcccccc);
      const header = this.add.text(74, y + 12, `${msg.username} • ${msg.timestamp}`, {
        fontSize: '12px',
        fontFamily: 'Arial',
        color: '#333'
      });
      const body = this.add.text(74, y + 30, msg.message, {
        fontSize: '13px',
        fontFamily: 'Arial',
        color: '#000',
        wordWrap: { width: 340 }
      });

      this.scrollContainer.add([box, header, body]);
    });
  }

  update() {
    const pointerY = this.input.activePointer.y;
    const canvasHeight = this.sys.game.config.height;
    const speed = 2;
    const buffer = 30;

    if (this.game.canvas.matches(':hover')) {
      if (pointerY < buffer) this.scrollContainer.y += speed;
      else if (pointerY > canvasHeight - buffer) this.scrollContainer.y -= speed;
    }
  }
}
window.ProfileMessageScene = ProfileMessageScene;