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
  "id": "usda-fndds-2706416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-slice-with-sauce",
      "kind": "unit",
      "label": "1 slice with sauce"
    }
  ],
  "name": "Veal Marsala",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 6.74,
    "energy_kcal": 175.0,
    "fat_g": 8.54,
    "fibre_g": 0.5,
    "folate_ug": 17.0,
    "iron_mg": 1.05,
    "magnesium_mg": 24.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 142.0,
    "potassium_mg": 211.0,
    "protein_g": 17.8,
    "salt_g": 0.3675,
    "sat_fat_g": 3.59,
    "sodium_mg": 147.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 16.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706416",
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
