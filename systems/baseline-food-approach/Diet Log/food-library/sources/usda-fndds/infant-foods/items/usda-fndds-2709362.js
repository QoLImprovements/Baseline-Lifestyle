/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    }
  ],
  "name": "Baby Toddler fruit and meat",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 16.4,
    "energy_kcal": 82.0,
    "fat_g": 0.99,
    "fibre_g": 1.8,
    "folate_ug": 12.0,
    "iron_mg": 0.48,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 36.0,
    "potassium_mg": 198.0,
    "protein_g": 2.26,
    "salt_g": 0.015,
    "sat_fat_g": 0.246,
    "sodium_mg": 6.0,
    "sugar_g": 9.06,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 25.6,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709362",
  "state": "Unspecified",
  "subcategory": "Baby food: mixtures",
  "tags": [
    "baby-food-mixtures",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
