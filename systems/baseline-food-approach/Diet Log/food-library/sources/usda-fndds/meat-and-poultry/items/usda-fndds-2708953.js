/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, fried, with chicken",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 27.6,
    "energy_kcal": 173.0,
    "fat_g": 3.66,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.5,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 100.0,
    "protein_g": 7.28,
    "salt_g": 0.8975,
    "sat_fat_g": 0.656,
    "sodium_mg": 359.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708953",
  "state": "Fried",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried",
    "fried-rice-and-lo-chow-mein",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
