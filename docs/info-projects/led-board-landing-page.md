---
appStoreId: 1602453466
playStoreId: com.chuongdever.led_board
---

# LED Board - Project Context Documentation

# landing page url: ledboard.chuongle.dev

## Project Overview

**LED Board** is a Flutter-based mobile application that allows users to create, customize, and display animated LED-style text messages. The app simulates LED display boards with customizable text, backgrounds, effects, and animations. Users can create scrolling text displays, customize visual styles, and export their creations as GIFs or videos.

**Version:** 2.4.5+85  
**Platform:** Flutter (iOS & Android)  
**SDK:** Dart 3.8.0+

---

## Core Features

### 1. Text Customization
- **Text Input**: Users can enter custom text messages
- **Font Selection**: Multiple custom fonts available including:
  - Roboto (various weights and styles)
  - Shera, OmegaCentauri, WickedQueen
  - BeerMoney, BillyMoney, Bohemian
  - Marvel, MonkeyAct, NewWaltDisney
  - RandomBoys, SilentAsia, WestWood
  - LikeEat, HelloNadhira, Madami
  - TitanDistorted, PortentousDistorted
  - Lover, Camila, Balinesia
- **Text Size**: Small, Medium, Large size options
- **Text Color**: Customizable text colors with color picker
- **Text Shadow**: Optional shadow effects for text
- **HD LED Mode**: High-definition LED rendering option

### 2. LED Display Configuration
- **LED Size**: Adjustable LED dot size (Small, Medium, Large)
- **LED Style**: Multiple LED style types available
- **Scroll Speed**: Adjustable scrolling speed for text animation
- **Scroll Type**: Different scrolling modes (scrollable/non-scrollable)
- **Horizontal Character Rotation**: Option to rotate characters horizontally

### 3. Background Options
The app supports multiple background types:

#### Static Backgrounds
- Solid color backgrounds
- 18+ predefined color templates

#### Dynamic Backgrounds
- **Gradient Backgrounds**: Animated gradient backgrounds with multiple color combinations
- **MetaBall Backgrounds**: Interactive metaball particle effects
- **Parallax Rain**: Animated rain effect backgrounds
- **Blur Particle**: Particle blur effects
- **GLSL Shader Backgrounds**: Advanced shader-based backgrounds including:
  - Warp, Wavy Stripes, Discoteq
  - Stained Lights, Invader, Foamy Water
  - Scrolling Squound Tunnel, Shape, Down Void
  - Camouflage, Wigglestrips, Scroll Dash Lines
  - Raymarches, Warp Vortex, Triangle Wobble Stairs
  - Warp Core, Drunken Holodeck, Dots on Planes
  - Halftone Dots, Grid Noise Circles
- **Image Backgrounds**: 20+ predefined background images
- **Custom Image Backgrounds**: Users can select images from camera or gallery (Premium feature)

### 4. Visual Effects
- **Strobe Effect**: Flashing/strobing effect option
- **Mirror Effect**: Mirror reflection effect
- **Shadow Effects**: Text shadow customization
- **Finish Events**: Completion effects (None, Vibrate, Flash)

### 5. Display Modes
- **Single Board Mode**: Display one LED board at a time
- **Multiple Board Mode**: Swipe between multiple saved LED boards
- **Landscape Orientation**: Automatic landscape mode for display
- **Screen Lock**: Keeps screen on during display

### 6. Export & Sharing
- **GIF Export**: Generate animated GIF files from LED displays
- **Video Export**: Create video files from LED animations
- **Screen Recording**: Built-in screen recording for content creation
- **Video Trimming**: Automatic trimming of recorded content
- **Gallery Save**: Save generated content directly to device gallery
- **Share Functionality**: Share content via native sharing

### 7. Content Management
- **Save LED Boards**: Save multiple LED board configurations
- **Duplicate Boards**: Duplicate existing boards (Premium feature)
- **Delete Boards**: Remove saved boards
- **Quick Preview**: Real-time preview while editing
- **Edit Saved Boards**: Modify existing saved configurations

### 8. Premium Features
- **Ad-Free Experience**: Remove all advertisements
- **Unlimited Saves**: No limit on saved LED boards
- **Advanced Dynamic Backgrounds**: Access to premium background effects
- **Custom Image Backgrounds**: Use personal photos as backgrounds
- **Additional Fonts**: Access to premium font collection
- **Future Features**: Access to all upcoming features

