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
  "id": "usda-fndds-2708492",
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
  "name": "Baby Toddler cereal, oatmeal, dry",
  "nutritionPerBasis": {
    "calcium_mg": 1160.0,
    "carbs_g": 73.5,
    "energy_kcal": 394.0,
    "fat_g": 6.36,
    "fibre_g": 7.3,
    "folate_ug": 247.0,
    "iron_mg": 64.1,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 506.0,
    "potassium_mg": 549.0,
    "protein_g": 11.0,
    "salt_g": 0.0525,
    "sat_fat_g": 0.841,
    "sodium_mg": 21.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.3,
    "vitamin_e_mg": 12.2,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708492",
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
