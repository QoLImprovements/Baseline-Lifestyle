/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-kfc-bowl",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 384.0,
      "key": "1-kfc-bowl",
      "kind": "unit",
      "label": "1 KFC Bowl"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, rice, corn, and cheese, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 14.4,
    "energy_kcal": 149.0,
    "fat_g": 7.85,
    "fibre_g": 0.7,
    "folate_ug": 21.0,
    "iron_mg": 0.7,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 103.0,
    "potassium_mg": 142.0,
    "protein_g": 5.62,
    "salt_g": 1.06,
    "sat_fat_g": 1.84,
    "sodium_mg": 424.0,
    "sugar_g": 1.02,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706694",
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
