/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Taro leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 2.6,
    "energy_kcal": 35.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 39.0,
    "iron_mg": 2.3,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 650.0,
    "protein_g": 4.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.2,
    "sodium_mg": 3.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 1160.0,
    "vitamin_c_mg": 52.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-380",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "potatoes-and-starchy-vegetables",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
