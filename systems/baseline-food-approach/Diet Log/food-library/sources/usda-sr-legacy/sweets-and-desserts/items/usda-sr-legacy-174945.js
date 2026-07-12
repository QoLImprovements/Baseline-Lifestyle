/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174945",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, yellow, commercially prepared, with vanilla frosting",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 56.2,
    "energy_kcal": 391.0,
    "fat_g": 17.9,
    "fibre_g": 0.3,
    "folate_ug": 27.0,
    "iron_mg": 1.07,
    "magnesium_mg": 6.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 143.0,
    "potassium_mg": 53.0,
    "protein_g": 2.99,
    "salt_g": 0.6725,
    "sat_fat_g": 2.94,
    "sodium_mg": 269.0,
    "sugar_g": 41.8,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174945",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
