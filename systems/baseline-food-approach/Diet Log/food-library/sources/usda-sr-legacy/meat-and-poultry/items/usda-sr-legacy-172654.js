/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "leg-trotter-off",
  "description": "Lamb, Veal, and Game Products",
  "id": "usda-sr-legacy-172654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1808.0,
      "key": "leg-trotter-off",
      "kind": "unit",
      "label": "leg trotter off"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Lamb, Australian, imported, fresh, leg, trotter off, bone-in, separable lean only, trimmed to 1/8\" fat, cooked, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 0.0,
    "energy_kcal": 898.0,
    "fat_g": 9.59,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.55,
    "magnesium_mg": 25.0,
    "omega3_g": 0.194,
    "phosphorus_mg": 215.0,
    "potassium_mg": 308.0,
    "protein_g": 32.1,
    "salt_g": 0.2,
    "sat_fat_g": 4.36,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172654",
  "state": "Roasted",
  "subcategory": "Lamb, Veal, and Game Products",
  "tags": [
    "lamb-veal-and-game-products",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
