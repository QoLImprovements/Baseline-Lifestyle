/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2710140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-piece-4-x-2-x-2",
      "kind": "unit",
      "label": "1 piece (4\" x 2\" x 2\")"
    }
  ],
  "name": "Ripe plantain meat pie, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 22.0,
    "energy_kcal": 315.0,
    "fat_g": 20.2,
    "fibre_g": 2.1,
    "folate_ug": 29.0,
    "iron_mg": 1.9,
    "magnesium_mg": 42.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 160.0,
    "potassium_mg": 554.0,
    "protein_g": 12.8,
    "salt_g": 1.46,
    "sat_fat_g": 4.89,
    "sodium_mg": 584.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 2.58,
    "vitamin_k_ug": 39.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710140",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-mixed-dishes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
