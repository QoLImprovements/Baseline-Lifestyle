/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "5 samples, 5 products, including Jordan's frusli and Alpen chewy bars",
  "id": "cofid-current-11-819",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cereal bars, with fruit and/or nuts, no chocolate, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 62.9,
    "energy_kcal": 354.0,
    "fat_g": 10.7,
    "fibre_g": 6.2,
    "folate_ug": 10.0,
    "iron_mg": 1.81,
    "magnesium_mg": 50.0,
    "omega3_g": 0.24,
    "phosphorus_mg": 177.0,
    "potassium_mg": 308.0,
    "protein_g": 5.6,
    "salt_g": 0.1625,
    "sat_fat_g": 3.85,
    "sodium_mg": 65.0,
    "sugar_g": 34.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-819",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
