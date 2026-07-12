/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Turkey, duck, other poultry",
  "id": "usda-fndds-2705928",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ostrich",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 0.0,
    "energy_kcal": 174.0,
    "fat_g": 7.01,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 3.4,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 222.0,
    "potassium_mg": 320.0,
    "protein_g": 25.9,
    "salt_g": 1.005,
    "sat_fat_g": 1.78,
    "sodium_mg": 402.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705928",
  "state": "Unspecified",
  "subcategory": "Turkey, duck, other poultry",
  "tags": [
    "meat-and-poultry",
    "turkey-duck-other-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
