/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Cheeseburger, on white bun, 1 medium patty",
  "nutritionPerBasis": {
    "calcium_mg": 171.0,
    "carbs_g": 18.7,
    "energy_kcal": 296.0,
    "fat_g": 16.2,
    "fibre_g": 0.6,
    "folate_ug": 47.0,
    "iron_mg": 2.53,
    "magnesium_mg": 22.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 198.0,
    "potassium_mg": 219.0,
    "protein_g": 17.9,
    "salt_g": 1.095,
    "sat_fat_g": 6.86,
    "sodium_mg": 438.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706901",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
