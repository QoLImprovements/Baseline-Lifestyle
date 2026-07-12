/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 354.0,
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
      "gramsPerUnit": 442.0,
      "key": "1-large-taco-salad",
      "kind": "unit",
      "label": "1 large taco salad"
    },
    {
      "gramsPerUnit": 354.0,
      "key": "1-medium-taco-salad",
      "kind": "unit",
      "label": "1 medium taco salad"
    },
    {
      "gramsPerUnit": 266.0,
      "key": "1-small-taco-salad",
      "kind": "unit",
      "label": "1 small taco salad"
    }
  ],
  "name": "Taco or tostada salad, meatless with sour cream",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 17.6,
    "energy_kcal": 167.0,
    "fat_g": 8.7,
    "fibre_g": 3.3,
    "folate_ug": 44.0,
    "iron_mg": 1.58,
    "magnesium_mg": 21.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 113.0,
    "potassium_mg": 221.0,
    "protein_g": 5.0,
    "salt_g": 0.6025,
    "sat_fat_g": 3.21,
    "sodium_mg": 241.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708513",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
