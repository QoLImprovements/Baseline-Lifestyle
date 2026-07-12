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
  "id": "usda-fndds-2706446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-breast-4-x-3-x-3-4",
      "kind": "unit",
      "label": "1 breast (4\" x 3\" x 3/4\")"
    }
  ],
  "name": "Stuffed chicken, drumstick or breast, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 6.51,
    "energy_kcal": 236.0,
    "fat_g": 10.5,
    "fibre_g": 0.3,
    "folate_ug": 24.0,
    "iron_mg": 1.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 293.0,
    "potassium_mg": 301.0,
    "protein_g": 28.4,
    "salt_g": 2.2525,
    "sat_fat_g": 3.48,
    "sodium_mg": 901.0,
    "sugar_g": 0.36,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706446",
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
