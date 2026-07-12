/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2705859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "1-oz-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, yield after cooking"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup-diced",
      "kind": "unit",
      "label": "1 cup, diced"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Beef, dried, chipped, cooked in fat",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 2.5,
    "energy_kcal": 225.0,
    "fat_g": 11.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 2.19,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 213.0,
    "protein_g": 28.1,
    "salt_g": 6.3,
    "sat_fat_g": 4.61,
    "sodium_mg": 2520.0,
    "sugar_g": 2.44,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705859",
  "state": "Dried",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "dried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
