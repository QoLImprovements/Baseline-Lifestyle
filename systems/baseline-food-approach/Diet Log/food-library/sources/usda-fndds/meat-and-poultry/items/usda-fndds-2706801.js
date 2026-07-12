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
  "id": "usda-fndds-2706801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 226.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken or turkey salad with egg",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 2.73,
    "energy_kcal": 228.0,
    "fat_g": 18.1,
    "fibre_g": 0.4,
    "folate_ug": 17.0,
    "iron_mg": 0.53,
    "magnesium_mg": 14.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 134.0,
    "potassium_mg": 200.0,
    "protein_g": 13.8,
    "salt_g": 1.1325,
    "sat_fat_g": 3.24,
    "sodium_mg": 453.0,
    "sugar_g": 2.01,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 41.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706801",
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
