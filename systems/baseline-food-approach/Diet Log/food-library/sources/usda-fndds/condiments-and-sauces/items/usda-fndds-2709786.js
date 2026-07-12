/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709786",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-clove",
      "kind": "unit",
      "label": "1 clove"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    }
  ],
  "name": "Garlic, raw",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 28.2,
    "energy_kcal": 143.0,
    "fat_g": 0.38,
    "fibre_g": 2.7,
    "folate_ug": 3.0,
    "iron_mg": 1.7,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 401.0,
    "protein_g": 6.62,
    "salt_g": 0.0425,
    "sat_fat_g": 0.089,
    "sodium_mg": 17.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709786",
  "state": "Raw",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "mustard-and-other-condiments",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
