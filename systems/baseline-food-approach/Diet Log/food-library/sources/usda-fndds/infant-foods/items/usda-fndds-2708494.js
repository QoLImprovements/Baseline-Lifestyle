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
  "id": "usda-fndds-2708494",
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
  "name": "Baby Toddler cereal, rice with fruit, dry",
  "nutritionPerBasis": {
    "calcium_mg": 818.0,
    "carbs_g": 83.4,
    "energy_kcal": 388.0,
    "fat_g": 2.17,
    "fibre_g": 1.7,
    "folate_ug": 235.0,
    "iron_mg": 50.4,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 263.0,
    "potassium_mg": 342.0,
    "protein_g": 6.51,
    "salt_g": 0.0775,
    "sat_fat_g": 0.257,
    "sodium_mg": 31.0,
    "sugar_g": 6.97,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 55.7,
    "vitamin_e_mg": 4.77,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708494",
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
