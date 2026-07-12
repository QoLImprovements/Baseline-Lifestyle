/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706445",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 258.0,
      "key": "1-serving-1-whole-breast",
      "kind": "unit",
      "label": "1 serving (1 whole breast)"
    }
  ],
  "name": "Chicken kiev",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 5.45,
    "energy_kcal": 280.0,
    "fat_g": 19.2,
    "fibre_g": 0.1,
    "folate_ug": 19.0,
    "iron_mg": 0.66,
    "magnesium_mg": 24.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 210.0,
    "potassium_mg": 257.0,
    "protein_g": 21.3,
    "salt_g": 1.61,
    "sat_fat_g": 7.42,
    "sodium_mg": 644.0,
    "sugar_g": 0.06,
    "vitamin_a_ug": 83.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706445",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "meat-and-poultry",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
