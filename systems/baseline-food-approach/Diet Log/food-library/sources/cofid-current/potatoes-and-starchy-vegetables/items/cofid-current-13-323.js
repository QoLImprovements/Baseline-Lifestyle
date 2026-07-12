/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources.",
  "id": "cofid-current-13-323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plantain, green flesh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 29.4,
    "energy_kcal": 117.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.5,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 500.0,
    "protein_g": 1.1,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-323",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
