/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-taco-salad-ns-as-to-size",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708511",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 358.0,
      "key": "1-taco-salad-ns-as-to-size",
      "kind": "unit",
      "label": "1 taco salad, NS as to size"
    },
    {
      "gramsPerUnit": 447.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 264.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    },
    {
      "gramsPerUnit": 358.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    }
  ],
  "name": "Taco or tostada salad with meat and sour cream",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 15.1,
    "energy_kcal": 181.0,
    "fat_g": 10.4,
    "fibre_g": 2.5,
    "folate_ug": 36.0,
    "iron_mg": 1.59,
    "magnesium_mg": 19.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 118.0,
    "potassium_mg": 214.0,
    "protein_g": 6.91,
    "salt_g": 0.715,
    "sat_fat_g": 3.86,
    "sodium_mg": 286.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708511",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
