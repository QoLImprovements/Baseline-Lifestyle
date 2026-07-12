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
  "id": "usda-fndds-2706658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lamb or mutton, rice, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 15.2,
    "energy_kcal": 133.0,
    "fat_g": 5.5,
    "fibre_g": 0.8,
    "folate_ug": 35.0,
    "iron_mg": 0.92,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 99.0,
    "protein_g": 5.02,
    "salt_g": 0.7875,
    "sat_fat_g": 1.64,
    "sodium_mg": 315.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 11.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706658",
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
