/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: cereals",
  "id": "usda-fndds-2708498",
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
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-jar-tub",
      "kind": "unit",
      "label": "1 jar / tub"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Baby Toddler cereal, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 18.4,
    "energy_kcal": 89.0,
    "fat_g": 0.96,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 2.29,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 109.0,
    "protein_g": 1.92,
    "salt_g": 0.005,
    "sat_fat_g": 0.157,
    "sodium_mg": 2.0,
    "sugar_g": 7.82,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708498",
  "state": "Unspecified",
  "subcategory": "Baby food: cereals",
  "tags": [
    "baby-food-cereals",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
