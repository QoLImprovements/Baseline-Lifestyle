/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: mixtures",
  "id": "usda-fndds-2709360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar",
      "kind": "unit",
      "label": "1 jar"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
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
    }
  ],
  "name": "Baby Toddler fruit and vegetables, with yogurt",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 11.3,
    "energy_kcal": 69.0,
    "fat_g": 1.84,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 0.23,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 178.0,
    "protein_g": 2.1,
    "salt_g": 0.065,
    "sat_fat_g": 0.917,
    "sodium_mg": 26.0,
    "sugar_g": 6.55,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709360",
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
