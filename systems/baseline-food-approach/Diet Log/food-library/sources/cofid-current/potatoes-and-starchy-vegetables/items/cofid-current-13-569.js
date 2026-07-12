/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "8 samples. Most unspecified vegetable oils are made from rapeseed oil",
  "id": "cofid-current-13-569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plantain, ripe, fried in rapeseed oil",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 47.5,
    "energy_kcal": 267.0,
    "fat_g": 9.2,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 0.8,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 610.0,
    "protein_g": 1.5,
    "salt_g": 0.0075,
    "sat_fat_g": 0.69,
    "sodium_mg": 3.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 10.4
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-569",
  "state": "Fried",
  "subcategory": "DG",
  "tags": [
    "dg",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
