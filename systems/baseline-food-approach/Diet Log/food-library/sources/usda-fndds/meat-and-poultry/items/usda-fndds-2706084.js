/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-raw-yield-after-cooking",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-2-chicken-skin-only",
      "kind": "unit",
      "label": "1/2 chicken, skin only"
    }
  ],
  "name": "Chicken skin",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 450.0,
    "fat_g": 40.3,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.5,
    "magnesium_mg": 15.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 124.0,
    "potassium_mg": 135.0,
    "protein_g": 20.2,
    "salt_g": 0.9675,
    "sat_fat_g": 11.3,
    "sodium_mg": 387.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706084",
  "state": "Unspecified",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "chicken-whole-pieces",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