---

## Technical Stack

### Framework & Language
- **Flutter**: Cross-platform mobile framework
- **Dart**: Programming language (SDK >=3.8.0 <4.0.0)

### State Management
- **flutter_bloc**: BLoC pattern for state management
- **get_it**: Dependency injection
- **injectable**: Code generation for dependency injection

### Data Storage
- **Drift**: SQLite database (formerly Moor)
- **sqflite**: SQLite database support
- **shared_preferences**: Local key-value storage

### UI & Design
- **flutter_svg**: SVG image support
- **extended_image**: Advanced image handling
- **flutter_colorpicker**: Color selection widget
- **another_xlider**: Custom slider widgets
- **auto_size_text**: Auto-sizing text widgets
- **shimmer**: Loading shimmer effects
- **animate_gradient**: Animated gradient backgrounds
- **vitality**: Particle effects
- **parallax_rain**: Rain animation effects
- **particles_flutter**: Particle system
- **loading_animation_widget**: Loading animations

### Media & Content
- **video_player**: Video playback
- **video_trimmer**: Video editing and trimming
- **image_picker**: Image selection from camera/gallery
- **image_editor**: Image editing capabilities
- **image_gallery_saver_plus**: Save images to gallery
- **ffmpeg_kit_flutter_new**: Video/audio processing
- **flutter_screen_recording**: Screen recording functionality
- **get_thumbnail_video**: Video thumbnail generation

### Localization
- **easy_localization**: Multi-language support
- **flutter_localizations**: Flutter localization support

### Firebase Services
- **firebase_core**: Firebase initialization
- **firebase_analytics**: User analytics
- **firebase_crashlytics**: Crash reporting
- **firebase_remote_config**: Remote configuration
- **firebase_storage**: Cloud storage
- **firebase_messaging**: Push notifications

### Monetization
- **google_mobile_ads**: Google AdMob integration
- **yandex_mobileads**: Yandex Ads integration
- **gma_mediation_mintegral**: Ad mediation
- **in_app_purchase**: In-app purchases
- **purchases_flutter**: RevenueCat integration for subscriptions
- **purchases_ui_flutter**: RevenueCat UI components

### Utilities
- **dio**: HTTP client
- **uuid**: Unique ID generation
- **path_provider**: File system paths
- **permission_handler**: Runtime permissions
- **device_info_plus**: Device information
- **package_info_plus**: App package information
- **wakelock_plus**: Keep screen awake
- **vibration**: Haptic feedback
- **torch_light**: Flashlight control
- **share_plus**: Native sharing
- **rate_my_app**: App rating prompts
- **store_redirect**: Redirect to app stores
- **app_version_update**: Version update checking
- **app_tracking_transparency**: iOS tracking transparency

### Notifications
- **flutter_local_notifications**: Local notifications
- **flutter_timezone**: Timezone handling
- **flutter_foreground_task**: Foreground service support

### Other Dependencies
- **logger**: Logging utility
- **oktoast**: Toast notifications
- **flutter_slidable**: Slidable widgets
- **flutter_email_sender**: Email sending
- **visibility_detector**: Widget visibility detection
- **sprintf**: String formatting
- **equatable**: Value equality
- **json_annotation**: JSON serialization
- **envied**: Environment variable obfuscation

---

## Supported Languages

The app supports 8 languages:
1. **English** (en)
2. **Vietnamese** (vi)
3. **Chinese** (zh)
4. **French** (fr)
5. **Portuguese** (pt)
6. **Russian** (ru)
7. **Uzbek** (uz)
8. **Arabic** (ar)
9. **Spanish** (es)

---

## Platform Support

### Android
- Full feature support
- Google Play Store integration
- Firebase services
- AdMob and Yandex ads
- In-app purchases

### iOS
- Full feature support
- App Store integration
- Firebase services
- AdMob integration
- In-app purchases
- App Tracking Transparency support

---

## User Experience Features

### Onboarding & Tutorials
- Tutorial swipe view for multi-board navigation
- First-time user guidance

### Settings & Preferences
- Language selection
- App version information
- About us section
- Feedback submission
- Restore purchases
- Review app prompts

### Analytics & Tracking
- Firebase Analytics integration
- User behavior tracking
- Feature usage analytics
- Crash reporting

