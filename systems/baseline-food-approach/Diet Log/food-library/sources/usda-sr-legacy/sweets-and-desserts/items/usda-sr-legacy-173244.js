/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-18-50-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-173244",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 524.0,
      "key": "package-18-50-oz",
      "kind": "unit",
      "label": "package (18.50 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, yellow, light, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 155.0,
    "carbs_g": 84.1,
    "energy_kcal": 1690.0,
    "fat_g": 5.5,
    "fibre_g": 1.3,
    "folate_ug": 76.0,
    "iron_mg": 1.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 324.0,
    "potassium_mg": 65.0,
    "protein_g": 4.7,
    "salt_g": 1.51,
    "sat_fat_g": 1.37,
    "sodium_mg": 604.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173244",
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
