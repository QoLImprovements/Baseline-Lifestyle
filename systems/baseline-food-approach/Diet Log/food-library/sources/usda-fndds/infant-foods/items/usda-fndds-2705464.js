/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-container",
  "description": "Baby food: yogurt",
  "id": "usda-fndds-2705464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-container",
      "kind": "unit",
      "label": "1 container"
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
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    }
  ],
  "name": "Baby Toddler yogurt, plain",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 5.57,
    "energy_kcal": 78.0,
    "fat_g": 4.48,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 164.0,
    "protein_g": 3.82,
    "salt_g": 0.105,
    "sat_fat_g": 2.32,
    "sodium_mg": 42.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705464",
  "state": "Unspecified",
  "subcategory": "Baby food: yogurt",
  "tags": [
    "baby-food-yogurt",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
