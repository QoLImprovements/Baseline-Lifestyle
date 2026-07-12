/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "20 samples; meat, fat and skin = 0.42 of dressed carcase",
  "id": "cofid-current-18-374",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Duck, roasted, meat, fat and skin",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 0.0,
    "energy_kcal": 423.0,
    "fat_g": 38.1,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 1.7,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 220.0,
    "protein_g": 20.0,
    "salt_g": 0.2175,
    "sat_fat_g": 11.4,
    "sodium_mg": 87.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-374",
  "state": "Roasted",
  "subcategory": "MCC",
  "tags": [
    "mcc",
    "meat-and-poultry",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
