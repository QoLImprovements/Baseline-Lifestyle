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
  "id": "usda-fndds-2706693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey, rice, and vegetables excluding carrots, broccoli, and dark-green leafy; gravy",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.0,
    "energy_kcal": 135.0,
    "fat_g": 5.46,
    "fibre_g": 0.7,
    "folate_ug": 32.0,
    "iron_mg": 0.75,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 98.0,
    "protein_g": 5.25,
    "salt_g": 0.8475,
    "sat_fat_g": 0.922,
    "sodium_mg": 339.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.82,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706693",
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
