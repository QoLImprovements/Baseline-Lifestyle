/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-168007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Sage Valley, Gluten Free Vanilla Sandwich Cookies",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 71.9,
    "energy_kcal": 2090.0,
    "fat_g": 22.2,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.45,
    "magnesium_mg": 17.0,
    "omega3_g": 0.773,
    "phosphorus_mg": 47.0,
    "potassium_mg": 144.0,
    "protein_g": 3.13,
    "salt_g": 0.53,
    "sat_fat_g": 5.92,
    "sodium_mg": 212.0,
    "sugar_g": 43.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168007",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
