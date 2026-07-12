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
  "id": "usda-fndds-2707275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
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
  "name": "Egg omelet or scrambled egg, with cheese, meat, and vegetables other than dark-green and/or tomatoes, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 1.75,
    "energy_kcal": 169.0,
    "fat_g": 12.0,
    "fibre_g": 0.1,
    "folate_ug": 44.0,
    "iron_mg": 1.4,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 228.0,
    "potassium_mg": 169.0,
    "protein_g": 13.4,
    "salt_g": 0.9525,
    "sat_fat_g": 4.68,
    "sodium_mg": 381.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707275",
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
