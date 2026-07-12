/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Liver and organ meats",
  "id": "usda-fndds-2706162",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch-cooked",
      "kind": "unit",
      "label": "1 cubic inch, cooked"
    }
  ],
  "name": "Tripe",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 0.0,
    "energy_kcal": 89.0,
    "fat_g": 3.85,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.62,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 70.0,
    "protein_g": 12.6,
    "salt_g": 1.0625,
    "sat_fat_g": 1.35,
    "sodium_mg": 425.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706162",
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
