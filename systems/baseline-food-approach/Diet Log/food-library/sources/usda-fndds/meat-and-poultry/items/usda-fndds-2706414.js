/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-piece-with-gravy",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706414",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-piece-with-gravy",
      "kind": "unit",
      "label": "1 piece with gravy"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 177.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Stewed goat, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 1.98,
    "energy_kcal": 265.0,
    "fat_g": 18.1,
    "fibre_g": 0.5,
    "folate_ug": 7.0,
    "iron_mg": 3.05,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 178.0,
    "potassium_mg": 385.0,
    "protein_g": 22.3,
    "salt_g": 1.88,
    "sat_fat_g": 3.75,
    "sodium_mg": 752.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 3.04,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706414",
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
