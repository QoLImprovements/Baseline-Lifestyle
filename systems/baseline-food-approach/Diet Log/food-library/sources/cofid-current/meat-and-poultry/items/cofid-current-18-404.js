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
  "id": "cofid-current-18-404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kidney, ox, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 88.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 63.0,
    "iron_mg": 7.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 240.0,
    "potassium_mg": 240.0,
    "protein_g": 17.2,
    "salt_g": 0.425,
    "sat_fat_g": 0.8,
    "sodium_mg": 170.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 170.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-404",
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
