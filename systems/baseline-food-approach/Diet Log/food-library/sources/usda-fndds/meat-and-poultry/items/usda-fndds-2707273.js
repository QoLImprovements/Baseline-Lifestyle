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
  "id": "usda-fndds-2707273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese, meat, tomatoes, and dark-green vegetables, NS as to fat",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 1.81,
    "energy_kcal": 190.0,
    "fat_g": 15.0,
    "fibre_g": 0.2,
    "folate_ug": 43.0,
    "iron_mg": 1.32,
    "magnesium_mg": 17.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 204.0,
    "potassium_mg": 169.0,
    "protein_g": 12.1,
    "salt_g": 0.9025,
    "sat_fat_g": 5.29,
    "sodium_mg": 361.0,
    "sugar_g": 0.74,
    "vitamin_a_ug": 183.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 26.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707273",
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
