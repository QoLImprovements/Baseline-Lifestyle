/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Baby food: cereals",
  "id": "usda-fndds-2708497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.8,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Baby Toddler cereal, oatmeal with fruit, dry",
  "nutritionPerBasis": {
    "calcium_mg": 1100.0,
    "carbs_g": 74.2,
    "energy_kcal": 392.0,
    "fat_g": 6.13,
    "fibre_g": 7.4,
    "folate_ug": 235.0,
    "iron_mg": 61.0,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 484.0,
    "potassium_mg": 596.0,
    "protein_g": 10.6,
    "salt_g": 0.05,
    "sat_fat_g": 0.834,
    "sodium_mg": 20.0,
    "sugar_g": 13.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 55.7,
    "vitamin_e_mg": 11.6,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708497",
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
