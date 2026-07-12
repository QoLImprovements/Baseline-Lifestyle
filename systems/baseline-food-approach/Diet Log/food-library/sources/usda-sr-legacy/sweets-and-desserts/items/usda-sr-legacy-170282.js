/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-170282",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Candies, coconut bar, not chocolate covered",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 55.9,
    "energy_kcal": 481.0,
    "fat_g": 27.6,
    "fibre_g": 6.4,
    "folate_ug": 22.0,
    "iron_mg": 0.77,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 294.0,
    "protein_g": 2.13,
    "salt_g": 0.32,
    "sat_fat_g": 25.5,
    "sodium_mg": 128.0,
    "sugar_g": 36.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170282",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
