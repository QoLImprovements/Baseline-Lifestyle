/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169583",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "10-pieces",
      "kind": "unit",
      "label": "10 pieces"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "package-1-69-oz",
      "kind": "unit",
      "label": "package (1.69 oz)"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "box-1-48-oz",
      "kind": "unit",
      "label": "box (1.48 oz)"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, MARS SNACKFOOD US, M&M's Milk Chocolate Candies",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 71.2,
    "energy_kcal": 492.0,
    "fat_g": 21.1,
    "fibre_g": 2.8,
    "folate_ug": 8.0,
    "iron_mg": 1.11,
    "magnesium_mg": 44.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 146.0,
    "potassium_mg": 261.0,
    "protein_g": 4.33,
    "salt_g": 0.1525,
    "sat_fat_g": 13.1,
    "sodium_mg": 61.0,
    "sugar_g": 63.7,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169583",
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
