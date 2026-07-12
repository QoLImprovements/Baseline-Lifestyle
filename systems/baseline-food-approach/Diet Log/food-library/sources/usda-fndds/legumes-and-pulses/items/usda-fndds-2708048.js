/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cubic-inch",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708048",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-large-round-moon-cake",
      "kind": "unit",
      "label": "1 large round Moon Cake"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "1-small-square-moon-cake",
      "kind": "unit",
      "label": "1 small square Moon Cake"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-small-round-moon-cake",
      "kind": "unit",
      "label": "1 small round Moon Cake"
    },
    {
      "gramsPerUnit": 204.0,
      "key": "1-large-square-moon-cake",
      "kind": "unit",
      "label": "1 large square Moon Cake"
    }
  ],
  "name": "Pastry, made with bean or lotus seed paste filling, baked",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 68.1,
    "energy_kcal": 340.0,
    "fat_g": 4.45,
    "fibre_g": 2.7,
    "folate_ug": 82.0,
    "iron_mg": 2.56,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 125.0,
    "protein_g": 6.99,
    "salt_g": 0.2175,
    "sat_fat_g": 0.841,
    "sodium_mg": 87.0,
    "sugar_g": 36.5,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708048",
  "state": "Baked",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "baked",
    "doughnuts-sweet-rolls-pastries",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
