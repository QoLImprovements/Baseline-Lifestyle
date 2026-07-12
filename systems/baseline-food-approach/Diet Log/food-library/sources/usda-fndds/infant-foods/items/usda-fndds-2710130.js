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
  "id": "usda-fndds-2710130",
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
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
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
      "key": "1-tub",
      "kind": "unit",
      "label": "1 tub"
    }
  ],
  "name": "Baby Toddler vegetables and meat",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 11.2,
    "energy_kcal": 64.0,
    "fat_g": 1.08,
    "fibre_g": 1.8,
    "folate_ug": 18.0,
    "iron_mg": 0.95,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 50.0,
    "potassium_mg": 188.0,
    "protein_g": 2.95,
    "salt_g": 0.08,
    "sat_fat_g": 0.27,
    "sodium_mg": 32.0,
    "sugar_g": 2.81,
    "vitamin_a_ug": 202.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 14.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710130",
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
