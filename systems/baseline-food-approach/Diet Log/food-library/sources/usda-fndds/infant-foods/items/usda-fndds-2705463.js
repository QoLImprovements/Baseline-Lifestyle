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
  "id": "usda-fndds-2705463",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Baby Toddler food, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 9.08,
    "energy_kcal": 75.0,
    "fat_g": 2.15,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 0.62,
    "magnesium_mg": 14.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 48.0,
    "potassium_mg": 179.0,
    "protein_g": 4.9,
    "salt_g": 0.0675,
    "sat_fat_g": 0.601,
    "sodium_mg": 27.0,
    "sugar_g": 4.47,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705463",
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
