# 🚀 Hacking Animation - Cyber Terminal

Zamonaviy cyber-themed animatsiya dasturi Electron framework yordamida yaratilgan.

## ✨ Xususiyatlar

- 🎨 **3D Animatsiyalar** - WebGL va CSS 3D transformatsiyalar
- 🌈 **Ranglar boshqaruvi** - CSS Variables orqali oson rang o'zgartirish
- 🖥️ **Cross-platform** - Windows, macOS, Linux qo'llab-quvvatlash
- 🎯 **Stealth mode** - Task Manager va system tray dan yashirish
- 🔧 **Modular kod** - Toza va boshqariladigan kod struktura

## 🛠️ Texnologiyalar

- **Electron** - Desktop application framework
- **HTML5/CSS3** - Modern web technologies
- **JavaScript** - Interactive animations
- **CSS Variables** - Dynamic color management

## 📦 O'rnatish

### Talablar
- Node.js (v14+)
- npm yoki yarn

### O'rnatish qadamlari

```bash
# Repository ni klonlash
git clone https://github.com/your-username/hacking-animation.git
cd hacking-animation

# Dependencies o'rnatish
npm install

# Development mode da ishga tushirish
npm run dev

# Production build
npm run build
```

## 🎮 Ishlatish

### Development
```bash
npm run dev
```

### Production Build
```bash
# Windows uchun
npm run build-win

# macOS uchun  
npm run build-mac

# Linux uchun
npm run build-linux

# Barcha platformalar uchun
npm run build-all
```

## 🎨 Ranglar sozlash

CSS Variables orqali ranglarni oson o'zgartirishingiz mumkin:

```css
:root {
    --primary-color: #ff7b00;        /* Asosiy rang */
    --secondary-color: #2dd050;      /* Ikkinchi darajali rang */
    --accent-color: rgb(76, 225, 91); /* Vurgu rang */
    --border-color: #7bdec7;         /* Chegara rang */
    --text-color: #26ff00;           /* Matn rang */
    --shadow-color: rgb(40, 177, 113); /* Soy rang */
}
```

## 📁 Loyiha struktura

```
hacking-animation/
├── main.js              # Electron main process
├── package.json         # Dependencies va scripts
├── dist/               # Frontend fayllar
│   ├── index.html      # Asosiy HTML
│   ├── script.js       # JavaScript animatsiyalar
│   └── style.css       # CSS stillar va animatsiyalar
├── build/              # Build natijalari
└── README.md           # Loyiha hujjati
```

## 🔧 Sozlash

### Stealth Mode
Dastur Task Manager va system tray dan yashirish uchun:

```javascript
// main.js da stealth sozlamalari
app.commandLine.appendSwitch('disable-features', 'VizDisplayCompositor');
app.disableHardwareAcceleration();
```

### Animatsiya tezligi
CSS da animatsiya tezligini o'zgartirish:

```css
/* Animatsiya davomiyligini o'zgartirish */
-webkit-animation: animationName 2s ease-in-out infinite;
```

## 🎯 Xususiyatlar

### 3D Animatsiyalar
- **Rotatsiya** - Elementlarning aylanishi
- **Perspektiv** - 3D ko'rinish effektlari
- **Transform** - Scale, rotate, translate

### Ranglar
- **CSS Variables** - Dinamik rang boshqaruvi
- **Gradient** - Ko'p rangli gradientlar
- **Shadow** - Soy effektlari

### Performance
- **Hardware acceleration** - GPU tezlashtirish
- **Optimized animations** - Silliq animatsiyalar
- **Memory efficient** - Kam xotira ishlatish

## 🐛 Muammolarni hal qilish

### Animatsiya ishlamayapti
```bash
# Dependencies qayta o'rnatish
npm install
```

### Build xatosi
```bash
# Cache tozalash
npm run clean
npm run build
```

### Performance muammolari
- Hardware acceleration yoqilganligini tekshiring
- GPU driver yangilang
- Background dasturlarni yoping

## 📝 Changelog

### v1.0.0
- ✅ Asosiy hacking animatsiya
- ✅ CSS Variables rang boshqaruvi
- ✅ 3D transformatsiyalar
- ✅ Stealth mode
- ✅ Cross-platform qo'llab-quvvatlash

## 🤝 Hissa qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch ga push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request yarating

## 📄 Litsenziya

Bu loyiha MIT litsenziyasi ostida tarqatiladi. Batafsil ma'lumot uchun `LICENSE` faylini ko'ring.

## 👨‍💻 Muallif

**Bobomalikov Abduaziz** - [@AbduazizBobomalikovNode](https://github.com/AbduazizBobomalikovNode)

## 🙏 Minnatdorchilik

- Electron jamoasiga
- CSS animatsiya jamoasiga
- Open source hamjamiyatiga

---

⭐ Agar bu loyiha sizga foydali bo'lsa, star berishni unutmang!