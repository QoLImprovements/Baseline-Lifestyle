/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706706",
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
      "gramsPerUnit": 244.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, stuffing, and vegetables including carrots, broccoli, and/or dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 11.3,
    "energy_kcal": 131.0,
    "fat_g": 7.18,
    "fibre_g": 1.0,
    "folate_ug": 25.0,
    "iron_mg": 0.66,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 111.0,
    "protein_g": 5.46,
    "salt_g": 0.95,
    "sat_fat_g": 1.47,
    "sodium_mg": 380.0,
    "sugar_g": 1.52,
    "vitamin_a_ug": 136.0,
    "vitamin_c_mg": 3.9,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706706",
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
