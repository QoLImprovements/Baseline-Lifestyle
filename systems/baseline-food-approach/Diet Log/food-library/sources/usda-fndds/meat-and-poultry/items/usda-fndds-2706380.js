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
  "id": "usda-fndds-2706380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 129.0,
      "key": "1-steak-with-gravy",
      "kind": "unit",
      "label": "1 steak with gravy"
    },
    {
      "gramsPerUnit": 794.0,
      "key": "1-frozen-family-size-package-6-steaks",
      "kind": "unit",
      "label": "1 frozen family size package (6 steaks)"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Salisbury steak with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 6.78,
    "energy_kcal": 149.0,
    "fat_g": 10.5,
    "fibre_g": 1.0,
    "folate_ug": 13.0,
    "iron_mg": 0.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 127.0,
    "potassium_mg": 144.0,
    "protein_g": 6.98,
    "salt_g": 1.2725,
    "sat_fat_g": 3.98,
    "sodium_mg": 509.0,
    "sugar_g": 0.26,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706380",
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
