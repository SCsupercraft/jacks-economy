---
sidebar_position: 2
description: 'Change the capacity of any wallet.'
---

# Changing The Capacity Of Wallets

In **default currency mode** you can easily can the capacity of wallets using the **server config**, on the otherhand changing the capacity of wallets in **single item currency mode** is a bit more difficult and **requires a mod** that can change the stack size of items. In this tutorial we will be using [Bigger Stacks](https://www.curseforge.com/minecraft/mc-mods/bigger-stacks).

## Default Currency Mode

To change the capacity of a wallet find where the wallet's capacity is defined in the config.\
Simply change the value to what ever you want, the new capacity does not need to be in exponential notation but it must have a decimal place.

For example if you want to change the capacity of the basic wallet to $2,500 you would change `basicWalletCapacity` to `2500.0`.

## Single Item Currency Mode

### Prerequisites

In order to change the capacity of the wallet when in single item currency mode you'll need a mod that can change the stack size of items. In this tutorial we will be using [Bigger Stacks](https://www.curseforge.com/minecraft/mc-mods/bigger-stacks).

### Changing the stack size of the dollar bill

If Bigger Stacks is **not configured** this message will appear in chat.\
Do not worry about this, will we be configuring Bigger Stacks in this tutorial.

![Bigger Stacks is not configured](./bigger_stacks_not_configured.png)

In order the change the stack size of the dollar bill we need to edit `config/biggerstacks-rules.xml`.
If it does not exist create it and paste the below into it.

```xml title='biggerstacks-rules.xml' showLineNumbers
<ruleset>
    <rule stacksize="64">
        <condition>id = jackseconomy:dollar_bill</condition>
    </rule>
</ruleset>
```

If you already have a file named `biggerstacks-rules.xml` add the below into the `<ruleset>` element.

```xml
<rule stacksize="64">
    <condition>id = jackseconomy:dollar_bill</condition>
</rule>
```

Now change `stacksize` to whatever you want. Since the wallet has **15 slots**, it's capacity will be **15 times the stacksize**.
