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
  "id": "usda-fndds-2706877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed chitterlings, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 3.83,
    "energy_kcal": 214.0,
    "fat_g": 18.5,
    "fibre_g": 0.9,
    "folate_ug": 10.0,
    "iron_mg": 1.16,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 140.0,
    "protein_g": 8.38,
    "salt_g": 0.1375,
    "sat_fat_g": 6.84,
    "sodium_mg": 55.0,
    "sugar_g": 2.04,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 23.7,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706877",
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
