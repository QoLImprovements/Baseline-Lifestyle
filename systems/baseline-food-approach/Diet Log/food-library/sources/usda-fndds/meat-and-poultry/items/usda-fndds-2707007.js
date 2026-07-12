/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature-slider",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-miniature-slider",
      "kind": "unit",
      "label": "1 miniature/slider"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-regular-sandwich",
      "kind": "unit",
      "label": "1 regular sandwich"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-large-sandwich",
      "kind": "unit",
      "label": "1 large sandwich"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "1-submarine",
      "kind": "unit",
      "label": "1 submarine"
    }
  ],
  "name": "Chicken fillet sandwich, NS as to fried or grilled, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 27.5,
    "energy_kcal": 281.0,
    "fat_g": 13.5,
    "fibre_g": 1.7,
    "folate_ug": 52.0,
    "iron_mg": 1.78,
    "magnesium_mg": 25.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 154.0,
    "potassium_mg": 209.0,
    "protein_g": 12.2,
    "salt_g": 1.4275,
    "sat_fat_g": 3.07,
    "sodium_mg": 571.0,
    "sugar_g": 3.07,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.82,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707007",
  "state": "Fried",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
