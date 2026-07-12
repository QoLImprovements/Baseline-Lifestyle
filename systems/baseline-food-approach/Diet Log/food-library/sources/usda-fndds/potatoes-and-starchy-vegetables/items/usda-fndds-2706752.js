/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706752",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef and vegetables including carrots, broccoli, and/or dark-green leafy; no potatoes, gravy",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 4.5,
    "energy_kcal": 115.0,
    "fat_g": 7.34,
    "fibre_g": 1.0,
    "folate_ug": 14.0,
    "iron_mg": 0.82,
    "magnesium_mg": 10.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 67.0,
    "potassium_mg": 130.0,
    "protein_g": 8.06,
    "salt_g": 0.775,
    "sat_fat_g": 1.64,
    "sodium_mg": 310.0,
    "sugar_g": 1.0,
    "vitamin_a_ug": 140.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 20.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706752",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
