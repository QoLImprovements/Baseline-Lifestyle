/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from raw",
  "id": "cofid-current-13-671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet potato, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 20.4,
    "energy_kcal": 84.0,
    "fat_g": 0.3,
    "fibre_g": 2.7,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 350.0,
    "protein_g": 1.1,
    "salt_g": 0.0875,
    "sat_fat_g": 0.1,
    "sodium_mg": 35.0,
    "sugar_g": 8.4,
    "vitamin_a_ug": 625.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-671",
  "state": "Steamed",
  "subcategory": "DG",
  "tags": [
    "dg",
    "potatoes-and-starchy-vegetables",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
