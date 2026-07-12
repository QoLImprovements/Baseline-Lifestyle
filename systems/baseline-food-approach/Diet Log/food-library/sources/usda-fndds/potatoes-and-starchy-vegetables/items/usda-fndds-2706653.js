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
  "id": "usda-fndds-2706653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ham, potatoes, and vegetables excluding carrots, broccoli, and dark-green leafy; no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 15.0,
    "energy_kcal": 126.0,
    "fat_g": 5.06,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.56,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 316.0,
    "protein_g": 5.56,
    "salt_g": 1.1425,
    "sat_fat_g": 1.03,
    "sodium_mg": 457.0,
    "sugar_g": 1.12,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706653",
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
