/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burgers",
  "id": "usda-fndds-2706904",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Cheeseburger, on wheat bun, 1 large patty",
  "nutritionPerBasis": {
    "calcium_mg": 192.0,
    "carbs_g": 13.9,
    "energy_kcal": 295.0,
    "fat_g": 17.6,
    "fibre_g": 1.6,
    "folate_ug": 35.0,
    "iron_mg": 2.32,
    "magnesium_mg": 31.0,
    "omega3_g": 0.015,
    "phosphorus_mg": 234.0,
    "potassium_mg": 247.0,
    "protein_g": 19.2,
    "salt_g": 1.0925,
    "sat_fat_g": 7.6,
    "sodium_mg": 437.0,
    "sugar_g": 1.93,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706904",
  "state": "Unspecified",
  "subcategory": "Burgers",
  "tags": [
    "burgers",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
