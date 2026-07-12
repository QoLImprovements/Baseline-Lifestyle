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
  "id": "usda-fndds-2706685",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Chicken or turkey, noodles, and vegetables including carrots, broccoli, and/or dark-green leafy; tomato-based sauce",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 13.6,
    "energy_kcal": 130.0,
    "fat_g": 5.84,
    "fibre_g": 1.5,
    "folate_ug": 46.0,
    "iron_mg": 1.1,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 161.0,
    "protein_g": 6.16,
    "salt_g": 0.87,
    "sat_fat_g": 0.942,
    "sodium_mg": 348.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 88.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706685",
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
