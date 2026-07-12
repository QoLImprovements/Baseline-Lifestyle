/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709829",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Seven-layer salad, lettuce salad made with a combination of onion, celery, green pepper, peas, mayonnaise, cheese, eggs, and/or bacon",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 5.79,
    "energy_kcal": 229.0,
    "fat_g": 20.7,
    "fibre_g": 1.2,
    "folate_ug": 27.0,
    "iron_mg": 0.43,
    "magnesium_mg": 10.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 77.0,
    "potassium_mg": 123.0,
    "protein_g": 4.7,
    "salt_g": 0.6625,
    "sat_fat_g": 4.37,
    "sodium_mg": 265.0,
    "sugar_g": 3.19,
    "vitamin_a_ug": 57.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 47.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709829",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "meat-and-poultry",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
