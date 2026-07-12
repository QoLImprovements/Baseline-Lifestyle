/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "6 samples",
  "id": "cofid-current-18-300",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, corn-fed, raw, light meat only",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 118.0,
    "fat_g": 2.8,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 230.0,
    "potassium_mg": 330.0,
    "protein_g": 23.0,
    "salt_g": 0.225,
    "sat_fat_g": 0.8,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-300",
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
