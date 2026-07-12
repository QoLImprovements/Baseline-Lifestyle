/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-fillet-any-size",
  "description": "Fish",
  "id": "usda-fndds-2706276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-fillet-any-size",
      "kind": "unit",
      "label": "1 fillet, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-steak",
      "kind": "unit",
      "label": "1 steak"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    }
  ],
  "name": "Fish, pike",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 7.79,
    "energy_kcal": 172.0,
    "fat_g": 5.58,
    "fibre_g": 0.3,
    "folate_ug": 30.0,
    "iron_mg": 1.16,
    "magnesium_mg": 36.0,
    "omega3_g": 0.128,
    "phosphorus_mg": 246.0,
    "potassium_mg": 288.0,
    "protein_g": 21.5,
    "salt_g": 0.76,
    "sat_fat_g": 1.38,
    "sodium_mg": 304.0,
    "sugar_g": 0.14,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706276",
  "state": "Unspecified",
  "subcategory": "Fish",
  "tags": [
    "fish",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
