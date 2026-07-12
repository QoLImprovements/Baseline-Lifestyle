/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-jar",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709355",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Baby Toddler fruit, with grain",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 18.0,
    "energy_kcal": 78.0,
    "fat_g": 0.41,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 0.4,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 202.0,
    "protein_g": 1.07,
    "salt_g": 0.005,
    "sat_fat_g": 0.082,
    "sodium_mg": 2.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 28.3,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709355",
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
