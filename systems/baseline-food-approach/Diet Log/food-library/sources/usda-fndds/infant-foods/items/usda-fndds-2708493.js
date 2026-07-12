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
  "id": "usda-fndds-2708493",
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
  "name": "Baby Toddler cereal, rice, dry",
  "nutritionPerBasis": {
    "calcium_mg": 860.0,
    "carbs_g": 83.1,
    "energy_kcal": 390.0,
    "fat_g": 2.19,
    "fibre_g": 1.3,
    "folate_ug": 247.0,
    "iron_mg": 53.0,
    "magnesium_mg": 37.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 273.0,
    "potassium_mg": 281.0,
    "protein_g": 6.65,
    "salt_g": 0.08,
    "sat_fat_g": 0.234,
    "sodium_mg": 32.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 58.3,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708493",
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
