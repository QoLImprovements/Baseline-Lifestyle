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
  "id": "usda-fndds-2706508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-croquette-1-1-2-dia-2-high",
      "kind": "unit",
      "label": "1 croquette (1-1/2\" dia, 2\" high)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Ham croquette",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 2.6,
    "energy_kcal": 273.0,
    "fat_g": 20.7,
    "fibre_g": 0.2,
    "folate_ug": 11.0,
    "iron_mg": 1.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 228.0,
    "potassium_mg": 322.0,
    "protein_g": 18.0,
    "salt_g": 2.95,
    "sat_fat_g": 4.53,
    "sodium_mg": 1180.0,
    "sugar_g": 0.49,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 23.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706508",
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
