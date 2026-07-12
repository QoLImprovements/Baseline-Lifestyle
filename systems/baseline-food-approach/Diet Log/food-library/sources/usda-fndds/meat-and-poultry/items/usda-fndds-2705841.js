/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-regular",
  "description": "Beef, excludes ground",
  "id": "usda-fndds-2705841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-piece-slice-any-size",
      "kind": "unit",
      "label": "1 piece/slice, any size"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-thin",
      "kind": "unit",
      "label": "1 thin"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-thick",
      "kind": "unit",
      "label": "1 thick"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Beef, steak, tenderloin",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 0.0,
    "energy_kcal": 196.0,
    "fat_g": 8.25,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 3.56,
    "magnesium_mg": 20.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 283.0,
    "potassium_mg": 387.0,
    "protein_g": 30.5,
    "salt_g": 0.915,
    "sat_fat_g": 3.27,
    "sodium_mg": 366.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705841",
  "state": "Unspecified",
  "subcategory": "Beef, excludes ground",
  "tags": [
    "beef-excludes-ground",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
