/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands. Shallow fried 5-7 minutes",
  "id": "cofid-current-13-038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Potato croquettes, fried in blended oil",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 21.6,
    "energy_kcal": 214.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.9,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 360.0,
    "protein_g": 3.7,
    "salt_g": 1.05,
    "sat_fat_g": 1.7,
    "sodium_mg": 420.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 15.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-038",
  "state": "Fried",
  "subcategory": "DAR",
  "tags": [
    "dar",
    "fried",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
