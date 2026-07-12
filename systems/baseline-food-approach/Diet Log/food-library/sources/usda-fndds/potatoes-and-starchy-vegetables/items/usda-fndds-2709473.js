/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "French fries and other fried white potatoes",
  "id": "usda-fndds-2709473",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, home fries, from restaurant / fast food",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 17.9,
    "energy_kcal": 213.0,
    "fat_g": 15.2,
    "fibre_g": 1.6,
    "folate_ug": 16.0,
    "iron_mg": 0.61,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 388.0,
    "protein_g": 1.87,
    "salt_g": 0.99,
    "sat_fat_g": 4.96,
    "sodium_mg": 396.0,
    "sugar_g": 1.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 24.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709473",
  "state": "Unspecified",
  "subcategory": "French fries and other fried white potatoes",
  "tags": [
    "french-fries-and-other-fried-white-potatoes",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
