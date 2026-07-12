/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "10 samples, 6 brands of beef, lamb and Lancashire hot pot. 10-32% meat, chilled and frozen",
  "id": "cofid-current-19-522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hot pot, lamb/beef with potatoes, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 10.6,
    "energy_kcal": 108.0,
    "fat_g": 4.4,
    "fibre_g": 1.9,
    "folate_ug": 25.0,
    "iron_mg": 0.8,
    "magnesium_mg": 16.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 80.0,
    "potassium_mg": 260.0,
    "protein_g": 7.2,
    "salt_g": 0.5,
    "sat_fat_g": 1.7,
    "sodium_mg": 200.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-522",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "mr",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
