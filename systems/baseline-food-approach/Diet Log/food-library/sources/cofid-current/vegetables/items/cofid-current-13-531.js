/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "9 samples, 8 brands, double concentrate, no added salt",
  "id": "cofid-current-13-531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomato puree",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 12.9,
    "energy_kcal": 67.0,
    "fat_g": 0.2,
    "fibre_g": 4.7,
    "folate_ug": 39.0,
    "iron_mg": 1.45,
    "magnesium_mg": 57.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 94.0,
    "potassium_mg": 1257.0,
    "protein_g": 4.4,
    "salt_g": 0.1225,
    "sat_fat_g": 0.04,
    "sodium_mg": 49.0,
    "sugar_g": 12.9,
    "vitamin_a_ug": 292.0,
    "vitamin_c_mg": 43.0,
    "vitamin_e_mg": 5.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-531",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
