/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Deep fried 6 minutes, 190C. Calculated from 13-021 and 13-489",
  "id": "cofid-current-13-595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, homemade, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 33.1,
    "energy_kcal": 197.0,
    "fat_g": 6.7,
    "fibre_g": 3.4,
    "folate_ug": 10.0,
    "iron_mg": 0.33,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 748.0,
    "protein_g": 3.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.98,
    "sodium_mg": 3.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-595",
  "state": "Fried",
  "subcategory": "DAP",
  "tags": [
    "dap",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
