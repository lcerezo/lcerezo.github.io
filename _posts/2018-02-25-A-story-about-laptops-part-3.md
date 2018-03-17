---
Author: Luis
Title: A story about laptops, part 3
header:
  overlay_image: /assets/images/bike_blur.jpg
---


## A quick update

### That screen!
#### resolutions

I'm still playing with the screen resolution. In Fedora 27, The scaling is only in whole integers, and shows you a choice of 100%, 200%, or 300% scaling. For me, 100% is too small, and 200% is too large. It's a classic goldilocks problem. luckily for me, and wonderful people of the opensource world, I'm not alone. There is a setting for gnome you can adjust to enable fractional scaling.

` gsettings set org.gnome.mutter experimental-features "['scale-monitor-framebuffer']"`

will get you:

![screen_resolution]({{ site.url }}/assets/images/screen_resolution.png)

I'm playing back and forth between 150% and 175%. This also seemed to releive some of the eyestrain and dizziness I was experiencing.

# you can't touch this, but you can touch that.

I've noticed that some windows in the UI do not respond to window movements using the touch screen. Terminal app seems to work fine, firefox and chrome do not. I suspect this has to do with wayland native apps, but this is a WAG. I'll post more as I know more.

### Battery

This battery kicks ass. On a Saturday, I was surfing, and running through the selinuxgame.org, which mainly consists of troubleshooint vagrant virt hosts. While I was not on the laptop all day non stop, I was tinkering and doing my tiki tiki from early in the morning until after the closing ceremonies. (That panda!)

### hw

I have been quite impressed with the hardware. The keyboard is great. Screen is bright, all seem to work fine, with few issues. The disk is fast. The model is
```
[lcerezo@elchupin lcerezo.github.io]$ cat /sys/class/nvme/nvme0/model
KXG50ZNV512G NVMe TOSHIBA 512GB         
[lcerezo@elchupin lcerezo.github.io]$
```

### Firmware

Firmware updates are a breeze. I got an update in the packagaes applet, and rebooted the machine. All the components appear to be supported
![dell_firmware]({{ site.url }}/assets/images/dell_firmware.png)

```
[lcerezo@elchupin lcerezo.github.io]$ sudo fwupdmgr get-devices
Intel AMT (unprovisioned)
  DeviceId:             088df415cdee883ec89563e41e6d495924250174
  Guid:                 2800f812-b7b4-2d4b-aca8-46e0ff65814c
  Summary:              Hardware and firmware technology for remote out-of-band management
  Plugin:               amt
  Flags:                internal|registered
  Vendor:               Intel Corporation
  Version:              11.8.50
  VersionBootloader:    11.8.50
  Icon:                 computer
  Created:              2018-02-26

XPS 13 9370 System Firmware
  DeviceId:             8a21cacfb0a8d2b30c5ee9290eb71db021619f8b
  Guid:                 7ceaf7a8-0611-4480-9e30-64d8de420c7c
  Plugin:               uefi
  Flags:                internal|updatable|require-ac|supported|registered|needs-reboot
  Version:              0.1.2.0
  VersionLowest:        0.1.2.0
  Icon:                 computer
  Created:              2018-02-26

Unknown Device
  DeviceId:             8de6c7959053fd5798006dcc63590d33fa5e51cb
  Guid:                 8eb8bd2e-0fca-5aba-9aa8-f341e0aa4482
  Plugin:               udev
  Flags:                internal|registered
  Vendor:               Intel Corporation
  VendorId:             PCI:0x8086
  Icon:                 audio-card
  Created:              2018-02-26

XPS 9370 Thunderbolt Controller
  DeviceId:             b05acadba2f7675e5c6a47f894b3fc332c97f998
  Guid:                 4eeb9d07-a96c-56d6-92d3-4a23ee7a6e4a
  Summary:              Unmatched performance for high-speed I/O
  Plugin:               thunderbolt
  Flags:                internal|updatable|supported|registered
  Vendor:               Dell
  VendorId:             TBT:0x00D4
  Version:              28.00
  Icon:                 computer
  Created:              2018-02-26

[lcerezo@elchupin lcerezo.github.io]$
```

### suspend
Suspend has historically been a problem with linux. This one just works, and works well.


## Next

I'm keeping this laptop. I've been very happy with it. so much so, I put a sticker on it.
![fedora_sticker]({{ site.url }}/assets/images/fedora_sticker.jpg)

## PS

Go to [selinuxgame.org](http://selinuxgame.org). A few people spent time making learning selinux fun. Give them a shout out ([bmbouter](https://twitter.com/bmbouter) & ([dkliban](https://twitter.com/dkliban)) and get your name on the [Leaderboard](http://selinuxgame.org/leaderboard/). 
