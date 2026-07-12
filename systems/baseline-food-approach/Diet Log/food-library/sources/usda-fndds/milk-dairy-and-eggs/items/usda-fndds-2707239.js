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
  "id": "usda-fndds-2707239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with vegetables other than dark green and/or tomatoes, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 1.58,
    "energy_kcal": 129.0,
    "fat_g": 8.69,
    "fibre_g": 0.3,
    "folate_ug": 51.0,
    "iron_mg": 1.48,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 169.0,
    "protein_g": 11.2,
    "salt_g": 0.5325,
    "sat_fat_g": 2.78,
    "sodium_mg": 213.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 156.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707239",
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
