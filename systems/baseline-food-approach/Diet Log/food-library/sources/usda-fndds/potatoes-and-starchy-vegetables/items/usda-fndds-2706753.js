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
  "id": "usda-fndds-2706753",
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
  "name": "Beef and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, gravy",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 6.47,
    "energy_kcal": 122.0,
    "fat_g": 7.34,
    "fibre_g": 0.9,
    "folate_ug": 12.0,
    "iron_mg": 0.81,
    "magnesium_mg": 13.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 71.0,
    "potassium_mg": 139.0,
    "protein_g": 8.11,
    "salt_g": 0.78,
    "sat_fat_g": 1.64,
    "sodium_mg": 312.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 10.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706753",
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
