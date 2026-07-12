/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 105.0,
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
  "name": "Egg omelet or scrambled egg, with cheese, meat, and dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 1.6,
    "energy_kcal": 199.0,
    "fat_g": 15.8,
    "fibre_g": 0.1,
    "folate_ug": 44.0,
    "iron_mg": 1.38,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 214.0,
    "potassium_mg": 163.0,
    "protein_g": 12.7,
    "salt_g": 0.9525,
    "sat_fat_g": 5.59,
    "sodium_mg": 381.0,
    "sugar_g": 0.58,
    "vitamin_a_ug": 191.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 27.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707270",
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
