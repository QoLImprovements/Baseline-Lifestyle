/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-egg",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707228",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-egg",
      "kind": "unit",
      "label": "1 egg"
    },
    {
      "gramsPerUnit": 160.0,
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
  "name": "Egg omelet or scrambled egg, with cheese and meat, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 147.0,
    "carbs_g": 1.5,
    "energy_kcal": 177.0,
    "fat_g": 12.8,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.48,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 236.0,
    "potassium_mg": 153.0,
    "protein_g": 14.0,
    "salt_g": 1.01,
    "sat_fat_g": 4.98,
    "sodium_mg": 404.0,
    "sugar_g": 0.57,
    "vitamin_a_ug": 177.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.97,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707228",
  "state": "Scrambled",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "meat-and-poultry",
    "scrambled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
