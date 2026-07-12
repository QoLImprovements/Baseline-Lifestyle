/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-clove",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709932",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-clove",
      "kind": "unit",
      "label": "1 clove"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    }
  ],
  "name": "Garlic, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 28.0,
    "energy_kcal": 142.0,
    "fat_g": 0.38,
    "fibre_g": 2.7,
    "folate_ug": 2.0,
    "iron_mg": 1.69,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 399.0,
    "protein_g": 6.58,
    "salt_g": 0.62,
    "sat_fat_g": 0.088,
    "sodium_mg": 248.0,
    "sugar_g": 0.99,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709932",
  "state": "Cooked",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "cooked",
    "mustard-and-other-condiments"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
