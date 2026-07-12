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
  "id": "usda-fndds-2706816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Asian chicken or turkey garden salad, chicken and/or turkey, lettuce, fruit, nuts, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 9.5,
    "energy_kcal": 130.0,
    "fat_g": 5.46,
    "fibre_g": 1.9,
    "folate_ug": 36.0,
    "iron_mg": 0.96,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 280.0,
    "protein_g": 11.4,
    "salt_g": 0.44,
    "sat_fat_g": 0.946,
    "sodium_mg": 176.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 1.78,
    "vitamin_k_ug": 51.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706816",
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
