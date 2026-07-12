/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg-ns-as-to-size",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707189",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-egg-ns-as-to-size",
      "kind": "unit",
      "label": "1 egg, NS as to size"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-extra-large-egg",
      "kind": "unit",
      "label": "1 extra large egg"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-medium-egg",
      "kind": "unit",
      "label": "1 medium egg"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-large-egg",
      "kind": "unit",
      "label": "1 large egg"
    }
  ],
  "name": "Egg salad, made with light Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 2.98,
    "energy_kcal": 143.0,
    "fat_g": 9.74,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 0.99,
    "magnesium_mg": 9.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 138.0,
    "potassium_mg": 118.0,
    "protein_g": 9.98,
    "salt_g": 1.0925,
    "sat_fat_g": 2.74,
    "sodium_mg": 437.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 117.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.71,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707189",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
