/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "30 samples of a mixture of fresh, wild, farmed and frozen imported",
  "id": "cofid-current-18-388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rabbit, stewed, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 0.0,
    "energy_kcal": 114.0,
    "fat_g": 3.2,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 1.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 200.0,
    "protein_g": 21.2,
    "salt_g": 0.12,
    "sat_fat_g": 1.7,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-388",
  "state": "Unspecified",
  "subcategory": "MEC",
  "tags": [
    "meat-and-poultry",
    "mec",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
