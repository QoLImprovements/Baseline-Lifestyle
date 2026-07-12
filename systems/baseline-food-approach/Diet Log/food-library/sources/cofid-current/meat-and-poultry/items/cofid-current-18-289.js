/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "31 samples, fresh and frozen",
  "id": "cofid-current-18-289",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, dark meat, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 0.0,
    "energy_kcal": 109.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 110.0,
    "potassium_mg": 390.0,
    "protein_g": 20.9,
    "salt_g": 0.225,
    "sat_fat_g": 0.8,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.05
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-289",
  "state": "Raw",
  "subcategory": "MCA",
  "tags": [
    "mca",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
