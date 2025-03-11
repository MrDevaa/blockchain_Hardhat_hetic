# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
1. Quelle structure de données est utilisée pour stocker les transactions dans un bloc ?
- Un arbre de Merkle

2. Quelle est la différence entre private, internal, public et external pour une fonction en Solidity
- private signifie que la fonction est accessible uniquement dans le contrat où elle est définie
- internal permet d’appeler la fonction uniquement depuis le contrat parent et ses contrats enfants
- external peut être appelée uniquement depuis l’extérieur du contrat et non en interne

3. Dans Solidity, quel type de variable stocke une adresse Ethereum ?
- address

4. Quelle est la meilleure façon de stocker un nombre qui ne sera jamais négatif en Solidity ?
- uint256

5. Qu'est-ce qu'une blockchain ?
- Un registre décentralisé et immuable

6. Quelle est la différence entre storage et memory en Solidity ?
- storage est utilisé pour stocker des données de manière permanente
- memory est utilisé pour stocker temporairement des variables

7. Quel langage est principalement utilisé pour programmer des smart contracts sur Ethereum ?
- Solidity

8. Dans Proof of Stake (PoS), qui valide les transactions ?
- Les validateurs qui détiennent des tokens en staking

9. Que se passe-t-il si un smart contract exécute une transaction qui dépasse son gas limit ?
- Il est annulé et revert

10. Quel avantage présente PoS par rapport à PoW ?
- Moind fr consommation énergetique
- Nécessite moins d'équipement matériel

11. 🔥 Question Bonus: À quoi sert le mot-clé payable en Solidity ?
- Il permet à une fonction de recevoir de l’Ether
- Il est obligatoire pour qu’une fonction puisse recevoir de l’Ether

12. À quoi sert un modifier en Solidity ?
- Ajouter des vérifications ou conditions avant l'exécution d’une fonction

13. Que se passe-t-il si deux blocs sont minés en même temps ?
- La chaîne la plus longue sera adoptée par le réseau

14. Quel est le rôle du gas sur Ethereum ?
- Empêcher les attaques en rendant l'exécution coûteuse
- Rémunérer les mineurs/validateurs

15. Que permet l’héritage en Solidity ?
- Réutiliser les fonctionnalités d’un contrat parent dans un contrat enfant

16. Que signifie "Proof of Work" (PoW) ?
- Un mécanisme où les mineurs résolvent des calculs complexes
- Un protocole de consensus utilisé dans Bitcoin

17. Pourquoi utiliser require() dans un smart contract Solidity ?
- Pour valider une condition avant d’exécuter du code
