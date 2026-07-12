/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707155",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Egg, whole, fried, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 0.91,
    "energy_kcal": 185.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 1.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 172.0,
    "potassium_mg": 124.0,
    "protein_g": 11.6,
    "salt_g": 0.62,
    "sat_fat_g": 4.48,
    "sodium_mg": 248.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 193.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 5.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707155",
  "state": "Fried",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "fried",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
