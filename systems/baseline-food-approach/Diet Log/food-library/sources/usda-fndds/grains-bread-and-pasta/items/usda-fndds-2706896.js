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
  "id": "usda-fndds-2706896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cheeseburger",
      "kind": "unit",
      "label": "1 cheeseburger"
    }
  ],
  "name": "Cheeseburger, on wheat bun, 1 small patty",
  "nutritionPerBasis": {
    "calcium_mg": 203.0,
    "carbs_g": 17.8,
    "energy_kcal": 292.0,
    "fat_g": 16.1,
    "fibre_g": 2.0,
    "folate_ug": 39.0,
    "iron_mg": 2.39,
    "magnesium_mg": 35.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 232.0,
    "potassium_mg": 237.0,
    "protein_g": 18.2,
    "salt_g": 1.0975,
    "sat_fat_g": 6.89,
    "sodium_mg": 439.0,
    "sugar_g": 2.38,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706896",
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
