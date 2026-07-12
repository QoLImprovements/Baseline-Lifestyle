/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Poultry mixed dishes",
  "id": "usda-fndds-2706783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 202.0,
      "key": "1-shishkabob",
      "kind": "unit",
      "label": "1 shishkabob"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey shish kabob with vegetables, excluding potatoes",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 5.06,
    "energy_kcal": 104.0,
    "fat_g": 3.69,
    "fibre_g": 0.8,
    "folate_ug": 16.0,
    "iron_mg": 0.5,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 133.0,
    "potassium_mg": 250.0,
    "protein_g": 13.0,
    "salt_g": 0.865,
    "sat_fat_g": 0.83,
    "sodium_mg": 346.0,
    "sugar_g": 2.37,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706783",
  "state": "Unspecified",
  "subcategory": "Poultry mixed dishes",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "poultry-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
