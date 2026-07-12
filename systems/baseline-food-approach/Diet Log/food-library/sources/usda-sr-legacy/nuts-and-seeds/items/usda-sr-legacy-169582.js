/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "package-fun-size",
  "description": "Sweets",
  "id": "usda-sr-legacy-169582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "package-fun-size",
      "kind": "unit",
      "label": "package fun size"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 54.0,
      "key": "serving-1-singles-bag",
      "kind": "unit",
      "label": "serving 1 singles bag"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, M&M's Peanut Chocolate Candies",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 60.5,
    "energy_kcal": 515.0,
    "fat_g": 26.1,
    "fibre_g": 3.7,
    "folate_ug": 55.0,
    "iron_mg": 1.16,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 347.0,
    "protein_g": 9.57,
    "salt_g": 0.125,
    "sat_fat_g": 10.2,
    "sodium_mg": 50.0,
    "sugar_g": 50.8,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169582",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
