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
  "id": "usda-fndds-2706632",
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
      "gramsPerUnit": 187.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef, dumplings, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 12.8,
    "energy_kcal": 130.0,
    "fat_g": 6.16,
    "fibre_g": 0.8,
    "folate_ug": 19.0,
    "iron_mg": 1.17,
    "magnesium_mg": 12.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 81.0,
    "potassium_mg": 112.0,
    "protein_g": 6.19,
    "salt_g": 0.7525,
    "sat_fat_g": 1.43,
    "sodium_mg": 301.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706632",
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
