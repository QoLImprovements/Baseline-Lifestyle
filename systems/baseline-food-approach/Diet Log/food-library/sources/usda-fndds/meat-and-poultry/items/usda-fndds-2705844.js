/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-yields",
  "description": "Beef, excludes ground",
  "id": "usda-fndds-2705844",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-neckbone",
      "kind": "unit",
      "label": "1 neckbone"
    }
  ],
  "name": "Beef, neck bones",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 257.0,
    "fat_g": 16.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.18,
    "magnesium_mg": 20.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 179.0,
    "potassium_mg": 269.0,
    "protein_g": 25.9,
    "salt_g": 0.8925,
    "sat_fat_g": 6.73,
    "sodium_mg": 357.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705844",
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
