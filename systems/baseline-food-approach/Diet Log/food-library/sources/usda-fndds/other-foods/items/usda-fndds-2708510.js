/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-medium-taco-salad",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 388.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "1-taco-salad-ns-as-to-size",
      "kind": "unit",
      "label": "1 taco salad, NS as to size"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 234.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    }
  ],
  "name": "Taco or tostada salad, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 87.0,
    "carbs_g": 19.3,
    "energy_kcal": 163.0,
    "fat_g": 7.36,
    "fibre_g": 3.7,
    "folate_ug": 50.0,
    "iron_mg": 1.8,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 114.0,
    "potassium_mg": 231.0,
    "protein_g": 5.28,
    "salt_g": 0.67,
    "sat_fat_g": 2.13,
    "sodium_mg": 268.0,
    "sugar_g": 1.84,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 11.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708510",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
