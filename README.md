![Supported Foundry Versions](https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://github.com/wakeand/fvtt-system-rqg/releases/latest/download/system.json)
[![GitHub Release](https://img.shields.io/github/release/wakeand/fvtt-system-rqg)]()
[![Issues](https://img.shields.io/github/issues-raw/wakeand/fvtt-system-rqg?maxAge=25000)](https://github.com/wakeand/fvtt-system-rqg/issues)
![Latest Release Download Count](https://img.shields.io/github/downloads/wakeand/fvtt-system-rqg/latest/rqg.zip)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://github.com/wakeand/fvtt-module-reverseinitiativeorder/blob/master/LICENSE)

# RuneQuest Glorantha (Unofficial) system for Foundry Virtual Table Top

## Installing
Paste this into Foundry VTT Install System -> Manifest URL
https://github.com/sun-dragon-cult/fvtt-system-rqg/releases/latest/download/system.json

## Usage

Se the [Wiki](https://github.com/sun-dragon-cult/fvtt-system-rqg/wiki) for more details.

## Development

Written in typescript wih the help of the fantastic [League of Foundry Developers Foundry VTT Types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types)
After a `yarn install` to get the dependencies, do `yarn build` that will build the system into a `dist` folder. For easy development make a softlink from `foundrydata/Data/systems/rqg` to that `dist` folder.
If you want to have hotload on save you can do `yarn build:watch`. 

If you like to remove the system from foundry then remove the file system softlink.

## Project Status

Still very much work in progress. 🚧 But closing in on a release version...


## [Credits and Attributions](docs/credits.md)
