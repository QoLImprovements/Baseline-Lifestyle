/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Calculated from 13-509 using dry matter weights",
  "id": "cofid-current-13-584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, white, boiled in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 3.2,
    "energy_kcal": 16.0,
    "fat_g": 0.1,
    "fibre_g": 2.1,
    "folate_ug": 35.0,
    "iron_mg": 0.27,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 156.0,
    "protein_g": 0.8,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 41.21
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-584",
  "state": "Boiled",
  "subcategory": "DG",
  "tags": [
    "boiled",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
