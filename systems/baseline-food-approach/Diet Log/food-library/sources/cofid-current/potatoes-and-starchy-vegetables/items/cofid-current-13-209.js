/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from raw",
  "id": "cofid-current-13-209",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cassava, baked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 40.1,
    "energy_kcal": 155.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.5,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 350.0,
    "protein_g": 0.7,
    "salt_g": 0.0125,
    "sat_fat_g": 0.1,
    "sodium_mg": 5.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 17.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-209",
  "state": "Baked",
  "subcategory": "DG",
  "tags": [
    "baked",
    "dg",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
