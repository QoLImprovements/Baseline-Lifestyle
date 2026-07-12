/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706748",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-large-patty",
      "kind": "unit",
      "label": "1 large patty"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-small-patty",
      "kind": "unit",
      "label": "1 small patty"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-oz-raw-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz, raw (yield after cooking)"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-medium-patty",
      "kind": "unit",
      "label": "1 medium patty"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, ground, with egg and onion",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 1.05,
    "energy_kcal": 228.0,
    "fat_g": 14.5,
    "fibre_g": 0.1,
    "folate_ug": 13.0,
    "iron_mg": 2.12,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 174.0,
    "potassium_mg": 270.0,
    "protein_g": 21.9,
    "salt_g": 1.83,
    "sat_fat_g": 5.5,
    "sodium_mg": 732.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706748",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
