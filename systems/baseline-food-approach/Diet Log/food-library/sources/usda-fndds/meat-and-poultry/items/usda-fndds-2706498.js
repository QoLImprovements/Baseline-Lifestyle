/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 310.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1240.0,
      "key": "1-package-prepared",
      "kind": "unit",
      "label": "1 package, prepared"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Beef and rice with cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 14.7,
    "energy_kcal": 142.0,
    "fat_g": 5.35,
    "fibre_g": 0.4,
    "folate_ug": 29.0,
    "iron_mg": 1.35,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 79.0,
    "potassium_mg": 106.0,
    "protein_g": 8.08,
    "salt_g": 0.745,
    "sat_fat_g": 2.27,
    "sodium_mg": 298.0,
    "sugar_g": 0.16,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706498",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
