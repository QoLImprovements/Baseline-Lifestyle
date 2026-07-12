/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-small-regular-fillet",
  "description": "Fish",
  "id": "usda-fndds-2706290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-small-regular-fillet",
      "kind": "unit",
      "label": "1 small/regular fillet"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-large-fillet",
      "kind": "unit",
      "label": "1 large fillet"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-steak",
      "kind": "unit",
      "label": "1 steak"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fish, salmon, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 237.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 0.44,
    "magnesium_mg": 34.0,
    "omega3_g": 2.411,
    "phosphorus_mg": 310.0,
    "potassium_mg": 460.0,
    "protein_g": 25.8,
    "salt_g": 0.4425,
    "sat_fat_g": 3.15,
    "sodium_mg": 177.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 3.49,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706290",
  "state": "Steamed",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
