/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-regular",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2707323",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Egg sandwich on biscuit",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 21.6,
    "energy_kcal": 298.0,
    "fat_g": 18.8,
    "fibre_g": 1.2,
    "folate_ug": 61.0,
    "iron_mg": 1.98,
    "magnesium_mg": 15.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 375.0,
    "potassium_mg": 131.0,
    "protein_g": 10.7,
    "salt_g": 1.77,
    "sat_fat_g": 9.7,
    "sodium_mg": 708.0,
    "sugar_g": 2.34,
    "vitamin_a_ug": 120.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707323",
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
