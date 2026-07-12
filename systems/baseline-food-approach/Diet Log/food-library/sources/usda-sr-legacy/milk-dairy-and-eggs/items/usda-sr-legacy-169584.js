/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-0-5-oz-about-1-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169584",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "serving-0-5-oz-about-1-tbsp",
      "kind": "unit",
      "label": "serving 0.5 oz, about 1 tbsp"
    }
  ],
  "name": "Baking chocolate, MARS SNACKFOOD US, M&M's Milk Chocolate Mini Baking Bits",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 68.4,
    "energy_kcal": 502.0,
    "fat_g": 23.4,
    "fibre_g": 2.7,
    "folate_ug": 0.0,
    "iron_mg": 1.23,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 4.78,
    "salt_g": 0.17,
    "sat_fat_g": 14.5,
    "sodium_mg": 68.0,
    "sugar_g": 62.5,
    "vitamin_a_ug": 224.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169584",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
