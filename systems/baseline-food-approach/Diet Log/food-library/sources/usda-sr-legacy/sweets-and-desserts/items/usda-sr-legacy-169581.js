/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-net-weight-12-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169581",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "package-net-weight-12-oz",
      "kind": "unit",
      "label": "package (net weight, 12 oz)"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "serving-0-5-oz-about-1-tbsp",
      "kind": "unit",
      "label": "serving 0.5 oz, about 1 tbsp"
    }
  ],
  "name": "Baking chocolate, MARS SNACKFOOD US, M&M's Semisweet Chocolate Mini Baking Bits",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 66.0,
    "energy_kcal": 517.0,
    "fat_g": 26.2,
    "fibre_g": 6.7,
    "folate_ug": 0.0,
    "iron_mg": 2.91,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.44,
    "salt_g": 0.005,
    "sat_fat_g": 15.6,
    "sodium_mg": 2.0,
    "sugar_g": 53.1,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169581",
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
