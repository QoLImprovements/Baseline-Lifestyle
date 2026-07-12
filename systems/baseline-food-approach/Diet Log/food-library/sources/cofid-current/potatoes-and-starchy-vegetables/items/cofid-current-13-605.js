/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, including white and red varieties, pre-packed and loose, based on boiled in unsalted water",
  "id": "cofid-current-13-605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potatoes, old, boiled in salted water, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 17.5,
    "energy_kcal": 74.0,
    "fat_g": 0.1,
    "fibre_g": 1.6,
    "folate_ug": 18.0,
    "iron_mg": 0.34,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 365.0,
    "protein_g": 1.8,
    "salt_g": 0.16,
    "sat_fat_g": 0.03,
    "sodium_mg": 64.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-605",
  "state": "Boiled",
  "subcategory": "DAM",
  "tags": [
    "boiled",
    "dam",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
