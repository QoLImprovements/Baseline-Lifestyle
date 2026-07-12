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
  "id": "usda-fndds-2708802",
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
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lo mein, with beef",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 16.2,
    "energy_kcal": 129.0,
    "fat_g": 2.77,
    "fibre_g": 1.0,
    "folate_ug": 23.0,
    "iron_mg": 1.43,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 89.0,
    "potassium_mg": 160.0,
    "protein_g": 9.73,
    "salt_g": 0.895,
    "sat_fat_g": 0.702,
    "sodium_mg": 358.0,
    "sugar_g": 2.11,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708802",
  "state": "Unspecified",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried-rice-and-lo-chow-mein",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
