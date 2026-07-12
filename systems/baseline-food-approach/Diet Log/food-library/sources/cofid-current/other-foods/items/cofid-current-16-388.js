/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, warm-water prawns (Panaeus vannamei), frozen and chilled",
  "id": "cofid-current-16-388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prawns, king, grilled from raw",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 0.0,
    "energy_kcal": 102.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.43,
    "magnesium_mg": 37.0,
    "omega3_g": 0.14,
    "phosphorus_mg": 209.0,
    "potassium_mg": 181.0,
    "protein_g": 23.5,
    "salt_g": 0.7625,
    "sat_fat_g": 0.2,
    "sodium_mg": 305.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-388",
  "state": "Grilled",
  "subcategory": "JK",
  "tags": [
    "grilled",
    "jk",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
