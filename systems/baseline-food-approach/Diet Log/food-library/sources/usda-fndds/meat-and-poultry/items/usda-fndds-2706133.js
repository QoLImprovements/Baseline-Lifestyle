/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-cooked",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2706133",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-patty",
      "kind": "unit",
      "label": "1 patty"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Turkey, ground",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 211.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.55,
    "magnesium_mg": 29.0,
    "omega3_g": 0.031,
    "phosphorus_mg": 257.0,
    "potassium_mg": 301.0,
    "protein_g": 26.9,
    "salt_g": 1.03,
    "sat_fat_g": 2.94,
    "sodium_mg": 412.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706133",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
