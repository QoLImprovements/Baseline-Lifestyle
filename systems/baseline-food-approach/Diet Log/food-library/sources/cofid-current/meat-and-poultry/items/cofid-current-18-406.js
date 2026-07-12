/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "12 samples",
  "id": "cofid-current-18-406",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kidney, pig, raw",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 86.0,
    "fat_g": 2.7,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 6.4,
    "magnesium_mg": 17.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 250.0,
    "potassium_mg": 220.0,
    "protein_g": 15.5,
    "salt_g": 0.5,
    "sat_fat_g": 0.9,
    "sodium_mg": 200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-406",
  "state": "Raw",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
