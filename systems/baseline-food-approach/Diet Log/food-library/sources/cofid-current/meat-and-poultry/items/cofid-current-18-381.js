/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Meat from dressed carcase",
  "id": "cofid-current-18-381",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Partridge, meat only, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 0.0,
    "energy_kcal": 212.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 7.7,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 410.0,
    "protein_g": 36.7,
    "salt_g": 0.25,
    "sat_fat_g": 1.9,
    "sodium_mg": 100.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-381",
  "state": "Roasted",
  "subcategory": "MCI",
  "tags": [
    "mci",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
