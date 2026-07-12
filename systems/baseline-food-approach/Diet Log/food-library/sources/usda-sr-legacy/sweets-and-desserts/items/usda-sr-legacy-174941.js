/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174941",
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
    }
  ],
  "name": "Cake, shortcake, biscuit-type, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 205.0,
    "carbs_g": 48.5,
    "energy_kcal": 1450.0,
    "fat_g": 14.2,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 2.54,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 143.0,
    "potassium_mg": 106.0,
    "protein_g": 6.1,
    "salt_g": 1.265,
    "sat_fat_g": 3.77,
    "sodium_mg": 506.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174941",
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
