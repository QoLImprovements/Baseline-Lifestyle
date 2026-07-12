/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Cold cuts and cured meats",
  "id": "usda-fndds-2706221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 208.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "1-can-7-5-oz",
      "kind": "unit",
      "label": "1 can (7.5 oz)"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken salad spread",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 7.41,
    "energy_kcal": 200.0,
    "fat_g": 13.5,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.61,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 183.0,
    "protein_g": 11.6,
    "salt_g": 1.6325,
    "sat_fat_g": 3.45,
    "sodium_mg": 653.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706221",
  "state": "Unspecified",
  "subcategory": "Cold cuts and cured meats",
  "tags": [
    "cold-cuts-and-cured-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
