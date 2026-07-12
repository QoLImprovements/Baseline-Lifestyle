/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706749",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Beef salad",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 2.9,
    "energy_kcal": 261.0,
    "fat_g": 19.3,
    "fibre_g": 0.4,
    "folate_ug": 15.0,
    "iron_mg": 1.58,
    "magnesium_mg": 15.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 118.0,
    "potassium_mg": 206.0,
    "protein_g": 17.8,
    "salt_g": 0.845,
    "sat_fat_g": 3.85,
    "sodium_mg": 338.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 46.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706749",
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
