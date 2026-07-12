/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Liver and organ meats",
  "id": "usda-fndds-2706155",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Liver, paste or pate",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 6.55,
    "energy_kcal": 201.0,
    "fat_g": 13.1,
    "fibre_g": 0.0,
    "folate_ug": 321.0,
    "iron_mg": 9.19,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 175.0,
    "potassium_mg": 95.0,
    "protein_g": 13.4,
    "salt_g": 0.965,
    "sat_fat_g": 4.0,
    "sodium_mg": 386.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 217.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706155",
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
