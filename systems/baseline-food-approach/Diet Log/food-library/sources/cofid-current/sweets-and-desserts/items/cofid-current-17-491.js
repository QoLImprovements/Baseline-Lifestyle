/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "6 bars, 3 brands; 36-50% cocoa solids",
  "id": "cofid-current-17-491",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate, plain",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 63.5,
    "energy_kcal": 510.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 2.3,
    "magnesium_mg": 89.0,
    "omega3_g": 0.08,
    "phosphorus_mg": 140.0,
    "potassium_mg": 300.0,
    "protein_g": 5.0,
    "salt_g": 0.015,
    "sat_fat_g": 16.8,
    "sodium_mg": 6.0,
    "sugar_g": 62.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.44,
    "vitamin_k_ug": 2.3
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-491",
  "state": "Unspecified",
  "subcategory": "SEA",
  "tags": [
    "sea",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
