/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands",
  "id": "cofid-current-17-659",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chocolate spread",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 59.4,
    "energy_kcal": 575.0,
    "fat_g": 37.7,
    "fibre_g": 2.0,
    "folate_ug": 10.0,
    "iron_mg": 4.87,
    "magnesium_mg": 51.0,
    "omega3_g": 1.92,
    "phosphorus_mg": 128.0,
    "potassium_mg": 362.0,
    "protein_g": 3.3,
    "salt_g": 0.145,
    "sat_fat_g": 8.13,
    "sodium_mg": 58.0,
    "sugar_g": 59.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-659",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "sc",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
