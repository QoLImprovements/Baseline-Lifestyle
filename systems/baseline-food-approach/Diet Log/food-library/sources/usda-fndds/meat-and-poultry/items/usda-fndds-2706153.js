/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-slice-any-size",
  "description": "Liver and organ meats",
  "id": "usda-fndds-2706153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Liver, beef",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 5.12,
    "energy_kcal": 174.0,
    "fat_g": 4.64,
    "fibre_g": 0.0,
    "folate_ug": 258.0,
    "iron_mg": 6.12,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 481.0,
    "potassium_mg": 348.0,
    "protein_g": 26.3,
    "salt_g": 0.96,
    "sat_fat_g": 2.51,
    "sodium_mg": 384.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7680.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706153",
  "state": "Unspecified",
  "subcategory": "Liver and organ meats",
  "tags": [
    "liver-and-organ-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
