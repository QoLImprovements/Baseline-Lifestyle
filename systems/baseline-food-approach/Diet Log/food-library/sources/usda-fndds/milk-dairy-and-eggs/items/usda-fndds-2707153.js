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
  "id": "usda-fndds-2707153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg, whole, cooked, NS as to cooking method",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 0.92,
    "energy_kcal": 176.0,
    "fat_g": 13.9,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 1.6,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 176.0,
    "potassium_mg": 126.0,
    "protein_g": 11.8,
    "salt_g": 0.4875,
    "sat_fat_g": 3.64,
    "sodium_mg": 195.0,
    "sugar_g": 0.19,
    "vitamin_a_ug": 172.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707153",
  "state": "Cooked",
  "subcategory": "Eggs and omelets",
  "tags": [
    "cooked",
    "eggs-and-omelets",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
