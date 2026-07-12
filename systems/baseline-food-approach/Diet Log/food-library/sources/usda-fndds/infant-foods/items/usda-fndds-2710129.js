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
  "id": "usda-fndds-2710129",
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
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
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
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    }
  ],
  "name": "Baby Toddler vegetables, with grain",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 12.0,
    "energy_kcal": 58.0,
    "fat_g": 0.5,
    "fibre_g": 1.9,
    "folate_ug": 20.0,
    "iron_mg": 0.89,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 191.0,
    "protein_g": 1.84,
    "salt_g": 0.0775,
    "sat_fat_g": 0.108,
    "sodium_mg": 31.0,
    "sugar_g": 3.1,
    "vitamin_a_ug": 225.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 16.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710129",
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
