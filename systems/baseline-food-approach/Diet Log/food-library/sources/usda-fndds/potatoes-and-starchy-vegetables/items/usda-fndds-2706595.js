/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, potatoes, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 11.2,
    "energy_kcal": 129.0,
    "fat_g": 7.16,
    "fibre_g": 1.4,
    "folate_ug": 12.0,
    "iron_mg": 0.59,
    "magnesium_mg": 14.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 55.0,
    "potassium_mg": 215.0,
    "protein_g": 5.23,
    "salt_g": 0.755,
    "sat_fat_g": 1.33,
    "sodium_mg": 302.0,
    "sugar_g": 0.94,
    "vitamin_a_ug": 78.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 1.27,
    "vitamin_k_ug": 15.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706595",
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
