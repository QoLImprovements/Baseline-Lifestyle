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
  "id": "usda-fndds-2706397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Stewed dried beef, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 3.91,
    "energy_kcal": 258.0,
    "fat_g": 19.1,
    "fibre_g": 0.8,
    "folate_ug": 8.0,
    "iron_mg": 1.62,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 218.0,
    "protein_g": 17.7,
    "salt_g": 4.425,
    "sat_fat_g": 3.36,
    "sodium_mg": 1770.0,
    "sugar_g": 2.54,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 4.26,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706397",
  "state": "Dried",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "dried",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
