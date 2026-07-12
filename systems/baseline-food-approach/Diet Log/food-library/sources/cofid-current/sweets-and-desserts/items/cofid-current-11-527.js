/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "12 samples, 6 brands. Mixture of fresh and frozen",
  "id": "cofid-current-11-527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cake, chocolate fudge",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 55.7,
    "energy_kcal": 358.0,
    "fat_g": 14.3,
    "fibre_g": 1.9,
    "folate_ug": 7.0,
    "iron_mg": 3.11,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 357.0,
    "protein_g": 5.2,
    "salt_g": 0.6625,
    "sat_fat_g": 4.57,
    "sodium_mg": 265.0,
    "sugar_g": 43.5,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-527",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
