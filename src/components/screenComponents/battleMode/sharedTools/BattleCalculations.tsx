export const attack ({attacker, defender}) => {
    const attackDamage = attacker.attack + attacker.level

    const finalDamage = attackDamage * defender.protection

    return finalDamage
}

export const bandage ({receiver}) => {
    const recovery = receiver.medical + receiver.level
    return recovery
}

export const block ({receiver}) => {
    receiver.protection + 0.4
}