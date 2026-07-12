/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eggs, chicken, scrambled, with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 0.7,
    "energy_kcal": 237.0,
    "fat_g": 21.2,
    "fibre_g": 0.1,
    "folate_ug": 28.0,
    "iron_mg": 1.46,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 150.0,
    "protein_g": 11.0,
    "salt_g": 0.6325,
    "sat_fat_g": 10.82,
    "sodium_mg": 253.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 282.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-945",
  "state": "Scrambled",
  "subcategory": "CD",
  "tags": [
    "cd",
    "meat-and-poultry",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