### Performance
- Optimized rendering for LED displays
- Efficient animation handling
- Background processing for GIF/video generation
- Memory management for large content

---

## Monetization Model

### Free Features
- Basic LED board creation
- Standard backgrounds
- Limited saved boards
- Ad-supported experience

### Premium Subscription
- One-time purchase or lifetime subscription
- Ad-free experience
- Unlimited saved boards
- Advanced backgrounds and effects
- Custom image backgrounds
- Premium fonts
- All future features

### Ad Integration
- Banner ads on home screen
- Interstitial ads at key moments
- Rewarded ads for premium features
- App open ads
- Native ads integration

---

## Key User Flows

1. **Create LED Board**
   - Enter text message
   - Customize text (font, size, color, shadow)
   - Select background type
   - Configure LED settings (size, style)
   - Set scroll speed and effects
   - Preview in real-time
   - Save configuration

2. **Display LED Board**
   - View saved boards
   - Display in landscape mode
   - Swipe between multiple boards
   - Control playback (play/pause)
   - Access toolbar for actions

3. **Export Content**
   - Generate GIF or video
   - Screen recording process
   - Preview generated content
   - Save to gallery or share

4. **Manage Content**
   - View all saved boards
   - Edit existing boards
   - Duplicate boards
   - Delete boards

---

## Visual Assets

### Shaders (GLSL Fragment Shaders)
The app includes 18+ custom shader effects for backgrounds:
- Abstract patterns
- Camouflage effects
- Discoteq animations
- Dots and planes
- Down void effects
- Drunken holodeck
- Foamy water
- Grid noise circles
- Halftone dots
- Invader patterns
- Raymarches
- Scrolling tunnels
- Shape effects
- Stained lights
- Triangle wobble stairs
- Vortex effects
- Warp core
- Warp vortex
- Wavy stripes
- Wigglestrips

### Background Images
- 20 predefined background images
- Support for custom user images

### Fonts
- 25+ custom fonts
- Multiple font families with various styles

---

## Development Environment

### Build Configuration
- **Dev Environment**: Development build configuration
- **Prod Environment**: Production build configuration
- **Build Variants**: Separate configurations for dev and prod

### Code Architecture
- **BLoC Pattern**: State management using BLoC
- **Dependency Injection**: Injectable with GetIt
- **Repository Pattern**: Data layer abstraction
- **Widget Composition**: Modular widget architecture

### Code Generation
- JSON serialization
- Dependency injection code generation
- Asset code generation
- Environment variable obfuscation

---

## Target Audience

- **Content Creators**: Create animated text content for social media
- **Event Organizers**: Display messages at events
- **Businesses**: Create promotional LED-style displays
- **Personal Users**: Fun text animations and messages
- **Social Media Users**: Create shareable animated content

---

## Unique Selling Points

1. **Comprehensive Customization**: Extensive options for text, backgrounds, and effects
2. **Professional Quality**: HD LED rendering with smooth animations
3. **Multiple Export Formats**: GIF and video export options
4. **Rich Visual Effects**: 18+ shader effects and multiple background types
5. **User-Friendly**: Intuitive interface with real-time preview
6. **Cross-Platform**: Available on both iOS and Android
7. **Offline Capable**: Works without internet connection
8. **Regular Updates**: Active development with new features

---

## App Store Information

- **App Name**: Led Board
- **Category**: Utilities / Entertainment
- **Platforms**: iOS, Android
- **Version**: 2.4.5 (Build 85)
- **Minimum Requirements**: 
  - iOS: Compatible with recent iOS versions
  - Android: Compatible with recent Android versions

---

## Future Roadmap (Based on Premium Features)

- Frame feature for LED boards
- Enhanced custom background options
- Additional font collections
- More dynamic background effects
- Advanced animation options
- Social sharing integrations
- Cloud sync capabilities

---

## Technical Highlights

- **Performance**: Optimized rendering for smooth 60fps animations
- **Memory Management**: Efficient handling of large images and videos
- **Battery Optimization**: Smart screen wake lock management
- **File Management**: Efficient storage and retrieval of saved boards
- **Video Processing**: Advanced video trimming and conversion
- **Shader Rendering**: Real-time GLSL shader compilation and execution

---

This documentation provides comprehensive context about the LED Board application for generating marketing materials, landing pages, app store descriptions, and other promotional content.

