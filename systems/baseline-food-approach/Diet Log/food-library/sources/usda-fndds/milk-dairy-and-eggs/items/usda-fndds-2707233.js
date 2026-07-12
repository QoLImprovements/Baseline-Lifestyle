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
  "id": "usda-fndds-2707233",
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
      "gramsPerUnit": 70.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with dark-green vegetables, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 1.42,
    "energy_kcal": 129.0,
    "fat_g": 8.71,
    "fibre_g": 0.3,
    "folate_ug": 57.0,
    "iron_mg": 1.58,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 173.0,
    "protein_g": 11.1,
    "salt_g": 0.5625,
    "sat_fat_g": 2.78,
    "sodium_mg": 225.0,
    "sugar_g": 0.33,
    "vitamin_a_ug": 188.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 1.13,
    "vitamin_k_ug": 54.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707233",
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
