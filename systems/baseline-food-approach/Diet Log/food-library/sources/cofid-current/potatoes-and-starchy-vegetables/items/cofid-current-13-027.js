/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands. Deep fried 3-7 minutes",
  "id": "cofid-current-13-027",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato chips, thick cut, frozen, fried in corn oil",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 34.0,
    "energy_kcal": 234.0,
    "fat_g": 10.2,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 0.8,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 680.0,
    "protein_g": 3.6,
    "salt_g": 0.1025,
    "sat_fat_g": 1.9,
    "sodium_mg": 41.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-027",
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
