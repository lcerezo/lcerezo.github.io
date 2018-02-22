---
Author: Luis
Title: A story about laptops part 2
header:
  overlay_image: /assets/images/bike_blur.jpg
---
# A story about laptops part 2

After seeing the terrible, horrible, no good, very bad Macbook Pro keyboard problems first hand, I started on a journey back to Linux on a laptop as my primary machine. [See part 1 here]({% post_url 2018-02-12-A-story-about-laptops %}) This is part 2 of that story, covering receiving the laptop and installing Fedora.

# Ordering and receiving 

In our last post, I wrote about my experience with Dell ordering the "new" Dell XPS 13 Developer Edition. (9370)

It arrived to my door about a week later via Fedex, on a very snowy day. The Fedex delivery engineer was in great spirits despite the snow and cold.

Unboxing the laptop was a nice experience. Dell has put in a lot of work to make this feel very high end. The box was the same type and quality you are used to from Apple's products. 
![a nice box]({{ site.url }}/assets/images/nice_dell_box.jpg)
Booting up and finishing the installation/setup of Ubuntu was a breeze, and I liked the touch screen more than I expected. I found it quite intuitive for scrolling web and terminal, although I felt the desire to have scroll bars on the left, for those windows on the left. This is so I can scroll with my thumbs on the edges of the screen. I'm not sure if there is a location aware setting that sets the scroll bar of the window on the side that is closest to the edge of the screen, especially when snapped to the edge of the screen, and I'm also guessing it's a very narrow use case.
![ubuntu]({{ site.url }}/assets/images/laptop_ubuntu.jpg)
I started to setup my common toolset on Ubuntu, to give Ubuntu another try, but I still found it a bit fussy for me. Old dogs you know.

So I started to install Fedora 27. 

# Installation

Initial installation was a breeze, once I figured out the hot keys to get intothe *BIOS*/*UEFI* and alternate boot mode menu. (f2 and f12) I also noticed the choices of the EFI usb boot were not labeled obviously. I used the fedora media writer utility, an old EMC usb stick, (shown above) and the usb-C to usb-A adapter included with the laptop. After that, the install went without a hitch. Linux has come a long way since the days of slackware.
![fedora_install]({{ site.url }}/assets/images/install_fedora.jpg)

secure boot is enabled.
EFI boot is enabled
disk encryption is enabled.

# Things that worked out of the box

* EFI/Secureboot
* Wireless
* touchscreen *with a caveat
* hot plugging an external screen *(sort of...)

# Things that don't work yet

* touch screen (see below)
* hot un-plugging an external screen

# hardware 

The initial impression is good, I like the keyboard feel and the screen is sharp. Battery life is good, reporting 6-10 hours of life. Time will tell. The track pad is a bit fussy to my fingers, but I am used to the scrolling of the mac touchpad, so this could be muscle memory.

## that touch screen
The screen is sharp, and thanks to scaling features of the latest fedora, I can adjust scaling a few differnt ways. 

The touch screen isn't as user friendly out of the box as Ubuntu. I found the on-screen-keyboard pops up when you interact with the screen, which is annoying. There is an extension to gnome shell called ["block-caribou"](https://extensions.gnome.org/extension/1326/block-caribou/) which I'll give a try soon. (update: I installed the extension, and seems to work most of the time.)

The screen's night-shift feature creates artifacts and some odd chromatic abbertations when scrolling an when the mouse moves over high-contrast areas. It was giving me a headache, so I disabled that too. I have also adjusted the font scaling a bit, as the size was giving me focus headaches at certain distances.

## External display

I tried plugging in an external display which was the Apple 27" Thunderbolt display. To my pleasant surprise, the display worked with no fuss what-so-ever. I was afraid I would have to go back to the days in my career where I was hand writing xorgs with blending and other pixel calculations. This really just *worked*. Until I yanked the plug.

The system got sluggish and a bit wonky. lspci and lsusb hung, and firefox and other apps were not very responsive. A reboot cleared the issue. I'll research this and write about it again soon.

## Summary of first impressions

Overall this is a lovely laptop. The touch screen is nicer than I expected, and the keyboard is really good. Installing Linux on a laptop has come a long way. I was up and running (I am writing this post on the new laptop) very quickly. For an end user device, this is a far leap from the days of yore. This feels like a really good experience. 
![jekyll]({{ site.url }}/assets/images/jekyll_fedora.jpg)

# Next

## Setting up my working environment and running in the real world

In the next post of the series I'll write about what it took to get this laptop running as a good day to day machine, and start the process of locking it down suitable for a tech conference. (stop doing `setenforce 0` my peoples!)

I will also dive a bit into the hardware, and common linux on the laptop issues, power tuning, suspend, and common apps such as video conferencing. I'll also try to figure out what the IR camera is for. (NSA?)

Thanks for reading, if you have any questions, or if you have feedback of your own back to Linux laptop journey, reach out to me on the tweets.
