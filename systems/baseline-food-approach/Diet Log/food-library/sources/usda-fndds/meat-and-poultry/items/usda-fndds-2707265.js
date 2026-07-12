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
  "id": "usda-fndds-2707265",
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
      "gramsPerUnit": 210.0,
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
  "name": "Egg omelet or scrambled egg, with cheese, meat, and tomatoes, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 1.66,
    "energy_kcal": 199.0,
    "fat_g": 15.8,
    "fibre_g": 0.1,
    "folate_ug": 41.0,
    "iron_mg": 1.34,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 213.0,
    "potassium_mg": 153.0,
    "protein_g": 12.6,
    "salt_g": 0.94,
    "sat_fat_g": 5.59,
    "sodium_mg": 376.0,
    "sugar_g": 0.71,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707265",
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
