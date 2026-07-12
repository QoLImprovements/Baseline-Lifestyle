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
  "id": "usda-fndds-2706664",
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
  "name": "Venison or deer, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 13.6,
    "energy_kcal": 130.0,
    "fat_g": 5.11,
    "fibre_g": 1.5,
    "folate_ug": 47.0,
    "iron_mg": 1.67,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 166.0,
    "protein_g": 7.43,
    "salt_g": 0.7775,
    "sat_fat_g": 0.974,
    "sodium_mg": 311.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.43,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706664",
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
