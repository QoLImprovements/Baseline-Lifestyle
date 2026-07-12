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
  "id": "usda-fndds-2707246",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
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
      "gramsPerUnit": 170.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese and dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 1.75,
    "energy_kcal": 187.0,
    "fat_g": 14.9,
    "fibre_g": 0.2,
    "folate_ug": 49.0,
    "iron_mg": 1.38,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 203.0,
    "potassium_mg": 163.0,
    "protein_g": 11.6,
    "salt_g": 0.785,
    "sat_fat_g": 5.29,
    "sodium_mg": 314.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 1.7,
    "vitamin_k_ug": 49.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707246",
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
