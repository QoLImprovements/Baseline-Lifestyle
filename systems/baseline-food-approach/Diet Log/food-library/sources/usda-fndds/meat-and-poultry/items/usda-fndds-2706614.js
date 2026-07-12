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
  "id": "usda-fndds-2706614",
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
  "name": "Beef, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 13.8,
    "energy_kcal": 127.0,
    "fat_g": 5.04,
    "fibre_g": 1.1,
    "folate_ug": 45.0,
    "iron_mg": 1.12,
    "magnesium_mg": 15.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 72.0,
    "potassium_mg": 92.0,
    "protein_g": 6.65,
    "salt_g": 0.7625,
    "sat_fat_g": 1.11,
    "sodium_mg": 305.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706614",
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
