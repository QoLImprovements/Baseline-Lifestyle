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
  "id": "usda-fndds-2706652",
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
  "name": "Pork, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 16.1,
    "energy_kcal": 133.0,
    "fat_g": 5.07,
    "fibre_g": 1.0,
    "folate_ug": 33.0,
    "iron_mg": 1.03,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 185.0,
    "protein_g": 5.64,
    "salt_g": 0.76,
    "sat_fat_g": 0.992,
    "sodium_mg": 304.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 7.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706652",
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
