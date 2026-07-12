/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands. Deep fried 1-4 minutes",
  "id": "cofid-current-13-026",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, fine cut, frozen, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 41.2,
    "energy_kcal": 364.0,
    "fat_g": 21.3,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 1.0,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 720.0,
    "protein_g": 4.5,
    "salt_g": 0.2425,
    "sat_fat_g": 4.0,
    "sodium_mg": 97.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 5.16,
    "vitamin_k_ug": 3.51
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-026",
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
