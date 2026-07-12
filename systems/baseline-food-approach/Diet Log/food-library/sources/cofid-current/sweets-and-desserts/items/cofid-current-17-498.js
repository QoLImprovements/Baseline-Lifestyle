/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "10 tins, 3 brands",
  "id": "cofid-current-17-498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Drinking chocolate, powder",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 79.7,
    "energy_kcal": 377.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.5,
    "magnesium_mg": 132.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 193.0,
    "potassium_mg": 495.0,
    "protein_g": 6.4,
    "salt_g": 0.57,
    "sat_fat_g": 3.41,
    "sodium_mg": 228.0,
    "sugar_g": 77.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-498",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "paa",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
