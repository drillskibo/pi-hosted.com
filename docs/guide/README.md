---
title: Guide
---


# Pi-Hosted Portainer Template V2

## Get Started

### App Template for Portainer

![App Template](/images/apptemplate.png)
See the list of apps included in this template [here](../apps/).

### Installation

Run `install-docker.sh`, to install docker, and add the current user to the docker usergroup.

```sh
wget -qO- https://git.io/JS96e | bash
# need to reboot/logout for changes to take effect
```

#### Pi OS Buster

On Oct 30, 2021 Pi OS bullseye was released and this is no longer needed. Older Pi OS buster releases run an old version of libseccomp that is causing problems with many containers that are preventing them from running. To fix this we need to manually install a newer version of libseccomp. However we first need to check and see if you are running an older version. To check please run sudo dpkg-query -W libseccomp.

```sh
sudo dpkg-query -W libseccomp2
```

If you are running a version less that 2.5 you will need to run the \*upgrade script.

```sh
wget -qO- https://git.io/JPXdj | bash
```

- The upgrade script is for Pi OS 32bit. Pi OS 64 beta is untested and the upgrade script wont work with it.

#### Reboot for changes to take effect

```sh
sudo reboot
```

After a reboot, run `install-portainer.sh`, to install Portainer.io

```sh
wget -qO- https://git.io/JS96L | bash
# to update portainer, run this command
wget -qO- https://git.io/JS96Y | bash
```

Click **Settings**, in the bottom-left corner, and paste the Portainer v2 json file link from below into the **"App Templates"** box.

You're done! Now just click **App Templates** and deploy applications!

### Versions

| Application | Supported OS's |
| --- | --- | 
| [Portainer v2 Arm32](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/template/portainer-v2-arm32.json) | Pi OS |
| [Portainer v2 Arm64](https://raw.githubusercontent.com/pi-hosted/pi-hosted/master/template/portainer-v2-arm64.json) | Ubuntu 64, DietPI 64 |

- Limited testing Operating Systems: Pi OS 64 Beta, DietPI 32 bit

### Aditional Documentation

You can find more tutorials and useful information in our [GitHub Docs](https://github.com/pi-hosted/pi-hosted/blob/master/docs/DocumentList.md) folder.

### Included Scripts

Install, Update, Pre-Install and extra scripts can be found in our [GitHub Tools](../tools) folder.

### Contributors

See the list of [contributors](https://github.com/pi-hosted/pi-hosted/graphs/contributors) who participated in this project.
