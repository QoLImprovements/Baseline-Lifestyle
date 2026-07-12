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
  "id": "usda-fndds-2706402",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ham stroganoff",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 5.19,
    "energy_kcal": 131.0,
    "fat_g": 8.85,
    "fibre_g": 0.7,
    "folate_ug": 6.0,
    "iron_mg": 0.43,
    "magnesium_mg": 12.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 113.0,
    "potassium_mg": 175.0,
    "protein_g": 7.62,
    "salt_g": 1.7575,
    "sat_fat_g": 3.56,
    "sodium_mg": 703.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706402",
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
