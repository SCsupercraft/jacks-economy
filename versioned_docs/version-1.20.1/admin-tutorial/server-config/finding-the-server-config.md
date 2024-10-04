---
sidebar_position: 1
description: 'Learn where you can find the server config file.'
---

# Finding The Server Config

If you are a **modpack developer** your server config should be located at `defaultconfigs/jackseconomy-server.toml`\
If you are a **server owner** it should be located at `saves/world/serverconfig/jackseconomy-server.toml`

Your server config should look like this **by default**.\
If you can not find the config file, create a new file called `jackseconomy-server.toml` and paste the below into it.

Now you are ready to start changing the config.

```toml title='jackseconomy-server.toml' showLineNumbers
baseImporterEnergyUsage = 8
baseExporterEnergyUsage = 6
maxImporterEnergy = 50000
maxExporterEnergy = 50000
maxImporterEnergyReceive = 256
maxExporterEnergyReceive = 256
baseExporterProgressPerTick = 5.0E-4
baseImporterProgressPerTick = 0.002
maxExporterBalance = 1000000.0
maxImporterBalance = 1000000.0
maxCurrencyConverterBalance = 1000000.0
basicWalletCapacity = 1000.0
intermediateWalletCapacity = 10000.0
advancedWalletCapacity = 1000000.0
thePhatWalletCapacity = 1.0E9
mechanicalImporterProgressPerSpeed = 5.0E-5
mechanicalExporterProgressPerSpeed = 2.0E-4
mechanicalExporterStressPerRPM = 8.0
mechanicalImporterStressPerRPM = 8.0
#If an item in the Admin Shop is locked behind a game stage, it will (or won't) show what item that is
showNamesForLockedAdminShopItems = false
#If an item in the Admin Shop is locked behind a game stage, it will (or won't) show what stage that item is locked behind
showStageForLockedAdminShopItems = false
#If an item to sell in the Admin Shop is locked behind a game stage, it will (or won't) show what stage that item is locked behind
showStageForLockedSellItems = false
disableAdminShopSelling = false
oneItemCurrencyMode = false
adminShopCommandForEveryone = false
returnManifestItems = true
```
