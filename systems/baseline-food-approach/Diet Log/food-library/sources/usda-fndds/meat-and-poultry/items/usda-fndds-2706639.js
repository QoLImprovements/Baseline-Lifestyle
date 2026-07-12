/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706639",
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
  "name": "Sausage, noodles, and vegetables excluding carrots, broccoli, and dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 15.3,
    "energy_kcal": 131.0,
    "fat_g": 5.69,
    "fibre_g": 1.4,
    "folate_ug": 46.0,
    "iron_mg": 1.19,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 72.0,
    "potassium_mg": 180.0,
    "protein_g": 5.26,
    "salt_g": 0.9525,
    "sat_fat_g": 1.53,
    "sodium_mg": 381.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706639",
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
