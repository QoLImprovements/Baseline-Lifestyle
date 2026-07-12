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
  "id": "usda-fndds-2707192",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 11.8,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Egg casserole with bread, cheese, milk and meat",
  "nutritionPerBasis": {
    "calcium_mg": 142.0,
    "carbs_g": 10.2,
    "energy_kcal": 175.0,
    "fat_g": 9.75,
    "fibre_g": 0.4,
    "folate_ug": 26.0,
    "iron_mg": 1.15,
    "magnesium_mg": 17.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 178.0,
    "potassium_mg": 184.0,
    "protein_g": 11.4,
    "salt_g": 1.05,
    "sat_fat_g": 3.9,
    "sodium_mg": 420.0,
    "sugar_g": 2.77,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707192",
  "state": "Unspecified",
  "subcategory": "Eggs and omelets",
  "tags": [
    "eggs-and-omelets",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
