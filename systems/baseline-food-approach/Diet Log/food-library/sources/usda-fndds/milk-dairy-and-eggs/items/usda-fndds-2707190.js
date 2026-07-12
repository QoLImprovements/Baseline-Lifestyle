/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707190",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-large-egg",
      "kind": "unit",
      "label": "1 large egg"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "1-medium-egg",
      "kind": "unit",
      "label": "1 medium egg"
    }
  ],
  "name": "Egg Salad, made with any type of fat free dressing",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 4.29,
    "energy_kcal": 139.0,
    "fat_g": 8.82,
    "fibre_g": 0.4,
    "folate_ug": 34.0,
    "iron_mg": 0.95,
    "magnesium_mg": 8.0,
    "omega3_g": 0.033,
    "phosphorus_mg": 134.0,
    "potassium_mg": 109.0,
    "protein_g": 9.8,
    "salt_g": 1.05,
    "sat_fat_g": 2.67,
    "sodium_mg": 420.0,
    "sugar_g": 3.14,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707190",
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
