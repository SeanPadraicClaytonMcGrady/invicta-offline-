export const block = ({ attacker }) => {
  return attacker.protection + 0.4;
};

export const attack = ({ attacker, defender }) => {
  const attackDamage = attacker.physicalAttack + attacker.level;

  const finalDamage =
    attackDamage - attacker.physicalAttack * defender.protection;

  return finalDamage;
};

export const bandage = ({ attacker }) => {
  const recovery = attacker.medical + attacker.level;
  return recovery;
};
