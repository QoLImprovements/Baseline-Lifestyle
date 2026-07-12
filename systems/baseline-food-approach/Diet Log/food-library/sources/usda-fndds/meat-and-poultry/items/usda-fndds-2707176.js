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
  "id": "usda-fndds-2707176",
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
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Duck egg, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 1.36,
    "energy_kcal": 224.0,
    "fat_g": 18.6,
    "fibre_g": 0.0,
    "folate_ug": 56.0,
    "iron_mg": 3.6,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 206.0,
    "potassium_mg": 208.0,
    "protein_g": 12.0,
    "salt_g": 0.66,
    "sat_fat_g": 4.93,
    "sodium_mg": 264.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.1,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707176",
  "state": "Cooked",
  "subcategory": "Eggs and omelets",
  "tags": [
    "cooked",
    "eggs-and-omelets",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
