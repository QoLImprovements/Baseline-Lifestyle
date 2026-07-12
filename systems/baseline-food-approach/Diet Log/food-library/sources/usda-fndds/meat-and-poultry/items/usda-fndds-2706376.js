/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-individual-container",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2706376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    }
  ],
  "name": "Chili with meat, canned",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 10.8,
    "energy_kcal": 106.0,
    "fat_g": 3.38,
    "fibre_g": 3.2,
    "folate_ug": 53.0,
    "iron_mg": 1.84,
    "magnesium_mg": 25.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 99.0,
    "potassium_mg": 275.0,
    "protein_g": 8.5,
    "salt_g": 0.8925,
    "sat_fat_g": 1.24,
    "sodium_mg": 357.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706376",
  "state": "Canned",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "canned",
    "meat-and-poultry",
    "meat-mixed-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
