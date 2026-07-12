/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "package-cooked-yield-from-12-oz-raw-product",
  "description": "Beef Products",
  "id": "usda-sr-legacy-170198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "package-cooked-yield-from-12-oz-raw-product",
      "kind": "unit",
      "label": "package, cooked (yield from 12 oz raw product)"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "3-slices",
      "kind": "unit",
      "label": "3 slices"
    }
  ],
  "name": "Beef, cured, breakfast strips, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 1.4,
    "energy_kcal": 1880.0,
    "fat_g": 34.4,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 3.14,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 236.0,
    "potassium_mg": 412.0,
    "protein_g": 31.3,
    "salt_g": 5.625,
    "sat_fat_g": 14.4,
    "sodium_mg": 2250.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170198",
  "state": "Cooked",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "cooked",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
