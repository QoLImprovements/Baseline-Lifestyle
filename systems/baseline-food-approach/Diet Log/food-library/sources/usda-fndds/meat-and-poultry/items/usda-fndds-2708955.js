/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Rice, fried, with beef",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 27.6,
    "energy_kcal": 178.0,
    "fat_g": 4.06,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.77,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 66.0,
    "potassium_mg": 96.0,
    "protein_g": 7.86,
    "salt_g": 0.7825,
    "sat_fat_g": 0.931,
    "sodium_mg": 313.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708955",
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
