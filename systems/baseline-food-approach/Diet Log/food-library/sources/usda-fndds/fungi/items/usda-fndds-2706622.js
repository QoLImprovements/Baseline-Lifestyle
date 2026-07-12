/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 14.7,
    "energy_kcal": 130.0,
    "fat_g": 5.23,
    "fibre_g": 0.9,
    "folate_ug": 31.0,
    "iron_mg": 0.94,
    "magnesium_mg": 11.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 62.0,
    "potassium_mg": 101.0,
    "protein_g": 5.78,
    "salt_g": 0.7775,
    "sat_fat_g": 1.13,
    "sodium_mg": 311.0,
    "sugar_g": 0.97,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 15.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706622",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "fungi",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
