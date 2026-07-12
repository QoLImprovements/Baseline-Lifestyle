/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Average of white (13-509) and green (13-510) cabbage",
  "id": "cofid-current-13-582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cabbage, average, raw",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 4.4,
    "energy_kcal": 26.0,
    "fat_g": 0.2,
    "fibre_g": 3.5,
    "folate_ug": 65.0,
    "iron_mg": 0.45,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 258.0,
    "protein_g": 1.8,
    "salt_g": 0.0175,
    "sat_fat_g": 0.02,
    "sodium_mg": 7.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 48.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 151.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-582",
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
