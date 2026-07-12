/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Main ribs and stalks removed",
  "id": "cofid-current-13-234",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curly kale, raw",
  "nutritionPerBasis": {
    "calcium_mg": 130.0,
    "carbs_g": 1.4,
    "energy_kcal": 33.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 120.0,
    "iron_mg": 1.7,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 450.0,
    "protein_g": 3.4,
    "salt_g": 0.1075,
    "sat_fat_g": 0.2,
    "sodium_mg": 43.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 525.0,
    "vitamin_c_mg": 110.0,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 623.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-234",
  "state": "Raw",
  "subcategory": "DG",
  "tags": [
    "dg",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
