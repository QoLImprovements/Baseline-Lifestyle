/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-yields",
  "description": "Liver and organ meats",
  "id": "usda-fndds-2706154",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "1-liver",
      "kind": "unit",
      "label": "1 liver"
    }
  ],
  "name": "Liver, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 6.48,
    "energy_kcal": 189.0,
    "fat_g": 8.69,
    "fibre_g": 0.2,
    "folate_ug": 575.0,
    "iron_mg": 10.1,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 312.0,
    "potassium_mg": 232.0,
    "protein_g": 20.0,
    "salt_g": 1.1325,
    "sat_fat_g": 2.56,
    "sodium_mg": 453.0,
    "sugar_g": 0.02,
    "vitamin_a_ug": 2810.0,
    "vitamin_c_mg": 16.3,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706154",
  "state": "Unspecified",
  "subcategory": "Liver and organ meats",
  "tags": [
    "liver-and-organ-meats",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
