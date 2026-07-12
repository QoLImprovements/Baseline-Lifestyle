/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "19 samples, meat from dressed carcase",
  "id": "cofid-current-18-489",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Duck, meat only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 0.0,
    "energy_kcal": 137.0,
    "fat_g": 6.5,
    "fibre_g": 0.0,
    "folate_ug": 25.0,
    "iron_mg": 2.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 200.0,
    "potassium_mg": 290.0,
    "protein_g": 19.7,
    "salt_g": 0.275,
    "sat_fat_g": 2.0,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-489",
  "state": "Raw",
  "subcategory": "MCC",
  "tags": [
    "mcc",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
