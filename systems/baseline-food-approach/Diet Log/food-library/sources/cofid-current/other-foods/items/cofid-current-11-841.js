/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, assorted shapes and flavours",
  "id": "cofid-current-11-841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, Danish, retail",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 43.6,
    "energy_kcal": 446.0,
    "fat_g": 29.2,
    "fibre_g": 2.1,
    "folate_ug": 21.0,
    "iron_mg": 0.82,
    "magnesium_mg": 17.0,
    "omega3_g": 0.67,
    "phosphorus_mg": 74.0,
    "potassium_mg": 136.0,
    "protein_g": 4.9,
    "salt_g": 0.5825,
    "sat_fat_g": 11.83,
    "sodium_mg": 233.0,
    "sugar_g": 17.3,
    "vitamin_a_ug": 205.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.98,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-841",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
