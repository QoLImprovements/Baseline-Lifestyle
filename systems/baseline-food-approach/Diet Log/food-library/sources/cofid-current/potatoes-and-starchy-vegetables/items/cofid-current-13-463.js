/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Yellow variety",
  "id": "cofid-current-13-463",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sweet potato, raw, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 21.3,
    "energy_kcal": 87.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.7,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 370.0,
    "protein_g": 1.2,
    "salt_g": 0.1,
    "sat_fat_g": 0.1,
    "sodium_mg": 40.0,
    "sugar_g": 5.7,
    "vitamin_a_ug": 655.0,
    "vitamin_c_mg": 23.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-463",
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
