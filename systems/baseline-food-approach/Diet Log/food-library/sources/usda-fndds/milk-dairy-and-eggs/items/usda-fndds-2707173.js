/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707173",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    }
  ],
  "name": "Egg, yolk only, cooked, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 0.96,
    "energy_kcal": 357.0,
    "fat_g": 32.6,
    "fibre_g": 0.0,
    "folate_ug": 102.0,
    "iron_mg": 2.55,
    "magnesium_mg": 5.0,
    "omega3_g": 0.118,
    "phosphorus_mg": 364.0,
    "potassium_mg": 102.0,
    "protein_g": 15.1,
    "salt_g": 0.43,
    "sat_fat_g": 10.4,
    "sodium_mg": 172.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 6.11,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707173",
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
