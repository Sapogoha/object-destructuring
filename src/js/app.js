export default function showAttackOptions(options) {
  const result = [];
  for (const key of options.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = key;
    result.push({
      id,
      name,
      icon,
      description,
    });
  }
  return result;
}
