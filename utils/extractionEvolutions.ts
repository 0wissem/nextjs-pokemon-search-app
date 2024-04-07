
// TODO Typing
export const extractEvolutions = (chain) => {
  const evolutions = [];
  function traverseChain(node) {
    evolutions.push({ name: node.species.name });

    if (node.evolves_to && node.evolves_to.length > 0) {
      node.evolves_to.forEach(child => {
        traverseChain(child);
      });
    }
  }
  if(!!chain){
    traverseChain(chain);
  }
  return evolutions;
}