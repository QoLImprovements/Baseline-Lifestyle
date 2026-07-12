/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-oz-raw-yield-after-cooking",
  "description": "Sausages",
  "id": "usda-fndds-2706198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-2-3-4-x-2-1-8-x-1-4-1-18-of-loaf",
      "kind": "unit",
      "label": "1 slice (2-3/4\" x 2-1/8\" x 1/4\") (1/18 of loaf)"
    },
    {
      "gramsPerUnit": 17.2,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Scrapple, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 15.0,
    "energy_kcal": 227.0,
    "fat_g": 14.8,
    "fibre_g": 0.3,
    "folate_ug": 2.0,
    "iron_mg": 1.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 143.0,
    "protein_g": 8.57,
    "salt_g": 0.9625,
    "sat_fat_g": 5.03,
    "sodium_mg": 385.0,
    "sugar_g": 0.21,
    "vitamin_a_ug": 499.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706198",
  "state": "Cooked",
  "subcategory": "Sausages",
  "tags": [
    "cooked",
    "other-foods",
    "sausages"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
