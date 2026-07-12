/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 311.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; mushroom sauce",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 15.7,
    "energy_kcal": 133.0,
    "fat_g": 5.23,
    "fibre_g": 0.8,
    "folate_ug": 30.0,
    "iron_mg": 0.94,
    "magnesium_mg": 13.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 65.0,
    "potassium_mg": 106.0,
    "protein_g": 5.81,
    "salt_g": 0.765,
    "sat_fat_g": 1.13,
    "sodium_mg": 306.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.67,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706623",
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
