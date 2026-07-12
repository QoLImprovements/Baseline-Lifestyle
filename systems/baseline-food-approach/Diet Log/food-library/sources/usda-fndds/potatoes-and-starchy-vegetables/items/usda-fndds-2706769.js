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
  "id": "usda-fndds-2706769",
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
  "name": "Pork and vegetables excluding carrots, broccoli, and dark-green leafy; no potatoes, no sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 5.52,
    "energy_kcal": 124.0,
    "fat_g": 7.03,
    "fibre_g": 1.2,
    "folate_ug": 13.0,
    "iron_mg": 0.6,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 221.0,
    "protein_g": 10.1,
    "salt_g": 0.7975,
    "sat_fat_g": 1.66,
    "sodium_mg": 319.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706769",
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
