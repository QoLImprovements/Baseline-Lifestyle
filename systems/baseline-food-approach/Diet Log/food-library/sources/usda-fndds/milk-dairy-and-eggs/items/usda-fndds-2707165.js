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
  "id": "usda-fndds-2707165",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 50.0,
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
  "name": "Egg, whole, baked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 0.96,
    "energy_kcal": 143.0,
    "fat_g": 9.93,
    "fibre_g": 0.0,
    "folate_ug": 53.0,
    "iron_mg": 1.66,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 183.0,
    "potassium_mg": 132.0,
    "protein_g": 12.4,
    "salt_g": 0.61,
    "sat_fat_g": 3.19,
    "sodium_mg": 244.0,
    "sugar_g": 0.2,
    "vitamin_a_ug": 179.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707165",
  "state": "Baked",
  "subcategory": "Eggs and omelets",
  "tags": [
    "baked",
    "eggs-and-omelets",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
