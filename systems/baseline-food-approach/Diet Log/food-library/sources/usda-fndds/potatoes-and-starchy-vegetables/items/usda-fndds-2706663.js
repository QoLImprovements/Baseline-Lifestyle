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
  "id": "usda-fndds-2706663",
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
  "name": "Venison or deer, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 12.3,
    "energy_kcal": 127.0,
    "fat_g": 6.1,
    "fibre_g": 1.3,
    "folate_ug": 11.0,
    "iron_mg": 0.92,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 228.0,
    "protein_g": 6.01,
    "salt_g": 0.78,
    "sat_fat_g": 1.12,
    "sodium_mg": 312.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706663",
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
