/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-extra-large-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707182",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-extra-large-egg",
      "kind": "unit",
      "label": "1 extra large egg"
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
      "gramsPerUnit": 74.0,
      "key": "1-egg-ns-as-to-size",
      "kind": "unit",
      "label": "1 egg, NS as to size"
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
    }
  ],
  "name": "Egg salad, made with mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 1.01,
    "energy_kcal": 257.0,
    "fat_g": 23.1,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 0.99,
    "magnesium_mg": 8.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 142.0,
    "potassium_mg": 105.0,
    "protein_g": 10.3,
    "salt_g": 0.945,
    "sat_fat_g": 4.9,
    "sodium_mg": 378.0,
    "sugar_g": 1.01,
    "vitamin_a_ug": 122.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 32.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707182",
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
