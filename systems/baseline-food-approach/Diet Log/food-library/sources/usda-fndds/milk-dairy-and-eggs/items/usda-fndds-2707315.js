/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707315",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    }
  ],
  "name": "Egg sandwich on English muffin",
  "nutritionPerBasis": {
    "calcium_mg": 229.0,
    "carbs_g": 20.6,
    "energy_kcal": 230.0,
    "fat_g": 11.2,
    "fibre_g": 1.5,
    "folate_ug": 64.0,
    "iron_mg": 2.46,
    "magnesium_mg": 19.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 200.0,
    "potassium_mg": 122.0,
    "protein_g": 11.7,
    "salt_g": 1.11,
    "sat_fat_g": 4.66,
    "sodium_mg": 444.0,
    "sugar_g": 2.07,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707315",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
