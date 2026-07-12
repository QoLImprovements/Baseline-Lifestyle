/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-17-622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pesto, green",
  "nutritionPerBasis": {
    "calcium_mg": 209.0,
    "carbs_g": 3.9,
    "energy_kcal": 420.0,
    "fat_g": 42.5,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 1.05,
    "magnesium_mg": 44.0,
    "omega3_g": 0.17,
    "phosphorus_mg": 141.0,
    "potassium_mg": 180.0,
    "protein_g": 5.6,
    "salt_g": 2.1,
    "sat_fat_g": 6.5,
    "sodium_mg": 840.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 197.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 16.68,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-622",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "other-foods",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
