/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beef, excludes ground",
  "id": "usda-fndds-2705911",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    }
  ],
  "name": "Mock chicken legs",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 8.04,
    "energy_kcal": 242.0,
    "fat_g": 13.6,
    "fibre_g": 0.3,
    "folate_ug": 19.0,
    "iron_mg": 1.11,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 182.0,
    "potassium_mg": 254.0,
    "protein_g": 21.5,
    "salt_g": 0.7825,
    "sat_fat_g": 2.81,
    "sodium_mg": 313.0,
    "sugar_g": 0.13,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.93,
    "vitamin_k_ug": 9.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705911",
  "state": "Unspecified",
  "subcategory": "Beef, excludes ground",
  "tags": [
    "beef-excludes-ground",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
