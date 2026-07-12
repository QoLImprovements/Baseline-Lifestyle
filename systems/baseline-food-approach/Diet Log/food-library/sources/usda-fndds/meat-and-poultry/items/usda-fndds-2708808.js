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
  "id": "usda-fndds-2708808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pad Thai with meat",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 14.7,
    "energy_kcal": 160.0,
    "fat_g": 7.92,
    "fibre_g": 1.2,
    "folate_ug": 24.0,
    "iron_mg": 0.96,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 79.0,
    "potassium_mg": 144.0,
    "protein_g": 8.18,
    "salt_g": 0.8425,
    "sat_fat_g": 1.58,
    "sodium_mg": 337.0,
    "sugar_g": 4.17,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 20.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708808",
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
