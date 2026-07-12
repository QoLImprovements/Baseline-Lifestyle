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
  "id": "usda-fndds-2706516",
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
  "name": "Ham or pork and potatoes with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.7,
    "energy_kcal": 126.0,
    "fat_g": 6.33,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 0.36,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 242.0,
    "protein_g": 5.4,
    "salt_g": 0.7525,
    "sat_fat_g": 1.28,
    "sodium_mg": 301.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706516",
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
