/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167980",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup-chips",
      "kind": "unit",
      "label": "cup chips"
    }
  ],
  "name": "Candies, confectioner's coating, butterscotch",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 67.1,
    "energy_kcal": 2250.0,
    "fat_g": 29.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.08,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 64.0,
    "protein_g": 2.2,
    "salt_g": 0.2225,
    "sat_fat_g": 24.1,
    "sodium_mg": 89.0,
    "sugar_g": 67.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167980",
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
