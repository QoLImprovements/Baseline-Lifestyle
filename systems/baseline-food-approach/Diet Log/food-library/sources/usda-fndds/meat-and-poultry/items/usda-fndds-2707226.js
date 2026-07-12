/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Eggs and omelets",
  "id": "usda-fndds-2707226",
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
    }
  ],
  "name": "Egg omelet or scrambled egg, with cheese and meat, made with cooking spray",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 1.65,
    "energy_kcal": 182.0,
    "fat_g": 13.3,
    "fibre_g": 0.0,
    "folate_ug": 44.0,
    "iron_mg": 1.46,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 234.0,
    "potassium_mg": 152.0,
    "protein_g": 13.9,
    "salt_g": 1.005,
    "sat_fat_g": 4.98,
    "sodium_mg": 402.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 176.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707226",
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
