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
  "id": "usda-fndds-2708495",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.8,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Baby Toddler cereal, multigrain with fruit, dry",
  "nutritionPerBasis": {
    "calcium_mg": 761.0,
    "carbs_g": 80.5,
    "energy_kcal": 404.0,
    "fat_g": 6.43,
    "fibre_g": 6.9,
    "folate_ug": 159.0,
    "iron_mg": 28.6,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 320.0,
    "potassium_mg": 518.0,
    "protein_g": 6.53,
    "salt_g": 0.08,
    "sat_fat_g": 1.04,
    "sodium_mg": 32.0,
    "sugar_g": 27.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 55.7,
    "vitamin_e_mg": 4.03,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708495",
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
