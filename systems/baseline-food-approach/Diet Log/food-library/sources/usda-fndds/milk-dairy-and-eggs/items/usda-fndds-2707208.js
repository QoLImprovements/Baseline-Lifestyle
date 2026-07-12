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
  "id": "usda-fndds-2707208",
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
      "gramsPerUnit": 65.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, made with oil",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 1.4,
    "energy_kcal": 212.0,
    "fat_g": 17.4,
    "fibre_g": 0.0,
    "folate_ug": 45.0,
    "iron_mg": 1.43,
    "magnesium_mg": 13.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 222.0,
    "potassium_mg": 126.0,
    "protein_g": 12.6,
    "salt_g": 0.81,
    "sat_fat_g": 5.39,
    "sodium_mg": 324.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707208",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "milk-dairy-and-eggs",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
