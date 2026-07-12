/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 9 brands",
  "id": "cofid-current-13-598",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato powder, instant, raw",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 74.9,
    "energy_kcal": 320.0,
    "fat_g": 0.6,
    "fibre_g": 7.7,
    "folate_ug": 13.0,
    "iron_mg": 2.2,
    "magnesium_mg": 66.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 1430.0,
    "protein_g": 8.4,
    "salt_g": 1.125,
    "sat_fat_g": 0.1,
    "sodium_mg": 450.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 130.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-598",
  "state": "Raw",
  "subcategory": "DAR",
  "tags": [
    "dar",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
