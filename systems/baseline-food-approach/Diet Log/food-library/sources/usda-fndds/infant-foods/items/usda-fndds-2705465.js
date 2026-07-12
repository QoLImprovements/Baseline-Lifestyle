/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "1-tablespoon",
  "description": "Baby food: yogurt",
  "id": "usda-fndds-2705465",
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
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-container",
      "kind": "unit",
      "label": "1 container"
    }
  ],
  "name": "Baby Toddler yogurt, with fruit",
  "nutritionPerBasis": {
    "calcium_mg": 116.0,
    "carbs_g": 11.9,
    "energy_kcal": 98.0,
    "fat_g": 4.04,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.05,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 93.0,
    "potassium_mg": 155.0,
    "protein_g": 3.48,
    "salt_g": 0.1025,
    "sat_fat_g": 2.09,
    "sodium_mg": 41.0,
    "sugar_g": 8.53,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705465",
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
