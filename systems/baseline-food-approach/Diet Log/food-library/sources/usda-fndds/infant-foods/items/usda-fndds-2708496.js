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
  "id": "usda-fndds-2708496",
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
  "name": "Baby Toddler cereal, multigrain, dry",
  "nutritionPerBasis": {
    "calcium_mg": 800.0,
    "carbs_g": 80.1,
    "energy_kcal": 407.0,
    "fat_g": 6.67,
    "fibre_g": 6.7,
    "folate_ug": 167.0,
    "iron_mg": 30.0,
    "magnesium_mg": 95.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 333.0,
    "potassium_mg": 467.0,
    "protein_g": 6.67,
    "salt_g": 0.0825,
    "sat_fat_g": 1.06,
    "sodium_mg": 33.0,
    "sugar_g": 26.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.3,
    "vitamin_e_mg": 4.22,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708496",
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
