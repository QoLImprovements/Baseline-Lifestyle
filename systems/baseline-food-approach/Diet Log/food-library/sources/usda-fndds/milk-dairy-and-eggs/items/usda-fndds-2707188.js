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
  "id": "usda-fndds-2707188",
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
      "gramsPerUnit": 74.0,
      "key": "1-large-egg",
      "kind": "unit",
      "label": "1 large egg"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-medium-egg",
      "kind": "unit",
      "label": "1 medium egg"
    },
    {
      "gramsPerUnit": 222.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-extra-large-egg",
      "kind": "unit",
      "label": "1 extra large egg"
    }
  ],
  "name": "Egg salad, made with Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 3.38,
    "energy_kcal": 172.0,
    "fat_g": 12.7,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 0.99,
    "magnesium_mg": 9.0,
    "omega3_g": 0.034,
    "phosphorus_mg": 139.0,
    "potassium_mg": 117.0,
    "protein_g": 10.0,
    "salt_g": 1.14,
    "sat_fat_g": 3.19,
    "sodium_mg": 456.0,
    "sugar_g": 3.11,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 11.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707188",
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
