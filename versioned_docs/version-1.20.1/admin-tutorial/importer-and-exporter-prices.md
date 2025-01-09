---
sidebar_position: 3
description: 'Learn how set up importer and exporter prices.'
tags: ['machines', 'currency', 'commands']
---

# Importer and Exporter Prices

You can set prices for importing and exporting items using the `/price` command.

## Command Syntax

The syntax for `/price` is `/price set (importer|exporter) <price> [strip_nbt]` where `<price>` is the item's import or export price and `[strip_nbt]` is whether or not to exclude the item's **nbt data** with `true` excluding the data.
When you run the command **the item** that is **in your hand** is the item that the **price** will be **given to**.
