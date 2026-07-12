/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, meat from dressed carcase",
  "id": "cofid-current-18-385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pigeon, meat only, roasted",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 0.0,
    "energy_kcal": 187.0,
    "fat_g": 7.9,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 7.2,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 400.0,
    "protein_g": 29.0,
    "salt_g": 0.23,
    "sat_fat_g": 0.0,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-385",
  "state": "Roasted",
  "subcategory": "MCM",
  "tags": [
    "mcm",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
