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
  "id": "usda-fndds-2706612",
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
  "name": "Beef, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.6,
    "energy_kcal": 125.0,
    "fat_g": 5.06,
    "fibre_g": 1.2,
    "folate_ug": 42.0,
    "iron_mg": 1.06,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 76.0,
    "potassium_mg": 103.0,
    "protein_g": 6.6,
    "salt_g": 0.7575,
    "sat_fat_g": 1.16,
    "sodium_mg": 303.0,
    "sugar_g": 1.13,
    "vitamin_a_ug": 82.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 15.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706612",
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
