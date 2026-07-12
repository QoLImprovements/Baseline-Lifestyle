/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands",
  "id": "cofid-old-17-291",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Black bean sauce",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 12.2,
    "energy_kcal": 93.0,
    "fat_g": 2.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 5.7,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 150.0,
    "protein_g": 7.1,
    "salt_g": 6.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 2510.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-291",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "legumes-and-pulses",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
