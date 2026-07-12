/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 10 brands. Deep fried 3-6 minutes",
  "id": "cofid-current-13-024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, crinkle cut, frozen, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 33.4,
    "energy_kcal": 290.0,
    "fat_g": 16.7,
    "fibre_g": 0.0,
    "folate_ug": 27.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 630.0,
    "protein_g": 3.6,
    "salt_g": 0.195,
    "sat_fat_g": 3.1,
    "sodium_mg": 78.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 4.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-024",
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
